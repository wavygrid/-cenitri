import React, { useState } from 'react';
import { Button } from './ui/Button';
import { 
  Server, ShieldCheck, Globe, Database, 
  CheckCircle2, Terminal, AlertCircle, Loader2 
} from 'lucide-react';
import { motion } from 'framer-motion';

const DeployPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = new URLSearchParams();
    
    // Manual loop for safety to prevent 'Illegal constructor' in some environments
    for (const [key, value] of formData.entries()) {
      data.append(key, value.toString());
    }
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      setTimeout(() => {
         setSubmitted(true);
         setIsSubmitting(false);
      }, 1500); // Simulate processing delay for effect
    } catch (err) {
      setError("Connection refused. Please check your network or try again.");
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-zinc-950 pt-32 pb-20 flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500 border border-emerald-500/20">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Provisioning Initiated</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Your instance request (ID: #REQ-{Math.floor(Math.random() * 9999)}) has been queued. Our onboarding engineering team will contact you within 24 hours to finalize the handshake.
          </p>
          <div className="bg-black rounded-lg p-4 text-left font-mono text-xs text-zinc-500 mb-8 border border-zinc-800">
             <p>&gt; Allocating resources...</p>
             <p>&gt; Verifying jurisdiction compliance...</p>
             <p className="text-emerald-500">&gt; Ticket created successfully.</p>
          </div>
          <Button onClick={() => window.location.reload()} variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800">
            Return to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 pt-32 pb-20 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Context */}
          <div className="lg:w-1/3 space-y-8">
             <div>
                <h1 className="text-4xl font-bold text-zinc-900 mb-4 tracking-tight">Configure Instance</h1>
                <p className="text-zinc-500 leading-relaxed">
                   Provide your firm's operational parameters. We use this data to pre-configure your logic gates and compliance framework before deployment.
                </p>
             </div>

             <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                   <Terminal size={14} /> System Requirements
                </h3>
                <div className="space-y-4">
                   <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-500">Global Coverage</span>
                      <span className="text-emerald-600 font-medium flex items-center gap-2"><CheckCircle2 size={14}/> Active</span>
                   </div>
                   <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-500">Logic Engine</span>
                      <span className="text-emerald-600 font-medium flex items-center gap-2"><CheckCircle2 size={14}/> v2.4.0</span>
                   </div>
                   <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-500">Security Audit</span>
                      <span className="text-emerald-600 font-medium flex items-center gap-2"><CheckCircle2 size={14}/> Passed</span>
                   </div>
                </div>
             </div>

             <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-3">
                <AlertCircle className="text-blue-600 shrink-0" size={20} />
                <p className="text-xs text-blue-800 leading-relaxed">
                   <strong>Note:</strong> Enterprise instances for firms with {'>'}500 leads/mo require a dedicated onboarding engineer.
                </p>
             </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-2/3">
             <div className="bg-white border border-zinc-200 rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-zinc-900 px-8 py-4 border-b border-zinc-800 flex justify-between items-center">
                   <span className="text-zinc-400 font-mono text-xs">DEPLOYMENT_WIZARD</span>
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                   </div>
                </div>
                
                <form 
                  name="deploy-instance" 
                  method="POST" 
                  data-netlify="true" 
                  onSubmit={handleSubmit}
                  className="p-8 md:p-10 space-y-8"
                >
                   <input type="hidden" name="form-name" value="deploy-instance" />

                   {/* Section 1: Identity */}
                   <div className="space-y-6">
                      <h3 className="text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">01. Firm Identity</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-500 uppercase">Firm Name</label>
                            <input required name="firm_name" type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" placeholder="ex. Sterling Law LLP" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-500 uppercase">Administrator Name</label>
                            <input required name="contact_name" type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" placeholder="ex. Jane Doe" />
                         </div>
                         <div className="col-span-1 md:col-span-2 space-y-2">
                            <label className="text-xs font-semibold text-zinc-500 uppercase">Work Email</label>
                            <input required name="email" type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" placeholder="jane@sterlinglaw.com" />
                         </div>
                      </div>
                   </div>

                   {/* Section 2: Configuration */}
                   <div className="space-y-6">
                      <h3 className="text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">02. Logic Configuration</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-500 uppercase">Primary Jurisdiction</label>
                            <div className="relative">
                               <Globe className="absolute left-4 top-3.5 text-zinc-400" size={16} />
                               <select required name="jurisdiction" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg pl-12 pr-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 appearance-none">
                                  <option value="" disabled selected>Select Region...</option>
                                  <option value="USA">United States (USCIS)</option>
                                  <option value="CAN">Canada (IRCC)</option>
                                  <option value="UK">United Kingdom (Home Office)</option>
                                  <option value="AUS">Australia (Home Affairs)</option>
                                  <option value="Multi">Multi-Jurisdictional</option>
                               </select>
                            </div>
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-500 uppercase">Practice Focus</label>
                            <div className="relative">
                               <Server className="absolute left-4 top-3.5 text-zinc-400" size={16} />
                               <select required name="practice_area" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg pl-12 pr-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 appearance-none">
                                  <option value="" disabled selected>Select Area...</option>
                                  <option value="Business">Business / Economic</option>
                                  <option value="Family">Family Sponsorship</option>
                                  <option value="Humanitarian">Humanitarian / Asylum</option>
                                  <option value="Corporate">Corporate Mobility</option>
                                  <option value="Full Service">Full Service</option>
                               </select>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Section 3: Volume */}
                   <div className="space-y-6">
                      <h3 className="text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">03. Throughput</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-500 uppercase">Monthly Lead Volume</label>
                            <div className="relative">
                               <Database className="absolute left-4 top-3.5 text-zinc-400" size={16} />
                               <select required name="monthly_leads" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg pl-12 pr-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 appearance-none">
                                  <option value="" disabled selected>Select Volume...</option>
                                  <option value="<50">Less than 50</option>
                                  <option value="50-200">50 - 200</option>
                                  <option value="200-500">200 - 500</option>
                                  <option value="500+">500+ (Enterprise)</option>
                               </select>
                            </div>
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-semibold text-zinc-500 uppercase">Current CRM (Optional)</label>
                            <input name="crm_system" type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" placeholder="ex. Clio, Docketwise..." />
                         </div>
                      </div>
                   </div>

                   {error && (
                     <div className="p-4 bg-red-50 text-red-700 text-sm rounded-lg flex items-center gap-2">
                        <AlertCircle size={16} /> {error}
                     </div>
                   )}

                   <div className="pt-4">
                      <Button disabled={isSubmitting} type="submit" size="lg" className="w-full h-14 text-lg font-bold shadow-lg shadow-zinc-900/20">
                         {isSubmitting ? (
                            <><Loader2 className="animate-spin mr-2" /> Provisioning Instance...</>
                         ) : (
                            "Initialize Deployment"
                         )}
                      </Button>
                      <p className="text-center text-xs text-zinc-400 mt-4">
                         By deploying, you agree to our Master Services Agreement and Data Processing Addendum.
                      </p>
                   </div>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeployPage;