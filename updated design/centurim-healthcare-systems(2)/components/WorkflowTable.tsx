import React from 'react';
import { Check } from 'lucide-react';

const TableRow: React.FC<{ 
    label: string, 
    val1: React.ReactNode, 
    val2: string, 
    val3: string,
    isLast?: boolean 
}> = ({ label, val1, val2, val3, isLast }) => (
    <div className={`grid grid-cols-12 py-4 px-6 items-center hover:bg-slate-50/80 transition-colors group ${!isLast ? 'border-b border-slate-100' : ''}`} role="row">
        <div className="col-span-4 md:col-span-4 text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors sticky left-0 bg-white group-hover:bg-slate-50/80 md:static z-10" role="rowheader">
            {label}
        </div>
        <div className="col-span-3 md:col-span-3 flex justify-start" role="cell">
             <div className="text-xs font-bold text-medical-700 flex items-center gap-2 bg-medical-50 px-3 py-1.5 rounded-full border border-medical-100 shadow-sm whitespace-nowrap">
                 {val1}
             </div>
        </div>
        <div className="col-span-3 md:col-span-3 text-left text-xs text-slate-600 font-medium" role="cell">
             {val2}
        </div>
        <div className="col-span-2 md:col-span-2 text-left text-xs text-slate-500 font-medium" role="cell">
             {val3}
        </div>
    </div>
);

const WorkflowTable: React.FC = () => {
  return (
    <section className="bg-white py-16 border-b border-slate-100" aria-label="Workflow Comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
         <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Simplify The Workflow</h2>
            <p className="text-lg text-slate-600 font-normal text-balance">
                See how the Centurim AI Engine compares to traditional manual auditing and rules-based logic scrubbers.
            </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden max-w-5xl mx-auto ring-1 ring-slate-200/50">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-200">
                <div className="min-w-[800px]">
                    {/* Header */}
                    <div className="grid grid-cols-12 py-4 px-6 bg-slate-50 border-b border-slate-200" role="row">
                        <div className="col-span-4 md:col-span-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest sticky left-0 bg-slate-50 z-10" role="columnheader">Comparison Vector</div>
                        <div className="col-span-3 md:col-span-3 pl-1" role="columnheader">
                            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-white border border-slate-200 shadow-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-medical-600"></div>
                                <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest whitespace-nowrap">Centurim AI</span>
                            </div>
                        </div>
                        <div className="col-span-3 md:col-span-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-left pt-1.5" role="columnheader">Legacy Scrubbers</div>
                        <div className="col-span-2 md:col-span-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-left pt-1.5" role="columnheader">Manual</div>
                    </div>

                    <div className="bg-white">
                        <TableRow 
                            label="Primary Method" 
                            val1="Clinical AI Engine"
                            val2="Linear Logic Rules"
                            val3="Human Reading"
                        />
                        <TableRow 
                            label="Data Ingestion" 
                            val1="Full Medical Record"
                            val2="Structured Fields Only"
                            val3="Full Medical Record"
                        />
                        <TableRow 
                            label="NTA Capture" 
                            val1={<><Check size={12} strokeWidth={3} className="text-medical-600" aria-hidden="true"/> Automated Discovery</>}
                            val2="Explicit Codes Only"
                            val3="Inconsistent"
                        />
                        <TableRow 
                            label="Audit Defense" 
                            val1="Direct Citations"
                            val2="None / Generic"
                            val3="Staff Memory"
                        />
                        <TableRow 
                            label="Cost Model" 
                            val1="Fixed Per Report"
                            val2="SaaS Subscription"
                            val3="Hourly Labor Rate"
                            isLast={true}
                        />
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default WorkflowTable;