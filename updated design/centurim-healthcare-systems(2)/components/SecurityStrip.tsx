import React from 'react';

// Custom Minimalist Icons

const IconHIPAA = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    {/* Staff */}
    <path d="M12 4v16" strokeLinecap="round" />
    {/* Wings */}
    <path d="M12 9c-2.5-2-5.5-1.5-5.5 1 0 1.5 2 2.5 3 3" strokeLinecap="round" />
    <path d="M12 9c2.5-2 5.5-1.5 5.5 1 0 1.5-2 2.5-3 3" strokeLinecap="round" />
    {/* Snakes */}
    <path d="M12 18c-2.5 0-4-1.5-4-3 0-2 4-3 4-6" strokeLinecap="round" />
    <path d="M12 18c2.5 0 4-1.5 4-3 0-2-4-3-4-6" strokeLinecap="round" />
    {/* Top */}
    <circle cx="12" cy="3" r="1.5" />
  </svg>
);

const IconAES = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
    <path d="M9 11h6v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4z" />
    <path d="M10 11V9a2 2 0 1 1 4 0v2" />
  </svg>
);

const IconZDR = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
    {/* Zero symbol */}
    <circle cx="12" cy="11" r="3" />
    <path d="M14 9l-4 4" />
  </svg>
);

const IconSovereignty = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" strokeLinejoin="round" />
    {/* Grid/Map lines symbolizing Sovereignty */}
    <path d="M9 12h6" strokeLinecap="round" />
    <path d="M9 15h6" strokeLinecap="round" />
    <path d="M9 18h4" strokeLinecap="round" />
  </svg>
);

const SecurityStrip: React.FC = () => {
    return (
        <section className="bg-slate-50 border-b border-slate-200 py-6 md:py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    
                    {/* Item 1 */}
                    <div className="flex items-center gap-4 justify-start group cursor-default">
                        <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg text-slate-900 shadow-sm flex items-center justify-center group-hover:border-slate-300 transition-colors">
                            <IconHIPAA className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Architecture</span>
                            <span className="text-xs md:text-sm font-bold text-slate-900 leading-tight">HIPAA Compliant</span>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center gap-4 justify-start group cursor-default">
                        <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg text-slate-900 shadow-sm flex items-center justify-center group-hover:border-slate-300 transition-colors">
                            <IconAES className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Standard</span>
                            <span className="text-xs md:text-sm font-bold text-slate-900 leading-tight">AES-256 Encrypted</span>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center gap-4 justify-start group cursor-default">
                        <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg text-slate-900 shadow-sm flex items-center justify-center group-hover:border-slate-300 transition-colors">
                            <IconZDR className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Policy</span>
                            <span className="text-xs md:text-sm font-bold text-slate-900 leading-tight">Zero Data Retention</span>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-center gap-4 justify-start group cursor-default">
                        <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg text-slate-900 shadow-sm flex items-center justify-center group-hover:border-slate-300 transition-colors">
                            <IconSovereignty className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Residency</span>
                            <span className="text-xs md:text-sm font-bold text-slate-900 leading-tight">US Data Sovereignty</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SecurityStrip;