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
        <AuthLayout>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_16px_36px_-14px_rgba(38,20,91,0.28)] border border-[#EAE5F8] flex flex-col">
                
                {/* Header Cluster */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-black text-[#1A1A1A] tracking-tight mb-3">Create account</h1>
                    <p className="text-sm font-medium text-gray-400 leading-relaxed max-w-[320px] mx-auto">
                        Join InfiAP and begin your workforce orchestration journey.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Input Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#6C5CE7] transition-colors" size={18} />
                                <input
                                    type="text"
                                    required
                                    placeholder="Marcus Aurelius"
                                    className="w-full bg-[#F8FAFC] border border-gray-100 rounded-2xl pl-12 pr-6 py-4 text-sm font-medium text-gray-800 focus:ring-4 focus:ring-[#6C5CE7]/5 focus:bg-white focus:border-[#6C5CE7] transition-all outline-none"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#6C5CE7] transition-colors" size={18} />
                                <input
                                    type="email"
                                    required
                                    placeholder="name@company.com"
                                    className="w-full bg-[#F8FAFC] border border-gray-100 rounded-2xl pl-12 pr-6 py-4 text-sm font-medium text-gray-800 focus:ring-4 focus:ring-[#6C5CE7]/5 focus:bg-white focus:border-[#6C5CE7] transition-all outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Role Selection */}
                    <div className="space-y-2 relative">
                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Select Your Role</label>
                        <div
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`w-full bg-[#F8FAFC] border ${isDropdownOpen ? 'border-[#6C5CE7] ring-4 ring-[#6C5CE7]/5 shadow-sm' : 'border-gray-100'} rounded-2xl px-5 py-4 flex items-center justify-between cursor-pointer transition-all hover:bg-white group`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#6C5CE7] shadow-sm border border-gray-50">
                                    <ShieldCheck size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-[#1A1A1A] leading-none mb-1">{selectedRole}</span>
                                    <span className="text-[10px] text-gray-400 font-medium">{roles.find(r => r.name === selectedRole)?.desc}</span>
                                </div>
                            </div>
                            <ChevronDown size={18} className={`text-gray-300 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>

                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-50 rounded-3xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                                <div className="space-y-1">
                                    {roles.map((role) => (
                                        <div
                                            key={role.name}
                                            onClick={() => {
                                                setSelectedRole(role.name);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all cursor-pointer group ${selectedRole === role.name ? 'bg-[#6C5CE7]/5' : 'hover:bg-gray-50'}`}
                                        >
                                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${selectedRole === role.name ? 'bg-[#6C5CE7] text-white shadow-lg shadow-[#6C5CE7]/20' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-[#6C5CE7]'}`}>
                                                <ShieldCheck size={16} />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-xs font-bold text-[#1A1A1A]">{role.name}</p>
                                                <p className="text-[10px] text-gray-400 font-medium">{role.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Password Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#6C5CE7] transition-colors" size={18} />
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••••••"
                                    className="w-full bg-[#F8FAFC] border border-gray-100 rounded-2xl pl-12 pr-6 py-4 text-sm font-medium text-gray-800 focus:ring-4 focus:ring-[#6C5CE7]/5 focus:bg-white focus:border-[#6C5CE7] transition-all outline-none"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Confirm Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#6C5CE7] transition-colors" size={18} />
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••••••"
                                    className="w-full bg-[#F8FAFC] border border-gray-100 rounded-2xl pl-12 pr-6 py-4 text-sm font-medium text-gray-800 focus:ring-4 focus:ring-[#6C5CE7]/5 focus:bg-white focus:border-[#6C5CE7] transition-all outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* TOS */}
                    <label className="flex items-start gap-4 cursor-pointer group text-left px-1 mt-2">
                        <div className="relative mt-1">
                            <input type="checkbox" className="sr-only peer" required />
                            <div className="w-5 h-5 bg-gray-50 border border-gray-200 rounded-lg peer-checked:bg-[#6C5CE7] peer-checked:border-[#6C5CE7] transition-all shadow-sm"></div>
                            <CheckCircle2 size={12} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-[11px] font-medium text-gray-400 leading-relaxed uppercase tracking-wider">
                            I synchronize with the <span className="text-[#6C5CE7] font-bold hover:underline">InfiAP Protocol</span> and Terms of Deployment.
                        </span>
                    </label>

                    {/* Action Hub */}
                    <div className="space-y-6 pt-4">
                        <button
                            type="submit"
                            className="w-full py-4.5 bg-linear-to-r from-[#6C5CE7] to-[#5A4BDA] text-white font-bold rounded-2xl shadow-lg shadow-[#6C5CE7]/20 hover:shadow-xl hover:shadow-[#6C5CE7]/30 transition-all active:scale-[0.98]"
                        >
                            Create Account
                        </button>
                        <p className="text-center text-sm font-medium text-gray-500">
                            Already have an identity?
                            <button
                                type="button"
                                onClick={() => navigate('/login')}
                                className="text-[#6C5CE7] font-bold ml-2 hover:underline"
                            >
                                Sign In
                            </button>
                        </p>
                    </div>

                </form>
            </div>
        </AuthLayout>
    );
};

export default Signup;
