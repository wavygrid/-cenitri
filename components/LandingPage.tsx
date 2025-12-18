import React, { useState } from 'react';
import { Button } from './ui/Button';
import { PageView } from '../App';
import { 
  CheckIcon, 
  ShieldCheckIcon, 
  DatabaseIcon, 
  FileXIcon, 
  LockIcon, 
  ChevronDownIcon,
  ArrowRightIcon,
  NewspaperIcon
} from './ui/Icons';
import { Footer } from './Footer';
import { SecurityBanner } from './SecurityBanner';

interface LandingPageProps {
  onNavigate: (page: PageView) => void;
}

// --- Visual Components for Zig Zag ---

const VisualPaperStack = () => (
  <div className="relative w-full max-w-md mx-auto aspect-square bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center p-8">
      <div className="relative w-48 h-64 bg-white border border-slate-200 rounded-lg shadow-lg rotate-[-6deg] z-10 flex flex-col p-4">
          <div className="h-2 w-1/3 bg-slate-100 rounded mb-4"></div>
          <div className="h-1.5 w-full bg-slate-50 rounded mb-2"></div>
          <div className="h-1.5 w-full bg-slate-50 rounded mb-2"></div>
          <div className="h-1.5 w-2/3 bg-slate-50 rounded"></div>
      </div>
      <div className="absolute w-48 h-64 bg-white border border-slate-200 rounded-lg shadow-md rotate-[-3deg] z-0 flex flex-col p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="absolute -right-4 bottom-12 bg-blue-600 text-white text-lg font-bold px-4 py-2 rounded-lg shadow-xl z-20 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Processed: 500+ Pages
      </div>
  </div>
);

const VisualCitation = () => (
  <div className="relative w-full max-w-md mx-auto aspect-square bg-blue-50/50 rounded-2xl border border-blue-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-xl border border-slate-100 w-full p-6">
          <div className="flex items-start gap-4 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">01</div>
              <div className="flex-1">
                  <p className="text-base font-medium text-slate-900 mb-1">Fracture of L4 Vertebrae</p>
                  <p className="text-base text-slate-500">Confirmed via MRI imaging.</p>
              </div>
          </div>
          <div className="pl-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-lg font-medium text-blue-600 hover:bg-blue-50 cursor-pointer transition-colors">
                  <span>Source: Pg 42, Para 3</span>
                  <ArrowRightIcon className="w-3 h-3" />
              </div>
          </div>
      </div>
  </div>
);

const VisualLogicNode = () => (
  <div className="relative w-full max-w-md mx-auto aspect-square bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center p-8">
      <div className="relative flex flex-col items-center gap-6 w-full">
          <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm w-48 text-center">
              <div className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-1">Input</div>
              <div className="text-base font-medium text-slate-800">Unstructured PDF</div>
          </div>
          <div className="h-8 w-0.5 bg-slate-300"></div>
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg z-10">
              <div className="w-6 h-6 border-2 border-white rounded-full"></div>
          </div>
          <div className="h-8 w-0.5 bg-slate-300"></div>
          <div className="flex gap-4 w-full justify-center">
              <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm w-32 text-center">
                  <div className="text-lg font-bold text-slate-400 uppercase mb-1">Chronology</div>
                  <div className="h-1.5 w-16 bg-blue-100 mx-auto rounded"></div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm w-32 text-center">
                  <div className="text-lg font-bold text-slate-400 uppercase mb-1">Red Flags</div>
                  <div className="h-1.5 w-16 bg-red-100 mx-auto rounded"></div>
              </div>
          </div>
      </div>
  </div>
);

