/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import api from '../utils/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(() => localStorage.getItem('userRole') || null);
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pending 2FA challenge state
  const [pending2FA, setPending2FA] = useState(null);

  // ── Persist auth state ──────────────────────────────────────────────────
  const storeAuth = (authToken, userData) => {
    const normalizedUser = userData || {};
    localStorage.setItem('token', authToken);
    localStorage.setItem('userRole', normalizedUser.role || '');
    localStorage.setItem('userName', normalizedUser.name || '');
    localStorage.setItem('userEmail', normalizedUser.email || '');
    localStorage.setItem('userId', normalizedUser.id || normalizedUser._id || '');
    setToken(authToken);
    setRole(normalizedUser.role || null);
    setUser(normalizedUser);
  };

  const clearAuth = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userId');
    setToken(null);
    setRole(null);
    setUser(null);
    setPending2FA(null);
  };

  // ── Hydrate on mount — check stored token ───────────────────────────────
  const hydrate = useCallback(async () => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
      setLoading(false);
      return;
    }

    try {
      const res = await api.get('/auth/me');
      const userData = res.data?.data;
      if (userData) {
        setUser(userData);
        setRole(userData.role);
        setToken(storedToken);
      } else {
        clearAuth();
      }
    } catch {
      // Token expired or invalid
      clearAuth();
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  // ── Login → triggers 2FA ────────────────────────────────────────────────
  const login = async (email, password) => {
    try {
      setError(null);
      setLoading(true);
      const res = await api.post('/auth/login', { email, password });

      if (res.data?.require2FA || res.data?.requires2FA || res.data?.data?.requires2FA) {
        // Backend returns userId + role but no token yet
        setPending2FA({
          userId: res.data.userId || res.data?.data?.userId,
          role: res.data.role || res.data?.data?.role,
          devOtp: res.data?.devOtp, // only in dev mode
        });
        return { success: true, requires2FA: true, devOtp: res.data?.devOtp };
      }

      // Direct login (no 2FA)
      if (res.data?.token) {
        storeAuth(res.data.token, res.data.user || res.data.data);
        return { success: true, requires2FA: false, role: res.data.role || res.data?.user?.role || res.data?.data?.role };
      }

      return { success: false, error: 'Unexpected response' };
    } catch (err) {
      const message = err.response?.data?.message || err.response?.data?.error || 'Login failed';
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  // ── Verify 2FA → get token ──────────────────────────────────────────────
  const verify2FA = async (otp) => {
    if (!pending2FA?.userId) {
      return { success: false, error: 'No pending 2FA challenge' };
    }

    try {
      setError(null);
      setLoading(true);
      const res = await api.post('/auth/verify-2fa', {
        userId: pending2FA.userId,
        otp: otp,
      });

      if (res.data?.token) {
        storeAuth(res.data.token, res.data.user || res.data.data);
        setPending2FA(null);
        return { success: true, role: res.data.role || res.data?.user?.role || res.data?.data?.role };
      }

      return { success: false, error: 'Verification failed' };
    } catch (err) {
      const message = err.response?.data?.message || err.response?.data?.error || 'OTP verification failed';
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  // ── Register ────────────────────────────────────────────────────────────
  const register = async (userData) => {
    try {
      setError(null);
      setLoading(true);
      const res = await api.post('/auth/register', userData);
      if (res.data?.token) {
        storeAuth(res.data.token, res.data.user || res.data.data);
        return { success: true, data: res.data.user || res.data.data };
      }
      return { success: true, data: res.data };
    } catch (err) {
      const message = err.response?.data?.message || err.response?.data?.error || 'Registration failed';
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  // ── Get profile ─────────────────────────────────────────────────────────
  const fetchProfile = async () => {
    try {
      const res = await api.get('/auth/me');
      const userData = res.data?.data;
      if (userData) {
        setUser(userData);
        setRole(userData.role);
      }
      return userData;
    } catch {
      return null;
    }
  };

  // ── User management (admin) ─────────────────────────────────────────────
  const fetchAllUsers = async () => {
    try {
      setLoading(true);
      const res = await api.get('/auth/users');
      setLoading(false);
      return { success: true, data: res.data.data };
    } catch (err) {
      setLoading(false);
      return { success: false, error: err.response?.data?.error || 'Failed to fetch users', data: [] };
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/auth/users/${id}`);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.response?.data?.error || 'Failed to delete user' };
    }
  };

  // ── Logout ──────────────────────────────────────────────────────────────
  const logout = () => {
    clearAuth();
  };

  // Legacy compat — switchRole for role-based nav
  const switchRole = (newRole) => {
    setRole(newRole);
    if (newRole) {
      localStorage.setItem('userRole', newRole);
    } else {
      localStorage.removeItem('userRole');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        token,
        loading,
        error,
        pending2FA,
        login,
        verify2FA,
        register,
        logout,
        switchRole,
        fetchProfile,
        fetchAllUsers,
        deleteUser,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
