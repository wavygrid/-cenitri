import React from 'react';
import { Check, X } from 'lucide-react';

export const ValueComparison: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-stone-50 border-t border-stone-200" id="value" aria-labelledby="value-heading">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 id="value-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900">Why consolidate?</h2>
            <p className="text-lg leading-relaxed text-slate-700 mt-4">Simplicity wins. Efficiency pays.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-stone-200">
            
            {/* The Mess */}
            <div className="bg-white p-10 flex flex-col">
                <h3 className="text-sm leading-normal font-medium text-slate-600 mb-8 uppercase tracking-widest">The Fragmented Stack</h3>
                <div className="space-y-6 flex-1">
                    <div className="flex justify-between items-center opacity-50">
                        <span className="text-base leading-normal text-slate-700 font-medium">Website Hosting</span>
                        <span className="line-through text-slate-600">$29/mo</span>
                    </div>
                    <div className="flex justify-between items-center opacity-50">
                        <span className="text-base leading-normal text-slate-700 font-medium">Booking Software</span>
                        <span className="line-through text-slate-600">$15/mo</span>
                    </div>
                    <div className="flex justify-between items-center opacity-50">
                        <span className="text-base leading-normal text-slate-700 font-medium">Reputation Mgmt</span>
                        <span className="line-through text-slate-600">$189/mo</span>
                    </div>
                    <div className="flex justify-between items-center opacity-50">
                        <span className="text-base leading-normal text-slate-700 font-medium">SEO Retainer</span>
                        <span className="line-through text-slate-600">$500/mo</span>
                    </div>
                </div>
                <div className="pt-8 border-t border-stone-100 mt-8">
                    <div className="flex items-center gap-2 text-red-600 font-bold mb-1">
                        <X className="h-5 w-5" /> Chaos & Data Silos
                    </div>
                    <div className="text-3xl font-bold text-slate-600">~$733/mo</div>
                </div>
            </div>

            {/* The Solution */}
            <div className="bg-stone-900 p-10 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600 rounded-full blur-[60px] opacity-20"></div>

                <h3 className="text-sm leading-normal font-medium text-brand-500 mb-8 uppercase tracking-widest">The Centurim OS</h3>
                <div className="space-y-6 flex-1">
                    <div className="flex justify-between items-center">
                        <span className="text-base leading-normal text-white font-medium">All Features Included</span>
                        <Check className="h-5 w-5 text-brand-500" />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-base leading-normal text-white font-medium">Unified Data</span>
                        <Check className="h-5 w-5 text-brand-500" />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-base leading-normal text-white font-medium">24/7 AI Support</span>
                        <Check className="h-5 w-5 text-brand-500" />
                    </div>
                </div>
                <div className="pt-8 border-t border-stone-800 mt-8 relative z-10">
                    <div className="flex items-center gap-2 text-green-400 font-bold mb-1">
                        <Check className="h-5 w-5" /> Full Automation
                    </div>
                    <div className="text-3xl font-bold text-white">$199/mo</div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};