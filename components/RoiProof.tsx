import React from 'react';

export const RoiProof: React.FC = () => {
  return (
    <section id="roi-proof" className="py-24 lg:py-32 bg-white border-y border-slate-100" aria-labelledby="roi-proof-heading">
       <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 id="roi-proof-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-12">The Math is simple.</h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">

              <div className="bg-white p-6">
                  <p className="text-sm leading-normal font-semibold uppercase text-slate-600 mb-2">Average Job Value</p>
                  <p className="text-5xl md:text-6xl font-bold text-slate-900">$450</p>
              </div>

              <div className="text-3xl text-slate-300 font-light">+</div>

              <div className="bg-white p-6">
                  <p className="text-sm leading-normal font-semibold uppercase text-slate-600 mb-2">One Saved Missed Call</p>
                  <p className="text-5xl md:text-6xl font-bold text-blue-600">1 Job</p>
              </div>

              <div className="text-3xl text-slate-300 font-light">=</div>

              <div className="bg-white p-6">
                  <p className="text-sm leading-normal font-semibold uppercase text-slate-600 mb-2">Pays for</p>
                  <p className="text-5xl md:text-6xl font-bold text-green-600">2 Months</p>
                  <p className="text-xs leading-normal text-slate-600 mt-2">of Centurim</p>
              </div>

          </div>

          <p className="text-lg leading-relaxed text-slate-700 mt-12">
              If our system catches just <strong>one</strong> missed call every 60 days, it is free.
          </p>

       </div>
    </section>
  );
};
