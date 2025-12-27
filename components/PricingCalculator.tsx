import React, { useState } from 'react';

export const PricingCalculator: React.FC = () => {
  const [avgJobValue, setAvgJobValue] = useState(450);
  const [missedCalls, setMissedCalls] = useState(4);

  // Logic: Assume 50% of missed calls would have converted
  const recoveredMonthly = Math.round(avgJobValue * missedCalls * 0.5);
  const annualRecovered = recoveredMonthly * 12;

  return (
    <section id="roi" className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200" aria-labelledby="roi-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center mb-12">
            <h2 id="roi-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-4">Revenue Recovery Projection</h2>
            <p className="text-lg leading-relaxed text-slate-700">
                Estimate the financial impact of missed operational opportunities.
            </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Inputs */}
                <div className="p-10 border-b lg:border-b-0 lg:border-r border-slate-100">
                    <h3 className="text-sm leading-normal font-semibold uppercase tracking-wide text-slate-600 mb-8">Operational Metrics</h3>

                    <div className="space-y-10">
                        <div>
                            <div className="flex justify-between mb-4">
                                <label className="font-semibold text-slate-900">Average Job Profit</label>
                                <div className="bg-slate-100 px-3 py-1 rounded text-sm leading-normal font-mono font-semibold text-slate-900">${avgJobValue}</div>
                            </div>
                            <input
                               type="range"
                               min="100"
                               max="2000"
                               step="50"
                               value={avgJobValue}
                               onChange={(e) => setAvgJobValue(parseInt(e.target.value))}
                               className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                            />
                            <p className="text-xs leading-normal text-slate-600 mt-2">Net profit per completed service call.</p>
                        </div>

                        <div>
                            <div className="flex justify-between mb-4">
                                <label className="font-semibold text-slate-900">Missed Inquiries / Month</label>
                                <div className="bg-slate-100 px-3 py-1 rounded text-sm leading-normal font-mono font-semibold text-slate-900">{missedCalls} calls</div>
                            </div>
                             <input
                               type="range"
                               min="1"
                               max="30"
                               value={missedCalls}
                               onChange={(e) => setMissedCalls(parseInt(e.target.value))}
                               className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                            />
                             <p className="text-xs leading-normal text-slate-600 mt-2">Calls sent to voicemail or emails not replied to within 1 hour.</p>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="p-10 bg-slate-50 flex flex-col justify-center">
                   <div className="mb-8">
                       <span className="block text-xs leading-normal font-medium uppercase text-slate-600 mb-2">Estimated Monthly Loss</span>
                       <span className="block text-4xl font-bold text-slate-900">${recoveredMonthly.toLocaleString()}</span>
                   </div>

                   <div className="mb-8">
                       <span className="block text-xs leading-normal font-medium uppercase text-slate-600 mb-2">Annual Revenue Opportunity</span>
                       <span className="block text-5xl md:text-6xl font-bold text-teal-600">${annualRecovered.toLocaleString()}</span>
                   </div>

                   <p className="text-sm leading-relaxed text-slate-700 border-t border-slate-200 pt-6">
                      By automating response times, the Centurim OS is designed to capture roughly 50% of these missed opportunities.
                      <strong className="block mt-2 text-slate-900">The platform pays for itself with ~1 recovered job.</strong>
                   </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
