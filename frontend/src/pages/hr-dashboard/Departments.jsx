import React from 'react';
import { 
  Building2, 
  Users, 
  LayoutGrid, 
  Plus, 
  Search,
  ChevronRight,
  MoreVertical,
  ShieldCheck,
  Zap,
  Briefcase
} from 'lucide-react';

const Departments = () => {
  const overviewStats = [
    { label: 'Departments', value: '8', icon: Building2, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Teams', value: '20', icon: LayoutGrid, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Staff', value: '320', icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
  ];

  const activeDepartments = [
    {
      name: 'Engineering',
      sub: 'Tech',
      head: 'Rahul Sharma',
      teams: 5,
      employees: 85,
      icon: Zap,
      accent: 'indigo'
    },
    {
      name: 'Marketing',
      sub: 'Creative',
      head: 'Priya Kaur',
      teams: 3,
      employees: 42,
      icon: zap => <Zap {...zap} />, // Placeholder icon logic or use real ones
      accent: 'orange'
    },
    {
      name: 'Human Resources',
      sub: 'Admin',
      head: 'Amit Verma',
      teams: 2,
      employees: 16,
      icon: ShieldCheck,
      accent: 'green'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Overview Cards */}
      <section>
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-5 pl-1">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {overviewStats.map((stat, idx) => (
            <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-soft flex items-center gap-6 group hover:shadow-xl transition-all">
              <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <stat.icon size={28} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-800">{stat.value}</h3>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Active Departments List */}
      <section className="relative">
        <div className="flex items-center justify-between mb-5 pl-1">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Active Departments</h2>
          <button className="text-xs font-black text-indigo-600">See All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {activeDepartments.map((dept, idx) => (
            <div key={idx} className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-soft hover:shadow-2xl transition-all group flex flex-col items-center">
              <div className="w-full flex justify-between items-start mb-6">
                <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest 
                  ${dept.accent === 'indigo' ? 'bg-indigo-50 text-indigo-600' : 
                    dept.accent === 'orange' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'}`}>
                  {dept.sub}
                </div>
                <button className="text-slate-200 hover:text-slate-400 transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className={`w-20 h-20 rounded-[28px] ${dept.accent === 'indigo' ? 'bg-indigo-50 text-indigo-600' : 
                    dept.accent === 'orange' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'} 
                    flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg shadow-current/5`}>
                {idx === 1 ? <Briefcase size={32} /> : idx === 2 ? <ShieldCheck size={32} /> : <Building2 size={32} />}
              </div>

              <h3 className="text-xl font-black text-slate-800 mb-1">{dept.name}</h3>
              <p className="text-sm font-bold text-slate-400 mb-8 italic">Head: {dept.head}</p>

              <div className="w-full grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-3 rounded-2xl bg-slate-50 border border-slate-100/50">
                  <p className="text-lg font-black text-slate-700">{dept.teams}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Teams</p>
                </div>
                <div className="text-center p-3 rounded-2xl bg-slate-50 border border-slate-100/50">
                  <p className="text-lg font-black text-slate-700">{dept.employees}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Employees</p>
                </div>
              </div>

              <button className="w-full py-4 bg-slate-900 border border-slate-800 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-800 hover:shadow-xl transition-all active:scale-95">
                View Teams
              </button>
            </div>
          ))}

          {/* Create Department Card Placeholder/CTA */}
          <div className="p-8 border-2 border-dashed border-slate-200 rounded-[32px] flex flex-col items-center justify-center group hover:border-indigo-400 hover:bg-indigo-50/30 transition-all cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center mb-4 group-hover:bg-indigo-100 group-hover:text-indigo-500 transition-all">
              <Plus size={32} />
            </div>
            <p className="text-sm font-black text-slate-400 group-hover:text-indigo-600 uppercase tracking-widest">Add Department</p>
          </div>
        </div>

        {/* Floating Create Department Button */}
        <button className="fixed bottom-12 right-12 flex items-center gap-3 px-8 py-4 bg-linear-to-r from-indigo-600 to-indigo-700 text-white rounded-full shadow-[0_20px_40px_-12px_rgba(79,70,229,0.5)] hover:shadow-[0_25px_50px_-12px_rgba(79,70,229,0.6)] hover:-translate-y-1 active:scale-95 transition-all z-20">
          <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
            <Plus size={16} className="text-white" />
          </div>
          <span className="text-[11px] font-black uppercase tracking-widest">Create Department</span>
        </button>
      </section>
    </div>
  );
};

export default Departments;
