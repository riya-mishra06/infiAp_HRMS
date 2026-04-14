import React, { useState } from 'react';
import { 
  Globe, 
  Mail, 
  ShieldAlert, 
  ChevronLeft, 
  Cloud, 
  Zap, 
  CheckCircle2, 
  X, 
  ShieldCheck, 
  RefreshCw,
  Server,
  Key,
  Smartphone,
  ArrowRight,
  Shield,
  Activity,
  Box
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SystemIntegrations = () => {
  const navigate = useNavigate();
  const [view, setView] = useState('hub'); // 'hub', 'cloud', 'email', 'security'
  const [showOtp, setShowOtp] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const integrations = [
    { id: 'cloud', name: 'Cloud Services', desc: 'AWS, Azure & GCP Nodes', icon: Cloud, status: 'CONNECTED', color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { id: 'email', name: 'Email System', desc: 'SMTP & SendGrid Infrastructure', icon: Mail, status: 'OPERATIONAL', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { id: 'security', name: 'Security Controls', desc: 'OTP-Gated Access', icon: ShieldAlert, status: 'RESTRICTED', color: 'text-amber-500', bg: 'bg-amber-50' },
  ];

  const OtpGate = () => {
    const [otp, setOtp] = useState(['', '', '', '', '']);
    
    const handleChange = (val, idx) => {
      if (isNaN(val)) return;
      let newOtp = [...otp];
      newOtp[idx] = val;
      setOtp(newOtp);
    };

    const handleVerify = () => {
      setOtpVerified(true);
      setShowOtp(false);
    };

    return (
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-in fade-in duration-500">
         <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-soft max-w-sm w-full text-center space-y-8 animate-in zoom-in-95 duration-500">
            <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
               <ShieldAlert size={32} className="animate-pulse" />
            </div>
            <div>
               <h3 className="text-lg font-black text-slate-800 tracking-tight uppercase leading-none mb-2">Security Authorization</h3>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Enter the 5-digit verification code sent to the SuperAdmin hardware token.</p>
            </div>
            <div className="flex justify-center gap-3">
               {otp.map((digit, idx) => (
                 <input 
                   key={idx} 
                   type="text" 
                   maxLength={1} 
                   value={digit} 
                   onChange={(e) => handleChange(e.target.value, idx)}
                   className="w-10 h-12 bg-slate-50 border border-slate-100 rounded-xl text-center text-sm font-black text-slate-800 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none"
                 />
               ))}
            </div>
            <div className="flex flex-col gap-3">
               <button onClick={handleVerify} className="w-full py-4 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg hover:bg-slate-900 transition-all">Verify & Unlock</button>
               <button onClick={() => setShowOtp(false)} className="w-full py-4 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-all">Cancel</button>
            </div>
         </div>
      </div>
    );
  };

  const HubView = () => (
    <div className="space-y-8 animate-in fade-in duration-700 pb-40">
       <div className="flex items-center justify-between border-b border-slate-50 pb-8">
          <div>
             <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase">System Integrations</h1>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Infrastructure Connectivity Nodes</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-100">
             <Box size={18} />
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrations.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setView(item.id)}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-left group hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-50 transition-all cursor-pointer relative flex flex-col items-start"
            >
               <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={20} />
               </div>
               <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight mb-1 group-hover:text-indigo-600 transition-colors">{item.name}</h3>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">{item.desc}</p>
               <div className="mt-auto flex items-center justify-between w-full">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${item.status === 'RESTRICTED' ? 'bg-amber-50 text-amber-500' : 'bg-emerald-50 text-emerald-500'}`}>{item.status}</span>
                  <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                     <ArrowRight size={14} />
                  </div>
               </div>
            </div>
          ))}
       </div>

       {/* Connectivity Status Bar */}
       <div className="bg-slate-900 p-10 rounded-3xl text-white shadow-xl shadow-slate-100 relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
             <div className="max-w-md">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">All Nodes Operational</span>
                </div>
                <h3 className="text-xl font-black tracking-tight mb-2 uppercase">Connectivity Matrix</h3>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-relaxed">Multi-cluster routing health is 100%. Master Latency: 12ms.</p>
             </div>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/5">
                   <RefreshCw size={24} className="text-indigo-400 animate-spin-slow" />
                </div>
                <button className="px-8 py-3 bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-all">Re-Sync All</button>
             </div>
          </div>
       </div>
    </div>
  );

  const SecurityView = () => (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 pb-40">
       <div className="flex items-center justify-between border-b border-slate-50 pb-8">
          <div>
             <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase">Infrastructure Security</h1>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">OTP-Gated Platform Overrides</p>
          </div>
          <button onClick={() => setView('hub')} className="flex items-center gap-2 px-5 py-3 bg-slate-50 text-slate-400 rounded-xl hover:text-indigo-600 transition-all text-[10px] font-black uppercase tracking-widest">
             <ChevronLeft size={16} /> Hub
          </button>
       </div>
       
       <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
          <div className="flex items-start gap-4 pb-6 border-b border-slate-50">
             <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center">
                <Shield size={18} />
             </div>
             <div>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest leading-none mb-1.5">Master Key Revocation</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Perform global institutional re-seeding</p>
             </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-6">
             <div className="flex items-center gap-4">
                <Key size={18} className="text-slate-400" />
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-tight">Root Access Tokens</h4>
             </div>
             <p className="text-[10px] font-bold text-slate-400 leading-relaxed uppercase tracking-widest">Warning: This action will invalidate all current session nodes and requires physical hardware token verification.</p>
             
             {!otpVerified ? (
               <button 
                 onClick={() => setShowOtp(true)}
                 className="px-8 py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-indigo-600 transition-all shadow-lg"
               >
                  Generate authorization OTP
               </button>
             ) : (
               <button className="px-8 py-4 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-900 transition-all shadow-lg animate-in zoom-in-95">
                  Execute Global Re-Seed
               </button>
             )}
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
             <div className="flex items-center gap-4">
                <Smartphone size={18} className="text-slate-400" />
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-tight">Hardware Device Nodes</h4>
             </div>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Authorized physical devices: <span className="text-slate-800">1 Online</span></p>
             <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">Manage Security Hardware</button>
          </div>
       </div>

       {showOtp && <OtpGate />}
    </div>
  );

  return (
    <div className="min-h-screen">
       {view === 'hub' && <HubView />}
       {view === 'security' && <SecurityView />}
       {view !== 'hub' && view !== 'security' && (
         <div className="max-w-3xl mx-auto text-center mt-20 p-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <Server size={48} className="mx-auto text-slate-200 mb-6 animate-pulse" />
            <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight mb-2">{view} Node</h3>
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-8">Infrastructure configuration for this node is in final deployment.</p>
            <button onClick={() => setView('hub')} className="px-8 py-3 bg-indigo-600 text-white text-[10px] font-black rounded-xl">Back to Hub</button>
         </div>
       )}
    </div>
  );
};

export default SystemIntegrations;
