import React from 'react';

const industries = [
    { name: "Plumbing", icon: "💧" },
    { name: "HVAC", icon: "❄️" },
    { name: "Electrical", icon: "⚡" },
    { name: "Landscaping", icon: "🌳" },
    { name: "Cleaning", icon: "✨" },
    { name: "Locksmith", icon: "🔑" }
];

export const SectorSelector: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white border-t border-slate-100" aria-labelledby="sector-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">

        <h2 id="sector-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-6">Built for your specific trade.</h2>
        <p className="text-lg leading-relaxed text-slate-700 max-w-2xl mx-auto mb-16">
            We don't do "generic". Centurim comes pre-loaded with the services, pricing, and workflows you need.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
                <div key={i} className="flex flex-col items-center gap-3 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer group">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{ind.icon}</span>
                    <span className="font-semibold text-slate-900 text-base leading-normal">{ind.name}</span>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};