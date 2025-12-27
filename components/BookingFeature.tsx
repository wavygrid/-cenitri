import React from 'react';
import { Calculator } from 'lucide-react';

export const BookingFeature: React.FC = () => {
  return (
    <section id="booking-feature" className="py-24 lg:py-32 bg-slate-50" aria-labelledby="booking-feature-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
                <div className="bg-teal-50 text-teal-700 h-12 w-12 rounded-xl flex items-center justify-center mb-6">
                    <Calculator className="h-6 w-6" />
                </div>
                <h2 id="booking-feature-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-4">2. We quote the job.</h2>
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                    Stop driving across town just to give a quote. Our "Smart Booking Engine" gives customers a price range instantly on your website.
                </p>
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                    If they can't afford you, they leave. If they can, they book. You only talk to qualified leads.
                </p>
            </div>

            {/* The Wizard Visual */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden max-w-md mx-auto w-full">
                <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                    <span className="text-white font-semibold text-sm leading-normal">Get an Instant Quote</span>
                    <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-400"></div>
                        <div className="h-2 w-2 rounded-full bg-slate-600"></div>
                        <div className="h-2 w-2 rounded-full bg-slate-600"></div>
                    </div>
                </div>
                <div className="p-6">
                    <p className="font-medium text-slate-900 mb-4">Select Service Type</p>
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center p-3 border border-blue-500 bg-blue-50 rounded-lg cursor-pointer">
                            <span className="text-sm leading-normal font-medium text-blue-900">Water Heater Repair</span>
                            <div className="h-4 w-4 rounded-full border-4 border-blue-500"></div>
                        </div>
                        <div className="flex justify-between items-center p-3 border border-slate-200 rounded-lg cursor-pointer opacity-60">
                            <span className="text-sm leading-normal font-medium text-slate-700">Leaking Pipe</span>
                            <div className="h-4 w-4 rounded-full border border-slate-300"></div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg text-center mb-6">
                         <p className="text-xs leading-normal text-slate-600 uppercase font-medium mb-1">Estimated Price</p>
                         <p className="text-3xl font-bold text-slate-900">$250 - $400</p>
                    </div>

                    <button className="w-full py-3 bg-slate-900 text-white font-semibold rounded-lg text-sm leading-normal">
                        Continue to Booking
                    </button>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
