import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-stone-50 border-t border-stone-100" aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center mb-20">
           <span className="text-brand-600 font-medium tracking-wider uppercase text-xs leading-normal mb-3 block">Simple Onboarding</span>
           <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-4">From "Chaos" to "Live" in 48 hours.</h2>
           <p className="text-lg leading-relaxed text-slate-700">
              We handle the heavy lifting. You just hand us the keys.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-200 to-transparent z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="h-24 w-24 bg-white rounded-full shadow-soft border-4 border-stone-50 flex items-center justify-center text-2xl font-bold text-slate-600 group-hover:border-brand-500 group-hover:text-brand-600 transition-all duration-300 mb-8">
                    1
                </div>
                <h3 className="text-xl font-semibold leading-snug text-slate-900 mb-3">The "Brain Dump"</h3>
                <p className="text-base leading-relaxed text-slate-700 px-4">
                    We hop on a 30-min call. You tell us your prices, service areas, and rules. We record it and feed it to the AI.
                </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="h-24 w-24 bg-white rounded-full shadow-soft border-4 border-stone-50 flex items-center justify-center text-2xl font-bold text-slate-600 group-hover:border-brand-500 group-hover:text-brand-600 transition-all duration-300 mb-8">
                    2
                </div>
                <h3 className="text-xl font-semibold leading-snug text-slate-900 mb-3">The Build</h3>
                <p className="text-base leading-relaxed text-slate-700 px-4">
                    Our team builds your PWA, sets up the booking logic, and provisions your phone numbers. No coding for you.
                </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="h-24 w-24 bg-white rounded-full shadow-soft border-4 border-stone-50 flex items-center justify-center text-2xl font-bold text-slate-600 group-hover:border-brand-500 group-hover:text-brand-600 transition-all duration-300 mb-8">
                    3
                </div>
                <h3 className="text-xl font-semibold leading-snug text-slate-900 mb-3">The Switch</h3>
                <p className="text-base leading-relaxed text-slate-700 px-4">
                    We point your domain to Centurim. You instantly start receiving qualified bookings on your new dashboard.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};