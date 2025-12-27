import React from 'react';
import { Check } from 'lucide-react';

export const StorefrontBuilder: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
            
            <div className="lg:w-1/2">
                <span className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-4 block">Online Presence</span>
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
                    Look like a national brand. <br/>
                    <span className="text-slate-400">Without the agency fees.</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    We deploy a professional, conversion-optimized website for you instantly. It loads in milliseconds, ranks on Google, and converts visitors into booked jobs.
                </p>
                
                <ul className="space-y-4">
                    {['Mobile-First Design', 'SEO Optimized Pages', 'Instant Load Times'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                            <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                                <Check className="h-3 w-3" />
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="lg:w-1/2 relative">
                {/* Minimalist Phone Mockup */}
                <div className="relative mx-auto w-[320px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border border-slate-800">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-slate-900 rounded-b-xl z-10"></div>
                    <div className="bg-white rounded-[2.5rem] overflow-hidden h-[640px] w-full relative">
                        {/* App Content */}
                        <div className="p-6 pt-12">
                             <div className="flex justify-between items-center mb-6">
                                 <div className="font-bold text-lg text-slate-900">Apex Plumbing</div>
                                 <div className="h-8 w-8 bg-slate-100 rounded-full"></div>
                             </div>
                             <div className="bg-slate-50 rounded-3xl p-6 mb-6 text-center border border-slate-100">
                                 <h3 className="font-bold text-2xl mb-2 text-slate-900">Emergency?</h3>
                                 <p className="text-slate-500 text-sm mb-4">We can be there in 2 hours.</p>
                                 <button className="bg-brand-600 text-white w-full py-3.5 rounded-2xl font-bold shadow-lg shadow-brand-200 hover:bg-brand-700 transition-colors">Book Now</button>
                             </div>
                             <div className="space-y-3">
                                 <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer">
                                     <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-lg">💧</div>
                                     <div className="text-sm font-bold text-slate-900">Leak Repair</div>
                                 </div>
                                 <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer">
                                     <div className="h-10 w-10 bg-orange-50 rounded-full flex items-center justify-center text-lg">🔥</div>
                                     <div className="text-sm font-bold text-slate-900">Water Heater</div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};