import React from 'react';
import { Badge } from './ui/Badge';
import { ArrowRight, Stethoscope, HardHat, Ship } from 'lucide-react';

const Markets: React.FC = () => {
  const verticals = [
    { 
       id: 'healthcare',
       icon: Stethoscope,
       title: "Healthcare (Post-Acute)", 
       subtitle: "Revenue Integrity & CDI",
       description: "We reconcile Hospital Transfer Packets against MDS 3.0 Assessments. The system identifies under-coded NTA comorbidities and functional deficits to ensure accurate reimbursement under PDPM guidelines." 
    },
    { 
       id: 'construction',
       icon: HardHat,
       title: "Construction", 
       subtitle: "Pay Application Auditing",
       description: "We validate Subcontractor Pay Applications (G702/G703) against the Master Schedule of Values. The system flags overbilling, mathematical errors, and expired insurance certificates prior to payment release." 
    },
    { 
       id: 'logistics',
       icon: Ship,
       title: "Logistics & Trade", 
       subtitle: "Customs & Bill of Lading",
       description: "We cross-reference Commercial Invoices against Bills of Lading and HTS Classifications. The system detects inconsistencies in weight, value, and origin to prevent customs holds." 
    },
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Vertical Applications</h2>
              <p className="text-lg text-zinc-400">
                 We deploy sector-specific logic cores. Our system understands the unique regulatory forms and document standards of each industry we serve.
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verticals.map((market, i) => (
            <div key={i} className="group relative bg-zinc-800/50 border border-zinc-700 rounded-xl p-8 hover:bg-zinc-800 transition-all duration-300">
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <ArrowRight className="text-white" size={20} />
              </div>
              
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center mb-8">
                <market.icon size={24} className="text-zinc-300" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{market.title}</h3>
              <p className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-6">{market.subtitle}</p>
              
              <p className="text-zinc-400 text-sm leading-relaxed">
                 {market.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Markets;