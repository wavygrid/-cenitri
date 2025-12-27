import React from 'react';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Simple, transparent pricing.</h2>
           <p className="text-lg text-slate-500">
             No setup fees. No hidden costs. Cancel anytime.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           
           {/* Starter */}
           <div className="p-10 rounded-3xl border border-slate-200 bg-white hover:border-slate-300 transition-all">
              <h3 className="text-xl font-bold text-slate-900">Solo Pro</h3>
              <p className="text-slate-500 text-sm mt-2 mb-8">Everything needed for owner-operators.</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                 <span className="text-5xl font-bold text-slate-900 tracking-tight">$199</span>
                 <span className="text-slate-500 font-medium">/mo</span>
              </div>

              <ul className="space-y-4 mb-10">
                 {['Professional PWA Website', 'Online Booking Engine', 'Payment Processing', 'Basic CRM'].map((feat, i) => (
                    <li key={i} className="flex gap-3 text-slate-700 text-sm">
                        <Check className="h-5 w-5 text-slate-400" />
                        <span>{feat}</span>
                    </li>
                 ))}
              </ul>

              <button className="w-full py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all">
                 Start Free Trial
              </button>
           </div>

           {/* Growth */}
           <div className="p-10 rounded-3xl bg-slate-900 text-white relative shadow-2xl shadow-slate-900/10">
              <div className="absolute top-0 right-0 p-4">
                  <span className="bg-brand-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
              </div>
              
              <h3 className="text-xl font-bold text-white">Growth</h3>
              <p className="text-slate-400 text-sm mt-2 mb-8">For teams ready to automate operations.</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                 <span className="text-5xl font-bold text-white tracking-tight">$299</span>
                 <span className="text-slate-400 font-medium">/mo</span>
              </div>

              <ul className="space-y-4 mb-10">
                 {['Everything in Solo', '24/7 AI Receptionist', 'Automated Google Reviews', 'Local SEO Pages'].map((feat, i) => (
                    <li key={i} className="flex gap-3 text-white text-sm">
                        <Check className="h-5 w-5 text-brand-500" />
                        <span>{feat}</span>
                    </li>
                 ))}
              </ul>

              <button className="w-full py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-all">
                 Start Free Trial
              </button>
           </div>

        </div>

      </div>
    </section>
  );
};