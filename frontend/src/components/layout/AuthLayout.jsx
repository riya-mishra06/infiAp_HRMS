import React from 'react';
import Logo from '../../assets/logo_infi_ap.png';
import VisualNode from '../../assets/auth_visual.png';

const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen w-full bg-[#F8FAFC] flex items-center justify-center p-4 md:p-8 font-sans selection:bg-primary-100 selection:text-primary-900 overflow-hidden relative">
            {/* Ambient Background Glows: Centralized Orchestration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen pointer-events-none -z-10">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-pulse delay-700"></div>
            </div>

            {/* Main Auth Card Container: Global Equilibrium */}
            <div className="max-w-[1100px] w-full bg-white rounded-[40px] shadow-[0_32px_128px_-32px_rgba(30,41,59,0.15)] flex flex-col md:flex-row border border-white relative z-10 animate-in fade-in zoom-in-95 duration-1000 overflow-hidden">

                {/* Left Side: Cinematic Visual Node (Desktop Only) */}
                <div className="hidden md:flex md:w-5/12 relative overflow-hidden flex-col justify-between p-12 lg:p-16 text-white overflow-hidden bg-slate-900">
                    {/* Background Visual Asset */}
                    <img
                        src={VisualNode}
                        alt="Auth Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay scale-110 hover:scale-100 transition-transform duration-[10s] ease-out"
                    />

                    {/* Glassmorphic Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/40 via-transparent to-indigo-600/40"></div>
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>

                    {/* Content Layer */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-4 mb-20 animate-in slide-in-from-left-8 duration-1000">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center p-2.5 shadow-2xl shadow-primary-900/40">
                                    <img src={Logo} alt="InfiAP" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-black tracking-tighter leading-none mb-1">InfiAP</span>
                                    <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.3em] leading-none">Global Tech Solutions</span>
                                </div>
                            </div>

                            <div className="space-y-8 animate-in slide-in-from-left-12 duration-1000 delay-300">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/10 rounded-full backdrop-blur-md">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-primary-200">System Live v2.4.0</span>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tighter">
                                    The Strategic <br />
                                    <span className="text-primary-400">Insight Hub</span> <br />
                                    is Initialized.
                                </h2>
                                <p className="text-sm font-medium text-white/50 leading-relaxed uppercase tracking-[0.1em] max-w-xs">
                                    Orchestrating the next generation of workforce intelligence and enterprise diagnostics.
                                </p>
                            </div>
                        </div>

                        {/* Social Proof Capsule */}
                        <div className="animate-in slide-in-from-bottom-8 duration-1000 delay-500">
                            <div className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-[28px] backdrop-blur-xl">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-9 h-9 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-black uppercase shadow-lg">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/60">
                                    Verified by <span className="text-white">500+ Corporations</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: High-Density Form Gateway */}
                <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-20 flex flex-col justify-between bg-white relative">
                    <div className="max-w-md mx-auto w-full py-10">
                        <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
                            <h1 className="text-4xl font-black text-slate-800 tracking-tighter leading-none mb-4">{title}</h1>
                            <div className="w-16 h-1.5 bg-primary-500 rounded-full mb-6"></div>
                            <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.2em] leading-relaxed max-w-[280px]">{subtitle}</p>
                        </div>

                        <div className="w-full">
                            {children}
                        </div>
                    </div>

                    {/* Card Footer Environment */}
                    <div className="mt-12 pt-8 border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                        <p>© 2026 InfiAP Industrial Hub</p>
                        <div className="flex items-center gap-8">
                            <a href="#" className="hover:text-primary-600 transition-colors">Security Protocol</a>
                            <a href="#" className="hover:text-primary-600 transition-colors">Data Privacy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
