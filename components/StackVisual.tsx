import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const StackVisual: React.FC = () => {
  return (
    <section id="stack-visual" className="py-24 lg:py-32 bg-white border-y border-stone-100 overflow-hidden relative" aria-labelledby="stack-visual-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center mb-24">
            <h2 id="stack-visual-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-6">Stop Juggling. Start Flowing.</h2>
            <p className="text-lg leading-relaxed text-slate-700 max-w-2xl mx-auto">
                Your business is currently a collection of disconnected apps. <br/>We turn those fragments into a single, straight line to revenue.
            </p>
        </div>

        {/* The Pipeline Visual */}
        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-stone-100 -translate-y-1/2 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-transparent via-brand-400 to-transparent animate-pulse-slow"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 relative z-10">

                {/* Step 1: Input */}
                <div className="flex flex-col items-center">
                    <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-card w-full max-w-sm relative group hover:-translate-y-2 transition-transform duration-300">
                        <div className="absolute -top-3 -left-3 bg-stone-900 text-white h-8 w-8 rounded-full flex items-center justify-center font-semibold text-sm leading-normal">1</div>
                        <h3 className="font-semibold text-lg leading-snug mb-4 text-slate-900">The Input</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100">
                                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                <span className="text-sm leading-normal font-medium text-slate-700">Website Visitor</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                <span className="text-sm leading-normal font-medium text-slate-700">Missed Phone Call</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 2: Processing (Centurim) */}
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-brand-600 p-8 rounded-[2.5rem] shadow-2xl shadow-brand-500/30 w-full max-w-xs text-center text-white relative scale-110">
                        <div className="absolute inset-0 bg-white/10 rounded-[2.5rem] animate-pulse"></div>
                        <div className="relative z-10">
                            <div className="h-12 w-12 bg-white rounded-2xl mx-auto flex items-center justify-center mb-4 text-brand-600 font-display font-bold text-2xl">C</div>
                            <h3 className="font-bold text-2xl leading-tight mb-2">The Engine</h3>
                            <p className="text-brand-100 text-sm leading-normal">Processing Logic, Pricing & Dispatch</p>
                        </div>
                    </div>
                </div>

                {/* Step 3: Output */}
                <div className="flex flex-col items-center">
                    <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-card w-full max-w-sm relative group hover:-translate-y-2 transition-transform duration-300">
                         <div className="absolute -top-3 -right-3 bg-green-500 text-white h-8 w-8 rounded-full flex items-center justify-center font-semibold text-sm leading-normal"><CheckCircle2 className="h-4 w-4"/></div>
                        <h3 className="font-semibold text-lg leading-snug mb-4 text-slate-900">The Result</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-100">
                                <span className="text-sm leading-normal font-semibold text-green-900">Job Booked</span>
                                <span className="text-xs leading-normal bg-white px-2 py-1 rounded text-green-700 font-semibold">4:00 PM</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-100">
                                <span className="text-sm leading-normal font-semibold text-green-900">Deposit Paid</span>
                                <span className="text-xs leading-normal bg-white px-2 py-1 rounded text-green-700 font-semibold">+$50.00</span>
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
