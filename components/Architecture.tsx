import React from 'react';
import { Cpu, Shield, EyeOff } from 'lucide-react';

const Architecture: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-zinc-200">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Architecture Over Algorithms</h2>
          <p className="text-lg text-zinc-500 leading-relaxed">
             We do not rely on probabilistic generation for compliance tasks. Our infrastructure is built for deterministic accuracy and sovereign security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
           {/* Logic */}
           <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                 <Cpu className="text-zinc-900" size={24} />
                 <h3 className="font-bold text-zinc-900 text-lg">Deterministic Logic</h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                 We utilize a rigid logic framework. The system does not "guess" or "hallucinate" outcomes. It strictly compares Input A against Input B based on defined regulatory rulesets.
              </p>
           </div>

           {/* Data Residency */}
           <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                 <Shield className="text-zinc-900" size={24} />
                 <h3 className="font-bold text-zinc-900 text-lg">Sovereign Data Residency</h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                 The architecture is region-locked. All computation and temporary storage occur exclusively within United States data centers. Data packets do not traverse international borders during the analysis lifecycle.
              </p>
           </div>

           {/* Ingestion */}
           <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                 <EyeOff className="text-zinc-900" size={24} />
                 <h3 className="font-bold text-zinc-900 text-lg">Zero-Trust Ingestion</h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                 The platform utilizes a blind ingestion protocol. Metadata is anonymized at the edge. The processing environment operates with least-privilege access, ensuring no unauthorized human interaction with raw files.
              </p>
           </div>

        </div>

      </div>
    </section>
  );
};

export default Architecture;