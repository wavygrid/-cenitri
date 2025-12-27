import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const templates = [
  {
    industry: "The Plumber Standard",
    description: "Optimized for emergencies. Features a 'Book Now' button that follows the user and an emergency rate calculator.",
    imageColor: "bg-blue-50",
    accent: "bg-blue-600",
    tags: ["Emergency Dispatch", "Part Inventory", "Service Area Map"]
  },
  {
    industry: "The HVAC Standard",
    description: "Built for high-ticket installs. Includes a 'System Configurator' that lets clients choose their unit and see financing options.",
    imageColor: "bg-orange-50",
    accent: "bg-orange-600",
    tags: ["Finance Calculator", "Seasonal Maintenance", "Unit Selector"]
  },
  {
    industry: "The Electrician Standard",
    description: "Focuses on safety and compliance. Uploads photos for virtual quotes so you don't drive across town for a $50 job.",
    imageColor: "bg-yellow-50",
    accent: "bg-yellow-500",
    tags: ["Virtual Quote", "Safety Certs", "Commercial Bids"]
  }
];

export const TemplateGallery: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 md:flex md:items-end md:justify-between">
           <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-stone-900 mb-4">Don't reinvent the wheel.</h2>
              <p className="text-xl text-stone-500">
                 We don't "design" websites from scratch. We use <strong>Proven Industry Standards</strong> that have already generated millions in revenue for tradesmen like you.
              </p>
           </div>
           <button className="hidden md:flex items-center gap-2 font-bold text-brand-600 hover:text-brand-700 mt-4 md:mt-0">
              View all 12 industries <ArrowUpRight className="h-4 w-4" />
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {templates.map((temp, idx) => (
              <div key={idx} className="group cursor-pointer">
                 {/* Browser Frame */}
                 <div className="bg-stone-100 rounded-t-2xl p-3 pb-0 border border-stone-200 border-b-0 flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                 </div>
                 {/* Preview Image Area */}
                 <div className={`aspect-[3/4] ${temp.imageColor} relative overflow-hidden border-x border-b border-stone-200 shadow-sm group-hover:shadow-xl transition-all duration-500`}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-60 group-hover:opacity-100 transition-opacity">
                       <span className="text-stone-900 font-bold text-lg mb-2">{temp.industry}</span>
                       <div className={`h-1 w-12 ${temp.accent} rounded-full`}></div>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors"></div>
                 </div>
                 
                 {/* Details */}
                 <div className="mt-6">
                    <h3 className="text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                       {temp.industry}
                       <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-stone-400" />
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-4">
                       {temp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                       {temp.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-3 py-1 bg-stone-50 border border-stone-200 rounded-full text-xs font-semibold text-stone-600">
                             {tag}
                          </span>
                       ))}
                    </div>
                 </div>
              </div>
           ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <button className="text-brand-600 font-bold text-sm">View all industries →</button>
        </div>
      </div>
    </section>
  );
};