import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
   Users,
   Calendar,
   Clock,
   CheckCircle2,
   TrendingUp,
   TrendingDown,
   ArrowUpRight,
   MoreHorizontal,
   BellRing,
   DollarSign,
   ClipboardList
} from 'lucide-react';
import {
   AreaChart,
   Area,
   ResponsiveContainer,
   XAxis,
   YAxis,
   Tooltip,
   CartesianGrid,
   BarChart,
   Bar
} from 'recharts';

const Dashboard = () => {
   const navigate = useNavigate();
   const [notification, setNotification] = useState(null);

   const showNotification = (msg) => {
      setNotification(msg);
      setTimeout(() => setNotification(null), 3000);
   };

   const stats = [
      { title: 'Total Employee', value: '428', change: '+12%', icon: Users, color: 'text-primary-600', bg: 'bg-primary-50', link: '/employees' },
      { title: 'Attendance Today', value: '94.2%', change: '+2.4%', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50', link: '/attendance' },
      { title: 'Pending Leaves', value: '18', change: '-4', icon: ClipboardList, color: 'text-orange-600', bg: 'bg-orange-50', link: '/leave' },
      { title: 'Monthly Payroll', value: '₹4.2M', change: 'Normal', icon: DollarSign, color: 'text-indigo-600', bg: 'bg-indigo-50', link: '/payroll' },
   ];

   const trendData = [
      { name: 'Mon', present: 380, absent: 20 },
      { name: 'Tue', present: 395, absent: 15 },
      { name: 'Wed', present: 410, absent: 5 },
      { name: 'Thu', present: 385, absent: 30 },
      { name: 'Fri', present: 405, absent: 10 },
   ];

   return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 w-full relative pt-4 px-1">

         {/* Global Notification */}
         {notification && (
            <div className="fixed top-24 right-8 z-[100] animate-in slide-in-from-right-8 fade-in flex items-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/10">
               <BellRing size={20} className="text-primary-400" />
               <span className="text-sm font-bold tracking-tight">{notification}</span>
            </div>
         )}

         {/* Header */}
         <div className="p-8 border-b border-slate-50 flex items-center justify-between">
           <div>
              <h1 className="text-4xl font-black text-slate-800 tracking-tight mb-2">Command Center</h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Global Administrative Oversight & Performance Diagnostic</p>
           </div>
            <div className="flex items-center gap-4">
               <button
                  onClick={() => showNotification("Syncing real-time Employee data...")}
                  className="px-6 py-3 bg-white border border-slate-100 text-slate-500 font-black text-[10px] uppercase rounded-2xl hover:bg-slate-50 transition-all shadow-sm active:scale-95"
               >
                  Refresh Data
               </button>
               <button
                  onClick={() => navigate('/employees/add')}
                  className="px-8 py-3 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 uppercase tracking-widest text-[10px]"
               >
                  Quick Onboard
               </button>
            </div>
         </div>

         {/* Stats Grid (Interactive Highlights) */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
               <div
                  key={idx}
                  onClick={() => { showNotification(`Navigating to ${stat.title}...`); navigate(stat.link); }}
                  className="card-soft group hover:translate-y-[-8px] hover:shadow-2xl hover:border-primary-100 transition-all duration-500 border-slate-100 bg-white p-8 cursor-pointer relative overflow-hidden"
               >
                  <div className="flex items-start justify-between mb-8 relative z-10">
                     <div className={`p-4 rounded-[22px] ${stat.bg} ${stat.color} group-hover:rotate-12 transition-all shadow-inner`}>
                        <stat.icon size={28} strokeWidth={2.5} />
                     </div>
                     <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1 text-[11px] font-black text-green-500 uppercase tracking-tighter">
                           <TrendingUp size={12} />
                           {stat.change}
                        </div>
                        <ArrowUpRight size={18} className="text-slate-200 group-hover:text-primary-400 group-hover:translate-x-1 transition-all mt-1" />
                     </div>
                  </div>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest relative z-10">{stat.title}</p>
                  <h3 className="text-4xl font-black text-slate-800 tracking-tighter mt-2 relative z-10">{stat.value}</h3>

                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary-50 transition-colors"></div>
               </div>
            ))}
         </div>

         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Main Analytics Hub */}
            <div className="xl:col-span-2 space-y-8">
               <div className="card-soft bg-white p-10 border-slate-100 shadow-soft">
                  <div className="flex items-center justify-between mb-12">
                     <div>
                        <h2 className="text-xl font-black text-slate-800 tracking-tight underline underline-offset-8 decoration-primary-200">Employee Pulse Diagnostic</h2>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-3">Live attendance trends for current week</p>
                     </div>
                     <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                           <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Present</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <div className="w-3 h-3 bg-red-100 rounded-full border border-red-200"></div>
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Absent</span>
                        </div>
                     </div>
                  </div>

                  <div className="h-[360px] w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={trendData} barGap={12}>
                           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                           <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 900 }} />
                           <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 900 }} />
                           <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }} />
                           <Bar dataKey="present" fill="#6366f1" radius={[8, 8, 8, 8]} barSize={32} />
                           <Bar dataKey="absent" fill="#fee2e2" radius={[8, 8, 8, 8]} barSize={32} />
                        </BarChart>
                     </ResponsiveContainer>
                  </div>
               </div>
            </div>

            {/* Real-time Intel (Sidebar) */}
            <div className="space-y-8">
               <div className="card-soft bg-slate-900 border-none relative overflow-hidden text-white shadow-2xl p-10 min-h-[500px] flex flex-col group">
                  <div className="relative z-10 flex-1 flex flex-col">
                     <div className="flex items-center justify-between mb-12">
                        <h3 className="text-sm font-black uppercase tracking-[0.3em] opacity-40">System Intel</h3>
                        <TrendingUp size={24} className="text-primary-500 group-hover:scale-125 transition-transform" />
                     </div>

                     <div className="space-y-10 flex-1">
                        {[
                           { label: 'Cloud Synchronicity', value: 98, color: 'bg-primary-500' },
                           { label: 'Employee Retention', value: 92, color: 'bg-indigo-500' },
                           { label: 'Task Throughput', value: 84, color: 'bg-orange-500' },
                        ].map((item, i) => (
                           <div key={i} className="space-y-4">
                              <div className="flex justify-between items-end">
                                 <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                                 <span className="text-sm font-black text-white">{item.value}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 shadow-inner">
                                 <div className={`h-full ${item.color} rounded-full animate-in slide-in-from-left-4 duration-1500`} style={{ width: `${item.value}%` }}></div>
                              </div>
                           </div>
                        ))}
                     </div>

                     <div
                        onClick={() => navigate('/analytics')}
                        className="mt-12 p-6 bg-white/5 rounded-[32px] border border-white/5 group-hover:bg-white/10 transition-all cursor-pointer text-center"
                     >
                        <p className="text-[11px] font-black text-primary-400 uppercase tracking-widest mb-1">Deep Analytics Hub</p>
                        <p className="text-xs text-white/50 font-medium">Access full predictive modeling suite</p>
                     </div>
                  </div>

                  <div className="absolute top-0 right-0 w-80 h-80 bg-primary-600/10 rounded-full blur-[120px] -mr-40 -mt-40 transition-all group-hover:bg-primary-600/20"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
