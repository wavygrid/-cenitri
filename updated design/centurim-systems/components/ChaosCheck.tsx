import React from 'react';
import { 
  Globe, Calendar, Users, Star, Mail, CreditCard, 
  AlertCircle, CheckCircle2, Zap, ArrowRight,
  Server, Database, LayoutGrid
} from 'lucide-react';

export const ChaosCheck: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Architecture Comparison
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Your business efficiency is defined by your data flow. <br/>
                Stop building spaghetti code with expensive subscriptions.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
            
            {/* LEFT: THE FRAGMENTED STACK (Spaghetti) */}
            <div className="relative group">
                <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] -z-10 border border-slate-100"></div>
                <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                        Fragmented Stack
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">Manual Data Entry • High Latency</p>
                </div>

                {/* Diagram Area */}
                <div className="relative h-[500px] w-full bg-white rounded-2xl border border-slate-200 shadow-inner overflow-hidden">
                    
                    {/* SVG Connections (Messy) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                        {/* Wavy, crossing lines to represent chaos */}
                        <path d="M 100,100 C 150,150 200,50 300,100" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
                        <path d="M 100,250 C 200,200 150,350 300,300" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
                        <path d="M 300,100 C 250,200 350,250 100,400" fill="none" stroke="#ef4444" strokeWidth="1.5" />
                        <path d="M 80,100 C 80,300 250,300 300,400" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
                    </svg>

                    {/* Nodes (Scattered) */}
                    
                    {/* Node 1: Website */}
                    <div className="absolute top-12 left-8 bg-white p-3 rounded-xl border border-slate-200 shadow-sm w-32 z-10">
                        <div className="flex items-center gap-2 mb-1">
                            <Globe className="h-4 w-4 text-blue-500" />
                            <span className="text-xs font-bold text-slate-700">Wix</span>
                        </div>
                        <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-blue-200"></div>
                        </div>
                    </div>

                    {/* Node 2: Booking */}
                    <div className="absolute top-24 right-12 bg-white p-3 rounded-xl border border-slate-200 shadow-sm w-36 z-10">
                        <div className="flex items-center gap-2 mb-1">
                            <Calendar className="h-4 w-4 text-orange-500" />
                            <span className="text-xs font-bold text-slate-700">Calendly</span>
                        </div>
                         <div className="text-[10px] text-red-500 font-bold mt-1">⚠ Sync Error</div>
                    </div>

                    {/* Node 3: CRM */}
                    <div className="absolute bottom-32 left-16 bg-white p-3 rounded-xl border border-slate-200 shadow-sm w-32 z-10">
                        <div className="flex items-center gap-2 mb-1">
                            <Users className="h-4 w-4 text-green-500" />
                            <span className="text-xs font-bold text-slate-700">HubSpot</span>
                        </div>
                        <div className="text-[10px] text-slate-400">Last sync: 2d ago</div>
                    </div>

                    {/* Node 4: Email */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-xl border border-red-200 shadow-sm w-32 z-10 ring-4 ring-red-50">
                        <div className="flex items-center gap-2 mb-1">
                            <Mail className="h-4 w-4 text-yellow-500" />
                            <span className="text-xs font-bold text-slate-700">Mailchimp</span>
                        </div>
                         <div className="text-[10px] text-red-500 font-bold mt-1">Manual Entry</div>
                    </div>

                     {/* Node 5: Reviews */}
                     <div className="absolute bottom-12 right-20 bg-white p-3 rounded-xl border border-slate-200 shadow-sm w-32 z-10">
                        <div className="flex items-center gap-2 mb-1">
                            <Star className="h-4 w-4 text-purple-500" />
                            <span className="text-xs font-bold text-slate-700">Podium</span>
                        </div>
                    </div>

                    {/* Disconnect Alert */}
                    <div className="absolute top-4 right-4 bg-red-100 text-red-700 text-[10px] font-bold px-2 py-1 rounded-full border border-red-200">
                        5 Disconnected Data Silos
                    </div>

                </div>

                <div className="mt-6 flex justify-between items-center px-4">
                    <span className="text-sm font-bold text-slate-400 uppercase">Monthly Burn</span>
                    <span className="text-2xl font-bold text-slate-900">$853<span className="text-sm text-slate-400">/mo</span></span>
                </div>
            </div>

            {/* RIGHT: THE CENTURIM OS (Circuit Board) */}
            <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-b from-slate-900 to-slate-800 rounded-[3rem] -z-10 shadow-2xl"></div>
                 {/* Decorative Glow */}
                <div className="absolute -inset-4 bg-brand-500/20 rounded-[3rem] -z-20 blur-2xl"></div>

                <div className="text-center mb-8 relative z-10">
                    <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                        <Zap className="h-5 w-5 text-brand-500 fill-brand-500" />
                        Unified OS
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">Real-time Sync • Automated Flow</p>
                </div>

                {/* Diagram Area */}
                <div className="relative h-[500px] w-full bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
                    
                    {/* SVG Connections (Circuit Board) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                            <linearGradient id="trace-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#0f766e" stopOpacity="0" />
                                <stop offset="50%" stopColor="#2dd4bf" stopOpacity="1" />
                                <stop offset="100%" stopColor="#0f766e" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        {/* Vertical Data Bus Lines */}
                        <line x1="20%" y1="10%" x2="20%" y2="40%" stroke="#1e293b" strokeWidth="2" />
                        <line x1="80%" y1="10%" x2="80%" y2="40%" stroke="#1e293b" strokeWidth="2" />
                        <line x1="50%" y1="60%" x2="50%" y2="90%" stroke="#1e293b" strokeWidth="2" />
                        
                        {/* Active Traces */}
                        <path d="M 80,80 L 80,250 L 200,250" fill="none" stroke="url(#trace-grad)" strokeWidth="2" className="animate-pulse" />
                        <path d="M 320,80 L 320,250 L 200,250" fill="none" stroke="url(#trace-grad)" strokeWidth="2" className="animate-pulse" />
                        <path d="M 200,250 L 200,420" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="4 2" />
                        
                        {/* Central Hub Glow */}
                        <circle cx="50%" cy="50%" r="60" fill="url(#trace-grad)" opacity="0.1" />
                    </svg>

                    {/* Central Processor */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 p-1 rounded-2xl border border-slate-600 shadow-2xl shadow-brand-500/20 z-20">
                        <div className="bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center w-32 h-32 border border-slate-700">
                            <LayoutGrid className="h-8 w-8 text-brand-500 mb-2 animate-pulse" />
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Core</span>
                            <span className="text-[10px] text-brand-400">Processing...</span>
                        </div>
                    </div>

                    {/* Input Modules (Top) */}
                    <div className="absolute top-8 left-8 bg-slate-800/80 backdrop-blur-sm p-3 rounded-xl border border-slate-600 w-32 z-10 flex items-center gap-3">
                         <div className="p-1.5 bg-blue-500/20 rounded-lg"><Globe className="h-4 w-4 text-blue-400" /></div>
                         <div className="text-xs font-bold text-slate-300">Web PWA</div>
                    </div>

                    <div className="absolute top-8 right-8 bg-slate-800/80 backdrop-blur-sm p-3 rounded-xl border border-slate-600 w-32 z-10 flex items-center gap-3">
                         <div className="p-1.5 bg-orange-500/20 rounded-lg"><Calendar className="h-4 w-4 text-orange-400" /></div>
                         <div className="text-xs font-bold text-slate-300">Booking</div>
                    </div>

                    {/* Output Modules (Bottom) */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-slate-800/80 backdrop-blur-sm p-3 rounded-xl border border-slate-600 w-48 z-10 flex justify-between items-center">
                         <div className="flex items-center gap-3">
                             <div className="p-1.5 bg-green-500/20 rounded-lg"><Database className="h-4 w-4 text-green-400" /></div>
                             <div className="text-xs font-bold text-slate-300">Unified Data</div>
                         </div>
                         <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </div>

                </div>

                <div className="mt-6 flex justify-between items-center px-4 relative z-10">
                    <span className="text-sm font-bold text-slate-400 uppercase">Unified Cost</span>
                    <span className="text-2xl font-bold text-white">$199<span className="text-sm text-slate-500">/mo</span></span>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};