import React, { useState } from 'react';
import { Button } from './ui/Button';
import { 
    ShieldCheckIcon,
    ServerIcon
} from './ui/Icons';
import { Footer } from './Footer';
import { PageView } from '../App';

interface ContactPageProps {
  onNavigate?: (page: PageView) => void;
}

type RoleType = 'legal' | 'healthcare';

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [role, setRole] = useState<RoleType>('legal'); // Default to legal to show fields immediately
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Netlify Form Submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => alert('Request received. A senior analyst will contact you shortly to confirm requirements.'))
      .catch((error) => alert(error))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="pt-32 pb-24 md:pt-48 md:pb-32 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              
              {/* LEFT COLUMN: The Hook (Sticky) */}
              <div className="w-full lg:w-1/2 lg:sticky lg:top-40 h-fit">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#0B1120] leading-[1.1] mb-8">
                      Stop losing days to <br className="hidden lg:block"/>
                      <span className="text-[#2563EB]">medical records.</span>
                  </h1>

                  <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                      Manual review is the bottleneck of high-stakes litigation and clinical audit. Centurim automates the drudgery so you can focus on the strategy.
                  </p>

                  <div className="space-y-8 mb-16">
                      <p className="text-slate-600 text-lg leading-relaxed">
                          We don't do hard pitches. Let's have a short, honest conversation about your document volume and see if our architecture fits your workflow. You'll walk away with a clear idea of what's possible.
                      </p>
                  </div>

                  {/* HIPAA Badge */}
                  <div className="border-t border-slate-100 pt-8">
                      <img
                        src="/HIPAA_DARK.svg"
                        alt="HIPAA Compliant"
                        className="h-16 w-auto"
                      />
                  </div>
              </div>

              {/* RIGHT COLUMN: The Modern Form */}
              <div className="w-full lg:w-1/2">
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
                      <form 
                          name="client-intake" 
                          method="POST" 
                          data-netlify="true" 
                          onSubmit={handleSubmit}
                          className="space-y-8"
                      >
                          <input type="hidden" name="form-name" value="client-intake" />
                          
                          {/* 1. Segmentation (The toggle) */}
                          <div className="space-y-4">
                              <label className="text-base font-bold text-slate-900 block">Organization Type</label>
                              <div className="grid grid-cols-2 gap-4">
                                  <button 
                                      type="button"
                                      onClick={() => setRole('legal')}
                                      className={`px-4 py-3 rounded-lg border text-lg font-bold transition-all ${role === 'legal' ? 'bg-[#0B1120] text-white border-[#0B1120] shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                                  >
                                      Legal / Insurance
                                  </button>
                                  <button 
                                      type="button"
                                      onClick={() => setRole('healthcare')}
                                      className={`px-4 py-3 rounded-lg border text-lg font-bold transition-all ${role === 'healthcare' ? 'bg-[#0B1120] text-white border-[#0B1120] shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                                  >
                                      Healthcare
                                  </button>
                              </div>
                              <input type="hidden" name="role" value={role} />
                          </div>

                          {/* 2. Identity */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                  <label htmlFor="first-name" className="text-lg font-bold text-slate-700">First Name <span className="text-red-500">*</span></label>
                                  <input type="text" name="first-name" id="first-name" required className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-900" placeholder="Jane" />
                              </div>
                              <div className="space-y-2">
                                  <label htmlFor="last-name" className="text-lg font-bold text-slate-700">Last Name <span className="text-red-500">*</span></label>
                                  <input type="text" name="last-name" id="last-name" required className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-900" placeholder="Doe" />
                              </div>
                          </div>

                          <div className="space-y-2">
                              <label htmlFor="email" className="text-lg font-bold text-slate-700">Work Email <span className="text-red-500">*</span></label>
                              <input type="email" name="email" id="email" required className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-900" placeholder="jane@firm.com" />
                          </div>

                          <div className="space-y-2">
                              <label htmlFor="company" className="text-lg font-bold text-slate-700">{role === 'legal' ? 'Law Firm / Company' : 'Facility / Organization'} <span className="text-red-500">*</span></label>
                              <input type="text" name="company" id="company" required className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-900" />
                          </div>

                          {/* 3. Volume Metric */}
                          <div className="space-y-2">
                               <label htmlFor="volume" className="text-lg font-bold text-slate-700">Monthly Page Volume <span className="text-red-500">*</span></label>
                               <div className="relative">
                                  <select name="volume" id="volume" className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all appearance-none cursor-pointer text-slate-900">
                                      <option value="" disabled selected>Select volume range...</option>
                                      <option value="<1k">Less than 1,000 pages</option>
                                      <option value="1k-10k">1,000 - 10,000 pages</option>
                                      <option value="10k-50k">10,000 - 50,000 pages</option>
                                      <option value="50k+">50,000+ pages (Enterprise)</option>
                                  </select>
                                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                  </div>
                               </div>
                          </div>

                          {/* 4. Context */}
                          <div className="space-y-2">
                              <label htmlFor="message" className="text-lg font-bold text-slate-700">How can we help? <span className="text-slate-400 font-normal ml-1">(Optional)</span></label>
                              <textarea 
                                  name="message" 
                                  id="message" 
                                  rows={4} 
                                  className="w-full p-4 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all placeholder:text-slate-400 resize-none text-slate-900"
                                  placeholder="Tell us about your current workflow bottlenecks..."
                              ></textarea>
                          </div>

                          <div className="pt-4">
                              <Button variant="primary" className="w-full h-14 text-base font-bold shadow-lg" disabled={isSubmitting}>
                                  {isSubmitting ? 'Sending Request...' : 'Schedule Demo'}
                              </Button>
                              <p className="text-center text-lg text-slate-500 mt-6">
                                  By submitting this form, you agree to our privacy policy. Your data is encrypted end-to-end.
                              </p>
                          </div>

                      </form>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};