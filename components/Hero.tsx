import React from 'react';
import { Button } from './ui/Button';
import { ShieldCheck, ArrowRight, Activity, Terminal } from 'lucide-react';
import { ViewState } from '../App';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-40 pb-32 md:pt-52 md:pb-40 overflow-hidden bg-white text-zinc-900 min-h-screen flex items-center">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24">
          
          {/* Status Indicator - Minimal */}
          <div className="inline-flex items-center gap-3 px-3 py-1 mb-12 border-l border-zinc-900">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Infrastructure v2.4.0
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-8">
            The Operating System for <br />
            <span className="text-zinc-900">Immigration Logic.</span>
          </h1>
          
          <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-12 font-normal">
            Transform unstructured inquiries into pre-qualified and retainer-ready case files. Automate evidence collection and enforce admissibility logic with sovereign precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <Button onClick={() => onNavigate('deploy')} variant="primary" size="lg" className="h-14 px-10 text-base font-medium rounded-md min-w-[200px] shadow-sm">
              Deploy Infrastructure
            </Button>
            <Button onClick={() => onNavigate('platform')} variant="outline" size="lg" className="h-14 px-10 text-base font-medium rounded-md min-w-[200px] border-zinc-300 text-zinc-700 hover:bg-zinc-50">
               View Logic Demo
            </Button>
          </div>
        </div>

        {/* Professional Dashboard Preview - Clean Light Mode */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative rounded-t-xl border border-zinc-200 bg-white shadow-2xl overflow-hidden">
             
             {/* Window Controls */}
             <div className="h-12 bg-zinc-50 border-b border-zinc-200 flex items-center px-6 gap-4 justify-between">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                   <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                   <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white border border-zinc-200 rounded text-[11px] font-medium text-zinc-500 uppercase tracking-wide">
                   <ShieldCheck size={12} className="text-zinc-400" />
                   Secure Connection
                </div>
             </div>

             {/* Inner UI */}
             <div className="bg-white min-h-[400px] md:min-h-[600px] p-8 md:p-12 grid grid-cols-12 gap-12 relative">
                
                {/* Sidebar */}
                <div className="col-span-12 md:col-span-3 border-r border-zinc-100 pr-8 space-y-12 hidden md:block">
                   <div className="space-y-4">
                      <div className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Case Queue</div>
                      <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                         <span className="text-sm text-zinc-600">Pending Review</span>
                         <span className="text-xs font-semibold bg-zinc-100 text-zinc-900 px-2 py-0.5 rounded">12</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-zinc-100">
                         <span className="text-sm text-zinc-600">Qualified</span>
                         <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded">4</span>
                      </div>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Financials</div>
                      <div>
                         <div className="text-3xl font-bold text-zinc-900 tracking-tight">$14,500</div>
                         <div className="text-xs text-zinc-400 mt-1">Projected Pipeline</div>
                      </div>
                   </div>
                </div>

                {/* Main Content */}
                <div className="col-span-12 md:col-span-9">
                   <div className="flex justify-between items-start mb-12">
                      <div>
                         <h3 className="text-2xl font-bold text-zinc-900 mb-2">Subject: Aris Doe</h3>
                         <p className="text-sm text-zinc-500 font-medium">Reference ID: #8821-X • EB-1A Admissibility Assessment</p>
                      </div>
                      <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold uppercase tracking-wide rounded-full flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Ready for Retainer
                      </span>
                   </div>

                   {/* Progress Visual */}
                   <div className="grid grid-cols-3 gap-8 mb-12">
                      <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-lg">
                         <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">Evidence Audit</div>
                         <div className="flex items-center gap-3 text-zinc-900 font-semibold mb-3">
                            <ShieldCheck size={18} className="text-emerald-600" /> Verified
                         </div>
                         <div className="w-full bg-zinc-200 h-1 rounded-full">
                            <div className="bg-zinc-900 h-1 rounded-full w-full"></div>
                         </div>
                      </div>
                      <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-lg">
                         <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">Retainer Status</div>
                         <div className="flex items-center gap-3 text-zinc-900 font-semibold mb-3">
                            <Terminal size={18} className="text-zinc-900" /> Signed
                         </div>
                         <div className="w-full bg-zinc-200 h-1 rounded-full">
                            <div className="bg-zinc-900 h-1 rounded-full w-full"></div>
                         </div>
                      </div>
                      <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-lg">
                         <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">Priority Date</div>
                         <div className="flex items-center gap-3 text-zinc-900 font-semibold mb-3">
                            <Activity size={18} className="text-zinc-900" /> Current
                         </div>
                         <div className="w-full bg-zinc-200 h-1 rounded-full">
                            <div className="bg-zinc-900 h-1 rounded-full w-full"></div>
                         </div>
                      </div>
                   </div>

                   {/* Agent Log - Clean Code Look */}
                   <div className="border border-zinc-200 rounded-lg p-6 bg-white font-mono text-xs text-zinc-600 leading-relaxed shadow-sm">
                      <div className="flex items-center gap-2 text-zinc-400 border-b border-zinc-100 pb-3 mb-3">
                         <Terminal size={14} />
                         <span>SYSTEM_LOG</span>
                      </div>
                      <div className="space-y-2">
                         <p><span className="text-zinc-400">[10:42:01]</span> Initiating statutory analysis...</p>
                         <p><span className="text-zinc-400">[10:42:03]</span> Extracted 4 citations from CV.</p>
                         <p><span className="text-zinc-400">[10:42:05]</span> <span className="text-amber-600 bg-amber-50 px-1 rounded">WARN</span> Passport expiry threshold (6mo).</p>
                         <p><span className="text-zinc-400">[10:42:06]</span> Assessment complete. Strategy brief generated.</p>
                         <p className="text-emerald-600 font-bold">_</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;