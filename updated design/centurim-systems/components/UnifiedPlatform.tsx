import React from 'react';
import { LayoutGrid, Users, DollarSign, Bell } from 'lucide-react';

export const UnifiedPlatform: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden" id="platform">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
         <div className="flex flex-col lg:flex-row gap-16 items-center">
             
             <div className="lg:w-1/2">
                 <div className="inline-block bg-stone-800 border border-stone-700 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-400 mb-6">
                     Command Center
                 </div>
                 <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">One screen to rule them all.</h2>
                 <p className="text-lg text-stone-400 mb-8 leading-relaxed">
                     No more tab switching. Centurim gives you a "God View" of your entire operation. Revenue, active jobs, and customer communications in one unified dashboard.
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                        <div className="bg-stone-800 p-3 rounded-xl h-fit">
                            <LayoutGrid className="h-6 w-6 text-brand-500" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Live Dispatch</h4>
                            <p className="text-sm text-stone-500">See where your trucks are and drag-and-drop bookings.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-stone-800 p-3 rounded-xl h-fit">
                            <DollarSign className="h-6 w-6 text-green-500" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Auto-Reconciliation</h4>
                            <p className="text-sm text-stone-500">Every booking is automatically matched to a Stripe payment.</p>
                        </div>
                    </div>
                 </div>
             </div>

             {/* The Dashboard Mockup */}
             <div className="lg:w-1/2 w-full">
                 <div className="relative rounded-2xl bg-stone-800 border border-stone-700 shadow-2xl p-2 animate-in slide-in-from-right-12 duration-1000">
                     <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-500 rounded-full blur-[80px] opacity-20"></div>
                     
                     <div className="bg-stone-900 rounded-xl overflow-hidden">
                         {/* Fake Browser Header */}
                         <div className="bg-stone-800 px-4 py-3 flex items-center justify-between border-b border-stone-700">
                             <div className="flex gap-2">
                                 <div className="h-3 w-3 rounded-full bg-red-500/20"></div>
                                 <div className="h-3 w-3 rounded-full bg-yellow-500/20"></div>
                                 <div className="h-3 w-3 rounded-full bg-green-500/20"></div>
                             </div>
                             <div className="text-xs font-mono text-stone-500">dashboard.centurim.com</div>
                             <Bell className="h-4 w-4 text-stone-500" />
                         </div>
                         
                         {/* Dashboard Content */}
                         <div className="p-6 grid grid-cols-2 gap-4">
                             <div className="col-span-2 bg-stone-800/50 p-4 rounded-lg border border-stone-700/50">
                                 <div className="flex justify-between items-center mb-4">
                                     <span className="text-xs font-bold text-stone-400 uppercase">Revenue (Live)</span>
                                     <span className="text-green-400 text-xs font-mono">+12% vs last week</span>
                                 </div>
                                 <div className="text-3xl font-bold text-white">$14,250.00</div>
                             </div>
                             
                             <div className="bg-stone-800/50 p-4 rounded-lg border border-stone-700/50">
                                 <Users className="h-5 w-5 text-brand-500 mb-2" />
                                 <div className="text-2xl font-bold">24</div>
                                 <div className="text-xs text-stone-500">New Leads</div>
                             </div>
                             
                             <div className="bg-stone-800/50 p-4 rounded-lg border border-stone-700/50">
                                 <LayoutGrid className="h-5 w-5 text-blue-500 mb-2" />
                                 <div className="text-2xl font-bold">8</div>
                                 <div className="text-xs text-stone-500">Jobs Today</div>
                             </div>

                             <div className="col-span-2 mt-2">
                                 <div className="flex items-center gap-3 bg-brand-900/20 border border-brand-500/20 p-3 rounded-lg">
                                     <div className="h-2 w-2 rounded-full bg-brand-500 animate-pulse"></div>
                                     <span className="text-xs text-brand-200">AI Agent is currently speaking with a customer...</span>
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