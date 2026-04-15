import React, { useState, useEffect } from 'react';
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
  Box,
  Lock,
  Search,
  Check
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Externalized Sub-components to prevent focus loss
const OtpGate = ({ setOtpVerified, setShowOtp, showNotification }) => {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [verifying, setVerifying] = useState(false);
  
  const handleChange = (val, idx) => {
    if (isNaN(val)) return;
    let newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);
    // Auto-focus next input
    if (val && idx < 4) {
       const nextInput = document.getElementById(`otp-${idx + 1}`);
       nextInput?.focus();
    }
  };

  const handleVerify = () => {
    if (otp.join('').length < 5) return;
    setVerifying(true);
    setTimeout(() => {
      setOtpVerified(true);
      setShowOtp(false);
      showNotification('Security Hub: Biometric/OTP authentication confirmed. Access level escalated.');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-xl z-[100] flex items-center justify-center p-6 animate-in fade-in duration-500">
       <div className="bg-white p-12 rounded-[48px] border border-white/10 shadow-3xl max-w-md w-full text-center space-y-10 animate-in zoom-in-95 duration-500 relative overflow-hidden">
          <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-[28px] flex items-center justify-center mx-auto shadow-xl border border-amber-100">
             <ShieldAlert size={40} className="animate-pulse" />
          </div>
          <div>
             <h3 className="text-2xl font-black text-slate-800 tracking-tighter uppercase leading-none mb-3">Master Auth Gate</h3>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] leading-relaxed">Identity verification required for institutional security override. Enter 5-digit hardware token.</p>
          </div>
          <div className="flex justify-center gap-4">
             {otp.map((digit, idx) => (
               <input 
                 key={idx} 
                 id={`otp-${idx}`}
                 type="text" 
                 maxLength={1} 
                 value={digit} 
                 onChange={(e) => handleChange(e.target.value, idx)}
                 autoComplete="off"
                 className="w-12 h-16 bg-slate-50 border-2 border-slate-100 rounded-2xl text-center text-xl font-black text-slate-800 focus:ring-8 focus:ring-indigo-500/5 focus:border-indigo-600 transition-all outline-none"
               />
             ))}
          </div>
          <div className="flex flex-col gap-4 relative z-10">
             <button 
              onClick={handleVerify} 
              disabled={verifying}
              className="w-full py-6 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-[24px] shadow-3xl hover:bg-indigo-600 transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
             >
                {verifying ? <RefreshCw size={18} className="animate-spin" /> : <Lock size={18} />}
                {verifying ? 'Authenticating...' : 'Confirm Authorization'}
             </button>
             <button onClick={() => setShowOtp(false)} className="w-full py-4 bg-white text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-slate-50 transition-all">Abort Protocol</button>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50/50 rounded-full blur-[60px] -mr-16 -mt-16"></div>
       </div>
    </div>
  );
};

const HubView = ({ integrations, setView, showNotification, isSyncing, handleResyncAll }) => (
  <div className="space-y-12 animate-in fade-in duration-1000 pb-40 px-4">
     <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-50 pb-12">
        <div>
           <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 bg-slate-900 text-white text-[8px] font-black rounded-full uppercase tracking-widest">NETWORK LAYER v2</div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.35em]">Global Infrastructure Gateway</span>
           </div>
           <h1 className="text-5xl font-black text-slate-800 tracking-tighter uppercase leading-none mb-2">Interconnect Hub</h1>
           <p className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] leading-none">Enterprise Distribution & Infrastructure Nodes</p>
        </div>
        <button 
         onClick={() => showNotification('Audit Engine: Initializing deep packet inspection across all interconnects...')}
         className="w-14 h-14 rounded-[24px] bg-white text-slate-400 flex items-center justify-center border border-slate-100 shadow-soft hover:bg-slate-900 hover:text-white transition-all active:scale-90"
        >
           <Box size={24} />
        </button>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {integrations.map((item) => (
          <div 
            key={item.id} 
            onClick={() => {
              if(item.id === 'security') setView('security');
              else showNotification(`Configuration Node: Accessing institutional ${item.name} architecture...`);
            }}
            className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-soft text-left group hover:border-indigo-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer relative flex flex-col items-start overflow-hidden"
          >
             <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-[24px] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                <item.icon size={28} />
             </div>
             <h3 className="text-[17px] font-black text-slate-800 uppercase tracking-tight mb-2 group-hover:text-indigo-600 transition-colors">{item.name}</h3>
             <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-12">{item.desc}</p>
             <div className="mt-auto flex items-center justify-between w-full">
                <span className={`px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] border ${item.status === 'RESTRICTED' ? 'bg-amber-50 text-amber-500 border-amber-100' : 'bg-emerald-50 text-emerald-500 border-emerald-100'}`}>{item.status}</span>
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:translate-x-3 transition-all duration-500">
                   <ArrowRight size={20} />
                </div>
             </div>
             <div className="absolute -right-16 -top-16 w-32 h-32 bg-slate-50/50 rounded-full blur-[60px] group-hover:bg-indigo-50/50 transition-colors"></div>
          </div>
        ))}
     </div>

     {/* Connectivity Status Bar */}
     <div className="bg-slate-900 p-12 rounded-[56px] text-white shadow-3xl shadow-slate-200 relative overflow-hidden group">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
           <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                 <span className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-400">Master Synchronizaton Nominal</span>
              </div>
              <h3 className="text-4xl font-black tracking-tighter mb-4 uppercase leading-none">Global Connectivity Matrix</h3>
              <p className="text-slate-500 font-black text-[10px] uppercase tracking-[0.25em] leading-relaxed">Infrastructure clusters synchronized across North America, Europe & Asia segments. Unified latency index: 12ms.</p>
           </div>
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-[24px] flex items-center justify-center border border-white/5 group-hover:rotate-180 transition-transform duration-1000">
                 <RefreshCw size={28} className={`text-indigo-400 ${isSyncing ? 'animate-spin' : ''}`} />
              </div>
              <button 
                onClick={handleResyncAll}
                disabled={isSyncing}
                className="px-10 py-5 bg-white text-slate-900 text-[11px] font-black uppercase tracking-[0.35em] rounded-[24px] hover:bg-indigo-600 hover:text-white transition-all shadow-xl active:scale-95"
              >
                {isSyncing ? 'Synchronizing...' : 'Sync Global Nodes'}
              </button>
           </div>
        </div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px]"></div>
     </div>
  </div>
);

