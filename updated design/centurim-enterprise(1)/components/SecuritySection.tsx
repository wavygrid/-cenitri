import React from 'react';
import { ServerIcon, LightningIcon, LockIcon, ShieldCheckIcon } from './ui/Icons';

export const SecuritySection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50" id="security">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16">
          {/* text-4xl -> text-3xl */}
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B1120] mb-4">
            Compliance & Standards
          </h2>
          <div className="w-16 h-1 bg-[#0B1120]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden">
          
          <div className="p-8 bg-white hover:bg-slate-50 transition-colors">
            <div className="mb-6">
              <ServerIcon className="w-8 h-8 text-[#0B1120]" />
            </div>
            <h3 className="text-lg font-medium text-[#0B1120] mb-3">US Data Residency</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              All processing occurs exclusively within AWS US East 1.
            </p>
          </div>

          <div className="p-8 bg-white hover:bg-slate-50 transition-colors">
            <div className="mb-6">
              <LightningIcon className="w-8 h-8 text-[#0B1120]" />
            </div>
            <h3 className="text-lg font-medium text-[#0B1120] mb-3">Ephemeral Processing</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Data exists in memory only for the duration of the analysis to minimize liability.
            </p>
          </div>

          <div className="p-8 bg-white hover:bg-slate-50 transition-colors">
            <div className="mb-6">
              <LockIcon className="w-8 h-8 text-[#0B1120]" />
            </div>
            <h3 className="text-lg font-medium text-[#0B1120] mb-3">AES-256 Encryption</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Military-grade encryption for data at rest and TLS 1.3 for data in transit.
            </p>
          </div>

          <div className="p-8 bg-white hover:bg-slate-50 transition-colors">
            <div className="mb-6">
              <ShieldCheckIcon className="w-8 h-8 text-[#0B1120]" />
            </div>
            <h3 className="text-lg font-medium text-[#0B1120] mb-3">HIPAA Aligned</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Architecture designed for HITECH compliance and Business Associate Agreement support.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};