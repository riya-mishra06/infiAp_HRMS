import React from 'react';
import { 
  Building2, 
  Users, 
  MapPin, 
  Globe, 
  Contact, 
  ChevronLeft, 
  ArrowUpRight, 
  CreditCard, 
  History, 
  ShieldAlert, 
  ChevronRight,
  MoreVertical,
  Edit3,
  ExternalLink,
  Plus,
  FileText
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const CompanyDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const companyData = {
    name: 'Acme Corp',
    status: 'ACTIVE',
    website: 'acmecorp.com',
    industry: 'Software & Technology',
    size: '1,000 - 5,000 employees',
    headquarters: 'San Francisco, CA',
    primaryContact: 'Jane Smith (HR Director)',
    stats: {
      totalEmployees: '1,240',
      activeUsers: '982',
      departments: '12',
      growth: '+12%',
      target: '1,100'
    },
    billing: {
      plan: 'Enterprise Plan',
      features: 'Full suite, unlimited storage',
      price: '$2,450.00',
      period: '/month',
      renewal: 'Oct 12, 2024',
      nextPayment: 'Sept 12, 2024'
    },
    activity: [
      { type: 'USER', msg: 'New user added: Marcus Aurelius (Marketing)', time: '2 hours ago', icon: Plus, color: 'text-emerald-500', bg: 'bg-emerald-50' },
      { type: 'POLICY', msg: 'Security Policy Update: Enabled 2FA for all admins', time: 'Yesterday, 4:15 PM', icon: ShieldAlert, color: 'text-indigo-500', bg: 'bg-indigo-50' },
      { type: 'BILLING', msg: 'Billing cycle completed: Invoice #INV-8821 paid', time: 'Aug 25, 2024', icon: History, color: 'text-amber-500', bg: 'bg-amber-50' },
    ]
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700 pb-40">
       
       <div className="flex items-center justify-between border-b border-slate-50 pb-8">
          <div className="flex items-center gap-4">
             <button onClick={() => navigate('/main-admin/dashboard')} className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:text-indigo-600 transition-all">
                <ChevronLeft size={20} />
             </button>
             <div>
                <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase">InfiAP Admin</h1>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Company Directory / Profile</p>
             </div>
          </div>
          <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all">
             <MoreVertical size={18} />
          </button>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
             
             {/* Company Hero Card (Screen 4) */}
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 shadow-inner group">
                   <Building2 size={40} className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1 text-center md:text-left">
                   <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                      <h2 className="text-2xl font-black text-slate-800 tracking-tight uppercase">{companyData.name}</h2>
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[8px] font-black rounded-lg uppercase tracking-widest leading-none">ACTIVE</span>
                   </div>
                   <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-black text-slate-400 lowercase hover:text-indigo-600 cursor-pointer transition-colors">
                      <Globe size={14} className="text-slate-300" /> @{companyData.website}
                   </div>
                </div>
                <div className="flex flex-col gap-2 w-full md:w-auto">
                   <button className="px-8 py-3 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg hover:bg-slate-900 transition-all flex items-center justify-center gap-2">
                      Edit Profile
                   </button>
                   <button onClick={() => navigate('/main-admin/user-management')} className="px-8 py-3 bg-white border border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                      Manage Users
                   </button>
                </div>
             </div>

             {/* Company Information (Screen 4 style) */}
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
                <div className="flex items-center gap-4 pb-6 border-b border-slate-50">
                   <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                      <Building2 size={18} />
                   </div>
                   <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Company Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-1">
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none">Industry</p>
                      <p className="text-sm font-black text-slate-800 tracking-tight">{companyData.industry}</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none">Company Size</p>
                      <p className="text-sm font-black text-slate-800 tracking-tight">{companyData.size}</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none">Headquarters</p>
                      <p className="text-sm font-black text-slate-800 tracking-tight">{companyData.headquarters}</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none">Primary Contact</p>
                      <div className="flex items-center gap-2 pt-1">
                         <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center text-[8px] font-black text-white shadow-sm ring-2 ring-white overflow-hidden">
                            <Users size={10} />
                         </div>
                         <p className="text-sm font-black text-slate-800 tracking-tight">{companyData.primaryContact}</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Subscription & Billing (Screen 4 style) */}
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
                <div className="flex items-center justify-between pb-6 border-b border-slate-50">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center">
                         <CreditCard size={18} />
                      </div>
                      <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Subscription & Billing</h3>
                   </div>
                   <button className="text-[9px] font-black text-indigo-600 uppercase tracking-widest hover:underline flex items-center gap-1">
                      View Invoices <ExternalLink size={10} />
                   </button>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                         <Building2 size={24} />
                      </div>
                      <div>
                         <p className="text-sm font-black text-slate-800 leading-none mb-1 uppercase tracking-tight">{companyData.billing.plan}</p>
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">{companyData.billing.features}</p>
                      </div>
                   </div>
                   <div className="text-center md:text-right">
                      <p className="text-xl font-black text-slate-800 tracking-tighter leading-none mb-1">{companyData.billing.price}</p>
                      <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{companyData.billing.period}</p>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center md:text-left">
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1.5">Renewal Date</p>
                      <p className="text-sm font-black text-slate-800 tabular-nums uppercase tracking-tight">{companyData.billing.renewal}</p>
                   </div>
                   <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center md:text-left">
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1.5">Next Payment</p>
                      <p className="text-sm font-black text-slate-800 tabular-nums uppercase tracking-tight">{companyData.billing.nextPayment}</p>
                   </div>
                </div>
             </div>

             {/* Recent Activity (Screen 4 style) */}
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
                <div className="flex items-center gap-4 pb-6 border-b border-slate-50">
                   <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center">
                      <History size={18} />
                   </div>
                   <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Recent Activity</h3>
                </div>
                <div className="space-y-4">
                   {companyData.activity.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-all group border border-transparent hover:border-slate-100">
                         <div className={`w-10 h-10 ${item.bg} ${item.color} rounded-xl shrink-0 flex items-center justify-center`}>
                            <item.icon size={16} />
                         </div>
                         <div className="flex-1">
                            <p className="text-[11px] font-black text-slate-800 leading-relaxed uppercase tracking-tight">{item.msg}</p>
                            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1.5">{item.time}</p>
                         </div>
                         <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-200 hover:text-slate-400">
                            <MoreVertical size={16} />
                         </button>
                      </div>
                   ))}
                </div>
                <button className="w-full py-4 text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">View All System Logs</button>
             </div>

             {/* Suspend Account Action (Screen 4) */}
             <div className="pt-8 flex flex-col items-center gap-4 border-t border-slate-50">
                <button className="w-full py-4 bg-rose-50 text-rose-500 text-[10px] font-black uppercase tracking-widest rounded-3xl hover:bg-rose-500 hover:text-white transition-all shadow-sm flex items-center justify-center gap-2 border border-rose-100">
                   <ShieldAlert size={16} /> Suspend Account
                </button>
                <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest text-center px-10">
                   Suspending will immediately block all employee access for this company.
                </p>
             </div>

          </div>

          {/* Right/Stats Column */}
          <div className="lg:col-span-4 space-y-6">
             
             {/* Mini Stats (Screen 4 style) */}
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
                <div className="space-y-1">
                   <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none">Total Employees</p>
                   <div className="flex items-end justify-between">
                      <span className="text-3xl font-black text-slate-800 tracking-tighter">{companyData.stats.totalEmployees}</span>
                      <span className="text-[10px] font-bold text-emerald-500 mb-1 flex items-center">
                         <ArrowUpRight size={12} /> {companyData.stats.growth}
                      </span>
                   </div>
                </div>
                <div className="space-y-1">
                   <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none">Active Users</p>
                   <div className="flex items-end justify-between">
                      <span className="text-3xl font-black text-slate-800 tracking-tighter">{companyData.stats.activeUsers}</span>
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Target: {companyData.stats.target}</span>
                   </div>
                </div>
                <div className="space-y-1">
                   <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none">Departments</p>
                   <div className="flex items-end justify-between">
                      <span className="text-3xl font-black text-slate-800 tracking-tighter">{companyData.stats.departments}</span>
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">3 New this month</span>
                   </div>
                </div>
             </div>

             {/* Quick Links / Docs */}
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6 text-center">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                   <FileText size={24} />
                </div>
                <div>
                   <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1">Provisioning History</h4>
                   <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-relaxed">View initial onboarding logs for this tenant node.</p>
                </div>
                <button className="w-full py-4 text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">Full Audit Report</button>
             </div>

          </div>

       </div>
    </div>
  );
};

export default CompanyDetails;
