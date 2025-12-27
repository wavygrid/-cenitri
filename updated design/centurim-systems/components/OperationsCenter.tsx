import React from 'react';
import { LayoutDashboard } from 'lucide-react';

export const OperationsCenter: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
         <div className="flex flex-col lg:flex-row gap-20 items-center">
             
             {/* Visual - Clean Dashboard */}
             <div className="lg:w-1/2 order-2 lg:order-1">
                 <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200 p-2">
                     <div className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
                         <div className="h-8 bg-white border-b border-slate-200 flex items-center px-4 gap-2">
                             <div className="h-2 w-2 rounded-full bg-red-400"></div>
                             <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                             <div className="h-2 w-2 rounded-full bg-green-400"></div>
                         </div>
                         <div className="p-6">
                             <div className="flex justify-between items-end mb-8">
                                 <div>
                                     <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Revenue</p>
                                     <p className="text-3xl font-bold text-slate-900">$12,450.00</p>
                                 </div>
                                 <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">+12%</div>
                             </div>
                             
                             <div className="space-y-3">
                                 {[1,2,3].map((i) => (
                                     <div key={i} className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-lg shadow-sm">
                                         <div className="flex items-center gap-3">
                                             <div className="h-8 w-8 bg-slate-100 rounded-full"></div>
                                             <div>
                                                 <div className="h-2 w-24 bg-slate-200 rounded mb-1"></div>
                                                 <div className="h-2 w-16 bg-slate-100 rounded"></div>
                                             </div>
                                         </div>
                                         <div className="h-2 w-8 bg-slate-200 rounded"></div>
                                     </div>
                                 ))}
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

             <div className="lg:w-1/2 order-1 lg:order-2">
                 <div className="bg-slate-200 h-10 w-10 rounded-xl flex items-center justify-center mb-6">
                     <LayoutDashboard className="h-5 w-5 text-slate-700" />
                 </div>
                 <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Manage your day without the chaos.</h2>
                 <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                     One dashboard to rule them all. See your schedule, customer details, and payments in a single, clean interface.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-6">
                     <div>
                         <h4 className="font-bold text-slate-900 mb-1">Dispatch</h4>
                         <p className="text-sm text-slate-500">Drag & drop scheduling.</p>
                     </div>
                     <div>
                         <h4 className="font-bold text-slate-900 mb-1">Invoicing</h4>
                         <p className="text-sm text-slate-500">Auto-send on completion.</p>
                     </div>
                 </div>
             </div>

         </div>
      </div>
    </section>
  );
};