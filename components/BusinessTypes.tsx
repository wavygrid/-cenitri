import React from 'react';
import { Wrench, Zap, Droplet, ChefHat, Truck, Home, Trees, Paintbrush } from 'lucide-react';

const categories = [
  { icon: Droplet, label: 'Plumbing' },
  { icon: Zap, label: 'Electrician' },
  { icon: Wrench, label: 'HVAC' },
  { icon: ChefHat, label: 'Dining' },
  { icon: Truck, label: 'Logistics' },
  { icon: Home, label: 'Cleaning' },
  { icon: Trees, label: 'Landscape' },
  { icon: Paintbrush, label: 'Painting' },
];

export const BusinessTypes: React.FC = () => {
  return (
    <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-stone-100 py-4 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar pb-2">
          {categories.map((item, idx) => (
            <button
              key={idx}
              className="group flex flex-col items-center gap-2 min-w-[80px] cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="text-slate-600 group-hover:text-slate-900 transition-colors">
                <item.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <span className="text-xs leading-normal font-medium text-slate-900 whitespace-nowrap pb-1 border-b-2 border-transparent group-hover:border-slate-900 transition-all">
                {item.label}
              </span>
            </button>
          ))}
          <div className="h-8 w-px bg-stone-200 mx-4 hidden sm:block"></div>
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 text-xs leading-normal font-semibold hover:shadow-md transition-shadow">
             <span>Filters</span>
          </button>
        </div>
      </div>
    </section>
  );
};
