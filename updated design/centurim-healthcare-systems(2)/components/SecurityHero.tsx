import React from 'react';
import { ShieldCheck, Lock, Globe, FileX } from 'lucide-react';

const SecurityHero: React.FC = () => {
  return (
    <section className="bg-white pt-32 pb-24 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 bg-slate-100 rounded-sm border border-slate-200">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
            <span className="text-[10px] font-mono font-medium text-slate-900 uppercase tracking-widest">Strict Zero Retention Policy</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-tight mb-8">
          Security as a <br/>
          <span className="text-slate-500">Clinical Standard.</span>
        </h1>
        
        <p className="text-xl text-slate-600 leading-relaxed font-light mb-12 max-w-2xl mx-auto">
          Centurim minimizes liability through a Secure Enclave architecture designed for data ephemeralization, strict US residency, and Zero AI Training on sensitive data.
        </p>

        {/* Trust Indicators - Simple Text/Icon Row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-slate-900" strokeWidth={1.5} />
                <span className="text-sm font-medium text-slate-900">HIPAA Business Associate</span>
            </div>
            <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-slate-900" strokeWidth={1.5} />
                <span className="text-sm font-medium text-slate-900">Data Sovereign (US Only)</span>
            </div>
             <div className="flex items-center gap-3">
                <FileX className="w-5 h-5 text-slate-900" strokeWidth={1.5} />
                <span className="text-sm font-medium text-slate-900">Zero AI Training</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SecurityHero;