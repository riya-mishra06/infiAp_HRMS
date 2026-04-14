import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  ChevronRight, 
  MoreVertical,
  Briefcase,
  Target,
  ShieldCheck,
  BarChart2,
  Lock,
  Calendar,
  Zap,
  CheckCircle2
} from 'lucide-react';

const SalaryStructure = () => {
  const navigate = useNavigate();

  const earnings = [
    { label: 'Basic Pay', amount: '$4,250.00' },
    { label: 'House Rent Allowance', amount: '$2,125.00' },
    { label: 'Conveyance Allowance', amount: '$400.00' },
    { label: 'Special Allowance', amount: '$1,725.00' },
  ];

  const deductions = [
    { label: 'Provident Fund (Employee)', amount: '-$510.00', negative: true },
    { label: 'Professional Tax', amount: '-$20.00', negative: true },
    { label: 'Health Insurance Premium', amount: '-$150.00', negative: true },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* Premium Header */}
      <div className="flex items-center justify-between px-2 pb-6 border-b border-slate-100">
         <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate('/admin/payroll-management')}
              className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-indigo-600 transition-all shadow-soft active:scale-90"
            >
               <ArrowLeft size={20} />
            </button>
            <div>
               <h1 className="text-4xl font-black text-slate-800 tracking-tight leading-none mb-2">Salary Structure</h1>
               <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-1 leading-none">Compensation Audit & Breakdown</p>
            </div>
         </div>
         <div className="flex items-center gap-4">
            <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-800 transition-all shadow-2xl shadow-slate-100 active:scale-95 group">
               <Download size={16} className="group-hover:translate-y-1 transition-transform" />
               Download Structure (PDF)
            </button>
            <button className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-indigo-600 transition-all shadow-soft">
               <MoreVertical size={20} />
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start px-2">
         
         {/* Left Column: Identity & Primary Metrics */}
         <div className="xl:col-span-5 2xl:col-span-4 space-y-10">
            
            {/* Identity Card */}
            <div className="bg-white rounded-[56px] border border-slate-50 shadow-soft p-12 relative overflow-hidden group">
               <div className="relative z-10">
                  <div className="flex items-center gap-8 mb-12">
                     <div className="w-24 h-24 rounded-[36px] overflow-hidden border-4 border-slate-50 shadow-soft group-hover:scale-105 duration-700 transition-transform">
                        <img src="https://i.pravatar.cc/150?u=alex" alt="Alex Thompson" />
                     </div>
                     <div>
                        <h2 className="text-2xl font-black text-slate-800 tracking-tight leading-none mb-2 uppercase">Alex Thompson</h2>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none mb-4">Senior Software Engineer • INF-9021</p>
                        <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[9px] font-black rounded-full uppercase tracking-widest border border-indigo-100">Full-time</span>
                     </div>
                  </div>

                  <div className="bg-linear-to-br from-indigo-600 to-indigo-700 rounded-[44px] p-10 text-white shadow-3xl shadow-indigo-100 relative overflow-hidden group/gross">
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-100 mb-2">Current Monthly Gross</p>
                     <div className="flex items-baseline gap-3 mb-6">
                        <h3 className="text-5xl font-black tracking-tighter leading-none">$8,500.00</h3>
                        <Zap size={14} className="text-indigo-300 fill-current" />
                     </div>
                     <div className="flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
                        <Calendar size={12} />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-50">Effective from Jan 2024</span>
                     </div>
                     {/* Decorative Elements */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover/gross:scale-150 transition-transform duration-1000"></div>
                  </div>
               </div>
            </div>

            {/* Annual CTC Diagnostic */}
            <div className="bg-slate-900 rounded-[56px] p-12 text-white shadow-soft relative overflow-hidden border-b-8 border-b-indigo-500">
               <div className="flex justify-between items-start mb-10 relative z-10">
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Annual CTC</p>
                     <h3 className="text-4xl font-black tracking-tighter">$102,000.00</h3>
                  </div>
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/ forced-colors:10 hover:bg-white/10 transition-all cursor-pointer">
                     <BarChart2 size={24} className="text-indigo-400" />
                  </div>
               </div>

               <div className="space-y-6 relative z-10">
                  <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none border-b border-white/5 pb-4">Year-over-Year Comparison <span className="text-slate-700 ml-4 font-normal tracking-normal uppercase">2023 VS 2024</span></p>
                  
                  <div className="grid grid-cols-2 gap-6">
                     <div className="p-6 bg-white/5 rounded-[28px] border border-white/5">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Monthly Gross</p>
                        <div className="flex items-center gap-2">
                           <span className="text-xl font-black">$8,500</span>
                           <span className="text-[8px] text-emerald-500 font-black">+4.2% VS '23</span>
                        </div>
                     </div>
                     <div className="p-6 bg-white/5 rounded-[28px] border border-white/5">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Annual CTC</p>
                        <div className="flex items-center gap-2">
                           <span className="text-xl font-black">$102k</span>
                           <span className="text-[8px] text-emerald-500 font-black">+5.8% VS '23</span>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-4 pt-4">
                     <div>
                        <div className="flex justify-between text-[9px] font-black uppercase tracking-[0.2em] mb-2">
                           <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none">Basic Pay Growth</span>
                           <span className="text-emerald-500">+8.5%</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-indigo-500" style={{ width: '85%' }}></div>
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-[9px] font-black uppercase tracking-[0.2em] mb-2">
                           <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none">Allowances Growth</span>
                           <span className="text-indigo-400">+4.2%</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-indigo-400 opacity-50" style={{ width: '60%' }}></div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Design Detail */}
               <div className="absolute top-1/2 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            </div>
         </div>

         {/* Right Column: Breakdown Ecology */}
         <div className="xl:col-span-7 2xl:col-span-8 space-y-12">
            
            {/* Earnings Architecture */}
            <section className="bg-white rounded-[64px] border border-slate-50 shadow-soft overflow-hidden">
               <div className="p-10 border-b border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                     <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center">
                        <TrendingUp size={24} />
                     </div>
                     <div>
                        <h4 className="text-xl font-black uppercase tracking-tight text-slate-800 leading-none mb-1">Earnings</h4>
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Calculated Monthly Protocol</p>
                     </div>
                  </div>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Monthly</span>
               </div>

               <div className="p-10 space-y-6">
                  {earnings.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between group cursor-pointer hover:translate-x-1 transition-transform">
                       <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] group-hover:text-slate-800 transition-colors">{item.label}</p>
                       <p className="text-lg font-black text-slate-800 tracking-tight">{item.amount}</p>
                    </div>
                  ))}
                  <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                     <p className="text-sm font-black text-slate-800 uppercase tracking-[0.2em]">Total Earnings</p>
                     <p className="text-2xl font-black text-indigo-600 tracking-tighter">$8,500.00</p>
                  </div>
               </div>
            </section>

            {/* Deductions Architecture */}
            <section className="bg-white rounded-[64px] border border-slate-50 shadow-soft overflow-hidden">
               <div className="p-10 border-b border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                     <div className="w-14 h-14 bg-rose-50 text-rose-500 rounded-3xl flex items-center justify-center">
                        <Lock size={24} />
                     </div>
                     <div>
                        <h4 className="text-xl font-black uppercase tracking-tight text-slate-800 leading-none mb-1">Deductions</h4>
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Compliance & Security Retention</p>
                     </div>
                  </div>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Monthly</span>
               </div>

               <div className="p-10 space-y-6">
                  {deductions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between group cursor-pointer hover:translate-x-1 transition-transform">
                       <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] group-hover:text-slate-800 transition-colors">{item.label}</p>
                       <p className="text-lg font-black text-rose-500 tracking-tight">{item.amount}</p>
                    </div>
                  ))}
                  <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                     <p className="text-sm font-black text-slate-800 uppercase tracking-[0.2em]">Total Deductions</p>
                     <p className="text-2xl font-black text-rose-500 tracking-tighter">$680.00</p>
                  </div>
               </div>
            </section>

            {/* Net Pay Conclusion */}
            <div className="p-12 bg-linear-to-r from-slate-900 to-slate-800 rounded-[56px] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
               <div className="relative z-10 flex items-center gap-8">
                  <div className="w-20 h-20 bg-indigo-600 rounded-[32px] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-700">
                     <CheckCircle2 size={36} className="text-white" />
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Estimated Monthly Net Pay</p>
                     <h3 className="text-5xl font-black tracking-tighter leading-none">$7,820.00</h3>
                  </div>
               </div>
               <div className="relative z-10 text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 px-4">Secure Audit Ready</p>
                  <button className="px-10 py-5 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-[24px] hover:bg-indigo-700 active:scale-95 transition-all shadow-2xl shadow-indigo-900/50">
                     Approve Protocol
                  </button>
               </div>
               {/* Pattern Detail */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            </div>

         </div>
      </div>
    </div>
  );
};

export default SalaryStructure;
