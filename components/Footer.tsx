import React from 'react';
import { ViewState } from '../App';

interface FooterProps {
  currentView?: ViewState;
  onNavigate?: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ currentView, onNavigate }) => {
  return (
    <footer className="bg-white text-navy-900 pt-20 pb-12 border-t border-zinc-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="col-span-1 md:col-span-2">
            <img src="/Centurim_logo_dark.svg" alt="Centurim" className="h-8 mb-6" />
            <div className="text-zinc-500 text-sm space-y-1">
               <p>Autonomous Document Reconciliation Platform</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col md:items-end">
            <div className="flex flex-col md:flex-row gap-6 text-sm font-medium text-navy-900">
               <button onClick={() => onNavigate?.('privacy')} className="hover:text-zinc-500 transition-colors text-left md:text-right">Privacy Policy</button>
               <button onClick={() => onNavigate?.('terms')} className="hover:text-zinc-500 transition-colors text-left md:text-right">Terms of Service</button>
               <button className="hover:text-zinc-500 transition-colors text-left md:text-right">Request BAA</button>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-100 pt-8">
          <p className="text-zinc-400 text-xs leading-relaxed max-w-4xl mb-6">
            <strong>Disclaimer:</strong> Centurim provides data consistency analysis and variance reporting. The services provided do not constitute legal, medical, or financial advice. Final coding, billing, and payment decisions remain the sole responsibility of the provider.
          </p>
          <p className="text-zinc-400 text-xs text-center">
            All Rights Reserved © Centurim Systems Limited 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;