import React from 'react';

const CaseStudy: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-zinc-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           
           {/* Left: Text */}
           <div>
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Case Study</div>
              <h2 className="text-3xl font-bold text-navy-900 mb-8">The Q4 Revenue Sweep</h2>
              
              <div className="space-y-8">
                 <div>
                    <h4 className="font-bold text-navy-900 mb-2">The Scenario</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">A regional SNF operator with 12 facilities faced rising acuity levels but stagnant reimbursement rates. Manual audits could not keep pace with admission volume.</p>
                 </div>
                 <div>
                    <h4 className="font-bold text-navy-900 mb-2">The Deployment</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">Centurim initiated a retrospective audit of October and November closed files. The engine processed 150 transfer packets in under 4 hours.</p>
                 </div>
                 <div>
                    <h4 className="font-bold text-navy-900 mb-2">The Outcome</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">The system identified missed NTA components in 14 percent of admissions. The facility corrected the claims within the submission window. This resulted in a verified revenue uplift without increasing patient volume.</p>
                 </div>
              </div>
           </div>

           {/* Right: Chart */}
           <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8 md:p-12">
              <h3 className="text-sm font-bold text-zinc-900 text-center mb-10">Revenue Per Patient Day (PPD)</h3>
              
              <div className="flex justify-center items-end gap-12 h-64">
                 
                 {/* Bar 1 */}
                 <div className="flex flex-col items-center gap-4 w-24 group">
                    <div className="text-zinc-500 font-bold">$480</div>
                    <div className="w-full bg-zinc-300 rounded-t-sm h-32 transition-all group-hover:bg-zinc-400"></div>
                    <div className="text-xs font-bold text-zinc-400 uppercase">Original Claim</div>
                 </div>

                 {/* Bar 2 */}
                 <div className="flex flex-col items-center gap-4 w-24 group">
                    <div className="text-navy-900 font-bold">$545</div>
                    <div className="w-full bg-navy-900 rounded-t-sm h-48 relative transition-all group-hover:bg-navy-800">
                       <div className="absolute top-0 inset-x-0 h-16 bg-green-500/20 border-b border-green-500/50 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-green-700">+14%</span>
                       </div>
                    </div>
                    <div className="text-xs font-bold text-zinc-400 uppercase">Adjusted Claim</div>
                 </div>

              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudy;