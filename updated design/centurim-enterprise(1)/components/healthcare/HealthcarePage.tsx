import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { 
  StethoscopeIcon, 
  HomeIcon, 
  UsersIcon, 
  ArrowRightIcon, 
  CheckCircleIcon,
  ShieldCheckIcon,
  DatabaseIcon,
  FileXIcon,
  CloudUploadIcon,
  MicroscopeIcon,
  CheckIcon,
  BanIcon,
  ListFilterIcon,
  DocumentIcon,
  BanknoteIcon
} from '../ui/Icons';
import { SecuritySection } from '../SecuritySection';
import { Footer } from '../Footer';
import { PageView } from '../../App';

interface HealthcarePageProps {
  onNavigate?: (page: PageView) => void;
}

// --- Sub-Components ---

const HealthcareHero = ({ onNavigate }: { onNavigate?: (page: PageView) => void }) => (
  <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-teal-50/30">
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-teal-100/30 rounded-full blur-[100px] -z-10"></div>
    <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[80px] -z-10"></div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-medium uppercase tracking-wider mb-8">
           <StethoscopeIcon className="w-4 h-4" /> Healthcare Solutions
        </div>
        {/* text-5xl/7xl -> text-4xl/6xl, font-extrabold -> font-medium */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#0B1120] leading-[1.1] mb-6 md:mb-8">
          Automated Revenue Integrity for <span className="text-teal-600">Post Acute Care</span>
        </h1>
        <p className="text-base md:text-xl text-slate-700 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
          We help clinical teams validate medical records against billing codes to identify earned reimbursement and mitigate audit risk. Deploy our autonomous review engine for Skilled Nursing and Home Health workflows.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button 
            variant="primary" 
            className="h-12 md:h-14 px-8 text-base shadow-lg shadow-teal-900/10 bg-[#0B1120] hover:bg-slate-800 w-full sm:w-auto"
            onClick={() => onNavigate?.('contact')}
          >
            Start Pilot Audit
          </Button>
          <Button 
            variant="outline" 
            className="h-12 md:h-14 px-8 text-base w-full sm:w-auto"
            onClick={() => onNavigate?.('contact')}
          >
            View Platform Capabilities
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

const HealthcareTrustBar = () => (
  <section className="border-y border-slate-200 bg-white py-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
       <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
          <div className="flex flex-wrap justify-center gap-y-6 gap-x-12 md:gap-x-16">
            <div className="flex items-center space-x-3 text-slate-700">
              <ShieldCheckIcon className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-semibold">HIPAA Compliant Architecture</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-700">
              <DatabaseIcon className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-semibold">US Data Sovereignty</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-700">
              <FileXIcon className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-semibold">Zero Retention Protocol</span>
            </div>
          </div>
        </div>
    </div>
  </section>
);

const HealthcareProblem = () => (
  <section className="py-16 md:py-32 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        <div className="w-full lg:w-1/2">
           {/* text-5xl -> text-4xl */}
           <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B1120] mb-6 md:mb-8">
            The Documentation Gap
           </h2>
           <p className="text-base md:text-lg text-slate-700 mb-6 leading-relaxed">
             Your clinical team delivers excellent care but the administrative burden of documenting it is overwhelming. Critical patient data is trapped in thousands of pages of unstructured hospital transfer packets and referral faxes.
           </p>
           <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
             <h4 className="font-medium text-red-900 mb-2">The Conflict</h4>
             <p className="text-red-800/90 text-sm leading-relaxed">
               Manual review is slow and prone to fatigue. When clinical evidence is missed in the source documents it leads to under coding on the MDS or OASIS. This creates a silent revenue leak that standard logic scrubbers cannot detect.
             </p>
           </div>
        </div>
        <div className="w-full lg:w-1/2 relative">
           <div className="absolute inset-0 bg-gradient-to-tr from-teal-50 to-blue-50 rounded-3xl transform rotate-3"></div>
           <div className="relative bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="space-y-6">
                 {/* Fake Document visual */}
                 <div className="flex gap-4 opacity-50">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg"></div>
                    <div className="flex-1 space-y-2">
                       <div className="h-3 w-3/4 bg-slate-100 rounded"></div>
                       <div className="h-3 w-1/2 bg-slate-100 rounded"></div>
                    </div>
                 </div>
                 <div className="h-px bg-slate-100"></div>
                 <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm font-semibold text-slate-900">
                       <span>Reimbursement Impact</span>
                       <span className="text-red-600">-$450 / Day</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full w-2/3 bg-red-500"></div>
                    </div>
                    <div className="text-xs text-slate-500 text-right">Missed NTA Comorbidity</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const HealthcareSolution = () => (
  <section className="py-16 md:py-32 bg-[#0B1120] text-white overflow-hidden relative">
    {/* Decorative BG */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Clinical Evidence Validation</h2>
        <p className="text-base md:text-lg text-slate-300 leading-relaxed">
           Centurim acts as an automated second set of eyes. Our engine ingests raw clinical records and cross references them against your draft assessments. It identifies discrepancies between what was documented by the doctor and what was coded by the facility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {[
          { icon: CloudUploadIcon, title: "Upload", desc: "Drag and drop raw PDF records and draft assessments." },
          { icon: MicroscopeIcon, title: "Analyze", desc: "The engine extracts clinical facts and compares them to billing rules." },
          { icon: CheckCircleIcon, title: "Verify", desc: "Receive a citation backed report linking every finding to the source text." },
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6 text-teal-400">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium mb-3">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HealthcareUseCases = () => (
  <section className="py-16 md:py-32 bg-slate-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B1120] mb-4">
          Built for the Post Acute Continuum
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
         {/* SNF */}
         <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#2563EB]">
               <StethoscopeIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-[#0B1120] mb-2">Skilled Nursing Facilities</h3>
            <div className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-4">PDPM Revenue Integrity</div>
            
            <div className="space-y-4 text-sm text-slate-600">
               <div>
                 <strong className="block text-slate-900 mb-1">The User</strong>
                 Regional Directors and MDS Coordinators.
               </div>
               <div>
                 <strong className="block text-slate-900 mb-1">The Function</strong>
                 Reconcile Hospital Discharge Summaries against the MDS 3.0.
               </div>
               <div>
                 <strong className="block text-slate-900 mb-1">The Value</strong>
                 Capture missed NTA Comorbidities and validate Section GG functional scores to ensure accurate reimbursement.
               </div>
            </div>
         </div>

         {/* HHA */}
         <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6 text-teal-600">
               <HomeIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-[#0B1120] mb-2">Home Health Agencies</h3>
            <div className="text-xs font-medium text-teal-600 uppercase tracking-wide mb-4">Pre Claim Review Support</div>
            
            <div className="space-y-4 text-sm text-slate-600">
               <div>
                 <strong className="block text-slate-900 mb-1">The User</strong>
                 Clinical Directors and QA Nurses.
               </div>
               <div>
                 <strong className="block text-slate-900 mb-1">The Function</strong>
                 Compare Referral Packets and Visit Notes against the OASIS E.
               </div>
               <div>
                 <strong className="block text-slate-900 mb-1">The Value</strong>
                 Prevent denials in RCD states by ensuring the OASIS diagnosis coding matches the clinical narrative before submission.
               </div>
            </div>
         </div>

         {/* Consultants */}
         <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600">
               <UsersIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-[#0B1120] mb-2">Clinical Consultants</h3>
            <div className="text-xs font-medium text-purple-600 uppercase tracking-wide mb-4">Audit Efficiency</div>
            
            <div className="space-y-4 text-sm text-slate-600">
               <div>
                 <strong className="block text-slate-900 mb-1">The User</strong>
                 Independent Nurse Consultants.
               </div>
               <div>
                 <strong className="block text-slate-900 mb-1">The Function</strong>
                 Automate the data extraction phase of retrospective audits.
               </div>
               <div>
                 <strong className="block text-slate-900 mb-1">The Value</strong>
                 Process client charts in minutes rather than hours to increase billable capacity and audit volume.
               </div>
            </div>
         </div>
      </div>
    </div>
  </section>
);

const HealthcareFeatures = () => (
  <section className="py-16 md:py-32 bg-white">
     <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
       <div className="text-center mb-12 md:mb-20">
         <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B1120]">Audit Ready Precision</h2>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          
          <div className="flex gap-6">
             <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                <DocumentIcon className="w-7 h-7 text-slate-700" />
             </div>
             <div>
                <h3 className="text-xl font-medium text-[#0B1120] mb-3">Unstructured Data Analysis</h3>
                <div className="text-xs font-medium text-slate-500 uppercase mb-2">Reads the Unreadable</div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                   Our optical character recognition is tuned for medical records. It processes handwritten physician notes, fax headers, and complex scanned layouts that traditional software ignores.
                </p>
             </div>
          </div>

          <div className="flex gap-6">
             <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                <ArrowRightIcon className="w-7 h-7 text-slate-700" />
             </div>
             <div>
                <h3 className="text-xl font-medium text-[#0B1120] mb-3">Citation Mapping</h3>
                <div className="text-xs font-medium text-slate-500 uppercase mb-2">Source Verification</div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                   We do not ask you to trust a black box. Every variance identified by the system includes a direct hyperlink to the specific page and paragraph in the source document for instant verification.
                </p>
             </div>
          </div>

          <div className="flex gap-6">
             <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                <BanIcon className="w-7 h-7 text-slate-700" />
             </div>
             <div>
                <h3 className="text-xl font-medium text-[#0B1120] mb-3">Negation Detection</h3>
                <div className="text-xs font-medium text-slate-500 uppercase mb-2">Clinical Context</div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                   The engine distinguishes between active conditions and ruled out diagnoses. It filters out family history or negated symptoms to reduce false positives and focus your attention on valid revenue opportunities.
                </p>
             </div>
          </div>

          <div className="flex gap-6">
             <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                <ListFilterIcon className="w-7 h-7 text-slate-700" />
             </div>
             <div>
                <h3 className="text-xl font-medium text-[#0B1120] mb-3">Priority Triage</h3>
                <div className="text-xs font-medium text-slate-500 uppercase mb-2">Impact Scoring</div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                   The dashboard categorizes findings by financial impact and compliance risk. This allows your team to focus their limited time on the charts with the highest variance probability.
                </p>
             </div>
          </div>

       </div>
     </div>
  </section>
);

const HealthcarePricing = ({ onNavigate }: { onNavigate?: (page: PageView) => void }) => (
   <section className="py-16 md:py-32 bg-teal-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
         <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B1120] mb-6">Stop Guessing. Start Validating.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            
            {/* Retrospective */}
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col">
               <h3 className="text-xl font-medium text-[#0B1120] mb-2">Retrospective Validation</h3>
               <p className="text-slate-500 font-medium mb-8">For Year End Audits</p>
               
               <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-slate-700">
                     <CheckCircleIcon className="w-5 h-5 text-teal-600" /> Audit closed claims from 2025
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                     <CheckCircleIcon className="w-5 h-5 text-teal-600" /> Identify missed revenue
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                     <CheckCircleIcon className="w-5 h-5 text-teal-600" /> Citation backed reports
                  </li>
               </ul>

               <div className="mb-8 pt-8 border-t border-slate-100">
                  <div className="text-2xl font-medium text-[#0B1120]">$250 <span className="text-base font-normal text-slate-500">Pilot Fee</span></div>
                  <p className="text-xs text-slate-400 mt-2">(Credited toward first month)</p>
               </div>

               <Button 
                variant="outline" 
                className="w-full"
                onClick={() => onNavigate?.('contact')}
               >
                Start Pilot
               </Button>
            </div>

            {/* Concurrent */}
            <div className="bg-[#0B1120] rounded-2xl p-8 md:p-10 border border-slate-900 shadow-xl flex flex-col text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4">
                  <BanknoteIcon className="w-16 h-16 text-teal-900/40" />
               </div>
               
               <h3 className="text-xl font-medium mb-2">Concurrent License</h3>
               <p className="text-slate-400 font-medium mb-8">For Active Admissions</p>
               
               <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-slate-200">
                     <CheckCircleIcon className="w-5 h-5 text-teal-400" /> Real time admission review
                  </li>
                  <li className="flex items-center gap-3 text-slate-200">
                     <CheckCircleIcon className="w-5 h-5 text-teal-400" /> Pre submission validation
                  </li>
                  <li className="flex items-center gap-3 text-slate-200">
                     <CheckCircleIcon className="w-5 h-5 text-teal-400" /> Unlimited users
                  </li>
               </ul>

               <div className="mb-8 pt-8 border-t border-slate-800">
                  <div className="text-sm text-slate-400 mb-1">Packages starting at</div>
                  <div className="text-2xl font-medium">$2,250 <span className="text-base font-normal text-slate-400">/ month</span></div>
               </div>

               <Button 
                variant="primary" 
                className="w-full bg-teal-600 hover:bg-teal-500 text-white border-transparent"
                onClick={() => onNavigate?.('contact')}
               >
                Request Validation Access
               </Button>
            </div>

         </div>
      </div>
   </section>
);

export const HealthcarePage: React.FC<HealthcarePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Centurim Health',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Cloud',
            offers: {
              '@type': 'Offer',
              price: '250.00',
              priceCurrency: 'USD',
              description: 'Retrospective Validation Audit'
            },
            description: 'Automated clinical variance detection for Post-Acute Care.',
            featureList: [
              'NTA Comorbidity Capture',
              'Section GG Validation',
              'Citation-Backed Reporting'
            ],
            audience: {
              '@type': 'BusinessAudience',
              audienceType: 'Skilled Nursing Facilities'
            }
          }),
        }}
      />
      <HealthcareHero onNavigate={onNavigate} />
      <HealthcareTrustBar />
      <HealthcareProblem />
      <HealthcareSolution />
      <HealthcareUseCases />
      <HealthcareFeatures />
      <SecuritySection /> {/* Reused as content matches */}
      <HealthcarePricing onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};