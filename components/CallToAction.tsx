import React from 'react';
import { Button } from './ui/Button';
import { ShieldCheck, Lock, Server } from 'lucide-react';
import { ViewState } from '../App';

interface CallToActionProps {
  onNavigate?: (view: ViewState) => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onNavigate }) => {
  return (
    <section className="py-32 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-12">
          Built for the Regulated Professional
        </h2>

        {/* Badges - Minimal */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 mb-20">
          <div className="flex items-center gap-4">
             <ShieldCheck size={24} className="text-zinc-500" />
             <div className="text-left">
               <p className="text-sm font-bold text-zinc-200">SOC 2 Type II</p>
               <p className="text-xs text-zinc-500 uppercase tracking-wider">Data Security</p>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <Lock size={24} className="text-zinc-500" />
             <div className="text-left">
               <p className="text-sm font-bold text-zinc-200">AES-256</p>
               <p className="text-xs text-zinc-500 uppercase tracking-wider">Bank Grade Encryption</p>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <Server size={24} className="text-zinc-500" />
             <div className="text-left">
               <p className="text-sm font-bold text-zinc-200">Data Residency: Local</p>
               <p className="text-xs text-zinc-500 uppercase tracking-wider">Sovereign Storage</p>
             </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <p className="text-xl text-zinc-400 mb-10 font-light">
            Secure Your Intake Process.
          </p>
          <div className="flex justify-center">
            <Button onClick={() => onNavigate?.('deploy')} variant="primary" size="lg" className="bg-white text-zinc-900 hover:bg-zinc-200 border-0 h-14 px-12 text-lg font-bold shadow-lg">
              Request Access
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;