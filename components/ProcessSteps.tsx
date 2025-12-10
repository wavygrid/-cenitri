import React from 'react';

const ProcessSteps: React.FC = () => {
  return (
    <section className="bg-white py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">Security & Compliance</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Featured Item (Spans 2 cols on Large) */}
            <div className="lg:col-span-2 group cursor-pointer">
                 <div className="aspect-[2/1] w-full bg-slate-900 mb-6 overflow-hidden rounded relative flex items-center justify-center">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900"></div>
                     {/* Abstract Shield */}
                     <svg className="w-24 h-24 text-teal-500/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/></svg>
                 </div>
                 <div className="flex items-center gap-3 mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <span>Architecture</span>
                    <span className="w-px h-3 bg-slate-300"></span>
                    <span>Secure Enclave</span>
                </div>
                <h3 className="text-2xl font-medium text-slate-900 leading-snug max-w-lg group-hover:text-medical-600 transition-colors">
                    Data processing occurs in a strictly controlled, ephemeral environment. We assume contractual liability for data security.
                </h3>
            </div>

            {/* List Items */}
            <div className="space-y-12">
                <div className="group cursor-pointer">
                     <div className="aspect-[4/3] w-full bg-slate-50 mb-6 overflow-hidden rounded relative border border-slate-100 flex items-center justify-center">
                        <div className="text-slate-200">
                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        <span>Standard</span>
                        <span className="w-px h-3 bg-slate-300"></span>
                        <span>HIPAA</span>
                    </div>
                    <h3 className="text-xl font-medium text-slate-900 leading-snug group-hover:text-medical-600 transition-colors">
                        We operate as a Business Associate under HIPAA regulations with signed BAAs for all clients.
                    </h3>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;