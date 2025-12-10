import React from 'react';
import { Logo } from './Icons';

interface FooterProps {
    onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white py-20 border-t border-slate-800" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                
                {/* Brand */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Logo className="text-white" />
                    </div>
                    <div className="text-sm text-slate-300 font-normal leading-relaxed max-w-xs">
                        Centurim | Autonomous Document Reconciliation Systems for Regulated Industries.
                    </div>
                    <div className="text-sm text-slate-300 pt-4 font-mono">
                        <p>contact@centurim.com</p>
                    </div>
                </div>

                {/* Platform */}
                <nav aria-label="Platform Links">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Platform</h4>
                    <ul className="space-y-4 text-sm text-slate-300">
                        <li><button onClick={() => onNavigate('security')} className="hover:text-white transition-colors hover:underline decoration-slate-500 underline-offset-4">Security</button></li>
                        <li><button onClick={() => onNavigate('platform')} className="hover:text-white transition-colors hover:underline decoration-slate-500 underline-offset-4">Platform</button></li>
                    </ul>
                </nav>

                 {/* Legal */}
                <nav aria-label="Legal Links">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Legal</h4>
                    <ul className="space-y-4 text-sm text-slate-300">
                         <li><button onClick={() => onNavigate('privacy_policy')} className="hover:text-white transition-colors hover:underline decoration-slate-500 underline-offset-4">Privacy Policy</button></li>
                         <li><button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors hover:underline decoration-slate-500 underline-offset-4">Terms and Conditions</button></li>
                    </ul>
                </nav>

            </div>

            <div className="border-t border-slate-800 pt-8 pb-8">
                 <p className="text-[10px] text-slate-500 leading-relaxed max-w-5xl">
                    <span className="font-bold text-slate-400">Disclaimer:</span> Centurim or Centurim Healthcare or Centurim Systems Limited provides data consistency analysis and variance reporting. The services provided do not constitute legal, medical, or financial advice. Final coding, billing, and payment decisions remain the sole responsibility of the provider. All data processing is subject to the terms of our Master Services Agreement.
                 </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-8 gap-4">
                 <div className="text-[10px] text-slate-500 font-medium">
                     © 2025 Centurim Systems Limited. All Rights Reserved.
                 </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;