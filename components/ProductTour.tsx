import React, { useState, useEffect, useRef } from 'react';
import { 
  LayoutGrid, 
  FilePlus, 
  Settings, 
  CreditCard, 
  LogOut, 
  Search, 
  User, 
  ChevronRight, 
  Check, 
  FileText, 
  X, 
  ShieldCheck, 
  Lock, 
  AlertTriangle,
  ArrowUpRight,
  Trash2,
  FileBadge,
  Bell,
  Clock,
  MoreHorizontal,
  ChevronLeft,
  Menu,
  Play,
  RotateCcw,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

// --- TOUR DATA & TYPES ---

type TourStepData = {
  id: string;
  title: string;
  description: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  ctaLabel?: string;
  triggerNext?: boolean;
};

const TOUR_STEPS: TourStepData[] = [
  {
    id: 'tour-step-0',
    title: 'Revenue Integrity Dashboard',
    description: 'Monitor recovered revenue and real-time financial impact across all facilities at a glance.',
    position: 'bottom',
  },
  {
    id: 'tour-step-1',
    title: 'New Audit Request',
    description: 'Start a new clinical analysis workflow by clicking here.',
    position: 'left',
  },
  {
    id: 'tour-step-2',
    title: 'Patient Identifier',
    description: 'Enter the Room Number or Internal Case ID. All data is processed in a HIPAA-compliant environment.',
    position: 'bottom',
  },
  {
    id: 'tour-step-3',
    title: 'Clinical Transfer Packet',
    description: 'Upload the full medical record (PDF). This contains the clinical evidence we analyze.',
    position: 'top',
  },
  {
    id: 'tour-step-4',
    title: 'MDS / Claim File',
    description: 'Upload the corresponding MDS 3.0 or UB-04 file to cross-reference against the clinical notes.',
    position: 'top',
  },
  {
    id: 'tour-step-5',
    title: 'Initiate Analysis',
    description: 'Run the Centurim AI Engine to detect variances between the clinical evidence and the coded claim.',
    position: 'top',
  },
  {
    id: 'tour-step-6',
    title: 'Audit Queued',
    description: 'Your audit has been securely added to the processing workload. You can now return to the dashboard.',
    position: 'bottom',
  },
  {
    id: 'tour-step-7',
    title: 'Review Ready',
    description: 'The analysis is complete. The status is "Review Ready". Click "View Report" to see the findings.',
    position: 'bottom',
  },
  {
    id: 'tour-step-8',
    title: 'Report Overview',
    description: 'View the estimated revenue impact and total findings for this specific patient case.',
    position: 'bottom',
  },
  {
    id: 'tour-step-9',
    title: 'Variance Findings',
    description: 'Review specific discrepancies. Here we found Sepsis documented in the notes but missing from the claim.',
    position: 'bottom',
  },
  {
    id: 'tour-step-10',
    title: 'Compliance Flags',
    description: 'We automatically flag "Overcoding" risks where claims exceed supported documentation, protecting you from audits.',
    position: 'top',
  },
  {
    id: 'tour-step-11',
    title: 'Ready to Audit',
    description: 'Mark findings as reviewed or download the PDF report. You are ready to streamline your revenue integrity.',
    position: 'left',
    ctaLabel: 'Start Your Audit Now'
  }
];

// --- START OVERLAY COMPONENT ---

const StartTourOverlay = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/30 backdrop-blur-[1px] animate-in fade-in duration-500 rounded-b-xl">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-white/50 max-w-sm md:max-w-lg w-full text-center relative overflow-hidden group mx-4">
        {/* Background Blob decoration */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20 mb-6 md:mb-8 transform group-hover:scale-105 transition-transform duration-500">
             <Play className="w-6 h-6 md:w-8 md:h-8 fill-current ml-1" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4 tracking-tight">Product Tour</h2>
          <p className="text-slate-500 mb-8 md:mb-10 text-base md:text-lg leading-relaxed">
            Experience how Centurim automates revenue integrity auditing with clinical precision.
          </p>
          
          <button 
            onClick={onStart}
            className="w-full py-3 md:py-4 bg-slate-900 text-white font-bold rounded-xl text-base md:text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
          >
            Start Demo Tour <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- TOUR OVERLAY COMPONENT ---

const TourOverlay = ({ 
  currentStepIndex, 
  onNext,
  onClose,
  onRestart,
  containerRef
}: { 
  currentStepIndex: number, 
  onNext: () => void,
  onClose: () => void,
  onRestart: () => void,
  containerRef: React.RefObject<HTMLDivElement>
}) => {
  const [targetRect, setTargetRect] = useState<{ top: number, left: number, width: number, height: number } | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const stepData = TOUR_STEPS[currentStepIndex];

  // Measure Container
  useEffect(() => {
    const updateContainerSize = () => {
        if (containerRef.current) {
            const { width, height } = containerRef.current.getBoundingClientRect();
            setContainerSize({ width, height });
        }
    };
    updateContainerSize();
    
    // Create observer for container resize
    if (containerRef.current) {
        const resizeObserver = new ResizeObserver(() => {
             updateContainerSize();
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }
  }, [containerRef]);

  // Poll for the element & Calculate Relative Position
  useEffect(() => {
    let animationFrameId: number;
    
    const updateRect = () => {
      const element = document.getElementById(stepData.id);
      const container = containerRef.current;
      
      if (element && container) {
        const elRect = element.getBoundingClientRect();
        const contRect = container.getBoundingClientRect();
        
        // Calculate position relative to the container
        const relativeTop = elRect.top - contRect.top;
        const relativeLeft = elRect.left - contRect.left;
        
        setTargetRect((prev) => {
          if (!prev) return { top: relativeTop, left: relativeLeft, width: elRect.width, height: elRect.height };
          
          if (
            Math.abs(prev.top - relativeTop) > 1 || 
            Math.abs(prev.left - relativeLeft) > 1 || 
            Math.abs(prev.width - elRect.width) > 1 || 
            Math.abs(prev.height - elRect.height) > 1
          ) {
            return { top: relativeTop, left: relativeLeft, width: elRect.width, height: elRect.height };
          }
          return prev;
        });
      }
      animationFrameId = requestAnimationFrame(updateRect);
    };

    // Initial scroll - only if needed and with 'nearest' to avoid shaking the whole page
    const element = document.getElementById(stepData.id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }

    updateRect();
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [stepData.id, containerRef]);

  if (!targetRect || containerSize.width === 0) return null;

  // --- SMART POSITIONING LOGIC ---

  const isMobile = containerSize.width < 768;
  const padding = 8; 
  
  // Spotlight Dimensions (Relative to Container)
  const spotlightStyle = {
    top: targetRect.top - padding,
    left: targetRect.left - padding,
    width: targetRect.width + (padding * 2),
    height: targetRect.height + (padding * 2),
    borderRadius: '12px',
  };

  // Card Dimensions
  const cardWidth = isMobile ? containerSize.width - 32 : 440; 
  const cardHeight = 200; 
  const gap = 20; 

  // Initial Preferred Coords for Desktop
  let preferredTop = 0;
  let preferredLeft = 0;
  
  const centerX = spotlightStyle.left + spotlightStyle.width / 2;
  const centerY = spotlightStyle.top + spotlightStyle.height / 2;

  if (stepData.position === 'bottom') {
    preferredTop = spotlightStyle.top + spotlightStyle.height + gap;
    preferredLeft = centerX - (cardWidth / 2);
  } else if (stepData.position === 'top') {
    preferredTop = spotlightStyle.top - cardHeight - gap;
    preferredLeft = centerX - (cardWidth / 2);
  } else if (stepData.position === 'left') {
    preferredTop = centerY - (cardHeight / 2);
    preferredLeft = spotlightStyle.left - cardWidth - gap;
  } else if (stepData.position === 'right') {
    preferredTop = centerY - (cardHeight / 2);
    preferredLeft = spotlightStyle.left + spotlightStyle.width + gap;
  }

  // --- CLAMPING ENGINE (Container Bounds) ---
  const margin = 16;
  
  // Clamp Left
  let finalLeft = Math.max(margin, Math.min(preferredLeft, containerSize.width - cardWidth - margin));
  
  // Clamp Top
  let finalTop = preferredTop;
  const minTop = margin;
  const maxTop = containerSize.height - cardHeight - margin;

  if (finalTop < minTop) finalTop = minTop;
  if (finalTop > maxTop) finalTop = maxTop;
  
  // --- MOBILE SPECIFIC LOGIC ---
  // If target is in the bottom half of the screen, show card at top.
  // If target is in the top half, show card at bottom.
  
  const targetCenterY = targetRect.top + (targetRect.height / 2);
  const isTargetInBottomHalf = targetCenterY > (containerSize.height * 0.55);

  const mobileStyle = isMobile ? {
      ...(isTargetInBottomHalf 
          ? { top: margin, bottom: 'auto' } // Target is low, put card high
          : { bottom: margin, top: 'auto' } // Target is high, put card low
        ),
      left: margin,
      right: margin,
      width: 'auto',
      maxHeight: '40%' // Prevent occlusion
  } : {
      top: finalTop, 
      left: finalLeft, 
      width: cardWidth 
  };

  return (
    <div className="absolute inset-0 z-[100] pointer-events-none overflow-hidden rounded-b-xl">
      {/* Spotlight */}
      <div 
        className="absolute transition-all duration-500 ease-in-out shadow-[0_0_0_9999px_rgba(15,23,42,0.85)] border-2 border-white/30"
        style={spotlightStyle}
      >
        <div className="absolute inset-0 -m-1 border border-blue-400/60 rounded-xl animate-pulse"></div>
        {/* Dot on target */}
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Instruction Card */}
      <div 
        className={`absolute pointer-events-auto transition-all duration-500 ease-in-out flex flex-col`}
        style={mobileStyle}
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-5 md:p-6 flex flex-col gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-start">
             <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shrink-0">
               {currentStepIndex + 1}
             </div>
             <button onClick={onClose} className="text-slate-400 hover:text-slate-700 transition-colors p-1 hover:bg-slate-100 rounded-full">
               <X className="w-5 h-5" />
             </button>
          </div>
          
          <div className="overflow-y-auto max-h-[120px] md:max-h-[160px] scrollbar-hide pr-1">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1.5 font-sans tracking-tight">{stepData.title}</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
              {stepData.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-100/50 mt-1 shrink-0">
            <div className="flex gap-1.5 items-center">
               {TOUR_STEPS.map((_, idx) => (
                 <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentStepIndex ? 'bg-blue-600 scale-125' : 'bg-slate-200'}`} />
               ))}
            </div>
            
            {stepData.ctaLabel ? (
               <div className="flex gap-2">
                 <button 
                   onClick={onRestart}
                   className="w-9 h-9 flex items-center justify-center bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors shadow-sm"
                   title="Retake Tour"
                 >
                   <RotateCcw className="w-4 h-4" />
                 </button>
                 <button 
                   onClick={onClose} 
                   className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
                 >
                   {stepData.ctaLabel}
                 </button>
               </div>
            ) : (
               <button 
                onClick={onNext}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-md"
              >
                Next Step
              </button>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: MOBILE BOTTOM NAV ---

const MobileBottomNav = ({ activePage, onViewChange }: { activePage: string, onViewChange: (v: any) => void }) => {
  return (
    <div className="md:hidden absolute bottom-0 left-0 right-0 h-[64px] bg-white border-t border-slate-200 flex items-center justify-around z-40 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.03)] px-2 rounded-b-xl">
      <button 
        onClick={() => onViewChange('dashboard')}
        className={`flex-1 flex flex-col items-center justify-center h-full gap-1 active:scale-95 transition-transform ${activePage === 'dashboard' || activePage === 'report' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
      >
        <LayoutGrid className={`w-5 h-5 ${activePage === 'dashboard' || activePage === 'report' ? 'fill-slate-100' : ''}`} strokeWidth={2} />
        <span className="text-[9px] font-bold uppercase tracking-wide">Home</span>
      </button>

      <div className="relative -top-5">
        <button 
            onClick={() => onViewChange('new_audit')}
            className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-xl shadow-slate-900/20 active:scale-90 transition-all border-4 border-slate-50 ${activePage === 'new_audit' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'}`}
        >
            <FilePlus className="w-5 h-5" />
        </button>
      </div>

      <button 
        onClick={() => {}} 
        className={`flex-1 flex flex-col items-center justify-center h-full gap-1 active:scale-95 transition-transform ${activePage === 'settings' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
      >
        <Settings className="w-5 h-5" strokeWidth={2} />
        <span className="text-[9px] font-bold uppercase tracking-wide">Settings</span>
      </button>
    </div>
  );
};

// --- COMPONENT: SIDEBAR ---

const Sidebar = ({ activePage, onViewChange, mobileOpen, setMobileOpen }: { activePage: string, onViewChange: (v: any) => void, mobileOpen: boolean, setMobileOpen: (v: boolean) => void }) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          className="absolute inset-0 bg-slate-900/50 z-40 md:hidden rounded-b-xl"
          onClick={() => setMobileOpen(false)}
        />
      )}
      
      {/* Sidebar Container - WHITE THEME */}
      <div className={`absolute inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 text-slate-900 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} rounded-l-xl`}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-slate-100">
             <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-slate-200">
               <span className="text-white font-bold text-lg">C</span>
             </div>
             <div>
                <span className="text-base font-bold tracking-tight block leading-none text-slate-900">CENTURIM</span>
                <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Revenue Integrity</span>
             </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 p-3 space-y-1">
            <div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">WORKLIST</div>
            <button 
              onClick={() => { onViewChange('dashboard'); setMobileOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs font-medium rounded-lg transition-colors ${activePage === 'dashboard' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <LayoutGrid className="w-4 h-4" />
              Dashboard
            </button>
            <button 
              onClick={() => { onViewChange('new_audit'); setMobileOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs font-medium rounded-lg transition-colors ${activePage === 'new_audit' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <FilePlus className="w-4 h-4" />
              New Audit Request
            </button>
            <button 
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs font-medium rounded-lg transition-colors text-slate-500 hover:bg-slate-50 hover:text-slate-900`}
            >
              <CreditCard className="w-4 h-4" />
              Billing & Credits
            </button>

            <div className="px-3 py-2 mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">SYSTEM</div>
            <button 
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs font-medium rounded-lg transition-colors text-slate-500 hover:bg-slate-50 hover:text-slate-900`}
            >
              <Settings className="w-4 h-4" />
              System Settings
            </button>
          </nav>

          {/* User */}
          <div className="p-4 border-t border-slate-100 bg-white rounded-bl-xl">
            <div className="flex items-center gap-3 px-2">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200 font-bold text-xs">
                WM
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-900 truncate">Wickie M.</p>
                <p className="text-[10px] text-slate-500">Admin</p>
              </div>
            </div>
            <div className="mt-3 px-2">
                <div className="text-[10px] font-bold text-blue-600 mb-2">12 Credits Available</div>
                <button className="flex items-center gap-2 text-[10px] font-bold text-red-500 hover:text-red-600">
                    <LogOut className="w-3 h-3" /> Sign Out
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// --- COMPONENT: DASHBOARD VIEW ---

const DashboardView = ({ showNewRow, onNewAudit, onViewReport, setMobileOpen }: { showNewRow: boolean, onNewAudit: () => void, onViewReport: () => void, setMobileOpen: (v: boolean) => void }) => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50/50">
      {/* Header */}
      <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-4 lg:px-8 shrink-0">
        <div className="flex items-center gap-3 flex-1">
          <button onClick={() => setMobileOpen(true)} className="md:hidden text-slate-500">
            <Menu className="w-5 h-5" />
          </button>
          <div className="relative w-full max-w-sm hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input 
                type="text" 
                placeholder="Search..."
                className="w-full h-9 pl-9 pr-4 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
            <ShieldCheck className="w-3 h-3" />
            <span className="text-[10px] font-bold tracking-wide">HIPAA</span>
          </div>
          <button className="relative text-slate-500 hover:text-slate-900">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 lg:p-8 pb-20 md:pb-8">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* KPI Cards (Tour Step 0) */}
          <div id="tour-step-0" className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
               <div className="relative z-10 flex flex-col h-full justify-between">
                   <div className="flex justify-between items-start">
                        <div>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Revenue Impact</p>
                            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">$14,300</h3>
                            <p className="text-[10px] font-medium text-emerald-600 flex items-center gap-1">
                                <ArrowUpRight className="w-3 h-3" /> +12%
                            </p>
                        </div>
                         <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 border border-slate-100">
                           <span className="font-bold text-sm">$</span>
                       </div>
                   </div>
               </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative group hover:shadow-md transition-all">
               <div className="flex justify-between items-start h-full">
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Completed</p>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">2</h3>
                    <p className="text-[10px] text-slate-400 mt-1">Charts</p>
                  </div>
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 border border-slate-100">
                     <FileText className="w-4 h-4" />
                  </div>
               </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative group hover:shadow-md transition-all">
               <div className="flex justify-between items-start h-full">
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Credits</p>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">12</h3>
                    <p className="text-[10px] text-slate-400 mt-1">Available</p>
                  </div>
                   <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 border border-slate-100">
                     <CreditCard className="w-4 h-4" />
                  </div>
               </div>
            </div>
            
            {/* New Audit Action Card */}
            <button 
              id="tour-step-1"
              onClick={onNewAudit}
              className="md:col-span-1 bg-slate-900 p-5 rounded-xl shadow-lg hover:bg-slate-800 transition-all flex flex-col items-center justify-center text-center group cursor-pointer border border-slate-900"
            >
                <div className="w-10 h-10 rounded-full border-2 border-slate-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform group-hover:border-slate-500">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-bold text-xs">New Audit Request</span>
            </button>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden min-h-[300px]">
            <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3">
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-900" />
                    <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Recent Audits <span className="ml-1 px-1.5 py-0.5 bg-slate-100 rounded-full text-slate-600 text-[10px]">5</span></h2>
                </div>
                <div className="relative w-full sm:w-56">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                    <input type="text" placeholder="Filter..." className="w-full h-8 pl-8 pr-3 bg-white border border-slate-200 rounded-lg text-[10px] focus:ring-1 focus:ring-blue-500 outline-none" />
                </div>
            </div>
            
            <div className="overflow-x-auto scrollbar-hide">
                <table className="w-full text-left text-xs min-w-[700px]">
                <thead className="bg-slate-50/50 border-b border-slate-200 text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                    <tr>
                    <th className="px-6 py-3 w-8">
                        <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                    </th>
                    <th className="px-6 py-3">PATIENT REFERENCE</th>
                    <th className="px-6 py-3">DATE</th>
                    <th className="px-6 py-3">RISK</th>
                    <th className="px-6 py-3">FINDINGS</th>
                    <th className="px-6 py-3">STATUS</th>
                    <th className="px-6 py-3 text-right">ACTION</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    
                    {/* Simulated New Row (Tour Step 7) */}
                    {showNewRow && (
                    <tr 
                        id="tour-step-7" 
                        className="group bg-white hover:bg-slate-50 cursor-pointer transition-colors"
                        onClick={onViewReport}
                    >
                        <td className="px-6 py-3">
                            <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" checked readOnly />
                        </td>
                        <td className="px-6 py-3">
                        <div className="font-bold text-slate-900">Room 202 - Bed A</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Mercy_General_Q3_Audit.pdf</div>
                        </td>
                        <td className="px-6 py-3 text-slate-600 font-medium">8/12/2025</td>
                        <td className="px-6 py-3">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-red-50 text-red-700 border border-red-100">
                                High
                            </span>
                        </td>
                        <td className="px-6 py-3 font-bold text-slate-700">3 <span className="font-normal text-slate-500">Var.</span></td>
                        <td className="px-6 py-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase tracking-wide">
                            REVIEW READY
                        </span>
                        </td>
                        <td className="px-6 py-3 text-right">
                         <button className="text-blue-600 font-bold text-[10px] hover:underline flex items-center justify-end gap-1">
                            View <ArrowUpRight className="w-3 h-3" />
                         </button>
                        </td>
                    </tr>
                    )}

                    {/* Static Rows */}
                    <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-3"><input type="checkbox" className="rounded border-slate-300" /></td>
                        <td className="px-6 py-3">
                            <div className="font-bold text-slate-900">Unit 4 - Case 991</div>
                            <div className="text-[10px] text-slate-500 mt-0.5">Providence_Claim_992.pdf</div>
                        </td>
                        <td className="px-6 py-3 text-slate-600 font-medium">8/11/2025</td>
                        <td className="px-6 py-3">
                             <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-100">
                                Med
                            </span>
                        </td>
                        <td className="px-6 py-3 font-bold text-slate-700">1 <span className="font-normal text-slate-500">Var.</span></td>
                        <td className="px-6 py-3">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase tracking-wide">
                                REVIEW READY
                            </span>
                        </td>
                        <td className="px-6 py-3 text-right">
                            <button className="text-blue-600 font-bold text-[10px] hover:underline flex items-center justify-end gap-1">
                            View <ArrowUpRight className="w-3 h-3" />
                         </button>
                        </td>
                    </tr>

                     <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-3"><input type="checkbox" className="rounded border-slate-300" /></td>
                        <td className="px-6 py-3">
                            <div className="font-bold text-slate-900">Ref: 2025-0512</div>
                            <div className="text-[10px] text-slate-500 mt-0.5">Sutter_Batch_Upload_04.pdf</div>
                        </td>
                        <td className="px-6 py-3 text-slate-600 font-medium">8/10/2025</td>
                        <td className="px-6 py-3">-</td>
                        <td className="px-6 py-3 text-slate-400">-</td>
                        <td className="px-6 py-3">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wide">
                                PROCESSING
                            </span>
                        </td>
                        <td className="px-6 py-3 text-right">
                           <MoreHorizontal className="w-4 h-4 text-slate-400 ml-auto" />
                        </td>
                    </tr>
                    
                    <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-3"><input type="checkbox" className="rounded border-slate-300" /></td>
                        <td className="px-6 py-3">
                            <div className="font-bold text-slate-900">Room 105</div>
                            <div className="text-[10px] text-slate-500 mt-0.5">Kaiser_Audit_Record_X.pdf</div>
                        </td>
                        <td className="px-6 py-3 text-slate-600 font-medium">8/1/2025</td>
                        <td className="px-6 py-3">-</td>
                        <td className="px-6 py-3 font-bold text-slate-700">5 <span className="font-normal text-slate-500">Var.</span></td>
                        <td className="px-6 py-3">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-500 border border-slate-200 uppercase tracking-wide">
                                PURGED
                            </span>
                        </td>
                        <td className="px-6 py-3 text-right">
                            <span className="text-[10px] text-slate-400 font-bold uppercase">Purged</span>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- COMPONENT: NEW AUDIT VIEW ---

const NewAuditView = ({ onComplete, onCancel, tourStep, onNextTourStep }: { onComplete: () => void, onCancel: () => void, tourStep: number, onNextTourStep: () => void }) => {
  const [patientId, setPatientId] = useState('');
  
  // Auto-fill effects for tour
  useEffect(() => {
    if (tourStep >= 3) {
        setPatientId('Room 202');
    }
  }, [tourStep]);

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50">
      {/* Header */}
      <header className="h-16 bg-blue-900 text-white flex items-center justify-between px-6 shrink-0 shadow-md relative z-10">
        <div className="flex flex-col">
           <h1 className="text-lg font-bold tracking-tight">NEW AUDIT REQUEST</h1>
           <p className="text-[10px] text-blue-200">Secure Clinical Data Upload</p>
        </div>
        <button onClick={onCancel} className="text-blue-200 hover:text-white transition-colors">
            <X className="w-5 h-5" />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-20 md:pb-8 flex justify-center">
        <div className="max-w-2xl w-full space-y-6">
          
          {/* Step 1: Patient ID */}
          <div id="tour-step-2" className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
             <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">1. Patient Identifier</h3>
             <div className="flex items-center border border-slate-200 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 overflow-hidden h-10">
                <div className="w-10 h-full bg-slate-50 flex items-center justify-center border-r border-slate-200 text-slate-400">
                    <Lock className="w-4 h-4" />
                </div>
                <input 
                    type="text" 
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    placeholder="Enter MRN / Case ID (De-identified)" 
                    className="flex-1 h-full px-4 outline-none text-slate-900 placeholder:text-slate-400 text-sm"
                />
             </div>
          </div>

          {/* Step 2: Documentation */}
          <div>
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">2. Documentation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Clinical Packet Upload */}
                <div id="tour-step-3" className={`relative rounded-lg border-2 ${tourStep >= 4 ? 'border-emerald-500 bg-emerald-50/30' : 'border-dashed border-slate-300 bg-white'} p-6 flex flex-col items-center justify-center text-center transition-all min-h-[160px]`}>
                    {tourStep >= 4 ? (
                        <>
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                                <FileText className="w-5 h-5 text-emerald-600" />
                            </div>
                            <p className="font-bold text-slate-900 text-xs">2022, CURRENT Medical Diagnosis...</p>
                            <p className="text-[10px] text-slate-500 mt-1">Full Medical Record (PDF)</p>
                        </>
                    ) : (
                        <>
                            <p className="font-bold text-slate-900 mb-1 text-sm">Upload Clinical Packet</p>
                            <p className="text-[10px] text-slate-500 mb-3">Full Medical Record (PDF)<br/>Max Size: 50MB</p>
                        </>
                    )}
                </div>

                {/* MDS Upload */}
                <div id="tour-step-4" className={`relative rounded-lg border-2 ${tourStep >= 5 ? 'border-emerald-500 bg-emerald-50/30' : 'border-dashed border-slate-300 bg-white'} p-6 flex flex-col items-center justify-center text-center transition-all min-h-[160px]`}>
                    {tourStep >= 5 ? (
                         <>
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                                <FileText className="w-5 h-5 text-emerald-600" />
                            </div>
                            <p className="font-bold text-slate-900 text-xs">882.pdf</p>
                            <p className="text-[10px] text-slate-500 mt-1">UB-04 or MDS 3.0 (PDF)</p>
                        </>
                    ) : (
                        <>
                            <p className="font-bold text-slate-900 mb-1 text-sm">Upload Claim / MDS</p>
                            <p className="text-[10px] text-slate-500 mb-3">UB-04 or MDS 3.0 (PDF)<br/>Max Size: 50MB</p>
                        </>
                    )}
                </div>
            </div>
          </div>

          {/* Compliance Certification */}
          <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 space-y-3">
              <div className="flex items-center gap-2 mb-1">
                 <ShieldCheck className="w-4 h-4 text-blue-900" />
                 <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">COMPLIANCE CERTIFICATION</h4>
              </div>
              
              <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                      <input type="checkbox" className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 bg-white checked:border-blue-600 checked:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                      <Check className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
                  </div>
                  <span className="text-xs text-slate-600 group-hover:text-slate-900 transition-colors pt-0.5">
                      I certify all uploaded documents comply with HIPAA Safe Harbor de-identification standards.
                  </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                      <input type="checkbox" className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 bg-white checked:border-blue-600 checked:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                      <Check className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
                  </div>
                  <span className="text-xs text-slate-600 group-hover:text-slate-900 transition-colors pt-0.5">
                      I have read and agree to the Terms of Service.
                  </span>
              </label>
          </div>

          {/* Action Button */}
          <button 
             id="tour-step-5"
             onClick={() => {
                onComplete();
                if (tourStep === 5) onNextTourStep();
             }}
             className={`w-full h-12 rounded-lg font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${tourStep >= 5 ? 'bg-blue-900 text-white shadow-lg hover:bg-blue-800' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
          >
              Initiate Analysis <ChevronRight className="w-4 h-4" />
          </button>

        </div>
      </main>
    </div>
  );
};

// --- COMPONENT: QUEUED VIEW ---

const QueuedView = ({ onReturn, tourStep, onNextTourStep }: { onReturn: () => void, tourStep: number, onNextTourStep: () => void }) => {
    return (
        <div className="flex-1 flex flex-col h-full bg-slate-50 items-center justify-center p-4">
            <div id="tour-step-6" className="bg-white max-w-sm w-full p-8 rounded-xl border border-slate-200 shadow-xl text-center">
                 <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                     <Clock className="w-8 h-8 text-white" />
                 </div>
                 <h2 className="text-xl font-bold text-slate-900 mb-2">The Audit is Queued</h2>
                 <p className="text-slate-500 mb-6 text-sm">Ref ID: <span className="font-bold text-slate-900">Room 202</span> has been added to your workload.</p>

                 <button 
                    onClick={() => {
                        onReturn();
                        if (tourStep === 6) onNextTourStep();
                    }}
                    className="w-full py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors shadow-lg text-xs"
                 >
                    RETURN TO DASHBOARD
                 </button>
            </div>
            <div className="mt-6 text-center max-w-lg text-slate-400 text-[10px] leading-relaxed">
                 <strong className="text-slate-500 block mb-1 uppercase tracking-widest">Disclaimer & Limitation of Liability</strong>
                 Centurim is an automated audit assistance tool designed to support, not replace, professional clinical judgment.
            </div>
        </div>
    );
};

// --- COMPONENT: REPORT VIEW ---

const ReportView = ({ onBack, tourStep, onNextTourStep }: { onBack: () => void, tourStep: number, onNextTourStep: () => void }) => {
  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden">
      {/* Header */}
      <header id="tour-step-8" className="h-24 bg-blue-800 text-white flex items-center justify-between px-6 shrink-0 shadow-md">
        <div className="flex items-center gap-4">
           <button onClick={onBack} className="w-8 h-8 rounded-lg bg-blue-700/50 flex items-center justify-center hover:bg-blue-700 transition-colors border border-blue-600">
             <ChevronLeft className="w-4 h-4" />
           </button>
           <div>
             <div className="flex items-center gap-2 mb-0.5">
                <h1 className="text-2xl font-bold tracking-tight">Room 202 - Bed A</h1>
                <span className="bg-blue-700/50 px-2 py-0.5 rounded text-[10px] font-medium border border-blue-600 text-blue-100">Mercy_General_Q3_Audit.pdf</span>
             </div>
             <p className="text-xs text-blue-200 flex items-center gap-1.5">
                 <Clock className="w-3 h-3" /> Processed: 8/12/2025
             </p>
           </div>
        </div>
        <div className="flex items-center gap-8">
           <div className="text-right hidden sm:block">
              <p className="text-[10px] text-blue-300 font-bold uppercase tracking-widest mb-0.5">PROJECTED REVENUE</p>
              <p className="text-2xl font-bold text-emerald-400 tracking-tight">$3,780</p>
           </div>
           <div className="text-right pl-6 border-l border-blue-700">
              <p className="text-[10px] text-blue-300 font-bold uppercase tracking-widest mb-0.5">TOTAL FINDINGS</p>
              <p className="text-2xl font-bold text-white tracking-tight">3 <span className="text-sm font-normal text-blue-300">var.</span></p>
           </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 lg:p-8 pb-20 md:pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Main Findings Column */}
          <div className="lg:col-span-3 space-y-4">
             
             {/* Finding 1 */}
             <div id="tour-step-9" className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                 <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-slate-50 text-slate-600 font-bold text-xs flex items-center justify-center rounded-lg border border-slate-200">1</span>
                        <h3 className="text-base font-bold text-slate-900">Sepsis (A41.9)</h3>
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200 rounded-md uppercase tracking-wide">Undercoding</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 bg-slate-50 px-2 py-1 rounded-full border border-slate-200">
                            <div className="w-16 h-1 bg-slate-200 rounded-full overflow-hidden">
                                <div className="w-[94%] h-full bg-blue-600"></div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-700">94%</span>
                        </div>
                        <span className="text-sm font-bold text-emerald-600">+$2,400</span>
                    </div>
                 </div>
                 <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                         <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2 flex items-center gap-1.5"><FileText className="w-3 h-3 text-slate-400" /> Clinical Evidence</p>
                         <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                             <div className="flex gap-2">
                                 <div className="w-1 bg-blue-600 rounded-full shrink-0"></div>
                                 <div>
                                     <p className="text-[9px] font-bold text-slate-400 uppercase mb-0.5">Source Reference</p>
                                     <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                         "Page 4: '...started IV antibiotics for Sepsis following positive blood cultures...'"
                                     </p>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div>
                         <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2 flex items-center gap-1.5"><FileBadge className="w-3 h-3 text-slate-400" /> MDS Coding Status</p>
                         <div className="flex items-start gap-2">
                             <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                             <div>
                                 <p className="text-xs font-bold text-slate-900 mb-0.5">Section I2100: NOT CHECKED</p>
                                 <p className="text-xs text-slate-500 leading-relaxed">Condition documented but missing from MDS claim.</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

             {/* Finding 2 - OVERCODING */}
             <div id="tour-step-10" className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                 <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-slate-50 text-slate-600 font-bold text-xs flex items-center justify-center rounded-lg border border-slate-200">2</span>
                        <h3 className="text-base font-bold text-slate-900">Ventilator/Respirator</h3>
                        <span className="px-2 py-0.5 bg-red-50 text-red-700 text-[10px] font-bold border border-red-200 rounded-md uppercase tracking-wide flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" /> Overcoding
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 bg-slate-50 px-2 py-1 rounded-full border border-slate-200">
                            <div className="w-16 h-1 bg-slate-200 rounded-full overflow-hidden">
                                <div className="w-[88%] h-full bg-blue-600"></div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-700">88%</span>
                        </div>
                        <span className="flex items-center gap-1 text-[10px] font-bold text-red-600 uppercase tracking-wide border border-red-100 bg-red-50 px-2 py-1 rounded">
                            <ShieldCheck className="w-3 h-3" /> Risk
                        </span>
                    </div>
                 </div>
                 <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                         <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2 flex items-center gap-1.5"><FileText className="w-3 h-3 text-slate-400" /> Clinical Evidence</p>
                         <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                             <div className="flex gap-2">
                                 <div className="w-1 bg-blue-600 rounded-full shrink-0"></div>
                                 <div>
                                     <p className="text-[9px] font-bold text-slate-400 uppercase mb-0.5">Source Reference</p>
                                     <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                         "No ventilator use documented in chart summary or nursing notes."
                                     </p>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div>
                         <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2 flex items-center gap-1.5"><FileBadge className="w-3 h-3 text-slate-400" /> MDS Coding Status</p>
                         <div className="flex items-start gap-2">
                             <div className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
                             <div>
                                 <p className="text-xs font-bold text-slate-900 mb-0.5">Section O0100F: CHECKED</p>
                                 <p className="text-xs text-slate-500 leading-relaxed">Code present in claim but not supported by documentation.</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

              {/* Finding 3 */}
             <div className="bg-amber-50/50 rounded-xl border border-amber-200 shadow-sm overflow-hidden">
                 <div className="p-4 border-b border-amber-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-white text-slate-600 font-bold text-xs flex items-center justify-center rounded-lg border border-amber-200">3</span>
                        <h3 className="text-base font-bold text-slate-900">Depression</h3>
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200 rounded-md uppercase tracking-wide">Undercoding</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 bg-white px-2 py-1 rounded-full border border-amber-200">
                            <div className="w-16 h-1 bg-slate-200 rounded-full overflow-hidden">
                                <div className="w-[67%] h-full bg-amber-400"></div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-700">67%</span>
                        </div>
                        <span className="text-sm font-bold text-emerald-600">+$650</span>
                    </div>
                 </div>
                 <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                         <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2 flex items-center gap-1.5"><FileText className="w-3 h-3 text-slate-400" /> Clinical Evidence</p>
                         <div className="p-3 bg-white border border-amber-200 rounded-lg shadow-sm">
                             <div className="flex gap-2">
                                 <div className="w-1 bg-blue-600 rounded-full shrink-0"></div>
                                 <div>
                                     <p className="text-[9px] font-bold text-slate-400 uppercase mb-0.5">Source Reference</p>
                                     <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                         "Page 2: 'PHQ-9 score of 12 indicates moderate depression...'"
                                     </p>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div>
                         <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2 flex items-center gap-1.5"><FileBadge className="w-3 h-3 text-slate-400" /> MDS Coding Status</p>
                         <div className="flex items-start gap-2">
                             <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                             <div>
                                 <p className="text-xs font-bold text-slate-900 mb-0.5">Section D0200: NOT CHECKED</p>
                                 <p className="text-xs text-slate-500 leading-relaxed">Condition documented but missing from MDS claim.</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

          </div>

          {/* Sidebar */}
          <div id="tour-step-11" className="space-y-4">
             <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-2">Audit Actions</div>
             
             <button className="w-full py-2.5 bg-blue-900 text-white font-bold text-xs rounded-lg hover:bg-blue-800 shadow-lg flex items-center justify-center gap-2">
                 <CheckCircle2 className="w-4 h-4" /> Mark Reviewed
             </button>
             
             <button className="w-full py-2.5 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-lg hover:bg-slate-50 shadow-sm flex items-center justify-center gap-2">
                 <FileText className="w-4 h-4" /> Download PDF
             </button>

             <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-6">
                 <div className="flex items-center gap-2 mb-2">
                     <Lock className="w-3 h-3 text-slate-400" />
                     <span className="text-[10px] font-bold text-slate-900 uppercase">HIPAA Compliance</span>
                 </div>
                 <p className="text-[10px] text-slate-500 leading-relaxed">
                     This record contains ePHI. System will auto-purge data in 7 days per HIPAA Safe Harbor retention policy.
                 </p>
                 <button className="text-red-600 text-[10px] font-bold mt-3 flex items-center gap-2 hover:underline">
                     <Trash2 className="w-3 h-3" /> Delete Record Permanently
                 </button>
             </div>
          </div>

        </div>
      </main>
      
      {/* Tour Step 10 anchor (invisible) */}
      <div id="tour-step-10-anchor" className="fixed bottom-0 left-0 w-full h-1 pointer-events-none"></div>

    </div>
  );
};

// --- CONTROLLER ---

const TourApp = () => {
  const [view, setView] = useState<'dashboard' | 'new_audit' | 'queued' | 'report'>('dashboard');
  const [hasProcessed, setHasProcessed] = useState(false);
  const [tourStep, setTourStep] = useState(-1); // Start at -1 for the Start Overlay
  const [mobileOpen, setMobileOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Logic to handle next steps and view switching
  const handleNextTourStep = () => {
    const nextStep = tourStep + 1;
    
    // Step transitions
    // Step 0: Dashboard (View: dashboard)
    // Step 1: New Audit Button -> Click -> (View: new_audit)
    if (tourStep === 1) {
        setView('new_audit');
    }
    // Step 2, 3, 4: Filling out form
    // Step 5: Initiate Analysis Button -> Click -> (View: queued)
    else if (tourStep === 5) {
        setView('queued');
    }
    // Step 6: Queued Screen -> Click Return -> (View: dashboard + row)
    else if (tourStep === 6) {
        setHasProcessed(true);
        setView('dashboard');
    }
    // Step 7: Dashboard (Review Ready) -> Click Row -> (View: report)
    else if (tourStep === 7) {
        setView('report');
    }
    // Step 8, 9, 10, 11 are all in report view
    
    setTourStep(nextStep);
  };

  const handleStartTour = () => {
    setTourStep(0);
    setView('dashboard');
  };

  const handleResetTour = () => {
    setTourStep(-1);
    setView('dashboard');
    setHasProcessed(false);
  };

  const handleRestartTour = () => {
    setTourStep(0);
    setView('dashboard');
    setHasProcessed(false);
  };

  return (
    <div ref={containerRef} className="flex h-full w-full bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden rounded-b-xl">
      <Sidebar 
        activePage={view} 
        onViewChange={setView} 
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      
      {/* Views */}
      {view === 'dashboard' && (
        <DashboardView 
          showNewRow={hasProcessed} 
          onNewAudit={() => {
              if (tourStep === 1) handleNextTourStep();
              else setView('new_audit');
          }}
          onViewReport={() => {
            if (tourStep === 7) handleNextTourStep();
            setView('report');
          }}
          setMobileOpen={setMobileOpen}
        />
      )}

      {view === 'new_audit' && (
        <NewAuditView 
          onComplete={() => {}} // Handled by inline click in component
          onCancel={() => setView('dashboard')}
          tourStep={tourStep}
          onNextTourStep={handleNextTourStep}
        />
      )}

      {view === 'queued' && (
         <QueuedView 
            onReturn={() => {}} // Handled by inline click
            tourStep={tourStep}
            onNextTourStep={handleNextTourStep}
         />
      )}

      {view === 'report' && (
        <ReportView 
          onBack={() => setView('dashboard')} 
          tourStep={tourStep}
          onNextTourStep={handleNextTourStep}
        />
      )}
      
      {/* Start Overlay (When Step is -1) */}
      {tourStep === -1 && (
        <StartTourOverlay onStart={handleStartTour} />
      )}

      {/* Global Tour Overlay (When Step >= 0) */}
      {tourStep >= 0 && tourStep < TOUR_STEPS.length && (
         <TourOverlay 
           currentStepIndex={tourStep} 
           onNext={handleNextTourStep}
           onClose={handleResetTour}
           onRestart={handleRestartTour}
           containerRef={containerRef}
         />
      )}
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activePage={view} onViewChange={setView} />
    </div>
  );
};

// --- MAIN EXPORT COMPONENT (Frame) ---

const ProductTour: React.FC = () => {
  return (
    <section className="bg-white py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wide">Automated Clinical Documentation Integrity</h4>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight">
                Validate Clinical Evidence <br/> Against Billing Codes
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
                Experience the precision of automated clinical documentation integrity. Navigate the audit workflow below to see how variance is detected, cited, and resolved before submission.
            </p>
        </div>

        {/* Dashboard Mockup Frame */}
        <div className="relative rounded-2xl border border-slate-200 bg-slate-100 shadow-2xl overflow-hidden select-none">
            
            {/* Window Controls / Header (Abstract) */}
            <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                    <Search size={14} />
                    <Bell size={14} />
                </div>
            </div>

            {/* Main Interactive App Container - REDUCED SIZE */}
            <div className="flex h-[480px] md:h-[560px] relative">
                <TourApp />
            </div>
        </div>

      </div>
    </section>
  );
};

export default ProductTour;