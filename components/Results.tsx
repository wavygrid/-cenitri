import React from 'react';

export const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 lg:py-32 bg-white border-b border-stone-100" aria-labelledby="results-heading">
       <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 id="results-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-12">Real results for trade owners like you.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 bg-slate-50 rounded-3xl">
                <p className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">30%</p>
                <p className="text-slate-700 font-medium">Increase in Revenue</p>
                <p className="text-xs leading-normal text-slate-600 mt-4">Average within 3 months</p>
             </div>
             <div className="p-8 bg-slate-50 rounded-3xl">
                <p className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">10hrs</p>
                <p className="text-slate-700 font-medium">Saved Per Week</p>
                <p className="text-xs leading-normal text-slate-600 mt-4">On admin and phone tag</p>
             </div>
             <div className="p-8 bg-slate-50 rounded-3xl">
                <p className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">24/7</p>
                <p className="text-slate-700 font-medium">Business Availability</p>
                <p className="text-xs leading-normal text-slate-600 mt-4">Book jobs while you sleep</p>
             </div>
          </div>
       </div>
    </section>
  );
};
