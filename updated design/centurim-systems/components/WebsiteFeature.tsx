import React from 'react';
import { Smartphone, Zap, Search } from 'lucide-react';

export const WebsiteFeature: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-slate-900">Feature 1: The Frontend</h2>
            <p className="text-lg text-slate-600 mt-2">Replaces: WordPress, Webflow, Wix, SEO Agencies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="bg-white h-12 w-12 rounded-xl border border-slate-100 flex items-center justify-center mb-6 text-blue-600">
                    <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">App-Like Experience</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    We build you a Progressive Web App (PWA). It feels like a native iPhone app but lives on the web. Customers can install it to their home screen.
                </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="bg-white h-12 w-12 rounded-xl border border-slate-100 flex items-center justify-center mb-6 text-yellow-600">
                    <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Load Times</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Tradesmen websites are notoriously slow. Ours score 100/100 on Google PageSpeed. Zero friction means higher conversion rates.
                </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="bg-white h-12 w-12 rounded-xl border border-slate-100 flex items-center justify-center mb-6 text-green-600">
                    <Search className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Programmatic SEO</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    We automatically generate landing pages for every suburb you service (e.g., "Plumber in Austin", "Plumber in Round Rock").
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};