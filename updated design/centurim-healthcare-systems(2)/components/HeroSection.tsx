import React from 'react';
import { ArrowRight, Activity, Search, ShieldCheck } from 'lucide-react';

const HeroSection: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => {
  return (
    <section className="bg-white pt-16 pb-16 border-b border-slate-100" aria-label="Introduction">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Editorial Content */}
          <div className="lg:col-span-6 space-y-8">
            <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1] text-balance">
              Automated Clinical <br />
              <span className="text-slate-500">Documentation Integrity</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-md leading-relaxed font-normal">
              Stop revenue leakage with the first AI engine designed to reconcile unstructured clinical notes against MDS billing codes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                    onClick={onNavigate}
                    aria-label="Start pilot audit" 
                    className="bg-slate-900 text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
                >
                  Start Pilot Audit <ArrowRight size={14} aria-hidden="true" />
                </button>
            </div>
          </div>

          {/* Right: The "Snapshot" Visual - Medical Context */}
          <div className="lg:col-span-6 relative" aria-hidden="true">
              {/* Main Card */}
              <div className="bg-white rounded-xl p-0 border border-slate-200 relative z-10 shadow-medical overflow-hidden max-w-lg mx-auto">
                  
                  {/* EHR Header */}
                  <div className="bg-slate-50 border-b border-slate-200 p-4 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white border border-slate-200 rounded-md flex items-center justify-center text-medical-600">
                              <Activity size={16} />
                          </div>
                          <div>
                              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Patient Record</div>
                              <div className="text-xs font-mono font-medium text-slate-900">REF: 9942-AX-29</div>
                          </div>
                      </div>
                      <div className="px-2.5 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                          Live Audit
                      </div>
                  </div>

                  {/* Body of Snapshot */}
                  <div className="p-6 space-y-6">
                      <div className="space-y-3">
                          <div className="flex justify-between items-end">
                              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">NTA Comorbidity Capture</span>
                              <span className="text-medical-600 text-[10px] font-bold uppercase flex items-center gap-1 bg-medical-50 px-2 py-0.5 rounded-full border border-medical-100"><ShieldCheck size={10} /> Verified</span>
                          </div>
                          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full w-[88%] bg-medical-600 rounded-full"></div>
                          </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg">
                              <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Revenue Impact</div>
                              <div className="text-xl font-mono font-medium text-slate-900">+$2,400.00</div>
                          </div>
                          <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg">
                              <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Compliance Risk</div>
                              <div className="text-xl font-medium text-emerald-600">Low</div>
                          </div>
                      </div>
                      
                      <div className="pt-2 border-t border-slate-100">
                          <table className="w-full text-left">
                              <thead>
                                  <tr>
                                      <th className="text-[10px] font-bold text-slate-400 uppercase py-2">Source</th>
                                      <th className="text-[10px] font-bold text-slate-400 uppercase py-2 text-right">Timestamp</th>
                                  </tr>
                              </thead>
                              <tbody className="text-xs">
                                  <tr className="border-b border-slate-50">
                                      <td className="py-2 text-slate-600 font-medium">Nursing Notes (PDF)</td>
                                      <td className="py-2 text-right font-mono text-slate-400">10:42:01</td>
                                  </tr>
                                  <tr>
                                      <td className="py-2 text-slate-600 font-medium">MDS Assessment (XML)</td>
                                      <td className="py-2 text-right font-mono text-slate-400">10:42:05</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
              
              {/* Floating "Badge" element - Integrated & Subtle */}
              <div className="absolute -right-4 bottom-12 bg-white border border-medical-100 p-4 rounded-lg shadow-xl max-w-[200px] animate-in slide-in-from-right-4 duration-700 hidden md:block">
                  <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                      <div>
                          <div className="text-[10px] uppercase font-bold text-slate-500 mb-0.5">Variance Detected</div>
                          <div className="text-sm font-bold text-slate-900 leading-tight">Sepsis (A41.9)</div>
                          <div className="text-xs font-mono text-slate-600 mt-1">Section I: <span className="text-red-500">Missing</span></div>
                      </div>
                  </div>
              </div>

              {/* Decorative Underlay */}
              <div className="absolute top-4 -right-4 w-full h-full bg-slate-50 rounded-xl -z-10 hidden md:block border border-slate-100 border-dashed"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;