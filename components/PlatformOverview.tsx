import React from 'react';
import { Layers, ArrowRight, Zap, Database, Globe } from 'lucide-react';

export const PlatformOverview: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 border-y border-slate-200" aria-labelledby="platform-overview-heading">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 id="platform-overview-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-4">A Complete Digital Infrastructure</h2>
              <p className="text-lg leading-relaxed text-slate-700">
                  Centurim is not just a website builder. It is a vertically integrated software suite that replaces your fragmented tech stack with a single, synchronized engine.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Left: The "Before" State */}
              <div className="relative p-8 rounded-2xl border border-slate-200 bg-white/50">
                  <div className="absolute -top-3 left-8 bg-slate-200 text-slate-700 px-3 py-1 text-xs leading-normal font-medium uppercase tracking-wide rounded">
                      The Fragmented Stack
                  </div>
                  <h3 className="text-xl font-semibold leading-snug text-slate-900 mb-6">What you are likely using now:</h3>
                  
                  <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 border border-slate-100 bg-white rounded-lg shadow-sm opacity-70">
                          <Globe className="h-5 w-5 text-slate-600" />
                          <div>
                              <p className="font-semibold text-base leading-normal text-slate-900">Website Hosting</p>
                              <p className="text-sm leading-normal text-slate-700">Wordpress / Wix / Squarespace</p>
                          </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 border border-slate-100 bg-white rounded-lg shadow-sm opacity-70">
                          <Layers className="h-5 w-5 text-slate-600" />
                          <div>
                              <p className="font-semibold text-base leading-normal text-slate-900">Booking Plugin</p>
                              <p className="text-sm leading-normal text-slate-700">Calendly / Acuity / Typeform</p>
                          </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 border border-slate-100 bg-white rounded-lg shadow-sm opacity-70">
                          <Database className="h-5 w-5 text-slate-600" />
                          <div>
                              <p className="font-semibold text-base leading-normal text-slate-900">CRM / Database</p>
                              <p className="text-sm leading-normal text-slate-700">Spreadsheets / Hubspot</p>
                          </div>
                      </div>
                  </div>
                  <p className="mt-6 text-sm leading-normal text-slate-700 italic">
                      *These tools do not communicate effectively, leading to data silos and manual data entry.
                  </p>
              </div>

              {/* Center Arrow (Mobile hidden) */}
              <div className="hidden md:flex justify-center text-slate-300">
                  <ArrowRight className="h-8 w-8" />
              </div>

              {/* Right: The Centurim Solution */}
              <div className="relative p-8 rounded-2xl border border-teal-100 bg-white shadow-lg shadow-teal-900/5 ring-1 ring-teal-500/20">
                  <div className="absolute -top-3 left-8 bg-teal-600 text-white px-3 py-1 text-xs leading-normal font-medium uppercase tracking-wide rounded">
                      The Centurim OS
                  </div>
                  <h3 className="text-xl font-semibold leading-snug text-slate-900 mb-6">What we replace it with:</h3>
                  
                  <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 border-l-4 border-teal-500 bg-slate-50 rounded-r-lg">
                          <Zap className="h-5 w-5 text-teal-600" />
                          <div>
                              <p className="font-bold text-base leading-normal text-slate-900">Unified Commerce Cloud</p>
                              <p className="text-sm leading-normal text-slate-700">Your website, booking engine, and payments are one native code-base.</p>
                          </div>
                      </div>
                      <div className="pl-14">
                          <ul className="space-y-2 text-base leading-normal text-slate-700">
                              <li className="flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
                                  <span>Seamless data flow (No APIs needed)</span>
                              </li>
                              <li className="flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
                                  <span>Single Dashboard for all metrics</span>
                              </li>
                              <li className="flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
                                  <span>Enterprise-grade speed & security</span>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

          </div>
       </div>
    </section>
  );
};