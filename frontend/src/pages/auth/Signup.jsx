import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    User,
    Mail,
    Lock,
    ChevronDown,
    ShieldCheck,
    CheckCircle2
} from 'lucide-react';
import AuthLayout from '../../components/layout/AuthLayout';

const Signup = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState('Admin');

    const roles = [
        { name: 'Admin', desc: 'Standard administrative node' },
        { name: 'Main Admin', desc: 'Full system synchronization' },
        { name: 'HR', desc: 'Personnel lifecycle management' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/2fa');
    };

    return (
        <AuthLayout
            title="Create Account"
            subtitle="Begin your workforce orchestration journey"
        >
            <form onSubmit={handleSubmit} className="space-y-6 animate-in slide-in-from-bottom-4 duration-700">

                {/* 5. Create Account Screen: Desktop Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
                        <div className="relative group">
                            <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-500 transition-colors" size={18} />
                            <input
                                type="text"
                                required
                                placeholder="Marcus Aurelius"
                                className="w-full bg-slate-50 border border-slate-100 rounded-[24px] pl-16 pr-8 py-5 text-xs font-black text-slate-800 focus:ring-8 focus:ring-primary-500/5 focus:bg-white focus:border-primary-500 transition-all outline-none uppercase tracking-tight"
                            />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-500 transition-colors" size={18} />
                            <input
                                type="email"
                                required
                                placeholder="marcus.a@corp.hub"
                                className="w-full bg-slate-50 border border-slate-100 rounded-[24px] pl-16 pr-8 py-5 text-xs font-black text-slate-800 focus:ring-8 focus:ring-primary-500/5 focus:bg-white focus:border-primary-500 transition-all outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Role Selection Dropdown */}
                <div className="space-y-3 relative text-left">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Select Your Role</label>
                    <div
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full bg-slate-50 border ${isDropdownOpen ? 'border-primary-500 ring-8 ring-primary-500/5' : 'border-slate-100'} rounded-[24px] px-6 py-4 flex items-center justify-between cursor-pointer transition-all hover:bg-white group`}
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
                        <ChevronDown size={18} className={`text-slate-300 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-slate-100 rounded-[32px] shadow-2xl p-3 z-50 overflow-hidden">
                            <div className="space-y-1">
                                {roles.map((role) => (
                                    <div
                                        key={role.name}
                                        onClick={() => {
                                            setSelectedRole(role.name);
                                            setIsDropdownOpen(false);
                                        }}
                                        className={`w-full flex items-center gap-4 px-4 py-4 rounded-[24px] hover:bg-primary-50 transition-all cursor-pointer group ${selectedRole === role.name ? 'bg-primary-50' : ''}`}
                                    >
                                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${selectedRole === role.name ? 'bg-primary-600 text-white shadow-lg' : 'bg-slate-50 text-slate-400 group-hover:bg-primary-100 group-hover:text-primary-600'}`}>
                                            <ShieldCheck size={16} />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-[11px] font-black uppercase tracking-tight text-slate-800">{role.name}</p>
                                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{role.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-500 transition-colors" size={18} />
                            <input
                                type="password"
                                required
                                placeholder="••••••••••••"
                                className="w-full bg-slate-50 border border-slate-100 rounded-[24px] pl-16 pr-8 py-5 text-xs transition-all outline-none focus:ring-8 focus:ring-primary-500/5 focus:bg-white focus:border-primary-500"
                            />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Confirm Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-500 transition-colors" size={18} />
                            <input
                                type="password"
                                required
                                placeholder="••••••••••••"
                                className="w-full bg-slate-50 border border-slate-100 rounded-[24px] pl-16 pr-8 py-5 text-xs transition-all outline-none focus:ring-8 focus:ring-primary-500/5 focus:bg-white focus:border-primary-500"
                            />
                        </div>
                    </div>
                </div>

                <label className="flex items-start gap-4 cursor-pointer group text-left px-2">
                    <div className="relative mt-0.5">
                        <input type="checkbox" className="sr-only peer" required />
                        <div className="w-5 h-5 bg-slate-50 border border-slate-100 rounded-md peer-checked:bg-primary-600 peer-checked:border-primary-600 transition-all shadow-inner"></div>
                        <CheckCircle2 size={12} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                        I synchronize with the <span className="text-primary-600 font-black hover:underline">InfiAP Protocol</span> and Terms of Deployment.
                    </span>
                </label>

                <div className="space-y-6 pt-4 text-left">
                    <button
                        type="submit"
                        className="w-full py-6 bg-slate-900 text-white font-black rounded-[28px] hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 uppercase tracking-[0.3em] text-[11px] active:scale-[0.98]"
                    >
                        Create Account
                    </button>
                    <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Already have an identity?
                        <button
                            type="button"
                            onClick={() => navigate('/login')}
                            className="text-primary-600 font-black ml-2 hover:underline underline-offset-4"
                        >
                            Sign In
                        </button>
                    </p>
                </div>

            </form>
        </AuthLayout>
    );
};

export default Signup;
