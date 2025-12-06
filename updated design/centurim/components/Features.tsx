import React from 'react';
import { ScanText, Link, Zap, FileSearch, Database, Shield } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-zinc-200">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl font-bold text-zinc-900 mb-6">System Capabilities</h2>
          <p className="text-lg text-zinc-500 leading-relaxed font-light">
             Our architecture is designed for the specific rigors of audit defense. We prioritize traceability and data minimization over generative creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           
           {/* Feature 1 */}
           <div className="group">
              <div className="w-14 h-14 bg-zinc-50 border border-zinc-200 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zinc-900 transition-colors duration-300">
                 <ScanText size={24} className="text-zinc-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Contextual Extraction</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                 The engine identifies semantic matches across disparate document formats. It recognizes that clinical descriptions in a discharge summary correlate to specific billing codes, even when terminology differs.
              </p>
           </div>

           {/* Feature 2 */}
           <div className="group">
              <div className="w-14 h-14 bg-zinc-50 border border-zinc-200 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zinc-900 transition-colors duration-300">
                 <Link size={24} className="text-zinc-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Evidence Citation</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                 Every identified variance includes a direct reference to the source document. Users receive the specific page number and paragraph text that contradicts the current billing code.
              </p>
           </div>

           {/* Feature 3 */}
           <div className="group">
              <div className="w-14 h-14 bg-zinc-50 border border-zinc-200 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zinc-900 transition-colors duration-300">
                 <Zap size={24} className="text-zinc-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Ephemeral Processing</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                 Data is processed in a serverless environment. Source files are permanently deleted immediately upon analysis. No client data is retained for model training or long-term storage.
              </p>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Features;