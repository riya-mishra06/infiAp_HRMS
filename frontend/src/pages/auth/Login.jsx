import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Mail,
    Lock,
    ChevronDown,
    ShieldCheck,
    Eye,
    EyeOff
} from 'lucide-react';
import AuthLayout from '../../components/layout/AuthLayout';

// Custom High-Fidelity Brand Icons for Desktop Auth
const GoogleIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-[#0077b5]">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState('Admin');

    const roles = [
        { name: 'Admin', desc: 'Enterprise wide control' },
        { name: 'Main Admin', desc: 'Root system access' },
        { name: 'HR', desc: 'Personnel management' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/2fa');
    };

    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Enter your credentials to access your dashboard"
        >
            <form onSubmit={handleSubmit} className="space-y-7 animate-in slide-in-from-bottom-4 duration-700">

                {/* 3. Role Selection Dropdown (IMPORTANT) */}
                <div className="space-y-4 relative text-left z-[60]">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Identity Role Protocol</label>
                    <div
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full bg-slate-50 border ${isDropdownOpen ? 'border-primary-500 ring-8 ring-primary-500/5' : 'border-slate-100'} rounded-[24px] px-6 py-4.5 flex items-center justify-between cursor-pointer transition-all hover:bg-white hover:border-primary-200 group`}
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-sm border border-slate-50 group-hover:scale-110 transition-transform">
                                <ShieldCheck size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none mb-1">{selectedRole}</span>
                                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{roles.find(r => r.name === selectedRole)?.desc}</span>
                            </div>
                        </div>
                        <ChevronDown size={18} className={`text-slate-300 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Dropdown Menu Node: Absolute & High Priority */}
                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-slate-100 rounded-[32px] shadow-2xl p-3 z-[100] animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none"></div>
                            <div className="relative z-10 space-y-1">
                                {roles.filter(r => r.name !== selectedRole).map((role) => (
                                    <div
                                        key={role.name}
                                        onClick={() => {
                                            setSelectedRole(role.name);
                                            setIsDropdownOpen(false);
                                        }}
                                        className="w-full flex items-center gap-4 px-4 py-4 rounded-[24px] hover:bg-primary-50 transition-all cursor-pointer group"
                                    >
                                        <div className="w-8 h-8 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-primary-100 group-hover:text-primary-600 transition-all">
                                            <ShieldCheck size={16} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[11px] font-black uppercase tracking-tight text-slate-700 leading-none mb-1">{role.name}</span>
                                            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none">{role.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Form Fields Cluster */}
                <div className="space-y-6">
                    <div className="space-y-3 text-left">
                        <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Email Address Identification</label>
                        <div className="relative group">
                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-500 transition-colors" size={18} />
                            <input
                                type="email"
                                required
                                placeholder="director@infiap.hub"
                                className="w-full bg-slate-50 border border-slate-100 rounded-[24px] pl-16 pr-8 py-5 text-[11px] font-black text-slate-800 focus:ring-8 focus:ring-primary-500/5 focus:bg-white focus:border-primary-500 transition-all outline-none uppercase tracking-tight"
                            />
                        </div>
                    </div>

                    <div className="space-y-3 text-left">
                        <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Secure Passkey Node</label>
                        <div className="relative group">
                            <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-500 transition-colors" size={18} />
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                placeholder="••••••••••••"
                                className="w-full bg-slate-50 border border-slate-100 rounded-[24px] pl-16 pr-16 py-5 text-[11px] transition-all outline-none focus:ring-8 focus:ring-primary-500/5 focus:bg-white focus:border-primary-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 transition-colors"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Auxiliary Controls */}
                <div className="flex items-center justify-between px-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-5 h-5 bg-slate-50 border border-slate-100 rounded-md peer-checked:bg-primary-600 peer-checked:border-primary-600 transition-all shadow-inner"></div>
                            <ShieldCheck size={12} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">Remember Node</span>
                    </label>
                    <button
                        type="button"
                        onClick={() => navigate('/reset-password')}
                        className="text-[10px] font-black text-primary-600 uppercase tracking-widest hover:underline underline-offset-4"
                    >
                        Forgot Password?
                    </button>
                </div>

                {/* 4. Login Actions Sequence */}
                <div className="space-y-6 pt-4">
                    <button
                        type="submit"
                        className="w-full py-6 bg-slate-900 text-white font-black rounded-[28px] hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 uppercase tracking-[0.3em] text-[12px] active:scale-[0.98] flex items-center justify-center gap-3 group"
                    >
                        Initialize Synchronization
                    </button>

                    {/* OAuth Protocol Hub */}
                    <div className="flex items-center gap-6 py-2">
                        <div className="h-px bg-slate-100 flex-1"></div>
                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] leading-none">Authentication Protocol</p>
                        <div className="h-px bg-slate-100 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="flex items-center justify-center gap-3 py-4 bg-white border border-slate-100 rounded-2xl hover:bg-slate-50 active:scale-95 transition-all text-[10px] font-black uppercase tracking-widest text-slate-600 shadow-sm">
                            <GoogleIcon />
                            Google
                        </button>
                        <button type="button" className="flex items-center justify-center gap-3 py-4 bg-white border border-slate-100 rounded-2xl hover:bg-slate-50 active:scale-95 transition-all text-[10px] font-black uppercase tracking-widest text-slate-600 shadow-sm">
                            <LinkedinIcon />
                            LinkedIn
                        </button>
                    </div>
                </div>

                {/* Navigational Identity Footer */}
                <div className="text-center pt-8 border-t border-slate-50/50">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Don't have a workspace node?
                        <button
                            type="button"
                            onClick={() => navigate('/signup')}
                            className="text-primary-600 font-black ml-2 hover:underline underline-offset-4"
                        >
                            Create Account
                        </button>
                    </p>
                </div>
            </form>
        </AuthLayout>
    );
};

export default Login;
