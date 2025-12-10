import React, { useState } from 'react';
import { ShieldCheck, Lock, Server, CheckCircle2, ArrowRight, Building2, User, FileText } from 'lucide-react';

const RequestAuditPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myForm = e.currentTarget;
    const formData = new FormData(myForm);

    // Standard Netlify Form Handling for SPA
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => console.error(error));
  };

  if (isSubmitted) {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">Thank You</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    Request Received. A Centurim Healthcare team member will contact you shortly.
                </p>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 inline-flex items-center gap-2 text-xs font-mono text-slate-500">
                    <Server size={14} />
                    REF_ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </div>
            </div>
        </div>
    );
  }

  return (
    <section className="bg-slate-50 min-h-screen py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column: Trust & Context */}
            <div className="lg:col-span-5 space-y-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-6">
                        Eliminate the Manual Burden of PDPM Reconciliation
                    </h1>
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                        Stop relying on manual review to catch high value errors. Connect with our clinical operations team to configure your secure audit environment and begin your retrospective validation.
                    </p>
                </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-7">
                <form 
                    name="audit-request" 
                    method="POST" 
                    data-netlify="true" 
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
                >
                    <input type="hidden" name="form-name" value="audit-request" />

                    <div className="p-8 md:p-10 space-y-10">
                        
                        {/* Field 1: Professional Details */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                                <User className="w-4 h-4 text-slate-400" />
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Professional Details</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required 
                                        className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                                        placeholder="Dr. Jane Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Work Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required 
                                        pattern="^((?!gmail\.com).)*$"
                                        title="Please use your professional work email address."
                                        className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                                        placeholder="jane@facility.com"
                                    />
                                    <p className="text-[10px] text-slate-400">Please use your institutional email.</p>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label htmlFor="job_title" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Job Title</label>
                                    <div className="relative">
                                        <select 
                                            id="job_title" 
                                            name="job_title" 
                                            required
                                            className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled selected>Select your role...</option>
                                            <option value="Administrator">Administrator / Executive Director</option>
                                            <option value="Regional Director">Regional Director</option>
                                            <option value="MDS Coordinator">MDS Coordinator / NAC</option>
                                            <option value="DON">Director of Nursing</option>
                                            <option value="Consultant">Reimbursement Consultant</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <ArrowRight size={14} className="text-slate-400 rotate-90" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Field 2: Facility Profile */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                                <Building2 className="w-4 h-4 text-slate-400" />
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Facility Profile</h3>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="facility_name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Facility / Organization Name</label>
                                    <input 
                                        type="text" 
                                        id="facility_name" 
                                        name="facility_name" 
                                        required 
                                        className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                                        placeholder="e.g. Providence Healthcare"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                     <div className="space-y-2">
                                        <label htmlFor="bed_count" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Number of Beds</label>
                                        <div className="relative">
                                            <select 
                                                id="bed_count" 
                                                name="bed_count" 
                                                required
                                                className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled selected>Select size...</option>
                                                <option value="<50">&lt; 50 Beds</option>
                                                <option value="50-100">50 - 100 Beds</option>
                                                <option value="100-500">100 - 500 Beds</option>
                                                <option value="500+">500+ Beds</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <ArrowRight size={14} className="text-slate-400 rotate-90" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="emr" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">Current EMR</label>
                                        <div className="relative">
                                            <select 
                                                id="emr" 
                                                name="emr" 
                                                required
                                                className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled selected>Select EMR...</option>
                                                <option value="PointClickCare">PointClickCare</option>
                                                <option value="MatrixCare">MatrixCare</option>
                                                <option value="Netsmart">Netsmart</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <ArrowRight size={14} className="text-slate-400 rotate-90" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* Field 3: Audit Scope */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                                <FileText className="w-4 h-4 text-slate-400" />
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Audit Scope</h3>
                            </div>
                            <div className="space-y-4">
                                <label className="relative flex items-center p-4 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors group">
                                    <input type="radio" name="audit_scope" value="Retrospective Validation" required className="peer w-4 h-4 text-slate-900 focus:ring-slate-900 border-slate-300" />
                                    <div className="ml-4 flex-1">
                                        <span className="block text-sm font-bold text-slate-900">Retrospective Validation ($250)</span>
                                        <span className="block text-xs text-slate-500 mt-1">Audit 5 closed files for NTA/GG variance.</span>
                                    </div>
                                    <div className="w-4 h-4 rounded-full border border-slate-300 peer-checked:bg-slate-900 peer-checked:border-slate-900"></div>
                                </label>

                                <label className="relative flex items-center p-4 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors group">
                                    <input type="radio" name="audit_scope" value="Monthly Revenue Integrity" required className="peer w-4 h-4 text-slate-900 focus:ring-slate-900 border-slate-300" />
                                    <div className="ml-4 flex-1">
                                        <span className="block text-sm font-bold text-slate-900">Monthly Revenue Integrity ($2,250)</span>
                                        <span className="block text-xs text-slate-500 mt-1">Ongoing real-time admission review.</span>
                                    </div>
                                    <div className="w-4 h-4 rounded-full border border-slate-300 peer-checked:bg-slate-900 peer-checked:border-slate-900"></div>
                                </label>

                                <label className="relative flex items-center p-4 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors group">
                                    <input type="radio" name="audit_scope" value="Enterprise" required className="peer w-4 h-4 text-slate-900 focus:ring-slate-900 border-slate-300" />
                                    <div className="ml-4 flex-1">
                                        <span className="block text-sm font-bold text-slate-900">Enterprise / Multi-Facility</span>
                                        <span className="block text-xs text-slate-500 mt-1">Contact Sales for volume pricing.</span>
                                    </div>
                                    <div className="w-4 h-4 rounded-full border border-slate-300 peer-checked:bg-slate-900 peer-checked:border-slate-900"></div>
                                </label>
                            </div>
                        </div>

                        {/* Field 4: Compliance Gate */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                             <label className="flex items-start gap-4 cursor-pointer group">
                                <div className="relative flex items-center mt-0.5">
                                    <input type="checkbox" required className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 bg-white checked:border-slate-900 checked:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20" />
                                    <CheckCircle2 className="pointer-events-none absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
                                </div>
                                <span className="text-xs text-slate-600 font-medium leading-relaxed group-hover:text-slate-900 transition-colors">
                                    I certify that I am an authorized representative of a Covered Entity or Business Associate under HIPAA regulations, and I have the authority to request this audit.
                                </span>
                            </label>
                        </div>

                    </div>

                    <div className="p-8 bg-slate-50 border-t border-slate-200 flex justify-end">
                        <button type="submit" className="bg-slate-900 text-white px-8 py-4 rounded-lg text-sm font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
                            Start Your Pilot Audit <ArrowRight size={14} />
                        </button>
                    </div>

                </form>
            </div>

        </div>
      </div>
    </section>
  );
};

export default RequestAuditPage;