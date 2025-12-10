import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">TERMS AND CONDITIONS</h1>
        <div className="text-sm text-slate-500 mb-8 border-b border-slate-200 pb-8">
            <p>Last updated: November 12, 2025</p>
        </div>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
            
            {/* AI Policy Section */}
            <section>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Artificial Intelligence Policy</h2>
                    <p className="text-sm leading-relaxed">
                        This Artificial Intelligence policy (the “Policy”) outlines the principles, guidelines, and responsibilities regarding the use of Artificial Intelligence Systems at Centurim Systems Limited (“Centurim Healthcare”). The purpose of this Policy is to ensure that AI is implemented ethically, responsibly, and in alignment with our mission, vision, and values as an organization.
                    </p>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Background</h3>
                <p>
                    Centurim Healthcare seeks to embrace the innovative benefits that can be provided by using AI while also working to mitigate the risks associated with embracing this emerging technology. This Policy is intended to ensure all forms of AI used at Centurim Healthcare are managed in a transparent, responsible, ethical, secure, and consistent manner.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Guiding Principles</h3>
                <ul className="list-disc pl-5 space-y-3">
                    <li><strong className="text-slate-900">Transparency:</strong> We clearly explain when and how we use AI, including the business purposes and training methodologies.</li>
                    <li><strong className="text-slate-900">Reliability:</strong> AI Systems undergo assessments for accuracy, robustness, and reliability. Erroneous outputs are troubleshot and remediated.</li>
                    <li><strong className="text-slate-900">Accountability:</strong> AI uses are overseen by trained staff and monitored for risk. Compliance with applicable laws and standards is ensured.</li>
                    <li><strong className="text-slate-900">Privacy & Data Security:</strong> Data is handled per privacy laws, with HIPAA compliance and regular security audits.</li>
                    <li><strong className="text-slate-900">Ethics, Fairness & Reducing Bias:</strong> AI is deployed fairly and ethically, minimizing bias and promoting inclusion.</li>
                    <li><strong className="text-slate-900">Continuous Review:</strong> The AI Policy is reviewed regularly for relevance and effectiveness.</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-900 mt-12 mb-6 pb-2 border-b border-slate-100">Security Commitment & Overview</h3>
                
                <h4 className="text-lg font-bold text-slate-900 mt-6 mb-2">Security Commitment</h4>
                <p>
                    At Centurim Healthcare, our commitment to security is rooted in a deep understanding of the importance of protecting sensitive information. We implement robust security protocols across all aspects of our platform, exceeding industry standards of data protection and compliance.
                </p>

                <h4 className="text-lg font-bold text-slate-900 mt-6 mb-2">Key Security Practices</h4>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-slate-900">HIPAA Compliance:</strong> Fully compliant with HIPAA regulations.</li>
                    <li><strong className="text-slate-900">BAA Availability:</strong> Business Associate Agreements are available.</li>
                    <li><strong className="text-slate-900">Data Storage & Processing:</strong> All data is securely processed within the U.S. using AWS infrastructure with advanced encryption and security controls.</li>
                    <li><strong className="text-slate-900">Zero Data Retention Policy:</strong> We do not store/retain data, and all the uploaded files are permanently discarded within 7 days.</li>
                    <li><strong className="text-slate-900">Zero AI Training Policy:</strong> We do not use your data to train AI models.</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mt-6 mb-2">Account Security</h4>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Multi-Factor Authentication (MFA) required.</li>
                    <li>Advanced password policies enforced.</li>
                    <li>Admin control and audit logs accessible via API or reports.</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mt-6 mb-2">AI & Machine Learning Security</h4>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Secure model deployment.</li>
                    <li>Anonymized and aggregated data training.</li>
                    <li>Human oversight in AI processes.</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mt-6 mb-2">Continuous Monitoring & Improvement</h4>
                <p>
                    Security measures are continuously monitored, assessed, and updated to maintain a secure environment for business operations.
                </p>

                <div className="mt-12 p-6 rounded-lg border border-slate-100 bg-white shadow-sm">
                    <p className="font-bold text-slate-900">Contact</p>
                    <p className="text-slate-600 mt-2">Email: <a href="mailto:contact@centurim.com" className="text-medical-600 hover:underline">contact@centurim.com</a></p>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;