const SecurityView = ({ setView, otpVerified, setShowOtp, handleExecuteReseed, isReseeding, setOtpVerified }) => (
  <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-right-8 duration-1000 pb-40 px-4">
     <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-slate-50 pb-12">
        <div className="flex items-center gap-6">
           <button onClick={() => setView('hub')} className="w-12 h-12 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center shadow-sm">
              <ChevronLeft size={24} />
           </button>
           <div>
              <h1 className="text-4xl font-black text-slate-800 tracking-tighter uppercase leading-none mb-2">Master Security</h1>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] leading-none">OTP-Gated Platform Override Controls</p>
           </div>
        </div>
        <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center border border-amber-100 animate-pulse shadow-soft">
           <ShieldAlert size={28} />
        </div>
     </div>
     
     <div className="bg-white p-12 rounded-[56px] border border-slate-100 shadow-soft space-y-12 group overflow-hidden relative">
        <div className="flex items-start gap-6 pb-10 border-b border-slate-50">
           <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-[24px] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
              <Shield size={28} />
           </div>
           <div>
              <h3 className="text-[15px] font-black text-slate-800 uppercase tracking-tight leading-none mb-3">Institutional Root Key Revocation</h3>
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] leading-relaxed">Decommission current master identity nodes and perform global platform re-seeding.</p>
           </div>
        </div>

        <div className="bg-slate-50/50 p-10 rounded-[40px] border border-slate-100 space-y-8 relative z-10">
           <div className="flex items-center gap-5">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400">
                <Key size={20} />
              </div>
              <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.25em]">SuperAdmin Identity Seeds</h4>
           </div>
           <p className="text-[11px] font-bold text-slate-400 leading-relaxed uppercase tracking-[0.2em]">WARNING: This protocol will invalidate all active session clusters (Mobile, Desktop, API). Authorized SuperAdmin hardware token 0x902 verified via biometric link.</p>
           
           {!otpVerified ? (
             <button 
               onClick={() => setShowOtp(true)}
               className="w-full sm:w-auto px-10 py-6 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.35em] rounded-[24px] hover:bg-indigo-600 transition-all shadow-3xl active:scale-95 group flex items-center justify-center gap-4"
             >
                Generate Root Auth OTP <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
             </button>
           ) : (
             <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={handleExecuteReseed}
                  disabled={isReseeding}
                  className={`flex-1 py-6 bg-rose-500 text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-[24px] shadow-3xl hover:bg-slate-900 transition-all active:scale-95 flex items-center justify-center gap-4 ${isReseeding ? 'opacity-70' : ''}`}
                >
                   {isReseeding ? <RefreshCw size={20} className="animate-spin" /> : <ShieldCheck size={20} />}
                   {isReseeding ? 'Processing Revocation...' : 'Execute Institutional Re-Seed'}
                </button>
                <button 
                  onClick={() => setOtpVerified(false)}
                  className="px-10 py-6 bg-white border border-slate-200 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-[24px] hover:bg-slate-50 transition-all"
                >
                  Lock Node
                </button>
             </div>
           )}
        </div>

        <div className="bg-slate-900 p-10 rounded-[40px] text-white space-y-6 relative overflow-hidden shadow-2xl">
           <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-5">
                 <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/5">
                  <Smartphone size={24} className="text-indigo-400" />
                 </div>
                 <div>
                  <h4 className="text-[13px] font-black tracking-tighter uppercase mb-1">Hardware Device Ecosystem</h4>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] leading-none">Security nodes: <span className="text-indigo-400">1 Online</span> | Auth Protocol: v5.2</p>
                 </div>
              </div>
              <button className="px-6 py-3 bg-white/5 border border-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">Audit Hardware</button>
           </div>
           <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-indigo-600/10 rounded-full blur-[60px]"></div>
        </div>
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-slate-50 rounded-full blur-[100px] -z-10 group-hover:bg-indigo-50/50 transition-colors"></div>
     </div>
  </div>
);

