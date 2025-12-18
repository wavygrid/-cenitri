import React from 'react';
import { ChronologyIcon, VarianceIcon, CheckIcon, AlertCircleIcon } from './ui/Icons';

export const Transformation: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-50" id="solutions">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-24">
          {/* text-5xl -> text-4xl */}
          <h2 className="text-3xl md:text-4xl font-medium text-[#0B1120] mb-6 tracking-tight">
            Core Capabilities
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
             Centurim transforms disorganized legal and medical records into structured, searchable summaries.
          </p>
        </div>

        <div className="space-y-32">

          {/* Feature 1: Chronology */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
                {/* STRAIGHT UI: Timeline List */}
                <div className="bg-white p-10 border border-slate-200 shadow-xl rounded-2xl">
                    <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-100">
                         <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">Clinical Timeline</div>
                         <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    </div>
                    
                    <div className="space-y-0">
                         <div className="flex gap-6 pb-10 relative">
                             <div className="absolute left-[21px] top-3 bottom-0 w-0.5 bg-slate-200"></div>
                             <div className="w-12 shrink-0 flex justify-center z-10">
                                 <div className="w-3.5 h-3.5 bg-white border-[3px] border-slate-300 rounded-full"></div>
                             </div>
                             <div className="flex-1 bg-slate-50 p-6 rounded-lg border border-slate-100">
                                 <div className="text-sm font-medium text-slate-500 mb-2">May 12, 2023</div>
                                 <div className="text-lg font-medium text-slate-900 mb-2">ER Admission</div>
                                 <div className="text-base text-slate-700">Patient presents with severe localized pain.</div>
                             </div>
                         </div>
                         
                         <div className="flex gap-6 relative">
                             <div className="w-12 shrink-0 flex justify-center z-10">
                                 <div className="w-3.5 h-3.5 bg-white border-[3px] border-[#2563EB] rounded-full"></div>
                             </div>
                             <div className="flex-1 bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
                                 <div className="text-sm font-medium text-blue-600 mb-2">May 14, 2023</div>
                                 <div className="text-lg font-medium text-slate-900 mb-2">Imaging Results</div>
                                 <div className="text-base text-slate-700">MRI confirms lumbar fracture at L4-L5.</div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <ChronologyIcon className="w-6 h-6 text-[#0B1120]" />
                    </div>
                    <span className="text-sm font-medium uppercase tracking-widest text-slate-600">Linear Analysis</span>
                </div>
                {/* text-4xl -> text-3xl */}
                <h3 className="text-2xl md:text-3xl font-medium text-[#0B1120] mb-6 tracking-tight">Chronology Generation</h3>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-10">
                    Automatically sort thousands of pages into a linear clinical timeline. We extract dates and providers to create a clear history of care, allowing legal teams to visualize the sequence of events instantly.
                </p>
                <div className="h-px bg-slate-200 w-full mb-10"></div>
                <ul className="space-y-5 mb-10">
                    <li className="flex items-center gap-4 text-slate-800 font-medium text-lg"><CheckIcon className="w-5 h-5 text-blue-600"/> Auto-date extraction</li>
                    <li className="flex items-center gap-4 text-slate-800 font-medium text-lg"><CheckIcon className="w-5 h-5 text-blue-600"/> Duplicate removal</li>
                    <li className="flex items-center gap-4 text-slate-800 font-medium text-lg"><CheckIcon className="w-5 h-5 text-blue-600"/> Provider normalization</li>
                </ul>
            </div>
          </div>

          {/* Feature 2: Variance */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <VarianceIcon className="w-6 h-6 text-[#0B1120]" />
                    </div>
                    <span className="text-sm font-medium uppercase tracking-widest text-slate-600">Conflict Detection</span>
                </div>
                {/* text-4xl -> text-3xl */}
                <h3 className="text-2xl md:text-3xl font-medium text-[#0B1120] mb-6 tracking-tight">Variance Detection</h3>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-10">
                    Identify discrepancies between documents. We flag contradictions between source documentation and final claims or summaries, highlighting risk areas before they become liability issues.
                </p>
                <div className="h-px bg-slate-200 w-full mb-10"></div>
                 <ul className="space-y-5 mb-10">
                    <li className="flex items-center gap-4 text-slate-800 font-medium text-lg"><CheckIcon className="w-5 h-5 text-blue-600"/> Cross-document validation</li>
                    <li className="flex items-center gap-4 text-slate-800 font-medium text-lg"><CheckIcon className="w-5 h-5 text-blue-600"/> Coding mismatch alerts</li>
                </ul>
            </div>
            
            <div className="w-full lg:w-1/2">
                {/* STRAIGHT UI: Comparison Card */}
                <div className="bg-white p-10 border border-slate-200 shadow-xl rounded-2xl">
                    <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-100">
                         <div className="flex items-center gap-3 text-orange-700">
                             <AlertCircleIcon className="w-5 h-5" />
                             <span className="text-sm font-medium uppercase tracking-widest">Contradiction Detected</span>
                         </div>
                         <div className="px-3 py-1 bg-orange-50 text-orange-800 text-xs font-medium uppercase rounded border border-orange-200">High Priority</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-white p-6">
                            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">Source A: Intake</div>
                            <div className="p-4 bg-slate-50 rounded border border-slate-100">
                                <p className="text-base text-slate-900 font-medium leading-relaxed">"Patient states <span className="bg-red-50 text-red-800 decoration-red-300 underline font-medium">no prior history</span> of back pain."</p>
                            </div>
                        </div>
                        <div className="bg-white p-6">
                             <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">Source B: PCP Notes</div>
                            <div className="p-4 bg-slate-50 rounded border border-slate-100">
                                <p className="text-base text-slate-900 font-medium leading-relaxed">"Chronic lower back pain <span className="bg-red-50 text-red-800 decoration-red-300 underline font-medium">since 2021</span>."</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <div className="inline-block h-1.5 w-32 bg-slate-100 rounded-full"></div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};