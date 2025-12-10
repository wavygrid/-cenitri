import React from 'react';
import { ArrowRight, AlertCircle, FileBarChart } from 'lucide-react';

const MarginSection: React.FC = () => {
  return (
    <section className="bg-medical-50/50 py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual (Left) - Clean Medical Card Stack */}
            <div className="relative order-2 lg:order-1">
                <div className="relative aspect-square md:aspect-[5/4] bg-white rounded-2xl shadow-float border border-slate-100 p-8 flex items-center justify-center overflow-hidden">
                     {/* Background Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    
                    {/* Floating Alert Card */}
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-xl max-w-[280px] w-full relative z-10 transform -rotate-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                                <AlertCircle size={16} />
                            </div>
                            <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">Drift Detected</span>
                        </div>
                        <div className="space-y-1 mb-4">
                            <div className="text-lg font-bold text-slate-900">Malnutrition</div>
                            <div className="text-xs text-slate-500 leading-snug">Documented in dietary notes, missing in MDS Section K.</div>
                        </div>
                        <div className="pt-4 border-t border-slate-50 flex justify-between items-end">
                            <div className="text-[10px] text-slate-400 font-medium uppercase">Impact</div>
                            <div className="text-lg font-bold text-red-600">-$1,180</div>
                        </div>
                    </div>

                    {/* Background Decorative Card */}
                    <div className="absolute top-1/2 left-1/2 w-[280px] h-[180px] bg-slate-50 border border-slate-200 rounded-xl -z-0 transform translate-x-4 translate-y-4 opacity-50"></div>
                </div>
            </div>

            {/* Content (Right) */}
            <div className="space-y-8 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2">
                    <FileBarChart className="text-medical-600" size={20} />
                    <span className="text-sm font-bold text-slate-900 uppercase tracking-wide">Critical Insight</span>
                </div>
                
                <blockquote className="text-3xl font-light text-slate-900 leading-tight text-balance">
                    "In an industry operating on thin margins, every missed code is a direct hit to sustainability. You suspect revenue is being left on the table due to coding drift, but you lack the human bandwidth to prove it."
                </blockquote>
                
                <div className="space-y-6">
                    <div>
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">The Centurim Protocol</h4>
                        <p className="text-lg text-slate-600 leading-relaxed font-light">
                             Our engine has reconciled thousands of clinical data points against CMS regulations while operating on a Zero Retention architecture that keeps your data sovereign and secure.
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default MarginSection;