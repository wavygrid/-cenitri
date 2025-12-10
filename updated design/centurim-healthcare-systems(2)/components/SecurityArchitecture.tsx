import React from 'react';
import { 
    Server, Trash2, Lock, FileBadge, 
    ShieldAlert, Activity,
    MapPin, FileText, Shield, Key, Eye, User, Laptop,
    Cloud
} from 'lucide-react';

const SectionHeader: React.FC<{ num: string, title: string }> = ({ num, title }) => (
    <div className="flex items-baseline gap-4 mb-8 border-b border-slate-200 pb-4">
        <span className="text-xs font-mono font-bold text-slate-400">{num}</span>
        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest">{title}</h2>
    </div>
);

const SpecRow: React.FC<{ label: string, value: string }> = ({ label, value }) => (
    <div className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
        <span className="text-xs font-mono text-slate-500 uppercase">{label}</span>
        <span className="text-sm font-medium text-slate-900">{value}</span>
    </div>
);

// 1. Infrastructure
const InfraSection: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader num="01" title="Infrastructure" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-medium text-slate-900 mb-4">US-East-1 Data Sovereignty</h3>
                    <p className="text-slate-600 leading-relaxed font-light mb-6">
                        We strictly adhere to data localization protocols. All computational workloads and storage buckets are provisioned exclusively within Northern Virginia. No data is replicated internationally.
                    </p>
                    <div className="flex items-start gap-3 text-sm text-slate-900 bg-slate-50 p-4 rounded-sm border border-slate-200">
                        <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>Hard-coded region locking ensures compliance with federal data residency requirements.</span>
                    </div>
                </div>
                
                <div className="border border-slate-200 rounded-sm p-6 bg-white">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Technical Specifications</h4>
                    <SpecRow label="Provider" value="Amazon Web Services" />
                    <SpecRow label="Region" value="US-East-1 (N. Virginia)" />
                    <SpecRow label="Availability Zones" value="3 (Multi-AZ)" />
                    <SpecRow label="Uptime SLA" value="99.99%" />
                    <SpecRow label="Network Latency" value="~24ms" />
                </div>
            </div>
        </div>
    </section>
);

// 2. Lifecycle
const LifecycleSection: React.FC = () => (
    <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader num="02" title="Data Lifecycle" />
            
            <div className="mb-12">
                <h3 className="text-2xl font-medium text-slate-900 mb-4">Ephemeral Processing Model</h3>
                <p className="text-slate-600 leading-relaxed font-light max-w-2xl">
                    We view data as a liability, not an asset. Our architecture is stateless by design. Data exists in the system only as long as required to compute the variance report.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border-l-2 border-slate-900 pl-6 py-2">
                    <span className="text-4xl font-mono text-slate-200 mb-2 block">01</span>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Ingest</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Files uploaded via secure, presigned URLs to isolated S3 buckets with server-side encryption.</p>
                </div>
                <div className="border-l-2 border-slate-900 pl-6 py-2">
                    <span className="text-4xl font-mono text-slate-200 mb-2 block">02</span>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Process</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Analysis in serverless Lambda environments. RAM is wiped immediately after execution.</p>
                </div>
                <div className="border-l-2 border-slate-900 pl-6 py-2">
                    <span className="text-4xl font-mono text-slate-200 mb-2 block">03</span>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Destroy</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Source documents are permanently deleted from infrastructure upon report generation.</p>
                </div>
            </div>

            <div className="mt-12 p-4 border border-slate-200 bg-slate-50 flex items-center gap-4">
                <Shield className="w-5 h-5 text-slate-900" />
                <div className="text-sm">
                    <span className="font-bold text-slate-900">Zero AI Training Policy: </span>
                    <span className="text-slate-600">We do not use client PHI to train foundational AI models.</span>
                </div>
            </div>
        </div>
    </section>
);

