import React, { useState } from 'react';
import { 
  Building2, 
  Globe, 
  ShieldCheck, 
  Mail, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  Plus, 
  Layers,
  Settings,
  X,
  PlusCircle,
  Users,
  Camera,
  Search,
  Check,
  Zap,
  Lock,
  MessageSquare
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompanySetup = () => {
  const navigate = useNavigate();

  const FormSection = ({ title, desc, icon: Icon, children }) => (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="flex items-start gap-4 pb-6 border-b border-slate-50">
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
             <Icon size={18} />
          </div>
          <div>
             <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em] leading-none mb-1.5">{title}</h3>
             <p className="text-[10px] font-black uppercase tracking-[0.2em]">{desc}</p>
          </div>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {children}
       </div>
    </div>
  );

  const FormInput = ({ label, placeholder, type = "text", icon: Icon, prefix }) => (
    <div className="space-y-3">
       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{label}</label>
       <div className="relative group">
          {Icon && <Icon className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={16} />}
          {prefix && <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-300 uppercase">{prefix}</span>}
          <input 
             type={type} 
             placeholder={placeholder} 
             className={`w-full bg-slate-50 border border-slate-100 rounded-xl py-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all
                ${Icon || prefix ? 'pl-14 pr-6' : 'px-6'}`} 
          />
       </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700 pb-40">
       
       <div className="flex items-center justify-between mb-12 border-b border-slate-50 pb-8">
          <div>
             <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase">Company Setup</h1>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Configure your workspace settings and preferences</p>
          </div>
          <button 
             onClick={() => navigate('/main-admin/dashboard')}
             className="flex items-center gap-2 px-5 py-3 bg-slate-50 text-slate-400 rounded-xl hover:text-indigo-600 transition-all text-[10px] font-black uppercase tracking-[0.2em]"
          >
             <ChevronLeft size={16} /> Dashboard
          </button>
       </div>

       {/* 1. General Information */}
       <FormSection 
          title="General Information" 
          desc="Primary institutional identity and scale"
          icon={Building2}
       >
          <FormInput label="Company Legal Name" placeholder="e.g. Acme Corp" />
          <div className="space-y-3">
             <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Company Size</label>
             <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-xs font-bold focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all appearance-none cursor-pointer">
                <option>1-50 Employees</option>
                <option>51-200 Employees</option>
                <option>201-1000 Employees</option>
                <option>1000+ Employees</option>
             </select>
          </div>
          <FormInput label="Headquarters" placeholder="San Francisco, CA" icon={Globe} />
          <FormInput label="Legal Entity ID" placeholder="US-NY-2024-001" icon={ShieldCheck} />
       </FormSection>

       {/* 2. Branding & Logo */}
       <FormSection 
          title="Branding & Logo" 
          desc="Visual identity across the platform"
          icon={Layers}
       >
          <div className="md:col-span-2 flex items-center gap-8 p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
             <div className="w-20 h-20 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-slate-300 shadow-sm relative group cursor-pointer">
                <Camera size={24} />
                <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 rounded-2xl transition-all"></div>
             </div>
             <div>
                <p className="text-xs font-black text-slate-800 uppercase tracking-tight mb-1">Company Logo</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">PNG, JPG up to 5MB</p>
                <button className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] hover:underline">Upload Logo</button>
             </div>
          </div>
          <div className="space-y-3">
             <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Primary Color</label>
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 cursor-pointer border-4 border-white shadow-sm hover:scale-105 transition-transform"></div>
                <input type="text" value="#4F46E5" className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-6 py-3.5 text-xs font-bold outline-none" readOnly />
             </div>
          </div>
          <div className="space-y-3">
             <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Accent Color</label>
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 cursor-pointer border-4 border-white shadow-sm hover:scale-105 transition-transform"></div>
                <input type="text" value="#10B981" className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-6 py-3.5 text-xs font-bold outline-none" readOnly />
             </div>
          </div>
       </FormSection>

       {/* 3. Structure & Policies */}
       <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 pb-4 border-b border-slate-50">
             <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] leading-none mb-1.5">Structure & Policies</h3>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Organisational nodes and compliance</p>
          </div>
          <div className="divide-y divide-slate-50">
             {[
               { title: 'Organization Structure', desc: 'Departments and Teams', icon: Users },
               { title: 'Work Policies', desc: 'Days Off, Shifts, WFH', icon: Zap }
             ].map((node, i) => (
                <div key={i} className="flex items-center justify-between p-6 hover:bg-slate-50 transition-all cursor-pointer group">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-100 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                         <node.icon size={18} />
                      </div>
                      <div>
                         <p className="text-xs font-black text-slate-800 uppercase tracking-tight mb-0.5">{node.title}</p>
                         <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">{node.desc}</p>
                      </div>
                   </div>
                   <ChevronRight size={16} className="text-slate-300" />
                </div>
             ))}
          </div>
       </div>

       {/* 4. Connected Apps */}
       <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 pb-4 border-b border-slate-50">
             <h3 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] leading-none mb-1.5">Connected Apps</h3>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Third-party service integrations</p>
          </div>
          <div className="divide-y divide-slate-50">
             {[
               { name: 'Slack', desc: 'NOT CONNECTED', icon: MessageSquare, color: 'text-slate-300' },
               { name: 'Google Workspace', desc: 'NOT CONNECTED', icon: Globe, color: 'text-slate-300' }
             ].map((app, i) => (
                <div key={i} className="flex items-center justify-between p-6 hover:bg-slate-50 transition-all cursor-pointer group">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-100 text-slate-400 rounded-xl flex items-center justify-center">
                         <app.icon size={18} />
                      </div>
                      <div>
                         <p className="text-xs font-black text-slate-800 uppercase tracking-tight mb-0.5">{app.name}</p>
                         <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{app.desc}</p>
                      </div>
                   </div>
                   <button className="px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all">Connect</button>
                </div>
             ))}
          </div>
       </div>

       {/* 5. Security & Privacy */}
       <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
          <div className="flex items-start gap-4 pb-6 border-b border-slate-50">
             <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock size={18} />
             </div>
             <div>
                <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em] leading-none mb-1.5">Security & Privacy</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Infrastructural protection and authentication</p>
             </div>
          </div>
          <div className="space-y-6">
             <div className="flex items-center justify-between">
                <div>
                   <p className="text-xs font-black text-slate-800 uppercase tracking-tight mb-0.5">Enforce 2FA</p>
                   <p className="text-[9px] font-black uppercase tracking-[0.2em] leading-none">Require 2FA for all employees</p>
                </div>
                <div className="w-10 h-5 bg-indigo-600 rounded-full relative p-1 cursor-pointer">
                   <div className="w-3 h-3 bg-white rounded-full absolute right-1 top-1"></div>
                </div>
             </div>
             <div className="flex items-center justify-between">
                <div>
                   <p className="text-xs font-black text-slate-800 uppercase tracking-tight mb-0.5">SSO Login</p>
                   <p className="text-[9px] font-black uppercase tracking-[0.2em] leading-none">Allow login via SAML/Okta</p>
                </div>
                <div className="w-10 h-5 bg-slate-200 rounded-full relative p-1 cursor-pointer">
                   <div className="w-3 h-3 bg-white rounded-full absolute left-1 top-1"></div>
                </div>
             </div>
          </div>
       </div>

       {/* Actions Bar */}
       <div className="fixed bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-10 flex flex-col md:flex-row items-center gap-4 z-30">
          <button 
            onClick={() => navigate('/main-admin/dashboard')}
            className="px-8 py-4 bg-white border border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl hover:text-slate-600 transition-all flex items-center gap-2"
          >
             Discard Changes
          </button>
          <button 
            onClick={() => navigate('/main-admin/success')}
            className="px-10 py-4 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-3xl shadow-indigo-200 hover:bg-slate-900 transition-all flex items-center gap-2"
          >
             Save Changes
          </button>
       </div>

    </div>
  );
};

export default CompanySetup;