const VisualUpload = () => (
  <div className="relative w-full max-w-md mx-auto aspect-square bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center p-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
      <div className="bg-white rounded-xl w-full p-6 shadow-2xl relative z-10">
          <div className="border-2 border-dashed border-slate-200 rounded-lg bg-slate-50 p-8 text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRightIcon className="w-5 h-5 -rotate-90" />
              </div>
              <p className="text-base font-medium text-slate-900">Drag & Drop Medical Records</p>
              <p className="text-base text-slate-500 mt-1">Supports PDF, TIFF, JPEG</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
              <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white"></div>
              </div>
              <div className="text-lg font-bold text-green-600 uppercase tracking-wider">Secure Tunnel Ready</div>
          </div>
      </div>
  </div>
);

// --- Visual Snippets for Grid Cards ---

const VisualChronologySnippet = () => (
  <div className="bg-slate-50 rounded-lg border border-slate-100 p-5 mt-auto">
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="w-10 text-[10px] font-bold text-slate-400 text-right pt-0.5">Oct 12</div>
        <div className="relative flex flex-col items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 z-10"></div>
            <div className="w-px h-full bg-slate-200 absolute top-2.5"></div>
        </div>
        <div className="flex-1">
          <div className="h-2 w-20 bg-slate-200 rounded mb-1.5"></div>
          <div className="h-1.5 w-full bg-slate-100 rounded"></div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-10 text-[10px] font-bold text-slate-400 text-right pt-0.5">Oct 14</div>
        <div className="relative flex flex-col items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 z-10"></div>
        </div>
        <div className="flex-1">
           <div className="h-2 w-16 bg-slate-200 rounded mb-1.5"></div>
           <div className="h-1.5 w-3/4 bg-slate-100 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const VisualVarianceSnippet = () => (
  <div className="bg-slate-50 rounded-lg border border-slate-100 p-5 mt-auto">
     <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-bold text-slate-400 uppercase tracking-wider">Discrepancy Found</div>
        <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
        </div>
     </div>
     <div className="space-y-2">
         <div className="bg-white border border-red-100 rounded p-3 flex justify-between items-center shadow-sm">
             <div className="h-1.5 w-24 bg-red-100 rounded"></div>
             <div className="text-lg font-bold text-red-500">Source</div>
         </div>
         <div className="bg-white border border-slate-200 rounded p-3 flex justify-between items-center opacity-60 grayscale">
             <div className="h-1.5 w-16 bg-slate-200 rounded"></div>
             <div className="text-lg font-bold text-slate-400">Claim</div>
         </div>
     </div>
  </div>
);

const VisualRevenueSnippet = () => (
   <div className="bg-slate-50 rounded-lg border border-slate-100 p-5 mt-auto">
      <div className="flex justify-between items-end mb-4">
         <div>
             <div className="h-1.5 w-12 bg-slate-200 rounded mb-1"></div>
             <div className="h-1.5 w-8 bg-slate-200 rounded"></div>
         </div>
         <div className="text-lg font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">+$450</div>
      </div>
      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
          <div className="bg-emerald-500 w-2/3 h-full rounded-full"></div>
      </div>
      <div className="flex justify-between mt-2">
          <div className="text-base text-slate-400">Identified</div>
          <div className="text-base text-slate-400">Captured</div>
      </div>
   </div>
);

const VisualRetentionSnippet = () => (
   <div className="bg-slate-50 rounded-lg border border-slate-100 p-5 mt-auto flex flex-col items-center justify-center py-8">
       <div className="relative mb-3">
           <div className="w-12 h-14 border-2 border-slate-200 bg-white rounded flex items-center justify-center">
               <div className="w-6 h-0.5 bg-slate-100"></div>
           </div>
           <div className="absolute inset-0 bg-slate-50/90 flex items-center justify-center backdrop-blur-[1px]">
               <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
               </div>
           </div>
       </div>
       <div className="text-lg font-bold text-slate-500 uppercase tracking-widest">Securely Purged</div>
   </div>
);


