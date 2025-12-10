import React from 'react';
import { ArrowRight } from 'lucide-react';

const PricingPlans: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => {
  return (
    <section className="bg-white py-16 border-t border-slate-200">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-center text-4xl md:text-5xl font-medium text-slate-900 mb-20 max-w-2xl mx-auto tracking-tight leading-tight">
            Start finding the lost revenue.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Reconciliation Plan */}
            <div className="bg-slate-50/50 border border-slate-100 p-6 md:p-10 lg:p-12 rounded-2xl flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-3xl font-medium text-slate-900 tracking-tight mb-2">Reconciliation</h3>
                    <p className="text-lg text-slate-500 mb-8 font-light">Validate revenue baseline on closed claims</p>
                    
                    <div className="border-b border-slate-200 pb-8 mb-8">
                        <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-light text-slate-900 tracking-tighter">$495</span>
                            <span className="text-lg text-slate-500 font-normal">/batch</span>
                        </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-10">
                        A forensic audit of 10 closed patient records to identify missed NTA comorbidities and Section GG variances within the 12 month modification window. Ideal for proving ROI.
                    </p>

                    <div className="bg-slate-100/80 rounded-xl p-6 mb-8">
                        <p className="text-xs font-bold text-slate-900 uppercase mb-4 tracking-wide">This plan includes :</p>
                        <ul className="space-y-4">
                            {[
                                "Forensic analysis of 10 closed records",
                                "Citation backed variance reporting",
                                "NTA and Section GG capture",
                                "Zero retention data destruction"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <button 
                    onClick={onNavigate}
                    className="w-full bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold py-4 rounded-full transition-colors text-sm"
                >
                    Start Your Audit Now
                </button>
            </div>

             {/* Monthly Revenue Integrity Plan */}
             <div className="bg-medical-50/30 border border-medical-100/50 p-6 md:p-10 lg:p-12 rounded-2xl flex flex-col justify-between h-full relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-3xl font-medium text-slate-900 tracking-tight mb-2">Monthly Revenue Integrity</h3>
                    <p className="text-lg text-slate-500 mb-8 font-light">Real time defense for active admissions</p>
                    
                    <div className="border-b border-slate-200 pb-8 mb-8">
                        <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-light text-slate-900 tracking-tighter">$1,850</span>
                            <span className="text-lg text-slate-500 font-normal">/month</span>
                        </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-10">
                        Ongoing clinical documentation integrity for a single facility. We audit every new admission prior to MDS submission to prevent coding drift and mitigate audit risk.
                    </p>

                    <div className="bg-medical-50/50 rounded-xl p-6 mb-8 border border-medical-50">
                        <p className="text-xs font-bold text-slate-900 uppercase mb-4 tracking-wide">This plan includes :</p>
                        <ul className="space-y-4">
                            {[
                                "Coverage for up to 40 admissions",
                                "Overnight turnaround for 8 AM delivery",
                                "Dedicated audit support channel",
                                "Quarterly impact analysis reports"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <button 
                    onClick={onNavigate}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-full transition-colors text-sm relative z-10"
                >
                    Start Your Audit Now
                </button>
            </div>

        </div>

       </div>
    </section>
  );
};

export default PricingPlans;