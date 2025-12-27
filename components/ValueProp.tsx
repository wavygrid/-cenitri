import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

export const ValueProp: React.FC = () => {
  return (
    <section id="value-prop" className="py-24 lg:py-32 bg-white border-y border-stone-100" aria-labelledby="value-prop-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center mb-16">
           <span className="text-brand-600 font-semibold tracking-wider uppercase text-xs leading-normal mb-3 block">The Audit</span>
           <h2 id="value-prop-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-6">
             Where is your money leaking?
           </h2>
           <p className="text-lg leading-relaxed text-slate-700 max-w-2xl mx-auto">
             Most tradesmen are bleeding cash through "subscription fatigue." You pay for 10 tools, but none of them talk to each other.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-stone-200 rounded-[2.5rem] overflow-hidden shadow-xl">

            {/* THE PROBLEM (Left Side) */}
            <div className="bg-stone-50 p-8 md:p-12 relative">
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                        <X className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold leading-tight text-slate-900">Your Current Stack</h3>
                </div>

                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-stone-200 opacity-70">
                        <span className="font-medium text-slate-700">Website Hosting (Wix/Squarespace)</span>
                        <span className="font-semibold text-red-500">-$29/mo</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-stone-200 opacity-70">
                        <span className="font-medium text-slate-700">Booking Tool (Calendly/Acuity)</span>
                        <span className="font-semibold text-red-500">-$15/mo</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-stone-200 opacity-70">
                        <span className="font-medium text-slate-700">Review Management (Podium)</span>
                        <span className="font-semibold text-red-500">-$189/mo</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-stone-200 opacity-70">
                        <span className="font-medium text-slate-700">Email Marketing (Mailchimp)</span>
                        <span className="font-semibold text-red-500">-$60/mo</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-stone-200 opacity-70">
                        <span className="font-medium text-slate-700">SEO Agency Retainer</span>
                        <span className="font-semibold text-red-500">-$500/mo</span>
                    </div>
                </div>

                <div className="border-t-2 border-dashed border-stone-300 pt-6">
                    <div className="flex justify-between items-end">
                        <span className="text-sm leading-normal font-semibold text-slate-600 uppercase">Total Monthly Burn</span>
                        <span className="text-4xl font-bold text-slate-900">$793<span className="text-lg text-slate-600 font-normal">/mo</span></span>
                    </div>
                    <p className="text-red-500 text-sm leading-normal mt-2 font-medium">And nothing is connected.</p>
                </div>
            </div>

            {/* THE SOLUTION (Right Side) */}
            <div className="bg-stone-900 p-8 md:p-12 relative text-white">
                <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs leading-normal font-semibold px-4 py-2 rounded-bl-xl">
                    THE SMART WAY
                </div>

                <div className="flex items-center gap-3 mb-8">
                    <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                        <Check className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold leading-tight">The Centurim OS</h3>
                </div>

                <div className="space-y-4 mb-8">
                    <div className="p-4 bg-stone-800 rounded-xl border border-stone-700 flex items-center gap-4">
                        <div className="h-8 w-8 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center text-xs leading-normal font-semibold">ALL</div>
                        <div className="flex-1">
                            <span className="font-semibold text-white block">Unified Trade Platform</span>
                            <span className="text-xs leading-normal text-slate-400">Website + Booking + AI + SEO + Reviews</span>
                        </div>
                        <Check className="h-5 w-5 text-green-400" />
                    </div>

                    {/* Feature Bullets */}
                    <ul className="space-y-3 px-2">
                        <li className="flex items-center gap-3 text-stone-300 text-sm leading-normal">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                            One Login for everything
                        </li>
                        <li className="flex items-center gap-3 text-stone-300 text-sm leading-normal">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                            Data syncs automatically (No Zapier)
                        </li>
                        <li className="flex items-center gap-3 text-stone-300 text-sm leading-normal">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                            Sovereign Ownership (You own the data)
                        </li>
                         <li className="flex items-center gap-3 text-stone-300 text-sm leading-normal">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                            24/7 AI Receptionist Included
                        </li>
                    </ul>
                </div>

                <div className="border-t-2 border-dashed border-stone-700 pt-6 mt-12">
                    <div className="flex justify-between items-end">
                        <span className="text-sm leading-normal font-semibold text-slate-400 uppercase">Your Investment</span>
                        <div className="text-right">
                            <span className="text-4xl font-bold text-white">$299<span className="text-lg text-slate-500 font-normal">/mo</span></span>
                        </div>
                    </div>
                    <p className="text-green-400 text-sm leading-normal mt-2 font-medium">You save $5,928 per year.</p>
                </div>
            </div>

        </div>

        <div className="mt-12 text-center">
             <p className="text-slate-700 text-sm leading-normal mb-4">Does this math make sense to you?</p>
             <button className="inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-700 border-b-2 border-brand-100 hover:border-brand-600 transition-all pb-1">
                 Start your 14-day trial <ArrowRight className="h-4 w-4" />
             </button>
        </div>

      </div>
    </section>
  );
};
