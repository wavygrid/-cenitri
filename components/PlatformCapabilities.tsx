import React from 'react';
import { 
    ArrowRight, Lock, CheckCircle2, FileText, 
    ScanLine, BrainCircuit, ShieldAlert,
    Database, Network, FileSearch, Shield, Layers
} from 'lucide-react';

// --- Shared Components ---

const SectionTag: React.FC<{ stage: string, title: string }> = ({ stage, title }) => (
    <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Stage {stage}
        </span>
        <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">
            {title}
        </h2>
        <div className="w-12 h-0.5 bg-slate-200 rounded-full"></div>
    </div>
);

const CapabilityCard: React.FC<{
    icon: React.ReactNode,
    title: string,
    subtitle: string,
    description: string,
    accentColor?: string
}> = ({ icon, title, subtitle, description, accentColor = "bg-slate-900" }) => (
    <div className="group relative bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col h-full">
        {/* Hover Accent Line */}
        <div className={`absolute top-0 left-6 right-6 h-0.5 ${accentColor} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
        
        <div className="mb-6">
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-slate-600 group-hover:text-slate-900 group-hover:bg-white group-hover:shadow-sm transition-all">
                {icon}
            </div>
        </div>
        
        <div className="flex-grow">
            <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{subtitle}</p>
            <p className="text-sm text-slate-600 leading-relaxed font-light">
                {description}
            </p>
        </div>
    </div>
);

// --- Section 1: Ingestion ---

export const IngestionSection: React.FC = () => (
    <section className="py-24 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTag stage="01" title="Ingestion & Pre-Processing" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <CapabilityCard 
                    icon={<Network size={22} strokeWidth={1.5} />}
                    title="Blind Ingestion Tunnel"
                    subtitle="Secure Transport"
                    description="Metadata is anonymized at the edge to prevent unauthorized access to raw files before they reach our secure enclave. Large transfer packets are handled via client-side encryption."
                    accentColor="bg-medical-500"
                />
                <CapabilityCard 
                    icon={<ScanLine size={22} strokeWidth={1.5} />}
                    title="Clinical OCR Layer"
                    subtitle="Handwriting Recognition"
                    description="Our Optical Character Recognition layer is specifically tuned for medical records, capable of processing clinical shorthand and handwritten physician notes that standard text parsers miss."
                    accentColor="bg-indigo-500"
                />
                <CapabilityCard 
                    icon={<Layers size={22} strokeWidth={1.5} />}
                    title="Contextual Sorting"
                    subtitle="Document Classification"
                    description="The engine automatically distinguishes between a Lab Report, a Therapy Log, and a Physician Progress Note to evaluate clinical evidence within the correct medical context."
                    accentColor="bg-emerald-500"
                />
            </div>
        </div>
    </section>
);

// --- Section 2: Logic ---

export const LogicSection: React.FC = () => (
    <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTag stage="02" title="Clinical Logic Engine" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 <CapabilityCard 
                    icon={<Database size={22} strokeWidth={1.5} />}
                    title="NTA Comorbidity Extraction"
                    subtitle="Diagnosis Discovery"
                    description="We scan clinical narratives for 50+ Non Therapy Ancillary conditions like Sepsis and Malnutrition. The system identifies diagnoses that are clinically supported in the notes but omitted from MDS Section I."
                    accentColor="bg-amber-500"
                 />
                 <CapabilityCard 
                    icon={<BrainCircuit size={22} strokeWidth={1.5} />}
                    title="Negation Detection"
                    subtitle="False Positive Filtering"
                    description="The engine differentiates between 'Patient has Sepsis' and 'No evidence of Sepsis.' We filter for ruled out conditions and family history to ensure high precision."
                    accentColor="bg-purple-500"
                 />
                 <CapabilityCard 
                    icon={<CheckCircle2 size={22} strokeWidth={1.5} />}
                    title="Section GG Validation"
                    subtitle="Functional Scoring"
                    description="We compare Physical and Occupational Therapy summaries against facility coding in Section GG, flagging discrepancies between documented assistance levels and claimed independence."
                    accentColor="bg-blue-500"
                 />
            </div>
        </div>
    </section>
);

// --- Section 3: Audit ---

export const AuditSection: React.FC = () => (
    <section className="py-24 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTag stage="03" title="Audit Defense & Reporting" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                 {/* Left: Text Content */}
                 <div className="lg:col-span-5 space-y-8">
                     <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-medical-600">
                                <FileSearch size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900">Citation Backed</h3>
                                <p className="text-sm text-slate-600 leading-relaxed mt-1">Every variance includes a direct link to the source truth (page # and paragraph text) for instant verification.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-medical-600">
                                <ShieldAlert size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900">Priority Triage</h3>
                                <p className="text-sm text-slate-600 leading-relaxed mt-1">Variances are categorized by 'Revenue Impact' and 'Compliance Risk' to help MDS Coordinators focus on what matters.</p>
                            </div>
                        </div>
                     </div>
                 </div>

                 {/* Right: Abstract Report Visual */}
                 <div className="lg:col-span-7">
                     <div className="bg-white rounded-xl border border-slate-200 shadow-md p-6 md:p-8 relative">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-0"></div>
                         
                         <div className="flex justify-between items-start mb-8 relative z-10">
                             <div>
                                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Generated Report</div>
                                 <div className="text-xl font-medium text-slate-900">Variance Findings</div>
                             </div>
                             <div className="px-2 py-1 bg-medical-50 text-medical-700 text-[10px] font-bold uppercase rounded border border-medical-100">
                                 Confidential
                             </div>
                         </div>

                         <div className="space-y-4 relative z-10">
                             <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                 <div className="flex justify-between mb-2">
                                     <span className="text-xs font-bold text-slate-700">Finding #1: Sepsis (A41.9)</span>
                                     <span className="text-xs font-mono text-medical-600">+$2,400</span>
                                 </div>
                                 <div className="text-xs text-slate-500 leading-relaxed">
                                     "Patient started on IV antibiotics... diagnosis confirmed by Dr. Smith on Progress Note dated 10/14..."
                                 </div>
                             </div>
                             <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 opacity-60">
                                 <div className="flex justify-between mb-2">
                                     <span className="text-xs font-bold text-slate-700">Finding #2: Malnutrition</span>
                                     <span className="text-xs font-mono text-medical-600">+$1,180</span>
                                 </div>
                                 <div className="h-2 w-3/4 bg-slate-200 rounded mb-1"></div>
                                 <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    </section>
);

// --- Section 4: Security (Light Mode) ---

export const SecurityInfraSection: React.FC = () => (
    <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTag stage="04" title="Security & Infrastructure" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <CapabilityCard 
                    icon={<Lock size={22} strokeWidth={1.5} />}
                    title="Ephemeral Processing"
                    subtitle="Zero Retention"
                    description="We minimize liability by not holding data. Source files are processed in ephemeral memory and permanently deleted immediately upon report generation."
                    accentColor="bg-slate-900"
                />
                <CapabilityCard 
                    icon={<Shield size={22} strokeWidth={1.5} />}
                    title="Sovereign Cloud"
                    subtitle="US-East-1 Residency"
                    description="We guarantee that all data processing and temporary storage occur exclusively within AWS data centers in Northern Virginia. Your data never leaves US jurisdiction."
                    accentColor="bg-slate-900"
                />
                <CapabilityCard 
                    icon={<FileText size={22} strokeWidth={1.5} />}
                    title="No Integration Req"
                    subtitle="Browser Based"
                    description="Centurim operates as a secure overlay tool, bypassing complex HL7/FHIR integrations. Deploy the solution in minutes without IT backlog."
                    accentColor="bg-slate-900"
                />
            </div>
        </div>
    </section>
);

const PlatformCapabilities: React.FC = () => {
    return (
        <div className="flex flex-col">
            <IngestionSection />
            <LogicSection />
            <AuditSection />
            <SecurityInfraSection />
        </div>
    );
};

export default PlatformCapabilities;