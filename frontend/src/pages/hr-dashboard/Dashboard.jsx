import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  Users,
  Briefcase,
  Wallet,
  UserPlus,
  PlusCircle,
  Send,
  ChevronRight,
  Sparkles,
  Clock3,
  Check,
  X,
  BellRing,
  CircleDot,
  ArrowUpRight,
  TrendingUp,
  Layout,
  BarChart3,
  Activity,
  UserCheck
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [leaveStatus, setLeaveStatus] = useState('pending');

  const stats = [
    { title: 'Departments', value: '08', icon: Building2, trend: '+1', color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { title: 'Employees', value: '320', icon: Users, trend: '+4.2%', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { title: 'Active Jobs', value: '12', icon: Briefcase, trend: '+2', color: 'text-amber-500', bg: 'bg-amber-50' },
    { title: 'Monthly Payroll', value: '$85.4k', icon: Wallet, trend: '+4%', color: 'text-rose-500', bg: 'bg-rose-50' },
  ];

  const recentActivity = [
    { title: 'Payroll processed for Sales Department', time: 'Today at 10:15 AM', type: 'PAYROLL' },
    { title: 'New hire Michael Scott onboarded', time: 'Yesterday at 04:30 PM', type: 'HIRING' },
    { title: 'Announcement: Friday team sync at 3 PM', time: 'Oct 10, 2023', type: 'SYSTEM' },
  ];

  const StatCard = ({ title, value, trend, icon: Icon, color, bg }) => (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm group hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-50 transition-all">
       <div className="flex items-center justify-between mb-4">
          <div className={`w-10 h-10 ${bg} ${color} rounded-xl flex items-center justify-center transition-transform group-hover:scale-110`}>
             {Icon ? <Icon size={18} /> : <div className="w-5 h-5 bg-slate-200 rounded-full" />}
          </div>
          <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg uppercase tracking-widest">{trend}</span>
       </div>
       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{title}</p>
       <h3 className="text-xl font-black text-slate-800 tracking-tight">{value}</h3>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700 pb-40">
       
       <div className="flex items-center justify-between border-b border-slate-50 pb-8">
          <div>
             <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase">HR Management Console</h1>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Operational Insights & Workforce Orchestration</p>
          </div>
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg hover:bg-indigo-600 transition-all active:scale-95">
                <PlusCircle size={14} /> New Action
             </button>
          </div>
       </div>

       {/* Stats Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
             <StatCard key={i} {...stat} />
          ))}
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Feed Column */}
          <div className="lg:col-span-8 space-y-8">
             
             {/* Quick Operational Actions */}
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
                <div className="flex items-center justify-between pb-6 border-b border-slate-50">
                   <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Precision Actions</h3>
                   <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">Full Directory</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                   {[
                      { label: 'Add Employee', icon: UserPlus, path: '/employees/add' },
                      { label: 'Create Department', icon: Building2, path: '/admin/department-management/create' },
                      { label: 'Post Opportunity', icon: Send, path: '/recruitment/create' }
                   ].map((action, i) => (
                      <button 
                         key={i}
                         onClick={() => navigate(action.path)}
                         className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-50/50 transition-all group"
                      >
                         <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm transition-transform group-hover:scale-110">
                            <action.icon size={18} />
                         </div>
                         <span className="text-[11px] font-black text-slate-800 uppercase tracking-tight">{action.label}</span>
                      </button>
                   ))}
                </div>
             </div>

             {/* Recent Activity Stream */}
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
                <div className="flex items-center justify-between pb-6 border-b border-slate-50">
                   <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Operational Stream</h3>
                   <Activity size={16} className="text-slate-300" />
                </div>
                <div className="space-y-4">
                   {recentActivity.map((activity, i) => (
                      <div key={i} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-100">
                         <div className="w-10 h-10 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center shrink-0">
                            <CircleDot size={14} className="animate-pulse" />
                         </div>
                         <div className="flex-1">
                            <p className="text-[11px] font-black text-slate-800 leading-relaxed uppercase tracking-tight">{activity.title}</p>
                            <div className="flex items-center gap-3 mt-1.5">
                               <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{activity.time}</span>
                               <span className="text-[8px] font-black text-indigo-300 uppercase tracking-widest">#{activity.type}</span>
                            </div>
                         </div>
                         <ChevronRight size={14} className="text-slate-200 mt-2" />
                      </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Right/Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">
             
             {/* Pending Leave Request Card */}
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
                <div className="flex items-center justify-between pb-6 border-b border-slate-50">
                   <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Pending Approvals</h3>
                   <span className="px-2 py-0.5 bg-amber-50 text-amber-500 text-[8px] font-black rounded uppercase">1 Urgent</span>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">JM</div>
                      <div>
                         <p className="text-xs font-black text-slate-800 uppercase tracking-tight mb-0.5">Jessica Miller</p>
                         <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Sick Leave • 2 Days</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <button className="py-3 bg-white border border-slate-200 text-slate-400 text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-rose-50 hover:text-rose-600 hover:border-rose-100 transition-all">Reject</button>
                      <button className="py-3 bg-indigo-600 text-white text-[9px] font-black uppercase tracking-widest rounded-xl shadow-lg hover:bg-slate-900 transition-all">Approve</button>
                   </div>
                </div>
             </div>

             {/* Workforce Insight Card */}
             <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl shadow-slate-100 relative overflow-hidden group">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">System Insights</h3>
                   <Sparkles size={16} className="text-indigo-400" />
                </div>
                <p className="text-lg font-black tracking-tight leading-tight uppercase">Workforce health is stable and trending <span className="text-emerald-400">upward</span> this week.</p>
                <div className="mt-8 flex items-center gap-3">
                   <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <TrendingUp size={16} className="text-white" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Efficiency +8.4%</span>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-[80px]"></div>
             </div>

          </div>

       </div>
    </div>
  );
};

export default Dashboard;
