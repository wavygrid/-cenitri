import React from 'react';
import { Smartphone, Calendar, CreditCard, MessageCircle, MapPin, Star, ChevronRight } from 'lucide-react';

export const InfrastructureGrid: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20">
           <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Everything you need to grow.</h2>
           <p className="text-xl text-slate-500 max-w-2xl">
             We’ve distilled the complex tools of big enterprise into a simple operating system for your trade business.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           
           {/* Card 1: PWA */}
           <div className="col-span-1 md:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 overflow-hidden group hover:border-slate-300 transition-all">
               <div className="flex-1 flex flex-col justify-between relative z-10">
                   <div>
                       <div className="h-10 w-10 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                           <Smartphone className="h-5 w-5 text-slate-700" />
                       </div>
                       <h3 className="text-xl font-bold text-slate-900 mb-2">Native Mobile Presence</h3>
                       <p className="text-slate-500 leading-relaxed">
                           A high-performance PWA that installs on your customer's phone. Push notifications, offline mode, and instant loading.
                       </p>
                   </div>
                   <div className="mt-8 flex items-center text-brand-600 font-bold text-sm cursor-pointer">
                       Learn more <ChevronRight className="h-4 w-4 ml-1" />
                   </div>
               </div>
               {/* UI Visual */}
               <div className="w-full md:w-1/2 bg-slate-50 rounded-2xl border border-slate-100 p-4 relative top-4 right-0 group-hover:-translate-y-2 transition-transform duration-500">
                   <div className="flex gap-2 mb-3">
                       <div className="h-2 w-2 rounded-full bg-slate-200"></div>
                       <div className="h-2 w-2 rounded-full bg-slate-200"></div>
                   </div>
                   <div className="space-y-2">
                       <div className="h-24 bg-white rounded-lg border border-slate-200 shadow-sm"></div>
                       <div className="h-8 bg-white rounded-lg border border-slate-200 shadow-sm w-2/3"></div>
                   </div>
               </div>
           </div>

           {/* Card 2: Payments */}
           <div className="col-span-1 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden group hover:border-slate-300 transition-all">
               <div>
                   <div className="h-10 w-10 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                       <CreditCard className="h-5 w-5 text-slate-700" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">Payments</h3>
                   <p className="text-slate-500 text-sm leading-relaxed">
                       Integrated Stripe processing. Take deposits instantly during booking.
                   </p>
               </div>
               <div className="mt-8 bg-green-50 rounded-xl p-3 border border-green-100 flex items-center justify-between">
                   <span className="text-xs font-bold text-green-700">Payment Success</span>
                   <span className="text-sm font-bold text-green-800">$450.00</span>
               </div>
           </div>

           {/* Card 3: AI (Tall) */}
           <div className="row-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-lg flex flex-col text-white overflow-hidden relative group">
               <div className="relative z-10">
                   <div className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                       <MessageCircle className="h-5 w-5 text-brand-500" />
                   </div>
                   <h3 className="text-xl font-bold mb-2">AI Agent</h3>
                   <p className="text-slate-400 text-sm leading-relaxed mb-8">
                       Your 24/7 receptionist. Handles calls, texts, and qualifies leads automatically.
                   </p>
               </div>
               {/* UI Visual */}
               <div className="flex-1 bg-slate-800/50 rounded-xl border border-slate-700 p-4 space-y-3">
                   <div className="bg-slate-700 p-3 rounded-lg rounded-tl-none w-3/4 text-xs text-slate-200">
                       Hi, do you fix water heaters?
                   </div>
                   <div className="bg-brand-600 p-3 rounded-lg rounded-tr-none w-3/4 ml-auto text-xs text-white">
                       Yes! I can book a tech for 2pm.
                   </div>
                   <div className="bg-slate-700 p-3 rounded-lg rounded-tl-none w-3/4 text-xs text-slate-200">
                       Perfect, let's do it.
                   </div>
               </div>
           </div>

           {/* Card 4: Dispatch */}
           <div className="col-span-1 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-slate-300 transition-all">
               <div>
                   <div className="h-10 w-10 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                       <MapPin className="h-5 w-5 text-slate-700" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Dispatch</h3>
                   <p className="text-slate-500 text-sm leading-relaxed">
                       Assign jobs based on technician location and skill level.
                   </p>
               </div>
           </div>

           {/* Card 5: Reviews */}
           <div className="col-span-1 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-slate-300 transition-all">
               <div>
                   <div className="h-10 w-10 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                       <Star className="h-5 w-5 text-slate-700" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">Reputation</h3>
                   <p className="text-slate-500 text-sm leading-relaxed">
                       Auto-request 5-star reviews after every completed job.
                   </p>
               </div>
           </div>

           {/* Card 6: Booking */}
           <div className="col-span-1 md:col-span-3 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8 group hover:border-slate-300 transition-all">
               <div className="flex-1">
                   <div className="h-10 w-10 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                       <Calendar className="h-5 w-5 text-slate-700" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">Algorithmic Booking Engine</h3>
                   <p className="text-slate-500 leading-relaxed max-w-2xl">
                       Stop manually scheduling. Our engine syncs with your calendar, calculates drive time buffers, and only offers slots that actually work for your team.
                   </p>
               </div>
               <div className="flex gap-2">
                   <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-400 line-through">9:00 AM</div>
                   <div className="px-4 py-2 bg-slate-900 border border-slate-900 rounded-lg text-sm font-bold text-white shadow-lg">11:00 AM</div>
                   <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-900 hover:border-brand-500 cursor-pointer">2:00 PM</div>
               </div>
           </div>

        </div>
      </div>
    </section>
  );
};