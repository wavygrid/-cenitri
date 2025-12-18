import React from 'react';
import { Footer } from './Footer';
import { PageView } from '../App';
import { 
  ServerIcon, 
  LightningIcon, 
  LockIcon, 
  ShieldCheckIcon, 
  FingerprintIcon, 
  UsersIcon, 
  ScanIcon,
  CheckCircleIcon
} from './ui/Icons';

interface SecurityPageProps {
  onNavigate?: (page: PageView) => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#0B1120] mb-6">
            Security and Compliance Architecture
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            Centurim operates on a Secure Enclave architecture designed to minimize data liability. We prioritize data ephemeralization and strict residency controls.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-20 md:py-32 space-y-24">

        {/* 1. Infrastructure */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="w-12 h-12 bg-blue-50 text-[#2563EB] rounded-xl flex items-center justify-center mb-6">
              <ServerIcon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-medium text-[#0B1120] mb-2">1. Infrastructure & Sovereignty</h2>
            <p className="text-lg font-bold text-slate-400 uppercase tracking-widest">The Physical Layer</p>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold text-[#0B1120] mb-4">US Data Residency</h3>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              We strictly adhere to data localization protocols.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Hosting Provider:</strong> All services are hosted on Amazon Web Services (AWS).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Region Locking:</strong> All computational workloads, storage buckets, and database instances are provisioned exclusively within the US-East-1 (Northern Virginia) region.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Storage Location:</strong> Customer data is stored and processed exclusively within US data centers.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 2. Data Lifecycle */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-8 border-t border-slate-100">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
              <LightningIcon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-medium text-[#0B1120] mb-2">2. Data Lifecycle Management</h2>
            <p className="text-lg font-bold text-slate-400 uppercase tracking-widest">The "Zero Retention" Defense</p>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold text-[#0B1120] mb-4">Ephemeral Processing Model</h3>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              Our architecture is designed to process data without retaining it. We view data as a liability, not an asset.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Ingestion:</strong> Files are uploaded via secure, presigned URLs directly to isolated storage buckets.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Processing:</strong> Analysis occurs in serverless, stateless compute environments (AWS Lambda).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Destruction:</strong> Source documents are permanently deleted from our infrastructure immediately upon the generation of the variance report.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">No Model Training:</strong> We do not use client Protected Health Information (PHI) to train foundational Artificial Intelligence models.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Cryptographic */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-8 border-t border-slate-100">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
              <LockIcon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-medium text-[#0B1120] mb-2">3. Cryptographic Controls</h2>
            <p className="text-lg font-bold text-slate-400 uppercase tracking-widest">The Math</p>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold text-[#0B1120] mb-4">Encryption Standards</h3>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              We employ industry standard encryption protocols for data in all states.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-purple-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Data at Rest:</strong> All storage volumes are encrypted using AES-256 (Advanced Encryption Standard) via AWS Key Management Service (KMS).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-purple-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Data in Transit:</strong> All network traffic is secured via TLS 1.3 (Transport Layer Security). We enforce HTTPS only access points.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Regulatory */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-8 border-t border-slate-100">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-medium text-[#0B1120] mb-2">4. Regulatory Compliance</h2>
            <p className="text-lg font-bold text-slate-400 uppercase tracking-widest">The Contractual Stance</p>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold text-[#0B1120] mb-4">HIPAA Alignment</h3>
            <div className="mb-6 bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h4 className="text-base font-bold text-slate-900 mb-2 uppercase">Shared Responsibility Model</h4>
              <p className="text-slate-600 text-base">Centurim operates as a Business Associate under HIPAA regulations.</p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Contractual Liability:</strong> We execute a comprehensive Business Associate Agreement (BAA) with all Covered Entities, assuming contractual liability for data processing within our enclave.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Infrastructure:</strong> Our platform leverages AWS services that are covered under our upstream BAA with Amazon Web Services.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 5. Application Security */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-8 border-t border-slate-100">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
              <FingerprintIcon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-medium text-[#0B1120] mb-2">5. Application Security</h2>
            <p className="text-lg font-bold text-slate-400 uppercase tracking-widest">The Software Layer</p>
          </div>
          <div className="w-full md:w-2/3 space-y-8">
            <div>
                <h3 className="text-xl font-bold text-[#0B1120] mb-4">Defense in Depth</h3>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Access Control</h4>
                <ul className="space-y-2 mb-4 pl-4 border-l-2 border-slate-100">
                    <li className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Least Privilege:</strong> System components operate with the minimum necessary permissions.</li>
                    <li className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Authentication:</strong> We utilize enterprise grade identity management with mandatory Multi Factor Authentication (MFA) for all administrative access.</li>
                </ul>
            </div>
            
            <div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Blind Ingestion Protocol</h4>
                <p className="text-base text-slate-600 font-medium leading-relaxed">
                    Our frontend architecture decouples metadata from file content. Filenames are anonymized at the edge to prevent unauthorized inspection of patient identifiers during the upload process.
                </p>
            </div>

            <div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">Audit Logging</h4>
                <p className="text-base text-slate-600 font-medium leading-relaxed">
                    Every system interaction, including file uploads, processing events, and deletions, is recorded in immutable AWS CloudTrail ledgers.
                </p>
            </div>
          </div>
        </div>

        {/* 6. Operational Security */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-8 border-t border-slate-100">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <UsersIcon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-medium text-[#0B1120] mb-2">6. Operational Security</h2>
            <p className="text-lg font-bold text-slate-400 uppercase tracking-widest">The Human Layer</p>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold text-[#0B1120] mb-4">Personnel and Device Security</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-indigo-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Device Encryption:</strong> All developer workstations are encrypted and monitored.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-indigo-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Secure Access:</strong> Administrative access to the cloud environment is restricted to secure VPN tunnels originating from authorized IP addresses.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-indigo-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Confidentiality:</strong> All personnel are bound by strict Non-Disclosure Agreements (NDAs) and confidentiality covenants.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 7. Vulnerability */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-8 border-t border-slate-100">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
              <ScanIcon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-medium text-[#0B1120] mb-2">7. Vulnerability Management</h2>
            <p className="text-lg font-bold text-slate-400 uppercase tracking-widest">The Maintenance Layer</p>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold text-[#0B1120] mb-4">Continuous Monitoring</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-red-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Static Analysis:</strong> Codebases are scanned for vulnerabilities during every deployment cycle.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-red-600 mt-1 shrink-0" />
                <span className="text-slate-700 text-base font-medium"><strong className="text-slate-900">Dependency Scanning:</strong> We monitor third party libraries for known CVEs (Common Vulnerabilities and Exposures) and patch immediately.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Footer Disclaimer */}
      <div className="bg-slate-50 border-t border-slate-200 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
              <h4 className="text-lg font-bold text-[#0B1120] uppercase tracking-widest mb-4">Legal Notice</h4>
              <p className="text-slate-500 font-medium">
                  Centurim provides data processing services. Our liability is limited as set forth in our Master Services Agreement (MSA) and Business Associate Agreement (BAA). Users are responsible for ensuring they have the legal right to upload data to the platform.
              </p>
          </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};