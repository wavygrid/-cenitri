import React from 'react';
import { ArrowRight, Activity, Zap, Server } from 'lucide-react';

const PlatformHero: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => {
  return (
    <section className="bg-white pt-24 pb-20 md:pt-32 md:pb-24 border-b border-slate-100 relative overflow-hidden">
      {/* Global Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  Automated Clinical Documentation Integrity
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1] tracking-tight text-balance">
                Automated Identification of <br className="hidden lg:block"/> Recoverable PDPM Revenue
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed text-balance font-light">
                We have engineered an evidence-based workflow designed to handle the complexity of unstructured clinical data and the rigidity of CMS regulations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={onNavigate}
                className="bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
              >
                Start Pilot Audit
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            
            <div className="pt-8 border-t border-slate-200/60 grid grid-cols-3 gap-4 md:gap-8">
                <div>
                    <div className="flex items-center gap-2 text-slate-900 font-light text-3xl tracking-tight">
                        40<span className="text-sm font-medium text-slate-400 -ml-1 mt-2">ms</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Latency</div>
                </div>
                <div>
                    <div className="flex items-center gap-2 text-slate-900 font-light text-3xl tracking-tight">
                        99.9<span className="text-sm font-medium text-slate-400 -ml-1 mt-2">%</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Uptime</div>
                </div>
                <div>
                    <div className="flex items-center gap-2 text-slate-900 font-light text-3xl tracking-tight">
                        HIPAA
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Compliant</div>
                </div>
            </div>
          </div>

          {/* Right Content - Abstract System Diagram */}
          <div className="relative h-[500px] w-full bg-slate-50/50 rounded-2xl border border-slate-200 overflow-hidden hidden lg:block shadow-sm">
             {/* Inner Grid */}
             <div className="absolute inset-0" 
                  style={{
                      backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                      opacity: 0.5
                  }}>
             </div>
             
             {/* Central Hub */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                 {/* Ripple Effect */}
                 <div className="absolute inset-0 bg-medical-500/5 rounded-full animate-ping duration-[3s]"></div>
                 <div className="w-48 h-48 bg-white border border-slate-200 rounded-full shadow-xl flex items-center justify-center relative z-10">
                     <div className="text-center space-y-1">
                         <Activity size={32} className="text-medical-600 mx-auto mb-2" strokeWidth={1.5} />
                         <div className="text-[10px] font-mono text-slate-400 uppercase">Status: Active</div>
                         <div className="text-sm font-bold text-slate-900 tracking-tight">CORE_ENGINE</div>
                     </div>
                 </div>
             </div>

             {/* Satellite Nodes */}
             <div className="absolute top-12 left-12 p-4 bg-white border border-slate-200 rounded-xl shadow-sm z-20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                    <Server size={14} className="text-slate-500" />
                </div>
                <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Ingest Node</div>
                    <div className="text-xs font-semibold text-slate-900">Processing</div>
                </div>
             </div>

             <div className="absolute bottom-12 right-12 p-4 bg-white border border-slate-200 rounded-xl shadow-sm z-20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-medical-50 flex items-center justify-center border border-medical-100">
                    <Zap size={14} className="text-medical-600" />
                </div>
                <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Output Node</div>
                    <div className="text-xs font-semibold text-slate-900">Optimized</div>
                </div>
             </div>

             {/* Connecting Lines (CSS SVG) */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                 <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                 <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                 <circle cx="50%" cy="50%" r="160" stroke="#e2e8f0" strokeWidth="1" fill="none" />
                 <circle cx="50%" cy="50%" r="120" stroke="#f1f5f9" strokeWidth="1" fill="none" />
             </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlatformHero;