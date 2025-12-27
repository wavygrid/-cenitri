import React from 'react';
import { CreditCard, Star, Search, BarChart } from 'lucide-react';

export const EcosystemGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
         <div className="text-center mb-16">
             <h2 className="text-3xl font-medium text-slate-900">3. We handle the rest.</h2>
             <p className="text-lg text-slate-600 mt-4">Everything else you need to look like a national brand.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* Payments */}
             <div className="col-span-1 md:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col md:flex-row items-center gap-8">
                 <div className="flex-1">
                     <div className="bg-green-100 h-10 w-10 rounded-full flex items-center justify-center mb-4 text-green-700">
                         <CreditCard className="h-5 w-5" />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">Instant Payments</h3>
                     <p className="text-slate-600">We integrate with Stripe so you can collect deposits during booking and automatically invoice upon completion. No more chasing checks.</p>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 w-full max-w-xs">
                     <div className="flex justify-between items-center mb-2">
                         <span className="text-xs font-bold text-slate-400">PAYMENT RECEIVED</span>
                         <span className="text-xs font-bold text-green-600">✓ SUCCESS</span>
                     </div>
                     <div className="text-2xl font-bold text-slate-900">$450.00</div>
                 </div>
             </div>

             {/* Reviews */}
             <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                 <div className="bg-yellow-100 h-10 w-10 rounded-full flex items-center justify-center mb-4 text-yellow-700">
                     <Star className="h-5 w-5" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">Auto-Reviews</h3>
                 <p className="text-slate-600">We automatically text happy customers a link to your Google Business Profile.</p>
             </div>

             {/* SEO */}
             <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                 <div className="bg-purple-100 h-10 w-10 rounded-full flex items-center justify-center mb-4 text-purple-700">
                     <Search className="h-5 w-5" />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">Local SEO</h3>
                 <p className="text-slate-600">We build pages for every suburb you serve, so you show up on Google Maps everywhere.</p>
             </div>

             {/* Dashboard */}
             <div className="col-span-1 md:col-span-2 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 flex flex-col md:flex-row items-center gap-8">
                 <div className="flex-1">
                     <div className="bg-slate-700 h-10 w-10 rounded-full flex items-center justify-center mb-4 text-white">
                         <BarChart className="h-5 w-5" />
                     </div>
                     <h3 className="text-xl font-bold mb-2">The Cockpit</h3>
                     <p className="text-slate-400">See exactly how much money you made this week, which jobs are pending, and what your conversion rate is.</p>
                 </div>
                 <div className="flex gap-4">
                     <div className="text-center">
                         <div className="text-3xl font-bold text-white">12</div>
                         <div className="text-xs text-slate-400 uppercase">Jobs this week</div>
                     </div>
                     <div className="w-px bg-slate-700"></div>
                     <div className="text-center">
                         <div className="text-3xl font-bold text-green-400">$8.2k</div>
                         <div className="text-xs text-slate-400 uppercase">Revenue</div>
                     </div>
                 </div>
             </div>
         </div>
      </div>
    </section>
  );
};