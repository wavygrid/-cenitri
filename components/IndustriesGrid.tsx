import React from 'react';
import { ArrowRight } from 'lucide-react';

const industries = [
  { name: 'Plumbing', count: '120+ Templates', color: 'bg-blue-100 text-blue-800' },
  { name: 'Electrical', count: '85+ Templates', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'HVAC', count: '90+ Templates', color: 'bg-orange-100 text-orange-800' },
  { name: 'Landscaping', count: '60+ Templates', color: 'bg-green-100 text-green-800' },
  { name: 'Cleaning', count: '200+ Templates', color: 'bg-purple-100 text-purple-800' },
  { name: 'Roofing', count: '45+ Templates', color: 'bg-stone-200 text-stone-800' },
  { name: 'Pest Control', count: '30+ Templates', color: 'bg-teal-100 text-teal-800' },
  { name: 'Locksmith', count: '25+ Templates', color: 'bg-red-100 text-red-800' },
];

export const IndustriesGrid: React.FC = () => {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-white" aria-labelledby="industries-heading">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-xl">
                  <h2 id="industries-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-4">Built for your specific trade.</h2>
                  <p className="text-lg leading-relaxed text-slate-700">
                      We don't do "generic." Every industry has a specific data model, pricing structure, and keyword strategy pre-built.
                  </p>
              </div>
              <button className="hidden md:flex items-center gap-2 font-semibold text-slate-900 border-b-2 border-slate-200 hover:border-brand-600 transition-all pb-1 mt-6 md:mt-0">
                  See all 40+ industries <ArrowRight className="h-4 w-4" />
              </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((ind, idx) => (
                  <div
                    key={idx}
                    className={`group relative p-6 rounded-3xl ${ind.color} hover:shadow-lg transition-all cursor-pointer h-48 flex flex-col justify-between overflow-hidden`}
                  >
                      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="h-5 w-5" />
                      </div>
                      <span className="font-semibold text-lg">{ind.name}</span>
                      <div className="text-xs leading-normal font-medium bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
                          {ind.count}
                      </div>

                      {/* Decorative Circle */}
                      <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-white/20 blur-xl group-hover:bg-white/30 transition-colors"></div>
                  </div>
              ))}
          </div>

          <div className="mt-8 text-center md:hidden">
              <button className="text-brand-600 font-semibold text-sm leading-normal">View all industries →</button>
          </div>
       </div>
    </section>
  );
};
