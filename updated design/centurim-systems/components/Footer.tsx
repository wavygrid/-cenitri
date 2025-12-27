import React from 'react';
import { LayoutGrid } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
           
           <div className="flex items-center gap-2">
               <div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center">
                   <LayoutGrid className="h-4 w-4 text-white" />
               </div>
               <span className="font-display font-bold text-lg text-slate-900">Centurim</span>
           </div>

           <div className="flex gap-8 text-sm font-medium text-slate-500">
               <a href="#" className="hover:text-slate-900 transition-colors">Product</a>
               <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
               <a href="#" className="hover:text-slate-900 transition-colors">Login</a>
               <a href="#" className="hover:text-slate-900 transition-colors">Support</a>
           </div>

           <p className="text-sm text-slate-400">
               © {new Date().getFullYear()} Centurim Inc.
           </p>

        </div>
      </div>
    </footer>
  );
};