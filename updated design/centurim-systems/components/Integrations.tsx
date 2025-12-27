import React from 'react';
import { RefreshCw } from 'lucide-react';

export const Integrations: React.FC = () => {
  return (
    <section className="py-24 bg-white">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-stone-900 rounded-[2.5rem] p-8 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
             
             {/* Background Pattern */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

             <div className="max-w-xl relative z-10">
                <h3 className="text-3xl font-bold mb-4">"But I already use ServiceTitan..."</h3>
                <p className="text-stone-300 text-lg leading-relaxed mb-8">
                   That's perfect. We don't want to replace your dispatch board. We act as the "Digital Front Door" that catches leads and pushes them into your schedule.
                </p>
                <div className="flex flex-wrap gap-4">
                    <span className="inline-flex items-center gap-2 bg-stone-800 border border-stone-700 px-4 py-2 rounded-full text-sm font-semibold">
                        <RefreshCw className="h-4 w-4 text-green-400" /> Syncs with ServiceTitan
                    </span>
                    <span className="inline-flex items-center gap-2 bg-stone-800 border border-stone-700 px-4 py-2 rounded-full text-sm font-semibold">
                        <RefreshCw className="h-4 w-4 text-green-400" /> Syncs with Jobber
                    </span>
                </div>
             </div>

             <div className="relative z-10 w-full md:w-auto flex justify-center">
                 <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-64 text-center">
                     <p className="text-xs uppercase font-bold text-stone-400 mb-2">Live Data Feed</p>
                     <div className="space-y-3">
                         <div className="h-2 bg-white/20 rounded-full w-3/4 mx-auto animate-pulse"></div>
                         <div className="h-2 bg-white/20 rounded-full w-1/2 mx-auto animate-pulse"></div>
                         <div className="h-2 bg-white/20 rounded-full w-2/3 mx-auto animate-pulse"></div>
                     </div>
                     <div className="mt-4 text-xs font-mono text-green-400">
                         ● API Connected
                     </div>
                 </div>
             </div>

          </div>
       </div>
    </section>
  );
};