import React from 'react';
import { Button } from './ui/Button';
import { CheckIcon } from './ui/Icons';
import { PageView } from '../App';

interface HeroProps {
  onNavigate?: (page: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            {/* Reduced size: text-5xl/7xl -> text-4xl/5xl. Weight: extrabold -> medium */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#0B1120] leading-[1.1] mb-10">
              Turn Unstructured Medical Records into <span className="text-[#2563EB]">Structured Clinical Data</span>
            </h1>
            <div className="w-24 h-2 bg-[#0B1120] mb-12"></div>
            <p className="text-lg text-slate-700 mb-14 leading-relaxed font-medium max-w-xl">
              We convert thousands of pages of raw medical PDFs into structured chronologies and variance reports with review-ready precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <Button
                variant="primary"
                className="h-16 px-10 text-lg shadow-xl shadow-blue-900/10"
                onClick={() => onNavigate?.('contact')}
                aria-label="Start your workflow selection"
              >
                Select Your Workflow
              </Button>
              <Button
                variant="outline"
                className="h-16 px-10 text-lg"
                onClick={() => onNavigate?.('contact')}
                aria-label="View system architecture"
              >
                View Architecture
              </Button>
            </div>
            <img
              src="/HIPAA_DARK.svg"
              alt="HIPAA Compliant"
              className="h-14 w-auto"
            />
          </div>

          {/* Visual Content */}
          <div className="w-full lg:w-1/2" aria-hidden="true">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 shadow-2xl">
               <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                   {/* Header of Doc */}
                   <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white">
                       <div>
                           <div className="text-lg font-medium uppercase tracking-widest text-slate-500 mb-2">Generated Output</div>
                           <h3 className="text-lg font-medium text-[#0B1120]">Medical Chronology Summary</h3>
                       </div>
                       <div className="flex items-center gap-3">
                           <span className="w-4 h-4 rounded-full bg-emerald-500"></span>
                           <span className="text-base font-medium text-slate-600">Processing Complete</span>
                       </div>
                   </div>

                   {/* Content Lines */}
                   <div className="p-8 space-y-10 bg-white">
                       {/* Row 1 */}
                       <div className="flex gap-8">
                           <div className="w-32 shrink-0 pt-1">
                               <div className="text-lg font-medium text-slate-900">Oct 12, 2023</div>
                               <div className="text-base text-slate-500 font-medium uppercase tracking-wide mt-2">14:30 PM</div>
                           </div>
                           <div className="flex-1 pb-10 border-l-2 border-slate-100 pl-8 relative">
                               <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-[#2563EB]"></div>
                               <h4 className="text-lg font-medium text-[#0B1120] mb-4">Emergency Admission</h4>
                               <div className="space-y-4">
                                   <div className="h-4 w-full bg-slate-100 rounded"></div>
                                   <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
                               </div>
                               <div className="mt-6 inline-flex items-center px-4 py-2 bg-slate-50 border border-slate-200 rounded text-base font-medium text-slate-600">
                                   Source: Mercy General Hospital (Pg. 42)
                               </div>
                           </div>
                       </div>

                       {/* Row 2 */}
                       <div className="flex gap-8">
                           <div className="w-32 shrink-0 pt-1">
                               <div className="text-lg font-medium text-slate-900">Oct 14, 2023</div>
                               <div className="text-base text-slate-500 font-medium uppercase tracking-wide mt-2">09:15 AM</div>
                           </div>
                           <div className="flex-1 pl-8 relative">
                               <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-slate-300"></div>
                               <h4 className="text-lg font-medium text-[#0B1120] mb-4">Radiology Report (MRI)</h4>
                               <div className="space-y-4">
                                   <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
                                   <div className="h-4 w-full bg-slate-100 rounded"></div>
                               </div>
                           </div>
                       </div>
                   </div>

                   {/* Footer Status */}
                   <div className="px-8 py-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                       <div className="flex items-center gap-3 text-base font-medium text-slate-700">
                           <CheckIcon className="w-5 h-5 text-emerald-600" /> 100% Source Verified
                       </div>
                       <div className="text-lg font-medium text-slate-500 uppercase tracking-widest">
                           Confidential &bull; Case #492-AC
                       </div>
                   </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};