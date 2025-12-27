import React from 'react';
import { Calendar, CreditCard } from 'lucide-react';

export const LogicFeature: React.FC = () => {
  return (
    <section id="logic-feature" className="py-24 lg:py-32 bg-white border-t border-slate-100" aria-labelledby="logic-feature-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-xs leading-normal mb-2 block">Feature 2: The Logic</span>
                <h2 id="logic-feature-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-6">Automated Commerce.</h2>
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                    Replaces: Calendly, Stripe Terminals, Manual Invoicing, DocuSign.
                </p>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="mt-1 bg-blue-50 p-2 rounded-lg text-blue-600">
                            <Calendar className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Smart Booking Engine</h4>
                            <p className="text-sm leading-relaxed text-slate-700">It filters leads based on your service area and job type. It knows your drive times and pricing rules.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 bg-green-50 p-2 rounded-lg text-green-600">
                            <CreditCard className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Integrated Payments</h4>
                            <p className="text-sm leading-relaxed text-slate-700">Take deposits instantly to secure the booking. Automatically charge the balance upon job completion.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                 <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 max-w-sm mx-auto">
                     <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                         <span className="font-semibold text-slate-900">Invoice #1024</span>
                         <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs leading-normal font-semibold">PAID</span>
                     </div>
                     <div className="space-y-2 mb-6">
                         <div className="flex justify-between text-sm leading-normal">
                             <span className="text-slate-700">Water Heater Install</span>
                             <span className="font-mono text-slate-900">$1,200.00</span>
                         </div>
                         <div className="flex justify-between text-sm leading-normal">
                             <span className="text-slate-700">Disposal Removal</span>
                             <span className="font-mono text-slate-900">$150.00</span>
                         </div>
                         <div className="flex justify-between text-sm leading-normal font-semibold pt-2 border-t border-slate-100">
                             <span className="text-slate-900">Total</span>
                             <span className="font-mono text-slate-900">$1,350.00</span>
                         </div>
                     </div>
                     <button className="w-full bg-slate-100 text-slate-600 font-semibold py-2 rounded cursor-not-allowed">
                         Receipt Sent Automatically
                     </button>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};
