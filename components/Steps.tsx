import React from 'react';

export const Steps: React.FC = () => {
  return (
    <section id="steps" className="py-24 lg:py-32 bg-gray-50 border-t-2 border-black" aria-labelledby="steps-heading">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 id="steps-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-4">How It Works</h2>
             <p className="font-semibold text-slate-900">We do the work. You run your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 border-2 border-black">
                <span className="text-6xl font-bold text-gray-200 block mb-4">01</span>
                <h3 className="text-xl font-semibold leading-snug mb-3 uppercase">Onboarding Call</h3>
                <p className="text-sm leading-normal">15 Minutes. We get your price list, service areas, and logo. You hand over the keys.</p>
             </div>
             <div className="bg-white p-8 border-2 border-black">
                <span className="text-6xl font-bold text-gray-200 block mb-4">02</span>
                <h3 className="text-xl font-semibold leading-snug mb-3 uppercase">We Build It</h3>
                <p className="text-sm leading-normal">Our team configures your booking engine, trains the AI on your specific business, and builds the site.</p>
             </div>
             <div className="bg-white p-8 border-2 border-black">
                <span className="text-6xl font-bold text-gray-200 block mb-4">03</span>
                <h3 className="text-xl font-semibold leading-snug mb-3 uppercase">Launch Day</h3>
                <p className="text-sm leading-normal">We flip the switch. Your old site is replaced by a Sales Machine. You start getting bookings.</p>
             </div>
          </div>
       </div>
    </section>
  );
};
