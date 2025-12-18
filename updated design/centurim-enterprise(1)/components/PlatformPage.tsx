import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { 
  DocumentIcon, 
  ListFilterIcon, 
  BanIcon, 
  ChronologyIcon, 
  PulseIcon, 
  AlertCircleIcon, 
  CheckCircleIcon, 
  UsersIcon, 
  MicroscopeIcon,
  LightningIcon,
  DatabaseIcon,
  LockIcon,
  ScanIcon,
  BrainIcon,
  FingerprintIcon,
  ArrowRightIcon,
  ShieldIcon,
  CloudUploadIcon
} from './ui/Icons';
import { Footer } from './Footer';
import { PageView } from '../App';

interface PlatformPageProps {
    onNavigate?: (page: PageView) => void;
}

// --- Sub-Components ---

const PlatformHero = ({ onNavigate }: { onNavigate?: (page: PageView) => void }) => (
  <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-white">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/80 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 -z-10"></div>
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="max-w-4xl mx-auto text-center">
        {/* text-5xl/7xl -> text-4xl/6xl, font-extrabold -> font-medium */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#0B1120] leading-[1.1] mb-6 md:mb-8">
          The Anatomy of an <br className="hidden md:block"/> <span className="text-[#2563EB]">Automated Legal Review</span>
        </h1>
        <p className="text-base md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
          Explore the technical capabilities of the Centurim Engine. We have engineered a litigation support workflow designed to handle the complexity of unstructured medical evidence and the rigidity of legal deadlines.
        </p>
        <div className="flex justify-center">
          <Button 
            variant="primary" 
            className="h-12 md:h-14 px-8 md:px-10 text-base shadow-lg shadow-blue-900/10 w-full sm:w-auto"
            onClick={() => onNavigate?.('contact')}
          >
            Start Case Review
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const ProcessFlow = () => (
  <section className="py-24 bg-white border-b border-slate-100 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
            {/* text-4xl -> text-3xl, font-bold -> font-medium */}
            <h2 className="text-3xl md:text-4xl font-medium text-[#0B1120] mb-4">From Chaos to Clarity</h2>
            <p className="text-xl text-slate-600 font-medium">Three steps to structure your medical evidence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Step 1 */}
            <div className="group relative">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center z-10 relative">
                    <div className="mb-6">
                        <span className="text-xs font-medium tracking-widest text-[#2563EB] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Step 01</span>
                    </div>
                    <div className="w-24 h-24 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                         <div className="w-12 h-12 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-white">
                             <CloudUploadIcon className="w-5 h-5 text-slate-400" />
                         </div>
                    </div>
                    {/* text-xl -> text-lg, font-bold -> font-medium */}
                    <h3 className="text-lg font-medium text-[#0B1120] mb-3">Secure Ingest</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Upload raw PDFs of any size via our secure, encrypted tunnel. We handle intake packets, hand-written notes, and imaging discs.
                    </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-8 lg:-right-10 transform -translate-y-1/2 z-0 text-slate-200">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center z-10 relative">
                    <div className="mb-6">
                        <span className="text-xs font-medium tracking-widest text-[#2563EB] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Step 02</span>
                    </div>
                    <div className="w-24 h-24 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                         <div className="w-14 space-y-2 bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                             <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                 <div className="h-full w-2/3 bg-blue-500"></div>
                             </div>
                             <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                 <div className="h-full w-1/3 bg-blue-500"></div>
                             </div>
                         </div>
                    </div>
                    <h3 className="text-lg font-medium text-[#0B1120] mb-3">Neural Analysis</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        The engine classifies documents, reads clinical shorthand, and extracts key events into a structured dataset automatically.
                    </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-8 lg:-right-10 transform -translate-y-1/2 z-0 text-slate-200">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center z-10 relative">
                    <div className="mb-6">
                        <span className="text-xs font-medium tracking-widest text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-100">Step 03</span>
                    </div>
                    <div className="w-24 h-24 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                         <div className="w-10 h-14 bg-white border border-slate-200 rounded shadow-sm flex flex-col p-1.5 items-center">
                             <div className="w-full h-1 bg-slate-100 mb-1"></div>
                             <div className="w-2/3 h-1 bg-slate-100 mb-2"></div>
                             <div className="mt-auto">
                                 <CheckCircleIcon className="w-4 h-4 text-teal-500" />
                             </div>
                         </div>
                    </div>
                    <h3 className="text-lg font-medium text-[#0B1120] mb-3">Review & Export</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Receive a citation-backed chronology. Click any fact to instantly verify the source page, then export to Word or PDF.
                    </p>
                </div>
            </div>
        </div>
    </div>
  </section>
);

const ReadingLayer = () => (
  <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-200">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
       <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
          
          {/* Header */}
          <div className="w-full lg:w-1/3 relative lg:sticky lg:top-32">
             <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#2563EB] ring-1 ring-blue-100">
                <ScanIcon className="w-6 h-6" />
             </div>
             {/* text-4xl -> text-3xl */}
             <h2 className="text-2xl md:text-3xl font-medium text-[#0B1120] mb-6">Core Extraction Engine</h2>
             <div className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-6">The Reading Layer</div>
             <p className="text-slate-600 leading-relaxed text-xl font-medium">
                Deciphering the chaos of raw medical records. Our optical character recognition is tuned to process clinical shorthand and handwritten notes that standard text parsers miss.
             </p>
          </div>

          {/* Features Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 gap-12">
             
             {/* F1 */}
             <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-5 mb-6">
                   <div className="p-3 bg-slate-100 rounded-xl shrink-0">
                      <DocumentIcon className="w-8 h-8 text-slate-700" />
                   </div>
                   <div>
                      <h3 className="text-xl font-medium text-[#0B1120]">Clinical Handwriting Recognition</h3>
                      <p className="text-sm font-medium text-slate-400 uppercase mt-1">Decipher Physician Notes</p>
                   </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-xl mb-8">
                   Medical records are often a mix of typed text and scribbled margins. Our OCR layer is tuned to process clinical shorthand and handwritten physician notes that standard text parsers miss.
                </p>
                {/* UI Snippet */}
                <div className="bg-slate-50 rounded-xl border border-slate-100 p-6">
                    <div className="mb-4 pb-4 border-b border-slate-200 border-dashed">
                        <div className="text-xs text-slate-400 font-medium uppercase mb-2">Source (Handwriting)</div>
                        <p className="font-serif italic text-slate-500 text-lg opacity-70">"Pt c/o severe lwr back pn radiating to L leg..."</p>
                    </div>
                    <div>
                        <div className="text-xs text-[#2563EB] font-medium uppercase mb-2">Digitized Output</div>
                        <p className="font-sans text-slate-900 text-lg font-medium">"Patient complains of severe lower back pain radiating to Left leg"</p>
                    </div>
                </div>
             </div>

             {/* F2 */}
             <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-5 mb-6">
                   <div className="p-3 bg-slate-100 rounded-xl shrink-0">
                      <ListFilterIcon className="w-8 h-8 text-slate-700" />
                   </div>
                   <div>
                      <h3 className="text-xl font-medium text-[#0B1120]">Intelligent Document Sorting</h3>
                      <p className="text-sm font-medium text-slate-400 uppercase mt-1">Contextual Classification</p>
                   </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-xl mb-8">
                   The engine automatically distinguishes between a Lab Report, a Therapy Log, and a Physician Progress Note. This ensures that clinical evidence is evaluated within the correct medical context.
                </p>
                {/* UI Snippet */}
                <div className="bg-slate-50 rounded-xl border border-slate-100 p-2 space-y-2">
                    <div className="bg-white p-3 rounded-lg border border-slate-200 flex justify-between items-center shadow-sm">
                        <div className="flex items-center gap-3">
                             <div className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center text-blue-600"><DocumentIcon className="w-4 h-4"/></div>
                             <span className="font-medium text-slate-700">Scan_00492.pdf</span>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Radiology</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-200 flex justify-between items-center shadow-sm opacity-75">
                        <div className="flex items-center gap-3">
                             <div className="w-8 h-8 bg-purple-50 rounded flex items-center justify-center text-purple-600"><DocumentIcon className="w-4 h-4"/></div>
                             <span className="font-medium text-slate-700">Scan_00493.pdf</span>
                        </div>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">Operative Report</span>
                    </div>
                </div>
             </div>

             {/* F3 */}
             <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-5 mb-6">
                   <div className="p-3 bg-slate-100 rounded-xl shrink-0">
                      <BanIcon className="w-8 h-8 text-slate-700" />
                   </div>
                   <div>
                      <h3 className="text-xl font-medium text-[#0B1120]">Noise Filtering</h3>
                      <p className="text-sm font-medium text-slate-400 uppercase mt-1">Relevance Detection</p>
                   </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-xl mb-8">
                   Medical files contain significant redundancy. Our system filters out administrative fluff, duplicate fax headers, and normal findings to isolate the pathology that drives case value.
                </p>
                {/* UI Snippet */}
                <div className="bg-slate-50 rounded-xl border border-slate-100 p-6 font-mono text-sm">
                    <div className="text-slate-300 line-through decoration-slate-300 selection:bg-transparent">Fax Header: 2023-10-12 Mercy Hospital...</div>
                    <div className="text-slate-300 line-through decoration-slate-300 mt-2 selection:bg-transparent">Patient is well appearing, in no acute distress.</div>
                    <div className="bg-yellow-50 text-slate-900 font-medium p-2 -mx-2 my-2 rounded border border-yellow-100">
                        Assessment: Acute lumbar strain with radiculopathy.
                    </div>
                    <div className="text-slate-300 line-through decoration-slate-300 selection:bg-transparent">Follow up in 2 weeks.</div>
                </div>
             </div>
             
          </div>
       </div>
    </div>
  </section>
);

const ThinkingLayer = () => (
  <section className="py-24 md:py-32 bg-white border-t border-slate-200">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
       <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
          
          {/* Header */}
          <div className="w-full lg:w-1/3 relative lg:sticky lg:top-32">
             <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6 text-teal-600 ring-1 ring-teal-100">
                <BrainIcon className="w-6 h-6" />
             </div>
             <h2 className="text-2xl md:text-3xl font-medium text-[#0B1120] mb-6">Chronology & Analysis</h2>
             <div className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-6">The Thinking Layer</div>
             <p className="text-slate-600 leading-relaxed text-xl font-medium">
                Structuring the timeline. We convert thousands of non-linear pages into a structured timeline, extracting dates of service to create a clear history of care.
             </p>
          </div>

          {/* Features Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 gap-12">
             
             {/* F4 */}
             <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-5 mb-6">
                   <div className="p-3 bg-slate-100 rounded-xl shrink-0">
                      <ChronologyIcon className="w-8 h-8 text-slate-700" />
                   </div>
                   <div>
                      <h3 className="text-xl font-medium text-[#0B1120]">Automated Chronology Construction</h3>
                      <p className="text-sm font-medium text-slate-400 uppercase mt-1">Instant Timeline Generation</p>
                   </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-xl mb-8">
                   The engine extracts dates of service and arranges them chronologically to create a clear history of care from the date of loss to the present, regardless of how the file was uploaded.
                </p>
                {/* UI Snippet */}
                <div className="bg-slate-50 rounded-xl border border-slate-100 p-6 relative overflow-hidden">
                    <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-slate-200"></div>
                    <div className="space-y-6 relative">
                         <div className="flex items-center gap-4">
                             <div className="w-6 h-6 rounded-full bg-slate-300 border-4 border-white shadow-sm shrink-0 z-10"></div>
                             <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex-1">
                                 <div className="text-xs font-medium text-slate-400 uppercase">Oct 12</div>
                                 <div className="font-medium text-slate-700">ER Admission</div>
                             </div>
                         </div>
                         <div className="flex items-center gap-4">
                             <div className="w-6 h-6 rounded-full bg-[#2563EB] border-4 border-white shadow-sm shrink-0 z-10"></div>
                             <div className="bg-white p-3 rounded-lg border border-blue-200 shadow-sm flex-1">
                                 <div className="text-xs font-medium text-blue-500 uppercase">Oct 14</div>
                                 <div className="font-medium text-slate-900">MRI Lumbar Spine</div>
                             </div>
                         </div>
                    </div>
                </div>
             </div>

             {/* F5 */}
             <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-5 mb-6">
                   <div className="p-3 bg-slate-100 rounded-xl shrink-0">
                      <PulseIcon className="w-8 h-8 text-slate-700" />
                   </div>
                   <div>
                      <h3 className="text-xl font-medium text-[#0B1120]">Injury & Damages Isolation</h3>
                      <p className="text-sm font-medium text-slate-400 uppercase mt-1">Objective Fact Extraction</p>
                   </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-xl mb-8">
                   We scan the record for objective clinical findings. The system highlights fractures, surgeries, injections, and diagnostic imaging results to help you build your damages argument faster.
                </p>
                {/* UI Snippet */}
                <div className="bg-slate-50 rounded-xl border border-slate-100 p-6">
                    <p className="text-slate-500 font-serif text-lg leading-relaxed">
                        ...radiograph demonstrates a <span className="bg-red-50 text-red-700 font-medium px-1 rounded border border-red-100">comminuted fracture</span> of the distal radius. Soft tissue swelling is noted...
                    </p>
                    <div className="mt-4 flex gap-2">
                        <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium uppercase rounded-full">ICD-10: S52.5</span>
                        <span className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-medium uppercase rounded-full">High Value</span>
                    </div>
                </div>
             </div>

             {/* F6 */}
             <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-5 mb-6">
                   <div className="p-3 bg-slate-100 rounded-xl shrink-0">
                      <AlertCircleIcon className="w-8 h-8 text-slate-700" />
                   </div>
                   <div>
                      <h3 className="text-xl font-medium text-[#0B1120]">Treatment Gap Detection</h3>
                      <p className="text-sm font-medium text-slate-400 uppercase mt-1">Continuity Analysis</p>
                   </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-xl mb-8">
                   The engine calculates time between visits to flag potential gaps in care. This allows you to anticipate insurance defense arguments regarding delays in treatment or non-compliance.
                </p>
                {/* UI Snippet */}
                <div className="bg-slate-50 rounded-xl border border-slate-100 p-4">
                     <div className="flex items-center justify-between text-sm text-slate-500 mb-2 px-2">
                         <span>Nov 01</span>
                         <span>Feb 15</span>
                     </div>
                     <div className="h-4 bg-slate-200 rounded-full relative overflow-hidden">
                         <div className="absolute left-0 w-1/4 h-full bg-slate-400"></div>
                         <div className="absolute right-0 w-1/4 h-full bg-slate-400"></div>
                         {/* Gap */}
                         <div className="absolute left-1/4 right-1/4 top-0 bottom-0 flex items-center justify-center">
                             <div className="h-full w-full bg-orange-100/50 flex items-center justify-center">
                                 
                             </div>
                         </div>
                     </div>
                     <div className="mt-3 flex justify-center">
                         <div className="bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded text-xs font-medium uppercase flex items-center gap-2">
                             <AlertCircleIcon className="w-3 h-3"/> 90 Day Gap Detected
                         </div>
                     </div>
                </div>
             </div>

          </div>
       </div>
    </div>
  </section>
);

const TrustLayer = () => (
  <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-200">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
       <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
          
          {/* Header */}
          <div className="w-full lg:w-1/3 relative lg:sticky lg:top-32">
             <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600 ring-1 ring-purple-100">
                <ShieldIcon className="w-6 h-6" />
             </div>
             <h2 className="text-2xl md:text-3xl font-medium text-[#0B1120] mb-6">Verification & Defense</h2>
             <div className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-6">The Trust Layer</div>
             <p className="text-slate-600 leading-relaxed text-xl font-medium">
                Building the argument. We do not ask you to trust a black box. Every fact is anchored to the source, and every provider is indexed for completeness.
             </p>
          </div>

          {/* Features Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 gap-12">
             
             {/* F7 */}
             <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-5 mb-6">
                   <div className="p-3 bg-slate-100 rounded-xl shrink-0">
                      <CheckCircleIcon className="w-8 h-8 text-slate-700" />
                   </div>
                   <div>
                      <h3 className="text-xl font-medium text-[#0B1120]">Source Anchored Citations</h3>
                      <p className="text-sm font-medium text-slate-400 uppercase mt-1">Click to Verify</p>
                   </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-xl mb-8">
                   Every fact in the chronology includes a direct hyperlink to the specific page in the source PDF. You can verify the original handwriting instantly.
                </p>
                {/* UI Snippet */}
                <div className="bg-slate-50 rounded-xl border border-slate-100 p-6 flex items-center gap-4">
                     <div className="flex-1">
                         <p className="text-slate-800 font-medium text-lg">"Surgery performed by Dr. Evans..."</p>
                     </div>
                     <div className="shrink-0">
                         <div className="flex items-center gap-2 bg-blue-50 text-[#2563EB] px-3 py-1.5 rounded-lg border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors">
                             <span className="text-xs font-medium uppercase">Pg 42</span>
                             <ArrowRightIcon className="w-3 h-3" />
                         </div>
                     </div>
                </div>
             </div>

             {/* F8 */}
             <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-5 mb-6">
                   <div className="p-3 bg-slate-100 rounded-xl shrink-0">
                      <UsersIcon className="w-8 h-8 text-slate-700" />
                   </div>
                   <div>
                      <h3 className="text-xl font-medium text-[#0B1120]">Provider Indexing</h3>
                      <p className="text-sm font-medium text-slate-400 uppercase mt-1">Missing Record Identification</p>
                   </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-xl mb-8">
                   The system builds a master list of all providers mentioned in the text. By comparing this list against the files present, we help you identify missing records before you send the demand package.
                </p>
                {/* UI Snippet */}
                <div className="bg-slate-50 rounded-xl border border-slate-100 p-2">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
                            <div className="text-xs font-medium text-slate-400 uppercase mb-1">Provider</div>
                            <div className="font-medium text-slate-800">Mercy Hospital</div>
                        </div>
                        <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
                            <div className="text-xs font-medium text-slate-400 uppercase mb-1">Status</div>
                            <div className="font-medium text-emerald-600 flex items-center gap-1"><CheckCircleIcon className="w-3 h-3"/> Present</div>
                        </div>
                        <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
                            <div className="text-xs font-medium text-slate-400 uppercase mb-1">Provider</div>
                            <div className="font-medium text-slate-800">Dr. S. Smith</div>
                        </div>
                        <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
                            <div className="text-xs font-medium text-slate-400 uppercase mb-1">Status</div>
                            <div className="font-medium text-red-600 flex items-center gap-1"><AlertCircleIcon className="w-3 h-3"/> Missing</div>
                        </div>
                    </div>
                </div>
             </div>

             {/* F9 */}
             <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-5 mb-6">
                   <div className="p-3 bg-slate-100 rounded-xl shrink-0">
                      <MicroscopeIcon className="w-8 h-8 text-slate-700" />
                   </div>
                   <div>
                      <h3 className="text-xl font-medium text-[#0B1120]">Pre Existing Condition Search</h3>
                      <p className="text-sm font-medium text-slate-400 uppercase mt-1">Defense Mitigation</p>
                   </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-xl mb-8">
                   We scan the history sections for mentions of prior injuries or chronic conditions affecting the same body parts. This helps you prepare for causation challenges early in the case lifecycle.
                </p>
                {/* UI Snippet */}
                <div className="bg-slate-50 rounded-xl border border-slate-100 p-6">
                     <div className="bg-white border border-slate-200 rounded-lg p-3 flex gap-3 items-center shadow-sm mb-4">
                         <ScanIcon className="w-4 h-4 text-slate-400" />
                         <span className="text-slate-400 font-medium">Search: "Prior Back Injury"</span>
                     </div>
                     <div className="pl-4 border-l-2 border-orange-200">
                         <div className="text-xs font-medium text-slate-400 uppercase mb-1">Result (Pg. 3)</div>
                         <p className="text-slate-700 font-serif italic">"...patient reports a <span className="bg-orange-100 text-orange-800 font-medium px-1">slip and fall in 2019</span> resulting in lumbar strain..."</p>
                     </div>
                </div>
             </div>

          </div>
       </div>
    </div>
  </section>
);

const PlatformSecurity = () => (
    <section className="py-16 md:py-32 bg-[#0B1120] text-white border-t border-slate-900" id="security">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
             
             <div className="w-full lg:w-1/3 relative lg:sticky lg:top-32">
                 <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white ring-1 ring-white/20">
                    <FingerprintIcon className="w-6 h-6" />
                 </div>
                 <h2 className="text-xl md:text-2xl font-medium text-white mb-4">Security & Infrastructure</h2>
                 <div className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-6">The Safety Layer</div>
                 <p className="text-slate-400 leading-relaxed text-xl">
                    Sovereign by design. We minimize your liability exposure by not holding your client data longer than necessary.
                 </p>
             </div>

             <div className="w-full lg:w-2/3 grid grid-cols-1 gap-6 md:gap-8">
                 <div className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                        <LightningIcon className="w-6 h-6 text-teal-400 shrink-0" />
                        <h3 className="text-lg md:text-xl font-medium text-white">Ephemeral Processing</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-2 font-medium text-xs md:text-sm uppercase">Zero Retention Architecture</p>
                    <p className="text-slate-300 leading-relaxed text-lg">
                        We minimize your liability exposure by not holding your client data. Source files are processed in ephemeral memory and are permanently deleted from our storage buckets after a secure retention window.
                    </p>
                 </div>

                 <div className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                        <DatabaseIcon className="w-6 h-6 text-blue-400 shrink-0" />
                        <h3 className="text-lg md:text-xl font-medium text-white">Sovereign Infrastructure</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-2 font-medium text-xs md:text-sm uppercase">US East 1 Residency</p>
                    <p className="text-slate-300 leading-relaxed text-lg">
                        We guarantee that all data processing and temporary storage occur exclusively within AWS data centers in the United States. Your client data remains within US jurisdiction at all times.
                    </p>
                 </div>

                 <div className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                        <LockIcon className="w-6 h-6 text-purple-400 shrink-0" />
                        <h3 className="text-lg md:text-xl font-medium text-white">Attorney Work Product Support</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-2 font-medium text-xs md:text-sm uppercase">Confidentiality Protocols</p>
                    <p className="text-slate-300 leading-relaxed text-lg">
                        Our architecture is designed to support strict non disclosure requirements. We act as a silent vendor to ensure your work product remains privileged and secure.
                    </p>
                 </div>
             </div>
        </div>
      </div>
    </section>
);

const PlatformCTA = ({ onNavigate }: { onNavigate?: (page: PageView) => void }) => (
    <section className="py-16 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-[#0B1120] rounded-3xl p-8 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Background Gradients */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white mb-6 md:mb-8">
              Equip Your Firm with Audit Ready Precision
            </h2>
            <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
              The tools you use define the settlements you capture. Upgrade your review workflow today.
            </p>
            <div className="flex justify-center">
               <Button 
                variant="white" 
                className="h-12 md:h-14 px-8 md:px-10 text-base font-bold rounded-lg hover:bg-slate-50 w-full sm:w-auto"
                onClick={() => onNavigate?.('contact')}
               >
                Start Case Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export const PlatformPage: React.FC<PlatformPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PlatformHero onNavigate={onNavigate} />
      <ProcessFlow />
      <ReadingLayer />
      <ThinkingLayer />
      <TrustLayer />
      <PlatformSecurity />
      <PlatformCTA onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};