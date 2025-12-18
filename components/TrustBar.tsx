import React from 'react';
import { ShieldCheckIcon, DatabaseIcon, FileXIcon } from './ui/Icons';

export const TrustBar: React.FC = () => {
  return (
    <section className="border-b border-slate-200 bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <span className="text-base font-bold tracking-widest text-slate-400 uppercase">
            Sovereign Infrastructure
          </span>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-20">
            <div className="flex items-center space-x-4 text-slate-800">
              <ShieldCheckIcon className="w-6 h-6 text-slate-600" />
              <span className="text-xl font-bold text-[#0B1120]">HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-800">
              <DatabaseIcon className="w-6 h-6 text-slate-600" />
              <span className="text-xl font-bold text-[#0B1120]">US Data Sovereignty</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-800">
              <FileXIcon className="w-6 h-6 text-slate-600" />
              <span className="text-xl font-bold text-[#0B1120]">Zero Retention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};