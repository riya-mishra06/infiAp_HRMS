import React, { useState, useEffect } from 'react';
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
  Mail,
  RefreshCw,
  Bell,
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAuth } from '../../context/AuthContext';
import { useEmployeeContext } from '../../context/EmployeeContext';

const MainDashboard = () => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRange, setFilterRange] = useState('Last 7 Days');
  
  const [stats, setStats] = useState({
    companies: { value: '1,084', change: '+2.4%', pos: true },
    employees: { value: '45.2k', change: '+4.1%', pos: true },
    hrManagers: { value: '312', change: '+1.2%', pos: true },
    activeUsers: { value: '12.8k', change: '-0.4%', pos: false },
    pending: { value: '43', change: '+12', pos: true },
    health: { value: '99.9%', pos: true }
  });

  const [alerts, setAlerts] = useState([
    { id: 1, title: 'API Latency Spike', msg: 'System observed a 15% increase in response time across North America clusters.', type: 'WARN', color: 'amber' },
    { id: 2, title: 'System Maintenance', msg: 'Scheduled database optimization completed successful at 02:00 AM EST.', type: 'INFO', color: 'blue' },
    { id: 3, title: 'Security Audit Passed', msg: 'Rapid7 vulnerability scan finished with zero critical failures.', type: 'SUCCESS', color: 'emerald' }
  ]);

  const [platformActivityData, setPlatformActivityData] = useState([
    { name: 'Mon', value: 400 },
    { name: 'Tue', value: 300 },
    { name: 'Wed', value: 600 },
    { name: 'Thu', value: 450 },
    { name: 'Fri', value: 500 },
    { name: 'Sat', value: 700 },
    { name: 'Sun', value: 550 },
  ]);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const dismissAlert = (id) => {
    setAlerts(prev => prev.filter(a => a.id !== id));
    showNotification('System Alert: Security event acknowledged and archived.');
  };

  const { fetchAllUsers } = useAuth();
  const { employees } = useEmployeeContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPlatformData = async () => {
      setIsLoading(true);
      const res = await fetchAllUsers();
      if (res.success) {
        const users = res.data;
        const hrCount = users.filter(u => u.role === 'hr').length;
        
        setStats(prev => ({
          ...prev,
          employees: { value: employees.length.toString(), change: '+4.1%', pos: true },
          hrManagers: { value: hrCount.toString(), change: '+1.2%', pos: true },
          activeUsers: { value: users.length.toString(), change: '+0.5%', pos: true }
        }));
      }
      setIsLoading(false);
    };

    loadPlatformData();

    // Simulate live health monitoring
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        health: { ...prev.health, value: (99.8 + Math.random() * 0.2).toFixed(1) + '%' }
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, [employees.length]);

  const handleRangeChange = (range) => {
    setFilterRange(range);
    // Randomize data for visual effect
    setPlatformActivityData(platformActivityData.map(d => ({ ...d, value: Math.floor(Math.random() * 500) + 200 })));
    showNotification(`Platform Metrics: Timeframe synchronized to ${range}.`);
  };

  const StatCard = ({ title, data, icon: Icon }) => (
    <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-[16px] flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
          {Icon ? <Icon size={20} /> : <div className="w-6 h-6 bg-slate-200 rounded-full" />}
        </div>
        {data.change && (
          <div className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-widest ${data.pos ? 'text-emerald-500' : 'text-rose-500'}`}>
            {data.pos ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            {data.change}
          </div>
        )}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.25em] leading-none mb-2">{title}</p>
        <p className="text-3xl font-black text-slate-800 tracking-tighter leading-none">{data.value}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1440px] mx-auto space-y-12 animate-in fade-in duration-1000 pb-32 relative">
      
      {/* Premium Notification Toast */}
      {notification && (
        <div className="fixed top-24 right-8 z-[100] animate-in slide-in-from-right-8 fade-in flex items-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-[24px] shadow-3xl border border-white/10">
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">{notification}</span>
        </div>
      )}

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 px-4">
        <div>
           <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 bg-indigo-600 text-white text-[8px] font-black rounded-full uppercase tracking-widest animate-pulse">LIVE INSTANCE</div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Master Governance Node</span>
           </div>
           <h1 className="text-5xl font-black text-slate-800 tracking-tighter leading-none mb-3 uppercase">Master Admin Panel</h1>
           <p className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] leading-none">Global HCM Enterprise Instance Overview</p>
        </div>
        <div className="flex items-center gap-4">
           <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
              <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search master logs, nodes, entities..." 
                className="bg-white border border-slate-100 rounded-[20px] pl-14 pr-8 py-4 text-xs font-bold w-full md:w-[320px] focus:ring-4 focus:ring-indigo-500/5 outline-none tracking-tight transition-all shadow-soft" 
              />
           </div>
           <div className="w-14 h-14 bg-white border border-slate-100 rounded-[20px] flex items-center justify-center text-slate-400 shadow-soft cursor-pointer hover:bg-slate-900 hover:text-white transition-all active:scale-95">
              <Bell size={22} />
           </div>
        </div>
      </div>

      {/* Stats Matrix */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 px-2">
        <StatCard title="Companies" data={stats.companies} icon={Building2} />
        <StatCard title="Personnel" data={stats.employees} icon={Users} />
        <StatCard title="HR Agents" data={stats.hrManagers} icon={UserPlus} />
        <StatCard title="Live Users" data={stats.activeUsers} icon={Activity} />
        <StatCard title="Backlog" data={stats.pending} icon={History} />
        <StatCard title="Node Health" data={stats.health} icon={Monitor} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 px-2">
        
        {/* Platform Activity Graph */}
        <div className="xl:col-span-8 space-y-10">
           <div className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-soft group relative overflow-hidden">
              <div className="flex items-center justify-between mb-10 relative z-10">
                 <div>
                    <h3 className="text-[12px] font-black text-slate-800 uppercase tracking-[0.3em] mb-1">Platform Throughput</h3>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Live activity metrics across all clusters</p>
                 </div>
                 <div className="relative">
                    <select 
                      value={filterRange}
                      onChange={(e) => handleRangeChange(e.target.value)}
                      className="bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 text-[10px] font-black text-slate-600 uppercase tracking-widest outline-none cursor-pointer hover:bg-white transition-all"
                    >
                       <option>Last 7 Days</option>
                       <option>Last 30 Days</option>
                       <option>Quarterly</option>
                    </select>
                 </div>
              </div>
              <div className="h-[320px] w-full relative z-10">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={platformActivityData}>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F8FAFC" />
                       <XAxis 
                          dataKey="name" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 10, fontWeight: 900, fill: '#CBD5E1' }} 
                          dy={15}
                       />
                       <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 10, fontWeight: 900, fill: '#CBD5E1' }} 
                       />
                       <Tooltip 
                          cursor={{ fill: 'rgba(99, 102, 241, 0.05)', radius: 12 }}
                          contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', padding: '20px' }}
                       />
                       <Bar dataKey="value" fill="#6366F1" radius={[8, 8, 0, 0]} barSize={44} />
                    </BarChart>
                 </ResponsiveContainer>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-[100px] -mr-32 -mt-32"></div>
           </div>

           {/* Registered Companies List */}
           <div className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-soft">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-[12px] font-black text-slate-800 uppercase tracking-[0.3em]">Institutional Nodes</h3>
                 <button 
                  onClick={() => showNotification('Audit Hub: Loading comprehensive node directory...')}
                  className="px-6 py-2.5 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-slate-900 hover:text-white transition-all"
                 >
                   View Master Directory
                 </button>
              </div>
              <div className="divide-y divide-slate-50">
                 {[
                   { id: 'velocity-tech', name: 'Velocity Tech', size: '1,200 Employees', status: 'ACTIVE', color: 'emerald' },
                   { id: 'nexus-logistics', name: 'Nexus Logistics', size: '840 Employees', status: 'PENDING', color: 'amber' },
                   { id: 'ecostream-sol', name: 'EcoStream Sol.', size: '410 Employees', status: 'ACTIVE', color: 'emerald' }
                 ].filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((company, i) => (
                   <div 
                     key={i} 
                     onClick={() => navigate(`/main-admin/company/${company.id}`)}
                     className="flex items-center justify-between py-6 group cursor-pointer"
                   >
                      <div className="flex items-center gap-6">
                         <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-[20px] flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                            <Building2 size={24} />
                         </div>
                         <div>
                            <p className="text-[13px] font-black text-slate-800 leading-none mb-1.5 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{company.name}</p>
                            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{company.size}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-6">
                         <span className={`px-5 py-2 rounded-full text-[9px] font-black tracking-[0.2em] bg-${company.color}-50 text-${company.color}-600 border border-${company.color}-100`}>
                           {company.status}
                         </span>
                         <div className="w-10 h-10 border border-slate-50 rounded-xl flex items-center justify-center text-slate-200 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all">
                            <ChevronRight size={18} />
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Right Sidebar Elements */}
        <div className="xl:col-span-4 space-y-10">
           
           {/* Quick Actions */}
           <div className="bg-slate-900 p-10 rounded-[48px] shadow-3xl shadow-slate-200 relative overflow-hidden group">
              <h3 className="text-[12px] font-black text-white uppercase tracking-[0.3em] mb-10 relative z-10">Command Center</h3>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                 {[
                   { label: 'Add Node', icon: Plus, action: () => navigate('/main-admin/company-setup'), primary: true },
                   { label: 'Provision User', icon: UserPlus, action: () => navigate('/main-admin/user-management?view=add-admin') },
                   { label: 'Deep Audit', icon: BarChart3, action: () => showNotification('Audit Engine: Initializing deep packet inspection across all nodes...') },
                   { label: 'Broadcaster', icon: Radio, action: () => showNotification('Communication Hub: Preparing global institutional broadcast payload...') }
                 ].map((btn, i) => (
                   <button 
                     key={i} 
                     onClick={btn.action}
                     className={`flex flex-col items-center justify-center gap-4 p-8 rounded-[32px] transition-all active:scale-95 border-2
                        ${btn.primary 
                          ? 'bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-900/40 hover:bg-white hover:text-indigo-600 hover:border-white' 
                          : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white hover:text-slate-900 hover:border-white'}`}
                   >
                      <btn.icon size={24} />
                      <span className="text-[9px] font-black uppercase tracking-[0.25em]">{btn.label}</span>
                   </button>
                 ))}
              </div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]"></div>
           </div>

           {/* System Health / Integrations */}
           <div className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-soft space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.3em]">Master Interconnects</h3>
                <RefreshCw size={14} className="text-slate-300 animate-spin-slow" />
              </div>
              <div className="space-y-4">
                 {[
                   { name: 'AWS Cloud Engine', status: 'Operational', icon: Globe, color: 'emerald' },
                   { name: 'Slack Protocol', status: 'Operational', icon: Activity, color: 'emerald' },
                   { name: 'SendGrid Grid', status: 'Inbound Only', icon: Mail, color: 'amber' }
                 ].map((int, i) => (
                   <div key={i} className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-[24px] group hover:border-indigo-100 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-400 group-hover:bg-slate-900 group-hover:text-white transition-all">
                          <int.icon size={16} />
                        </div>
                        <div>
                          <p className="text-[11px] font-black text-slate-800 uppercase tracking-tight">{int.name}</p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <div className={`w-1.5 h-1.5 rounded-full bg-${int.color}-500`}></div>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">{int.status}</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight size={14} className="text-slate-200" />
                   </div>
                 ))}
              </div>
           </div>

           {/* System Alerts */}
           <div className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-soft">
              <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.3em] mb-10">Threat Intelligence</h3>
              <div className="space-y-10 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-50">
                 {alerts.map((alert, i) => (
                   <div key={alert.id} className="relative pl-8 group cursor-pointer" onClick={() => dismissAlert(alert.id)}>
                      <div className={`absolute left-[-4px] top-1.5 w-2 h-2 rounded-full shadow-lg transition-transform group-hover:scale-150 ring-4 ring-white ${
                        alert.type === 'WARN' ? 'bg-amber-500 shadow-amber-200' : 
                        alert.type === 'SUCCESS' ? 'bg-emerald-500 shadow-emerald-200' : 
                        'bg-blue-500 shadow-blue-200'
                      }`}></div>
                      <h4 className="text-sm font-black text-slate-800 mb-1.5 uppercase tracking-tight group-hover:text-indigo-600 transition-colors">{alert.title}</h4>
                      <p className="text-[10px] font-black text-slate-400 leading-relaxed uppercase tracking-widest">{alert.msg}</p>
                      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all flex items-center gap-2 text-[8px] font-black text-slate-300 uppercase tracking-widest">
                         <RefreshCw size={10} /> Click to Ack Protocol
                      </div>
                   </div>
                 ))}
                 {alerts.length === 0 && (
                   <div className="py-20 text-center">
                      <CheckCircle2 size={40} className="mx-auto text-emerald-500 mb-4 opacity-50" />
                      <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">All protocols nominal</p>
                   </div>
                 )}
              </div>
           </div>

        </div>

      </div>

    </div>
  );
};

export default MainDashboard;
