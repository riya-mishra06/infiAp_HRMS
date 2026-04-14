import React, { useState } from 'react';
import { 
  Settings, 
  Globe, 
  ShieldCheck, 
  Workflow, 
  Zap, 
  Bell, 
  ShieldAlert, 
  HardDrive, 
  Share2, 
  ChevronRight, 
  Plus, 
  Trash2, 
  RefreshCw,
  Clock,
  DollarSign,
  Lock,
  Mail,
  Smartphone,
  Info,
  ChevronDown,
  Database,
  Cloud,
  FileDown,
  FileUp,
  Layout,
  Search
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PlatformConfig = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Settings');
  const [toggles, setToggles] = useState({
    maintenanceMode: false,
    autoApproval: true,
    smartAssignment: false,
    twoFactor: true,
    emailAlerts: true,
    pushNotifications: true
  });

  const handleToggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const Toggle = ({ active, onClick }) => (
    <div 
      onClick={onClick}
      className={`w-10 h-5 rounded-full relative transition-all cursor-pointer ${active ? 'bg-indigo-600' : 'bg-slate-200'}`}
    >
      <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${active ? 'right-0.5' : 'left-0.5'}`}></div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700 pb-40">
       
       <div className="flex items-center justify-between border-b border-slate-50 pb-8">
          <div className="flex items-center gap-4">
             <button onClick={() => navigate('/main-admin/dashboard')} className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:text-indigo-600 transition-all">
                <Layout size={20} />
             </button>
             <div>
                <h1 className="text-xl font-black text-slate-800 tracking-tight uppercase">Configuration</h1>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Platform Parameters & Infrastructure</p>
             </div>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 border border-slate-100">
                <Search size={14} />
             </div>
             <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center overflow-hidden border border-amber-100">
                <div className="w-full h-full flex items-center justify-center text-[10px] font-black text-amber-600">JS</div>
             </div>
          </div>
       </div>

       <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
          
          {/* Internal Scroll Content */}
          <div className="p-8 space-y-12">
             
             {/* Quick Settings Section */}
             <div className="space-y-6">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <Zap size={18} className="text-indigo-600" />
                      <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em]">Quick Settings</h3>
                   </div>
                   <span className="text-[8px] font-black text-emerald-500 uppercase tracking-[0.2em]">Active Status</span>
                </div>
                <div className="flex items-center justify-between p-6 bg-slate-50/50 rounded-2xl border border-slate-100 group">
                   <div>
                      <p className="text-xs font-black text-slate-800 uppercase tracking-tight mb-1">Maintenance Mode</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Redirect users to scheduled maintenance page</p>
                   </div>
                   <Toggle active={toggles.maintenanceMode} onClick={() => handleToggle('maintenanceMode')} />
                </div>
             </div>

             {/* System Preferences Section */}
             <div className="space-y-6">
                <div className="flex items-center gap-3">
                   <Globe size={18} className="text-indigo-600" />
                   <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em]">System Preferences</h3>
                </div>
                <div className="space-y-3">
                   {[
                      { label: 'Language', val: 'English (United States)', icon: Globe },
                      { label: 'Timezone', val: '(GMT-08:00) Pacific Time', icon: Clock },
                      { label: 'Currency Format', val: 'USD ($) - 1,234.56', icon: DollarSign }
                   ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-50 rounded-2xl hover:bg-slate-50 hover:border-slate-100 transition-all cursor-pointer group">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                               <item.icon size={18} />
                            </div>
                            <div>
                               <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1.5">{item.label}</p>
                               <p className="text-xs font-bold text-slate-800 tracking-tight leading-none uppercase">{item.val}</p>
                            </div>
                         </div>
                         <ChevronRight size={14} className="text-slate-200 group-hover:text-indigo-600 transition-all" />
                      </div>
                   ))}
                </div>
             </div>

             {/* Workflow Automation Section */}
             <div className="space-y-6">
                <div className="flex items-center gap-3">
                   <Workflow size={18} className="text-indigo-600" />
                   <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em]">Workflow Automation</h3>
                </div>
                <div className="space-y-4">
                   <div className="flex items-center justify-between group">
                      <div>
                         <p className="text-xs font-black text-slate-800 uppercase tracking-tight mb-1">Auto-Approval</p>
                         <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Automatically approve standard leave requests</p>
                      </div>
                      <Toggle active={toggles.autoApproval} onClick={() => handleToggle('autoApproval')} />
                   </div>
                   <div className="flex items-center justify-between group">
                      <div>
                         <p className="text-xs font-black text-slate-800 uppercase tracking-tight mb-1">Smart Assignment</p>
                         <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Auto-assign tickets based on available resources</p>
                      </div>
                      <Toggle active={toggles.smartAssignment} onClick={() => handleToggle('smartAssignment')} />
                   </div>
                </div>
             </div>

             {/* Security Settings Section */}
             <div className="space-y-6">
                <div className="flex items-center gap-3">
                   <ShieldCheck size={18} className="text-indigo-600" />
                   <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em]">Security Settings</h3>
                </div>
                <div className="space-y-3">
                   <div className="flex items-center justify-between p-5 bg-amber-50/30 border border-amber-100 rounded-2xl group">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-amber-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-amber-100">
                            <Smartphone size={20} />
                         </div>
                         <div>
                            <p className="text-xs font-black text-slate-800 uppercase tracking-tight mb-0.5">2-Factor Auth (2FA)</p>
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Mandatory for all admins</p>
                         </div>
                      </div>
                      <Toggle active={toggles.twoFactor} onClick={() => handleToggle('twoFactor')} />
                   </div>
                   <div className="flex items-center justify-between p-5 bg-white border border-slate-50 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer group">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                            <Lock size={18} />
                         </div>
                         <div>
                            <p className="text-xs font-black text-slate-800 uppercase tracking-tight mb-0.5">Password Policy</p>
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Min 12 chars, alphanumeric</p>
                         </div>
                      </div>
                      <ChevronRight size={14} className="text-slate-200 group-hover:text-indigo-600 transition-all" />
                   </div>
                </div>
             </div>

             {/* Integrations Section */}
             <div className="space-y-6">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <Share2 size={18} className="text-indigo-600" />
                      <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em]">Integrations</h3>
                   </div>
                   <button className="text-[8px] font-black text-indigo-600 uppercase tracking-[0.2em] hover:underline">View All</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50/50 flex flex-col items-center text-center space-y-4 group transition-all hover:bg-white hover:border-indigo-100">
                      <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                         <Globe size={20} />
                      </div>
                      <div>
                         <p className="text-xs font-black text-slate-800 uppercase tracking-tight mb-0.5">Workspace</p>
                         <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Connected</p>
                      </div>
                   </div>
                   <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50/50 flex flex-col items-center text-center space-y-4 group transition-all hover:bg-white hover:border-indigo-100 cursor-pointer">
                      <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                         <Smartphone size={20} />
                      </div>
                      <div>
                         <p className="text-xs font-black text-slate-800 uppercase tracking-tight mb-0.5">Slack</p>
                         <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Not Active</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Data & Backup Section */}
             <div className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                   <HardDrive size={18} className="text-indigo-600" />
                   <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em]">Data & Backup</h3>
                </div>
                <div className="p-6 bg-slate-900 rounded-3xl text-white space-y-8 relative overflow-hidden">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <Cloud size={18} className="text-indigo-400" />
                         <div>
                            <p className="text-xs font-black uppercase tracking-tight">Daily Cloud Backup</p>
                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none mt-1">Last successful: Today, 02:00 AM</p>
                         </div>
                      </div>
                      <button className="text-[8px] font-black text-indigo-400 uppercase tracking-widest hover:text-white">Edit</button>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <button className="flex items-center justify-center gap-3 py-3 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                         <FileDown size={14} /> Import Data
                      </button>
                      <button className="flex items-center justify-center gap-3 py-3 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                         <FileUp size={14} /> Export Data
                      </button>
                   </div>
                </div>
             </div>

             {/* Notifications Section */}
             <div className="space-y-6">
                <div className="flex items-center gap-3">
                   <Bell size={18} className="text-indigo-600" />
                   <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em]">Notifications</h3>
                </div>
                <div className="space-y-4">
                   <div className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                         <Mail size={16} className="text-slate-400" />
                         <p className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none">Email Alerts</p>
                      </div>
                      <Toggle active={toggles.emailAlerts} onClick={() => handleToggle('emailAlerts')} />
                   </div>
                   <div className="flex items-center justify-between group">
                      <div className="flex items-center gap-4">
                         <Smartphone size={16} className="text-slate-400" />
                         <p className="text-xs font-black text-slate-800 uppercase tracking-tight leading-none">Push Notifications</p>
                      </div>
                      <Toggle active={toggles.pushNotifications} onClick={() => handleToggle('pushNotifications')} />
                   </div>
                </div>
             </div>

             {/* System & Risks Section */}
             <div className="space-y-6 pt-8 border-t border-slate-50">
                <div className="flex items-center gap-3">
                   <ShieldAlert size={18} className="text-rose-500" />
                   <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em]">System & Risks</h3>
                </div>
                <div className="p-6 bg-rose-50/50 rounded-3xl border border-rose-100 flex items-center justify-between gap-8 group">
                   <div className="flex-1">
                      <h4 className="text-xs font-black text-rose-600 uppercase tracking-tight mb-1">Clear Cache</h4>
                      <p className="text-[9px] font-bold text-rose-400 leading-relaxed uppercase tracking-widest">Rebuild system indexes (approx. 5 min)</p>
                      <p className="text-[8px] font-bold text-rose-300 uppercase tracking-widest mt-2">** System will be volatile and may cause slow response during this time.</p>
                   </div>
                   <button className="px-6 py-2.5 bg-rose-500 text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-rose-600 transition-all shadow-lg shadow-rose-100">
                      Execute
                   </button>
                </div>
             </div>

             {/* Save Button Suite */}
             <div className="space-y-3 pt-4">
                <button className="w-full py-5 bg-indigo-600 text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-2xl shadow-xl hover:bg-slate-900 transition-all">
                   Save Configuration
                </button>
                <button className="w-full py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-all">
                   Reset to Default
                </button>
             </div>

          </div>
       </div>
    </div>
  );
};

export default PlatformConfig;
