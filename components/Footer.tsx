import React from 'react';
import { ViewState } from '../App';

interface FooterProps {
  onNavigate?: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1">
            <span className="text-xl font-bold tracking-tighter text-zinc-900 block mb-4">CENTURIM</span>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Client Intelligence Infrastructure for high-stakes legal practices.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-6">Product</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate?.('platform')} className="text-zinc-500 hover:text-blue-600 text-sm transition-colors text-left">Intelligence Engine</button></li>
              <li><button onClick={() => onNavigate?.('platform')} className="text-zinc-500 hover:text-blue-600 text-sm transition-colors text-left">Evidence Audit</button></li>
              <li><button onClick={() => onNavigate?.('deploy')} className="text-zinc-500 hover:text-blue-600 text-sm transition-colors text-left">Deploy Instance</button></li>
              <li><button onClick={() => onNavigate?.('markets')} className="text-zinc-500 hover:text-blue-600 text-sm transition-colors text-left">Integrations</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate?.('compliance')} className="text-zinc-500 hover:text-blue-600 text-sm transition-colors text-left">Trust Center</button></li>
              <li><button onClick={() => onNavigate?.('compliance')} className="text-zinc-500 hover:text-blue-600 text-sm transition-colors text-left">API Reference</button></li>
              <li><button onClick={() => onNavigate?.('markets')} className="text-zinc-500 hover:text-blue-600 text-sm transition-colors text-left">Jurisdictions</button></li>
              <li><button onClick={() => onNavigate?.('compliance')} className="text-zinc-500 hover:text-blue-600 text-sm transition-colors text-left">Security</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate?.('privacy')} className="text-zinc-500 hover:text-blue-600 text-sm transition-colors text-left">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate?.('terms')} className="text-zinc-500 hover:text-blue-600 text-sm transition-colors text-left">Terms of Service</button></li>
              <li><button onClick={() => onNavigate?.('cookies')} className="text-zinc-500 hover:text-blue-600 text-sm transition-colors text-left">Cookie Policy</button></li>
              <li><button onClick={() => onNavigate?.('privacy')} className="text-zinc-500 hover:text-blue-600 text-sm transition-colors text-left">DPA</button></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © 2025 Centurin Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;