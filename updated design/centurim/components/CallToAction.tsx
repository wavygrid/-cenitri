import React from 'react';
import { Button } from './ui/Button';
import { FileText, ArrowRight } from 'lucide-react';
import { ViewState } from '../App';

interface CallToActionProps {
  onNavigate?: (view: ViewState) => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onNavigate }) => {
  return (
    <section className="bg-white">
      
      {/* Industry Resources Section */}
      <div className="py-24 border-b border-zinc-200 bg-zinc-50">
         <div className="container mx-auto px-6 md:px-12">
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-8">Intelligence Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="group cursor-pointer">
                  <h4 className="font-bold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                     Whitepaper: Cost of Variance <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                  </h4>
                  <p className="text-xs text-zinc-500">Analysis of PDPM Reimbursement Leakage</p>
               </div>
               <div className="group cursor-pointer">
                  <h4 className="font-bold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                     Case Study: Construction <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                  </h4>
                  <p className="text-xs text-zinc-500">Mitigating Overbilling in G702 Applications</p>
               </div>
               <div className="group cursor-pointer">
                  <h4 className="font-bold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                     Technical Brief <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                  </h4>
                  <p className="text-xs text-zinc-500">Zero-Retention Architectures for PHI</p>
               </div>
            </div>
         </div>
      </div>

      {/* Main CTA */}
      <div className="py-32 bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-6 text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Secure Your Revenue Baseline
          </h2>

          <p className="text-xl text-zinc-400 mb-12 font-light max-w-2xl mx-auto">
            Initiate a retrospective audit to identify variance in your closed files.
          </p>

          <div className="flex justify-center">
            <Button onClick={() => onNavigate?.('deploy')} variant="primary" size="lg" className="bg-white text-zinc-900 hover:bg-zinc-200 border-0 h-14 px-12 text-lg font-bold shadow-lg">
              Request Pilot Access
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;