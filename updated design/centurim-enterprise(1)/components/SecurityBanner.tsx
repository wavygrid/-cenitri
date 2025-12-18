import React from 'react';
import { ExternalLinkIcon } from './ui/Icons';
import { PageView } from '../App';

interface SecurityBannerProps {
  onNavigate?: (page: PageView) => void;
}

const Badge = ({ title, subtitle, icon }: { title: string; subtitle?: string; icon?: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center w-[72px] h-[72px] bg-slate-50 border border-slate-200 rounded-lg shrink-0">
    {icon ? (
        <div className="text-slate-400">{icon}</div>
    ) : (
        <>
            <div className="text-[10px] font-bold text-slate-900 leading-tight uppercase tracking-tight">{title}</div>
            {subtitle && <div className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5">{subtitle}</div>}
        </>
    )}
  </div>
);

export const SecurityBanner: React.FC<SecurityBannerProps> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl -mt-8 md:-mt-12 relative z-20">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 md:gap-8">
        
        {/* Badges Stack */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
          <Badge title="HIPAA" subtitle="COMPLIANT" />
          <Badge title="AES-256" subtitle="ENCRYPTED" />
          <Badge title="USA" subtitle="SOVEREIGN" />
          <Badge title="ZERO" subtitle="RETENTION" />
        </div>

        {/* Text Area */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-base md:text-lg font-bold text-[#0B1120] mb-0.5">Security and Compliance</h3>
          <p className="text-sm md:text-base text-slate-500 font-medium">Enterprise-grade security and industry-standard certifications.</p>
        </div>

        {/* Action Button */}
        <div className="shrink-0 w-full md:w-auto">
          <button 
            onClick={() => onNavigate?.('security')}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 text-slate-900 text-sm font-bold transition-all shadow-sm group"
          >
            Learn more
            <ExternalLinkIcon className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
          </button>
        </div>

      </div>
    </div>
  );
};