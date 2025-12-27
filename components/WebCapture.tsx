import React from 'react';
import { ArrowRight, Smartphone, Star } from 'lucide-react';

export const WebCapture: React.FC = () => {
  return (
    <section id="web-capture" className="py-24 lg:py-32 bg-cream" aria-labelledby="web-capture-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">

            <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-white border border-stone-200 flex items-center justify-center font-display font-bold text-xl shadow-sm">1</div>
                    <span className="text-sm leading-normal font-semibold uppercase tracking-wider text-slate-600">Capture & Convert</span>
                </div>

                <h2 id="web-capture-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-6">
                    Your digital <br/>front door.
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 mb-8">
                    Most trade websites are static brochures. We build you a <strong className="text-slate-900">Progressive Web App (PWA)</strong> that feels like a native app. It loads instantly, works offline, and is designed to get the "Book Now" click.
                </p>

                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="mt-1 bg-green-100 p-1 rounded-full"><ArrowRight className="h-3 w-3 text-green-700" /></div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Programmatic SEO</h4>
                            <p className="text-sm leading-relaxed text-slate-700">We auto-generate landing pages for every suburb you service.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="mt-1 bg-green-100 p-1 rounded-full"><ArrowRight className="h-3 w-3 text-green-700" /></div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Trust-First Design</h4>
                            <p className="text-sm leading-relaxed text-slate-700">Reviews, licenses, and insurance badges are front and center.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual: Floating Phone */}
            <div className="md:w-1/2 flex justify-center relative">
                <div className="absolute inset-0 bg-brand-100/50 rounded-full blur-3xl transform scale-75"></div>
                <div className="relative bg-stone-900 rounded-[3rem] p-4 shadow-2xl border-4 border-stone-800 w-[300px] animate-float">
                    <div className="bg-white rounded-[2.5rem] overflow-hidden h-[550px] relative">
                        {/* Fake App Header */}
                        <div className="bg-stone-900 text-white p-6 pt-12">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-semibold text-lg leading-snug">Mike's Plumbing</span>
                                <div className="bg-green-500 h-2 w-2 rounded-full"></div>
                            </div>
                            <h3 className="text-2xl font-bold leading-tight">Emergency?<br/>We can help.</h3>
                        </div>
                        {/* Fake App Body */}
                        <div className="p-6 space-y-4">
                            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 flex items-center gap-3">
                                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">💧</div>
                                <div className="text-sm leading-normal font-semibold text-slate-900">Leak Repair</div>
                            </div>
                            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 flex items-center gap-3">
                                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">🔥</div>
                                <div className="text-sm leading-normal font-semibold text-slate-900">Water Heater</div>
                            </div>
                            <button className="w-full bg-brand-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-brand-500/30 mt-4">
                                Book Now
                            </button>

                            <div className="flex justify-center gap-1 pt-4">
                                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
