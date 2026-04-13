import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  Users,
  Briefcase,
  UserPlus,
  PlusCircle,
  Send,
  ChevronRight,
  AlertCircle,
  Wallet,
  BellRing,
  Check,
  Sparkles,
  LayoutDashboard,
  CreditCard,
  PieChart,
  BarChart3,
  ShieldCheck,
  FileText,
  Activity,
  ArrowRight,
  History
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = useMemo(() => [
    { title: 'Depts', value: '12', label: 'Departments', color: 'text-indigo-400' },
    { title: 'Active Jobs', value: '08', label: 'Hiring Roles', color: 'text-purple-400' },
    { title: 'Staff', value: '142', label: 'Total active', color: 'text-emerald-400' },
  ], []);

  const coreModules = [
    { 
      name: 'Recruitment', 
      desc: 'Job Postings, Candidate Tracking & Interviews', 
      icon: Briefcase, 
      path: '/admin/recruitment-control/hub', 
      color: 'bg-indigo-600',
      stats: '15 New Apps'
    },
    { 
      name: 'Payroll', 
      desc: 'Salary Structures, Payslips & Financial Audits', 
      icon: CreditCard, 
      path: '/admin/payroll-management', 
      color: 'bg-slate-900',
      stats: 'Fiscal Cycle: Active'
    },
    { 
      name: 'Company Policies', 
      desc: 'Operating Protocols & Compliance Documents', 
      icon: FileText, 
      path: '/admin/policies', 
      color: 'bg-emerald-600',
      stats: '12 Active'
    },
    { 
      name: 'Security Vault', 
      desc: 'Encrypted Document Storage & Audit Logs', 
      icon: ShieldCheck, 
      path: '/admin/security', 
      color: 'bg-amber-600',
      stats: '45 Secured'
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden rounded-[48px] bg-slate-900 p-16 text-white shadow-3xl shadow-slate-200">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
               <div className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-indigo-500/30">
                  Institutional Intelligence
               </div>
            </div>
            <h1 className="text-6xl font-black tracking-tight mb-4 leading-none lowercase underline decoration-indigo-500 underline-offset-[12px]">Welcome back, administrator.</h1>
            <p className="text-slate-400 font-bold text-xl leading-relaxed">Your infrastructure is stable. 100% of services are operational and secured across all departments.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-12 bg-white/5 backdrop-blur-2xl rounded-[40px] p-10 border border-white/5">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center px-4 first:pl-0 border-l border-white/10 first:border-0">
                <h3 className={`text-4xl font-black mb-1 ${stat.color}`}>{stat.value}</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Abstract Background Design */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* Connectivity Hub - Core Modules */}
      <section>
        <div className="flex items-center justify-between mb-8 px-4">
           <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-1">Administrative Core</h2>
              <p className="text-sm font-bold text-slate-800">Launch premium modules directly</p>
           </div>
           <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">Customize Hub</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
           {coreModules.map((module) => (
             <button
               key={module.name}
               onClick={() => navigate(module.name === 'admin dashboard' ? '/admin/dashboard' : module.path)}
               className="p-10 bg-white rounded-[56px] border border-slate-50 shadow-soft hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 group flex flex-col items-start text-left relative overflow-hidden h-[340px]"
             >
                <div className={`w-16 h-16 ${module.color} text-white rounded-[28px] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-3xl shadow-current/20`}>
                   <module.icon size={28} />
                </div>
                <div className="relative z-10 flex-1">
                   <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-loose uppercase group-hover:text-indigo-600 transition-colors">{module.name}</h3>
                   <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed mt-2 opacity-80">{module.desc}</p>
                </div>
                <div className="mt-8 flex items-center justify-between w-full relative z-10">
                   <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{module.stats}</span>
                   <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-200 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <ArrowRight size={18} />
                   </div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-slate-50 rounded-full translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             </button>
           ))}
        </div>
      </section>

      {/* Bottom Layout - Secondary Actions & Health */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-12">
         
         {/* System Quick Controls */}
         <section className="bg-white p-16 rounded-[64px] border border-slate-100 shadow-soft space-y-12">
            <div className="flex items-center justify-between">
               <div>
                  <h3 className="text-3xl font-black text-slate-800 tracking-tight leading-none mb-1 uppercase">Operational Controls</h3>
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Global platform commands</p>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { name: 'Add Personnel', icon: UserPlus, path: '/admin/employees/view', color: 'bg-indigo-50 text-indigo-600' },
                 { name: 'Deploy Update', icon: RefreshCw, path: '/admin/settings', color: 'bg-amber-50 text-amber-500' },
                 { name: 'Fiscal Report', icon: BarChart3, path: '/admin/payroll-management/reports', color: 'bg-emerald-50 text-emerald-600' },
                 { name: 'Audit Logs', icon: History, path: '/admin/security', color: 'bg-slate-50 text-slate-900' }
               ].map((action) => (
                 <button
                   key={action.name}
                   onClick={() => navigate(action.path)}
                   className="flex flex-col items-center justify-center p-8 bg-slate-50/50 rounded-[32px] hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all group active:scale-95"
                 >
                    <div className={`w-12 h-12 ${action.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                       <action.icon size={22} />
                    </div>
                    <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest whitespace-nowrap">{action.name}</span>
                 </button>
               ))}
            </div>
         </section>

         {/* Intelligence Health */}
         <section className="bg-slate-900 rounded-[64px] p-16 text-white relative overflow-hidden group shadow-3xl shadow-slate-100">
            <div className="relative z-10 space-y-8">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center border border-indigo-500/20">
                     <Activity size={24} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">System Health</h3>
               </div>
               
               <div className="space-y-10">
                  <div className="space-y-3">
                     <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                        <span>Database Integrity</span>
                        <span className="text-indigo-400">Stable</span>
                     </div>
                     <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden p-0.5">
                        <div className="h-full bg-indigo-500 rounded-full w-[94%]"></div>
                     </div>
                  </div>
                  <div className="space-y-3">
                     <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                        <span>Server Availability</span>
                        <span className="text-emerald-400">99.9%</span>
                     </div>
                     <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden p-0.5">
                        <div className="h-full bg-emerald-500 rounded-full w-[99%]"></div>
                     </div>
                  </div>
               </div>

               <div className="pt-8 border-t border-white/5">
                  <button onClick={() => navigate('/admin/settings')} className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] hover:text-white transition-colors flex items-center gap-3">
                     Detailed Diagnostics
                     <ArrowRight size={14} />
                  </button>
               </div>
            </div>
            <div className="absolute right-[-100px] bottom-[-100px] w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]"></div>
         </section>

      </div>

    </div>
  );
};

// Refresh Icon for Quick Actions
const RefreshCw = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

export default AdminDashboard;
