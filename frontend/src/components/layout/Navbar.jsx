import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Bell, HelpCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="h-16 bg-white border-b border-slate-200 sticky top-0 z-10 flex items-center justify-between px-8 w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
      
      {/* 1. Navbar Search (Mockup Style) */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-primary-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search employees, reports, or diagnostics..." 
              className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary-100 transition-all placeholder:text-slate-400"
            />
        </div>
      </div>

      {/* 2. Middle Navigation (Mockup Center Balance) */}
      <div className="hidden lg:flex items-center gap-8 px-10">
         <NavLink to="/" className={({ isActive }) => `text-sm font-bold tracking-tight transition-colors ${isActive ? 'text-primary-600' : 'text-slate-400 hover:text-slate-600'}`}>Dashboard</NavLink>
         <NavLink to="/employees" className={({ isActive }) => `text-sm font-bold tracking-tight transition-colors ${isActive ? 'text-primary-600' : 'text-slate-400 hover:text-slate-600'}`}>Employee</NavLink>
      </div>

      {/* 3. User & Actions */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 pr-4 border-r border-slate-100">
          <button className="text-slate-400 hover:text-primary-600 p-2.5 hover:bg-slate-50 rounded-xl relative transition-all group">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white group-hover:animate-ping"></span>
          </button>
          
          <button className="text-slate-400 hover:text-primary-600 p-2.5 hover:bg-slate-50 rounded-xl transition-all">
            <HelpCircle size={20} />
          </button>
        </div>

        <div className="flex items-center gap-3 pl-2 group cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-black text-slate-800 leading-none mb-1 group-hover:text-primary-600 transition-colors">Sneha Desai</p>
            <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Admin Director</p>
          </div>
          <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-soft border border-slate-100 p-0.5 bg-white group-hover:border-primary-200 transition-all">
            <img
              src="https://ui-avatars.com/api/?name=Sneha+Desai&background=1e293b&color=fff"
              alt="User"
              className="w-full h-full object-cover rounded-[14px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
