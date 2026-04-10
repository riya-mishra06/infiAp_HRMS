import React from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Bell } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/' || path === '/dashboard') return 'Dashboard';
    if (path.startsWith('/employees')) return 'Employees';
    if (path.startsWith('/departments')) return 'Departments';
    if (path.startsWith('/recruitment')) return 'Recruitment';
    if (path.startsWith('/payroll')) return 'Payroll';
    if (path.startsWith('/settings')) return 'Settings';
    return 'Dashboard';
  };

  return (
    <div className="h-20 bg-white border-b border-[#E7EBF7] sticky top-0 z-10 flex items-center justify-between px-8 w-full">
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-black text-[#1E2A54] tracking-tight min-w-[140px]">{getPageTitle()}</h1>
        
        <div className="relative group w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8896C0] group-hover:text-[#4E63F0] transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-[#F4F7FD] border border-[#E6ECF9] rounded-xl pl-12 pr-4 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-[#4E63F0]/15 transition-all placeholder:text-[#93A0C7]"
            />
        </div>
      </div>

      <div className="flex items-center gap-4 pl-6">
        <button className="text-[#7E8AB2] hover:text-[#4E63F0] p-2.5 hover:bg-[#F4F7FD] rounded-xl relative transition-all group">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white group-hover:animate-ping"></span>
        </button>

        <div className="flex items-center gap-3 pl-2 pr-2 group cursor-pointer">
          <div className="text-right hidden md:block">
            <p className="text-sm font-black text-[#1E2A54] leading-none mb-1 group-hover:text-[#4E63F0] transition-colors">Sneha Desai</p>
            <p className="text-[10px] text-[#90A0C8] font-bold tracking-[0.2em] uppercase">Main Admin</p>
          </div>
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#E7EBF7] p-0.5 bg-white group-hover:border-[#C7D2FA] transition-all">
            <img
              src="https://ui-avatars.com/api/?name=Sneha+Desai&background=5a54e8&color=fff"
              alt="User"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
