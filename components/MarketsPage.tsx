import React from 'react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { 
  Globe, ArrowRight, Landmark, Scale, 
  MapPin, ShieldCheck, Construction, Briefcase,
  Plane
} from 'lucide-react';
import { ViewState } from '../App';
import { motion } from 'framer-motion';

interface MarketsPageProps {
  onNavigate?: (view: ViewState) => void;
}

const MarketsPage: React.FC<MarketsPageProps> = ({ onNavigate }) => {
  const activeMarkets = [
    {
      id: "usa",
      country: "United States",
      agency: "USCIS / DOL",
      focus: "High-Skilled & Business",
      description: "Full alignment with Title 8 of CFR. Automated form population for I-129 and I-140 petitions with O-1 and EB-1 specific admissibility logic.",
      frameworks: ["O-1A / O-1B", "EB-1A / EB-1C", "EB-2 NIW", "L-1 Intracompany"],
    },
    {
      id: "can",
      country: "Canada",
      agency: "IRCC / ESDC",
      focus: "Economic Mobility",
      description: "Direct mapping to Express Entry CRS scoring subsystems. Compliance with PIPEDA and C-27 for data storage within Canadian borders.",
      frameworks: ["Express Entry", "Global Talent Stream", "Start-Up Visa (SUV)", "C-11/C-12 ICT"],
    },
    {
      id: "uk",
      country: "United Kingdom",
      agency: "Home Office",
      focus: "Global Talent",
      description: "Integration with Endorsing Body criteria (Tech Nation, Arts Council). GDPR-compliant evidence handling for indefinite leave to remain paths.",
      frameworks: ["Global Talent Visa", "Skilled Worker", "Innovator Founder", "High Potential Individual"],
    },
    {
      id: "aus",
      country: "Australia",
      agency: "Home Affairs",
      focus: "Skills & Innovation",
      description: "Optimized for the Global Talent Independent (GTI) program sectors. Automated EOI readiness assessments against sector-specific salary thresholds.",
      frameworks: ["Global Talent (858)", "Subclass 189/190", "Business Innovation", "Employer Nomination"],
    }
  ];

  return (
    <div className="bg-white font-sans text-zinc-900">
      
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-32 md:pt-48 md:pb-32 container mx-auto px-6 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-zinc-200 text-zinc-500 text-xs font-bold uppercase tracking-widest mb-10"
        >
           <Globe size={14} className="text-zinc-400" /> Global Infrastructure
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
          Sovereign Logic. <br />
          <span className="text-zinc-900">Universal Deployment.</span>
        </h1>
        
        <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
           Centurin abstracts the complexity of global immigration. We maintain strict regulatory alignment across 4 major jurisdictions, allowing your firm to scale internationally without compliance friction.
        </p>
      </section>

      {/* 2. ACTIVE MARKETS */}
      <section className="py-32 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div>
                <h2 className="text-4xl font-bold text-zinc-900 mb-6">Active Jurisdictions</h2>
                <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
                   Deploy immediate intake capability for these regions. Each market module includes localized data residency, encryption standards, and legal logic gates.
                </p>
             </div>
             <div className="hidden md:block text-right">
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Systems Operational</div>
                <div className="text-3xl font-bold text-zinc-900">4 Regions</div>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {activeMarkets.map((market) => (
               <div key={market.id} className="bg-white rounded-xl border border-zinc-200 p-10 hover:shadow-lg transition-all duration-300 flex flex-col group">
                  <div className="flex justify-between items-start mb-8">
                     <div className="w-12 h-12 rounded bg-zinc-50 flex items-center justify-center border border-zinc-100">
                        <Landmark size={20} className="text-zinc-900" />
                     </div>
                     <Badge variant="outline" className="font-mono text-xs uppercase tracking-wider text-zinc-500 border-zinc-200">{market.agency}</Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">{market.country}</h3>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-wide mb-8">{market.focus}</p>
                  
                  <p className="text-zinc-600 leading-relaxed mb-10 flex-grow text-lg">
                     {market.description}
                  </p>

                  <div className="bg-zinc-50 rounded p-6 mb-10 border border-zinc-100">
                     <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">Supported Architectures</p>
                     <div className="grid grid-cols-2 gap-4">
                        {market.frameworks.map((fw, i) => (
                           <div key={i} className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                              <ShieldCheck size={14} className="text-zinc-400 shrink-0" />
                              {fw}
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="pt-8 border-t border-zinc-100 flex items-center justify-between">
                     <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">v2.4.0 • Stable</span>
                     <Button onClick={() => onNavigate?.('deploy')} variant="ghost" className="text-zinc-900 hover:bg-zinc-50 -mr-4 font-medium">
                        Deploy Infrastructure <ArrowRight size={16} className="ml-2" />
                     </Button>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. EXPANSION ROADMAP - Clean Light Mode */}
      <section className="py-32 bg-white border-t border-zinc-200">
        <div className="container mx-auto px-6 md:px-12">
           
           <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="md:w-1/2">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-zinc-200 text-zinc-500 text-xs font-bold uppercase tracking-widest mb-8">
                    <Construction size={14} /> Expansion Roadmap
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8">Next Frontiers.</h2>
                 <p className="text-xl text-zinc-500 leading-relaxed mb-12 font-light">
                    We are actively engineering logic cores for the European Union's largest economies. Our regulatory team is finalizing the decision matrices for these upcoming jurisdictions.
                 </p>
                 <div className="flex gap-6">
                    <div className="px-8 py-6 bg-zinc-50 border border-zinc-200 rounded-lg">
                       <p className="text-3xl font-bold text-zinc-900 mb-2">Q3 2025</p>
                       <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Expected Beta</p>
                    </div>
                    <div className="px-8 py-6 bg-zinc-50 border border-zinc-200 rounded-lg">
                       <p className="text-3xl font-bold text-zinc-900 mb-2">2 New</p>
                       <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Sovereign Regions</p>
                    </div>
                 </div>
              </div>

              <div className="md:w-1/2 w-full">
                 <div className="grid grid-cols-1 gap-6">
                    
                    {/* Germany Card */}
                    <div className="bg-white border border-zinc-200 p-8 rounded-xl flex items-center gap-8 hover:shadow-md transition-shadow">
                       <div className="w-20 h-20 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center shrink-0 text-3xl">
                          🇩🇪
                       </div>
                       <div className="flex-grow">
                          <div className="flex justify-between items-center mb-2">
                             <h3 className="text-xl font-bold text-zinc-900">Germany</h3>
                             <Badge variant="secondary" className="bg-zinc-100 text-zinc-500">In Development</Badge>
                          </div>
                          <p className="text-sm text-zinc-500 mb-4 font-medium">EU Blue Card Integration</p>
                          <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                             <div className="h-full bg-zinc-400 w-[75%]"></div>
                          </div>
                       </div>
                    </div>

                    {/* France Card */}
                    <div className="bg-white border border-zinc-200 p-8 rounded-xl flex items-center gap-8 hover:shadow-md transition-shadow">
                       <div className="w-20 h-20 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center shrink-0 text-3xl">
                          🇫🇷
                       </div>
                       <div className="flex-grow">
                          <div className="flex justify-between items-center mb-2">
                             <h3 className="text-xl font-bold text-zinc-900">France</h3>
                             <Badge variant="secondary" className="bg-zinc-100 text-zinc-500">In Development</Badge>
                          </div>
                          <p className="text-sm text-zinc-500 mb-4 font-medium">Passeport Talent</p>
                          <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                             <div className="h-full bg-zinc-400 w-[45%]"></div>
                          </div>
                       </div>
                    </div>

                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-32 bg-zinc-50 text-center border-t border-zinc-200">
         <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Scale Your Practice Globally</h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-12 font-light">
               One infrastructure, infinite reach. Deploy the logic for the markets you serve today, and activate new regions as you expand.
            </p>
            <Button onClick={() => onNavigate?.('deploy')} variant="primary" size="lg" className="h-14 px-12 text-lg shadow-sm">
               Initialize Deployment
            </Button>
         </div>
      </section>

    </div>
  );
};

export default MarketsPage;