import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { 
  LegalScaleIcon, 
  SovereignShieldIcon, 
  DataSovereignIcon, 
  ZeroRetentionIcon, 
  DocumentFlowIcon,
  NeuralNodeIcon,
  SovereignLockIcon,
  SecureIngestIcon,
  InfrastructureIcon,
  EphemeralIcon,
  ConfidentialityIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CheckIcon
} from '../ui/Icons';
import { Footer } from '../Footer';
import { PageView } from '../../App';

interface LegalPageProps {
  onNavigate?: (page: PageView) => void;
}

// --- Legal Sub-Components ---

const LegalHero = ({ onNavigate }: { onNavigate?: (page: PageView) => void }) => (
  <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 -z-10 pointer-events-none"></div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-lg font-medium uppercase tracking-wider mb-6 md:mb-8">
           <LegalScaleIcon className="w-4 h-4" /> Litigation Support
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#0B1120] leading-[1.1] mb-6 md:mb-8">
          Clear Your Medical Record <br className="hidden md:block" /><span className="text-[#2563EB]">Backlog Before Year End</span>
        </h1>
        <p className="text-base md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
          We convert unstructured medical records into actionable chronologies and injury summaries in minutes. Accelerate your demand letter preparation with automated litigation support.
        </p>
        <div className="flex justify-center">
          <Button 
            variant="primary" 
            className="h-12 md:h-14 px-10 text-base shadow-lg shadow-slate-900/10 bg-[#0B1120] hover:bg-slate-800 w-full sm:w-auto"
            onClick={() => onNavigate?.('contact')}
          >
            Start Case Review
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

const LegalTrustBar = () => (
  <section className="border-y border-slate-200 bg-white py-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
       <div className="flex flex-wrap justify-center gap-y-6 gap-x-12 md:gap-x-16">
          <div className="flex items-center space-x-2 text-slate-600">
            <SovereignShieldIcon className="w-5 h-5 text-slate-400" />
            <span className="text-lg md:text-lg font-medium uppercase tracking-wide">HIPAA Compliant Architecture</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-600">
            <DataSovereignIcon className="w-5 h-5 text-slate-400" />
            <span className="text-lg md:text-lg font-medium uppercase tracking-wide">US Data Sovereignty</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-600">
            <ZeroRetentionIcon className="w-5 h-5 text-slate-400" />
            <span className="text-lg md:text-lg font-medium uppercase tracking-wide">Zero Retention Protocol</span>
          </div>
       </div>
    </div>
  </section>
);

const LegalDemo = () => (
    <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <div className="max-w-6xl mx-auto relative">
                <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden ring-1 ring-slate-900/5">
                    <div className="bg-[#0B1120] text-white px-4 py-3 flex items-center justify-between">
                         <div className="text-lg font-mono font-bold tracking-widest text-slate-400 uppercase hidden sm:block">Centurim Automated Medical Chronology Engine v1.0</div>
                         <div className="text-lg font-mono font-bold tracking-widest text-slate-400 uppercase sm:hidden">Centurim Engine v1.0</div>
                         <div className="flex gap-2">
                             <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                         </div>
                    </div>
                    <div className="flex flex-col md:flex-row h-auto md:h-[600px] text-left">
                        <div className="w-full md:w-1/2 bg-slate-100 p-6 border-b md:border-b-0 md:border-r border-slate-200 overflow-hidden relative min-h-[300px]">
                            <div className="absolute top-4 left-6 bg-slate-800 text-white text-[10px] px-2 py-1 rounded font-bold uppercase z-10">Source Document</div>
                            <div className="bg-white shadow-sm border border-slate-300 h-full w-full p-4 md:p-8 opacity-90 scale-95 origin-top blur-[0.5px]">
                                <div className="space-y-4 font-serif text-slate-300">
                                     <div className="h-4 w-1/3 bg-slate-300 mb-8"></div>
                                     <div className="h-2 w-full bg-slate-200"></div>
                                     <div className="h-2 w-full bg-slate-200"></div>
                                     <div className="h-2 w-full bg-slate-200"></div>
                                     <div className="h-2 w-2/3 bg-slate-200 mb-6"></div>
                                     <div className="p-4 border-2 border-dashed border-teal-500/50 bg-teal-50/20 rounded">
                                        <div className="h-2 w-full bg-slate-300 mb-2"></div>
                                        <div className="h-2 w-3/4 bg-slate-300"></div>
                                     </div>
                                     <div className="h-32 w-full bg-slate-100 mt-8 border border-slate-200 flex items-center justify-center">
                                         <div className="text-lg text-slate-300 uppercase">X-Ray Image Placeholder</div>
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 bg-white p-0 flex flex-col min-h-[300px]">
                            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                                <h3 className="font-medium text-slate-900 text-lg">Chronology & Facts</h3>
                                <Button variant="primary" className="h-8 px-4 text-lg">Export to Word</Button>
                            </div>
                            <div className="overflow-y-auto p-4 md:p-6 space-y-4">
                                <div className="flex gap-4 group cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                                    <div className="w-20 md:w-24 text-lg font-bold text-slate-500 pt-1 shrink-0">Oct 12, 2023</div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-lg font-medium text-[#0B1120]">ER Admission</span>
                                            <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] rounded border border-slate-200 font-bold uppercase">Pg. 14</span>
                                        </div>
                                        <p className="text-base text-slate-600 leading-relaxed">Patient presents with severe lower back pain following MVA.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-3 rounded-lg bg-blue-50/50 border border-blue-100 relative">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2563EB] rounded-l-lg"></div>
                                    <div className="w-20 md:w-24 text-lg font-bold text-[#2563EB] pt-1 shrink-0">Oct 12, 2023</div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-lg font-medium text-[#0B1120]">Radiology Report</span>
                                            <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 text-[10px] rounded border border-blue-200 font-bold uppercase">Pg. 16</span>
                                        </div>
                                        <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                            X-ray confirms <span className="bg-teal-100 text-teal-800 px-1 rounded">comminuted fracture</span> of L4-L5 vertebrae.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 group cursor-pointer hover:bg-slate-50 p-3 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                                    <div className="w-20 md:w-24 text-lg font-bold text-slate-500 pt-1 shrink-0">Oct 14, 2023</div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-lg font-medium text-[#0B1120]">Orthopedic Consult</span>
                                            <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] rounded border border-slate-200 font-bold uppercase">Pg. 22</span>
                                        </div>
                                        <p className="text-base text-slate-600 leading-relaxed">Surgery recommended. Scheduling per Dr. Smith.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FirmSection = () => (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-widest mb-6">
                        The Sovereign Firm
                    </div>
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B1120] mb-6">Infrastructure for High-Velocity PI & Mass Tort Practices</h2>
                    <p className="text-base text-slate-600 mb-8 leading-relaxed">
                        Modern law firms require clinical intelligence that scales. Centurim provides a defensible, automated workflow designed to handle the inventory of large firms without sacrificing the precision of a medical professional.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: "Inventory Velocity", desc: "Convert unread files into demand-ready reports in hours, not months." },
                            { title: "Defensible Logic", desc: "Deterministic models that extract facts, avoiding generative hallucinations." },
                            { title: "Work Product Enclave", desc: "Secure environment designed for protected attorney work product." },
                            { title: "LNC Efficiency", desc: "Automate the data entry phase to let your LNCs focus on clinical strategy." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-4 border border-slate-100 bg-slate-50/50 rounded-xl">
                                <h4 className="font-bold text-[#0B1120] text-lg mb-1">{item.title}</h4>
                                <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/3] bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative shadow-inner">
                        <div className="absolute inset-0 flex flex-col p-8">
                            <div className="flex justify-between items-center mb-8">
                                <div className="h-6 w-32 bg-slate-200 rounded"></div>
                                <div className="h-6 w-16 bg-blue-100 rounded-full"></div>
                            </div>
                            <div className="flex-1 space-y-4">
                                <div className="h-4 w-full bg-white rounded-lg border border-slate-200 shadow-sm"></div>
                                <div className="h-4 w-full bg-white rounded-lg border border-slate-200 shadow-sm"></div>
                                <div className="h-4 w-3/4 bg-white rounded-lg border border-slate-200 shadow-sm"></div>
                                <div className="h-4 w-full bg-white rounded-lg border border-slate-200 shadow-sm"></div>
                                <div className="h-4 w-5/6 bg-white rounded-lg border border-slate-200 shadow-sm"></div>
                                <div className="h-24 w-full bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg flex items-center justify-center">
                                    <span className="text-blue-400 text-lg font-mono">SOVEREIGN_DATA_TUNNEL_ACTIVE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const PricingSection = ({ onNavigate }: { onNavigate?: (page: PageView) => void }) => {
    const features = [
        { name: "Automated Chronology Generation", solo: true, port: true, enc: true },
        { name: "Injury & Fact Extraction", solo: true, port: true, enc: true },
        { name: "Hyperlinked Source Citations", solo: true, port: true, enc: true },
        { name: "Treatment Gap Identification", solo: true, port: true, enc: true },
        { name: "Provider Master Indexing", solo: true, port: true, enc: true },
        { name: "Export to Word (.docx)", solo: true, port: true, enc: true },
        { name: "Handwritten Note Processing", solo: true, port: true, enc: true },
        { name: "US-East-1 Data Residency", solo: true, port: true, enc: true },
        { name: "Zero Retention Ephemeral Purge", solo: true, port: true, enc: true },
        { name: "Deterministic Logic Engine", solo: true, port: true, enc: true },
        { name: "Blind Ingestion Ingress", solo: false, port: true, enc: true },
        { name: "Priority Processing Queue", solo: false, port: true, enc: true },
        { name: "Dedicated Enclave Cluster", solo: false, port: false, enc: true },
        { name: "Custom BAA Execution", solo: false, port: false, enc: true },
        { name: "API & Webhook Access", solo: false, port: false, enc: true }
    ];

    return (
        <section className="py-24 bg-white border-t border-slate-100" id="pricing">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B1120] mb-4">Pay Per Case. Secure by Design.</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">No upfront retainers. Select the capacity that fits your caseload velocity.</p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {/* Solo */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow">
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-[#0B1120] mb-1">Credit Based</h3>
                            <p className="text-slate-500 text-lg">For Individual Consultants</p>
                        </div>
                        <div className="mb-8">
                            <div className="text-4xl font-medium text-[#0B1120]">$49 <span className="text-base font-normal text-slate-400">/ Case</span></div>
                            <p className="text-lg text-slate-400 mt-2">Up to 500 pages per review</p>
                        </div>
                        <Button variant="outline" className="w-full mb-8" onClick={() => onNavigate?.('contact')}>Purchase Credits</Button>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-base text-slate-600"><CheckIcon className="w-3.5 h-3.5 text-teal-600"/> Rapid 2-Hour Triage</div>
                            <div className="flex items-center gap-2 text-base text-slate-600"><CheckIcon className="w-3.5 h-3.5 text-teal-600"/> Chronology & Injury Lists</div>
                        </div>
                    </div>

                    {/* Portfolio */}
                    <div className="bg-[#0B1120] border border-slate-900 rounded-2xl p-8 flex flex-col text-white relative overflow-hidden shadow-2xl scale-105 z-10">
                        <div className="absolute top-0 right-0 bg-[#2563EB] text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-widest">Most Efficient</div>
                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-1">The 5 Pack</h3>
                            <p className="text-slate-400 text-lg">For Active PI Firms</p>
                        </div>
                        <div className="mb-8">
                            <div className="text-4xl font-medium">$199 <span className="text-base font-normal text-slate-400">/ Bundle</span></div>
                            <p className="text-lg text-slate-500 mt-2">Credits never expire</p>
                        </div>
                        <Button variant="primary" className="w-full mb-8 bg-[#2563EB] hover:bg-blue-600 border-transparent" onClick={() => onNavigate?.('contact')}>Select Bundle</Button>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-lg text-slate-300"><CheckIcon className="w-3.5 h-3.5 text-[#2563EB]"/> Batch Intake Ready</div>
                            <div className="flex items-center gap-2 text-lg text-slate-300"><CheckIcon className="w-3.5 h-3.5 text-[#2563EB]"/> Priority Logic Queues</div>
                        </div>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow">
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-[#0B1120] mb-1">Enclave License</h3>
                            <p className="text-slate-500 text-lg">For Mass Tort Operations</p>
                        </div>
                        <div className="mb-8">
                            <div className="text-4xl font-medium text-[#0B1120]">Custom</div>
                            <p className="text-lg text-slate-400 mt-2">Volume-tiered pricing</p>
                        </div>
                        <Button variant="outline" className="w-full mb-8 border-slate-300" onClick={() => onNavigate?.('contact')}>Contact Engineering</Button>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-base text-slate-600"><CheckIcon className="w-3.5 h-3.5 text-teal-600"/> Full API Access</div>
                            <div className="flex items-center gap-2 text-base text-slate-600"><CheckIcon className="w-3.5 h-3.5 text-teal-600"/> White-Glove Support</div>
                        </div>
                    </div>
                </div>

                {/* Detailed Comparison Table */}
                <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/30">
                    <div className="p-6 md:p-10">
                        <h3 className="text-xl font-medium text-[#0B1120] mb-8">Feature Comparison</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-200">
                                        <th className="py-4 text-lg font-bold text-slate-400 uppercase tracking-widest w-1/2">Extraction Capabilities</th>
                                        <th className="py-4 text-center text-lg font-bold text-slate-400 uppercase tracking-widest">Solo</th>
                                        <th className="py-4 text-center text-lg font-bold text-slate-400 uppercase tracking-widest">Portfolio</th>
                                        <th className="py-4 text-center text-lg font-bold text-slate-400 uppercase tracking-widest">Enclave</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {features.map((f, i) => (
                                        <tr key={i} className="group hover:bg-white transition-colors">
                                            <td className="py-4 text-lg font-medium text-slate-700">{f.name}</td>
                                            <td className="py-4 text-center">
                                                {f.solo ? <CheckIcon className="w-4 h-4 text-teal-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                                            </td>
                                            <td className="py-4 text-center">
                                                {f.port ? <CheckIcon className="w-4 h-4 text-teal-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                                            </td>
                                            <td className="py-4 text-center">
                                                {f.enc ? <CheckIcon className="w-4 h-4 text-teal-500 mx-auto" /> : <span className="text-slate-300">—</span>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const LegalProblem = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="w-full lg:w-1/2">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
                        <DocumentFlowIcon className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B1120] mb-8">
                        The PDF Bottleneck
                    </h2>
                    <p className="text-base md:text-lg text-slate-700 mb-6 leading-relaxed">
                        Your firm operates on inventory velocity. Every day a case file sits unread on a desk is a day your settlement check is delayed.
                    </p>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h4 className="font-medium text-[#0B1120] mb-2 text-lg">The Conflict</h4>
                        <p className="text-slate-600 leading-relaxed font-medium text-lg">
                            It is inefficient for high value attorneys or expensive legal nurse consultants to spend hours manually typing dates from messy hospital records. This administrative friction slows down your entire case pipeline and restricts your cash flow.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-72 h-96">
                        <div className="absolute top-0 left-0 w-full h-full bg-slate-100 border border-slate-200 rounded-lg shadow-sm transform -rotate-6"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-slate-50 border border-slate-200 rounded-lg shadow-sm transform -rotate-3"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-white border border-slate-200 rounded-lg shadow-xl flex flex-col items-center justify-center p-8 text-center">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                <div className="text-2xl font-bold text-slate-400">?</div>
                            </div>
                            <div className="text-slate-900 font-bold text-xl mb-2">Unread Records</div>
                            <div className="text-slate-500 text-lg">3,400+ Pages</div>
                            <div className="mt-8 w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="w-1/12 h-full bg-red-500"></div>
                            </div>
                            <div className="mt-2 text-lg text-red-500 font-bold uppercase tracking-wide">1% Processed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const LegalGuide = () => (
    <section className="py-16 md:py-32 bg-[#0B1120] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
             <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                <div className="flex-1 w-full">
                    <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-lg font-bold text-teal-400 mb-6 uppercase tracking-wider border border-white/5">Automation</div>
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8 leading-tight">We Read the Records So You Do Not Have To</h2>
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-10 border-l-2 border-teal-500 pl-6">
                        You should not have to choose between speed and accuracy. Centurim acts as your automated litigation support team to assist your firm with instant fact extraction.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                             <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                                Our Authority
                             </h4>
                             <p className="text-lg text-slate-400 leading-relaxed">
                                Our engine processes thousands of pages of complex clinical data using deterministic logic.
                             </p>
                        </div>
                         <div>
                             <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                Data Sovereignty
                             </h4>
                             <p className="text-lg text-slate-400 leading-relaxed">
                                We operate on a secure enclave architecture that ensures client confidentiality.
                             </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full max-w-md">
                    <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                        <div className="bg-slate-800/50 px-6 py-4 flex justify-between items-center border-b border-slate-700">
                             <div className="flex items-center gap-3">
                                 <div className="relative">
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                                 </div>
                                 <span className="text-lg font-mono font-bold text-slate-300 tracking-wide">SYSTEM ACTIVE</span>
                             </div>
                             <div className="text-[10px] font-bold text-slate-500 bg-slate-800 px-2 py-1 rounded">US-EAST-1</div>
                        </div>
                        <div className="p-6 space-y-4">
                             <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                                 <div className="flex items-center gap-3">
                                     <NeuralNodeIcon className="w-5 h-5 text-teal-400" />
                                     <span className="text-lg text-slate-300 font-medium">Processing Load</span>
                                 </div>
                                 <span className="text-teal-400 font-mono font-bold text-lg">12ms</span>
                             </div>
                             <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                                 <div className="flex items-center gap-3">
                                     <SovereignLockIcon className="w-5 h-5 text-blue-400" />
                                     <span className="text-lg text-slate-300 font-medium">Encryption</span>
                                 </div>
                                 <span className="text-blue-400 font-mono font-bold text-lg">AES-256</span>
                             </div>
                        </div>
                         <div className="px-6 py-3 bg-slate-800/30 border-t border-slate-700 flex justify-between items-center">
                             <div className="text-[10px] text-slate-500 font-medium">Status: <span className="text-green-500">Operational</span></div>
                             <div className="text-[10px] text-slate-500 font-medium">Uptime: <span className="text-slate-300">99.99%</span></div>
                         </div>
                    </div>
                </div>
             </div>
        </div>
    </section>
);

const LegalTransformation = () => (
    <section className="py-16 md:py-32 bg-slate-50" id="solutions">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
             <div className="text-center mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B1120]">From Document Chaos to Structured Facts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group overflow-hidden flex flex-col">
                    <div className="h-64 bg-slate-50 border-b border-slate-100 flex items-center justify-center relative overflow-hidden p-8">
                         <div className="w-full max-w-sm bg-white border border-slate-200 rounded-lg shadow-sm p-6 relative z-10 transform group-hover:scale-[1.02] transition-transform duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <div className="h-2 w-24 bg-slate-100 rounded"></div>
                            </div>
                            <div className="space-y-3 pl-5 border-l border-slate-100">
                                <div className="h-2 w-full bg-slate-100 rounded"></div>
                                <div className="h-2 w-5/6 bg-slate-100 rounded"></div>
                                <div className="h-2 w-4/6 bg-slate-100 rounded"></div>
                            </div>
                         </div>
                         <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50"></div>
                    </div>
                    <div className="p-8 md:p-10">
                        <h3 className="text-xl font-medium text-[#0B1120] mb-3">Chronology Generation</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Turn PDF chaos into a structured timeline of events. We extract dates, providers, and visit types automatically to create a clear history of care.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group overflow-hidden flex flex-col">
                    <div className="h-64 bg-slate-50 border-b border-slate-100 flex items-center justify-center relative overflow-hidden p-8">
                         <div className="w-full max-w-sm bg-white border border-slate-200 rounded-lg shadow-sm p-6 relative z-10 transform group-hover:scale-[1.02] transition-transform duration-300">
                             <div className="space-y-4 text-lg font-serif text-slate-300">
                                 <div className="h-2 w-full bg-slate-100 rounded"></div>
                                 <div className="flex flex-wrap gap-2 items-center">
                                     <div className="h-2 w-1/3 bg-slate-100 rounded"></div>
                                     <div className="px-2 py-0.5 bg-teal-50 border border-teal-100 rounded text-teal-800 text-[10px] font-sans font-bold">Fracture Detected</div>
                                     <div className="h-2 w-1/4 bg-slate-100 rounded"></div>
                                 </div>
                                 <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                             </div>
                         </div>
                         <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full opacity-50"></div>
                    </div>
                    <div className="p-8 md:p-10">
                        <h3 className="text-xl font-medium text-[#0B1120] mb-3">Fact Extraction</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Extract key medical events such as fractures, surgeries, and injections. We filter out normal findings to highlight the pathology that drives value.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const LegalSecurity = () => (
    <section className="py-16 md:py-32 bg-white border-t border-slate-200" id="security">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B1120] mb-6">
            Built for Litigation Support
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
             We operate on a Secure Enclave architecture designed to meet the rigorous standards of US privacy regulations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#2563EB] ring-1 ring-blue-100">
              <InfrastructureIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-[#0B1120] mb-3">US Data Residency</h3>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">All processing occurs exclusively within AWS US East 1.</p>
          </div>
          <div className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#2563EB] ring-1 ring-blue-100">
              <EphemeralIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-[#0B1120] mb-3">Ephemeral Processing</h3>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">Data exists in memory only for the duration of the analysis.</p>
          </div>
          <div className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#2563EB] ring-1 ring-blue-100">
              <SovereignLockIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-[#0B1120] mb-3">Encryption Standards</h3>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">We utilize AES 256 encryption for data at rest and TLS 1.3 for data in transit.</p>
          </div>
          <div className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#2563EB] ring-1 ring-blue-100">
              <ConfidentialityIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-[#0B1120] mb-3">Confidentiality</h3>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">Architecture designed to support strict non disclosure and confidentiality requirements.</p>
          </div>
        </div>
      </div>
    </section>
);

const LegalStakes = ({ onNavigate }: { onNavigate?: (page: PageView) => void }) => (
    <section className="py-20 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
             <div className="bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-slate-200 max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-medium text-[#0B1120] mb-4">Don't Let the Backlog Freeze Your Cash Flow</h2>
                <p className="text-base text-slate-600 mb-10 max-w-2xl mx-auto">
                    The statute of limitations does not wait for the holidays. Clear your desk and move your cases to demand status today.
                </p>
                <div className="flex justify-center">
                    <Button 
                        variant="primary" 
                        className="h-14 px-10 text-base"
                        onClick={() => onNavigate?.('contact')}
                    >
                        Start Case Review
                    </Button>
                </div>
             </div>
        </div>
    </section>
);

export const LegalPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Centurim Legal',
            applicationCategory: 'LegalService',
            operatingSystem: 'Cloud',
            offers: {
              '@type': 'Offer',
              price: '49.00',
              priceCurrency: 'USD',
              description: 'Single Case Review'
            },
            description: 'Automated medical chronology generation for litigation support.',
            featureList: [
              'Medical Chronology',
              'Injury Extraction',
              'Treatment Gap Detection'
            ],
            audience: {
              '@type': 'BusinessAudience',
              audienceType: 'Personal Injury Attorneys'
            }
          }),
        }}
      />
      <LegalHero onNavigate={onNavigate} />
      <LegalTrustBar />
      <LegalDemo />
      <LegalProblem />
      <FirmSection />
      <LegalGuide />
      <LegalTransformation />
      <LegalSecurity />
      <PricingSection onNavigate={onNavigate} />
      <LegalStakes onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};
