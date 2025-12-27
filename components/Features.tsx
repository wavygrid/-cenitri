import React from 'react';
import { Globe, Calendar, Phone, Search, DollarSign, BarChart3 } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 border-b border-slate-100 pb-8">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">Platform Capabilities</h2>
           <p className="text-lg text-slate-600">Five core modules designed to automate your front-office operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           
           <div className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-teal-500/50 hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                  <Globe className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">Presence & PWA</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                 We deploy a high-performance Progressive Web App (PWA) that serves as your digital headquarters. Optimized for mobile conversion and lightning-fast load times.
              </p>
           </div>

           <div className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-teal-500/50 hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                  <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">Algorithmic Booking</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                 A smart booking engine that filters leads based on your custom logic (location, job type, time). It qualifies customers and secures commitments automatically.
              </p>
           </div>

           <div className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-teal-500/50 hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                  <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">AI Operations Agent</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                 Our 24/7 AI agent handles missed calls, answers FAQs, and nurtures leads via SMS. It ensures you never miss a revenue opportunity due to unavailability.
              </p>
           </div>

           <div className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-teal-500/50 hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                  <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">Integrated Payments</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                 Secure payment processing built directly into the booking flow. Capture deposits, hold cards on file, and automate invoicing through Stripe Connect.
              </p>
           </div>

           <div className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-teal-500/50 hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                  <Search className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">Programmatic SEO</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                 Our engine automatically generates service-area landing pages to capture local intent traffic. Dominate search results in every suburb you service.
              </p>
           </div>

           <div className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-teal-500/50 hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                  <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">Executive Dashboard</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                 Real-time analytics on revenue, lead velocity, and conversion rates. Make data-driven decisions without wrestling with spreadsheets.
              </p>
           </div>

        </div>
      </div>
    </section>
  );
};