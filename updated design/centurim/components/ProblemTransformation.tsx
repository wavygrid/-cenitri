import React, { useState, useEffect } from 'react';
import { 
  FileText, FileJson, FileDiff, 
  Scale, Files, ArrowRight,
  GitCompare, AlertOctagon, CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const industries = [
  {
    id: 'healthcare',
    label: "Healthcare",
    color: "text-emerald-500",
    source: { title: "Source Truth", subtitle: "Clinical Discharge PDF", icon: FileText },
    target: { title: "Target Claim", subtitle: "MDS 3.0 Assessment", icon: FileJson },
    output: { title: "Variance Report", subtitle: "Clinical Mismatch Detected", icon: FileDiff }
  },
  {
    id: 'construction',
    label: "Construction",
    color: "text-blue-500",
    source: { title: "Source Truth", subtitle: "Subcontractor Invoice", icon: Files },
    target: { title: "Target Claim", subtitle: "G702 Pay Application", icon: FileJson },
    output: { title: "Variance Report", subtitle: "Overbilling Detected", icon: FileDiff }
  },
  {
    id: 'logistics',
    label: "Logistics",
    color: "text-amber-500",
    source: { title: "Source Truth", subtitle: "Bill of Lading", icon: FileText },
    target: { title: "Target Claim", subtitle: "Customs Declaration", icon: FileJson },
    output: { title: "Variance Report", subtitle: "Weight Discrepancy", icon: FileDiff }
  }
];

const ProblemTransformation: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % industries.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const current = industries[index];

  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden relative border-b border-zinc-900">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            The Reconciliation Engine
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg font-light">
             We do not generate data. We validate it. <br/>
             Our engine acts as a neutral comparator between Source Truth and Target Claim.
          </p>
        </div>

        {/* -----------------------------------------------------------
            COMPARATOR VISUALIZATION (Desktop)
            ----------------------------------------------------------- */}
        <div className="hidden lg:flex justify-center items-center relative w-full max-w-6xl mx-auto h-[450px]">
           
           {/* SVG Connector Layer */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 450" preserveAspectRatio="none">
              <defs>
                <linearGradient id="comparatorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#27272a" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#52525b" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#27272a" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {/* Input A (Top Left) to Center */}
              <path d="M 250 120 C 350 120, 350 225, 500 225" fill="none" stroke="url(#comparatorGradient)" strokeWidth="2" />
              
              {/* Input B (Bottom Left) to Center */}
              <path d="M 250 330 C 350 330, 350 225, 500 225" fill="none" stroke="url(#comparatorGradient)" strokeWidth="2" />

              {/* Center to Output (Right) */}
              <path d="M 500 225 C 650 225, 650 225, 750 225" fill="none" stroke="url(#comparatorGradient)" strokeWidth="2" />

              {/* Animated Particles flowing into Center */}
              <circle r="3" fill="#ffffff" className="animate-flow-in-top">
                 <animateMotion dur="2s" repeatCount="indefinite" path="M 250 120 C 350 120, 350 225, 500 225" keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
              </circle>
              <circle r="3" fill="#ffffff" className="animate-flow-in-bottom">
                 <animateMotion dur="2s" repeatCount="indefinite" path="M 250 330 C 350 330, 350 225, 500 225" keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
              </circle>

              {/* Animated Particle flowing out */}
              <circle r="3" fill="#ef4444" className="animate-flow-out">
                 <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M 500 225 C 650 225, 650 225, 750 225" keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
              </circle>
           </svg>


           {/* --- LEFT COLUMN: INPUTS --- */}
           <div className="absolute left-0 top-0 bottom-0 w-[300px] flex flex-col justify-between py-12 z-10">
              
              {/* Input A: Source Truth */}
              <div className="relative">
                 <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-600 -rotate-90 origin-center tracking-widest uppercase">Input A</div>
                 <InputCard 
                    key={`source-${index}`}
                    icon={current.source.icon}
                    title={current.source.title}
                    subtitle={current.source.subtitle}
                    industryColor={current.color}
                 />
              </div>

              {/* Input B: Target Claim */}
              <div className="relative">
                 <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-600 -rotate-90 origin-center tracking-widest uppercase">Input B</div>
                 <InputCard 
                    key={`target-${index}`}
                    icon={current.target.icon}
                    title={current.target.title}
                    subtitle={current.target.subtitle}
                    industryColor={current.color}
                 />
              </div>
           </div>


           {/* --- CENTER COLUMN: THE ENGINE --- */}
           <div className="z-20 relative">
              <div className="w-48 h-48 bg-zinc-950 rounded-full border-2 border-zinc-800 flex items-center justify-center relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                 {/* Spinning Outer Ring */}
                 <div className="absolute inset-0 rounded-full border border-zinc-700 border-t-zinc-400 animate-spin-slow"></div>
                 
                 {/* Inner Core */}
                 <div className="w-32 h-32 bg-zinc-900 rounded-full flex flex-col items-center justify-center border border-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-zinc-800/20 animate-pulse"></div>
                    <GitCompare size={32} className="text-zinc-400 mb-2 relative z-10" />
                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest relative z-10">Logic<br/>Comparator</div>
                 </div>

                 {/* Collision Point Flash */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full blur-xl opacity-0 animate-flash"></div>
              </div>

              {/* Vertical Label */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                 Centurin Engine v2.0
              </div>
           </div>


           {/* --- RIGHT COLUMN: OUTPUT --- */}
           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] z-10">
              <div className="relative">
                 <div className="absolute -right-12 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-600 rotate-90 origin-center tracking-widest uppercase">Output</div>
                 <OutputCard 
                    key={`output-${index}`}
                    icon={current.output.icon}
                    title={current.output.title}
                    subtitle={current.output.subtitle}
                    industryLabel={current.label}
                 />
              </div>
           </div>

        </div>

        {/* -----------------------------------------------------------
            MOBILE VISUALIZATION (Vertical Stack)
            ----------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col items-center space-y-6 max-w-sm mx-auto">
           
           <div className="w-full space-y-4">
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest text-center mb-2">Inputs</div>
              <InputCard 
                 icon={current.source.icon}
                 title={current.source.title}
                 subtitle={current.source.subtitle}
                 industryColor={current.color}
              />
              <div className="flex justify-center text-zinc-600 font-mono text-xs">VS</div>
              <InputCard 
                 icon={current.target.icon}
                 title={current.target.title}
                 subtitle={current.target.subtitle}
                 industryColor={current.color}
              />
           </div>

           <ArrowRight className="text-zinc-700 rotate-90" />

           <div className="w-20 h-20 bg-zinc-900 rounded-full border border-zinc-700 flex items-center justify-center">
               <Scale size={24} className="text-zinc-400" />
           </div>

           <ArrowRight className="text-zinc-700 rotate-90" />

           <div className="w-full">
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest text-center mb-4">Result</div>
              <OutputCard 
                 icon={current.output.icon}
                 title={current.output.title}
                 subtitle={current.output.subtitle}
                 industryLabel={current.label}
              />
           </div>

        </div>

      </div>
      <style>{`
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes flash {
          0%, 90% { opacity: 0; }
          95% { opacity: 0.5; }
          100% { opacity: 0; }
        }
        .animate-flash {
           animation: flash 2s infinite;
        }
      `}</style>
    </section>
  );
};

// --- ANIMATED CARDS ---

const InputCard = ({ icon: Icon, title, subtitle, industryColor }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.4 }}
    className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex items-center gap-4 relative overflow-hidden group hover:border-zinc-700 transition-colors"
  >
     <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 group-hover:bg-zinc-600 transition-colors"></div>
     <div className="w-10 h-10 bg-zinc-950 rounded-lg flex items-center justify-center shrink-0 border border-zinc-800">
        <Icon size={18} className="text-zinc-400" />
     </div>
     <div>
        <div className="text-sm font-bold text-zinc-300">{title}</div>
        <div className={`text-xs ${industryColor} font-mono mt-1`}>{subtitle}</div>
     </div>
  </motion.div>
);

const OutputCard = ({ icon: Icon, title, subtitle, industryLabel }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.4 }}
    className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex items-center gap-4 relative overflow-hidden shadow-xl"
  >
     <div className="absolute right-0 top-0 text-[10px] bg-zinc-800 text-zinc-400 px-2 py-1 rounded-bl font-mono uppercase">
        {industryLabel}
     </div>
     <div className="w-10 h-10 bg-red-950/30 rounded-lg flex items-center justify-center shrink-0 border border-red-900/50">
        <Icon size={18} className="text-red-500" />
     </div>
     <div>
        <div className="text-sm font-bold text-zinc-200">{title}</div>
        <div className="text-xs text-red-400 font-mono mt-1 flex items-center gap-1">
           <AlertOctagon size={10} /> {subtitle}
        </div>
     </div>
  </motion.div>
);

export default ProblemTransformation;