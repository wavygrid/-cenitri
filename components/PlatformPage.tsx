import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { 
  Zap, ArrowRight, Scale, Receipt, 
  Globe, CheckCircle2, Server, FileCheck,
  UserCheck, Bot, Activity, Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Break circular dependency by defining type locally
type ViewState = 'home' | 'platform' | 'compliance' | 'markets' | 'deploy' | 'privacy' | 'terms' | 'cookies';

interface PlatformPageProps {
   onNavigate?: (view: ViewState) => void;
}

const PlatformPage: React.FC<PlatformPageProps> = ({ onNavigate }) => {
  const [selectedRegion, setSelectedRegion] = useState<'usa' | 'canada' | 'uk' | 'aus'>('usa');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-advance the demo if user hasn't interacted recently
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setAutoPlay(false);
  };

  const regions = {
    usa: {
      label: "United States",
      hosting: "AWS US-East (N. Virginia)",
      compliance: "SOC 2 Type II / CCPA",
      encryption: "AES-256 (FIPS 140-2)",
      sovereignty: "Strict US Residency",
      framework: "O-1 / EB-1 / NIW / E-2"
    },
    canada: {
      label: "Canada",
      hosting: "AWS Canada (Central)",
      compliance: "PIPEDA / Bill C-27 Ready",
      encryption: "AES-256",
      sovereignty: "Canadian Sovereignty Guaranteed",
      framework: "Express Entry / SUV / PNP"
    },
    uk: {
      label: "UK & Europe",
      hosting: "AWS London / Frankfurt",
      compliance: "GDPR / Data Protection Act 2018",
      encryption: "AES-256",
      sovereignty: "EEA/UK Local Storage",
      framework: "Global Talent / Skilled Worker"
    },
    aus: {
      label: "Australia",
      hosting: "AWS Sydney",
      compliance: "Privacy Act 1988 (APP)",
      encryption: "AES-256",
      sovereignty: "Australian Borders",
      framework: "GTI / Subclass 189"
    }
  };

  const currentSpec = regions[selectedRegion];

  const workflowSteps = [
    {
      id: "intake",
      title: "01. Intake Readiness",
      subtitle: "Identity & Completeness",
      description: "Ensure file hygiene before attorney review. The system checks for document presence and data completeness, reducing administrative back-and-forth.",
      points: [
        "Document completeness scanning.",
        "Passive presence detection.",
        "Automatic expiry date abstraction."
      ],
      icon: UserCheck
    },
    {
      id: "analysis",
      title: "02. Statutory Readiness",
      subtitle: "Regulatory Alignment",
      description: "Our engine maps uploaded evidence against specific visa criteria to determine case readiness.",
      points: [
        "Citation count abstraction.",
        "Criterion gap detection.",
        "Strategy Brief generation."
      ],
      icon: Scale,
    },
    {
      id: "contract",
      title: "03. Financial Readiness",
      subtitle: "Smart Contracting",
      description: "Convert qualified leads instantly. The system prepares the retainer agreement and payment gateway as soon as readiness thresholds are met.",
      points: [
        "Dynamic scope insertion.",
        "E-signature preparation.",
        "Trust account ledgering."
      ],
      icon: Receipt,
    },
    {
      id: "nurture",
      title: "04. Pipeline Readiness",
      subtitle: "Long-term Engagement",
      description: "Keep prospects warm until they are ready to file. The system monitors their profile and reactivates them when criteria are met.",
      points: [
        "Profile maturation tracking.",
        "Missing document reminders.",
        "Reactivation triggers."
      ],
      icon: Bot,
    }
  ];

  return (
    <div className="bg-white font-sans text-zinc-900">
      
      {/* 1. PLATFORM HERO */}
      <section className="pt-40 pb-32 md:pt-48 md:pb-32 container mx-auto px-6 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-zinc-200 text-zinc-500 text-xs font-bold uppercase tracking-widest mb-10"
        >
           <Zap size={14} className="fill-zinc-400 text-zinc-400" /> Intake Intelligence Engine
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight mb-8 max-w-4xl mx-auto leading-tight"
        >
          Deploy Your Firm's <br />
          <span className="text-zinc-900">Immigration Standard.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-zinc-500 max-w-2xl mx-auto mb-16 leading-relaxed font-light"
        >
          Stop building custom intake forms for every visa type. Access our library of 40+ pre-configured <strong>Assessment Gates</strong> mapped to global immigration regulations.
        </motion.p>
      </section>

      {/* 2. GLOBAL LOGIC LIBRARY */}
      <section className="py-32 bg-zinc-50 border-y border-zinc-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div className="max-w-2xl">
                <Badge variant="secondary" className="mb-6 bg-zinc-200 text-zinc-600">Template Library</Badge>
                <h2 className="text-4xl font-bold text-zinc-900 mb-6 tracking-tight">Supported Visa Architectures</h2>
                <p className="text-lg text-zinc-500 leading-relaxed">
                   Do not start from scratch. Select a jurisdiction and deploy a proven logic flow. Each template includes statutory criteria checks, document requirements, and admissibility logic specific to that pathway.
                </p>
             </div>
             <Button onClick={() => onNavigate?.('deploy')} variant="outline" className="bg-white hover:bg-zinc-50 text-zinc-900 border-zinc-300">
                View Full Catalog <ArrowRight size={16} className="ml-2"/>
             </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {/* USA Card */}
             <div className="bg-white border border-zinc-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-zinc-50 rounded flex items-center justify-center font-bold text-sm border border-zinc-100 text-zinc-900">USA</div>
                  <Badge variant="secondary" className="bg-zinc-100 text-zinc-600">Most Popular</Badge>
                </div>
                <h3 className="font-bold text-zinc-900 text-xl mb-4">United States</h3>
                <ul className="space-y-4 mb-8">
                   {['O-1A / O-1B (Talent)', 'EB-1A / EB-1C', 'EB-2 NIW', 'L-1 / E-2 (Business)'].map((item, i) => (
                     <li key={i} className="text-sm text-zinc-600 flex items-center gap-3">
                        <CheckCircle2 size={14} className="text-zinc-400 shrink-0" />
                        {item}
                     </li>
                   ))}
                </ul>
                <div className="pt-6 border-t border-zinc-100">
                   <Button onClick={() => onNavigate?.('deploy')} variant="ghost" className="w-full justify-between text-zinc-900 hover:bg-zinc-50 px-0">
                      Deploy Logic <ArrowRight size={16} />
                   </Button>
                </div>
             </div>

             {/* Canada Card */}
             <div className="bg-white border border-zinc-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="flex justify-between items-start mb-8">
                   <div className="w-12 h-12 bg-zinc-50 rounded flex items-center justify-center font-bold text-sm border border-zinc-100 text-zinc-900">CAN</div>
                </div>
                <h3 className="font-bold text-zinc-900 text-xl mb-4">Canada</h3>
                <ul className="space-y-4 mb-8">
                   {['Express Entry (CRS)', 'Start-Up Visa (SUV)', 'OINP / BCPNP', 'C11 / C12 (ICT)'].map((item, i) => (
                     <li key={i} className="text-sm text-zinc-600 flex items-center gap-3">
                        <CheckCircle2 size={14} className="text-zinc-400 shrink-0" />
                        {item}
                     </li>
                   ))}
                </ul>
                <div className="pt-6 border-t border-zinc-100">
                   <Button onClick={() => onNavigate?.('deploy')} variant="ghost" className="w-full justify-between text-zinc-900 hover:bg-zinc-50 px-0">
                      Deploy Logic <ArrowRight size={16} />
                   </Button>
                </div>
             </div>

             {/* UK Card */}
             <div className="bg-white border border-zinc-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="flex justify-between items-start mb-8">
                   <div className="w-12 h-12 bg-zinc-50 rounded flex items-center justify-center font-bold text-sm border border-zinc-100 text-zinc-900">UK</div>
                </div>
                <h3 className="font-bold text-zinc-900 text-xl mb-4">United Kingdom</h3>
                <ul className="space-y-4 mb-8">
                   {['Global Talent', 'Innovator Founder', 'High Potential Individual', 'Skilled Worker'].map((item, i) => (
                     <li key={i} className="text-sm text-zinc-600 flex items-center gap-3">
                        <CheckCircle2 size={14} className="text-zinc-400 shrink-0" />
                        {item}
                     </li>
                   ))}
                </ul>
                <div className="pt-6 border-t border-zinc-100">
                   <Button onClick={() => onNavigate?.('deploy')} variant="ghost" className="w-full justify-between text-zinc-900 hover:bg-zinc-50 px-0">
                      Deploy Logic <ArrowRight size={16} />
                   </Button>
                </div>
             </div>

             {/* AUS Card */}
             <div className="bg-white border border-zinc-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="flex justify-between items-start mb-8">
                   <div className="w-12 h-12 bg-zinc-50 rounded flex items-center justify-center font-bold text-sm border border-zinc-100 text-zinc-900">AUS</div>
                </div>
                <h3 className="font-bold text-zinc-900 text-xl mb-4">Australia</h3>
                <ul className="space-y-4 mb-8">
                   {['Global Talent (GTI)', 'Subclass 189 / 190', 'Business Innovation', 'Employer Nomination'].map((item, i) => (
                     <li key={i} className="text-sm text-zinc-600 flex items-center gap-3">
                        <CheckCircle2 size={14} className="text-zinc-400 shrink-0" />
                        {item}
                     </li>
                   ))}
                </ul>
                <div className="pt-6 border-t border-zinc-100">
                   <Button onClick={() => onNavigate?.('deploy')} variant="ghost" className="w-full justify-between text-zinc-900 hover:bg-zinc-50 px-0">
                      Deploy Logic <ArrowRight size={16} />
                   </Button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. WORKFLOW ENGINE (Interactive Demo) */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-24 max-w-3xl mx-auto">
               <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8 tracking-tight">The Autonomous Associate</h2>
               <p className="text-xl text-zinc-500 leading-relaxed font-light">
                  Our infrastructure doesn't just store data; it prepares the file. Experience how Centurin automates the entire intake lifecycle from first touch to signed retainer.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
               
               {/* Left: Minimalist Navigation */}
               <div className="lg:col-span-4 flex flex-col justify-center h-full pt-8">
                  <div className="space-y-0 relative">
                     {/* Vertical Line */}
                     <div className="absolute left-[19px] top-4 bottom-4 w-px bg-zinc-100 z-0"></div>
                     
                     {workflowSteps.map((step, index) => {
                        const isActive = activeStep === index;
                        return (
                           <div 
                              key={step.id}
                              onClick={() => handleStepClick(index)}
                              className="relative z-10 pl-12 py-6 cursor-pointer group"
                           >
                              {/* Dot Indicator */}
                              <div className={`absolute left-[14px] top-8 w-[11px] h-[11px] rounded-full border-2 transition-all duration-300 ${isActive ? 'bg-zinc-900 border-zinc-900 scale-125' : 'bg-white border-zinc-200 group-hover:border-zinc-300'}`}></div>
                              
                              <h3 className={`text-lg font-bold transition-colors duration-300 mb-1 ${isActive ? 'text-zinc-900' : 'text-zinc-400 group-hover:text-zinc-600'}`}>
                                 {step.title}
                              </h3>
                              <p className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-zinc-600' : 'text-zinc-300'}`}>
                                 {step.subtitle}
                              </p>
                              
                              <AnimatePresence>
                                 {isActive && (
                                    <motion.div 
                                       key="details"
                                       initial={{ height: 0, opacity: 0 }}
                                       animate={{ height: 'auto', opacity: 1 }}
                                       exit={{ height: 0, opacity: 0 }}
                                       className="overflow-hidden"
                                    >
                                       <div className="pt-4 text-sm text-zinc-500 leading-relaxed max-w-md">
                                          {step.description}
                                       </div>
                                    </motion.div>
                                 )}
                              </AnimatePresence>
                           </div>
                        );
                     })}
                  </div>
               </div>

               {/* Right: The Logic Console (Preview) - Light Mode */}
               <div className="lg:col-span-8 sticky top-24">
                  <div className="bg-white rounded-xl border border-zinc-200 shadow-2xl overflow-hidden aspect-[16/9] relative flex flex-col">
                     {/* Window Chrome */}
                     <div className="h-10 bg-zinc-50 border-b border-zinc-100 flex items-center px-4 justify-between shrink-0">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                           <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                           <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-mono uppercase tracking-wider">
                           <Lock size={10} /> agent_session_active
                        </div>
                     </div>

                     {/* Content Area */}
                     <div className="flex-1 relative p-8 md:p-12 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                           <motion.div
                              key={activeStep}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              className="w-full max-w-md"
                           >
                              {activeStep === 0 && (
                                 <div className="bg-white border border-zinc-200 p-6 rounded-lg font-mono text-sm relative overflow-hidden shadow-sm">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-zinc-900"></div>
                                    <div className="flex justify-between items-center border-b border-zinc-100 pb-4 mb-4">
                                       <span className="text-zinc-500">STATUS: <span className="text-emerald-600 font-bold">READY</span></span>
                                       <UserCheck size={16} className="text-zinc-400" />
                                    </div>
                                    <div className="space-y-4">
                                       <div className="flex justify-between items-center">
                                          <span className="text-zinc-500">Document_Scan</span>
                                          <span className="text-zinc-900 font-medium">Complete (3/3)</span>
                                       </div>
                                       <div className="flex justify-between items-center">
                                          <span className="text-zinc-500">Presence_Check</span>
                                          <span className="text-zinc-900 font-medium">Detected</span>
                                       </div>
                                       <div className="flex justify-between items-center">
                                          <span className="text-zinc-500">Data_Integrity</span>
                                          <div className="w-24 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                                             <div className="h-full bg-zinc-900 w-full"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              )}

                              {activeStep === 1 && (
                                 <div className="bg-white border border-zinc-200 p-6 rounded-lg font-mono text-sm shadow-sm">
                                    <div className="flex justify-between items-center mb-6">
                                       <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Statutory Alignment</span>
                                       <Activity size={16} className="text-zinc-400" />
                                    </div>
                                    <div className="space-y-6">
                                       <div>
                                          <div className="flex justify-between mb-2">
                                             <span className="text-zinc-400">Criterion Match</span>
                                             <span className="text-zinc-900 font-bold">8/10</span>
                                          </div>
                                          <div className="flex gap-1">
                                             {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="h-1.5 flex-1 bg-zinc-300 rounded-sm"></div>)}
                                             {[9,10].map(i => <div key={i} className="h-1.5 flex-1 bg-zinc-100 rounded-sm"></div>)}
                                          </div>
                                       </div>
                                       <div className="p-3 bg-zinc-50 border border-zinc-100 rounded text-xs text-zinc-600">
                                          &gt; <span className="text-emerald-600 font-bold">PASS</span>: Valid degree detected.<br/>
                                          &gt; <span className="text-emerald-600 font-bold">PASS</span>: 5+ years experience.<br/>
                                          &gt; <span className="text-amber-600 font-bold">WARN</span>: Salary threshold marginal.
                                       </div>
                                    </div>
                                 </div>
                              )}

                              {activeStep === 2 && (
                                 <div className="bg-white text-zinc-900 p-6 rounded-lg shadow-xl relative border border-zinc-200">
                                     <div className="absolute -top-3 -right-3">
                                       <span className="relative flex h-3 w-3">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                       </span>
                                     </div>
                                     <div className="text-center border-b border-zinc-100 pb-4 mb-4">
                                       <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Generated Agreement</p>
                                       <h3 className="text-2xl font-bold tracking-tight">$5,000.00</h3>
                                       <p className="text-xs text-zinc-500">Standard Retainer • EB-1A</p>
                                     </div>
                                     <div className="space-y-2">
                                        <div className="h-2 bg-zinc-100 rounded w-full"></div>
                                        <div className="h-2 bg-zinc-100 rounded w-5/6"></div>
                                        <div className="h-2 bg-zinc-100 rounded w-4/6"></div>
                                     </div>
                                     <div className="mt-6">
                                       <Button size="sm" className="w-full bg-zinc-900 text-white h-9 text-xs">View Payment Gateway</Button>
                                     </div>
                                 </div>
                              )}

                              {activeStep === 3 && (
                                 <div className="space-y-3 font-mono text-xs">
                                    <div className="flex justify-start">
                                       <div className="bg-white border border-zinc-200 text-zinc-500 px-4 py-3 rounded-tr-xl rounded-br-xl rounded-bl-xl max-w-[80%] shadow-sm">
                                          &gt; Nurture_Sequence_Active<br/>
                                          &gt; Prospect inactive for 7 days. Sending reminder...
                                       </div>
                                    </div>
                                    <div className="flex justify-end">
                                       <div className="bg-zinc-900 text-zinc-100 px-4 py-3 rounded-tl-xl rounded-bl-xl rounded-br-xl max-w-[80%] shadow-lg">
                                          Thanks for the nudge. I just uploaded the missing tax transcripts.
                                       </div>
                                    </div>
                                    <div className="flex justify-start">
                                       <div className="bg-white border border-zinc-200 text-zinc-500 px-4 py-3 rounded-tr-xl rounded-br-xl rounded-bl-xl max-w-[80%] shadow-sm">
                                          &gt; Received. <span className="text-emerald-600 font-bold">Readiness state updated.</span><br/>
                                          &gt; Notifying attorney...
                                       </div>
                                    </div>
                                 </div>
                              )}

                           </motion.div>
                        </AnimatePresence>
                     </div>
                  </div>
               </div>
            </div>
        </div>
      </section>

      {/* 4. JURISDICTION CONFIGURATOR - Professional Dark Mode */}
      <section className="py-32 bg-zinc-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-4xl font-bold mb-8 tracking-tight text-white">Enterprise Infrastructure</h2>
                <p className="text-zinc-400 text-xl mb-10 leading-relaxed font-light">
                   Select your operating region. Our system automatically reconfigures hosting, encryption standards, and legal frameworks to match local sovereignty laws.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-10">
                   {(['usa', 'canada', 'uk', 'aus'] as const).map((r) => (
                      <button
                        key={r}
                        onClick={() => setSelectedRegion(r)}
                        className={`px-6 py-2.5 rounded text-sm font-bold transition-all border ${
                           selectedRegion === r 
                           ? 'bg-white text-zinc-900 border-white' 
                           : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:border-zinc-500 hover:text-white'
                        }`}
                      >
                         {regions[r].label}
                      </button>
                   ))}
                </div>

                <div className="grid grid-cols-2 gap-6">
                   <div className="p-6 bg-zinc-800/50 border border-zinc-700 rounded-lg">
                      <div className="text-xs text-zinc-500 mb-2 font-bold uppercase tracking-wider">Data Hosting</div>
                      <div className="text-white font-medium flex items-center gap-2">
                         <Server size={14} className="text-zinc-400" /> {currentSpec.hosting}
                      </div>
                   </div>
                   <div className="p-6 bg-zinc-800/50 border border-zinc-700 rounded-lg">
                      <div className="text-xs text-zinc-500 mb-2 font-bold uppercase tracking-wider">Compliance</div>
                      <div className="text-white font-medium flex items-center gap-2">
                         <FileCheck size={14} className="text-zinc-400" /> {currentSpec.compliance}
                      </div>
                   </div>
                </div>
             </div>

             {/* Abstract Map Visualization - Dark Mode */}
             <div className="relative h-[450px] bg-zinc-800/30 border border-zinc-700 rounded-xl p-8 flex items-center justify-center overflow-hidden">
                <div className="relative z-10 text-center">
                   <div className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border border-zinc-700 relative">
                      <Globe size={48} className="text-zinc-500" strokeWidth={1} />
                      <div className="absolute top-0 right-0 w-6 h-6 bg-emerald-500 rounded-full border-4 border-zinc-800"></div>
                   </div>
                   <p className="text-zinc-500 font-bold text-xs tracking-widest uppercase mb-3">Active Region</p>
                   <p className="text-white text-3xl font-bold">{regions[selectedRegion].label}</p>
                   
                   <div className="mt-10 flex justify-center gap-8">
                      <div className="flex flex-col items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                         <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Latency: 12ms</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                         <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Uptime: 99.99%</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-zinc-900 mb-6 tracking-tight">Standardize Your Intake</h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-12 font-light">
             Join the leading firms using Centurin to automate compliance and increase retainer conversion.
          </p>
          <Button onClick={() => onNavigate?.('deploy')} variant="primary" size="lg" className="h-14 px-12 text-lg shadow-sm">
             Deploy Triage Engine
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PlatformPage;