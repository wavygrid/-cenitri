import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => {
  return (
    <section className="bg-medical-600 py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             
             <div className="space-y-8">
                 <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
                    Equip Your Team with <br/> Audit Ready Precision.
                 </h2>
                 <p className="text-lg text-white/80 max-w-md leading-relaxed">
                    The tools you use define the revenue you capture. Upgrade your audit workflow today.
                 </p>
                 <div className="pt-4">
                    <button 
                        onClick={onNavigate}
                        className="flex items-center gap-2 text-xs font-bold text-slate-900 bg-white border border-white px-8 py-4 rounded-full hover:bg-slate-50 transition-colors"
                    >
                        Request Pilot Access <ArrowRight size={14} />
                    </button>
                 </div>
             </div>

             {/* Circular Visual Element */}
             <div className="relative">
                 <div className="aspect-square w-full max-w-sm mx-auto bg-slate-900 rounded-full overflow-hidden relative">
                     <div className="absolute inset-0 bg-slate-800 opacity-50"></div>
                     <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                 </div>
             </div>

         </div>
      </div>
    </section>
  );
};

export default FinalCTA;