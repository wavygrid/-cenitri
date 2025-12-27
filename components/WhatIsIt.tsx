import React from 'react';
import { ArrowRight } from 'lucide-react';

export const WhatIsIt: React.FC = () => {
  return (
    <section id="what-is-it" className="py-24 lg:py-32 bg-white" aria-labelledby="what-is-it-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="what-is-it-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-4">It's not a website. It's a worker.</h2>
            <p className="text-lg leading-relaxed text-slate-700">
                Most websites are digital brochures. Centurim is a digital employee that works 24/7/365 without asking for a raise.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* The Old Way */}
             <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100">
                 <h3 className="text-xl font-semibold leading-snug text-slate-600 mb-4">Your Current Website</h3>
                 <ul className="space-y-4">
                     <li className="flex items-start gap-3 text-slate-700">
                         <span className="text-red-400 font-semibold">×</span>
                         Just sits there waiting.
                     </li>
                     <li className="flex items-start gap-3 text-slate-700">
                         <span className="text-red-400 font-semibold">×</span>
                         "Contact Us" form goes to spam.
                     </li>
                     <li className="flex items-start gap-3 text-slate-700">
                         <span className="text-red-400 font-semibold">×</span>
                         Cannot take payments.
                     </li>
                     <li className="flex items-start gap-3 text-slate-700">
                         <span className="text-red-400 font-semibold">×</span>
                         Cannot give quotes.
                     </li>
                 </ul>
             </div>

             {/* The Centurim Way */}
             <div className="p-10 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-900/10">
                 <h3 className="text-xl font-semibold leading-snug text-white mb-4">The Centurim System</h3>
                 <ul className="space-y-4">
                     <li className="flex items-start gap-3 text-blue-100">
                         <span className="text-white font-semibold">✓</span>
                         Answers phone calls (Voice AI).
                     </li>
                     <li className="flex items-start gap-3 text-blue-100">
                         <span className="text-white font-semibold">✓</span>
                         Gives instant price estimates.
                     </li>
                     <li className="flex items-start gap-3 text-blue-100">
                         <span className="text-white font-semibold">✓</span>
                         Collects deposits via Credit Card.
                     </li>
                     <li className="flex items-start gap-3 text-blue-100">
                         <span className="text-white font-semibold">✓</span>
                         Syncs directly to your calendar.
                     </li>
                 </ul>
             </div>
         </div>
      </div>
    </section>
  );
};
