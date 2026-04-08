import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Clock,
  Briefcase,
  CreditCard,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  PlusCircle,
  ChevronDown,
  History,
  Calendar,
  FileText,
  UserPlus,
  BarChart,
  ClipboardList,
  CheckCircle2,
  Target,
  FileSignature,
  DoorOpen,
  PieChart,
  Activity
} from 'lucide-react';

// Workaround for missing icons if needed (Outside to avoid initialization order issues)
const Banknote = (props) => <CreditCard {...props} />;
const Receipt = (props) => <FileText {...props} />;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Track open state for submenus (Only one open at a time logic)
  const [openSubmenu, setOpenSubmenu] = useState(() => {
    if (location.pathname.startsWith('/attendance')) return 'attendance';
    if (location.pathname.startsWith('/leave')) return 'leave';
    if (location.pathname.startsWith('/recruitment')) return 'recruitment';
    if (location.pathname.startsWith('/payroll')) return 'payroll';
    if (location.pathname.startsWith('/performance')) return 'performance';
    if (location.pathname.startsWith('/analytics')) return 'analytics';
    if (location.pathname.startsWith('/resignation')) return 'resignation';
    if (location.pathname.startsWith('/employees')) return 'employees';
    return null;
  });

  const toggleSubmenu = (key) => {
    setOpenSubmenu(prev => prev === key ? null : key);
  };

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    {
      name: 'Employees',
      icon: Users,
      path: '/employees',
      key: 'employees',
      hasSubmenu: true,
      subItems: [
        { name: 'View Profile', icon: Users, path: '/employees/profiles' },
        { name: 'Edit Profile', icon: FileSignature, path: '/employees' },
      ]
    },
    {
      name: 'Attendance',
      icon: CalendarCheck,
      path: '/attendance',
      key: 'attendance',
      hasSubmenu: true,
      subItems: [
        { name: 'Hub', icon: LayoutDashboard, path: '/attendance' },
        { name: 'Check-in Records', icon: History, path: '/attendance/records' },
        { name: 'Monthly Attendance', icon: Calendar, path: '/attendance/monthly' },
        { name: 'Attendance Reports', icon: FileText, path: '/attendance-reports' },
      ]
    },
    {
      name: 'Leave',
      icon: Clock,
      path: '/leave',
      key: 'leave',
      hasSubmenu: true,
      subItems: [
        { name: 'Hub', icon: LayoutDashboard, path: '/leave' },
        { name: 'Leave Requests', icon: ClipboardList, path: '/leave/requests' },
        { name: 'Leave Approval', icon: CheckCircle2, path: '/leave/approval' },
        { name: 'Leave History', icon: History, path: '/leave/history' },
      ]
    },
    {
      name: 'Recruitment',
      icon: Briefcase,
      path: '/recruitment',
      key: 'recruitment',
      hasSubmenu: true,
      subItems: [
        { name: 'Hub', icon: LayoutDashboard, path: '/recruitment' },
        { name: 'Candidates', icon: Users, path: '/recruitment/candidates' },
        { name: 'Applications', icon: ClipboardList, path: '/recruitment/applications' },
        { name: 'Interviews', icon: Calendar, path: '/recruitment/interviews' },
      ]
    },
    {
      name: 'Payroll',
      icon: CreditCard,
      path: '/payroll',
      key: 'payroll',
      hasSubmenu: true,
      subItems: [
        { name: 'Hub', icon: LayoutDashboard, path: '/payroll' },
        { name: 'Payroll Overview', icon: PieChart, path: '/payroll/overview' },
        { name: 'Salary Process', icon: Banknote, path: '/payroll/salary' },
        { name: 'Payslip Mgmt', icon: Receipt, path: '/payroll/payslips' },
      ]
    },
    {
      name: 'Performance',
      icon: BarChart3,
      path: '/performance',
      key: 'performance',
      hasSubmenu: true,
      subItems: [
        { name: 'Hub', icon: LayoutDashboard, path: '/performance' },
        { name: 'Monthly Metrics', icon: Target, path: '/performance/monthly' },
        { name: 'Feedback', icon: ClipboardList, path: '/performance/feedback' },
        { name: 'Reports', icon: FileText, path: '/performance/reports' },
      ]
    },
    {
      name: 'Analytics',
      icon: BarChart,
      path: '/analytics',
      key: 'analytics',
      hasSubmenu: true,
      subItems: [
        { name: 'Hub', icon: LayoutDashboard, path: '/analytics' },
        { name: 'Employee Reports', icon: Users, path: '/analytics/employees' },
        { name: 'Attendance Data', icon: Activity, path: '/analytics/attendance' },
        { name: 'Insights', icon: Target, path: '/analytics/performance' },
      ]
    },
    {
      name: 'Resignation',
      icon: DoorOpen,
      path: '/resignation',
      key: 'resignation',
      hasSubmenu: true,
      subItems: [
        { name: 'Hub', icon: LayoutDashboard, path: '/resignation' },
        { name: 'Submit Exit', icon: FileSignature, path: '/resignation/submit' },
        { name: 'Requests', icon: ClipboardList, path: '/resignation/requests' },
        { name: 'Exit Process', icon: DoorOpen, path: '/resignation/exit' },
      ]
    },
  ];

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-slate-200 flex flex-col z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      {/* Premium Logo Section */}
      <div className="p-8 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-900 rounded-xl shadow-lg flex items-center justify-center text-white">
            <LayoutDashboard size={22} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Employee Member</span>
            <span className="text-sm font-black text-slate-800 tracking-tight leading-none group-hover:text-primary-600 transition-colors uppercase">Admin Access</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 overflow-y-auto custom-scrollbar pb-10">
        <p className="px-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Main Menu</p>
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.hasSubmenu ? (
                <div className="space-y-1">
                  <button
                    onClick={() => toggleSubmenu(item.key)}
                    className={`w-full flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 group ${location.pathname.startsWith(item.path)
                        ? (openSubmenu === item.key ? 'bg-slate-100 text-slate-900' : 'bg-slate-900 text-white shadow-xl shadow-slate-200')
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                      }`}
                  >
                    <item.icon size={18} className="transition-transform group-hover:scale-110" />
                    <span className="font-bold text-sm tracking-tight">{item.name}</span>
                    <ChevronDown size={14} className={`ml-auto transition-transform duration-300 ${openSubmenu === item.key ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`grid transition-all duration-300 ease-in-out ${openSubmenu === item.key ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <ul className="mt-1 ml-4 border-l-2 border-slate-100 pl-2 space-y-1">
                        {item.subItems.map(sub => (
                          <li key={sub.name}>
                            <NavLink
                              to={sub.path}
                              className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 group ${isActive
                                  ? 'bg-indigo-50 text-indigo-600 font-black'
                                  : 'text-slate-400 hover:bg-slate-50 hover:text-slate-800'
                                }`
                              }
                            >
                              <sub.icon size={14} className="group-hover:scale-110 transition-transform" />
                              <span className="text-[12px] tracking-tight">{sub.name}</span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 group ${isActive
                      ? 'bg-slate-900 text-white shadow-xl shadow-slate-200'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <item.icon size={18} className="transition-transform group-hover:scale-110" />
                      <span className="font-bold text-sm tracking-tight">{item.name}</span>
                      <div className={`ml-auto w-1 h-1 rounded-full bg-primary-400 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                    </>
                  )}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Employee Action Button */}
        <div className="mt-8 px-5">
          <button
            onClick={() => navigate('/employees/add')}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary-600 text-white font-black rounded-2xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-100 active:scale-95 text-[10px] uppercase tracking-widest"
          >
            <PlusCircle size={16} />
            Add Employee
          </button>
        </div>

        {/* Support Widget */}
        <div className="mt-8 px-5 py-6 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-xs font-black text-slate-800 mb-1">Need help?</p>
            <p className="text-[10px] text-slate-400 font-bold mb-4 uppercase">Support center</p>
            <button className="flex items-center gap-2 text-[10px] font-black text-primary-600 bg-white px-3 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all uppercase tracking-widest">
              <HelpCircle size={14} />
              Open Tickets
            </button>
          </div>
          <div className="absolute -right-4 -bottom-4 bg-primary-100/30 w-16 h-16 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
        </div>
      </nav>

      {/* Footer Settings */}
      <div className="p-4 border-t border-slate-100 bg-white">
        <button className="flex items-center gap-3 px-5 py-3.5 rounded-xl text-red-500 hover:bg-red-50 transition-all font-black text-xs w-full text-left uppercase tracking-widest">
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
