import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">
             Stack Consolidation Analysis
           </h2>
           <p className="text-lg text-slate-600">
             Compare the cost and complexity of a fragmented SaaS stack versus the Centurim Unified OS.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* The Fragmented Stack */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
                <h3 className="text-xl font-bold text-slate-500 mb-6">Typical Fragmented Stack</h3>

                <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-slate-200">
                        <span className="text-sm text-slate-600">Hosting & CMS</span>
                        <span className="font-mono text-slate-900">$29/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-200">
                        <span className="text-sm text-slate-600">Booking Software</span>
                        <span className="font-mono text-slate-900">$45/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-200">
                        <span className="text-sm text-slate-600">CRM & Marketing</span>
                        <span className="font-mono text-slate-900">$90/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-200">
                        <span className="text-sm text-slate-600">Reputation Management</span>
                        <span className="font-mono text-slate-900">$189/mo</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-200">
                        <span className="text-sm text-slate-600">SEO Retainer (Agency)</span>
                        <span className="font-mono text-slate-900">$500/mo</span>
                    </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-300">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold uppercase text-slate-500">Total Operational Cost</span>
                        <span className="text-2xl font-bold text-slate-500 line-through decoration-red-500/50">~$853/mo</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-600 text-sm font-medium mt-4 bg-red-50 p-3 rounded-lg border border-red-100">
                        <X className="h-4 w-4" />
                        Requires manual integration & maintenance.
                    </div>
                </div>
            </div>

            {/* The Centurim Bill */}
            <div className="p-8 rounded-2xl border border-teal-200 bg-white shadow-xl shadow-teal-900/5 ring-1 ring-teal-500/10">
                <div className="inline-block bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded mb-4 uppercase">Unified Platform</div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Centurim Enterprise OS</h3>

                <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                        <span className="text-sm text-slate-700">Platform License</span>
                        <span className="text-teal-600 font-bold text-xs bg-teal-50 px-2 py-1 rounded">ALL INCLUSIVE</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                         <span className="text-sm text-slate-700">Booking Engine</span>
                        <span className="text-teal-600 font-bold text-xs bg-teal-50 px-2 py-1 rounded">ALL INCLUSIVE</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                         <span className="text-sm text-slate-700">AI Operations Agent</span>
                        <span className="text-teal-600 font-bold text-xs bg-teal-50 px-2 py-1 rounded">ALL INCLUSIVE</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                         <span className="text-sm text-slate-700">SEO & Reputation</span>
                        <span className="text-teal-600 font-bold text-xs bg-teal-50 px-2 py-1 rounded">ALL INCLUSIVE</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-100">
                         <span className="text-sm text-slate-700">Maintenance & Security</span>
                        <span className="text-teal-600 font-bold text-xs bg-teal-50 px-2 py-1 rounded">ALL INCLUSIVE</span>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold uppercase text-slate-500">Unified Monthly Rate</span>
                        <span className="text-4xl font-bold text-slate-900">$299<span className="text-sm font-medium text-slate-400">/mo</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-teal-700 text-sm font-medium mt-4 bg-teal-50 p-3 rounded-lg border border-teal-100">
                        <CheckCircle2 className="h-4 w-4" />
                        Single point of truth. Automated workflows.
                    </div>
                    
                    <button className="w-full mt-6 bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors">
                        Start 14-Day Free Trial
                    </button>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};