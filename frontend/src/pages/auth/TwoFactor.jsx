import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, RefreshCw, Undo2 } from 'lucide-react';
import AuthLayout from '../../components/layout/AuthLayout';

const TwoFactor = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        const newOtp = [...otp.map((d, idx) => (idx === index ? element.value : d))];
        setOtp(newOtp);

        if (element.nextSibling && element.value !== '') {
            element.nextSibling.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/auth-success');
    };

    return (
        <AuthLayout 
            title="Two-Factor Authentication" 
            subtitle="A 6-digit keycode was sent to your secure device for identity synchronization"
        >
            <form onSubmit={handleSubmit} className="space-y-10 animate-in slide-in-from-bottom-4 duration-700">
                
                {/* 7. Two-Factor Authentication Screen: OTP Cluster */}
                <div className="flex justify-center gap-3 md:gap-4 text-left">
                    {otp.map((data, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            ref={el => inputRefs.current[index] = el}
                            value={data}
                            onChange={e => handleChange(e.target, index)}
                            onKeyDown={e => handleKeyDown(e, index)}
                            className="w-12 h-16 md:w-16 md:h-24 bg-slate-50 border border-slate-100 rounded-[20px] text-center text-3xl font-black text-slate-800 focus:ring-8 focus:ring-primary-500/5 focus:bg-white focus:border-primary-500 outline-none transition-all shadow-inner"
                        />
                    ))}
                </div>

                <div className="space-y-8 text-left">
                    <button 
                        type="submit"
                        disabled={otp.some(v => v === '')}
                        className={`w-full py-6 font-black rounded-[28px] transition-all shadow-2xl uppercase tracking-[0.3em] text-[11px] active:scale-[0.98] flex items-center justify-center gap-3 ${otp.some(v => v === '') ? 'bg-slate-100 text-slate-300 shadow-none cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200'}`}
                    >
                        <ShieldCheck size={18} />
                        Verify Portal Access
                    </button>

                    <div className="text-center space-y-6">
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Security protocol not received?</p>
                            <button type="button" className="flex items-center justify-center gap-2 text-[10px] font-black text-primary-600 uppercase tracking-widest hover:underline underline-offset-4 transition-all group">
                                <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-500" />
                                Resend Security Code
                            </button>
                        </div>
                        
                        <div className="pt-6 border-t border-slate-50">
                            <button 
                                type="button" 
                                onClick={() => navigate('/login')}
                                className="flex items-center justify-center gap-2 mx-auto text-[9px] font-bold text-slate-300 uppercase tracking-widest hover:text-slate-600 transition-colors"
                            >
                                <Undo2 size={12} />
                                Back to Identity Entry
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        </AuthLayout>
    );
};

export default TwoFactor;
