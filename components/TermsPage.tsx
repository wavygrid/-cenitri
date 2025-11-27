import React from 'react';
import { ViewState } from '../App';
import { Button } from './ui/Button';
import { ScrollText, Gavel, Scale } from 'lucide-react';

interface TermsPageProps {
  onNavigate?: (view: ViewState) => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 border-b border-zinc-200 pb-8">
          <div className="flex items-center gap-2 text-zinc-600 mb-4 font-mono text-xs uppercase tracking-widest">
            <Scale size={14} /> Master Services Agreement
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">Terms of Service</h1>
          <p className="text-zinc-500">Effective Date: January 1, 2024</p>
        </div>

        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-12">
          
          <section>
             <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wide mb-4">1. Acceptance of Terms</h3>
             <p className="leading-relaxed">
                By accessing or using the Centurin Client Intelligence Infrastructure ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you are entering into this agreement on behalf of a legal entity, you represent that you have the authority to bind such entity.
             </p>
          </section>

          <section>
             <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wide mb-4">2. Service Description</h3>
             <p className="leading-relaxed">
                Centurin is a B2B SaaS platform designed for legal professionals to automate intake and eligibility assessment. <strong>We do not provide legal advice.</strong> The output of our logic engine is for informational purposes to aid the attorney's decision-making process.
             </p>
          </section>

          <section>
             <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wide mb-4">3. Professional Responsibility</h3>
             <p className="leading-relaxed mb-4">
                You acknowledge that:
             </p>
             <ul className="list-decimal pl-6 space-y-2">
                <li>You are a licensed legal professional or authorized representative thereof.</li>
                <li>You maintain full professional responsibility for reviewing all AI-generated outputs, forms, and briefs before use in any legal filing.</li>
                <li>Centurin is not liable for the outcome of any visa petition or legal application.</li>
             </ul>
          </section>

          <section>
             <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wide mb-4">4. SLA & Uptime</h3>
             <p className="leading-relaxed">
                We commit to a 99.9% Service Level Agreement (SLA) for platform availability. Scheduled maintenance windows will be communicated 48 hours in advance via the Admin Dashboard.
             </p>
          </section>

          <section>
             <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wide mb-4">5. Limitation of Liability</h3>
             <p className="leading-relaxed">
                In no event shall Centurin Inc. be liable for any indirect, incidental, special, or consequential damages. Our total liability for any claim arising out of these terms shall not exceed the amount paid by you for the Service in the twelve (12) months preceding the claim.
             </p>
          </section>

          <section>
             <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wide mb-4">6. Termination</h3>
             <p className="leading-relaxed">
                You may terminate your subscription at any time with 30 days written notice. Upon termination, you will have 60 days to export your data before it is permanently purged from our systems.
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

export default TermsPage;