import React from 'react';
import { Footer } from './Footer';
import { PageView } from '../App';

interface TermsPageProps {
  onNavigate?: (page: PageView) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          {/* Header */}
          <div className="mb-16 border-b border-slate-100 pb-10">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B1120] mb-4">Terms and Conditions</h1>
            <p className="text-slate-500 font-medium">Last updated: November 12, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none text-slate-600 prose-headings:font-medium prose-headings:text-[#0B1120] prose-h2:text-xl prose-h3:text-lg prose-p:leading-relaxed prose-li:leading-relaxed">
            
            <h2 className="text-2xl mb-4">Artificial Intelligence Policy</h2>
            <p>
              This Artificial Intelligence policy (the "Policy") outlines the principles, guidelines, and responsibilities regarding the use of Artificial Intelligence Systems at Centurim Systems Limited ("Centurim Healthcare"). The purpose of this Policy is to ensure that AI is implemented ethically, responsibly, and in alignment with our mission, vision, and values as an organization.
            </p>

            <h3 className="text-xl mt-8 mb-4">Background</h3>
            <p>
              Centurim Healthcare seeks to embrace the innovative benefits that can be provided by using AI while also working to mitigate the risks associated with embracing this emerging technology. This Policy is intended to ensure all forms of AI used at Centurim Healthcare are managed in a transparent, responsible, ethical, secure, and consistent manner.
            </p>

            <h3 className="text-xl mt-8 mb-4">Guiding Principles</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Transparency:</strong> We clearly explain when and how we use AI, including the business purposes and training methodologies.</li>
              <li><strong>Reliability:</strong> AI Systems undergo assessments for accuracy, robustness, and reliability. Erroneous outputs are troubleshot and remediated.</li>
              <li><strong>Accountability:</strong> AI uses are overseen by trained staff and monitored for risk. Compliance with applicable laws and standards is ensured.</li>
              <li><strong>Privacy & Data Security:</strong> Data is handled per privacy laws, with HIPAA compliance and regular security audits.</li>
              <li><strong>Ethics, Fairness & Reducing Bias:</strong> AI is deployed fairly and ethically, minimizing bias and promoting inclusion.</li>
              <li><strong>Continuous Review:</strong> The AI Policy is reviewed regularly for relevance and effectiveness.</li>
            </ul>

            <h2 className="text-2xl mt-10 mb-4">Security Commitment & Overview</h2>
            
            <h3 className="text-xl mt-6 mb-4">Security Commitment</h3>
            <p>
              At Centurim Healthcare, our commitment to security is rooted in a deep understanding of the importance of protecting sensitive information. We implement robust security protocols across all aspects of our platform, exceeding industry standards of data protection and compliance.
            </p>

            <h3 className="text-xl mt-8 mb-4">Key Security Practices</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>HIPAA Compliance:</strong> Fully compliant with HIPAA regulations.</li>
              <li><strong>BAA Availability:</strong> Business Associate Agreements are available.</li>
              <li><strong>Data Storage & Processing:</strong> All data is securely processed within the U.S. using AWS infrastructure with advanced encryption and security controls.</li>
              <li><strong>Zero Data Retention Policy:</strong> We do not store/retain data, and all the uploaded files are permanently discarded within 7 days.</li>
              <li><strong>Zero AI Training Policy:</strong> We do not use your data to train AI models.</li>
            </ul>

            <h3 className="text-xl mt-8 mb-4">Account Security</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Multi-Factor Authentication (MFA) required.</li>
              <li>Advanced password policies enforced.</li>
              <li>Admin control and audit logs accessible via API or reports.</li>
            </ul>

            <h3 className="text-xl mt-8 mb-4">AI & Machine Learning Security</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Secure model deployment.</li>
              <li>Anonymized and aggregated data training.</li>
              <li>Human oversight in AI processes.</li>
            </ul>

            <h3 className="text-xl mt-8 mb-4">Continuous Monitoring & Improvement</h3>
            <p>
              Security measures are continuously monitored, assessed, and updated to maintain a secure environment for business operations.
            </p>

            <h2 className="text-2xl mt-10 mb-4">Contact</h2>
            <p>Email: <a href="mailto:contact@centurim.com" className="text-[#2563EB] hover:underline">contact@centurim.com</a></p>

          </div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};