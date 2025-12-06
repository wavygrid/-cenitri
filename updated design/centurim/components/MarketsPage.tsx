import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { ViewState } from '../App';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ArrowRight, Server, Lock, 
  FileText, EyeOff, Activity, ShieldCheck, AlertTriangle 
} from 'lucide-react';

interface MarketsPageProps {
  onNavigate?: (view: ViewState) => void;
}

// --- 1. HERO VISUAL: THE RECONCILIATION ---
const HeroViz = () => (
  <div className="w-full h-full min-h-[400px] flex items-center justify-center relative">
    {/* Composition Container */}
    <div className="relative w-80 h-64 transform rotate-x-12 rotate-y-12 rotate-z-0 preserve-3d">
       
       {/* Left: Source Documents (White Slabs) */}
       <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 space-y-[-20px]">
          {[0, 1, 2].map(i => (
             <div key={i} className="w-24 h-32 bg-white border border-zinc-200 shadow-lg rounded-sm transform translate-z-10 relative" style={{ marginLeft: i * 5, marginTop: i * 5 }}>
                <div className="absolute top-4 left-4 w-12 h-1 bg-zinc-100 rounded-full"></div>
                <div className="absolute top-8 left-4 w-16 h-1 bg-zinc-100 rounded-full"></div>
                <div className="absolute top-12 left-4 w-16 h-1 bg-zinc-100 rounded-full"></div>
             </div>
          ))}
       </div>

       {/* Center: Teal Scanner Pane */}
       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-2 h-48 bg-teal-500/20 backdrop-blur-sm border-l border-teal-400/50 shadow-[0_0_20px_rgba(20,184,166,0.2)] transform -skew-y-12"></div>

       {/* Right: Data Grid (MDS Codes) */}
       <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 grid grid-cols-2 gap-2 transform translate-x-12">
          {[...Array(4)].map((_, i) => (
             <div key={i} className="w-16 h-16 bg-teal-50 rounded-sm border border-teal-100 flex items-center justify-center shadow-sm relative">
                {i === 1 && (
                   <div className="w-8 h-8 bg-teal-500 rounded-sm shadow-md"></div>
                )}
             </div>
          ))}
       </div>

       {/* Connecting Line */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none z-30 overflow-visible">
          <path d="M 100 120 L 160 120 L 240 100" fill="none" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="100" cy="120" r="3" fill="#14b8a6" />
          <circle cx="240" cy="100" r="3" fill="#14b8a6" />
       </svg>
    </div>
  </div>
);

// --- 2. FEATURE ICONS (2.5D Objects) ---

const NtaCubeViz = () => (
   <div className="w-full h-40 flex items-center justify-center">
      <div className="relative w-24 h-24 transform rotate-x-12 rotate-y-45 preserve-3d">
         {/* Main Cube Body (Matte Grey) */}
         <div className="absolute inset-0 bg-zinc-800 border border-zinc-700 shadow-2xl"></div>
         {/* Cutaway Core (Teal) */}
         <div className="absolute inset-4 bg-zinc-900 flex items-center justify-center border border-zinc-700">
            <div className="w-8 h-8 bg-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.6)]"></div>
         </div>
         {/* Wireframe Brackets */}
         <div className="absolute -inset-4 border border-zinc-600/30 rounded-sm"></div>
         <div className="absolute -inset-2 border border-zinc-600/30 rounded-sm"></div>
      </div>
   </div>
);

const SectionGgViz = () => (
   <div className="w-full h-40 flex items-center justify-center">
      <div className="relative w-32 h-24 transform rotate-x-12 rotate-y-12 flex items-end gap-1">
         {/* Steps */}
         <div className="w-8 h-8 bg-teal-800 border-t border-l border-teal-600 shadow-lg"></div>
         <div className="w-8 h-16 bg-teal-700 border-t border-l border-teal-500 shadow-lg"></div>
         <div className="w-8 h-24 bg-teal-600 border-t border-l border-teal-400 shadow-lg relative">
            {/* Path Line */}
            <svg className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none" style={{ transform: 'translateX(-150%)' }}>
               <path d="M 16 32 L 48 16 L 80 0" fill="none" stroke="#e4e4e7" strokeWidth="2" />
               <circle cx="80" cy="0" r="2" fill="white" />
            </svg>
         </div>
      </div>
   </div>
);

const AuditShieldViz = () => (
   <div className="w-full h-40 flex items-center justify-center">
      <div className="relative w-24 h-28 bg-zinc-200 rounded-b-full shadow-xl flex items-center justify-center border-t-4 border-zinc-300 transform rotate-y-12">
         {/* Matte Surface */}
         <div className="absolute inset-0 bg-gradient-to-br from-white to-zinc-300 opacity-50 rounded-b-full"></div>
         {/* Embedded Checkmark */}
         <div className="relative z-10 w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center shadow-inner">
            <CheckCircle2 size={24} className="text-teal-500" strokeWidth={3} />
         </div>
      </div>
   </div>
);

// --- 3. AVATARS (Faceless Chess Pieces) ---

const DirectorAvatar = () => (
   <div className="w-full h-full bg-white flex items-center justify-center">
      <div className="relative w-32 h-40 flex flex-col items-center">
         {/* Head */}
         <div className="w-16 h-20 bg-gradient-to-br from-white to-zinc-200 rounded-full shadow-lg border border-zinc-100 relative z-20"></div>
         {/* Collar (Teal Accent) */}
         <div className="w-20 h-4 bg-teal-500 rounded-full -mt-2 z-10 shadow-md"></div>
         {/* Body Base */}
         <div className="w-24 h-16 bg-zinc-50 rounded-t-3xl -mt-2 shadow-inner border border-zinc-100"></div>
      </div>
   </div>
);

const ConsultantAvatar = () => (
   <div className="w-full h-full bg-white flex items-center justify-center">
      <div className="relative w-32 h-40 flex flex-col items-center">
         {/* Head */}
         <div className="w-16 h-18 bg-gradient-to-br from-white to-zinc-200 rounded-xl shadow-lg border border-zinc-100 relative z-20 transform rotate-3"></div>
         {/* Object (Tablet) */}
         <div className="absolute top-20 right-0 w-12 h-16 bg-zinc-800 rounded transform -rotate-12 border-2 border-teal-500 z-30"></div>
         {/* Body Base */}
         <div className="w-24 h-16 bg-zinc-50 rounded-t-3xl mt-2 shadow-inner border border-zinc-100"></div>
      </div>
   </div>
);

const CoordinatorAvatar = () => (
   <div className="w-full h-full bg-white flex items-center justify-center">
      <div className="relative w-32 h-40 flex flex-col items-center">
         {/* Floating Blocks */}
         <div className="absolute top-0 left-0 w-6 h-6 bg-teal-500/20 rounded-sm animate-pulse"></div>
         <div className="absolute top-10 right-0 w-4 h-4 bg-teal-500/40 rounded-sm"></div>
         {/* Head */}
         <div className="w-16 h-16 bg-gradient-to-br from-white to-zinc-200 rounded-full shadow-lg border border-zinc-100 relative z-20"></div>
         {/* Body Base */}
         <div className="w-24 h-20 bg-zinc-50 rounded-t-3xl mt-2 shadow-inner border border-zinc-100 relative">
             <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-teal-500 rounded-full opacity-10"></div>
         </div>
      </div>
   </div>
);

// --- 4. IMPACT ICONS (Speed, Accuracy, Volume) ---

const SpeedIcon = () => (
   <div className="w-16 h-16 relative">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
         <path d="M 40 0 L 20 60 L 50 60 L 40 100 L 80 30 L 50 30 Z" fill="#14b8a6" stroke="#0f766e" strokeWidth="1" />
      </svg>
   </div>
);

const AccuracyIcon = () => (
   <div className="w-16 h-16 relative flex items-center justify-center">
      <div className="w-12 h-1 bg-zinc-400 rounded-full relative">
         <div className="absolute left-0 top-0 w-4 h-4 bg-teal-500 rounded-full -mt-1.5 shadow-sm"></div>
         <div className="absolute right-0 top-0 w-4 h-4 bg-teal-500 rounded-full -mt-1.5 shadow-sm"></div>
         <div className="absolute left-1/2 top-0 w-1 h-8 bg-zinc-300 -translate-x-1/2"></div>
         <div className="absolute left-1/2 bottom-[-10px] w-8 h-2 bg-zinc-300 -translate-x-1/2 rounded-t-lg"></div>
      </div>
   </div>
);

const VolumeIcon = () => (
   <div className="w-16 h-16 relative flex flex-col items-center justify-center gap-1">
      {[0,1,2].map(i => (
         <div key={i} className="w-12 h-3 bg-zinc-200 border border-zinc-300 rounded-[100%] shadow-sm relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-1 bg-teal-500/50 rounded-full"></div>
         </div>
      ))}
   </div>
);

const MarketsPage: React.FC<MarketsPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-white font-sans text-navy-900 selection:bg-navy-900 selection:text-white pt-20">
      
      {/* 1. HERO SECTION: Split Layout */}
      <section className="bg-white border-b border-zinc-100 pt-12 pb-20 md:pt-24 md:pb-28 px-6">
        <div className="container mx-auto max-w-7xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div className="text-left">
                <Badge variant="accent" className="bg-white text-navy-900 border border-navy-100 mb-8 px-4 py-1.5 shadow-sm">
                   Active Vertical: Post Acute Care
                </Badge>
                
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-navy-900 mb-8 leading-[1.1]">
                  Validate Your PDPM <br /> Revenue Baseline
                </h1>
                
                <p className="text-xl text-zinc-500 leading-relaxed mb-10 max-w-lg font-light">
                  We deploy autonomous clinical auditors to reconcile Hospital Transfer Packets against MDS 3.0 Assessments. Identify missed NTA comorbidities and functional deficits before submission.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full max-w-md">
                   <input 
                      type="email" 
                      placeholder="Enter facility email" 
                      className="w-full h-14 px-6 rounded-sm border border-zinc-200 bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-navy-900 transition-all text-zinc-900"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                   />
                   <Button onClick={() => onNavigate?.('deploy')} className="w-full sm:w-auto h-14 px-8 bg-navy-900 hover:bg-navy-800 text-white rounded-sm font-bold whitespace-nowrap shadow-lg">
                      Initiate Audit
                   </Button>
                </div>
                
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                   HIPAA Compliant Architecture
                </div>
              </div>

              {/* Right Visual: The Reconciliation */}
              <div className="relative h-[400px] w-full bg-white rounded-sm border border-zinc-100 shadow-sm flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                 <HeroViz />
              </div>

           </div>
        </div>
      </section>

      {/* 2. TRANSFORMATION (Before / After) - Kept as is, functional */}
      <section className="py-24 px-6 bg-zinc-50 border-b border-zinc-200">
         <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-navy-900">The Reconciliation Gap</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
               {/* Before: Manual Review */}
               <div className="bg-white rounded-sm p-10 md:p-14 flex flex-col justify-center border border-zinc-200">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-6 border border-zinc-200">
                     <span className="font-mono text-zinc-400">01</span>
                  </div>
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Current State: Manual Review</div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">The Latency Problem</h3>
                  <p className="text-zinc-500 leading-relaxed">
                     Clinical teams rely on manual cross referencing between unstructured hospital PDFs and the MDS. Volume fatigue leads to coding drift, missed NTA capture, and exposure to RAC audits.
                  </p>
               </div>

               {/* After: Centurim */}
               <div className="bg-navy-900 rounded-sm p-10 md:p-14 flex flex-col justify-center text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full"></div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                     <span className="font-mono text-white">02</span>
                  </div>
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Centurim State: Automated</div>
                  <h3 className="text-2xl font-bold text-white mb-4">The Precision Standard</h3>
                  <p className="text-zinc-300 leading-relaxed">
                     Our engine ingests the source truth and the claim simultaneously. It identifies variance in logic and clinical evidence instantly. This empowers your team to validate every code with citation backed proof.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 3. MAIN SELLING POINTS (Dark Section) */}
      <section className="py-24 bg-navy-900 text-white px-6">
         <div className="container mx-auto max-w-6xl">
            <div className="mb-20">
               <h2 className="text-4xl font-bold mb-6">Clinical Variance Detection</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {/* Card 1: NTA Capture */}
               <div className="group">
                  <div className="h-48 bg-navy-950 mb-6 rounded-sm border border-navy-800 flex items-center justify-center group-hover:border-teal-900/50 transition-colors">
                     <NtaCubeViz />
                  </div>
                  <h3 className="text-xl font-bold mb-2">NTA Capture</h3>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">Comorbidity Identification</p>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                     Locate high value diagnoses like Sepsis and Malnutrition hidden in narrative transfer notes but omitted from Section I.
                  </p>
               </div>

               {/* Card 2: Section GG */}
               <div className="group">
                  <div className="h-48 bg-navy-950 mb-6 rounded-sm border border-navy-800 flex items-center justify-center group-hover:border-teal-900/50 transition-colors">
                     <SectionGgViz />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Section GG</h3>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">Functional Validation</p>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                     Cross reference Physical Therapy discharge notes against facility coding to ensure functional scores reflect true patient acuity.
                  </p>
               </div>

               {/* Card 3: Audit Defense */}
               <div className="group">
                  <div className="h-48 bg-navy-950 mb-6 rounded-sm border border-navy-800 flex items-center justify-center group-hover:border-teal-900/50 transition-colors">
                     <AuditShieldViz />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Audit Defense</h3>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">Evidence Citation</p>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                     Every flagged variance includes a direct reference to the source document page and paragraph for immediate verification.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 4. WHO IS THIS FOR? */}
      <section className="py-24 bg-white px-6">
         <div className="container mx-auto max-w-6xl">
            <div className="mb-16">
               <h2 className="text-3xl font-bold text-navy-900">Designed for Post Acute Leadership</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Person 1 */}
               <div className="group cursor-pointer">
                  <div className="h-[300px] w-full bg-zinc-50 mb-6 overflow-hidden border border-zinc-100 rounded-sm">
                     <DirectorAvatar />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-1">Regional Directors</h3>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Revenue Assurance</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                     Monitor coding accuracy across multiple facilities without physical travel. Identify drift patterns before they impact the P&L.
                  </p>
               </div>

               {/* Person 2 */}
               <div className="group cursor-pointer">
                  <div className="h-[300px] w-full bg-zinc-50 mb-6 overflow-hidden border border-zinc-100 rounded-sm">
                     <ConsultantAvatar />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-1">MDS Consultants</h3>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Audit Efficiency</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                     Process retrospective audits in minutes rather than days. Increase your client capacity by automating the data extraction phase.
                  </p>
               </div>

               {/* Person 3 */}
               <div className="group cursor-pointer">
                  <div className="h-[300px] w-full bg-zinc-50 mb-6 overflow-hidden border border-zinc-100 rounded-sm">
                     <CoordinatorAvatar />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-1">MDS Coordinators</h3>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Workflow Support</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                     Reduce the manual burden of the Triple Check meeting. Validate your coding decisions against the hospital record instantly.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. EXPECTED OUTCOMES (Sneaky Features) */}
      <section className="py-24 bg-zinc-50 px-6 border-y border-zinc-200">
         <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-16 items-start">
               <div className="md:w-1/3">
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Operational Impact</h2>
                  <p className="text-zinc-500">
                     We measure success in hours saved and revenue recovered.
                  </p>
               </div>

               <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div>
                     <div className="mb-4"><SpeedIcon /></div>
                     <h3 className="font-bold text-navy-900 mb-2">Speed</h3>
                     <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Rapid Turnaround</p>
                     <p className="text-sm text-zinc-500">
                        Upload files by 5 PM. Receive variance reports by 8 AM. Reduce the backlog in your Triple Check meetings.
                     </p>
                  </div>
                  <div>
                     <div className="mb-4"><AccuracyIcon /></div>
                     <h3 className="font-bold text-navy-900 mb-2">Accuracy</h3>
                     <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Deterministic Logic</p>
                     <p className="text-sm text-zinc-500">
                        Our models do not guess. They strictly compare Input A against Input B based on defined PDPM rulesets.
                     </p>
                  </div>
                  <div>
                     <div className="mb-4"><VolumeIcon /></div>
                     <h3 className="font-bold text-navy-900 mb-2">Volume</h3>
                     <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Scalable Processing</p>
                     <p className="text-sm text-zinc-500">
                        Whether you audit 5 files or 500, the engine maintains consistent precision without fatigue.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. OUR SECURITY */}
      <section className="py-24 bg-white px-6">
         <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-navy-900">Sovereign Architecture</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
               {[
                  { title: "US Data Residency", desc: "All processing occurs exclusively within AWS US East 1 data centers.", icon: Server },
                  { title: "Encryption Standards", desc: "AES 256 encryption for data at rest and TLS 1.3 for data in transit.", icon: Lock },
                  { title: "Contractual Liability", desc: "We execute comprehensive Business Associate Agreements with all covered entities.", icon: FileText },
                  { title: "Zero Retention", desc: "We retain no client data for model training or long term storage.", icon: EyeOff },
                  { title: "Immutable Logging", desc: "System access and data events are recorded in forensic audit trails.", icon: Activity },
                  { title: "Access Control", desc: "Least privilege architecture ensures no human interaction with raw files.", icon: ShieldCheck }
               ].map((item, i) => (
                  <div key={i} className="bg-white p-8 flex flex-col items-center text-center hover:bg-zinc-50 transition-colors">
                     <item.icon size={24} className="text-navy-900 mb-4" />
                     <h3 className="text-sm font-bold text-navy-900 mb-2">{item.title}</h3>
                     <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. COMPARISON (The Audit Stack) */}
      <section className="py-24 bg-zinc-50 px-6 border-b border-zinc-200">
         <div className="container mx-auto max-w-5xl">
            <div className="mb-16">
               <h2 className="text-3xl font-bold text-navy-900">The Audit Stack</h2>
            </div>

            <div className="bg-white border border-zinc-200 rounded-sm overflow-hidden">
               {/* Header */}
               <div className="grid grid-cols-4 bg-zinc-100 border-b border-zinc-200 p-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  <div>Method</div>
                  <div>Approach</div>
                  <div>Speed</div>
                  <div>Outcome</div>
               </div>

               {/* Row 1 */}
               <div className="grid grid-cols-4 p-6 border-b border-zinc-100 items-center hover:bg-zinc-50">
                  <div className="font-bold text-navy-900">Manual Review</div>
                  <div className="text-sm text-zinc-600">Human reading</div>
                  <div className="text-sm text-zinc-600">45 mins / file</div>
                  <div className="text-sm text-zinc-500 flex items-center gap-2"><AlertTriangle size={14} className="text-orange-500"/> Fatigue errors</div>
               </div>

               {/* Row 2 */}
               <div className="grid grid-cols-4 p-6 border-b border-zinc-100 items-center hover:bg-zinc-50">
                  <div className="font-bold text-navy-900">Standard Scrubbers</div>
                  <div className="text-sm text-zinc-600">Logic checks</div>
                  <div className="text-sm text-zinc-600">Instant</div>
                  <div className="text-sm text-zinc-500 flex items-center gap-2"><AlertTriangle size={14} className="text-orange-500"/> Blind to PDFs</div>
               </div>

               {/* Row 3 */}
               <div className="grid grid-cols-4 p-6 bg-navy-50 items-center">
                  <div className="font-bold text-navy-900 flex items-center gap-2">Centurim Engine <Badge variant="accent" className="bg-navy-900 text-white border-0">PRO</Badge></div>
                  <div className="text-sm text-navy-900 font-medium">Clinical Reconciliation</div>
                  <div className="text-sm text-navy-900 font-medium">Instant</div>
                  <div className="text-sm text-emerald-700 font-bold flex items-center gap-2"><CheckCircle2 size={14}/> Validates PDF against Code</div>
               </div>
            </div>
         </div>
      </section>

      {/* 8. PRICING */}
      <section className="py-24 bg-white px-6">
         <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-navy-900 mb-16 text-center">Deployment Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
               
               {/* Option 1: The Pilot */}
               <div className="border border-zinc-200 p-10 rounded-sm flex flex-col hover:shadow-lg transition-shadow">
                  <div className="mb-8">
                     <h3 className="text-2xl font-bold text-navy-900">The Pilot</h3>
                     <p className="text-sm text-zinc-500 uppercase tracking-wider font-bold mt-1">Proof of Concept</p>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                     <li className="flex items-center gap-3 text-sm text-zinc-600">
                        <CheckCircle2 size={16} className="text-navy-900" /> 5 Patient Records
                     </li>
                     <li className="flex items-center gap-3 text-sm text-zinc-600">
                        <CheckCircle2 size={16} className="text-navy-900" /> NTA & Section GG Check
                     </li>
                     <li className="flex items-center gap-3 text-sm text-zinc-600">
                        <CheckCircle2 size={16} className="text-navy-900" /> 24 Hour Turnaround
                     </li>
                     <li className="flex items-center gap-3 text-sm text-zinc-600">
                        <CheckCircle2 size={16} className="text-navy-900" /> Validation Sample Included
                     </li>
                  </ul>
                  <div className="pt-8 border-t border-zinc-100">
                     <div className="text-3xl font-bold text-navy-900 mb-4">$250 <span className="text-sm font-normal text-zinc-400">One Time</span></div>
                     <Button onClick={() => onNavigate?.('deploy')} className="w-full bg-white border-2 border-navy-900 text-navy-900 hover:bg-navy-50 font-bold h-12">
                        Start Pilot
                     </Button>
                  </div>
               </div>

               {/* Option 2: Facility Pack */}
               <div className="bg-navy-900 text-white p-10 rounded-sm flex flex-col shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-teal-500 text-white text-[10px] font-bold px-3 py-1 uppercase">Recommended</div>
                  <div className="mb-8">
                     <h3 className="text-2xl font-bold text-white">The Facility Pack</h3>
                     <p className="text-sm text-zinc-400 uppercase tracking-wider font-bold mt-1">Monthly Revenue Integrity</p>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                     <li className="flex items-center gap-3 text-sm text-zinc-300">
                        <CheckCircle2 size={16} className="text-teal-400" /> 30 Patient Records
                     </li>
                     <li className="flex items-center gap-3 text-sm text-zinc-300">
                        <CheckCircle2 size={16} className="text-teal-400" /> Full Variance Report
                     </li>
                     <li className="flex items-center gap-3 text-sm text-zinc-300">
                        <CheckCircle2 size={16} className="text-teal-400" /> Audit Defense Citations
                     </li>
                  </ul>
                  <div className="pt-8 border-t border-navy-800">
                     <div className="text-sm text-zinc-400 mb-1">Packages starting at</div>
                     <div className="text-3xl font-bold text-white mb-4">$2,250 <span className="text-sm font-normal text-zinc-400">/ month</span></div>
                     <Button onClick={() => onNavigate?.('deploy')} className="w-full bg-white text-navy-900 hover:bg-zinc-200 font-bold h-12 border-0">
                        Deploy Facility Pack
                     </Button>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 9. CTA (Case Study) */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200 px-6">
         <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div className="h-[400px] w-full bg-white rounded-sm border border-zinc-200 flex items-center justify-center">
                  <div className="text-center p-8">
                     <h3 className="text-2xl font-bold text-navy-900 mb-4">$450,000 Recovered</h3>
                     <p className="text-zinc-500 mb-6">Across 12 Facilities in 60 Days</p>
                     <div className="w-full bg-zinc-100 h-4 rounded-full overflow-hidden mb-2">
                        <div className="w-[85%] h-full bg-navy-900"></div>
                     </div>
                     <p className="text-xs text-zinc-400 uppercase tracking-widest">Target Recovery Goal</p>
                  </div>
               </div>
               <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-6">The Cost of Variance Report</h2>
                  <p className="text-lg text-zinc-500 leading-relaxed mb-8">
                     We analyzed 500 closed claims to determine the average revenue loss due to under coding. The results highlight a significant opportunity for NTA capture.
                  </p>
                  <Button variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-50 h-12 px-8">
                     View Case Study Data
                  </Button>
               </div>
            </div>
         </div>
      </section>

      {/* 10. YEAR END CTA */}
      <section className="py-32 bg-navy-900 text-white text-center px-6">
         <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The 2025 Retrospective Sweep</h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
               Secure your fiscal year baseline. Audit your Q4 claims for missed revenue before the modification window closes.
            </p>
            <Button onClick={() => onNavigate?.('deploy')} className="h-16 px-12 bg-white text-navy-900 hover:bg-zinc-200 font-bold text-lg rounded-sm">
               Schedule Year End Audit
            </Button>
         </div>
      </section>

    </div>
  );
};

export default MarketsPage;