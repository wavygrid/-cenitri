import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Accordion } from './ui/Accordion';
import { 
  ShieldCheck, Lock, Database, Server, Globe, 
  CheckCircle2, FileCheck, EyeOff, FileKey, 
  ShieldAlert, Key, Building2, ScrollText, Network,
  Fingerprint, FileLock2, Siren
} from 'lucide-react';

const CompliancePage: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'identity' | 'app' | 'data' | 'infra'>('data');

  const layers = {
    identity: {
      title: "Identity Layer",
      icon: Fingerprint,
      status: "Enforced",
      details: [
        "Multi-Factor Authentication (MFA) on all accounts",
        "Role-Based Access Control (RBAC) for firm staff",
        "SAML 2.0 / SSO for Enterprise Tenants",
        "Biometric session validation for sensitive actions"
      ]
    },
    app: {
      title: "Application Layer",
      icon: Network,
      status: "Hardened",
      details: [
        "OWASP Top 10 mitigation via WAF",
        "Malware sandboxing for all client uploads",
        "Rate limiting and DDoS protection",
        "Automated vulnerability scanning (daily)"
      ]
    },
    data: {
      title: "Data Layer",
      icon: Database,
      status: "Encrypted",
      details: [
        "AES-256 encryption at rest",
        "TLS 1.3 encryption in transit",
        "Row-Level Security (RLS) tenant isolation",
        "Immutable audit logs for chain of custody"
      ]
    },
    infra: {
      title: "Infrastructure",
      icon: Server,
      status: "Sovereign",
      details: [
        "AWS Virtual Private Cloud (VPC) isolation",
        "Region-specific data residency (USA/CAN/EU/AUS)",
        "Zero-trust network architecture",
        "Intrusion Detection System (IDS) monitoring"
      ]
    }
  };

  return (
    <div className="bg-white text-zinc-900">
      {/* 1. TRUST CENTER HERO */}
      <section className="bg-white pt-40 pb-32 md:pt-48 md:pb-40 border-b border-zinc-200">
         <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-16">
               <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-zinc-200 text-xs font-bold uppercase tracking-widest mb-10 text-zinc-500">
                     <ShieldCheck size={14} /> Security Status: Operational
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-zinc-900 leading-tight">
                    Zero Trust. <br />
                    <span className="text-zinc-900">Defensive Architecture.</span>
                  </h1>
                  <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl font-light">
                    We operate as a Data Processor under your explicit instruction. Our architecture guarantees Solicitor-Client Privilege through strict technical isolation and Sovereign Data Residency.
                  </p>
               </div>
               
               {/* Compliance Badge Stack */}
               <div className="flex flex-col gap-4 min-w-[300px]">
                  <div className="flex items-center justify-between p-5 bg-white border border-zinc-200 rounded shadow-sm">
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="font-bold text-sm text-zinc-900">SOC 2 Type II</span>
                     </div>
                     <CheckCircle2 size={16} className="text-zinc-400" />
                  </div>
                  <div className="flex items-center justify-between p-5 bg-white border border-zinc-200 rounded shadow-sm">
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="font-bold text-sm text-zinc-900">ISO 27001</span>
                     </div>
                     <CheckCircle2 size={16} className="text-zinc-400" />
                  </div>
                  <div className="flex items-center justify-between p-5 bg-white border border-zinc-200 rounded shadow-sm">
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="font-bold text-sm text-zinc-900">GDPR / PIPEDA</span>
                     </div>
                     <CheckCircle2 size={16} className="text-zinc-400" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 2. REGULATORY ALIGNMENT GRID */}
      <section className="py-32 bg-zinc-50 border-b border-zinc-200">
         <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-24">
               <h2 className="text-4xl font-bold text-zinc-900 mb-6">Jurisdictional Compliance</h2>
               <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light">
                  Our infrastructure automatically adapts to the data protection laws of your client's region.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {/* PIPEDA */}
               <div className="bg-white p-8 rounded-lg border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-zinc-50 rounded flex items-center justify-center text-zinc-900 mb-8 border border-zinc-100">
                     <Building2 size={24} />
                  </div>
                  <h3 className="font-bold text-xl text-zinc-900 mb-3">Canada (PIPEDA)</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                     Compliant with Personal Information Protection and Electronic Documents Act. Servers located in AWS Canada Central (Montreal).
                  </p>
                  <Badge variant="secondary" className="bg-zinc-100 text-zinc-600">Bill C-27 Ready</Badge>
               </div>

               {/* GDPR */}
               <div className="bg-white p-8 rounded-lg border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-zinc-50 rounded flex items-center justify-center text-zinc-900 mb-8 border border-zinc-100">
                     <Globe size={24} />
                  </div>
                  <h3 className="font-bold text-xl text-zinc-900 mb-3">Europe (GDPR)</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                     Full compliance with Article 28 (Processor). Data hosted in Frankfurt or London. Standard Contractual Clauses (SCCs) available.
                  </p>
                  <Badge variant="secondary" className="bg-zinc-100 text-zinc-600">Data Sovereign</Badge>
               </div>

               {/* Law Society */}
               <div className="bg-white p-8 rounded-lg border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-zinc-50 rounded flex items-center justify-center text-zinc-900 mb-8 border border-zinc-100">
                     <ScrollText size={24} />
                  </div>
                  <h3 className="font-bold text-xl text-zinc-900 mb-3">Law Society</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                     Meets digital record retention standards (7 years). Immutable backups ensure business continuity and audit readiness.
                  </p>
                  <Badge variant="secondary" className="bg-zinc-100 text-zinc-600">Retention Policy</Badge>
               </div>

               {/* Privilege */}
               <div className="bg-white p-8 rounded-lg border border-zinc-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-zinc-50 rounded flex items-center justify-center text-zinc-900 mb-8 border border-zinc-100">
                     <FileLock2 size={24} />
                  </div>
                  <h3 className="font-bold text-xl text-zinc-900 mb-3">Legal Privilege</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                     Technical isolation ensures no vendor access to client files. You retain sole cryptographic custody of sensitive materials.
                  </p>
                  <Badge variant="secondary" className="bg-zinc-100 text-zinc-600">Privilege Safe</Badge>
               </div>
            </div>
         </div>
      </section>

      {/* 3. DEFENSIVE ARCHITECTURE (Interactive) */}
      <section className="py-32 bg-white border-b border-zinc-200">
         <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               
               {/* Controls */}
               <div className="lg:col-span-4 space-y-4">
                  <h2 className="text-4xl font-bold text-zinc-900 mb-8">Defense in Depth</h2>
                  <p className="text-zinc-500 mb-10 text-lg">
                     Explore our four-tier security model. Each layer operates independently to ensure total containment of client data.
                  </p>
                  
                  {(Object.keys(layers) as Array<keyof typeof layers>).map((key) => {
                     const layer = layers[key];
                     return (
                        <button
                           key={key}
                           onClick={() => setActiveLayer(key)}
                           className={`w-full text-left p-6 rounded border transition-all duration-300 flex items-center justify-between group ${
                              activeLayer === key 
                              ? 'bg-zinc-900 border-zinc-900 text-white shadow-lg' 
                              : 'bg-white border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:bg-zinc-50'
                           }`}
                        >
                           <div className="flex items-center gap-4">
                              <span className="font-bold text-lg">{layer.title}</span>
                           </div>
                           <div className={`text-xs font-bold px-3 py-1 rounded uppercase tracking-wider ${activeLayer === key ? 'bg-zinc-800 text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                              {layer.status}
                           </div>
                        </button>
                     );
                  })}
               </div>

               {/* Visualization Pane */}
               <div className="lg:col-span-8">
                  <div className="bg-zinc-50 border border-zinc-200 rounded p-12 h-full flex flex-col justify-center">
                     
                     <div className="relative z-10">
                        <div className="mb-10 flex items-center gap-6 border-b border-zinc-200 pb-8">
                           <div className="p-4 bg-white border border-zinc-200 rounded shadow-sm">
                              {React.createElement(layers[activeLayer].icon, { size: 32, className: "text-zinc-900" })}
                           </div>
                           <div>
                              <h3 className="text-3xl font-bold text-zinc-900">{layers[activeLayer].title}</h3>
                              <p className="text-zinc-500 font-medium mt-1">Security Protocol Breakdown</p>
                           </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {layers[activeLayer].details.map((detail, i) => (
                              <div key={i} className="bg-white p-6 rounded border border-zinc-200 flex items-start gap-4 shadow-sm">
                                 <CheckCircle2 size={18} className="text-zinc-900 shrink-0 mt-0.5" />
                                 <span className="text-sm text-zinc-600 font-medium leading-relaxed">{detail}</span>
                              </div>
                           ))}
                        </div>

                        {/* Interactive Visual Cue */}
                        <div className="mt-12 pt-8 border-t border-zinc-200">
                           <div className="flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-widest">
                              <span>System Status</span>
                              <span className="flex items-center gap-2">
                                 <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                 Monitoring Active
                              </span>
                           </div>
                           <div className="mt-4 h-1 bg-zinc-200 rounded-full overflow-hidden w-full">
                              <div className="h-full bg-zinc-400 w-full animate-pulse"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. AI SAFETY SECTION - Light Mode */}
      <section className="py-32 bg-white border-b border-zinc-200">
         <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center gap-20">
               <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs font-bold uppercase tracking-widest mb-8">
                     <EyeOff size={14} /> AI Safety Protocol
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-900">Zero-Retention Inference.</h2>
                  <p className="text-xl text-zinc-500 leading-relaxed mb-10 font-light">
                     We utilize a stateless AI architecture. Client data is passed to the model for analysis and immediately discarded from the model's memory. <strong className="text-zinc-900">Your client data is never used to train our models.</strong>
                  </p>
                  <Button variant="outline" className="text-zinc-900 border-zinc-300 hover:bg-zinc-50">
                     Read the AI Safety Whitepaper
                  </Button>
               </div>
               
               <div className="flex-1 w-full max-w-lg">
                  <div className="bg-zinc-50 border border-zinc-200 rounded p-8 font-mono text-xs relative overflow-hidden shadow-sm text-zinc-600">
                     <div className="flex justify-between border-b border-zinc-200 pb-4 mb-4">
                        <span className="text-zinc-400 font-bold">REQUEST_ID: <span className="text-zinc-900">REQ_8821X</span></span>
                        <span className="text-emerald-600 font-bold">ENCRYPTED</span>
                     </div>
                     <div className="space-y-4">
                        <div className="flex gap-4">
                           <div className="w-6 text-zinc-300 text-right">01</div>
                           <div className="text-zinc-900">INPUT: {"{ encrypted_blob }"}</div>
                        </div>
                        <div className="flex gap-4">
                           <div className="w-6 text-zinc-300 text-right">02</div>
                           <div className="text-zinc-900">PROCESS: analyze_evidence(blob)</div>
                        </div>
                        <div className="flex gap-4">
                           <div className="w-6 text-zinc-300 text-right">03</div>
                           <div className="text-zinc-900">OUTPUT: {"{ strategy_brief }"}</div>
                        </div>
                        <div className="flex gap-4">
                           <div className="w-6 text-zinc-300 text-right">04</div>
                           <div className="text-zinc-900">CLEANUP: purge_memory_cache()</div>
                        </div>
                        <div className="flex gap-4">
                           <div className="w-6 text-zinc-300 text-right">05</div>
                           <div className="text-zinc-400 italic">// Memory cleared. No traces remain.</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-32 bg-zinc-50">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="text-4xl font-bold text-zinc-900 mb-16 text-center">Compliance FAQ</h2>
          <div className="bg-white rounded border border-zinc-200 p-10 shadow-sm">
             <Accordion items={[
               {
                 value: "item-1",
                 trigger: "Who owns the data?",
                 content: "You do. We act solely as the Data Processor. You retain full Intellectual Property rights and ownership of all client data entered into the system."
               },
               {
                 value: "item-2",
                 trigger: "How do you handle Solicitor-Client Privilege?",
                 content: "We implement technical measures that prevent our support staff from accessing client files without your explicit, temporary permission tokens. This helps maintain the privilege bubble."
               },
               {
                 value: "item-3",
                 trigger: "Can I export my data if I leave?",
                 content: "Yes. We support full data portability in standard JSON and PDF formats, allowing you to migrate to other practice management systems easily."
               },
               {
                 value: "item-4",
                 trigger: "Where are the servers located?",
                 content: "We allow you to select your data residency zone (US, Canada, EU, or Australia) upon account creation to satisfy local bar association requirements."
               }
             ]} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompliancePage;