import React from 'react';

export const Results: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-stone-100">
       <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-stone-900 mb-12">Real results for trade owners like you.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 bg-stone-50 rounded-3xl">
                <p className="text-5xl font-extrabold text-stone-900 mb-2">30%</p>
                <p className="text-stone-500 font-medium">Increase in Revenue</p>
                <p className="text-xs text-stone-400 mt-4">Average within 3 months</p>
             </div>
             <div className="p-8 bg-stone-50 rounded-3xl">
                <p className="text-5xl font-extrabold text-stone-900 mb-2">10hrs</p>
                <p className="text-stone-500 font-medium">Saved Per Week</p>
                <p className="text-xs text-stone-400 mt-4">On admin and phone tag</p>
             </div>
             <div className="p-8 bg-stone-50 rounded-3xl">
                <p className="text-5xl font-extrabold text-stone-900 mb-2">24/7</p>
                <p className="text-stone-500 font-medium">Business Availability</p>
                <p className="text-xs text-stone-400 mt-4">Book jobs while you sleep</p>
             </div>
          </div>
       </div>
    </section>
  );
};