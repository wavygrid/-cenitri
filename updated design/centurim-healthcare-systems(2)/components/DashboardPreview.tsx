import React from 'react';
import { Target, CheckSquare, Clock } from 'lucide-react';

const FeatureCard: React.FC<{ 
    title: string, 
    description: string, 
    visual: React.ReactNode 
}> = ({ title, description, visual }) => (
    <div className="flex flex-col h-full">
        {/* Visual Container - Fixed Aspect Ratio */}
        <div className="w-full aspect-[5/3] bg-slate-50 border border-slate-200 rounded-xl overflow-hidden relative shadow-sm group hover:border-slate-300 transition-colors mb-6">
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70"></div>
            <div className="absolute inset-0 flex items-center justify-center p-4">
                {visual}
            </div>
        </div>

        {/* Content */}
        <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-light">
                {description}
            </p>
        </div>
    </div>
);

const DashboardPreview: React.FC = () => {
  return (
    <section className="bg-white py-16 border-b border-slate-100" aria-label="Platform Features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <FeatureCard 
                title="Capture Every NTA Point"
                description="Identify high value comorbidities like Sepsis and Malnutrition that are documented in the notes but missing from the bill."
                visual={
                    <div className="w-full max-w-[200px] space-y-2 scale-90 origin-center">
                         <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                             <span>Diagnosis</span>
                             <span>Status</span>
                         </div>
                         <div className="flex items-center justify-between p-2.5 bg-white border border-medical-200 rounded-lg shadow-sm ring-1 ring-medical-50">
                             <div className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-medical-600"></div>
                                 <span className="text-xs font-semibold text-slate-900">Sepsis</span>
                             </div>
                             <Target size={14} className="text-red-500" strokeWidth={2} />
                         </div>
                         <div className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-lg shadow-sm opacity-60">
                             <div className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                 <span className="text-xs font-semibold text-slate-500">Pneumonia</span>
                             </div>
                             <CheckSquare size={14} className="text-slate-300" />
                         </div>
                    </div>
                }
            />

            {/* Feature 2 */}
            <FeatureCard 
                title="Prove the Score"
                description="Ensure your Section GG functional scores match the therapy notes to reduce the risk of RAC clawbacks."
                visual={
                     <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm w-full max-w-[220px] scale-90 origin-center">
                         <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2">
                             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Section GG</span>
                             <span className="text-[10px] font-mono text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">Self-Care</span>
                         </div>
                         <div className="space-y-2">
                             <div className="flex justify-between items-center">
                                 <span className="text-xs font-medium text-slate-700">Eating</span>
                                 <div className="flex gap-1">
                                     <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 text-[10px] flex items-center justify-center text-slate-400 font-mono">2</div>
                                     <div className="w-5 h-5 rounded bg-medical-600 text-[10px] flex items-center justify-center text-white font-bold font-mono shadow-sm">3</div>
                                 </div>
                             </div>
                             <div className="flex justify-between items-center">
                                 <span className="text-xs font-medium text-slate-700">Oral Hygiene</span>
                                 <div className="flex gap-1">
                                     <div className="w-5 h-5 rounded bg-medical-600 text-[10px] flex items-center justify-center text-white font-bold font-mono shadow-sm">2</div>
                                     <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 text-[10px] flex items-center justify-center text-slate-400 font-mono">2</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                }
            />

            {/* Feature 3 */}
            <FeatureCard 
                title="End the Meeting Early"
                description="Give your MDS Coordinator the answers before the meeting starts to reduce burnout and administrative burden."
                visual={
                     <div className="w-28 h-28 rounded-full border-[4px] border-slate-50 flex items-center justify-center relative shadow-inner bg-white scale-90 origin-center">
                         <Clock size={32} className="text-medical-600" strokeWidth={1.5} />
                         <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white border-[3px] border-white shadow-sm">
                             <CheckSquare size={12} strokeWidth={3} />
                         </div>
                         <div className="absolute -bottom-3 bg-slate-900 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                             Ready
                         </div>
                     </div>
                }
            />

        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;