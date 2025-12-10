import React from 'react';
import { Shield, Cloud, Lock, Activity } from 'lucide-react';

const SecurityItem: React.FC<{ title: string, description: string, icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="flex flex-col items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
        <div className="w-14 h-14 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-medical-600 group-hover:border-medical-200 shadow-sm mb-6 transition-all">
             {icon}
        </div>
        <h4 className="text-xl font-medium text-slate-900 tracking-tight mb-3">{title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
);

const SecuritySection: React.FC = () => {
  return (
    <section className="bg-white py-16 border-t border-slate-100 relative overflow-hidden" id="security">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-3xl space-y-4">
                <span className="text-xs font-bold text-medical-600 uppercase tracking-widest bg-medical-50 px-3 py-1 rounded-full inline-block">Security First</span>
                <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight">
                    Audit With Medical Grade Security
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed max-w-2xl font-light">
                    Centurim gives enterprise healthcare systems everything they need to manage security, compliance, and deployment at scale.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SecurityItem 
                title="HIPAA Compliant"
                description="Our enterprise-grade technology is 100% HIPAA-compliant with multiple layers of security and controls."
                icon={<Shield size={24} strokeWidth={1.5} />}
            />
            <SecurityItem 
                title="Secure Cloud"
                description="All data is stored and processed within secure, U.S.-based data centers to meet security and availability requirements."
                icon={<Cloud size={24} strokeWidth={1.5} />}
            />
            <SecurityItem 
                title="Encrypted Data"
                description="All data is encrypted in-transit and at rest with 256-bit encryption to protect confidentiality and privacy."
                icon={<Lock size={24} strokeWidth={1.5} />}
            />
            <SecurityItem 
                title="Activity Logging"
                description="Track and log all API calls and account activity (user actions, service events, console logins) for full auditability."
                icon={<Activity size={24} strokeWidth={1.5} />}
            />
        </div>

      </div>
    </section>
  );
};

export default SecuritySection;