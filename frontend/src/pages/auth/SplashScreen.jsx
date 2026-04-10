import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo_infi_ap.png';

const SplashScreen = () => {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => navigate('/login'), 800);
                    return 100;
                }
                return prev + 1.5;
            });
        }, 30);
        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div className="fixed inset-0 bg-linear-to-br from-white via-[#F5F7FF] to-[#EDF2FF] flex flex-col items-center justify-center p-8 overflow-hidden font-sans">
            <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#4E63F0]/10 blur-3xl"></div>
            <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#6F8DFF]/10 blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center animate-in fade-in duration-1000">
                <div className="w-24 h-24 bg-white rounded-3xl shadow-[0_20px_40px_-12px_rgba(68,83,162,0.2)] flex items-center justify-center p-5 mb-6 border border-[#EDF1FC]">
                    <img src={Logo} alt="InfiAP Logo" className="w-full h-full object-contain" />
                </div>

                <h1 className="text-3xl font-black text-[#1F2754] tracking-tight mb-8">InfiAP</h1>

                <div className="w-64 h-2 bg-[#E7ECFB] rounded-full overflow-hidden">
                    <div
                        className="h-full bg-linear-to-r from-[#4E63F0] to-[#6855E8] transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B96BC]">Loading workspace {Math.round(progress)}%</p>
            </div>
        </div>
    );
};

export default SplashScreen;
