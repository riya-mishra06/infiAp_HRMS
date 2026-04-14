import React from 'react';
import { 
  Activity, 
  Cpu, 
  Database, 
  HardDrive, 
  Server, 
  ChevronRight, 
  Search, 
  Clock, 
  ShieldCheck, 
  AlertCircle,
  BarChart3,
  RefreshCw,
  MoreVertical,
  Zap,
  Globe,
  Terminal,
  ShieldAlert,
  Signal
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SystemMonitoring = () => {
  const navigate = useNavigate();

  const nodes = [
    { name: 'API-Gateway-01', region: 'US-East', load: '14%', status: 'HEALTHY', color: 'text-emerald-500' },
    { name: 'DB-Cluster-Main', region: 'Multi-Region', load: '32%', status: 'HEALTHY', color: 'text-emerald-500' },
    { name: 'S3-Storage-Node', region: 'US-East', load: '45%', status: 'OPTIMIZING', color: 'text-amber-500' },
    { name: 'CDN-Edge-Global', region: 'Global', load: '08%', status: 'HEALTHY', color: 'text-emerald-500' },
  ];

  const logs = [
    { id: 1, type: 'INFO', msg: 'System backup successfully localized to S3-Bucket-04', time: '2m ago' },
    { id: 2, type: 'WARN', msg: 'High latency detected in AP-South-1 routing node', time: '14m ago' },
    { id: 3, type: 'ERROR', msg: 'Failed SSL handshake for unauthorized tenant: ghost-corp', time: '1h ago' },
    { id: 4, type: 'INFO', msg: 'New SuperAdmin provisioned: jonathan@infiap.com', time: '2h ago' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700 pb-40">
       
       <div className="flex items-center justify-between border-b border-slate-50 pb-8">
          <div>
             <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase">System Monitoring</h1>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Real-time Infrastructure Health & Audit Streams</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2.5 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-xl">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Global Status: Optimal</span>
             </div>
             <button className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center border border-slate-100 hover:bg-slate-900 hover:text-white transition-all">
                <RefreshCw size={18} />
             </button>
          </div>
       </div>

       {/* Hardware Matrix (Desktop Grid 4-columns) */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nodes.map((node, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm group hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-50 transition-all">
               <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-slate-50 text-slate-300 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                     <Server size={18} />
                  </div>
                  <span className={`px-2.5 py-1 bg-slate-50 ${node.color} rounded-lg text-[9px] font-black uppercase tracking-widest`}>{node.status}</span>
               </div>
               <h3 className="text-xs font-black text-slate-800 uppercase tracking-tight mb-2">{node.name}</h3>
               <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-4">
                  <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{node.region}</p>
                  <p className="text-sm font-black text-slate-800 tracking-tight">{node.load}</p>
               </div>
            </div>
          ))}
       </div>

       <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* Live System Logs */}
          <div className="xl:col-span-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
             <div className="flex items-center justify-between">
                <div>
                   <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Infrastructure Logs</h3>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Platform-Level Event Stream</p>
                </div>
                <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">Clear History</button>
             </div>

             <div className="space-y-3">
                {logs.map((log) => (
                  <div key={log.id} className="p-4 bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 rounded-2xl transition-all group flex items-start gap-4">
                     <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 
                        ${log.type === 'ERROR' ? 'bg-rose-50 text-rose-500' : log.type === 'WARN' ? 'bg-amber-50 text-amber-500' : 'bg-indigo-50 text-indigo-500'}`}>
                        {log.type === 'ERROR' ? <AlertCircle size={18} /> : log.type === 'WARN' ? <ShieldAlert size={18} /> : <Zap size={18} />}
                     </div>
                     <div className="flex-1">
                        <div className="flex items-center justify-between mb-0.5">
                           <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{log.type} LOG • {log.time}</span>
                           <button className="p-1 text-slate-200 hover:text-slate-400 transition-colors"><MoreVertical size={14} /></button>
                        </div>
                        <p className="text-[11px] font-bold text-slate-800 leading-relaxed uppercase tracking-tight">{log.msg}</p>
                     </div>
                  </div>
                ))}
             </div>

             <button className="w-full py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl hover:bg-indigo-600 transition-all flex items-center justify-center gap-3">
                <Terminal size={14} /> Full Cluster Consistency Audit
             </button>
          </div>

          {/* Health & Availability Grid */}
          <div className="xl:col-span-4 space-y-6">
             <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group">
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <Signal size={16} className="text-indigo-400" />
                   </div>
                   <h3 className="text-xs font-black uppercase tracking-widest leading-none text-slate-100">Sub-system Health</h3>
                </div>
                <div className="space-y-6 relative z-10">
                   {[
                     { label: 'Database Shards', val: '94%', color: 'bg-emerald-500' },
                     { label: 'Asset CDN Cache', val: '88%', color: 'bg-indigo-500' },
                     { label: 'Auth Middleware', val: '100%', color: 'bg-emerald-500' },
                     { label: 'Email Gateway', val: '99%', color: 'bg-indigo-500' }
                   ].map((item, idx) => (
                     <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest">
                           <span className="text-slate-500">{item.label}</span>
                           <span className="text-white">{item.val}</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                           <div className={`h-full ${item.color} rounded-full opacity-80`} style={{ width: item.val }}></div>
                        </div>
                     </div>
                   ))}
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-[80px]"></div>
             </div>

             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 border border-indigo-100/50">
                   <Globe size={28} className="animate-spin-slow" />
                </div>
                <div className="w-full">
                   <h3 className="text-xs font-black text-slate-800 tracking-tight leading-none mb-6 uppercase">Regional Uptime Matrix</h3>
                   <div className="space-y-2 w-full">
                      {[
                        { reg: 'NA-EAST-CLUSTER', val: '99.98%' },
                        { reg: 'EU-CENTRAL-01', val: '99.95%' },
                        { reg: 'AP-SOUTH-TRANSIT', val: '99.91%' }
                      ].map((r, i) => (
                        <div key={i} className="flex justify-between items-center px-4 py-2.5 bg-slate-50 rounded-xl border border-transparent hover:border-slate-100 transition-all">
                           <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{r.reg}</span>
                           <span className="text-[9px] font-black text-slate-800 uppercase tabular-nums">{r.val}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

       </div>
    </div>
  );
};

export default SystemMonitoring;
