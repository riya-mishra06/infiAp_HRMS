import React, { useState } from 'react';
import {
   Users,
   ShieldCheck,
   UserPlus,
   Lock,
   ChevronLeft,
   Plus,
   Search,
   MoreVertical,
   CheckCircle2,
   AlertCircle,
   Building2,
   Mail,
   ShieldAlert,
   Edit3,
   ArrowRight,
   Filter,
   Phone,
   Calendar,
   MapPin,
   Briefcase,
   FileText,
   Box,
   MessageSquare,
   Activity,
   Settings,
   PlusCircle,
   ChevronRight,
   Contact,
   Eye,
   TrendingUp,
   EyeOff,
   Info,
   Trash2,
   ChevronDown,
   DollarSign,
   BarChart3,
   X as CloseIcon
} from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const UserManagement = () => {
   const navigate = useNavigate();
   const [searchParams, setSearchParams] = useSearchParams();
   const viewParam = searchParams.get('view') || 'hub';
   
   const [view, setViewInternal] = useState(viewParam);

   // Sync local view state with search params
   React.useEffect(() => {
      setViewInternal(viewParam);
   }, [viewParam]);

   const setView = (newView) => {
      if (newView === 'hub') {
         setSearchParams({});
      } else {
         setSearchParams({ view: newView });
      }
      setViewInternal(newView);
   };
   const [selectedUser, setSelectedUser] = useState(null);
   const [filter, setFilter] = useState('All');
   const [showPassword, setShowPassword] = useState(false);

   const globalUsers = [
      { id: 1, name: 'Alex Rivera', role: 'Senior Software Engineer', email: 'alex.r@infiap.com', status: 'ACTIVE', lastLogin: '12m ago', avatar: 'AR', empId: 'EMP-1024', phone: '+1 (555) 012-3456', dob: 'May 12, 1992', address: '742 Evergreen Terrace, Springfield, OR', dept: 'Engineering', manager: 'Sarah Jenkins', joinDate: 'Jan 15, 2021', type: 'FULL-TIME' },
      { id: 2, name: 'Sarah Johnson', role: 'HR Operations Manager', email: 'sarah.j@infiap.com', status: 'ACTIVE', lastLogin: '2h ago', avatar: 'SJ', empId: 'EMP-1025', phone: '+1 (555) 012-3457', dob: 'June 20, 1988', address: '123 Oak St, Portland, OR', dept: 'HR', manager: 'Jonathan Reeves', joinDate: 'Mar 10, 2020', type: 'FULL-TIME' },
      { id: 3, name: 'Marcus Chen', role: 'UI/UX Designer', email: 'm.chen@infiap.com', status: 'PENDING', lastLogin: '3 days ago', avatar: 'MC', empId: 'EMP-1026', phone: '+1 (555) 012-3458', dob: 'Oct 05, 1995', address: '456 Pine St, Seattle, WA', dept: 'Design', manager: 'Sarah Jenkins', joinDate: 'Feb 01, 2024', type: 'CONTRACT' },
      { id: 4, name: 'David Miller', role: 'Finance Lead', email: 'd.miller@infiap.com', status: 'INACTIVE', lastLogin: '1 week ago', avatar: 'DM', empId: 'EMP-1027', phone: '+1 (555) 012-3459', dob: 'Jan 15, 1985', address: '789 Maple Ave, Austin, TX', dept: 'Finance', manager: 'Jonathan Reeves', joinDate: 'Nov 20, 2019', type: 'FULL-TIME' },
      { id: 5, name: 'Elena Rodriguez', role: 'Product Marketing Specialist', email: 'elena.r@infiap.com', status: 'ACTIVE', lastLogin: '5h ago', avatar: 'ER', empId: 'EMP-1028', phone: '+1 (555) 012-3460', dob: 'Dec 02, 1993', address: '321 Elm St, Denver, CO', dept: 'Marketing', manager: 'Jonathan Reeves', joinDate: 'May 05, 2022', type: 'FULL-TIME' },
   ];

   const filteredUsers = filter === 'All' ? globalUsers : globalUsers.filter(u => u.status === filter.toUpperCase());

   const HubView = () => (
      <div className="space-y-8 animate-in fade-in duration-700 pb-20">
         <div className="flex items-center justify-between border-b border-slate-50 pb-8">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
                  <Users size={20} />
               </div>
               <div>
                  <h1 className="text-xl font-black text-slate-800 tracking-tight uppercase">Global Users</h1>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Platform Identity & Resource Directory</p>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <button onClick={() => setView('add-admin')} className="p-3 bg-white border border-slate-100 text-indigo-600 rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-soft">
                  <UserPlus size={18} />
               </button>
               <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all">
                  <MoreVertical size={18} />
               </button>
            </div>
         </div>

         {/* Summary Matrix (Screen 1) */}
         <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-2">
               <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-2">
                  <ShieldCheck size={16} />
               </div>
               <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-none">12</h3>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Admins</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-2">
               <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-2">
                  <UserPlus size={16} />
               </div>
               <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-none">35</h3>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">HR Managers</p>
            </div>
         </div>

         {/* Search & Filter Bar (Screen 1) */}
         <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div className="relative group">
               <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
               <input 
                  type="text" 
                  placeholder="Search users by name, role or dept..." 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-14 pr-6 py-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all"
               />
               <div className="absolute right-5 top-1/2 -translate-y-1/2 p-2 bg-slate-100 text-slate-400 rounded-lg">
                  <Filter size={14} />
               </div>
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
               {['All Users', 'Admins', 'HR Managers', 'Internal'].map((pill) => (
                  <button 
                     key={pill}
                     onClick={() => setFilter(pill === 'All Users' ? 'All' : pill)}
                     className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap
                        ${(filter === pill || (pill === 'All Users' && filter === 'All'))
                           ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                           : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                  >
                     {pill}
                  </button>
               ))}
            </div>
         </div>

         {/* User List Feed (Screen 1) */}
         <div className="grid grid-cols-1 gap-4">
            {filteredUsers.map((user) => (
               <div 
                  key={user.id} 
                  onClick={() => { setSelectedUser(user); setView('profile'); }}
                  className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm group hover:border-indigo-600 hover:shadow-xl transition-all cursor-pointer flex items-center justify-between"
               >
                  <div className="flex items-center gap-5">
                     <div className="relative">
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center font-black text-slate-400 shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-all overflow-hidden">
                           {user.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white 
                           ${user.status === 'ACTIVE' ? 'bg-emerald-500' : user.status === 'PENDING' ? 'bg-amber-500' : 'bg-slate-300'}`}></div>
                     </div>
                     <div>
                        <h3 className="text-sm font-black text-slate-800 tracking-tight leading-none mb-1.5 group-hover:text-indigo-600 transition-colors uppercase">{user.name}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">{user.role}</p>
                           <span className="hidden sm:block text-[10px] text-slate-200">|</span>
                           <p className="text-[9px] font-bold text-slate-300 tracking-widest leading-none">{user.email}</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className={`px-3 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-widest
                        ${user.status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-600' : 
                          user.status === 'PENDING' ? 'bg-amber-50 text-amber-500' : 
                          'bg-slate-50 text-slate-400'}`}>
                        {user.status}
                     </span>
                     <ChevronRight size={16} className="text-slate-200 group-hover:text-indigo-600 transition-all group-hover:translate-x-1" />
                  </div>
               </div>
            ))}
         </div>

         {/* Floating Action Menu */}
         <div className="fixed bottom-10 right-10 flex flex-col items-end gap-3 z-40">
            <button onClick={() => setView('add-admin')} className="px-6 py-3 bg-white border border-slate-100 text-indigo-600 rounded-full shadow-2xl flex items-center gap-3 hover:bg-slate-900 hover:text-white transition-all transform hover:scale-105">
               <ShieldCheck size={18} />
               <span className="text-[10px] font-black uppercase tracking-widest leading-none">Add Admin</span>
            </button>
            <button onClick={() => setView('add-hr')} className="px-6 py-3 bg-white border border-slate-100 text-emerald-600 rounded-full shadow-2xl flex items-center gap-3 hover:bg-slate-900 hover:text-white transition-all transform hover:scale-105">
               <UserPlus size={18} />
               <span className="text-[10px] font-black uppercase tracking-widest leading-none">Add HR User</span>
            </button>
            <button className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-3xl shadow-indigo-200 flex items-center justify-center hover:bg-slate-900 transition-all transform hover:scale-110">
               <Plus size={28} />
            </button>
         </div>
      </div>
   );

   const AddAdminView = () => (
      <div className="max-w-xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-40">
         <div className="flex items-center justify-between border-b border-slate-50 pb-8">
            <div className="flex items-center gap-4">
               <button onClick={() => setView('hub')} className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:text-indigo-600 transition-all">
                  <ChevronLeft size={20} />
               </button>
               <div>
                  <h1 className="text-xl font-black text-slate-800 tracking-tight uppercase">Add New Admin</h1>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">InfiAP Management Node Provisioning</p>
               </div>
            </div>
            <button onClick={() => setView('hub')} className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:text-rose-600 transition-all">
               <CloseIcon size={20} />
            </button>
         </div>

         <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
            <p className="text-[10px] font-bold text-slate-400 leading-relaxed uppercase tracking-widest">Fill in the details below to grant administrative access to the InfiAP platform.</p>
            
            <div className="space-y-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Full Name</label>
                  <div className="relative">
                     <Plus className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                     <input type="text" placeholder="Johnathan Doe" className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-12 pr-6 py-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Work Email</label>
                  <div className="relative">
                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                     <input type="email" placeholder="john@company.com" className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-12 pr-6 py-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Phone Number</label>
                  <div className="relative">
                     <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                     <input type="text" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-12 pr-6 py-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Company</label>
                  <div className="relative">
                     <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                     <input type="text" placeholder="Acme Corporation" className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-12 pr-6 py-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all" />
                  </div>
               </div>
               <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Access Role</label>
                  <div className="grid grid-cols-2 gap-4">
                     <button className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-indigo-600 bg-indigo-50/50 text-indigo-600 group transition-all">
                        <ShieldCheck size={24} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Full Admin</span>
                     </button>
                     <button className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-slate-100 bg-slate-50 text-slate-400 hover:border-indigo-600 hover:text-indigo-600 transition-all">
                        <Eye size={24} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Read-only</span>
                     </button>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Set Password</label>
                     <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                        <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-12 pr-6 py-4 text-xs font-bold outline-none transition-all" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Confirm Password</label>
                     <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                        <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-12 pr-6 py-4 text-xs font-bold outline-none transition-all" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="space-y-3 pt-6">
               <button className="w-full py-5 bg-indigo-600 text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-2xl shadow-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-3">
                  Create Admin
                  <ArrowRight size={16} />
               </button>
               <button onClick={() => setView('hub')} className="w-full py-4 bg-white text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all">
                  Cancel
               </button>
            </div>
         </div>
      </div>
   );

   const AddHRView = () => (
      <div className="max-w-xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-40">
         <div className="flex items-center justify-between border-b border-slate-50 pb-8">
            <div className="flex items-center gap-4">
               <button onClick={() => setView('hub')} className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:text-indigo-600 transition-all">
                  <ChevronLeft size={20} />
               </button>
               <div>
                  <h1 className="text-xl font-black text-slate-800 tracking-tight uppercase">Add HR User</h1>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">New Institutional HR Administrator Agent</p>
               </div>
            </div>
            <div className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[8px] font-black rounded uppercase tracking-widest">ADMIN</div>
         </div>

         <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
            <h2 className="text-2xl font-black text-slate-800 tracking-tight leading-none uppercase">New HR User</h2>
            <p className="text-[10px] font-bold text-slate-400 leading-relaxed uppercase tracking-widest">Fill in the professional details below to create a new HR administrator account with secure access.</p>

            <div className="space-y-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Full Name</label>
                  <div className="relative">
                     <UserPlus className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                     <input type="text" placeholder="e.g. Sarah Jenkins" className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-12 pr-6 py-4 text-xs font-bold outline-none transition-all" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Corporate Email</label>
                  <div className="relative">
                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                     <input type="email" placeholder="s.jenkins@company.com" className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-12 pr-6 py-4 text-xs font-bold outline-none transition-all" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Department</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-xs font-bold outline-none transition-all appearance-none cursor-pointer">
                     <option>Human Resources</option>
                     <option>Finance</option>
                     <option>Operations</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Company Node</label>
                  <div className="p-4 bg-slate-50 border border-indigo-100 rounded-xl flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <Building2 size={18} className="text-indigo-400" />
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-tight">InfiAP Global Solutions</span>
                     </div>
                     <ChevronDown size={14} className="text-slate-300" />
                  </div>
               </div>
               <div className="p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 space-y-2">
                  <div className="flex items-center gap-3">
                     <ShieldCheck size={18} className="text-indigo-600" />
                     <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">System Role</h3>
                  </div>
                  <p className="text-xs font-black text-indigo-600 uppercase tracking-tight">HR Manager</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Global HCM Control & Personnel Mgmt</p>
               </div>
               <div className="space-y-2 border-t border-slate-50 pt-6">
                  <label className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Permission Level</label>
                  <select className="w-full bg-white border border-slate-100 rounded-xl px-6 py-4 text-xs font-bold outline-none transition-all appearance-none cursor-pointer">
                     <option>Full Access (Standard)</option>
                     <option>Partial Access</option>
                     <option>Custom Restricted</option>
                  </select>
               </div>
               <div className="p-4 bg-slate-50 rounded-xl flex items-start gap-4 ring-1 ring-slate-100">
                  <Info size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                  <p className="text-[9px] font-bold text-slate-400 leading-relaxed uppercase tracking-widest">An invitation link will be sent to the user's email address. They will be required to complete identity verification before gaining access.</p>
               </div>
            </div>

            <div className="space-y-3 pt-6">
               <button className="w-full py-5 bg-indigo-600 text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-2xl shadow-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-3">
                  <UserPlus size={16} /> Create HR User
               </button>
               <button onClick={() => setView('hub')} className="w-full py-4 bg-white text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all">
                  Cancel
               </button>
            </div>
         </div>
      </div>
   );

   const PermissionsView = () => (
      <div className="max-w-xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-700 pb-40">
         <div className="flex items-center justify-between border-b border-slate-50 pb-8">
            <div className="flex items-center gap-4">
               <button onClick={() => setView('profile')} className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:text-indigo-600 transition-all">
                  <ChevronLeft size={20} />
               </button>
               <div>
                  <h1 className="text-xl font-black text-slate-800 tracking-tight uppercase">Manage Permissions</h1>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Goverance & Control / {selectedUser?.name}</p>
               </div>
            </div>
            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-[10px] font-black text-indigo-600 overflow-hidden shadow-sm">
               {selectedUser?.avatar}
            </div>
         </div>

         <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-10">
            <div className="space-y-2">
               <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-[0.2em]">Administrative Access</h3>
               <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-none">Control feature access levels for this user account.</p>
            </div>

            <div className="space-y-6">
               {[
                  { label: 'Employee Management', desc: 'View, edit, and onboard staff profiles', icon: Users, active: true },
                  { label: 'Payroll Access', desc: 'Manage salary, bonuses, and tax documents', icon: DollarSign, active: true },
                  { label: 'Recruitment Management', desc: 'Manage job postings and applicant tracking', icon: Briefcase, active: true },
                  { label: 'Reports Access', desc: 'View workforce analytics and HR dashboards', icon: BarChart3, active: true },
                  { label: 'System Settings', desc: 'Configure organization-wide preferences', icon: Settings, active: false }
               ].map((perm, i) => (
                  <div key={i} className="flex items-center justify-between group">
                     <div className="flex items-center gap-6">
                        <div className={`w-12 h-12 ${perm.active ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-300'} rounded-2xl flex items-center justify-center transition-all`}>
                           <perm.icon size={20} />
                        </div>
                        <div>
                           <p className="text-sm font-black text-slate-800 tracking-tight uppercase group-hover:text-indigo-600 transition-colors uppercase leading-none mb-1.5">{perm.label}</p>
                           <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">{perm.desc}</p>
                        </div>
                     </div>
                     <div className={`w-12 h-6 rounded-full relative transition-all cursor-pointer ${perm.active ? 'bg-indigo-600' : 'bg-slate-200'}`}>
                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${perm.active ? 'right-1' : 'left-1'}`}></div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 flex items-start gap-4">
               <Info size={16} className="text-indigo-400 shrink-0 mt-0.5" />
               <p className="text-[9px] font-bold text-slate-400 leading-relaxed uppercase tracking-widest">Changes made to permissions will take effect immediately. The user may need to refresh their session to see updated modules.</p>
            </div>

            <div className="space-y-3 pt-4">
               <button className="w-full py-5 bg-indigo-600 text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-2xl shadow-xl hover:bg-slate-900 transition-all">
                  Save Permission Changes
               </button>
               <button className="w-full py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-rose-600 transition-all">
                  Reset to Defaults
               </button>
            </div>
         </div>
      </div>
   );

   const ProfileView = () => (
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-700 pb-40">
         {/* ... (Existing code kept same for profile, but adding Manage Permissions button) ... */}
         <div className="flex items-center justify-between border-b border-slate-50 pb-8">
            <div className="flex items-center gap-4">
               <button onClick={() => setView('hub')} className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:text-indigo-600 transition-all">
                  <ChevronLeft size={20} />
               </button>
               <div>
                  <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase">Employee Profile</h1>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Resource Master Detail</p>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <button onClick={() => setView('permissions')} className="px-5 py-2.5 bg-indigo-50 text-indigo-600 text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-2">
                  <Lock size={14} /> Permissions
               </button>
               <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-900 hover:text-white transition-all">
                  <MoreVertical size={18} />
               </button>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
               <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm text-center space-y-6 relative overflow-hidden">
                  <div className="relative mx-auto w-32 h-32">
                     <div className="w-full h-full bg-slate-50 rounded-full border-4 border-white shadow-xl flex items-center justify-center overflow-hidden font-black text-4xl text-slate-200 uppercase">
                        {selectedUser?.avatar}
                     </div>
                     <div className="absolute bottom-1 right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-sm"></div>
                  </div>
                  <div>
                     <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight mb-1">{selectedUser?.name}</h2>
                     <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4">{selectedUser?.role}</p>
                     <div className="flex items-center justify-center gap-4">
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[9px] font-black rounded-lg uppercase tracking-widest">ACTIVE</span>
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">ID: {selectedUser?.empId}</span>
                     </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 pt-4">
                     <button className="px-8 py-3 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg hover:bg-slate-900 transition-all flex items-center gap-2">
                        <Edit3 size={14} /> Edit Profile
                     </button>
                     <button className="px-8 py-3 bg-white border border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2">
                        <Mail size={14} /> Contact
                     </button>
                  </div>
               </div>

               <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="flex border-b border-slate-50 px-8">
                     {['Overview', 'Documents', 'Assets'].map((tab) => (
                        <button key={tab} className={`px-8 py-5 text-[10px] font-black uppercase tracking-widest border-b-2 transition-all 
                           ${tab === 'Overview' ? 'border-indigo-600 text-slate-800' : 'border-transparent text-slate-300 hover:text-slate-500'}`}>
                           {tab}
                        </button>
                     ))}
                  </div>
                  <div className="p-8 space-y-12">
                     <div className="space-y-6">
                        <div className="flex items-center gap-3">
                           <Users size={16} className="text-slate-400" />
                           <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Personal Details</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div>
                              <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] mb-2 leading-none">Email Address</p>
                              <p className="text-sm font-black text-slate-800 lowercase tracking-tight">{selectedUser?.email}</p>
                           </div>
                           <div>
                              <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] mb-2 leading-none">Phone Number</p>
                              <p className="text-sm font-black text-slate-800 tracking-tight">{selectedUser?.phone}</p>
                           </div>
                           <div>
                              <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] mb-2 leading-none">Date of Birth</p>
                              <p className="text-sm font-black text-slate-800 tracking-tight">{selectedUser?.dob}</p>
                           </div>
                           <div>
                              <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] mb-2 leading-none">Home Address</p>
                              <p className="text-sm font-black text-slate-800 tracking-tight">{selectedUser?.address}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
               <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                  <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Compliance & Assets</h3>
                  <div className="space-y-3">
                     <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group cursor-pointer hover:border-indigo-100 transition-all">
                        <div className="flex items-center gap-3"><FileText size={18} className="text-indigo-400" /><div><p className="text-xs font-black text-slate-800 mb-0.5 uppercase tracking-tight">Contract.pdf</p><p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-none">Signed 2021</p></div></div><ChevronRight size={14} className="text-slate-200 group-hover:text-indigo-600" />
                     </div>
                     <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group cursor-pointer hover:border-indigo-100 transition-all">
                        <div className="flex items-center gap-3"><Box size={18} className="text-indigo-400" /><div><p className="text-xs font-black text-slate-800 mb-0.5 uppercase tracking-tight">MacBook Pro</p><p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-none">M1 - IN021</p></div></div><ChevronRight size={14} className="text-slate-200 group-hover:text-indigo-600" />
                     </div>
                  </div>
               </div>
               <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                  <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Quick Actions</h3>
                  <div className="space-y-4">
                     {[{ label: 'Performance History', icon: TrendingUp, color: 'text-amber-500' }, { label: 'Attendance Logs', icon: Calendar, color: 'text-indigo-500' }, { label: 'Payroll & Payslips', icon: DollarSign, color: 'text-emerald-500' }].map((action, i) => (
                        <button key={i} className="w-full flex items-center justify-between group py-1 text-left"><div className="flex items-center gap-4"><div className={`w-8 h-8 bg-slate-50 ${action.color} rounded-lg flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all`}><action.icon size={16} /></div><span className="text-[11px] font-black text-slate-800 uppercase tracking-tight group-hover:text-indigo-600 transition-colors uppercase">{action.label}</span></div><ChevronRight size={14} className="text-slate-200 group-hover:text-indigo-600 transition-all group-hover:translate-x-1" /></button>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );

   return (
      <div className="min-h-screen">
         {view === 'hub' && <HubView />}
         {view === 'profile' && <ProfileView />}
         {view === 'add-admin' && <AddAdminView />}
         {view === 'add-hr' && <AddHRView />}
         {view === 'permissions' && <PermissionsView />}
      </div>
   );
};

export default UserManagement;
