import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Mail, 
    Lock, 
    Eye, 
    EyeOff,
    Check,
    BriefcaseBusiness
} from 'lucide-react';
import AuthLayout from '../../components/layout/AuthLayout';

import { useAuth } from '../../context/AuthContext';

const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
);

const LinkedinIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const Login = () => {
    const navigate = useNavigate();
    const { switchRole } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [selectedRole, setSelectedRole] = useState('Admin');

    const handleSubmit = (e) => {
        e.preventDefault();
        switchRole(selectedRole);
        
        // All roles now require 2FA verification
        navigate('/2fa', { state: { role: selectedRole } });
    };

    return (
        <AuthLayout>
            <div className="bg-white p-7 rounded-2xl shadow-[0_22px_40px_-20px_rgba(45,55,110,0.35)] border border-[#E4E9F5] flex flex-col w-full">
                
                {/* Header Cluster */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-black text-[#1F2754] tracking-tight mb-2">Welcome Back</h1>
                    <p className="text-[10px] font-black text-[#7C87AE] uppercase tracking-[0.2em] leading-relaxed max-w-xs mx-auto">
                        Sign in to access your InfiAP HR dashboard.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Form Fields */}
                    <div className="space-y-3">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-[#8E98BC] uppercase tracking-[0.2em] ml-1">Role</label>
                            <div className="relative">
                                <BriefcaseBusiness className="absolute left-4 top-1/2 -translate-y-1/2 text-[#93A0C7]" size={16} />
                                <select
                                    value={selectedRole}
                                    onChange={(e) => setSelectedRole(e.target.value)}
                                    className="w-full appearance-none bg-[#F3F6FC] border border-[#E4E9F5] rounded-xl pl-11 pr-10 py-3 text-sm font-semibold text-[#2D3865] focus:ring-4 focus:ring-[#4E63F0]/10 focus:bg-white focus:border-[#4E63F0] transition-all outline-none"
                                >
                                    <option value="HR">HR</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Main Admin">Main Admin</option>
                                </select>
                                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#93A0C7]">▼</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-[#8E98BC] uppercase tracking-[0.2em] ml-1">Email</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#93A0C7] group-focus-within:text-[#4E63F0] transition-colors" size={16} />
                                <input 
                                    type="email" 
                                    required
                                    placeholder="name@company.com"
                                    className="w-full bg-[#F3F6FC] border border-[#E4E9F5] rounded-xl pl-11 pr-4 py-3 text-sm font-medium text-[#2D3865] placeholder:text-[#A2AED0] focus:ring-4 focus:ring-[#4E63F0]/10 focus:bg-white focus:border-[#4E63F0] transition-all outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between px-1">
                                <label className="text-[10px] font-black text-[#8E98BC] uppercase tracking-[0.2em]">Password</label>
                                <button 
                                    type="button"
                                    onClick={() => navigate('/reset-password')}
                                    className="text-[10px] font-bold text-[#4E63F0] hover:underline"
                                >
                                    Forgot password?
                                </button>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#93A0C7] group-focus-within:text-[#4E63F0] transition-colors" size={16} />
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    required
                                    placeholder="••••••••"
                                    className="w-full bg-[#F3F6FC] border border-[#E4E9F5] rounded-xl pl-11 pr-11 py-3 text-sm font-medium text-[#2D3865] placeholder:text-[#A2AED0] focus:ring-4 focus:ring-[#4E63F0]/10 focus:bg-white focus:border-[#4E63F0] transition-all outline-none"
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#93A0C7] hover:text-[#4E63F0] transition-colors"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center px-1">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative">
                                <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <div className="w-4 h-4 bg-white border border-[#D5CDED] rounded peer-checked:bg-[#6C5CE7] peer-checked:border-[#6C5CE7] transition-all"></div>
                                <Check size={12} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity stroke-4" />
                            </div>
                            <span className="text-[11px] font-semibold text-[#6D79A2] group-hover:text-[#4E63F0] transition-colors">Remember me</span>
                        </label>
                    </div>

                    {/* Sign In Button */}
                    <button 
                        type="submit"
                        className="w-full py-3 bg-linear-to-r from-[#4E63F0] to-[#6855E8] text-white text-sm font-bold rounded-xl hover:shadow-xl hover:shadow-[#4E63F0]/20 transition-all active:scale-[0.98] shadow-lg shadow-[#4E63F0]/20"
                    >
                        Sign In
                    </button>

                </form>
            </div>
        </AuthLayout>
    );
};

export default Login;
