import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(() => {
    // Persist role in localStorage
    return localStorage.getItem('userRole') || null;
  });

  const switchRole = (newRole) => {
    setRole(newRole);
    if (newRole) {
      localStorage.setItem('userRole', newRole);
    } else {
      localStorage.removeItem('userRole');
    }
  };

  const logout = () => {
    switchRole(null);
  };

  const fetchAllUsers = async () => {
    try {
      const res = await api.get('/auth/users');
      return { success: true, data: res.data.data };
    } catch (err) {
      return { success: false, error: err.response?.data?.error || 'Failed to fetch users' };
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

  return (
    <AuthContext.Provider value={{ role, switchRole, logout, fetchAllUsers, deleteUser }}>
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
