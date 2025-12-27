import React from 'react';
import { ArrowRight, GitCommit, Calculator } from 'lucide-react';

export const AutomationLogic: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-stone-50 border-y border-stone-200" id="automation" aria-labelledby="automation-logic">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            
            <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-white border border-stone-200 flex items-center justify-center font-semibold text-xl shadow-sm">2</div>
                    <span className="text-sm leading-normal font-medium uppercase tracking-wide text-stone-600">Automate & Price</span>
                </div>

                <h2 id="automation-logic" className="text-3xl md:text-4xl font-bold leading-tight text-stone-900 mb-6">
                    Logic that protects <br/>your profit.
                </h2>
                <p className="text-base leading-relaxed text-stone-700 mb-8">
                    Stop giving free quotes. Our <strong>Algorithmic Pricing Engine</strong> calculates price ranges instantly based on your rules (drive time, job type, demand).
                </p>
                <p className="text-base leading-relaxed text-stone-700 mb-8">
                    It filters out the "tyre kickers" so you only talk to customers who have seen the price and are ready to pay.
                </p>
            </div>

            {/* Visual: Workflow Node */}
            <div className="md:w-1/2 w-full">
                <div className="bg-white rounded-3xl p-8 shadow-card border border-stone-200 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-900 text-white px-4 py-1 rounded-full text-xs leading-normal font-medium uppercase tracking-wide">
                        Workflow Logic
                    </div>

                    <div className="space-y-6 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-6 top-8 bottom-8 w-1 bg-stone-100"></div>

                        {/* Node 1 */}
                        <div className="relative pl-16">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 bg-stone-50 border border-stone-200 rounded-full flex items-center justify-center z-10">
                                <GitCommit className="h-5 w-5 text-stone-400" />
                            </div>
                            <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
                                <p className="text-xs leading-normal font-medium text-stone-600 uppercase mb-1">Trigger</p>
                                <p className="font-semibold leading-snug text-stone-900">Customer requests "Panel Upgrade"</p>
                            </div>
                        </div>

                        {/* Node 2 */}
                        <div className="relative pl-16">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 bg-brand-50 border border-brand-200 rounded-full flex items-center justify-center z-10">
                                <Calculator className="h-5 w-5 text-brand-500" />
                            </div>
                            <div className="bg-brand-50 p-4 rounded-xl border border-brand-100">
                                <p className="text-xs leading-normal font-medium text-brand-600 uppercase mb-1">Action: Calculate Price</p>
                                <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-brand-100 mt-2">
                                    <span className="text-sm leading-normal font-mono text-stone-700">Base + (Miles * $2)</span>
                                    <span className="font-semibold leading-snug text-stone-900">$2,400 - $3,100</span>
                                </div>
                            </div>
                        </div>

                         {/* Node 3 */}
                         <div className="relative pl-16">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 bg-green-50 border border-green-200 rounded-full flex items-center justify-center z-10">
                                <ArrowRight className="h-5 w-5 text-green-600" />
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                <p className="text-xs leading-normal font-medium text-green-700 uppercase mb-1">Action: Book & Deposit</p>
                                <p className="font-semibold leading-snug text-green-900">Collect $50.00 Deposit</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};