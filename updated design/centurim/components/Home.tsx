import React from 'react';
import { ViewState } from '../App';
import { Button } from './ui/Button';
import { 
  ArrowRight, ShieldCheck, Database, 
  Lock, Eye, FileText, Activity, 
  CheckCircle2, Terminal, Server, 
  Cpu, Trash2, FileSearch, Scale,
  HardHat, Ship, FileCheck, Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
}

// --- VISUALIZATION COMPONENTS ---

// 1. HERO VISUALIZATION: "The Reconciliation Engine"
// Context: Chaos (Floating Docs) -> Teal Glass Filter -> Order (Grid)
// Background: Pure White
const HeroViz = () => {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center perspective-[2000px] border border-zinc-100">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* The Composition */}
      <div className="relative w-[80%] h-[60%] flex items-center justify-center transform rotate-x-6 rotate-y-6 rotate-z-0 preserve-3d">
         
         {/* LEFT: Chaos (Floating Matte-White Documents) */}
         <div className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2 w-48 h-64 z-10 perspective-[1000px]">
            {[0, 1, 2, 3].map((i) => (
               <motion.div
                  key={i}
                  animate={{ 
                     y: [0, -8, 0],
                     rotateX: [10, 12, 10],
                     rotateY: [-10, -8, -10],
                     rotateZ: [-5 + (i*8), 0 + (i*8), -5 + (i*8)] 
                  }}
                  transition={{ duration: 5 + i, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-24 h-32 bg-white shadow-lg border border-zinc-200 rounded-sm flex flex-col p-3 gap-2"
                  style={{ top: i * 15, left: i * 10 - 20, zIndex: 4 - i }}
               >
                  <div className="w-full h-1 bg-zinc-100 rounded-full"></div>
                  <div className="w-2/3 h-1 bg-zinc-100 rounded-full"></div>
                  <div className="w-full h-1 bg-zinc-100 rounded-full"></div>
               </motion.div>
            ))}
         </div>

         {/* CENTER: Teal Glass Filter (Scanner) */}
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-64 z-20">
            <div className="absolute inset-y-0 -left-8 w-16 bg-teal-500/10 backdrop-blur-sm border-l border-r border-teal-500/30 transform -skew-x-6"></div>
            {/* Scanning Line */}
            <motion.div 
               animate={{ top: ['0%', '100%', '0%'] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute left-[-32px] w-16 h-px bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.8)]"
            ></motion.div>
         </div>

         {/* RIGHT: Order (Aligned Grid of Cubes) */}
         <div className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 w-48 h-64 z-0 grid grid-cols-2 gap-4 content-center pl-8">
            {[...Array(4)].map((_, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                  className="w-16 h-16 bg-white border border-teal-100 shadow-md rounded-sm relative overflow-hidden group"
               >
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-8 h-8 bg-teal-50 border border-teal-200 rounded-sm flex items-center justify-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>

         {/* Connecting Data Streams */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <path d="M 150 150 C 250 150, 300 200, 400 200" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 150 200 C 250 200, 300 200, 400 200" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
         </svg>

      </div>
    </div>
  );
};

// 2. HEALTHCARE FEATURE VIZ: "Evidence to Code"
// Context: Medical Record -> Connector -> Billing Code
// Background: Pure White
const HealthcareFeatureViz = () => {
   return (
     <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center border border-zinc-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f1f5f9_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        <div className="relative w-full max-w-sm h-64 flex items-center justify-between px-12 transform perspective-[1000px]">
           
           {/* Left: Medical Record (Matte White) */}
           <motion.div 
             animate={{ y: [-4, 4, -4] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="w-28 h-36 bg-white shadow-xl border border-zinc-200 rounded-sm transform rotate-y-12 rotate-x-6 p-3 flex flex-col"
           >
              <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center mb-3">
                 <Activity size={12} className="text-zinc-400" />
              </div>
              <div className="space-y-1.5">
                 <div className="w-full h-1 bg-zinc-100 rounded-full"></div>
                 <div className="w-2/3 h-1 bg-zinc-100 rounded-full"></div>
                 <div className="w-full h-1 bg-zinc-100 rounded-full"></div>
              </div>
              <div className="mt-auto w-full h-4 border-l-2 border-teal-500 bg-teal-50 flex items-center px-1">
                 <div className="w-12 h-1 bg-teal-200 rounded-full"></div>
              </div>
           </motion.div>

           {/* Connector */}
           <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 pointer-events-none z-10">
              <path d="M 0 60 C 80 60, 120 20, 200 20" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="100" cy="40" r="3" fill="#14b8a6" className="animate-ping" />
           </svg>

           {/* Right: Billing Grid (Slate/Teal) */}
           <motion.div 
             animate={{ y: [4, -4, 4] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="w-28 h-36 bg-zinc-900 border border-zinc-800 rounded-sm transform -rotate-y-12 rotate-x-6 shadow-2xl p-0 overflow-hidden flex flex-col"
           >
              <div className="h-4 bg-zinc-800 border-b border-zinc-700 w-full mb-1"></div>
              <div className="flex-1 p-2 space-y-1">
                 <div className="flex gap-1">
                    <div className="w-1/3 h-3 bg-zinc-800 rounded-sm"></div>
                    <div className="w-2/3 h-3 bg-zinc-800 rounded-sm"></div>
                 </div>
                 <div className="flex gap-1">
                    <div className="w-1/3 h-3 bg-zinc-800 rounded-sm"></div>
                    <div className="w-2/3 h-3 bg-teal-900/50 border border-teal-500/50 rounded-sm relative">
                       <div className="absolute inset-0 bg-teal-400/20"></div>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
     </div>
   );
};

// 3. TECH VISUALIZATIONS (White Backgrounds)

// A. INGESTION: "Blind Protocol" (Data Tunnel)
const IngestionViz = () => {
   return (
     <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden">
       <div className="relative transform rotate-x-12 rotate-y-12">
          {/* Tunnel Shell (Matte Grey) */}
          <div className="w-40 h-24 bg-zinc-100 rounded-full border border-zinc-300 shadow-xl relative overflow-hidden flex items-center justify-start pl-2">
             {/* Inner Core (Glowing Teal) */}
             <div className="w-32 h-20 bg-teal-50 rounded-full border border-teal-200 shadow-[inset_0_0_15px_rgba(20,184,166,0.1)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(20,184,166,0.1),transparent)] animate-pulse"></div>
             </div>
          </div>
          {/* Incoming Sphere */}
          <motion.div
             initial={{ x: 120, opacity: 0, scale: 0.5 }}
             animate={{ x: 20, opacity: 1, scale: 1 }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "circOut" }}
             className="absolute top-1/2 -translate-y-1/2 right-0 w-6 h-6 bg-white border border-zinc-200 rounded-full shadow-md z-10"
          ></motion.div>
       </div>
     </div>
   );
};
 
// B. ANALYSIS: "Deterministic Logic" (Logic Node)
const AnalysisViz = () => {
    return (
      <div className="w-full h-full bg-white flex items-center justify-center relative">
        <div className="relative flex items-center transform rotate-x-12">
           {/* Converging Streams */}
           <div className="absolute right-full mr-4 flex flex-col gap-3">
              <div className="w-20 h-0.5 bg-zinc-300 transform rotate-12 origin-right"></div>
              <div className="w-20 h-0.5 bg-zinc-300 transform -rotate-12 origin-right"></div>
           </div>

           {/* Logic Cube */}
           <motion.div 
             animate={{ rotateY: 360 }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="w-20 h-20 bg-teal-50/50 backdrop-blur-sm border border-teal-200 shadow-lg transform-style-3d relative flex items-center justify-center"
           >
              {/* Internal Wireframe */}
              <div className="w-10 h-10 border border-teal-500/20 transform rotate-45"></div>
              <div className="w-6 h-6 bg-teal-500 rounded-sm shadow-sm"></div>
           </motion.div>
        </div>
      </div>
    );
};
 
// C. DESTRUCTION: "Ephemeral Processing" (Dissolving Doc)
const DestructionViz = () => {
    return (
      <div className="w-full h-full bg-white flex items-center justify-center relative">
        <div className="relative w-28 h-36">
           {/* Document Body */}
           <div className="absolute inset-0 bg-white border border-zinc-200 shadow-lg rounded-sm overflow-hidden">
               <div className="p-3 space-y-2">
                  <div className="w-1/2 h-1 bg-zinc-200"></div>
                  <div className="w-full h-1 bg-zinc-100"></div>
                  <div className="w-full h-1 bg-zinc-100"></div>
                  <div className="w-2/3 h-1 bg-zinc-100"></div>
               </div>
               {/* Mask */}
               <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent to-white z-10"></div>
           </div>
           {/* Particles */}
           <div className="absolute inset-y-0 right-0 w-12 overflow-hidden pointer-events-none">
              {[...Array(12)].map((_, i) => (
                 <motion.div
                    key={i}
                    className={`absolute w-1 h-1 ${i % 2 === 0 ? 'bg-teal-500' : 'bg-zinc-300'} rounded-full`}
                    initial={{ x: 0, y: Math.random() * 140, opacity: 1 }}
                    animate={{ x: 30, y: (Math.random() * 140) + (Math.random() * 20 - 10), opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: Math.random() }}
                 />
              ))}
           </div>
        </div>
      </div>
    );
};

// 4. INDUSTRY APPLICATION ICONS (Pure White Backgrounds)

// A. HEALTHCARE: Interlocking Cross
const HealthcareViz = () => {
   return (
      <div className="w-full h-full bg-white flex items-center justify-center">
         <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-32 h-32 flex items-center justify-center transform rotate-x-24 rotate-y-45 preserve-3d"
         >
            {/* Center */}
            <div className="w-8 h-8 bg-teal-500 shadow-lg z-20 relative border border-teal-600"></div>
            {/* Arms */}
            <div className="w-8 h-8 bg-white shadow-md absolute -top-8 z-10 border border-zinc-200"></div>
            <div className="w-8 h-8 bg-white shadow-md absolute -bottom-8 z-10 border border-zinc-200"></div>
            <div className="w-8 h-8 bg-white shadow-md absolute -left-8 z-10 border border-zinc-200"></div>
            <div className="w-8 h-8 bg-white shadow-md absolute -right-8 z-10 border border-zinc-200"></div>
            {/* Base Platform */}
            <div className="absolute -bottom-16 w-24 h-24 bg-zinc-100 rounded-full transform rotate-x-90 scale-y-50"></div>
         </motion.div>
      </div>
   );
};

// B. CONSTRUCTION: I-Beam & Laser
const ConstructionViz = () => {
   return (
      <div className="w-full h-full bg-white flex items-center justify-center">
         <div className="relative w-32 h-32 flex items-center justify-center transform rotate-x-12 rotate-y-12">
            {/* I-Beam */}
            <div className="w-12 h-24 bg-zinc-50 border-x-4 border-zinc-300 relative shadow-xl flex items-center justify-center">
               <div className="w-full h-full border-t-4 border-b-4 border-zinc-300"></div>
            </div>
            {/* Laser Plane */}
            <motion.div 
               animate={{ top: ['10%', '90%', '10%'] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="absolute w-32 h-px bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.6)] z-20"
            ></motion.div>
         </div>
      </div>
   );
};

// C. LOGISTICS: Glass Cube & Globe
const LogisticsViz = () => {
   return (
      <div className="w-full h-full bg-white flex items-center justify-center perspective-[800px]">
         <motion.div 
            animate={{ rotateY: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-20 h-20 transform-style-3d"
         >
            {/* Cube */}
            <div className="absolute inset-0 bg-teal-50/30 border border-teal-200 shadow-xl">
               {/* Wireframe Globe Inside */}
               <div className="absolute inset-2 rounded-full border border-zinc-300/50 flex items-center justify-center">
                  <div className="w-full h-px bg-zinc-300/50 absolute top-1/2"></div>
                  <div className="h-full w-px bg-zinc-300/50 absolute left-1/2"></div>
               </div>
            </div>
         </motion.div>
         {/* Grid Floor */}
         <div className="absolute bottom-6 w-32 h-32 bg-[linear-gradient(90deg,#e4e4e7_1px,transparent_1px),linear-gradient(#e4e4e7_1px,transparent_1px)] bg-[size:10px_10px] transform rotate-x-60 -z-10"></div>
      </div>
   );
};

// 5. SECURITY VIZ: "Sovereign Architecture" (US Map)
const SecurityViz = () => {
   return (
      <div className="w-full h-full bg-white flex items-center justify-center overflow-hidden relative">
         <div className="relative w-64 h-40">
            {/* Stylized US Map (Wireframe) */}
            <svg viewBox="0 0 100 60" className="w-full h-full drop-shadow-xl">
               <path d="M 5,20 L 15,22 L 20,35 L 35,32 L 50,40 L 60,35 L 80,45 L 95,20 L 85,10 L 50,5 L 20,5 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
               {/* Virginia Pin */}
               <circle cx="80" cy="25" r="2" fill="#14b8a6" className="animate-pulse" />
               <circle cx="80" cy="25" r="6" fill="none" stroke="#14b8a6" strokeOpacity="0.3" strokeWidth="0.5" className="animate-ping" />
            </svg>
            {/* Shield Dome Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-teal-50/20 to-transparent rounded-full opacity-50 border-t border-teal-100"></div>
         </div>
      </div>
   );
};

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-navy-900 font-sans selection:bg-navy-900 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-zinc-100">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy-900 leading-[1.1] mb-8">
                Reconcile Reality <br/>
                Against Regulation
              </h1>
              <p className="text-xl text-zinc-500 leading-relaxed mb-10 font-light max-w-lg">
                We bridge the gap between clinical evidence and billing compliance. Our autonomous auditing engine identifies revenue variance and risk across regulated workflows.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button onClick={() => onNavigate('deploy')} className="bg-navy-900 text-white hover:bg-navy-800 h-14 px-8 text-base rounded-sm font-semibold">
                  Request Pilot Access
                </Button>
                <Button onClick={() => onNavigate('platform')} variant="outline" className="border-zinc-200 text-navy-900 h-14 px-8 text-base rounded-sm hover:bg-zinc-50">
                  View Platform Architecture
                </Button>
              </div>

              <div className="flex items-center gap-3 text-sm font-medium text-zinc-400">
                <ShieldCheck size={18} className="text-navy-900" />
                <span>HIPAA Compliant Architecture. US Data Sovereignty.</span>
              </div>
            </div>

            <div className="relative h-[500px] lg:h-[600px] w-full bg-white rounded-sm overflow-hidden shadow-2xl border border-zinc-100">
               <HeroViz />
            </div>
          </div>
        </div>
      </section>

      {/* 2. HEALTHCARE FEATURE SECTION */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             
             {/* Left: Visual */}
             <div className="order-2 lg:order-1 h-[500px] bg-white rounded-sm overflow-hidden shadow-2xl border border-zinc-100">
                <HealthcareFeatureViz />
             </div>

             {/* Right: Content */}
             <div className="order-1 lg:order-2">
                <div className="inline-block w-3 h-3 bg-navy-900 mb-6"></div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Active Vertical: Post Acute Care</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Automated Revenue Integrity</h2>
                
                <p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                   We empower Skilled Nursing Facilities to identify earned reimbursement opportunities. Our engine compares Hospital Transfer Packets against MDS 3.0 Assessments to detect missed NTA comorbidities.
                </p>

                <div className="space-y-6 mb-10 border-t border-zinc-100 pt-8">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      <div>
                         <h4 className="font-bold text-navy-900 mb-1 text-sm">Clinical Evidence Capture</h4>
                         <p className="text-xs text-zinc-500">Locate diagnosis evidence in narrative text.</p>
                      </div>
                      <div>
                         <h4 className="font-bold text-navy-900 mb-1 text-sm">Code Validation</h4>
                         <p className="text-xs text-zinc-500">Verify billing codes against CMS rules.</p>
                      </div>
                   </div>
                </div>

                <div 
                   onClick={() => onNavigate('markets')}
                   className="inline-flex items-center gap-2 text-navy-900 font-bold border-b border-navy-900 pb-0.5 cursor-pointer hover:opacity-70 transition-opacity"
                >
                   View Healthcare Solutions <ArrowRight size={16} />
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY (White Background with Cards) */}
      <section className="py-24 md:py-32 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="container mx-auto max-w-7xl">
           <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">The Reconciliation Engine</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Ingestion */}
              <div className="group bg-white border border-zinc-200 p-8 rounded-sm hover:shadow-lg transition-all">
                 <div className="h-48 bg-white rounded-sm mb-8 overflow-hidden relative border border-zinc-100 flex items-center justify-center">
                    <IngestionViz />
                 </div>
                 <div className="text-xs font-mono text-zinc-400 mb-2">01. Ingestion</div>
                 <h3 className="text-xl font-bold mb-3 text-navy-900">Blind Protocol</h3>
                 <p className="text-zinc-500 text-sm leading-relaxed">
                    We utilize a secure ingestion tunnel. Metadata is anonymized at the edge to ensure zero unauthorized access to raw files.
                 </p>
              </div>

              {/* Card 2: Analysis */}
              <div className="group bg-white border border-zinc-200 p-8 rounded-sm hover:shadow-lg transition-all">
                 <div className="h-48 bg-white rounded-sm mb-8 overflow-hidden relative border border-zinc-100 flex items-center justify-center">
                    <AnalysisViz />
                 </div>
                 <div className="text-xs font-mono text-zinc-400 mb-2">02. Analysis</div>
                 <h3 className="text-xl font-bold mb-3 text-navy-900">Deterministic Logic</h3>
                 <p className="text-zinc-500 text-sm leading-relaxed">
                    Our comparator models do not guess. They strictly validate Source Document A against Claim Document B to identify variance.
                 </p>
              </div>

              {/* Card 3: Destruction */}
              <div className="group bg-white border border-zinc-200 p-8 rounded-sm hover:shadow-lg transition-all">
                 <div className="h-48 bg-white rounded-sm mb-8 overflow-hidden relative border border-zinc-100 flex items-center justify-center">
                    <DestructionViz />
                 </div>
                 <div className="text-xs font-mono text-zinc-400 mb-2">03. Destruction</div>
                 <h3 className="text-xl font-bold mb-3 text-navy-900">Ephemeral Processing</h3>
                 <p className="text-zinc-500 text-sm leading-relaxed">
                    Data exists only during analysis. Source files are permanently deleted immediately upon report generation.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. OUTCOMES */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
           <div className="max-w-3xl mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">From Unstructured Chaos to <br/>Audit Ready Precision</h2>
              <p className="text-lg text-zinc-500 font-light">
                 Regulated industries rely on manual review to verify complex claims. We replace human latency with autonomous precision.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
              {/* Outcome Tiles */}
              <div className="bg-white p-12 min-h-[320px] flex flex-col justify-between group hover:bg-zinc-50 transition-colors">
                 <h3 className="text-2xl font-bold text-navy-900">Insight</h3>
                 <div>
                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-3">Variance Detection</h4>
                    <p className="text-zinc-600 leading-relaxed">Identify discrepancies between clinical documentation and final billing codes before submission.</p>
                 </div>
              </div>
              <div className="bg-white p-12 min-h-[320px] flex flex-col justify-between group hover:bg-zinc-50 transition-colors">
                 <h3 className="text-2xl font-bold text-navy-900">Synthesis</h3>
                 <div>
                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-3">Contextual Understanding</h4>
                    <p className="text-zinc-600 leading-relaxed">Recognize that clinical descriptions in a discharge summary correlate to specific billing codes.</p>
                 </div>
              </div>
              <div className="bg-white p-12 min-h-[320px] flex flex-col justify-between group hover:bg-zinc-50 transition-colors">
                 <h3 className="text-2xl font-bold text-navy-900">Precision</h3>
                 <div>
                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-3">Citation Backed Reporting</h4>
                    <p className="text-zinc-600 leading-relaxed">Every finding includes a direct reference to the source document page and paragraph.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. SECURITY SECTION (Split Layout) */}
      <section className="py-24 md:py-32 px-6 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto max-w-7xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Content */}
              <div>
                 <div className="inline-block w-3 h-3 bg-emerald-500 mb-6"></div>
                 <h2 className="text-3xl font-bold text-navy-900 mb-6">Sovereign Architecture</h2>
                 <p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                    Centurim operates on a Zero Trust architecture designed for the strict regulatory requirements of US Healthcare.
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 border border-zinc-200 rounded-sm">
                       <Server className="text-navy-900 mb-3" size={24} />
                       <h3 className="font-bold text-sm mb-1">US Data Residency</h3>
                       <p className="text-xs text-zinc-500">AWS US East 1 (N. Virginia) exclusive processing.</p>
                    </div>
                    <div className="bg-white p-6 border border-zinc-200 rounded-sm">
                       <Lock className="text-navy-900 mb-3" size={24} />
                       <h3 className="font-bold text-sm mb-1">AES-256 Encryption</h3>
                       <p className="text-xs text-zinc-500">Military-grade protection for data at rest.</p>
                    </div>
                    <div className="bg-white p-6 border border-zinc-200 rounded-sm">
                       <Trash2 className="text-navy-900 mb-3" size={24} />
                       <h3 className="font-bold text-sm mb-1">Zero Retention</h3>
                       <p className="text-xs text-zinc-500">Source files permanently deleted after analysis.</p>
                    </div>
                    <div className="bg-white p-6 border border-zinc-200 rounded-sm">
                       <FileText className="text-navy-900 mb-3" size={24} />
                       <h3 className="font-bold text-sm mb-1">BAA Coverage</h3>
                       <p className="text-xs text-zinc-500">Comprehensive liability coverage for all entities.</p>
                    </div>
                 </div>
              </div>

              {/* Right: Security Map Visual */}
              <div className="h-[500px] w-full bg-white rounded-sm border border-zinc-200 shadow-xl overflow-hidden">
                 <SecurityViz />
              </div>

           </div>
        </div>
      </section>

      {/* 6. CASE STUDY */}
      <section className="py-24 md:py-32 px-6 bg-white border-t border-zinc-100">
        <div className="container mx-auto max-w-7xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div className="max-w-xl">
                 <h2 className="text-4xl font-bold text-navy-900 mb-6">The Cost of Variance</h2>
                 <p className="text-lg text-zinc-500 leading-relaxed mb-10">
                    In the Skilled Nursing sector, a single missed NTA comorbidity can result in significant revenue loss per patient stay. Manual review processes often miss these details due to volume fatigue.
                 </p>
                 <div 
                    className="inline-flex items-center gap-2 text-navy-900 font-bold border-b border-navy-900 pb-0.5 cursor-pointer hover:opacity-70 transition-opacity"
                 >
                    Read the PDPM Report <ArrowRight size={16} />
                 </div>
              </div>

              <div className="bg-zinc-50 p-12 md:p-16 border border-zinc-200 rounded-sm flex flex-col items-center text-center">
                 <div className="text-6xl md:text-8xl font-bold text-navy-900 tracking-tighter mb-4">
                    $4,500
                 </div>
                 <div className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                    Average monthly revenue captured <br/> per facility during pilot audits
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* 7. INDUSTRY APPLICATIONS */}
      <section className="py-24 md:py-32 px-6 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto max-w-7xl">
           <div className="mb-16">
              <h2 className="text-3xl font-bold text-navy-900">Platform Applications</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* App 1: Healthcare */}
              <div className="group cursor-pointer bg-white border border-zinc-200 rounded-sm p-6 hover:shadow-lg transition-all">
                 <div className="h-[200px] w-full bg-zinc-50 mb-6 overflow-hidden rounded-sm border border-zinc-100 relative flex items-center justify-center">
                    <HealthcareViz />
                 </div>
                 <div className="flex justify-between items-end border-b border-zinc-100 pb-4 mb-4">
                    <div>
                       <h3 className="text-xl font-bold text-navy-900">Healthcare</h3>
                       <p className="text-xs text-zinc-500 uppercase tracking-wide">Revenue Integrity</p>
                    </div>
                 </div>
                 <p className="text-sm text-zinc-500 leading-relaxed">
                    Reconciling clinical evidence against billing codes for SNF and Home Health.
                 </p>
              </div>

              {/* App 2: Construction */}
              <div className="group cursor-pointer bg-white border border-zinc-200 rounded-sm p-6 hover:shadow-lg transition-all">
                 <div className="h-[200px] w-full bg-zinc-50 mb-6 overflow-hidden rounded-sm border border-zinc-100 relative flex items-center justify-center">
                    <ConstructionViz />
                 </div>
                 <div className="flex justify-between items-end border-b border-zinc-100 pb-4 mb-4">
                    <div>
                       <h3 className="text-xl font-bold text-navy-900">Construction</h3>
                       <p className="text-xs text-zinc-500 uppercase tracking-wide">Pay App Auditing</p>
                    </div>
                 </div>
                 <p className="text-sm text-zinc-500 leading-relaxed">
                    Validating subcontractor invoices against master schedules and contracts.
                 </p>
              </div>

              {/* App 3: Logistics */}
              <div className="group cursor-pointer bg-white border border-zinc-200 rounded-sm p-6 hover:shadow-lg transition-all">
                 <div className="h-[200px] w-full bg-zinc-50 mb-6 overflow-hidden rounded-sm border border-zinc-100 relative flex items-center justify-center">
                    <LogisticsViz />
                 </div>
                 <div className="flex justify-between items-end border-b border-zinc-100 pb-4 mb-4">
                    <div>
                       <h3 className="text-xl font-bold text-navy-900">Logistics</h3>
                       <p className="text-xs text-zinc-500 uppercase tracking-wide">Customs Compliance</p>
                    </div>
                 </div>
                 <p className="text-sm text-zinc-500 leading-relaxed">
                    Verifying commercial invoices against bills of lading and tariff codes.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 8. FOOTER CTA */}
      <section className="relative h-[600px] flex items-center justify-center px-6 overflow-hidden bg-navy-900">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
         <div className="relative z-10 text-center text-white max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Secure Your <br/>Revenue Baseline</h2>
            <p className="text-xl text-zinc-400 font-light mb-12">
               Initiate a retrospective audit to identify variance in your closed files.
            </p>
            <Button onClick={() => onNavigate('deploy')} className="bg-white text-navy-900 hover:bg-zinc-200 h-16 px-12 text-lg font-bold rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.2)]">
               Request Pilot Access
            </Button>
         </div>
      </section>

    </div>
  );
};

export default Home;