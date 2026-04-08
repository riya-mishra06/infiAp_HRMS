import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    User,
    MapPin,
    Briefcase,
    DollarSign,
    ShieldCheck,
    CheckCircle,
    Sparkles,
    ArrowRight
} from 'lucide-react';
import { useEmployeeContext } from '../../../context/EmployeeContext';

const AddEmployee = () => {
    const navigate = useNavigate();
    const { addEmployee } = useEmployeeContext();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        department: 'Engineering',
        manager: 'Sneha Desai',
        location: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate real onboarding processing
        setTimeout(() => {
            addEmployee(formData);
            setIsSubmitting(false);
            setShowModal(true);
        }, 1200);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-120px)] w-full gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative pt-4 overflow-hidden">

            {/* Success Modal Popup (Dynamic) */}
            {showModal && (
                <div className="fixed inset-0 z-200 flex items-center justify-center p-6 sm:p-0">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300"></div>
                    <div className="bg-white rounded-[40px] p-10 max-w-md w-full relative z-210 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-300 text-center">
                        <div className="w-24 h-24 bg-green-50 rounded-[32px] flex items-center justify-center text-green-500 mx-auto mb-8 relative">
                            <CheckCircle size={48} strokeWidth={2.5} />
                            <div className="absolute -top-2 -right-2 p-2 bg-primary-600 rounded-full text-white shadow-lg animate-bounce">
                                <Sparkles size={16} />
                            </div>
                        </div>
                        <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-3 uppercase">Identity Deployed</h2>
                        <p className="text-slate-500 font-bold leading-relaxed mb-10 text-[10px] uppercase tracking-widest">
                            <span className="text-indigo-600">{formData.name}</span> has been successfully onboarded to the global workforce ledger.
                        </p>
                        <button
                            onClick={() => navigate('/employees')}
                            className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group shadow-xl"
                        >
                            Return to Command Center
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            )}

            {/* Header System */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 shrink-0">
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => navigate('/employees')}
                        className="p-3 bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 rounded-2xl shadow-sm transition-all active:scale-90"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-4xl font-black text-slate-800 tracking-tight leading-none mb-2 underline decoration-indigo-300 underline-offset-12">Onboard New Identity</h1>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-4 flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                           Global Workforce Onboarding Protocol
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 self-start lg:self-center">
                    <button
                        onClick={() => navigate('/employees')}
                        className="px-8 py-3 bg-white border border-slate-100 text-slate-400 font-black text-[10px] uppercase rounded-2xl hover:bg-slate-50 transition-all shadow-sm active:scale-95"
                    >
                        Abort Onboarding
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-10 py-3 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 uppercase tracking-widest text-[10px] flex items-center gap-2"
                    >
                       {isSubmitting ? (
                           <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                       ) : <UserPlus size={16} />}
                       Deploy Identity
                    </button>
                </div>
            </div>

            {/* Main Workspace Grid */}
            <div className="flex-1 grid grid-cols-1 xl:grid-cols-4 gap-8 overflow-hidden min-h-0">
                
                {/* 1. SIDEBAR: Onboarding Readiness */}
                <div className="xl:col-span-1 flex flex-col gap-6 overflow-y-auto no-scrollbar pb-10">
                   
                   <div className="card-soft bg-white p-8 border-slate-100 shadow-soft">
                        <div className="flex items-center gap-3 mb-8">
                             <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                                <Clock size={24} />
                             </div>
                             <div>
                                <h3 className="text-sm font-black text-slate-800 tracking-tight uppercase">Ready Status</h3>
                                <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Onboarding Workflow</p>
                             </div>
                        </div>

                        <div className="space-y-4">
                            {[
                              { label: 'Identity Verification', status: formData.name ? 'Complete' : 'Pending' },
                              { label: 'Corporate Network', status: formData.email ? 'Validated' : 'Queued' },
                              { label: 'Resource Allocation', status: formData.role ? 'Assigned' : 'Open' },
                            ].map((task, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-2xl transition-all">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{task.label}</span>
                                    <span className={`text-[9px] font-black uppercase tracking-widest ${task.status === 'Pending' || task.status === 'Queued' || task.status === 'Open' ? 'text-orange-500' : 'text-emerald-500'}`}>{task.status}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-5 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                             <p className="text-[9px] font-black text-indigo-600 uppercase tracking-widest mb-3 leading-none underline">Security Notice</p>
                             <div className="flex items-start gap-3">
                                 <Shield size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                                 <p className="text-[9px] font-bold text-slate-500 leading-relaxed uppercase tracking-tight">
                                     Identity clearance will be granted only after global registry synchronization.
                                 </p>
                             </div>
                        </div>
                   </div>

                   <div className="space-y-4 mt-auto">
                      <div className="card-soft bg-slate-900 p-8 border-none text-white relative overflow-hidden group">
                         <div className="relative z-10">
                            <TrendingUp className="mb-4 text-emerald-400" size={24} />
                            <h4 className="text-sm font-black uppercase tracking-widest leading-tight mb-2">Capacity Intel</h4>
                            <p className="text-[10px] opacity-60 font-medium leading-relaxed uppercase tracking-widest">Workforce capacity currently at 92.4% with this hire.</p>
                         </div>
                         <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-emerald-600/20 rounded-full blur-3xl"></div>
                      </div>
                   </div>
                </div>

                {/* 2. MAIN HUB: Onboarding Workspace */}
                <div className="xl:col-span-3 flex flex-col min-h-0 bg-white border border-slate-100 rounded-[44px] shadow-soft overflow-hidden">
                   
                   <div className="flex-1 overflow-y-auto no-scrollbar relative p-10">
                      <form onSubmit={handleSubmit} className="space-y-12">
                         
                         <section className="space-y-8">
                            <div className="flex items-center gap-4 pb-4 border-b border-slate-50">
                               <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-black">01</div>
                               <div>
                                  <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">Primary Identity</h2>
                                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mt-1">Foundational Personnel Data</p>
                               </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                               <div className="space-y-2.5">
                                   <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Legal Full Name</label>
                                   <input
                                       name="name"
                                       value={formData.name}
                                       onChange={handleChange}
                                       required
                                       type="text"
                                       placeholder="e.g. ARYA STARK"
                                       className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-xs font-black text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white focus:border-indigo-500 transition-all outline-none uppercase"
                                   />
                               </div>
                               <div className="space-y-2.5">
                                   <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Corporate Node Email</label>
                                   <input
                                       name="email"
                                       value={formData.email}
                                       onChange={handleChange}
                                       required
                                       type="email"
                                       placeholder="arya.s@corp.hub"
                                       className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-xs font-black text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white focus:border-indigo-500 transition-all outline-none"
                                   />
                               </div>
                            </div>
                         </section>

                         <section className="space-y-8">
                            <div className="flex items-center gap-4 pb-4 border-b border-slate-50">
                               <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-black">02</div>
                               <div>
                                  <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">Network Allocation</h2>
                                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mt-1">Operational Role & Hub Assignment</p>
                               </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                               <div className="space-y-2.5">
                                   <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Designation Title</label>
                                   <input
                                       name="role"
                                       value={formData.role}
                                       onChange={handleChange}
                                       required
                                       type="text"
                                       className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-xs font-black text-slate-700 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white focus:border-indigo-500 transition-all outline-none uppercase"
                                   />
                               </div>
                               <div className="space-y-2.5">
                                   <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Target Department</label>
                                   <select
                                       name="department"
                                       value={formData.department}
                                       onChange={handleChange}
                                       className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-xs font-black text-slate-700 outline-none cursor-pointer appearance-none uppercase"
                                   >
                                       <option>Engineering</option>
                                       <option>Product & Design</option>
                                       <option>Operations</option>
                                       <option>Marketing</option>
                                       <option>Human Resources</option>
                                   </select>
                               </div>
                            </div>
                         </section>

                      </form>
                   </div>

                   {/* Persistence Footer */}
                   <div className="px-10 py-6 bg-slate-900 border-t border-white/5 flex items-center justify-between text-white shrink-0">
                      <div className="flex items-center gap-4">
                         <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                         <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Onboarding Protocol Active</p>
                      </div>
                      <div className="flex items-center gap-6">
                         <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none italic uppercase">Personnel will be indexed in global directory upon deployment.</p>
                      </div>
                   </div>
                </div>
            </div>

        </div>
    );
};

export default AddEmployee;
