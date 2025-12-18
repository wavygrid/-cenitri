import React from 'react';
import { Button } from './ui/Button';
import { PageView } from '../App';

interface ProductInterfaceProps {
    onNavigate?: (page: PageView) => void;
}

export const ProductInterface: React.FC<ProductInterfaceProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#0B1120] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
                {/* text-4xl -> text-3xl */}
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight">
                    Effortless & Defensible Review
                </h2>
                <p className="text-2xl text-slate-400 font-medium leading-relaxed">
                    Skip the BPOs and generic AI. Centurim combines industry-trained models with expert human review to structure, analyze, and verify medical records.
                </p>
            </div>
            <div className="shrink-0">
                <Button 
                    variant="white" 
                    className="h-14 px-10 rounded-lg font-bold text-lg"
                    onClick={() => onNavigate?.('contact')}
                >
                    Schedule Technical Demo
                </Button>
            </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
            {/* Window Container - Straight Lines, No Tilt */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden ring-1 ring-white/10">
                {/* Window Header */}
                <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-4">
                    <div className="flex items-center space-x-2 opacity-30">
                        <div className="w-3 h-3 rounded-full bg-slate-900"></div>
                        <div className="w-3 h-3 rounded-full bg-slate-900"></div>
                        <div className="w-3 h-3 rounded-full bg-slate-900"></div>
                    </div>
                    <div className="flex-1 text-center">
                        <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">CENTURIM CASE VIEWER v2.4</span>
                    </div>
                    <div className="w-16"></div>
                </div>

                {/* Main UI Area */}
                <div className="flex flex-col md:flex-row h-auto md:h-[600px] relative text-left">
                    {/* Sidebar */}
                    <div className="w-full md:w-72 border-r border-slate-200 bg-slate-50/50 p-6 hidden md:flex flex-col gap-6">
                         <div className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">Source Files</div>
                         <div className="h-14 w-full bg-white border border-slate-200 shadow-sm rounded-lg flex items-center px-4">
                             <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                             <span className="text-base font-medium text-slate-700">Intake.pdf</span>
                         </div>
                         <div className="h-14 w-full bg-transparent border border-transparent rounded-lg flex items-center px-4">
                             <div className="w-3 h-3 rounded-full bg-slate-300 mr-3"></div>
                             <span className="text-base font-medium text-slate-500">Labs_2023.pdf</span>
                         </div>
                         <div className="h-14 w-full bg-transparent border border-transparent rounded-lg flex items-center px-4">
                             <div className="w-3 h-3 rounded-full bg-slate-300 mr-3"></div>
                             <span className="text-base font-medium text-slate-500">Referral.pdf</span>
                         </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white p-8 flex flex-col">
                         {/* Toolbar */}
                         <div className="flex justify-between items-end mb-8 border-b border-slate-100 pb-6">
                             <div>
                                 <h3 className="text-2xl font-medium text-slate-900 tracking-tight">Doe, Jane</h3>
                                 <p className="text-lg font-medium text-slate-500 mt-2">Case ID: #99281-AZ</p>
                             </div>
                             <div className="flex gap-4">
                                <div className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-medium uppercase tracking-wider rounded border border-slate-200">
                                    Export PDF
                                </div>
                                <div className="px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-medium uppercase tracking-wider rounded">
                                    Analysis Complete
                                </div>
                             </div>
                         </div>

                         {/* Data Grid Visualization */}
                         <div className="border border-slate-200 rounded-lg overflow-hidden flex-1 flex flex-col">
                             <div className="bg-slate-50 border-b border-slate-200 px-8 py-4 grid grid-cols-12 text-sm font-medium text-slate-500 uppercase tracking-wider">
                                 <div className="col-span-2">Date</div>
                                 <div className="col-span-3">Provider</div>
                                 <div className="col-span-5">Summary</div>
                                 <div className="col-span-2 text-right">Reference</div>
                             </div>
                             <div className="divide-y divide-slate-100 bg-white">
                                 {[1, 2, 3].map((i) => (
                                     <div key={i} className="px-8 py-6 grid grid-cols-12 text-base items-center hover:bg-slate-50 transition-colors">
                                         <div className="col-span-2 font-mono text-slate-600 font-medium text-sm">Oct 12, 2023</div>
                                         <div className="col-span-3 text-slate-900 font-medium text-sm">St. Mary's Hospital</div>
                                         <div className="col-span-5 text-slate-600 truncate pr-6 text-sm font-medium">
                                             Patient admitted with complaints of severe headache...
                                         </div>
                                         <div className="col-span-2 text-right">
                                             <span className="text-[#2563EB] font-medium text-xs uppercase tracking-wide cursor-pointer hover:underline">Page {14 + i * 4}</span>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                             {/* Empty rows filler */}
                             <div className="flex-1 bg-slate-50/30"></div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};