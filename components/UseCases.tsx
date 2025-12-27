import React from 'react';
import { Clock, CheckCircle2, XCircle } from 'lucide-react';

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 lg:py-32 bg-stone-50" aria-labelledby="use-cases-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center mb-16">
           <span className="text-brand-600 font-semibold tracking-wider uppercase text-xs leading-normal mb-3 block">Real Scenarios</span>
           <h2 id="use-cases-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-6">A Tale of Two Trades</h2>
           <p className="text-lg leading-relaxed text-slate-700 max-w-2xl mx-auto">
             See how the Centurim OS transforms the daily life of business owners just like you.
           </p>
        </div>

        <div className="space-y-20">

            {/* Case 1: Bob the Plumber */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-soft border border-stone-100 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs leading-normal font-semibold uppercase mb-6">
                            Scenario: The Emergency Leak
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight text-slate-900 mb-4">Meet Bob. He's a Plumber.</h3>
                        <p className="text-slate-700 mb-8 leading-relaxed">
                            It's 2:00 PM. Bob is under a sink fixing a disposal unit. His hands are wet. His phone rings. It's a new customer with a burst pipe.
                        </p>

                        <div className="space-y-6">
                            {/* The Old Way */}
                            <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="mt-1">
                                    <XCircle className="h-6 w-6 text-red-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Without Centurim</h4>
                                    <p className="text-sm leading-relaxed text-slate-700">Bob ignores the call. He calls back 45 mins later. The customer has already booked another plumber. <br/><span className="text-red-500 font-semibold">Loss: $450</span></p>
                                </div>
                            </div>

                            {/* The Centurim Way */}
                            <div className="flex gap-4 bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm transform scale-105">
                                <div className="mt-1">
                                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">With Centurim AI</h4>
                                    <p className="text-sm leading-relaxed text-slate-700">
                                        The AI answers immediately: "Hi, this is Bob's automated assistant. Is this an emergency?" <br/>
                                        It captures the address, books the slot for 4 PM, and takes a $50 deposit. Bob gets a text notification.
                                        <br/><span className="text-blue-600 font-semibold">Gain: $450 + New Client</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Visual Side */}
                    <div className="bg-stone-100 rounded-3xl h-full min-h-[300px] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                        {/* Abstract Representation of AI Chat */}
                        <div className="w-64 bg-white rounded-2xl shadow-xl p-4 space-y-3 z-10">
                            <div className="bg-stone-100 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl text-xs leading-relaxed text-slate-700">
                                Bob's Plumbing here. Do you have a water emergency?
                            </div>
                            <div className="bg-blue-600 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl text-xs leading-relaxed text-white self-end ml-auto">
                                Yes! Burst pipe in kitchen!
                            </div>
                            <div className="bg-stone-100 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl text-xs leading-relaxed text-slate-700">
                                Booking you for 4PM. Deposit secured.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Case 2: Sarah the HVAC Tech */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-soft border border-stone-100 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                     {/* Visual Side (Swapped for variety on desktop) */}
                     <div className="hidden lg:flex bg-stone-100 rounded-3xl h-full min-h-[300px] items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                        <div className="w-64 bg-white rounded-xl shadow-xl border border-stone-200 p-6 z-10 text-center">
                            <h5 className="font-semibold text-slate-900 mb-1">Quote #4092</h5>
                            <div className="text-3xl font-bold text-slate-900 mb-4">$8,500</div>
                            <div className="flex gap-2 justify-center mb-4">
                                <span className="h-2 w-12 bg-orange-500 rounded-full"></span>
                                <span className="h-2 w-4 bg-stone-200 rounded-full"></span>
                            </div>
                            <button className="w-full bg-stone-900 text-white text-xs leading-normal font-semibold py-2 rounded-lg">Client Approved ✅</button>
                        </div>
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-xs leading-normal font-semibold uppercase mb-6">
                            Scenario: The High-Ticket Quote
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight text-slate-900 mb-4">Meet Sarah. She does HVAC.</h3>
                        <p className="text-slate-700 mb-8 leading-relaxed">
                            Sarah hates "tyre kickers." She drives 40 minutes to quote an AC install, only to hear "That's too expensive, I'll think about it."
                        </p>

                        <div className="space-y-6">
                            {/* The Old Way */}
                            <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="mt-1">
                                    <Clock className="h-6 w-6 text-red-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Without Centurim</h4>
                                    <p className="text-sm leading-relaxed text-slate-700">Sarah wastes 2 hours driving and quoting. The client ghosts her. <br/><span className="text-red-500 font-semibold">Loss: 2 Hours + Gas</span></p>
                                </div>
                            </div>

                            {/* The Centurim Way */}
                            <div className="flex gap-4 bg-orange-50 p-6 rounded-2xl border border-orange-100 shadow-sm transform scale-105">
                                <div className="mt-1">
                                    <CheckCircle2 className="h-6 w-6 text-orange-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">With Centurim Price Wizard</h4>
                                    <p className="text-sm leading-relaxed text-slate-700">
                                        The client uses the "Instant Quote" wizard on her site. They see the range is $6k - $9k. They book a site visit knowing the price.
                                        <br/><span className="text-orange-600 font-semibold">Gain: Qualified Lead who is ready to buy.</span>
                                    </p>
                                </div>
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
