import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ScanFace, Scale, CheckCircle2, XCircle, FileText, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

const ProblemTransformation: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle through steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      id: 0,
      icon: Filter,
      title: "Automated Triage",
      problem: "High volume noise buries qualified leads.",
      solution: "Our logic engine filters candidates against your specific firm criteria, routing only high-value cases.",
    },
    {
      id: 1,
      icon: ScanFace,
      title: "Zero-Touch Evidence",
      problem: "Chasing passports and CVs via email creates liability.",
      solution: "Prospects must provide complete, scanned evidence before they can book a consultation.",
    },
    {
      id: 2,
      icon: Scale,
      title: "Sovereign Logic",
      problem: "Outsourcing intake risks compliance errors.",
      solution: "The system executes your exact legal standard on every file, ensuring 100% consistency.",
    }
  ];

  return (
    <section className="py-32 bg-white border-b border-zinc-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-8 leading-tight">
            Your website asks prospects to <span className="text-zinc-400 line-through decoration-zinc-300 decoration-1">"Book a Consultation."</span><br />
            Our system gets them to <span className="text-zinc-900 underline decoration-zinc-900 decoration-2 underline-offset-4">"Pre-Qualify."</span>
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
             Stop wasting billable hours on unqualified leads. Deploy an intelligent intake layer that audits every prospect before they hit your calendar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* LEFT: THE VISUALIZATION ENGINE - Light Mode */}
            <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="relative rounded-xl bg-white border border-zinc-200 shadow-xl aspect-[4/3] md:aspect-[16/9] overflow-hidden flex flex-col">
                    
                    {/* Fake Browser Chrome */}
                    <div className="h-10 border-b border-zinc-100 bg-zinc-50 flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
                        </div>
                        <div className="ml-4 px-3 py-1 bg-white rounded text-[10px] font-medium text-zinc-400 flex items-center gap-2 border border-zinc-200 uppercase tracking-wider">
                            <ShieldCheck size={10} className="text-zinc-400"/> qualification_engine
                        </div>
                    </div>

                    {/* Canvas */}
                    <div className="flex-1 relative p-8 md:p-12 flex items-center justify-center bg-zinc-50/50">
                        <AnimatePresence mode="wait">
                            
                            {/* STAGE 0: TRIAGE */}
                            {activeStep === 0 && (
                                <motion.div 
                                    key="triage"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full max-w-md"
                                >
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-zinc-600 text-xs font-bold uppercase tracking-widest mb-4 border border-zinc-200 shadow-sm">
                                            <Filter size={12} /> Traffic Filter
                                        </div>
                                        <h3 className="text-zinc-900 text-xl font-bold">Analysing Lead Volume</h3>
                                    </div>

                                    <div className="space-y-3">
                                        {/* Lead 1: Rejected */}
                                        <motion.div 
                                            initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 0.5 }} transition={{ delay: 0.1 }}
                                            className="flex items-center justify-between p-3 rounded-lg bg-white border border-zinc-200 grayscale opacity-60"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-xs text-zinc-500 font-bold">91</div>
                                                <span className="text-zinc-500 text-sm font-medium">Visitor_Chicago_IL</span>
                                            </div>
                                            <span className="text-xs text-zinc-400 font-bold flex items-center gap-1 uppercase tracking-wide"><XCircle size={10}/> Disqualified</span>
                                        </motion.div>

                                        {/* Lead 2: Rejected */}
                                        <motion.div 
                                            initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 0.5 }} transition={{ delay: 0.3 }}
                                            className="flex items-center justify-between p-3 rounded-lg bg-white border border-zinc-200 grayscale opacity-60"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-xs text-zinc-500 font-bold">92</div>
                                                <span className="text-zinc-500 text-sm font-medium">Visitor_London_UK</span>
                                            </div>
                                            <span className="text-xs text-zinc-400 font-bold flex items-center gap-1 uppercase tracking-wide"><XCircle size={10}/> No_Budget</span>
                                        </motion.div>

                                        {/* Lead 3: Approved */}
                                        <motion.div 
                                            initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}
                                            className="flex items-center justify-between p-4 rounded-xl bg-white border border-zinc-300 shadow-lg relative overflow-hidden"
                                        >
                                            <div className="absolute left-0 top-0 w-1 h-full bg-zinc-900"></div>
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center text-xs font-bold text-white">JD</div>
                                                <div>
                                                    <span className="text-zinc-900 text-sm font-bold block">Jane Doe</span>
                                                    <span className="text-zinc-500 text-xs font-medium">PhD Candidate • Biotech</span>
                                                </div>
                                            </div>
                                            <span className="text-xs text-zinc-900 font-bold flex items-center gap-1 bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200 uppercase tracking-wide">
                                                <CheckCircle2 size={12}/> Qualified
                                            </span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}

                            {/* STAGE 1: EVIDENCE */}
                            {activeStep === 1 && (
                                <motion.div 
                                    key="evidence"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full max-w-md"
                                >
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-zinc-600 text-xs font-bold uppercase tracking-widest mb-4 border border-zinc-200 shadow-sm">
                                            <ScanFace size={12} /> Document Ingestion
                                        </div>
                                        <h3 className="text-zinc-900 text-xl font-bold">Verifying Evidence</h3>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Passport */}
                                        <motion.div 
                                            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
                                            className="bg-white border border-zinc-200 p-6 rounded-xl flex flex-col items-center text-center gap-3 shadow-sm"
                                        >
                                            <div className="w-10 h-10 rounded bg-zinc-50 flex items-center justify-center text-zinc-400">
                                                <ScanFace size={20} />
                                            </div>
                                            <div className="text-xs">
                                                <span className="text-zinc-900 block font-bold mb-1">Passport ID</span>
                                                <span className="text-zinc-400">Expiry Validated</span>
                                            </div>
                                            <div className="w-full bg-zinc-100 h-1 rounded-full overflow-hidden mt-2">
                                                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }} className="h-full bg-zinc-900" />
                                            </div>
                                        </motion.div>

                                        {/* CV */}
                                        <motion.div 
                                            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                                            className="bg-white border border-zinc-200 p-6 rounded-xl flex flex-col items-center text-center gap-3 shadow-sm"
                                        >
                                            <div className="w-10 h-10 rounded bg-zinc-50 flex items-center justify-center text-zinc-400">
                                                <FileText size={20} />
                                            </div>
                                            <div className="text-xs">
                                                <span className="text-zinc-900 block font-bold mb-1">CV / Resume</span>
                                                <span className="text-zinc-400">Parsing Citations</span>
                                            </div>
                                            <div className="w-full bg-zinc-100 h-1 rounded-full overflow-hidden mt-2">
                                                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5 }} className="h-full bg-zinc-900" />
                                            </div>
                                        </motion.div>
                                    </div>
                                     
                                    <motion.div 
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
                                        className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-500 font-medium"
                                    >
                                        <CheckCircle2 size={14} className="text-emerald-500" /> 
                                        All required documents present.
                                    </motion.div>
                                </motion.div>
                            )}

                            {/* STAGE 2: LOGIC */}
                            {activeStep === 2 && (
                                <motion.div 
                                    key="logic"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full max-w-md"
                                >
                                    <div className="text-center mb-8">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-zinc-600 text-xs font-bold uppercase tracking-widest mb-4 border border-zinc-200 shadow-sm">
                                            <Scale size={12} /> Sovereign Logic Core
                                        </div>
                                        <h3 className="text-zinc-900 text-xl font-bold">Executing Decision Matrix</h3>
                                    </div>

                                    <div className="bg-white border border-zinc-200 rounded-xl p-6 relative overflow-hidden shadow-lg">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-zinc-900"></div>
                                        
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="text-sm font-bold text-zinc-900">O-1A Admissibility</span>
                                            <span className="text-emerald-600 font-mono text-xs font-bold bg-emerald-50 px-2 py-1 rounded">PASSING_SCORE</span>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between text-xs border-b border-zinc-50 pb-2">
                                                <span className="text-zinc-500 font-medium">Criterion 1: Awards</span>
                                                <span className="text-zinc-900 font-bold flex items-center gap-1"><CheckCircle2 size={10} className="text-emerald-500"/> MET</span>
                                            </div>
                                            <div className="flex items-center justify-between text-xs border-b border-zinc-50 pb-2">
                                                <span className="text-zinc-500 font-medium">Criterion 2: High Salary</span>
                                                <span className="text-zinc-900 font-bold flex items-center gap-1"><CheckCircle2 size={10} className="text-emerald-500"/> MET</span>
                                            </div>
                                            <div className="flex items-center justify-between text-xs border-b border-zinc-50 pb-2">
                                                <span className="text-zinc-500 font-medium">Criterion 3: Original Contributions</span>
                                                <span className="text-zinc-900 font-bold flex items-center gap-1"><CheckCircle2 size={10} className="text-emerald-500"/> MET</span>
                                            </div>
                                            
                                            <div className="pt-2 flex items-center justify-between">
                                                <span className="text-sm font-bold text-zinc-900">Final Determination</span>
                                                <span className="px-3 py-1.5 bg-zinc-900 text-white text-xs font-bold rounded shadow-sm">
                                                    Retainer Ready
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* RIGHT: PROBLEM / SOLUTION CARDS - Minimalist */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-6">
                {features.map((feature, index) => {
                    const isActive = activeStep === index;
                    return (
                        <div 
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`
                                cursor-pointer group relative p-8 rounded-lg border transition-all duration-300
                                ${isActive 
                                    ? 'bg-white border-zinc-300 shadow-lg scale-100 z-10' 
                                    : 'bg-white border-transparent hover:bg-zinc-50 border-zinc-100 opacity-60 hover:opacity-100'
                                }
                            `}
                        >
                            {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-900 rounded-l-lg"></div>}
                            
                            <div className="flex items-start gap-6">
                                <div className={`mt-1
                                    ${isActive ? 'text-zinc-900' : 'text-zinc-400'}
                                `}>
                                    <feature.icon size={24} />
                                </div>
                                <div>
                                    <h4 className={`text-xl font-bold mb-2 transition-colors ${isActive ? 'text-zinc-900' : 'text-zinc-400'}`}>
                                        {feature.title}
                                    </h4>
                                    
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                            >
                                                <div className="pt-2 space-y-4">
                                                    <div>
                                                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Problem</p>
                                                        <p className="text-sm text-zinc-600 leading-relaxed">{feature.problem}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-1">Solution</p>
                                                        <p className="text-sm text-zinc-900 leading-relaxed font-medium">{feature.solution}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {!isActive && (
                                        <p className="text-sm text-zinc-400 mt-1 line-clamp-1 font-medium">{feature.problem}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemTransformation;