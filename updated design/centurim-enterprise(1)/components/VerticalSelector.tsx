import React from 'react';
import { ScaleIcon, StethoscopeIcon, ArrowRightIcon } from './ui/Icons';
import { Button } from './ui/Button';
import { PageView } from '../App';

interface VerticalSelectorProps {
  onNavigate: (page: PageView) => void;
}

export const VerticalSelector: React.FC<VerticalSelectorProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 md:py-32 bg-white" id="selector">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-20 text-center max-w-3xl mx-auto">
           {/* text-5xl -> text-4xl */}
           <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B1120] mb-6">
            Select Your Workflow
          </h2>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Specialized infrastructure for the distinct regulatory and operational needs of legal and clinical environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Legal Card - Minimalist Dark */}
          <div className="group flex flex-col justify-between bg-[#0B1120] rounded-2xl p-10 md:p-12 shadow-2xl ring-1 ring-slate-900/5 transition-transform hover:-translate-y-1 duration-300">
            <div>
                <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-xl border border-white/10">
                        <ScaleIcon className="w-8 h-8 text-white" />
                    </div>
                    {/* text-3xl -> text-2xl */}
                    <h3 className="text-2xl font-medium text-white tracking-tight">Centurim Legal</h3>
                </div>

                <div className="mb-12">
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-6">Who is it for</p>
                    <div className="py-6 border-t border-slate-800">
                        <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                            Personal Injury Attorneys, Legal Nurse Consultants, & Paralegals.
                        </p>
                    </div>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed mb-12">
                    Automated medical record abstraction. Convert thousands of pages of unstructured PDFs into chronologies and fact summaries in minutes.
                </p>
            </div>
            
            <div className="pt-10 border-t border-slate-800">
                <Button 
                    variant="white" 
                    className="w-full justify-between group h-16 bg-white text-[#0B1120] hover:bg-slate-50 rounded-xl border-transparent text-lg"
                    onClick={() => onNavigate('legal')}
                >
                    <span className="font-bold">Enter Legal Platform</span>
                    <ArrowRightIcon className="w-6 h-6 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
          </div>

          {/* Healthcare Card - Minimalist Light */}
          <div className="group flex flex-col justify-between bg-white rounded-2xl p-10 md:p-12 border border-slate-200 shadow-xl transition-transform hover:-translate-y-1 duration-300">
            <div>
                <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-xl border border-slate-100">
                        <StethoscopeIcon className="w-8 h-8 text-[#0B1120]" />
                    </div>
                    {/* text-3xl -> text-2xl */}
                    <h3 className="text-2xl font-medium text-[#0B1120] tracking-tight">Centurim Health</h3>
                </div>

                <div className="mb-12">
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-6">Who is it for</p>
                    <div className="py-6 border-t border-slate-100">
                        <p className="text-lg md:text-xl text-[#0B1120] font-medium leading-relaxed">
                            Skilled Nursing Facilities, Home Health Agencies, & Clinical Directors.
                        </p>
                    </div>
                </div>

                <p className="text-slate-700 text-lg leading-relaxed mb-12">
                    Clinical revenue integrity. Validate MDS and OASIS coding against source documentation to prevent revenue leakage.
                </p>
            </div>
            
            <div className="pt-10 border-t border-slate-100">
                <Button 
                    variant="primary" 
                    className="w-full justify-between group h-16 bg-[#0B1120] text-white hover:bg-slate-800 rounded-xl shadow-lg text-lg"
                    onClick={() => onNavigate('healthcare')}
                >
                    <span className="font-bold">Enter Health Platform</span>
                    <ArrowRightIcon className="w-6 h-6 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};