import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import AuthLayout from '../../components/layout/AuthLayout';

const ResetPassword = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate email sent
        navigate('/login');
    };

    return (
        <AuthLayout
            title="Reset Password"
            subtitle="Enter your corporate identity to receive a recovery link"
        >
            <form onSubmit={handleSubmit} className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">

                {/* 6. Reset Password Screen: Recovery Gateway */}
                <div className="space-y-4 text-left">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Corporate Email Address</label>
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

                <div className="space-y-6 text-left">
                    <button
                        type="submit"
                        className="w-full py-6 bg-slate-900 text-white font-black rounded-[28px] hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 uppercase tracking-[0.3em] text-[11px] active:scale-[0.98] flex items-center justify-center gap-3"
                    >
                        <Send size={16} />
                        Send Reset Link
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate('/login')}
                        className="flex items-center justify-center gap-2 mx-auto text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-primary-600 transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Identity Portal
                    </button>
                </div>

                {/* Security Advisory */}
                <div className="pt-10 border-t border-slate-50/50 text-center px-4">
                    <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.15em] leading-relaxed">
                        Security Advisory: If you do not receive a recovery protocol within 5 minutes, please contact your System Architect.
                    </p>
                </div>

            </form>
        </AuthLayout>
    );
};

export default ResetPassword;