const SystemIntegrations = () => {
  const navigate = useNavigate();
  const [view, setView] = useState('hub'); // 'hub', 'cloud', 'email', 'security'
  const [notification, setNotification] = useState(null);
  const [showOtp, setShowOtp] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isReseeding, setIsReseeding] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const integrations = [
    { id: 'cloud', name: 'Cloud Services', desc: 'AWS, Azure & GCP Nodes', icon: Cloud, status: 'CONNECTED', color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { id: 'email', name: 'Email System', desc: 'SMTP & SendGrid Infrastructure', icon: Mail, status: 'OPERATIONAL', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { id: 'security', name: 'Security Controls', desc: 'OTP-Gated Overrides', icon: ShieldAlert, status: 'RESTRICTED', color: 'text-amber-500', bg: 'bg-amber-50' },
  ];

  const handleResyncAll = () => {
    setIsSyncing(true);
    showNotification('Connectivity Hub: Initiating master health-check across all cluster nodes...');
    setTimeout(() => {
      setIsSyncing(false);
      showNotification('Success: Connectivity matrix stabilized. All nodes reporting 100% throughput.');
    }, 2500);
  };

  const handleExecuteReseed = () => {
    setIsReseeding(true);
    showNotification('Risk Node: Revoking institutional root keys. Initializing entropy pool generation...');
    setTimeout(() => {
      setIsReseeding(false);
      setOtpVerified(false);
      showNotification('Operation Complete: System re-seeded. Master keys successfully cycled.');
    }, 3500);
  };

  return (
    <div className="min-h-screen relative">
       {/* Premium Notification Toast */}
       {notification && (
          <div className="fixed top-24 right-8 z-[100] animate-in slide-in-from-right-8 fade-in flex items-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-[24px] shadow-3xl border border-white/10">
             <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.2em]">{notification}</span>
          </div>
       )}

       <div className="animate-in fade-in duration-1000">
          {view === 'hub' && (
            <HubView 
              integrations={integrations} 
              setView={setView} 
              showNotification={showNotification} 
              isSyncing={isSyncing} 
              handleResyncAll={handleResyncAll} 
            />
          )}
          {view === 'security' && (
            <SecurityView 
              setView={setView} 
              otpVerified={otpVerified} 
              setShowOtp={setShowOtp} 
              handleExecuteReseed={handleExecuteReseed} 
              isReseeding={isReseeding} 
              setOtpVerified={setOtpVerified} 
            />
          )}
          {view !== 'hub' && view !== 'security' && (
            <div className="max-w-4xl mx-auto text-center mt-20 p-24 bg-white rounded-[56px] border border-slate-100 shadow-soft animate-in zoom-in-95">
               <div className="w-24 h-24 bg-slate-50 text-slate-200 rounded-[32px] flex items-center justify-center mx-auto mb-10 shadow-inner">
                  <Server size={64} className="animate-pulse" />
               </div>
               <h3 className="text-3xl font-black text-slate-800 uppercase tracking-tighter mb-4 animate-in slide-in-from-bottom-2">{view} Node Interface</h3>
               <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.3em] mb-12 max-w-sm mx-auto">The infrastructure configuration suite for this specific node is currently undergoing institutional deployment.</p>
               <button onClick={() => setView('hub')} className="px-12 py-5 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-[24px] shadow-2xl hover:bg-indigo-600 transition-all active:scale-95">Back to Control Hub</button>
            </div>
          )}
       </div>

       {showOtp && (
          <OtpGate 
            setOtpVerified={setOtpVerified} 
            setShowOtp={setShowOtp} 
            showNotification={showNotification} 
          />
       )}
    </div>
  );
};

export default SystemIntegrations;
