import React from 'react';
import { ArrowRight, FileText, ShieldAlert, FileOutput, Cpu, Search, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './ui/Card';

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-50 border-t border-zinc-200">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-8">
            The Autonomous Intake Lifecycle
          </h2>
          <p className="text-xl text-zinc-500 leading-relaxed font-light">
            Replace manual data entry with a deterministic logic engine. We handle the heavy lifting of fact extraction and verification so you can focus on legal strategy.
          </p>
        </div>

        {/* Bento Grid Layout - Clean & Uniform */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1: The Gatekeeper (Large) */}
          <div className="md:col-span-2 bg-white rounded-xl border border-zinc-200 p-10 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
             <div className="relative z-10">
                <div className="w-14 h-14 bg-zinc-50 rounded-lg flex items-center justify-center mb-8 border border-zinc-100">
                   <Search size={24} className="text-zinc-900" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Structured Fact Extraction</h3>
                <p className="text-zinc-500 max-w-lg leading-relaxed text-lg">
                   The prospect engages with a secure intake portal. We extract facts, verify dates, and validate document integrity without human intervention.
                </p>
             </div>
             
             {/* Abstract Minimal Visual */}
             <div className="absolute right-0 bottom-0 w-1/3 h-full bg-zinc-50/50 skew-x-12 translate-x-12"></div>
          </div>

          {/* Feature 2: Compliance Logic (Tall) */}
          <div className="md:row-span-2 bg-white rounded-xl border border-zinc-200 p-10 flex flex-col shadow-sm hover:shadow-lg transition-all duration-300">
             <div className="mb-auto">
                <div className="w-14 h-14 bg-zinc-900 rounded-lg flex items-center justify-center mb-8">
                   <Cpu size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Risk & Admissibility Scoring</h3>
                <p className="text-zinc-500 leading-relaxed text-lg mb-8">
                   The system compares extracted data against your firm's success criteria. It flags gaps in employment, education mismatches, or inadmissibility risks instantly.
                </p>
             </div>

             {/* Minimal Logic Visual */}
             <div className="mt-8 bg-zinc-50 rounded border border-zinc-100 p-6 font-mono text-xs text-zinc-600 leading-loose">
                <p className="font-bold text-zinc-900">Logic_Check:</p>
                <div className="pl-4 border-l border-zinc-200 ml-1 mt-2 space-y-2">
                   <p>if (criminality_record) {'{'}</p>
                   <p className="pl-4 text-red-600">flag_risk("INADMISSIBLE");</p>
                   <p className="pl-4">route_to("Partner_Review");</p>
                   <p>{'}'} else {'{'}</p>
                   <p className="pl-4 text-emerald-600">approve_gate();</p>
                   <p>{'}'}</p>
                </div>
             </div>
          </div>

          {/* Feature 3: The Handoff (Regular) */}
          <div className="bg-white rounded-xl border border-zinc-200 p-10 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300">
             <div>
                <div className="w-14 h-14 bg-zinc-50 rounded-lg flex items-center justify-center mb-8 border border-zinc-100">
                   <FileOutput size={24} className="text-zinc-900" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Brief Generation</h3>
                <p className="text-zinc-500 leading-relaxed text-lg">
                   You receive a standardized PDF summary containing the client bio, evidence audit, and strategy roadmap.
                </p>
             </div>
          </div>

          {/* Feature 4: Integration (Regular) */}
          <div className="bg-white rounded-xl border border-zinc-200 p-10 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300">
             <div>
                <div className="w-14 h-14 bg-zinc-50 rounded-lg flex items-center justify-center mb-8 border border-zinc-100">
                   <CheckCircle2 size={24} className="text-zinc-900" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">CRM Sync</h3>
                <p className="text-zinc-500 leading-relaxed text-lg">
                   Approved files are pushed directly to Clio, Docketwise, or your internal system of record.
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;