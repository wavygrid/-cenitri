import React from 'react';
import { CloudUploadIcon, CpuIcon, TrashIcon, CheckCircleIcon } from './ui/Icons';

export const PipelineSteps: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
            {/* text-4xl -> text-3xl */}
            <h2 className="text-3xl md:text-4xl font-medium text-[#0B1120] mb-4 tracking-tight">
                Operational Protocol
            </h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                A secure, auditable chain of custody for your sensitive data.
             </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            
            {/* Step 1 */}
            <div className="group relative">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center z-10 relative">
                    {/* Step Label */}
                    <div className="mb-6">
                        <span className="text-xs font-medium tracking-widest text-[#2563EB] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Step 01</span>
                    </div>
                    {/* Icon */}
                    <div className="w-24 h-24 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                         <div className="w-12 h-12 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-white">
                             <CloudUploadIcon className="w-5 h-5 text-slate-400" />
                         </div>
                    </div>
                    <h3 className="text-lg font-medium text-[#0B1120] mb-3">Secure Ingestion</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Upload raw medical records via our encrypted tunnel. We accept files of any size via SFTP or API.
                    </p>
                </div>
                {/* Connector Arrow (Desktop Only) */}
                <div className="hidden md:block absolute top-1/2 -right-8 lg:-right-10 transform -translate-y-1/2 z-0 text-slate-200">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center z-10 relative">
                    {/* Step Label */}
                    <div className="mb-6">
                        <span className="text-xs font-medium tracking-widest text-[#2563EB] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Step 02</span>
                    </div>
                    {/* Icon */}
                    <div className="w-24 h-24 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                         <div className="w-14 space-y-2 bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                             <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                 <div className="h-full w-2/3 bg-blue-500"></div>
                             </div>
                             <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                 <div className="h-full w-1/3 bg-blue-500"></div>
                             </div>
                         </div>
                    </div>
                    <h3 className="text-lg font-medium text-[#0B1120] mb-3">Clinical Analysis</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        The engine classifies documents and extracts clinical events using deterministic logic, not generative guesswork.
                    </p>
                </div>
                {/* Connector Arrow (Desktop Only) */}
                <div className="hidden md:block absolute top-1/2 -right-8 lg:-right-10 transform -translate-y-1/2 z-0 text-slate-200">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center z-10 relative">
                    {/* Step Label */}
                    <div className="mb-6">
                        <span className="text-xs font-medium tracking-widest text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-100">Step 03</span>
                    </div>
                    {/* Icon */}
                    <div className="w-24 h-24 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                         <div className="w-10 h-14 bg-white border border-slate-200 rounded shadow-sm flex flex-col p-1.5 items-center">
                             <div className="w-full h-1 bg-slate-100 mb-1"></div>
                             <div className="w-2/3 h-1 bg-slate-100 mb-2"></div>
                             <div className="mt-auto">
                                 <TrashIcon className="w-4 h-4 text-teal-500" />
                             </div>
                         </div>
                    </div>
                    <h3 className="text-lg font-medium text-[#0B1120] mb-3">Ephemeral Purge</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Zero retention policy. Files are automatically purged from our servers after the analysis window closes.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};