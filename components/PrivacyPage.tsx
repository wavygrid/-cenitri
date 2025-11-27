import React from 'react';
import { ViewState } from '../App';
import { Button } from './ui/Button';
import { Shield, Lock, Eye, FileKey } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate?: (view: ViewState) => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 border-b border-zinc-200 pb-8">
          <div className="flex items-center gap-2 text-emerald-600 mb-4 font-mono text-xs uppercase tracking-widest">
            <Shield size={14} /> Legal Compliance
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">Privacy Policy</h1>
          <p className="text-zinc-500">Last Updated: October 24, 2024</p>
        </div>

        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-sm font-mono text-zinc-900">01</span>
              Data Processor Status
            </h2>
            <p className="leading-relaxed mb-4">
              Centurin Inc. acts explicitly as a <strong>Data Processor</strong> under GDPR, PIPEDA, and CCPA frameworks. You, the Subscriber (Law Firm), remain the <strong>Data Controller</strong>. We process client data solely on your instruction to provide the Service.
            </p>
            <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-xl text-sm">
              <strong className="text-zinc-900 block mb-2">Key Distinction:</strong>
              We do not own, monetize, or independentally analyze your client data. It is processed exclusively to generate immigration assessments and strategy briefs.
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
               <span className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-sm font-mono text-zinc-900">02</span>
               Data Collection & Sovereignty
            </h2>
            <p className="leading-relaxed mb-4">
               We collect information required to perform immigration eligibility assessments. This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
               <li>Biographic Data (Name, DOB, Citizenship)</li>
               <li>Professional History (CV/Resume parsing)</li>
               <li>Immigration History (Prior refusals, current status)</li>
               <li>Identity Documents (Passport meta-data)</li>
            </ul>
            <p className="leading-relaxed">
               <strong>Residency:</strong> Data is stored in the AWS Region selected during your instance provisioning (US-East-1, CA-Central-1, EU-West-2, or AP-Southeast-2). Data does not leave your selected sovereignty zone.
            </p>
          </section>

          <section>
             <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
               <span className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-sm font-mono text-zinc-900">03</span>
               AI & Machine Learning Usage
            </h2>
            <div className="flex gap-4 items-start p-6 bg-blue-50 border border-blue-100 rounded-xl">
               <Eye className="text-blue-600 shrink-0 mt-1" size={20} />
               <div>
                  <h3 className="font-bold text-blue-900 mb-2">Zero-Retention Policy</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                     Our inference models are stateless. When you submit a document for analysis, it is processed in ephemeral memory and discarded immediately after the strategy brief is generated. <strong>We do not train our models on your client data.</strong>
                  </p>
               </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
               <span className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-sm font-mono text-zinc-900">04</span>
               Security Measures
            </h2>
            <p className="leading-relaxed mb-6">
               We implement defense-in-depth security architecture including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="border border-zinc-200 p-4 rounded-lg">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 mb-2">
                     <Lock size={16} className="text-emerald-500"/> AES-256 Encryption
                  </div>
                  <p className="text-xs">Applied to all data at rest.</p>
               </div>
               <div className="border border-zinc-200 p-4 rounded-lg">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 mb-2">
                     <FileKey size={16} className="text-emerald-500"/> TLS 1.3
                  </div>
                  <p className="text-xs">Mandatory for all data in transit.</p>
               </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
               <span className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-sm font-mono text-zinc-900">05</span>
               Contact
            </h2>
            <p className="leading-relaxed">
               For DPA execution or privacy inquiries:<br/>
               <a href="mailto:privacy@centurin.com" className="text-blue-600 font-medium hover:underline">privacy@centurin.com</a>
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-zinc-200">
           <Button onClick={() => onNavigate?.('home')} variant="outline">
              Return Home
           </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;