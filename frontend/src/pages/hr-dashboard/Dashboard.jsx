import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2,
  Users,
  Briefcase,
  Wallet,
  UserPlus,
  PlusCircle,
  Send,
  ChevronRight,
  Sparkles,
  Clock3,
  Check,
  X,
  BellRing,
  CircleDot,
  LayoutDashboard,
  Calendar,
  AlertCircle
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [leaveStatus, setLeaveStatus] = useState('pending');

  const stats = useMemo(
    () => [
      { id: 1, title: 'Depts', value: '08', icon: Building2 },
      { id: 2, title: 'Employees', value: '320', icon: Users },
      { id: 3, title: 'Active Jobs', value: '12', icon: Briefcase },
    ],
    []
  );

  const quickActions = [
    { name: 'Add Employee', icon: UserPlus, path: '/employees/add', color: 'bg-blue-50 text-blue-600' },
    { name: 'Create Dept', icon: PlusCircle, path: '/departments', color: 'bg-purple-50 text-purple-600' },
    { name: 'Post Job', icon: Send, path: '/recruitment', color: 'bg-green-50 text-green-600' },
  ];

  const departments = useMemo(
    () => [
      { name: 'Engineering', head: 'Rahul Sharma', teams: 5, employees: 85, tag: 'Tech', tagClass: 'bg-[#E8ECFF] text-[#4559E7]' },
      { name: 'Marketing', head: 'Priya Kaur', teams: 3, employees: 42, tag: 'Creative', tagClass: 'bg-[#FFF0E4] text-[#DD7A2D]' },
    ],
    []
  );

  const recentActivity = useMemo(
    () => [
      { title: 'Payroll processed for Sales Department', time: 'Today at 09:15 AM', type: 'payroll' },
      { title: 'New hire Michael Scott onboarded', time: 'Yesterday at 04:30 PM', type: 'hire' },
      { title: 'Announcement: Team meeting scheduled', time: 'Oct 10, 2023', type: 'announcement' },
    ],
    []
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Welcome Section */}
      <section className="relative overflow-hidden rounded-[24px] bg-linear-to-br from-[#4E63F0] to-[#6855E8] p-8 text-white shadow-2xl shadow-blue-200/50">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight mb-2">Welcome Back, Admin</h1>
            <p className="text-blue-100/80 font-medium">Here is what's happening today.</p>
          </div>
          
          <div className="flex items-center gap-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center px-4 first:pl-0 last:pr-0 first:border-0 border-l border-white/20">
                <h3 className="text-2xl font-black mb-1">{stat.value}</h3>
                <p className="text-[10px] uppercase tracking-widest font-black text-white/60">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-black/5 blur-3xl"></div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
        <div className="space-y-8">
          {/* Quick Actions */}
          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-5 pl-1">Quick Actions</h2>
            <div className="grid grid-cols-3 gap-5">
              {quickActions.map((action) => (
                <button
                  key={action.name}
                  onClick={() => action.path && navigate(action.path)}
                  className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <action.icon size={22} />
                  </div>
                  <span className="text-sm font-black text-slate-700">{action.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Departments */}
          <section>
            <div className="flex items-center justify-between mb-5 pl-1">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Departments</h2>
              <button 
                onClick={() => navigate('/departments')}
                className="text-xs font-black text-[#4E63F0] hover:underline transition-all"
              >
                View All
              </button>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {departments.map((dept) => (
                <div key={dept.name} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-soft hover:shadow-lg transition-all group cursor-pointer">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                      <LayoutDashboard size={20} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${dept.tagClass}`}>
                      {dept.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-800 mb-1">{dept.name}</h3>
                  <p className="text-xs text-slate-400 font-bold mb-4 italic">Manager: Alex Rivera</p>
                  <div className="flex items-center justify-between border-t border-slate-50 pt-4">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">142 Staff</span>
                    <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Active Recruitment */}
          <section>
             <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-5 pl-1">Active Recruitment</h2>
             <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-soft">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-800">Frontend Developer</h3>
                      <p className="text-sm font-bold text-slate-400">Engineering • Remote</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest">6 NEW</span>
                    <button 
                      onClick={() => navigate('/recruitment')}
                      className="px-6 py-3 bg-linear-to-r from-[#4E63F0] to-[#6855E8] text-white text-xs font-black rounded-xl shadow-lg shadow-blue-100 hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                    >
                      Review Candidates
                    </button>
                  </div>
                </div>
             </div>
          </section>

          {/* Leave Requests */}
          <section>
            <div className="flex items-center justify-between mb-5 pl-1">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Leave Requests</h2>
              <span className="text-xs font-black text-blue-500">6 Pending</span>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden">
               <div className="p-6 flex items-center justify-between border-b border-slate-50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100">
                      <img src="https://ui-avatars.com/api/?name=Jessica+Miller&background=random" alt="User" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-800">Jessica Miller</h3>
                      <p className="text-xs text-slate-400 font-bold">Sick Leave • 2 Days (Oct 12-13)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setLeaveStatus('rejected')} className="px-5 py-2.5 bg-slate-50 text-slate-500 text-xs font-black rounded-xl hover:bg-red-50 hover:text-red-500 transition-all">Reject</button>
                    <button onClick={() => setLeaveStatus('approved')} className="px-5 py-2.5 bg-blue-600 text-white text-xs font-black rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all">Approve</button>
                  </div>
               </div>
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6">
            <article className="p-6 bg-white rounded-2xl border border-slate-100 shadow-soft group hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Pending Leaves</p>
                <AlertCircle size={18} className="text-orange-400" />
              </div>
              <h3 className="text-3xl font-black text-slate-800 mb-1">06</h3>
              <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest leading-none">! Urgent Action</p>
            </article>

            <article className="p-6 bg-white rounded-2xl border border-slate-100 shadow-soft group hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Monthly Payroll</p>
                <Wallet size={18} className="text-blue-500" />
              </div>
              <h3 className="text-3xl font-black text-blue-600 mb-1">$85,000</h3>
              <p className="text-[10px] font-black text-green-500 uppercase tracking-widest leading-none">↗ 4% vs Last Month</p>
            </article>
          </div>

          {/* Recent Activity */}
          <section className="p-8 bg-white rounded-[24px] border border-slate-100 shadow-soft">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Recent Activity</h2>
              <BellRing size={16} className="text-slate-300" />
            </div>
            <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-50">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="relative pl-10">
                  <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white shadow-md flex items-center justify-center z-10 
                    ${activity.type === 'payroll' ? 'bg-green-400' : activity.type === 'hire' ? 'bg-blue-400' : 'bg-orange-400'}`}>
                    {activity.type === 'payroll' ? <Check size={10} className="text-white" /> : activity.type === 'hire' ? <Users size={10} className="text-white" /> : <Sparkles size={10} className="text-white" />}
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-800 leading-snug mb-1">{activity.title}</p>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Insights Card */}
          <article className="p-6 rounded-[24px] bg-slate-900 text-white shadow-2xl shadow-slate-200 group overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} className="text-blue-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">AI Insights</span>
              </div>
              <p className="text-lg font-black leading-tight mb-4">Workforce health is stable and trending upward this week.</p>
              <button className="text-[10px] font-black uppercase tracking-widest text-blue-400 border-b border-blue-400 pb-1">Analyze Trends</button>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-600/20 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700"></div>
          </article>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
