import React from 'react';
import { Shield, Lock, Server, FileCheck } from 'lucide-react';

const Compliance: React.FC = () => {
  return (
    <section className="bg-zinc-50 border-b border-zinc-200 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
             <Server size={24} className="text-zinc-400" strokeWidth={1.5} />
             <div>
                <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-1">Infrastructure</h4>
                <p className="text-sm text-zinc-500">AWS US East 1 (N. Virginia)</p>
             </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
             <Lock size={24} className="text-zinc-400" strokeWidth={1.5} />
             <div>
                <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-1">Encryption</h4>
                <p className="text-sm text-zinc-500">AES 256 Data at Rest</p>
             </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
             <FileCheck size={24} className="text-zinc-400" strokeWidth={1.5} />
             <div>
                <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-1">Privacy</h4>
                <p className="text-sm text-zinc-500">BAA Executed</p>
             </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
             <Shield size={24} className="text-zinc-400" strokeWidth={1.5} />
             <div>
                <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-1">Protocol</h4>
                <p className="text-sm text-zinc-500">Zero Retention Processing</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Compliance;