export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How does the Centurim Engine differ from standard OCR tools?",
      a: "Standard OCR (Optical Character Recognition) simply converts images into text. Centurim is a Semantic Extraction Engine. It understands the context of the data—distinguishing between a \"Past Medical History\" date and an \"Admission\" date, or recognizing that a handwritten note on a margin contradicts a typed billing code. We turn text into structured, decision-ready intelligence."
    },
    {
      q: "What specific file formats and document types can be processed?",
      a: "The system is designed for high-variability inputs. We accept PDFs, TIFFs, JPGs, and PNGs. The engine is tuned to process complex, unstructured documents including: Handwritten Physician/Site Notes, Scanned Faxes with noise/skew, Multi-layout Hospital Transfer Packets, and Non-standard Invoice formats."
    },
    {
      q: "Do I need to train the AI on my specific data?",
      a: "No. Centurim utilizes Pre-Trained Logic Models specific to each vertical (Healthcare, Legal, Logistics). You do not need to upload training sets or configure rules. The system is ready to audit PDPM variances, Medical Chronologies, or Pay Apps immediately upon login."
    },
    {
      q: "How does the system mitigate AI hallucination?",
      a: "We utilize a Deterministic Comparator approach rather than open-ended generation. The engine is restricted to extracting facts present in the source text. Furthermore, every finding includes a Source-Anchored Citation (a direct hyperlink to the original page), forcing the system to \"show its work\" for human verification."
    },
    {
      q: "What is the integration requirement for my current software?",
      a: "Zero. Centurim operates as a secure, browser-based overlay. You do not need to integrate with Epic, PointClickCare, or Procore. You simply drag-and-drop files into our secure tunnel, and download the results. This bypasses IT implementation backlogs entirely."
    },
    {
      q: "Can I customize the output format?",
      a: "Yes. While our standard reports are optimized for specific workflows (e.g., Chronologies, Variance Tables), data can be exported in PDF, Word (.docx), or Excel (.csv) formats to fit into your existing demand letters, billing adjustments, or ERP systems."
    },
    {
      q: "What happens to my data after the report is generated?",
      a: "We operate on a Zero-Retention Protocol. Once you download your report, the source files are cryptographically deleted from our servers after a short, secure retention window (typically 7 days) to allow for retrieval. We do not use your data to train public models."
    },
    {
      q: "Is this a subscription or pay-per-use?",
      a: "We offer both. For high-volume enterprises, we offer monthly licenses. For independent consultants and solo firms, we offer a Credit-Based System (Pay-Per-File), allowing you to bill the cost directly to a specific case or project without a recurring contract."
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="w-full lg:w-1/2 text-left">
              {/* Hero Header 50px */}
              <h1 className="text-[36px] md:text-[50px] font-medium tracking-tight text-[#0B1120] leading-[1.1] mb-8">
                Turn Unstructured Medical Records into <span className="text-[#2563EB]">Clinical Intelligence</span>
              </h1>
              {/* Subheader 18px */}
              <p className="text-base text-slate-600 mb-10 leading-relaxed font-medium">
                We convert thousands of pages of raw medical PDFs into structured chronologies and variance reports. Our autonomous engine extracts clinical facts with review ready precision for legal and healthcare workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  variant="primary"
                  className="h-14 px-8 text-base"
                  onClick={() => onNavigate('contact')}
                >
                  Start Secure Review
                </Button>
                <Button
                  variant="outline"
                  className="h-14 px-8 text-base"
                  onClick={() => {
                    document.getElementById('engine')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  See How It Works
                </Button>
              </div>
              <img
                src="/HIPAA_DARK.svg"
                alt="HIPAA Compliant"
                className="h-14 w-auto"
              />
            </div>

            <div className="w-full lg:w-1/2">
               <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 shadow-2xl">
                   <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                       <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white">
                           <div>
                               <div className="text-lg font-bold uppercase tracking-widest text-slate-400 mb-1">System Output</div>
                               <h3 className="text-base font-bold text-[#0B1120]">Chronology_v2.pdf</h3>
                           </div>
                           <div className="flex items-center gap-2">
                               <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                               <span className="text-lg font-bold text-slate-500">Live</span>
                           </div>
                       </div>
                       <div className="p-6 space-y-6 bg-white min-h-[300px]">
                           <div className="flex gap-6">
                               <div className="w-20 shrink-0 text-right">
                                   <div className="text-base font-bold text-slate-900">Oct 12</div>
                                   <div className="text-base text-slate-400">2023</div>
                               </div>
                               <div className="flex-1 border-l-2 border-blue-100 pl-6 pb-6 relative">
                                   <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                                   <h4 className="text-base font-bold text-[#0B1120] mb-2">Emergency Admission</h4>
                                   <p className="text-base text-slate-600 leading-relaxed">
                                       Patient presents with severe localized pain. Imaging ordered.
                                   </p>
                                   <div className="mt-3 flex gap-2">
                                       <span className="px-2 py-1 bg-slate-100 text-slate-600 text-lg font-bold uppercase rounded border border-slate-200">ICD-10: M54.5</span>
                                   </div>
                               </div>
                           </div>
                           <div className="flex gap-6">
                               <div className="w-20 shrink-0 text-right">
                                   <div className="text-base font-bold text-slate-900">Oct 14</div>
                                   <div className="text-base text-slate-400">2023</div>
                               </div>
                               <div className="flex-1 border-l-2 border-slate-100 pl-6 relative">
                                   <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                   <h4 className="text-base font-bold text-[#0B1120] mb-2">MRI Results</h4>
                                   <p className="text-base text-slate-600 leading-relaxed">
                                       Confirmed fracture at L4. Surgical consultation recommended.
                                   </p>
                               </div>
                           </div>
                       </div>
                   </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: SECURITY AND COMPLIANCE BANNER */}
      <SecurityBanner onNavigate={onNavigate} />

      {/* SECTION 2: THE ENGINE (Zig Zag) */}
      <section className="py-24 bg-white" id="engine">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-24 md:space-y-32">
            
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                <div className="w-full md:w-1/2">
                    {/* Section Header 28px */}
                    <h2 className="text-[28px] font-medium text-[#0B1120] mb-6">Analyze 500+ pages in minutes not days</h2>
                    {/* Body 16px */}
                    <p className="text-base text-slate-600 leading-relaxed mb-8">
                        Centurim automates the review of medical records and claims documents. We turn complex unstructured records into structured and verifiable outputs without the manual bottleneck.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <VisualPaperStack />
                </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
                <div className="w-full md:w-1/2">
                    <h2 className="text-[28px] font-medium text-[#0B1120] mb-6">Source anchored verification on extracted findings</h2>
                    <p className="text-base text-slate-600 leading-relaxed mb-8">
                        We do not ask you to trust a black box. Extracted clinical events include a direct hyperlink to the specific page in the source PDF. Verify findings instantly.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <VisualCitation />
                </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                <div className="w-full md:w-1/2">
                    <h2 className="text-[28px] font-medium text-[#0B1120] mb-6">From sorting records to identifying insights</h2>
                    <p className="text-base text-slate-600 leading-relaxed mb-8">
                        Turn stacks of claim documents into an organized and searchable medical chronology. Filter out administrative noise and focus on the pathology that drives value.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <VisualLogicNode />
                </div>
            </div>

            {/* Row 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
                <div className="w-full md:w-1/2">
                    <h2 className="text-[28px] font-medium text-[#0B1120] mb-6">Zero Integration Required</h2>
                    <p className="text-base text-slate-600 leading-relaxed mb-8">
                        Bypass the IT backlog. Centurim operates as a secure browser based audit tool. Upload files via our blind ingestion tunnel and receive reports instantly.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <VisualUpload />
                </div>
            </div>

        </div>
      </section>

      {/* SECTION 3: USE CASES (The Grid) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
                {/* Section Header 28px */}
                <h2 className="text-[28px] font-medium text-[#0B1120]">Structured Intelligence for Every Workflow</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Card 1 */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    {/* Subheader 21px */}
                    <h3 className="text-[21px] font-bold text-[#0B1120] mb-3">Medical Chronologies</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-base">
                        Transform unstructured records into searchable timelines for Personal Injury and Malpractice.
                    </p>
                    <VisualChronologySnippet />
                </div>
                {/* Card 2 */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    <h3 className="text-[21px] font-bold text-[#0B1120] mb-3">Variance Detection</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-base">
                        Spot medical risks and treatment gaps or missing records in seconds.
                    </p>
                    <VisualVarianceSnippet />
                </div>
                {/* Card 3 */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    <h3 className="text-[21px] font-bold text-[#0B1120] mb-3">Revenue Integrity</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-base">
                        Audit MDS 3.0 assessments against hospital transfer packets to capture missed NTA revenue.
                    </p>
                    <VisualRevenueSnippet />
                </div>
                {/* Card 4 */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    <h3 className="text-[21px] font-bold text-[#0B1120] mb-3">Zero Retention</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-base">
                        Source files are cryptographically deleted immediately after analysis to minimize liability.
                    </p>
                    <VisualRetentionSnippet />
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 5: SECURITY (The Dark Section) */}
      <section className="py-24 bg-[#0B1120] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
                {/* CTA Header 36px */}
                <h2 className="text-[36px] font-medium text-white mb-8">
                    Secure Medical Record Processing You Can Trust
                </h2>
                <p className="text-[21px] text-slate-300 mb-12 leading-relaxed font-medium">
                    We operate on a Secure Enclave architecture. We execute comprehensive Business Associate Agreements (BAA) with all clients to ensure your data remains sovereign and secure.
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-12 text-slate-300 font-medium text-base">
                    <div className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-emerald-400" /> HIPAA Compliant</div>
                    <div className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-emerald-400" /> US Data Sovereignty</div>
                    <div className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-emerald-400" /> AES 256 Encryption at Rest</div>
                    <div className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-emerald-400" /> TLS 1.3 Encryption in Transit</div>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 6: FAQ (Accordion) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-lg font-medium text-[#0B1120] mb-12 text-center">Operational & Technical FAQ</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                        <button 
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 text-left transition-colors"
                        >
                            {/* Subheader 21px */}
                            <span className="text-[21px] font-bold text-slate-900 pr-6">{faq.q}</span>
                            <ChevronDownIcon className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                        </button>
                        {openFaq === index && (
                            <div className="p-6 pt-0 bg-white text-slate-600 leading-relaxed font-medium text-base">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SECTION 7: FOOTER CTA */}
      <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
              {/* CTA Header 36px */}
              <h2 className="text-[36px] font-medium text-white mb-8">Transform Your Medical Document Processing</h2>
              <Button 
                variant="white" 
                className="h-14 px-10 text-lg shadow-xl"
                onClick={() => onNavigate('contact')}
              >
                  Start Pilot Audit
              </Button>
          </div>
      </section>

      {/* SECTION 8: NEWS ARTICLES */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <h3 className="text-[28px] font-bold text-[#0B1120] mb-10">Latest Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                      "The State of AI in Legal Tech 2025",
                      "Reducing Administrative Burden in Skilled Nursing",
                      "CMS Updates: Impact on PDPM Reimbursement",
                      "Data Sovereignty: Why AWS East-1 Matters"
                  ].map((title, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow cursor-pointer group h-full flex flex-col justify-between">
                          <div>
                              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-4 text-slate-400 group-hover:text-blue-600 transition-colors">
                                  <NewspaperIcon className="w-5 h-5" />
                              </div>
                              <h4 className="text-[21px] font-bold text-[#0B1120] mb-2 leading-tight group-hover:text-blue-600 transition-colors">{title}</h4>
                          </div>
                          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-lg font-bold text-slate-400 group-hover:text-blue-600">
                              Read Article <ArrowRightIcon className="w-4 h-4" />
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};