// 3. Standards (Compliance)
const ComplianceSection: React.FC = () => (
    <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader num="03" title="Standards & Controls" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                
                {/* HIPAA */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <FileBadge className="w-4 h-4 text-slate-900" />
                        <h4 className="text-sm font-bold text-slate-900 uppercase">HIPAA Business Associate</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        We execute a comprehensive Business Associate Agreement (BAA) with all Covered Entities, assuming contractual liability.
                    </p>
                    <div className="flex gap-2">
                        <span className="text-[10px] bg-slate-100 border border-slate-200 px-2 py-1 rounded-sm text-slate-600 font-mono">STATUS: SIGNED</span>
                    </div>
                </div>

                {/* Encryption */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <Lock className="w-4 h-4 text-slate-900" />
                        <h4 className="text-sm font-bold text-slate-900 uppercase">AES-256 Encryption</h4>
                    </div>
                    <ul className="space-y-2">
                        <li className="flex justify-between text-sm border-b border-slate-100 pb-1">
                            <span className="text-slate-600">Data at Rest</span>
                            <span className="font-mono text-slate-900">AES-256-GCM</span>
                        </li>
                        <li className="flex justify-between text-sm border-b border-slate-100 pb-1">
                            <span className="text-slate-600">Data in Transit</span>
                            <span className="font-mono text-slate-900">TLS 1.3</span>
                        </li>
                    </ul>
                </div>

                {/* Audit */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <Eye className="w-4 h-4 text-slate-900" />
                        <h4 className="text-sm font-bold text-slate-900 uppercase">Audit Logging</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Immutable CloudTrail ledger of all API calls, system events, and data access patterns.
                    </p>
                </div>

                {/* Access */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <Key className="w-4 h-4 text-slate-900" />
                        <h4 className="text-sm font-bold text-slate-900 uppercase">Access Control</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Least privilege architecture. Mandatory Multi-Factor Authentication (MFA) for all administrative access points.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

// 4. Operations
const OpsSection: React.FC = () => (
    <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader num="04" title="Operational Security" />
            
            <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-8 border-b border-slate-100 last:border-0">
                    <div className="w-48 shrink-0">
                        <h4 className="text-sm font-bold text-slate-900">Personnel Security</h4>
                    </div>
                    <div className="flex-1 space-y-4">
                        <div className="flex gap-4">
                            <Laptop className="w-4 h-4 text-slate-400 mt-0.5" />
                            <div>
                                <strong className="text-sm text-slate-900 block mb-1">Device Encryption</strong>
                                <p className="text-sm text-slate-600">All developer workstations are encrypted and monitored via MDM.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <User className="w-4 h-4 text-slate-400 mt-0.5" />
                            <div>
                                <strong className="text-sm text-slate-900 block mb-1">Confidentiality</strong>
                                <p className="text-sm text-slate-600">Strict NDAs and background checks for all personnel with cloud access.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-8 border-b border-slate-100 last:border-0">
                    <div className="w-48 shrink-0">
                        <h4 className="text-sm font-bold text-slate-900">Continuous Monitoring</h4>
                    </div>
                    <div className="flex-1 space-y-4">
                         <div className="flex gap-4">
                            <ShieldAlert className="w-4 h-4 text-slate-400 mt-0.5" />
                            <div>
                                <strong className="text-sm text-slate-900 block mb-1">Vulnerability Scanning</strong>
                                <p className="text-sm text-slate-600">Static analysis of code and dependencies during every deployment.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Activity className="w-4 h-4 text-slate-400 mt-0.5" />
                            <div>
                                <strong className="text-sm text-slate-900 block mb-1">Intrusion Detection</strong>
                                <p className="text-sm text-slate-600">Real-time monitoring of network traffic and anomalous behavior.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const SecurityArchitecture: React.FC = () => {
    return (
        <div className="bg-white overflow-hidden">
            <InfraSection />
            <LifecycleSection />
            <ComplianceSection />
            <OpsSection />
            
            {/* Footer Disclaimer */}
            <section className="py-12 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-[10px] leading-relaxed max-w-3xl mx-auto text-slate-400 font-mono">
                        LEGAL NOTICE: Centurim provides data processing services. Our liability is limited as set forth in our Master Services Agreement (MSA) and Business Associate Agreement (BAA). Users are responsible for ensuring they have the legal right to upload data to the platform.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default SecurityArchitecture;