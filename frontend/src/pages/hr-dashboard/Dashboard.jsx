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
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [leaveStatus, setLeaveStatus] = useState('pending');

  const stats = useMemo(
    () => [
      { title: 'Departments', value: '08', icon: Building2, note: 'Active business units' },
      { title: 'Employees', value: '320', icon: Users, note: 'Total workforce count' },
      { title: 'Active Jobs', value: '12', icon: Briefcase, note: 'Open recruitment roles' },
      { title: 'Payroll', value: '$85,000', icon: Wallet, note: '+4% vs last month' },
    ],
    []
  );

  const departments = useMemo(
    () => [
      { name: 'Engineering', head: 'Rahul Sharma', teams: 5, employees: 85, tag: 'Tech', tagClass: 'bg-[#E8ECFF] text-[#4559E7]' },
      { name: 'Marketing', head: 'Priya Kaur', teams: 3, employees: 42, tag: 'Creative', tagClass: 'bg-[#FFF0E4] text-[#DD7A2D]' },
      { name: 'Human Resources', head: 'Anit Verma', teams: 2, employees: 16, tag: 'Admin', tagClass: 'bg-[#E7F7EE] text-[#2E9A63]' },
    ],
    []
  );

  const recentActivity = useMemo(
    () => [
      { title: 'Payroll processed for Sales Department', time: 'Today at 10:15 AM' },
      { title: 'New hire Michael Scott onboarded', time: 'Yesterday at 04:30 PM' },
      { title: 'Announcement: Friday team sync at 3 PM', time: 'Oct 10, 2023' },
    ],
    []
  );

  return (
    <div className="space-y-8 pb-10">
      <section className="grid grid-cols-4 gap-6">
        {stats.map((stat) => (
          <article
            key={stat.title}
            className="rounded-2xl border border-[#E6ECF9] bg-white p-6 shadow-[0_10px_24px_-18px_rgba(45,55,110,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_26px_-16px_rgba(45,55,110,0.5)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-[#F2F5FD] p-2.5 text-[#4E63F0]">
                <stat.icon size={18} />
              </div>
              <ChevronRight size={16} className="text-[#B1BCD9]" />
            </div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#90A0C8]">{stat.title}</p>
            <h3 className="mt-2 text-3xl font-black tracking-tight text-[#1E2A54]">{stat.value}</h3>
            <p className="mt-1 text-xs font-semibold text-[#7A89B3]">{stat.note}</p>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-[1.5fr_1fr] gap-6">
        <div className="space-y-6">
          <article className="rounded-2xl border border-[#E6ECF9] bg-white p-6 shadow-[0_10px_24px_-18px_rgba(45,55,110,0.55)]">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-[0.22em] text-[#8C9AC1]">Quick Actions</h2>
              <button className="text-xs font-black text-[#4E63F0]">View All</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => navigate('/employees/add')}
                className="flex items-center gap-3 rounded-xl border border-[#E6ECF9] bg-[#F7F9FF] px-4 py-4 text-left transition hover:border-[#CAD5FA] hover:bg-[#F2F6FF]"
              >
                <UserPlus size={16} className="text-[#4E63F0]" />
                <span className="text-xs font-bold text-[#273462]">Add Employee</span>
              </button>
              <button className="flex items-center gap-3 rounded-xl border border-[#E6ECF9] bg-[#F7F9FF] px-4 py-4 text-left transition hover:border-[#CAD5FA] hover:bg-[#F2F6FF]">
                <PlusCircle size={16} className="text-[#4E63F0]" />
                <span className="text-xs font-bold text-[#273462]">Create Department</span>
              </button>
              <button className="flex items-center gap-3 rounded-xl border border-[#E6ECF9] bg-[#F7F9FF] px-4 py-4 text-left transition hover:border-[#CAD5FA] hover:bg-[#F2F6FF]">
                <Send size={16} className="text-[#4E63F0]" />
                <span className="text-xs font-bold text-[#273462]">Post Job</span>
              </button>
            </div>
          </article>

          <article className="rounded-2xl border border-[#E6ECF9] bg-white p-6 shadow-[0_10px_24px_-18px_rgba(45,55,110,0.55)]">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-[0.22em] text-[#8C9AC1]">Departments</h2>
              <button onClick={() => navigate('/departments')} className="text-xs font-black text-[#4E63F0]">See All</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {departments.map((dept) => (
                <div key={dept.name} className="rounded-xl border border-[#E8EDFA] bg-[#FCFDFF] p-4 transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-sm font-black text-[#22305F]">{dept.name}</h3>
                    <span className={`rounded-full px-2 py-1 text-[10px] font-black uppercase tracking-widest ${dept.tagClass}`}>
                      {dept.tag}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#7383B0]">Head: {dept.head}</p>
                  <p className="mt-1 text-xs font-semibold text-[#7383B0]">{dept.teams} Teams • {dept.employees} Employees</p>
                  <button className="mt-4 w-full rounded-lg border border-[#E0E6F7] bg-white py-2 text-xs font-bold text-[#364575] transition hover:bg-[#F3F7FF]">
                    View Teams
                  </button>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[#E6ECF9] bg-white p-6 shadow-[0_10px_24px_-18px_rgba(45,55,110,0.55)]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-[0.22em] text-[#8C9AC1]">Recruitment</h2>
              <button className="text-xs font-black text-[#4E63F0]">New Job</button>
            </div>
            <div className="rounded-xl border border-[#E8EDFA] bg-[#FCFDFF] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-black text-[#22305F]">Frontend Developer</h3>
                  <p className="mt-1 text-xs font-semibold text-[#7383B0]">Engineering • Remote</p>
                </div>
                <span className="rounded-full bg-[#DEF6E9] px-2 py-1 text-[10px] font-black uppercase tracking-widest text-[#299458]">New</span>
              </div>
              <button className="mt-4 rounded-lg bg-linear-to-r from-[#4E63F0] to-[#6855E8] px-4 py-2 text-xs font-bold text-white transition hover:shadow-lg hover:shadow-[#4E63F0]/20">
                Review Candidates
              </button>
            </div>
          </article>
        </div>

        <div className="space-y-6">
          <article className="rounded-2xl border border-[#E6ECF9] bg-white p-6 shadow-[0_10px_24px_-18px_rgba(45,55,110,0.55)]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-[0.22em] text-[#8C9AC1]">Leave Request</h2>
              <span className="text-xs font-black text-[#4E63F0]">Pending</span>
            </div>
            <div className="rounded-xl border border-[#E8EDFA] bg-[#FCFDFF] p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-black text-[#22305F]">Jessica Miller</h3>
                  <p className="text-xs font-semibold text-[#7383B0]">Sick leave • 2 days</p>
                </div>
                <Clock3 size={16} className="text-[#90A0C8]" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setLeaveStatus('rejected')}
                  className="flex items-center justify-center gap-2 rounded-lg border border-[#F1C7D0] bg-[#FFF5F7] py-2 text-xs font-bold text-[#CC4764] transition hover:bg-[#FFE9EE]"
                >
                  <X size={14} />
                  Reject
                </button>
                <button
                  onClick={() => setLeaveStatus('approved')}
                  className="flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#4E63F0] to-[#6855E8] py-2 text-xs font-bold text-white transition hover:shadow-lg hover:shadow-[#4E63F0]/20"
                >
                  <Check size={14} />
                  Approve
                </button>
              </div>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-widest text-[#8F9BC1]">Status: {leaveStatus}</p>
            </div>
          </article>

          <article className="rounded-2xl border border-[#E6ECF9] bg-white p-6 shadow-[0_10px_24px_-18px_rgba(45,55,110,0.55)]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-[0.22em] text-[#8C9AC1]">Recent Activity</h2>
              <BellRing size={16} className="text-[#6A79A8]" />
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.title} className="flex gap-3">
                  <CircleDot size={14} className="mt-1 text-[#4E63F0]" />
                  <div>
                    <p className="text-sm font-semibold text-[#22305F]">{activity.title}</p>
                    <p className="text-xs font-medium text-[#8B97BC]">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-linear-to-br from-[#4E63F0] to-[#6855E8] p-6 text-white shadow-[0_16px_28px_-14px_rgba(78,99,240,0.65)]">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white/80">Insights</h2>
              <Sparkles size={16} className="text-white" />
            </div>
            <p className="mt-3 text-xl font-black">Workforce health is stable and trending upward this week.</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
