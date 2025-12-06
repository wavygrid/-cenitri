import React from 'react';
import { 
  ShieldCheck, Lock, Server, Trash2, 
  EyeOff, FileText, CheckCircle2, Globe 
} from 'lucide-react';

const CompliancePage: React.FC = () => {
  return (
    <div className="bg-white text-navy-900 pt-20 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="bg-navy-900 text-white py-24 px-6 md:px-12 border-b border-navy-800">
         <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-700 rounded-full text-xs font-bold uppercase tracking-widest mb-8 text-zinc-400">
               <ShieldCheck size={14} /> System Operational
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
               Security & Compliance <br/> Architecture
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto font-light">
               Centurim operates on a Zero Trust, Sovereign Cloud architecture designed for the strict regulatory requirements of US Healthcare.
            </p>
         </div>
      </section>

      {/* 2. CORE SECURITY PILLARS */}
      <section className="py-24 px-6 md:px-12 bg-zinc-50">
         <div className="container mx-auto max-w-6xl space-y-8">
            
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
               {/* Data Sovereignty */}
               <div className="bg-white p-10 rounded-sm border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-8">
                     <Globe className="text-navy-900" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">US Residency Guarantee</h3>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Data Sovereignty</p>
                  <p className="text-zinc-600 mb-8 leading-relaxed border-l-2 border-navy-900 pl-4 italic">
                     We strictly adhere to data localization requirements.
                  </p>
                  <ul className="space-y-4">
                     <li className="flex gap-4 text-sm text-zinc-600">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Processing:</strong> All computational workloads are executed exclusively within AWS US-East-1 (Northern Virginia).</span>
                     </li>
                     <li className="flex gap-4 text-sm text-zinc-600">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Storage:</strong> All ephemeral data buckets are region-locked to the US.</span>
                     </li>
                     <li className="flex gap-4 text-sm text-zinc-600">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>No Export:</strong> Data packets do not traverse international borders during the analysis lifecycle.</span>
                     </li>
                  </ul>
               </div>

               {/* HIPAA Compliance */}
               <div className="bg-white p-10 rounded-sm border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-8">
                     <FileText className="text-navy-900" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Shared Responsibility Model</h3>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">HIPAA Compliance</p>
                  <p className="text-zinc-600 mb-8 leading-relaxed border-l-2 border-navy-900 pl-4 italic">
                     We operate as a Business Associate under HIPAA regulations.
                  </p>
                  <ul className="space-y-4">
                     <li className="flex gap-4 text-sm text-zinc-600">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Contractual Liability:</strong> We execute a comprehensive Business Associate Agreement (BAA) with every covered entity, assuming liability for data processing within our enclave.</span>
                     </li>
                     <li className="flex gap-4 text-sm text-zinc-600">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Infrastructure:</strong> Our platform leverages AWS services that are HIPAA-eligible and covered under our upstream BAA with Amazon Web Services.</span>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
               {/* Encryption Standards */}
               <div className="bg-white p-10 rounded-sm border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-8">
                     <Lock className="text-navy-900" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Cryptographic Protocols</h3>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Encryption Standards</p>
                  <p className="text-zinc-600 mb-8 leading-relaxed border-l-2 border-navy-900 pl-4 italic">
                     Data is protected by military-grade encryption at every stage.
                  </p>
                  <ul className="space-y-4">
                     <li className="flex gap-4 text-sm text-zinc-600">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>At Rest:</strong> All files are encrypted using AES-256 (SSE-KMS) with AWS Key Management Service.</span>
                     </li>
                     <li className="flex gap-4 text-sm text-zinc-600">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>In Transit:</strong> All data transmission occurs via TLS 1.3 tunnels. We enforce HTTPS-only access points.</span>
                     </li>
                  </ul>
               </div>

               {/* Data Lifecycle */}
               <div className="bg-white p-10 rounded-sm border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-8">
                     <Trash2 className="text-navy-900" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Zero-Retention Policy</h3>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Data Lifecycle</p>
                  <p className="text-zinc-600 mb-8 leading-relaxed border-l-2 border-navy-900 pl-4 italic">
                     We minimize breach exposure through aggressive data hygiene.
                  </p>
                  <ul className="space-y-4">
                     <li className="flex gap-4 text-sm text-zinc-600">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Ephemeral Processing:</strong> Patient data exists in memory only for the duration of the audit.</span>
                     </li>
                     <li className="flex gap-4 text-sm text-zinc-600">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Auto-Deletion:</strong> Source files are permanently deleted from our storage buckets immediately upon report generation.</span>
                     </li>
                     <li className="flex gap-4 text-sm text-zinc-600">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>No Training:</strong> We do not use client data to train foundational AI models. Your data remains isolated.</span>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Row 3 - Full Width for Access Control */}
            <div className="bg-white p-10 rounded-sm border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="md:w-1/3">
                     <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-8">
                        <EyeOff className="text-navy-900" size={24} />
                     </div>
                     <h3 className="text-2xl font-bold text-navy-900 mb-2">Least Privilege Access</h3>
                     <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Access Control</p>
                     <p className="text-zinc-600 leading-relaxed">
                        Strict technical controls ensure no unauthorized human interaction with raw files.
                     </p>
                  </div>
                  <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="bg-zinc-50 p-6 rounded-sm border border-zinc-100">
                        <h4 className="font-bold text-navy-900 mb-2 text-sm">Blind Ingestion</h4>
                        <p className="text-xs text-zinc-600 leading-relaxed">Our frontend architecture utilizes presigned URLs, ensuring metadata is anonymized before entering our network.</p>
                     </div>
                     <div className="bg-zinc-50 p-6 rounded-sm border border-zinc-100">
                        <h4 className="font-bold text-navy-900 mb-2 text-sm">Serverless Isolation</h4>
                        <p className="text-xs text-zinc-600 leading-relaxed">Processing occurs in isolated Lambda environments with no public internet access.</p>
                     </div>
                     <div className="bg-zinc-50 p-6 rounded-sm border border-zinc-100 md:col-span-2">
                        <h4 className="font-bold text-navy-900 mb-2 text-sm">Audit Trails</h4>
                        <p className="text-xs text-zinc-600 leading-relaxed">Every system interaction—from upload to deletion—is logged in immutable AWS CloudTrail ledgers for forensic accountability.</p>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* 3. FOOTER DISCLAIMER */}
      <section className="bg-zinc-100 py-12 px-6 md:px-12 border-t border-zinc-200">
         <div className="container mx-auto max-w-4xl text-center">
            <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl mx-auto">
               <strong>Security Disclaimer:</strong> Centurim aligns its security controls with the HIPAA Security Rule. While our infrastructure is hosted on SOC 2 Type II certified AWS data centers, Centurim itself has not yet completed an independent SOC 2 audit.
            </p>
         </div>
      </section>

    </div>
  );
};

export default CompliancePage;