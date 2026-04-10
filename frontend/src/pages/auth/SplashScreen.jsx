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
                return prev + 1;
            });
        }, 20);
        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div className="fixed inset-0 bg-[#F8FAFC] flex flex-col items-center justify-center p-8 overflow-hidden font-sans">
            {/* Ambient Background Glows */}
            <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Brand Mark: Centered */}
                <div className="w-40 h-40 bg-white rounded-[44px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] flex items-center justify-center p-8 border border-white mb-12 relative group animate-in fade-in zoom-in duration-1000">
                    <img src={Logo} alt="InfiAP Logo" className="w-full h-full object-contain" />
                    <div className="absolute -inset-4 bg-primary-400/5 rounded-[54px] blur-xl opacity-100 animate-pulse"></div>
                </div>

                {/* Typography Cluster */}
                <div className="space-y-3 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                    <h1 className="text-6xl font-black text-slate-900 tracking-tighter leading-none uppercase italic">InfiAP</h1>
                    <p className="text-[12px] text-slate-400 font-extrabold uppercase tracking-[0.5em]">Global Workforce Ecosystem</p>
                </div>

                {/* Circular Loading Animation: Below Logo */}
                <div className="flex flex-col items-center gap-8 animate-in fade-in duration-1000 delay-500">
                    <div className="relative w-20 h-20">
                        <svg className="w-full h-full -rotate-90">
                            <circle
                                cx="40"
                                cy="40"
                                r="36"
                                className="fill-none stroke-slate-100 stroke-[4]"
                            />
                            <circle
                                cx="40"
                                cy="40"
                                r="36"
                                className="fill-none stroke-primary-600 stroke-[4] transition-all duration-300 ease-out"
                                style={{
                                    strokeDasharray: '226.2',
                                    strokeDashoffset: 226.2 - (226.2 * progress) / 100
                                }}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[11px] font-black text-primary-600 tracking-tighter tabular-nums">{progress}%</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-[10px] font-black text-slate-800 uppercase tracking-[0.3em] animate-pulse">Initializing Hub...</p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Loading your workspace...</p>
                    </div>
                </div>
            </div>

            {/* Progress Bar: Fixed at Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-100 overflow-hidden">
                <div
                    className="h-full bg-primary-600 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* Footer Diagnostic Environment */}
            <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Build Core v2.4.0 • Strategic Insights Hub Active</span>
                </div>
                <p className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">Secure Node Encryption: AES-256 Enabled</p>
            </div>
        </div>
    );
};

export default SplashScreen;
