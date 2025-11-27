import React from 'react';
import { Badge } from './ui/Badge';
import { ArrowRight, Globe, MapPin } from 'lucide-react';

const Markets: React.FC = () => {
  const architectures = [
    { country: "Canada", programs: "Express Entry / SUV", compliance: "PIPEDA Compliant", status: "Active" },
    { country: "USA", programs: "O-1 / EB-1 / NIW", compliance: "SOC 2 Type II", status: "Active" },
    { country: "United Kingdom", programs: "Global Talent / Skilled", compliance: "GDPR Ready", status: "Active" },
    { country: "Australia", programs: "GTI / 189", compliance: "Privacy Act 1988", status: "Active" },
  ];

  return (
    <section className="py-32 bg-white border-b border-zinc-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">Global Assessment Architectures</h2>
              <p className="text-lg text-zinc-500">
                 Select your market. Deploy the standard. Our library contains 40+ pre-configured regulatory logic flows mapped to current government regulations.
              </p>
           </div>
           <div className="hidden md:block">
              <div className="text-right text-xs font-mono text-zinc-400 uppercase">Supported Jurisdictions</div>
              <div className="text-right text-3xl font-bold text-zinc-900">4 Regions</div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {architectures.map((arch, i) => (
            <div key={i} className="group relative bg-zinc-50 border border-zinc-200 rounded-xl p-8 hover:bg-zinc-900 hover:border-zinc-900 transition-all duration-300">
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <ArrowRight className="text-white" size={20} />
              </div>
              
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-12 shadow-sm group-hover:bg-zinc-800 group-hover:text-white">
                <MapPin size={20} />
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-white mb-2">{arch.country}</h3>
              <p className="text-sm font-medium text-zinc-500 group-hover:text-zinc-400 mb-8">{arch.programs}</p>
              
              <div className="pt-6 border-t border-zinc-200 group-hover:border-zinc-800">
                <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-500">
                  {arch.compliance}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Markets;