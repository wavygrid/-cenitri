import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { RefreshCw, ArrowRight, Calculator, AlertCircle } from 'lucide-react';
import { ViewState } from '../App';

// Types
type Role = 'Partner' | 'Associate' | 'Admin';

interface AuditPageProps {
  onNavigate?: (view: ViewState) => void;
}

const AuditPage: React.FC<AuditPageProps> = ({ onNavigate }) => {
  // --- STATE ---
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  // Inputs
  const [monthlyLeads, setMonthlyLeads] = useState(50);
  const [retainerValue, setRetainerValue] = useState(5000);
  const [closeRate, setCloseRate] = useState(20);
  
  const [role, setRole] = useState<Role>('Associate');
  const [adminTime, setAdminTime] = useState(30); // Minutes
  
  const [hasOCR, setHasOCR] = useState(false);
  const [hasDeposit, setHasDeposit] = useState(false);
  const [fastResponse, setFastResponse] = useState(false);

  // Computed
  const hourlyRate = role === 'Partner' ? 400 : role === 'Associate' ? 150 : 30;
  
  // Calculations
  const metrics = useMemo(() => {
    const monthlyHours = (monthlyLeads * adminTime) / 60;
    const monthlyPayroll = monthlyHours * hourlyRate;
    const annualPayrollBurn = monthlyPayroll * 12;

    let frictionPct = 5;
    if (!hasOCR) frictionPct += 10;
    if (!hasDeposit) frictionPct += 10;
    if (!fastResponse) frictionPct += 15;

    const monthlyPipelineValue = monthlyLeads * retainerValue;
    const monthlyLeakage = monthlyPipelineValue * (frictionPct / 100);
    const annualLeakage = monthlyLeakage * 12;

    const burnRatio = (monthlyPayroll / monthlyPipelineValue) * 100;
    const totalDrag = frictionPct + burnRatio;
    let efficiencyScore = 100 - totalDrag;
    if (efficiencyScore < 0) efficiencyScore = 0;

    return {
      annualPayrollBurn,
      annualLeakage,
      efficiencyScore: Math.round(efficiencyScore),
      frictionPct,
      monthlyPipelineValue
    };
  }, [monthlyLeads, adminTime, hourlyRate, hasOCR, hasDeposit, fastResponse, retainerValue]);

  // Graph Data
  const chartData = useMemo(() => {
    const data = [];
    let currentCost = 0;
    let optimizedCost = 0;
    
    const monthlyBurn = metrics.annualPayrollBurn / 12;
    const monthlyLeak = metrics.annualLeakage / 12;
    const totalMonthlyWaste = monthlyBurn + monthlyLeak;
    
    const optimizedMonthlyBurn = monthlyBurn * 0.10; 
    const optimizedMonthlyLeak = monthlyLeak * 0.20;
    const totalOptimizedWaste = optimizedMonthlyBurn + optimizedMonthlyLeak + 500; 

    for (let i = 0; i <= 11; i++) {
      currentCost += totalMonthlyWaste;
      optimizedCost += totalOptimizedWaste;
      data.push({
        month: i + 1,
        Current: Math.round(currentCost),
        Optimized: Math.round(optimizedCost),
      });
    }
    return data;
  }, [metrics]);

  // Handlers
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setStep(4);
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setStep(5);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 2000);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  // Custom Chart Render
  const Chart = () => {
    const width = 800;
    const height = 300;
    const padding = 40;
    const graphWidth = width - padding * 2;
    const graphHeight = height - padding * 2;

    const maxY = Math.max(...chartData.map(d => d.Current)) * 1.1;
    
    const getX = (index: number) => padding + (index / (chartData.length - 1)) * graphWidth;
    const getY = (value: number) => height - padding - (value / maxY) * graphHeight;

    const createPath = (key: 'Current' | 'Optimized') => {
      return chartData.map((d, i) => 
        `${i === 0 ? 'M' : 'L'} ${getX(i)},${getY(d[key])}`
      ).join(' ');
    };

    const createArea = (key: 'Current' | 'Optimized') => {
      return `${createPath(key)} L ${getX(chartData.length - 1)},${height - padding} L ${padding},${height - padding} Z`;
    };

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
        {/* Grid Lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((tick) => {
          const y = height - padding - tick * graphHeight;
          return (
            <g key={tick}>
               <line x1={padding} y1={y} x2={width - padding} y2={y} stroke="#f4f4f5" strokeWidth="1" />
               <text x={padding - 10} y={y + 4} textAnchor="end" className="text-[10px] fill-zinc-400 font-mono">
                  ${Math.round((tick * maxY) / 1000)}k
               </text>
            </g>
          );
        })}

        {/* Areas */}
        <path d={createArea('Current')} fill="url(#gradCurrent)" opacity="0.1" />
        <path d={createArea('Optimized')} fill="url(#gradOptimized)" opacity="0.1" />

        {/* Lines */}
        <path d={createPath('Current')} fill="none" stroke="#ef4444" strokeWidth="2" />
        <path d={createPath('Optimized')} fill="none" stroke="#18181b" strokeWidth="2" />

        {/* Gradients */}
        <defs>
          <linearGradient id="gradCurrent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradOptimized" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Labels */}
        {chartData.map((d, i) => (
           (i % 2 === 0 || i === 11) && (
            <text key={i} x={getX(i)} y={height - padding + 20} textAnchor="middle" className="text-[10px] fill-zinc-400 font-mono">
              Mo {d.month}
            </text>
           )
        ))}
      </svg>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50 pt-32 pb-20 font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm border border-zinc-200 mb-6">
             <Calculator size={24} className="text-zinc-900" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">Practice Health Audit</h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            Calculate the administrative cost of manual intake sorting and identify revenue leakage.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-xl overflow-hidden min-h-[500px] flex flex-col">
          
          {/* Progress Bar */}
          {step < 5 && (
            <div className="w-full bg-zinc-100 h-1">
               <div 
                  className="h-full bg-zinc-900 transition-all duration-500" 
                  style={{ width: `${(step / 3) * 100}%` }}
               ></div>
            </div>
          )}

          <div className="p-8 md:p-12 flex-grow flex flex-col justify-center">
             <AnimatePresence mode="wait">
               
               {/* STEP 1: VOLUME */}
               {step === 1 && (
                 <motion.div 
                   key="step1"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.2 }}
                 >
                   <h2 className="text-2xl font-bold text-zinc-900 mb-8">Firm Volume</h2>
                   <div className="space-y-8">
                     <div className="space-y-4">
                       <div className="flex justify-between items-center">
                          <label className="text-sm font-semibold text-zinc-900">Monthly Inquiries</label>
                          <span className="text-2xl font-bold text-zinc-900">{monthlyLeads}</span>
                       </div>
                       <input 
                         type="range" min="0" max="200" step="5"
                         value={monthlyLeads}
                         onChange={(e) => setMonthlyLeads(parseInt(e.target.value))}
                         className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-zinc-900"
                       />
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                         <label className="text-sm font-semibold text-zinc-900">Avg. Retainer Value</label>
                         <div className="relative">
                           <span className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-400 font-medium">$</span>
                           <input 
                             type="number"
                             value={retainerValue}
                             onChange={(e) => setRetainerValue(parseInt(e.target.value))}
                             className="w-full pl-6 py-2 bg-transparent border-b border-zinc-200 text-3xl font-bold text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                           />
                         </div>
                       </div>

                       <div className="space-y-4">
                         <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold text-zinc-900">Est. Conversion Rate</label>
                            <span className="text-xl font-bold text-zinc-900">{closeRate}%</span>
                         </div>
                         <input 
                           type="range" min="1" max="50" step="1"
                           value={closeRate}
                           onChange={(e) => setCloseRate(parseInt(e.target.value))}
                           className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-zinc-900"
                         />
                       </div>
                     </div>

                     <div className="pt-8">
                       <Button onClick={handleNext} size="lg" className="w-full md:w-auto h-12 px-8">
                         Next Step <ArrowRight className="ml-2" size={16} />
                       </Button>
                     </div>
                   </div>
                 </motion.div>
               )}

               {/* STEP 2: HUMAN CAPITAL */}
               {step === 2 && (
                 <motion.div 
                   key="step2"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.2 }}
                 >
                    <h2 className="text-2xl font-bold text-zinc-900 mb-8">Operational Cost</h2>
                    <div className="space-y-8">
                       <div>
                         <label className="text-sm font-semibold text-zinc-900 block mb-4">Who sorts the initial inbox?</label>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                           {[
                             { id: 'Partner', rate: 400 },
                             { id: 'Associate', rate: 150 },
                             { id: 'Admin', rate: 30 },
                           ].map((r) => (
                             <div 
                               key={r.id}
                               onClick={() => setRole(r.id as Role)}
                               className={`cursor-pointer rounded-xl border-2 p-4 text-center transition-all ${role === r.id ? 'bg-zinc-900 border-zinc-900 text-white' : 'bg-white border-zinc-100 hover:border-zinc-300 text-zinc-900'}`}
                             >
                               <p className="font-bold">{r.id}</p>
                               <p className={`text-xs mt-1 ${role === r.id ? 'text-zinc-400' : 'text-zinc-500'}`}>${r.rate}/hr</p>
                             </div>
                           ))}
                         </div>
                       </div>

                       <div className="space-y-4">
                         <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold text-zinc-900">Time spent sorting per lead</label>
                            <span className="text-xl font-bold text-zinc-900">{adminTime} min</span>
                         </div>
                         <input 
                           type="range" min="5" max="120" step="5"
                           value={adminTime}
                           onChange={(e) => setAdminTime(parseInt(e.target.value))}
                           className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-zinc-900"
                         />
                       </div>

                       <div className="pt-8 flex gap-4">
                         <Button variant="outline" onClick={handleBack} size="lg" className="h-12 px-8">Back</Button>
                         <Button onClick={handleNext} size="lg" className="h-12 px-8">
                           Next Step <ArrowRight className="ml-2" size={16} />
                         </Button>
                       </div>
                    </div>
                 </motion.div>
               )}

               {/* STEP 3: FRICTION */}
               {step === 3 && (
                 <motion.div 
                   key="step3"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.2 }}
                 >
                   <h2 className="text-2xl font-bold text-zinc-900 mb-8">Friction Analysis</h2>
                   <div className="space-y-8">
                     <div className="space-y-4">
                       {[
                         { label: "Do you validate text via OCR?", state: hasOCR, setter: setHasOCR },
                         { label: "Do you require a deposit to book?", state: hasDeposit, setter: setHasDeposit },
                         { label: "Is response time < 5 mins?", state: fastResponse, setter: setFastResponse },
                       ].map((t, i) => (
                         <div key={i} className="flex items-center justify-between p-6 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
                           <span className="font-medium text-zinc-900">{t.label}</span>
                           <button 
                             onClick={() => t.setter(!t.state)}
                             className={`w-12 h-7 rounded-full relative transition-colors ${t.state ? 'bg-zinc-900' : 'bg-zinc-200'}`}
                           >
                             <div className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm transition-all ${t.state ? 'left-6' : 'left-1'}`}></div>
                           </button>
                         </div>
                       ))}
                     </div>

                     <div className="pt-8 flex gap-4">
                       <Button variant="outline" onClick={handleBack} size="lg" className="h-12 px-8">Back</Button>
                       <Button onClick={handleNext} size="lg" className="h-12 px-8">
                         Generate Audit <RefreshCw className="ml-2" size={16} />
                       </Button>
                     </div>
                   </div>
                 </motion.div>
               )}

               {/* STEP 4: LOADING */}
               {step === 4 && (
                 <motion.div 
                   key="step4"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="flex flex-col items-center justify-center py-20"
                 >
                    <div className="w-16 h-16 border-4 border-zinc-100 border-t-zinc-900 rounded-full animate-spin mb-8"></div>
                    <p className="text-zinc-500 font-medium font-mono">CALCULATING_METRICS...</p>
                 </motion.div>
               )}

               {/* STEP 5: RESULTS */}
               {step === 5 && (
                 <motion.div 
                   key="step5"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="space-y-8"
                 >
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200 text-center">
                       <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Process Health</p>
                       <p className={`text-4xl font-bold ${metrics.efficiencyScore > 70 ? 'text-emerald-600' : 'text-orange-500'}`}>{metrics.efficiencyScore}/100</p>
                     </div>
                     <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200 text-center">
                       <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Sorting Cost</p>
                       <p className="text-4xl font-bold text-zinc-900">-{formatCurrency(metrics.annualPayrollBurn)}</p>
                     </div>
                     <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200 text-center">
                       <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Admin Drag</p>
                       <p className="text-4xl font-bold text-zinc-900">-{formatCurrency(metrics.annualLeakage)}</p>
                     </div>
                   </div>

                   <div className="bg-white border border-zinc-200 rounded-xl p-6 h-[400px]">
                     <div className="flex items-center justify-between mb-6">
                       <p className="text-sm font-bold text-zinc-900">Cumulative Cost of Inefficiency (12 Months)</p>
                       <div className="flex gap-4 text-xs">
                          <div className="flex items-center gap-2">
                             <div className="w-3 h-0.5 bg-red-500"></div>
                             <span>Manual Process</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <div className="w-3 h-0.5 bg-zinc-900"></div>
                             <span>Optimized</span>
                          </div>
                       </div>
                     </div>
                     <Chart />
                   </div>

                   <div className="flex justify-center gap-4">
                     <Button onClick={() => onNavigate?.('deploy')} size="lg" className="h-12 px-8 bg-zinc-900 hover:bg-zinc-800 text-white">Deploy Optimization</Button>
                     <Button variant="outline" size="lg" className="h-12 px-8" onClick={() => setStep(1)}>Recalculate</Button>
                   </div>
                 </motion.div>
               )}

             </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditPage;