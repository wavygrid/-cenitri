import React from 'react';
import { Upload, Check, FileText, ArrowUpRight } from 'lucide-react';

// --- Visual Components for each step ---

const Step1Visual: React.FC = () => (
    <div className="w-full aspect-[4/3] bg-slate-50 border border-slate-200 rounded-xl overflow-hidden relative shadow-sm flex flex-col items-center justify-center p-6 group-hover:border-medical-200 transition-colors">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        
        <div className="relative z-10 flex flex-col items-center w-full max-w-[200px]">
             {/* Icon */}
             <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center mb-6 text-slate-400 group-hover:text-medical-600 group-hover:scale-110 transition-all duration-500">
                 <Upload size={20} strokeWidth={1.5} />
             </div>
             
             {/* Progress Bar UI */}
             <div className="w-full space-y-2">
                 <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                     <span>Tunnel Encrypted</span>
                     <span className="text-medical-600">Active</span>
                 </div>
                 <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                     <div className="h-full w-full bg-medical-500 rounded-full animate-[shimmer_2s_infinite]"></div>
                 </div>
                 <div className="text-[9px] text-slate-400 text-center pt-1 font-mono">AES-256-GCM :: BLIND_INGEST</div>
             </div>
        </div>
    </div>
);

const Step2Visual: React.FC = () => (
    <div className="w-full aspect-[4/3] bg-white border border-slate-200 rounded-xl overflow-hidden relative shadow-sm p-6 flex flex-col justify-between group-hover:border-medical-200 transition-colors">
         {/* Header */}
         <div className="flex justify-between items-start">
             <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                 <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">Variance Detected</span>
             </div>
             <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">ID: 9942</span>
         </div>

         {/* Card Content */}
         <div className="space-y-3">
             <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                 <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Diagnosis</div>
                 <div className="text-sm font-semibold text-slate-900 flex justify-between items-center">
                     Sepsis (A41.9)
                     <ArrowUpRight size={14} className="text-amber-500" />
                 </div>
             </div>
             <div className="flex items-center gap-2 text-[10px] text-slate-500">
                 <FileText size={12} />
                 <span>Found in <span className="font-medium text-slate-900 border-b border-slate-300">Nursing Notes</span></span>
             </div>
         </div>
         
         {/* Footer */}
         <div className="pt-3 border-t border-slate-50">
             <div className="flex justify-between items-center text-[10px]">
                 <span className="text-slate-400 font-medium">Confidence Score</span>
                 <span className="text-medical-700 font-bold bg-medical-50 px-1.5 py-0.5 rounded">99.4%</span>
             </div>
         </div>
    </div>
);

const Step3Visual: React.FC = () => (
    <div className="w-full aspect-[4/3] bg-slate-900 border border-slate-800 rounded-xl overflow-hidden relative shadow-lg flex flex-col items-center justify-center text-center p-6 group-hover:border-slate-700 transition-colors">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-medical-500/10 blur-3xl rounded-full pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
             <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                 <Check size={10} className="text-green-400" strokeWidth={3} />
                 <span className="text-[10px] font-bold text-white/80 uppercase tracking-wide">Claim Validated</span>
             </div>
             
             <div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Net Recovery</div>
                 <div className="text-4xl font-light text-white tracking-tight">+$2,400</div>
             </div>

             <div className="text-[10px] text-slate-500">
                 Pre-Audit: <span className="line-through decoration-slate-600">$12,400</span> <span className="text-slate-600 px-1">→</span> Post: <span className="text-white">$14,800</span>
             </div>
        </div>
    </div>
);

const StepCard: React.FC<{ 
    number: string, 
    title: string, 
    description: string, 
    visual: React.ReactNode 
}> = ({ number, title, description, visual }) => (
    <div className="flex flex-col group h-full">
        <div className="mb-8 transform transition-transform duration-500 group-hover:-translate-y-2">
            {visual}
        </div>
        <div>
            {/* Massive Number for Process Highlight */}
            <div className="mb-2">
                 <span className="text-7xl font-light text-slate-200 group-hover:text-medical-200 transition-colors duration-500 block leading-none">
                    {number.replace('.', '')}
                 </span>
            </div>
            <h3 className="text-2xl font-medium text-slate-900 mb-3">{title}</h3>
            <p className="text-base text-slate-600 leading-relaxed font-light">
                {description}
            </p>
        </div>
    </div>
);

const BenefitRows: React.FC = () => {
  return (
    <section className="bg-white py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight leading-tight">
                It takes only Three Steps to <br/> <span className="text-medical-600">Revenue Confidence</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
            
            {/* Desktop Connectors (Clean Lines) */}
            <div className="hidden md:block absolute top-[35%] left-[30%] w-[10%] h-px bg-slate-100 -z-10"></div>
            <div className="hidden md:block absolute top-[35%] right-[30%] w-[10%] h-px bg-slate-100 -z-10"></div>

            <StepCard 
                number="1."
                title="Upload"
                description="Securely transfer your closed Hospital Records and MDS Assessments via our blind ingestion tunnel."
                visual={<Step1Visual />}
            />

            <StepCard 
                number="2."
                title="Verify"
                description="Receive a citation backed Variance Report that highlights exactly where the clinical notes support a higher code."
                visual={<Step2Visual />}
            />

            <StepCard 
                number="3."
                title="Recover"
                description="Submit the modification with confidence knowing every claim is backed by clinical evidence."
                visual={<Step3Visual />}
            />

        </div>

      </div>
    </section>
  );
};

export default BenefitRows;