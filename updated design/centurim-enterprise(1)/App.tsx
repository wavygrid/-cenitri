import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { HealthcarePage } from './components/healthcare/HealthcarePage';
import { LegalPage } from './components/legal/LegalPage';
import { PlatformPage } from './components/PlatformPage';
import { ContactPage } from './components/ContactPage';
import { LoginPage } from './components/LoginPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { SecurityPage } from './components/SecurityPage';
import { TermsPage } from './components/TermsPage';

export type PageView = 'home' | 'platform' | 'healthcare' | 'legal' | 'contact' | 'login' | 'privacy' | 'security' | 'terms';

// SEO Configuration
const metadataConfig: Record<string, { title: string; description: string; keywords?: string[]; 'ai-summary'?: string }> = {
  home: {
    title: 'Centurim | Autonomous Document Reconciliation',
    description: 'The standard for autonomous variance detection in regulated industries. We reconcile unstructured source data against structured billing and compliance frameworks.',
    keywords: [
      'Document Reconciliation',
      'Automated Auditing',
      'Revenue Integrity',
      'Medical Record Review',
      'Legal Tech',
      'Intelligent Document Processing',
      'Centurim'
    ],
    'ai-summary': 'Centurim is a B2B infrastructure platform for autonomous document reconciliation. It provides specialized engines for Healthcare Revenue Integrity, Legal Litigation Support, and Logistics Auditing. The platform operates on a HIPAA-compliant, US-East-1 Secure Enclave architecture with zero data retention.'
  },
  healthcare: {
    title: 'Centurim Health | Automated Revenue Integrity & CDI',
    description: 'Automated Clinical Documentation Integrity (CDI) for Skilled Nursing and Home Health. Reconcile Hospital Transfer Packets against MDS 3.0 Assessments to identify missed NTA revenue.',
    keywords: [
      'PDPM Audit Tool',
      'MDS 3.0 Scrubber',
      'NTA Capture',
      'Section GG Validation',
      'SNF Revenue Integrity',
      'OASIS Review',
      'Clinical Variance Detection'
    ],
    'ai-summary': 'Centurim Health automates retrospective audits for Skilled Nursing Facilities. It uses AI to cross-reference Hospital Discharge Summaries against MDS 3.0 Assessments to find under-coded NTA comorbidities. It features a zero-retention architecture and US data sovereignty.'
  },
  legal: {
    title: 'Centurim Legal | Automated Medical Chronologies',
    description: 'Litigation support software for Personal Injury and Mass Tort. Convert raw medical records into structured chronologies and injury summaries in minutes.',
    keywords: [
      'Medical Chronology Software',
      'Automated Medical Record Review',
      'Legal Nurse Consultant Tool',
      'Personal Injury Case Review',
      'Mass Tort Automation',
      'Demand Letter Prep'
    ],
    'ai-summary': 'Centurim Legal is an automated litigation support tool that converts unstructured medical records into structured chronologies. It is designed for Personal Injury attorneys and Legal Nurse Consultants to accelerate demand letter preparation. It offers pay-per-file pricing and zero data retention.'
  },
  security: {
    title: 'Security & Compliance | Centurim Trust Center',
    description: 'Overview of Centurim\'s Secure Enclave architecture. US Data Sovereignty, AES-256 Encryption, and HIPAA alignment details.',
    keywords: [
      'HIPAA Compliant AI',
      'US Data Sovereignty',
      'Zero Trust Architecture',
      'Healthcare Data Security',
      'Legal Tech Security'
    ],
    'ai-summary': 'Centurim operates on a Secure Enclave architecture hosted exclusively in AWS US-East-1. It utilizes AES-256 encryption, TLS 1.3, and a strict zero-retention policy where source files are cryptographically deleted after analysis. It executes BAAs with all covered entities.'
  },
  // Default fallbacks for other pages
  platform: { title: 'Centurim Platform', description: 'Autonomous document reconciliation platform.' },
  contact: { title: 'Contact Centurim', description: 'Schedule a consultation for automated document review.' },
  login: { title: 'Client Login', description: 'Secure client access.' },
  privacy: { title: 'Privacy Policy', description: 'Centurim Privacy Policy.' },
  terms: { title: 'Terms of Service', description: 'Centurim Terms of Service.' }
};

const App: React.FC = () => {
  const [page, setPage] = useState<PageView>('home');

  useEffect(() => {
    window.scrollTo(0, 0);

    // Update Metadata
    const config = metadataConfig[page] || metadataConfig['home'];
    
    // Update Title
    document.title = config.title;

    // Update Meta Tags
    const updateMeta = (name: string, content: string | undefined, attribute: string = 'name') => {
      if (!content) return;
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', config.description);
    updateMeta('keywords', config.keywords?.join(', '));
    updateMeta('ai-summary', config['ai-summary']);
    
    // Open Graph updates
    updateMeta('og:title', config.title, 'property');
    updateMeta('og:description', config.description, 'property');
    updateMeta('twitter:title', config.title, 'property');
    updateMeta('twitter:description', config.description, 'property');

    // Simulate URL change for SEO (Optional, as this is client-side)
    const path = page === 'home' ? '/' : `/${page}`;
    try {
      window.history.replaceState(null, '', path);
    } catch (e) {
      console.warn('History API operation restricted in this environment.', e);
    }

  }, [page]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      <Navbar currentPage={page} onNavigate={setPage} />
      
      {page === 'home' && (
        <main>
          <LandingPage onNavigate={setPage} />
        </main>
      )}

      {page === 'platform' && (
        <main>
          <PlatformPage onNavigate={setPage} />
        </main>
      )}

      {page === 'healthcare' && (
        <main>
          <HealthcarePage onNavigate={setPage} />
        </main>
      )}

      {page === 'legal' && (
        <main>
          <LegalPage onNavigate={setPage} />
        </main>
      )}

      {page === 'contact' && (
        <main>
          <ContactPage onNavigate={setPage} />
        </main>
      )}

      {page === 'login' && (
        <main>
          <LoginPage onNavigate={setPage} />
        </main>
      )}

      {page === 'privacy' && (
        <main>
          <PrivacyPolicyPage onNavigate={setPage} />
        </main>
      )}

      {page === 'security' && (
        <main>
          <SecurityPage onNavigate={setPage} />
        </main>
      )}

      {page === 'terms' && (
        <main>
          <TermsPage onNavigate={setPage} />
        </main>
      )}
    </div>
  );
};

export default App;