import React from 'react';
import { 
  Building2, 
  Users, 
  Settings, 
  Activity, 
  BarChart3, 
  AlertCircle, 
  Plus, 
  UserPlus, 
  History, 
  Radio,
  ChevronRight,
  Monitor,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  ShieldAlert,
  Globe,
  Mail
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MainDashboard = () => {
  const navigate = useNavigate();

  const platformActivityData = [
    { name: 'Mon', value: 400 },
    { name: 'Tue', value: 300 },
    { name: 'Wed', value: 600 },
    { name: 'Thu', value: 450 },
    { name: 'Fri', value: 500 },
    { name: 'Sat', value: 700 },
    { name: 'Sun', value: 550 },
  ];

  const StatCard = ({ title, value, change, isPositive, icon: Icon }) => (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center">
          {Icon ? <Icon size={18} /> : <div className="w-5 h-5 bg-slate-200 rounded-full" />}
        </div>
        {change && (
          <div className={`flex items-center gap-1 text-[10px] font-bold ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
            {isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
            {change}
          </div>
        )}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mb-2">{title}</p>
        <p className="text-3xl font-black text-slate-800 tracking-tighter leading-none">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1440px] mx-auto space-y-8 animate-in fade-in duration-700 pb-20">
      
      {/* Header Section */}
      <div className="flex items-end justify-between px-2">
        <div>
           <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
              <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Global Platform Node</span>
           </div>
           <h1 className="text-4xl font-black text-slate-800 tracking-tight leading-none mb-2 text-left uppercase">Main Admin Dashboard</h1>
           <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-1 leading-none text-left">Enterprise Instance Overview & Control</p>
        </div>
        <div className="flex items-center gap-4">
           <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={16} />
              <input type="text" placeholder="Search documents, entities, logs..." className="bg-white border border-slate-100 rounded-xl pl-12 pr-6 py-2.5 text-xs font-bold w-64 focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all" />
           </div>
        </div>
      </div>

      {/* Stats Matrix */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard title="Companies" value="1,084" change="+2.4%" isPositive={true} icon={Building2} />
        <StatCard title="Total Employees" value="45.2k" change="+4.1%" isPositive={true} icon={Users} />
        <StatCard title="HR Managers" value="312" change="+1.2%" isPositive={true} icon={UserPlus} />
        <StatCard title="Active Users" value="12.8k" change="-0.4%" isPositive={false} icon={Activity} />
        <StatCard title="Pending" value="43" change="+12" isPositive={true} icon={History} />
        <StatCard title="System Health" value="99.9%" isPositive={true} icon={Monitor} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Platform Activity Graph */}
        <div className="xl:col-span-8 space-y-6">
           <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Platform Activity</h3>
                 <select className="bg-slate-50 border-0 rounded-lg px-3 py-2 text-[10px] font-bold text-slate-500 outline-none">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                 </select>
              </div>
              <div className="h-[280px] w-full relative overflow-hidden mt-4">
                 <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                    <BarChart data={platformActivityData}>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                       <XAxis 
                          dataKey="name" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 10, fontWeight: 700, fill: '#94A3B8' }} 
                          dy={10}
                       />
                       <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 10, fontWeight: 700, fill: '#94A3B8' }} 
                       />
                       <Tooltip 
                          cursor={{ fill: '#F8FAFC' }}
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                       />
                       <Bar dataKey="value" fill="#6366F1" radius={[4, 4, 0, 0]} barSize={40} />
                    </BarChart>
                 </ResponsiveContainer>
              </div>
           </div>

           {/* Registered Companies List */}
           <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em]">Registered Companies</h3>
                 <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                 {[
                   { id: 'velocity-tech', name: 'Velocity Tech', size: '1,200 Employees', status: 'ACTIVE', color: 'emerald' },
                   { id: 'nexus-logistics', name: 'Nexus Logistics', size: '840 Employees', status: 'PENDING', color: 'amber' },
                   { id: 'ecostream-sol', name: 'EcoStream Sol.', size: '410 Employees', status: 'ACTIVE', color: 'emerald' }
                 ].map((company, i) => (
                   <div 
                     key={i} 
                     onClick={() => navigate(`/main-admin/company/${company.id}`)}
                     className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 cursor-pointer group"
                   >
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                            <Building2 size={18} />
                         </div>
                         <div>
                            <p className="text-sm font-black text-slate-800 leading-none mb-1 group-hover:text-indigo-600 transition-colors">{company.name}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{company.size}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4">
                         <span className={`px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest bg-${company.color}-50 text-${company.color}-600 border border-${company.color}-100`}>
                           {company.status}
                         </span>
                         <ChevronRight size={14} className="text-slate-200 group-hover:text-indigo-600 transition-all group-hover:translate-x-1" />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Right Sidebar Elements */}
        <div className="xl:col-span-4 space-y-6">
           
           {/* Quick Actions */}
           <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em] mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                 {[
                   { label: 'Add Company', icon: Plus, action: () => navigate('/main-admin/company-setup'), primary: true },
                   { label: 'New User', icon: UserPlus, action: () => navigate('/main-admin/user-management?view=add-admin') },
                   { label: 'Run Audit', icon: BarChart3, action: () => {} },
                   { label: 'Broadcast', icon: Radio, action: () => {} }
                 ].map((btn, i) => (
                   <button 
                     key={i} 
                     onClick={btn.action}
                     className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all active:scale-95 border
                        ${btn.primary 
                          ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-100' 
                          : 'bg-white border-slate-100 text-slate-600 hover:border-indigo-200 hover:bg-slate-50'}`}
                   >
                      <btn.icon size={20} />
                      <span className="text-[9px] font-black uppercase tracking-widest">{btn.label}</span>
                   </button>
                 ))}
              </div>
           </div>

           {/* Active Integrations */}
           <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em] mb-6">Active Integrations</h3>
              <div className="flex flex-wrap gap-2">
                 {[
                   { name: 'AWS S3', icon: Globe },
                   { name: 'Slack Bot', icon: Activity },
                   { name: 'SendGrid', icon: Mail }
                 ].map((int, i) => (
                   <div key={i} className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-100 rounded-xl">
                      <int.icon size={12} className="text-indigo-400" />
                      <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{int.name}</span>
                   </div>
                 ))}
              </div>
           </div>

           {/* System Alerts */}
           <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em] mb-6">System Alerts</h3>
              <div className="space-y-4">
                 {[
                   { title: 'API Latency Spike', msg: 'System observed a 15% increase in response time across North America clusters.', type: 'WARN', color: 'amber' },
                   { title: 'System Maintenance', msg: 'Scheduled database optimization completed successful at 02:00 AM EST.', type: 'INFO', color: 'blue' },
                   { title: 'Security Audit Passed', msg: 'Rapid7 vulnerability scan finished with zero critical failures.', type: 'SUCCESS', color: 'emerald' }
                 ].map((alert, i) => (
                   <div key={i} className="group cursor-pointer">
                      <div className="flex items-center gap-2 mb-2">
                         <div className={`w-1.5 h-1.5 rounded-full bg-${alert.color}-500`}></div>
                         <span className="text-xs font-black text-slate-800">{alert.title}</span>
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 leading-relaxed uppercase tracking-widest group-hover:text-slate-600 transition-colors">{alert.msg}</p>
                   </div>
                 ))}
              </div>
           </div>

        </div>

      </div>

    </div>
  );
};

export default MainDashboard;
