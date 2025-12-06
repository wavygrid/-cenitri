import React from 'react';
import { motion } from 'framer-motion';

const Technology: React.FC = () => {
  return (
    <section className="py-24 bg-navy-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Idempotent Document Reconciliation</h2>
          <p className="text-lg text-zinc-400 leading-relaxed font-light">
             Centurim is not a workflow tool. It is a logic engine designed for high stakes variance detection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           
           {/* Visual: Black Box */}
           <div className="relative h-[400px] flex items-center justify-center">
              {/* Box */}
              <div className="w-64 h-64 bg-zinc-900 border border-zinc-800 rounded-xl relative shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-700">
                 {/* Inner Glow */}
                 <div className="absolute inset-0 bg-blue-500/5 rounded-xl"></div>
                 
                 {/* Core */}
                 <div className="w-32 h-32 border border-zinc-700 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 border-t-2 border-blue-500 rounded-full animate-spin"></div>
                    <div className="w-20 h-20 bg-zinc-800 rounded-full"></div>
                 </div>

                 {/* Beams */}
                 <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                 <div className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
              </div>
           </div>

           {/* Process Steps */}
           <div className="space-y-12">
              
              <div className="flex gap-6">
                 <div className="text-zinc-500 text-xs font-mono pt-1">01</div>
                 <div>
                    <h3 className="text-lg font-bold text-white mb-2">Blind Ingestion</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">Data enters via a secure client side tunnel. Metadata is anonymized at the edge.</p>
                 </div>
              </div>

              <div className="flex gap-6">
                 <div className="text-zinc-500 text-xs font-mono pt-1">02</div>
                 <div>
                    <h3 className="text-lg font-bold text-white mb-2">Semantic Extraction</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">Our models extract clinical and financial context from unstructured PDFs. We recognize that dysphagia and swallowing difficulty represent the same billing value.</p>
                 </div>
              </div>

              <div className="flex gap-6">
                 <div className="text-zinc-500 text-xs font-mono pt-1">03</div>
                 <div>
                    <h3 className="text-lg font-bold text-white mb-2">Deterministic Comparison</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">The engine compares the source truth against the regulatory rule set. It does not guess. It flags discrepancies based on strict logic.</p>
                 </div>
              </div>

              <div className="flex gap-6">
                 <div className="text-zinc-500 text-xs font-mono pt-1">04</div>
                 <div>
                    <h3 className="text-lg font-bold text-white mb-2">Cryptographic Deletion</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">Once the Variance Report is generated, the source data is permanently erased from our infrastructure.</p>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
};

export default Technology;