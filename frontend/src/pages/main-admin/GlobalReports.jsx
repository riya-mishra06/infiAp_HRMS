import React from 'react';
import { 
  BarChart as RechartBar, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell, 
  PieChart as RechartPie, 
  Pie,
  LineChart,
  Line,
  CartesianGrid,
  AreaChart,
  Area
} from 'recharts';
import { 
  PieChart, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Globe, 
  ArrowUpRight, 
  ArrowDownRight, 
  Search, 
  ChevronRight, 
  Calendar,
  Filter,
  BarChart3,
  Download,
  Layout
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GlobalReports = () => {
  const navigate = useNavigate();

  const companyPerformance = [
    { name: 'Acme Corp', value: 450000, color: '#6366f1' },
    { name: 'Globex Inc.', value: 380000, color: '#8b5cf6' },
    { name: 'AlphaTech', value: 520000, color: '#10b981' },
    { name: 'Cyberdyne', value: 290000, color: '#f59e0b' },
  ];

  const trendData = [
    { month: 'May', companies: 32, users: 8400, revenue: 2.1 },
    { month: 'Jun', companies: 35, users: 9100, revenue: 2.4 },
    { month: 'Jul', companies: 37, users: 9800, revenue: 2.8 },
    { month: 'Aug', companies: 40, users: 11200, revenue: 3.2 },
    { month: 'Sep', companies: 42, users: 12400, revenue: 3.8 },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{payload[0].payload.month || payload[0].payload.name}</p>
          <p className="text-sm font-black text-white tracking-tight">
            {payload[0].value.toLocaleString()} {payload[0].name === 'revenue' ? 'M' : ''}
          </p>
        </div>
      );
    }
    return null;
  };

  const StatCard = ({ label, value, trend, isPositive, icon: Icon, color, bg }) => (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm group hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-50 transition-all">
       <div className="flex items-center justify-between mb-6">
          <div className={`w-10 h-10 ${bg} ${color} rounded-xl flex items-center justify-center transition-transform group-hover:scale-110`}>
             {Icon ? <Icon size={18} /> : <div className="w-5 h-5 bg-slate-200 rounded-full" />}
          </div>
          <div className={`flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-full ${isPositive ? 'bg-emerald-50 text-emerald-500' : 'bg-rose-50 text-rose-500'}`}>
             {isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
             {trend}
          </div>
       </div>
       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
       <h3 className="text-xl font-black text-slate-800 tracking-tight">{value}</h3>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700 pb-40">
       
       <div className="flex items-center justify-between border-b border-slate-50 pb-8">
          <div>
             <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase">Global Analytics</h1>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Multi-tenant Performance & Growth Diagnostics</p>
          </div>
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-100 rounded-xl text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50 transition-all">
                <Calendar size={14} /> Last Quarter
             </button>
             <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-indigo-100">
                <Download size={14} /> Export Report
             </button>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard label="Annual Revenue" value="$42.8M" trend="+14.2%" isPositive={true} icon={DollarSign} color="text-indigo-600" bg="bg-indigo-50" />
          <StatCard label="Active Employees" value="124.5k" trend="+8.1%" isPositive={true} icon={Users} color="text-emerald-500" bg="bg-emerald-50" />
          <StatCard label="Market Coverage" value="18 Countries" trend="-2.4%" isPositive={false} icon={Globe} color="text-amber-500" bg="bg-amber-50" />
       </div>

       <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* Revenue distribution (Multi-column Desktop friendly) */}
          <div className="xl:col-span-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
             <div className="flex items-center justify-between">
                <div>
                   <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Revenue Distribution</h3>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Top Performing Organization Instances</p>
                </div>
                <div className="flex items-center gap-2">
                   <button className="p-2 text-slate-300 hover:text-indigo-600 transition-colors">
                      <Filter size={16} />
                   </button>
                </div>
             </div>

             <div className="h-[340px] w-full relative overflow-hidden mt-4">
                <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                   <AreaChart data={trendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 9, fontWeight: 700, fill:'#94A3B8'}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 9, fontWeight: 700, fill:'#94A3B8'}} />
                      <Tooltip content={<CustomTooltip />} />
                      <Area type="monotone" dataKey="revenue" name="revenue" stroke="#4F46E5" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                   </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          {/* Platform Share Pie Chart */}
          <div className="xl:col-span-4 bg-slate-900 p-10 rounded-3xl text-white shadow-xl flex flex-col items-center relative overflow-hidden">
             <div className="text-center w-full mb-8 relative z-10">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-200">Platform Share</h3>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-1">Tenant Market Occupancy</p>
             </div>

             <div className="h-[220px] w-full relative z-10 overflow-hidden mb-8">
                <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                   <RechartPie>
                      <Pie
                         data={companyPerformance}
                         innerRadius={65}
                         outerRadius={85}
                         paddingAngle={6}
                         dataKey="value"
                      >
                         {companyPerformance.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                         ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                   </RechartPie>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                   <span className="text-2xl font-black text-white tracking-tight leading-none">42</span>
                   <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-1">Orgs</span>
                </div>
             </div>

             <div className="w-full space-y-4 relative z-10">
                {companyPerformance.map((company, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-3">
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: company.color }}></div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{company.name}</span>
                     </div>
                     <span className="text-xs font-black text-white tabular-nums">${(company.value / 1000).toLocaleString()}k</span>
                  </div>
                ))}
             </div>
             
             {/* Decorative radial blur */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-[80px]"></div>
          </div>

       </div>

    </div>
  );
};

export default GlobalReports;
