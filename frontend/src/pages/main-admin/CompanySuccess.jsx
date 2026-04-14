import React from 'react';
import { 
  CheckCircle2, 
  ChevronLeft, 
  Building2, 
  ArrowRight,
  Monitor,
  LayoutDashboard,
  ExternalLink,
  ShieldCheck,
  Check
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompanySuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 animate-in fade-in zoom-in duration-1000">
      <div className="relative w-full max-w-xl">
        
        {/* Background Decorative Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-emerald-100/30 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-100/30 rounded-full blur-[80px]"></div>

        <div className="bg-white rounded-[64px] border border-slate-50 shadow-soft p-12 text-center relative z-10 space-y-8">
          
          {/* Success Checkmark Circle */}
          <div className="relative mx-auto w-32 h-32">
            <div className="absolute inset-0 bg-emerald-50 rounded-full scale-110 opacity-50 animate-pulse"></div>
            <div className="absolute inset-0 bg-emerald-100/50 rounded-full animate-ping duration-[3000ms]"></div>
            <div className="relative w-full h-full bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-200 border-8 border-white">
              <Check size={56} strokeWidth={4} />
            </div>
          </div>

          <div className="space-y-4">
             <h2 className="text-3xl font-black text-slate-800 tracking-tight leading-none uppercase">Company Created Successfully!</h2>
             <p className="text-sm font-bold text-slate-400 capitalize mx-auto max-w-sm leading-relaxed">
               <span className="text-indigo-600">TechMishra Solutions</span> has been added to the platform and is ready for configuration.
             </p>
          </div>

          <div className="space-y-3">
             <button 
               onClick={() => navigate('/main-admin/dashboard')}
               className="w-full flex items-center justify-center gap-3 py-5 bg-indigo-600 text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-3xl shadow-3xl shadow-indigo-100 hover:bg-slate-900 transition-all group"
             >
                View Company Profile
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
             </button>
             <button 
               onClick={() => navigate('/main-admin/dashboard')}
               className="w-full flex items-center justify-center gap-3 py-5 bg-slate-50 text-slate-400 text-[11px] font-black uppercase tracking-[0.4em] rounded-3xl hover:bg-slate-100 hover:text-slate-600 transition-all"
             >
                Back to Company List
             </button>
          </div>

          {/* Entity ID Card */}
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between text-left group hover:border-indigo-100 transition-all">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-500 shadow-sm">
                   <Building2 size={24} />
                </div>
                <div>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Entity ID</p>
                   <p className="text-sm font-black text-slate-800 uppercase tabular-nums">INF-TX-2024-001</p>
                </div>
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[9px] font-black text-emerald-600 uppercase tracking-[0.2em]">Active</span>
             </div>
          </div>

          {/* Site Footer Link */}
          <div className="pt-4 flex items-center justify-center gap-2 text-slate-300">
             <ShieldCheck size={14} />
             <span className="text-[9px] font-black uppercase tracking-widest">InfiAP Admin Portal</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CompanySuccess;
