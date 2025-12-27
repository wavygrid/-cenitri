import React from 'react';
import { ArrowRight } from 'lucide-react';

export const WhatIsIt: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-medium text-slate-900 mb-4">It's not a website. It's a worker.</h2>
            <p className="text-lg text-slate-600">
                Most websites are digital brochures. Centurim is a digital employee that works 24/7/365 without asking for a raise.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* The Old Way */}
             <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100">
                 <h3 className="text-xl font-medium text-slate-400 mb-4">Your Current Website</h3>
                 <ul className="space-y-4">
                     <li className="flex items-start gap-3 text-slate-500">
                         <span className="text-red-400 font-bold">×</span>
                         Just sits there waiting.
                     </li>
                     <li className="flex items-start gap-3 text-slate-500">
                         <span className="text-red-400 font-bold">×</span>
                         "Contact Us" form goes to spam.
                     </li>
                     <li className="flex items-start gap-3 text-slate-500">
                         <span className="text-red-400 font-bold">×</span>
                         Cannot take payments.
                     </li>
                     <li className="flex items-start gap-3 text-slate-500">
                         <span className="text-red-400 font-bold">×</span>
                         Cannot give quotes.
                     </li>
                 </ul>
             </div>

             {/* The Centurim Way */}
             <div className="p-10 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-900/10">
                 <h3 className="text-xl font-medium text-white mb-4">The Centurim System</h3>
                 <ul className="space-y-4">
                     <li className="flex items-start gap-3 text-blue-100">
                         <span className="text-white font-bold">✓</span>
                         Answers phone calls (Voice AI).
                     </li>
                     <li className="flex items-start gap-3 text-blue-100">
                         <span className="text-white font-bold">✓</span>
                         Gives instant price estimates.
                     </li>
                     <li className="flex items-start gap-3 text-blue-100">
                         <span className="text-white font-bold">✓</span>
                         Collects deposits via Credit Card.
                     </li>
                     <li className="flex items-start gap-3 text-blue-100">
                         <span className="text-white font-bold">✓</span>
                         Syncs directly to your calendar.
                     </li>
                 </ul>
             </div>
         </div>
      </div>
    </section>
  );
};