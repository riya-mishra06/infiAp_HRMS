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
    ArrowRight,
    UserPlus,
    Calendar,
    Clock,
    TrendingUp,
    Shield,
    Wallet,
    FileText,
    Activity
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
        salary: '',
        joiningDate: '',
        contractType: 'Full-Time'
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
            addEmployee({
                ...formData,
                id: `EMP-${Math.floor(Math.random() * 900) + 100}`,
                status: 'Active'
            });
            setIsSubmitting(false);
            setShowModal(true);
        }, 1500);
    };

    return (
        <div className="flex flex-col min-h-[calc(100vh-120px)] w-full gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700 relative pt-4 text-left pb-20">

            {/* Success Modal Popup (Dynamic) */}
            {showModal && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 sm:p-0">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setShowModal(false)}></div>
                    <div className="bg-white rounded-[40px] p-12 max-w-lg w-full relative z-[210] shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-500 text-center">
                        <div className="w-28 h-28 bg-emerald-50 rounded-[38px] flex items-center justify-center text-emerald-500 mx-auto mb-10 relative border-4 border-white shadow-xl animate-bounce">
                            <CheckCircle size={56} strokeWidth={2.5} />
                            <div className="absolute -top-3 -right-3 p-3 bg-primary-600 rounded-2xl text-white shadow-2xl">
                                <Sparkles size={20} />
                            </div>
                        </div>
                        <h2 className="text-4xl font-black text-slate-800 tracking-tighter mb-4 uppercase">Identity Deployed</h2>
                        <p className="text-slate-400 font-bold leading-relaxed mb-12 text-[11px] uppercase tracking-[0.2em] max-w-[280px] mx-auto">
                            Personnel node <span className="text-primary-600 underline underline-offset-4">{formData.name}</span> has been indexed into the global directory with high-security clearance.
                        </p>
                        <button
                            onClick={() => navigate('/employees')}
                            className="w-full py-6 bg-slate-900 text-white font-black rounded-3xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-slate-200 uppercase tracking-[0.2em] text-xs active:scale-95"
                        >
                            Return to Command Center
                            <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                        </button>
                    </div>
                </div>
            )}

            {/* Header System */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 shrink-0 text-left">
                <div className="flex items-center gap-8 text-left">
                    <button 
                        onClick={() => navigate('/employees')}
                        className="p-5 bg-white border border-slate-100 text-slate-400 hover:text-primary-600 rounded-[24px] shadow-sm transition-all hover:-translate-x-1 active:scale-90 text-left"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <div className="text-left">
                        <h1 className="text-4xl font-black text-slate-800 tracking-tight leading-none mb-3 underline decoration-primary-300 underline-offset-12 text-left">Onboard New Personnel</h1>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.25em] mt-5 flex items-center gap-3 text-left">
                           <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse text-left"></span>
                           Global Workforce Onboarding Protocol • ID Node: {Math.random().toString(36).substr(2, 6).toUpperCase()}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 self-start lg:self-center text-left">
                    <button
                        onClick={() => navigate('/employees')}
                        className="px-10 py-4 bg-white border border-slate-100 text-slate-400 font-black text-[11px] uppercase rounded-[24px] hover:bg-slate-50 transition-all shadow-sm active:scale-95 text-left"
                    >
                        Abort Protocol
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting || !formData.name}
                        className={`px-12 py-4 font-black rounded-[24px] transition-all shadow-2xl uppercase tracking-[0.25em] text-[11px] flex items-center gap-4 active:scale-95 text-left ${isSubmitting || !formData.name ? 'bg-slate-100 text-slate-300 cursor-not-allowed shadow-none' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200'}`}
                    >
                       {isSubmitting ? (
                           <div className="w-5 h-5 border-3 border-white/20 border-t-white rounded-full animate-spin text-left"></div>
                       ) : <UserPlus size={18} />}
                       Deploy Identity
                    </button>
                </div>
            </div>

            {/* Main Workspace Grid */}
            <div className="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-10 text-left">
                
                {/* 1. SIDEBAR: Onboarding Readiness */}
                <div className="xl:col-span-3 flex flex-col gap-10 text-left">
                   
                   <div className="card-soft bg-white p-10 border-slate-100 shadow-soft text-left">
                        <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest border-b border-slate-50 pb-6 mb-8 text-left">Onboarding Readiness</h3>

                        <div className="space-y-6 text-left">
                            {[
                                { label: 'Primary Identity', status: formData.name ? 'Verified' : 'Pending', val: formData.name ? 100 : 0 },
                                { label: 'Employment Config', status: formData.salary ? 'Configured' : 'Open', val: formData.salary ? 100 : 0 },
                                { label: 'Compliance Audit', status: 'In Queue', val: 30 },
                            ].map((task, i) => (
                                <div key={i} className="space-y-3 text-left">
                                    <div className="flex items-center justify-between text-left">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 text-left">{task.label}</span>
                                        <span className={`text-[9px] font-black uppercase tracking-widest text-left ${task.status === 'Pending' || task.status === 'Open' ? 'text-orange-500' : task.status === 'In Queue' ? 'text-blue-500' : 'text-emerald-500'}`}>{task.status}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden text-left">
                                        <div className={`h-full transition-all duration-700 ${task.status === 'Verified' ? 'bg-emerald-500' : 'bg-primary-500'}`} style={{ width: `${task.val}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 bg-primary-50/30 rounded-[32px] border border-primary-50 text-left">
                             <div className="flex items-center gap-4 mb-4 text-left">
                                 <Shield size={20} className="text-primary-500 text-left" />
                                 <p className="text-[10px] font-black text-primary-600 uppercase tracking-widest text-left leading-none">Security Clearance</p>
                             </div>
                             <p className="text-[9px] font-bold text-slate-500 leading-relaxed uppercase tracking-tight text-left">
                                 Deployment initiates automatic background diagnostic and global network provisioning.
                             </p>
                        </div>
                   </div>

                   <div className="card-soft bg-slate-900 p-10 border-none text-white relative overflow-hidden group text-left">
                      <div className="relative z-10 text-left">
                         <div className="flex items-center gap-4 mb-6 text-left">
                            <Activity size={24} className="text-emerald-400 text-left" />
                            <h4 className="text-sm font-black uppercase tracking-widest text-left underline decoration-white/20 underline-offset-8">Unit Capacity Intel</h4>
                         </div>
                         <p className="text-[10px] opacity-60 font-medium leading-relaxed uppercase tracking-widest mb-10 text-left">Workforce density is currently at <span className="text-white font-black">94.2%</span>. This allocation reduces departmental overhead by 2.4% annually.</p>
                         <div className="flex justify-between items-end text-left">
                            <div className="text-left">
                                <p className="text-[8px] text-white/40 uppercase font-black text-left">Next Node Scan</p>
                                <p className="text-xs font-black text-left uppercase">Oct 30, 2023</p>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-left hover:bg-white/20 transition-all cursor-pointer">
                                <ArrowRight size={18} />
                            </div>
                         </div>
                      </div>
                      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-600/10 rounded-full blur-[60px] text-left"></div>
                   </div>
                </div>

                {/* 2. MAIN HUB: Onboarding Workspace */}
                <div className="xl:col-span-9 flex flex-col min-h-0 bg-white border border-slate-100 rounded-[54px] shadow-soft overflow-hidden text-left">
                   
                   <div className="flex-1 overflow-y-auto no-scrollbar relative p-12 text-left">
                      <form onSubmit={handleSubmit} className="space-y-16 text-left max-w-5xl mx-auto">
                         
                         {/* Section 01: Primary Identity */}
                         <section className="space-y-10 text-left">
                            <div className="flex items-center gap-6 pb-6 border-b border-slate-50 text-left">
                               <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-[20px] flex items-center justify-center font-black text-xl shadow-inner text-left">01</div>
                               <div className="text-left">
                                  <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight text-left">Primary Identity Diagnostics</h2>
                                  <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.2em] leading-none mt-2 text-left font-sans text-xs">Foundational Personnel Data Node</p>
                               </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                               <div className="space-y-4 text-left">
                                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-2 text-left">Legal Personnel Name</label>
                                   <div className="relative text-left">
                                       <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                       <input
                                           name="name"
                                           value={formData.name}
                                           onChange={handleChange}
                                           required
                                           type="text"
                                           placeholder="e.g. MARCUS AURELIUS"
                                           className="w-full bg-slate-50 border border-slate-100 rounded-[28px] pl-16 pr-8 py-5 text-xs font-black text-slate-800 focus:ring-8 focus:ring-primary-500/5 focus:bg-white focus:border-primary-500 transition-all outline-none uppercase tracking-tight text-left"
                                       />
                                   </div>
                               </div>
                               <div className="space-y-4 text-left">
                                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-2 text-left">Corporate Repository Email</label>
                                   <div className="relative text-left">
                                       <FileText className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                       <input
                                           name="email"
                                           value={formData.email}
                                           onChange={handleChange}
                                           required
                                           type="email"
                                           placeholder="marcus.a@company.hub"
                                           className="w-full bg-slate-50 border border-slate-100 rounded-[28px] pl-16 pr-8 py-5 text-xs font-black text-slate-800 focus:ring-8 focus:ring-primary-500/5 focus:bg-white focus:border-primary-500 transition-all outline-none tracking-tight text-left"
                                       />
                                   </div>
                               </div>
                            </div>
                         </section>

                         {/* Section 02: Operational Allocation */}
                         <section className="space-y-10 text-left">
                            <div className="flex items-center gap-6 pb-6 border-b border-slate-50 text-left">
                               <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-[20px] flex items-center justify-center font-black text-xl shadow-inner text-left">02</div>
                               <div className="text-left">
                                  <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight text-left">Operational Network Allocation</h2>
                                  <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.2em] leading-none mt-2 text-left font-sans text-xs text-[11px]">Designation & Hub Segment Strategy</p>
                               </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                               <div className="space-y-4 text-left">
                                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-2 text-left">Professional Title</label>
                                   <div className="relative text-left">
                                       <Briefcase className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                       <input
                                           name="role"
                                           value={formData.role}
                                           onChange={handleChange}
                                           required
                                           type="text"
                                           placeholder="e.g. SENIOR INFRA ARCHITECT"
                                           className="w-full bg-slate-50 border border-slate-100 rounded-[28px] pl-16 pr-8 py-5 text-xs font-black text-slate-800 focus:ring-8 focus:ring-primary-500/5 focus:bg-white focus:border-primary-500 transition-all outline-none uppercase tracking-tight text-left"
                                       />
                                   </div>
                               </div>
                               <div className="space-y-4 text-left">
                                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-2 text-left">Assigned Department</label>
                                   <div className="relative text-left">
                                       <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                       <select
                                           name="department"
                                           value={formData.department}
                                           onChange={handleChange}
                                           className="w-full bg-slate-50 border border-slate-100 rounded-[28px] pl-16 pr-8 py-5 text-xs font-black text-slate-800 focus:ring-8 focus:ring-primary-500/5 focus:bg-white focus:border-primary-500 transition-all outline-none appearance-none cursor-pointer uppercase tracking-tight text-left"
                                       >
                                           <option>Engineering</option>
                                           <option>Product & Design</option>
                                           <option>Operations</option>
                                           <option>Marketing</option>
                                           <option>Human Resources</option>
                                       </select>
                                   </div>
                               </div>
                            </div>
                         </section>

                         {/* Section 03: Employment Configuration */}
                         <section className="space-y-10 text-left">
                            <div className="flex items-center gap-6 pb-6 border-b border-slate-50 text-left">
                               <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-[20px] flex items-center justify-center font-black text-xl shadow-inner text-left">03</div>
                               <div className="text-left">
                                  <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight text-left">Employment Configuration Ledger</h2>
                                  <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.2em] leading-none mt-2 text-left font-sans text-xs">Contractual & Financial Parameters</p>
                               </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                               <div className="space-y-4 text-left">
                                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-2 text-left">Financial Compensation</label>
                                   <div className="relative text-left">
                                       <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                       <input
                                           name="salary"
                                           value={formData.salary}
                                           onChange={handleChange}
                                           required
                                           type="number"
                                           placeholder="e.g. 1450000"
                                           className="w-full bg-slate-50 border border-slate-100 rounded-[28px] pl-16 pr-8 py-5 text-xs font-black text-slate-800 focus:ring-8 focus:ring-primary-500/5 focus:bg-white focus:border-primary-500 transition-all outline-none tracking-tight text-left"
                                       />
                                   </div>
                               </div>
                               <div className="space-y-4 text-left">
                                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-2 text-left">Deployment Date</label>
                                   <div className="relative text-left">
                                       <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                       <input
                                           name="joiningDate"
                                           value={formData.joiningDate}
                                           onChange={handleChange}
                                           required
                                           type="date"
                                           className="w-full bg-slate-50 border border-slate-100 rounded-[28px] pl-16 pr-8 py-5 text-xs font-black text-slate-800 focus:ring-8 focus:ring-primary-500/5 focus:bg-white focus:border-primary-500 transition-all outline-none font-sans text-left"
                                       />
                                   </div>
                               </div>
                               <div className="space-y-4 text-left">
                                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-2 text-left">Identity Contract</label>
                                   <div className="relative text-left">
                                       <ShieldCheck className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                       <select
                                           name="contractType"
                                           value={formData.contractType}
                                           onChange={handleChange}
                                           className="w-full bg-slate-50 border border-slate-100 rounded-[28px] pl-16 pr-8 py-5 text-xs font-black text-slate-800 focus:ring-8 focus:ring-primary-500/5 focus:bg-white focus:border-primary-500 transition-all outline-none appearance-none cursor-pointer uppercase tracking-tight text-left"
                                       >
                                           <option>Full-Time</option>
                                           <option>Contract Node</option>
                                           <option>Advisory</option>
                                           <option>Associate</option>
                                       </select>
                                   </div>
                               </div>
                            </div>
                         </section>

                      </form>
                   </div>

                   {/* Persistence Footer */}
                   <div className="px-12 py-8 bg-slate-900 border-t border-white/5 flex items-center justify-between text-white shrink-0 text-left">
                      <div className="flex items-center gap-6 text-left">
                         <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse text-left"></div>
                         <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 text-left">Personnel Node Entry Portal: Onboarding Life-cycle Active</p>
                      </div>
                      <div className="flex items-center gap-10 text-right">
                         <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none italic text-right">Identity will be indexed into global directory cluster upon deployment confirmation.</p>
                      </div>
                   </div>
                </div>
            </div>

        </div>
    );
};

export default AddEmployee;
