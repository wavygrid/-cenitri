import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
           
           <div>
               <img
                 src="/Centurim_for_light_logo.svg"
                 alt="Centurim"
                 className="h-7 w-auto"
               />
           </div>

           <div className="flex gap-8 text-sm font-medium text-slate-500">
               <a href="#" className="hover:text-slate-900 transition-colors">Product</a>
               <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
               <a href="#" className="hover:text-slate-900 transition-colors">Login</a>
               <a href="#" className="hover:text-slate-900 transition-colors">Support</a>
           </div>

           <p className="text-sm leading-normal text-slate-600">
               © {new Date().getFullYear()} Centurim Inc.
           </p>

        </div>
      </div>
    </footer>
  );
};