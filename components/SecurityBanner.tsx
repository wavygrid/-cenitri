import React from 'react';
import { ExternalLinkIcon } from './ui/Icons';
import { PageView } from '../App';

interface SecurityBannerProps {
  onNavigate?: (page: PageView) => void;
}

const Badge = ({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center gap-2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg shrink-0 min-w-[100px]">
    <div className="text-slate-600">{icon}</div>
    <div className="text-[7px] font-bold text-slate-700 text-center leading-tight uppercase tracking-wide">{children}</div>
  </div>
);

// Custom Icons
const EncryptionIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const USAIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const ZeroRetentionIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <line x1="10" y1="11" x2="10" y2="17"/>
    <line x1="14" y1="11" x2="14" y2="17"/>
  </svg>
);

const ZeroTrainingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

export const SecurityBanner: React.FC<SecurityBannerProps> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl -mt-8 md:-mt-12 relative z-20">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 md:gap-8">

        {/* Badges Stack */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
          <Badge icon={<EncryptionIcon />}>
            AES-256<br/>Encrypted
          </Badge>
          <Badge icon={<USAIcon />}>
            USA<br/>Sovereign
          </Badge>
          <Badge icon={<ZeroRetentionIcon />}>
            Zero<br/>Retention
          </Badge>
          <Badge icon={<ZeroTrainingIcon />}>
            Zero<br/>Training
          </Badge>
        </div>

        {/* Text Area */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-sm font-bold text-[#0B1120] mb-0.5">Security and Compliance</h3>
          <p className="text-sm text-slate-500 font-medium">Enterprise-grade security and industry-standard certifications.</p>
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
