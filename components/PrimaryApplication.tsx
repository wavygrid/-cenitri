import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, CheckSquare, FileText } from 'lucide-react';

const PrimaryApplication: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left: Copy */}
          <div className="lg:w-1/2">
             <div className="inline-block px-3 py-1 bg-navy-50 text-navy-900 text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
                Active Deployment
             </div>
             <h2 className="text-4xl font-bold text-navy-900 mb-6 tracking-tight">Post Acute Revenue Integrity</h2>
             <p className="text-lg text-zinc-500 leading-relaxed mb-8">
                The Centurim Engine is currently deployed for Skilled Nursing Facilities to automate the Medicare Triple Check process. We cross reference Hospital Discharge Summaries against MDS 3.0 Assessments to capture under coded clinical complexity.
             </p>
             
             <div className="space-y-6 mb-10">
                <div className="border-l-2 border-zinc-200 pl-6">
                   <h3 className="text-navy-900 font-bold mb-2">NTA Capture</h3>
                   <p className="text-sm text-zinc-500">Identify high value comorbidities documented in transfer packets but omitted from billing.</p>
                </div>
                <div className="border-l-2 border-zinc-200 pl-6">
                   <h3 className="text-navy-900 font-bold mb-2">Section GG Validation</h3>
                   <p className="text-sm text-zinc-500">Correlate functional therapy notes with MDS coding to prevent audit exposure.</p>
                </div>
                <div className="border-l-2 border-zinc-200 pl-6">
                   <h3 className="text-navy-900 font-bold mb-2">Retrospective Audit</h3>
                   <p className="text-sm text-zinc-500">Analyze closed fiscal periods to recover unclaimed revenue before submission windows close.</p>
                </div>
             </div>

             <Button className="bg-navy-900 text-white hover:bg-navy-800 rounded-sm h-12 px-6">
                View the Healthcare Solution <ArrowRight size={16} className="ml-2" />
             </Button>
          </div>

          {/* Right: Split Interface Visual */}
          <div className="lg:w-1/2 w-full">
             <div className="relative bg-zinc-100 rounded-lg p-4 shadow-2xl border border-zinc-200">
                
                {/* Header Chrome */}
                <div className="h-8 bg-white border-b border-zinc-200 flex items-center px-4 mb-4 gap-4">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
                   </div>
                   <div className="text-[10px] text-zinc-400 font-mono uppercase">Comparator_View_Active</div>
                </div>

                <div className="flex gap-4 min-h-[300px]">
                   
                   {/* Left Doc (Blurred) */}
                   <div className="w-1/2 bg-white border border-zinc-200 p-4 relative overflow-hidden">
                      <div className="flex items-center gap-2 mb-4 text-xs font-bold text-zinc-500 uppercase">
                         <FileText size={12} /> Hospital Packet
                      </div>
                      <div className="space-y-2 opacity-30 blur-[1px]">
                         <div className="h-2 bg-zinc-800 w-3/4 mb-4"></div>
                         <div className="h-1.5 bg-zinc-400 w-full"></div>
                         <div className="h-1.5 bg-zinc-400 w-full"></div>
                         <div className="h-1.5 bg-zinc-400 w-5/6"></div>
                         <div className="h-1.5 bg-zinc-400 w-full"></div>
                      </div>
                      {/* Highlight */}
                      <div className="absolute top-20 left-4 right-4 h-8 border-2 border-red-500 bg-red-500/10 rounded flex items-center px-2">
                         <span className="text-[10px] font-bold text-red-600">dx: Sepsis (A41.9)</span>
                      </div>
                   </div>

                   {/* Connector */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-white rounded-full border border-zinc-200 flex items-center justify-center shadow-lg">
                         <ArrowRight size={14} className="text-zinc-400" />
                      </div>
                   </div>

                   {/* Right Form */}
                   <div className="w-1/2 bg-zinc-50 border border-zinc-200 p-4 relative">
                      <div className="flex items-center gap-2 mb-4 text-xs font-bold text-zinc-500 uppercase">
                         <CheckSquare size={12} /> MDS 3.0 Assessment
                      </div>
                      <div className="space-y-3">
                         <div className="p-2 bg-white border border-zinc-200 rounded">
                            <div className="text-[9px] text-zinc-400 uppercase mb-1">Section I: Active Diagnosis</div>
                            <div className="flex items-center justify-between">
                               <span className="text-xs text-zinc-900 font-mono">I2100 (Septicemia)</span>
                               <div className="w-3 h-3 border border-zinc-300 rounded-sm"></div>
                            </div>
                         </div>
                      </div>
                      
                      {/* Alert Tag */}
                      <div className="absolute top-20 -left-6 bg-navy-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-r shadow-lg flex items-center gap-2 border-l-4 border-red-500">
                         Variance Detected: NTA Sepsis
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

export default PrimaryApplication;