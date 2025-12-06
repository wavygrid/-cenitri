import React from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';

const IndustryResources: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-bold text-navy-900 mb-12 text-center">Industry Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
           {/* Card 1 */}
           <div className="bg-white border border-zinc-200 p-8 hover:border-zinc-300 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-2 bg-zinc-100 rounded-sm"><FileText size={20} className="text-zinc-600"/></div>
                 <ArrowUpRight size={20} className="text-zinc-300 group-hover:text-navy-900 transition-colors" />
              </div>
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Technical Brief</div>
              <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-blue-600 transition-colors">Zero Trust Architectures in Healthcare</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">How serverless processing ensures data sovereignty and HIPAA alignment.</p>
           </div>

           {/* Card 2 */}
           <div className="bg-white border border-zinc-200 p-8 hover:border-zinc-300 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-2 bg-zinc-100 rounded-sm"><FileText size={20} className="text-zinc-600"/></div>
                 <ArrowUpRight size={20} className="text-zinc-300 group-hover:text-navy-900 transition-colors" />
              </div>
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Whitepaper</div>
              <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-blue-600 transition-colors">The Cost of Variance</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Analyzing the financial impact of coding drift in PDPM reimbursements.</p>
           </div>

           {/* Card 3 */}
           <div className="bg-white border border-zinc-200 p-8 hover:border-zinc-300 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-2 bg-zinc-100 rounded-sm"><FileText size={20} className="text-zinc-600"/></div>
                 <ArrowUpRight size={20} className="text-zinc-300 group-hover:text-navy-900 transition-colors" />
              </div>
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Implementation Guide</div>
              <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-blue-600 transition-colors">The 24 Hour Audit</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">How to deploy a retrospective variance check without IT integration.</p>
           </div>

        </div>
      </div>
    </section>
  );
};

export default IndustryResources;