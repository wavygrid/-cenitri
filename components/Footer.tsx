import React from 'react';
import { LinkedInIcon } from './ui/Icons';
import { PageView } from '../App';

interface FooterProps {
    onNavigate?: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0B1120] text-white py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          
          <div className="max-w-md">
            <img
              src="/Centurim_for_light_logo.svg"
              alt="Centurim Logo"
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-slate-400 text-base font-medium mb-6">
              Automated Medical Record Intelligence for Regulated Industries.
            </p>
            <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/centurim/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-300 hover:text-white" aria-label="LinkedIn"><LinkedInIcon className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-center">
             <div className="flex flex-wrap gap-6 text-base font-medium text-slate-400 mb-6">
                <button onClick={() => onNavigate?.('security')} className="hover:text-white transition-colors">Security</button>
                <span className="hidden md:inline text-slate-700">|</span>
                <button onClick={() => onNavigate?.('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
                <span className="hidden md:inline text-slate-700">|</span>
                <button onClick={() => onNavigate?.('terms')} className="hover:text-white transition-colors">Terms of Service</button>
                <span className="hidden md:inline text-slate-700">|</span>
                <button onClick={() => onNavigate?.('contact')} className="hover:text-white transition-colors">Request BAA</button>
             </div>
             <img
               src="/HIPAA_LIGHT.svg"
               alt="HIPAA Compliant"
               className="h-12 w-auto"
             />
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-base text-slate-500 font-medium leading-relaxed">
          <p className="max-w-3xl">
            Disclaimer: Centurim provides automated data extraction and analysis services. We do not provide legal advice or medical diagnoses. All reports are draft work products intended for professional review and verification.
          </p>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} Centurim Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};