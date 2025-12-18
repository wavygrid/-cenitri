import React from 'react';
import { Button } from './ui/Button';
import { PageView } from '../App';

interface CallToActionProps {
    onNavigate?: (page: PageView) => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onNavigate }) => {
  return (
    <section className="bg-[#0B1120] border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-24 text-center">
          {/* text-4xl -> text-3xl */}
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-6">
            Initiate Your Review
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Every day a file sits unread is a day of delayed revenue. Clear your desk and move your cases forward with automated intelligence.
          </p>
          <div className="flex justify-center">
             <Button 
                variant="white" 
                className="h-14 px-12 text-base font-bold rounded-md hover:bg-slate-100"
                onClick={() => onNavigate?.('contact')}
             >
              Schedule Consultation
            </Button>
          </div>
      </div>
    </section>
  );
};