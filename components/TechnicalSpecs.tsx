import React from 'react';
import { ShieldCheck, Zap, Database } from 'lucide-react';

export const TechnicalSpecs: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Enterprise reliability.</h2>
            <p className="text-slate-400">Reliable, secure, and always on. You own your data.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <Zap className="h-8 w-8 text-brand-500 mx-auto mb-6" />
                <h3 className="text-lg font-bold mb-2">Lightning Fast</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    Edge-cached global CDN ensures your booking site loads instantly on mobile.
                </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <ShieldCheck className="h-8 w-8 text-green-500 mx-auto mb-6" />
                <h3 className="text-lg font-bold mb-2">SOC-2 Security</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    Bank-grade encryption for all payments and customer data.
                </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <Database className="h-8 w-8 text-blue-500 mx-auto mb-6" />
                <h3 className="text-lg font-bold mb-2">Data Sovereignty</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    Export your customer list anytime (CSV/JSON). We never lock you in.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};