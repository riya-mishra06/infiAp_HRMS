import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import AuthLayout from '../../components/layout/AuthLayout';

const Success = () => {
    const navigate = useNavigate();

    return (
        <AuthLayout 
            title="Access Granted" 
            subtitle="Your identity node has been successfully synchronized across the InfiAP orchestration layer"
        >
            <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-1000">
                
                {/* 8. Success Screen: Verification Successful */}
                <div className="flex flex-col items-center justify-center py-6">
                    <div className="relative group mb-10">
                        {/* Glow Dynamics */}
                        <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="relative w-32 h-32 bg-emerald-50 border-4 border-white rounded-[40px] flex items-center justify-center text-emerald-500 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                            <CheckCircle2 size={64} strokeWidth={2.5} />
                            <div className="absolute -top-3 -right-3 p-2.5 bg-primary-600 rounded-2xl text-white shadow-xl animate-bounce">
                                <ShieldCheck size={20} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none italic">Verification Successful</h2>
                        <p className="text-[11px] text-slate-400 font-extrabold uppercase tracking-[0.3em] leading-none">Authentication Protocol Complete</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <button 
                        onClick={() => navigate('/')}
                        className="w-full py-6 bg-slate-900 text-white font-black rounded-[28px] hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 uppercase tracking-[0.3em] text-[11px] active:scale-[0.98] flex items-center justify-center gap-4 group"
                    >
                        Enter Dashboard
                        <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                    
                    <div className="flex items-center justify-center gap-3 py-4 opacity-50">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Redirecting to Secure Workspace Environment...</p>
                    </div>
                </div>

                {/* Final Node Security Diagnostic */}
                <div className="pt-8 border-t border-slate-50 text-center">
                    <p className="text-[8px] font-bold text-slate-300 uppercase tracking-widest leading-relaxed">
                        Security Notice: Your session was initialized with military-grade AES-256 encryption. <br/>
                        Session ID: INF-882-SYS-SYNC
                    </p>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Success;
