import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, RefreshCw, Undo2 } from 'lucide-react';
import AuthLayout from '../../components/layout/AuthLayout';

const TwoFactor = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const role = location.state?.role || 'HR';
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
        
        // Dynamic redirection based on verified role
        if (role === 'HR') {
            navigate('/dashboard');
        } else {
            // Admin and Main Admin go to the management portal
            navigate('/admin/dashboard');
        }
    };

    return (
        <AuthLayout>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_16px_36px_-14px_rgba(38,20,91,0.28)] border border-[#EAE5F8] flex flex-col items-center">
                
                {/* Header Section */}
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-[#6C5CE7]/10 text-[#6C5CE7] rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <ShieldCheck size={32} />
                    </div>
                    <h1 className="text-3xl font-black text-[#1A1A1A] tracking-tight mb-3">Check your device</h1>
                    <p className="text-sm font-medium text-gray-400 leading-relaxed max-w-[320px] mx-auto">
                        {role} access requires OTP verification. Enter the 6-digit code to continue.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="w-full space-y-8">
                    
                    {/* OTP Input Fields */}
                    <div className="flex justify-between gap-2 sm:gap-4">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                ref={el => inputRefs.current[index] = el}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onKeyDown={e => handleKeyDown(e, index)}
                                className="w-full aspect-2/3 max-w-16 bg-[#F8FAFC] border border-gray-100 rounded-2xl text-center text-2xl font-black text-[#1A1A1A] focus:ring-4 focus:ring-[#6C5CE7]/5 focus:bg-white focus:border-[#6C5CE7] outline-none transition-all shadow-sm"
                            />
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-6">
                        <button 
                            type="submit"
                            disabled={otp.some(v => v === '')}
                            className={`w-full py-4.5 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 ${otp.some(v => v === '') ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-linear-to-r from-[#6C5CE7] to-[#5A4BDA] text-white shadow-lg shadow-[#6C5CE7]/20 hover:shadow-xl active:scale-[0.98]'}`}
                        >
                            Verify Account
                        </button>

                        <div className="flex flex-col items-center gap-4">
                            <p className="text-xs font-medium text-gray-400">Didn't receive the code?</p>
                            <button type="button" className="flex items-center gap-2 text-xs font-bold text-[#6C5CE7] hover:underline transition-all group">
                                <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-500" />
                                Resend Security Code
                            </button>
                        </div>
                    </div>

                    {/* Footer Nav */}
                    <div className="pt-8 border-t border-gray-50">
                        <button 
                            type="button" 
                            onClick={() => navigate('/login')}
                            className="flex items-center gap-2 mx-auto text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <Undo2 size={14} />
                            Back to Sign In
                        </button>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
};

export default TwoFactor;
