import React from 'react';
import { Mic } from 'lucide-react';

export const AiFeature: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
                <div className="space-y-4">
                    <div className="bg-slate-800 p-4 rounded-xl rounded-tl-none max-w-xs">
                        <p className="text-sm">Hey, I need a quote for a panel upgrade.</p>
                    </div>
                    <div className="bg-blue-600 p-4 rounded-xl rounded-tr-none max-w-xs ml-auto">
                        <p className="text-sm">I can help with that. Is this for a residential or commercial property?</p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-xl rounded-tl-none max-w-xs">
                        <p className="text-sm">Residential. My house in Cedar Park.</p>
                    </div>
                    <div className="bg-blue-600 p-4 rounded-xl rounded-tr-none max-w-xs ml-auto">
                        <p className="text-sm">Great. Panel upgrades typically range from $1,500 to $3,000. Would you like to schedule a site visit?</p>
                    </div>
                </div>
            </div>

            <div className="order-1 lg:order-2">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-2 block">Feature 3: The Automation</span>
                <h2 className="text-3xl font-medium text-slate-900 mb-6">24/7 Digital Employee.</h2>
                <p className="text-lg text-slate-600 mb-6">
                    Replaces: Receptionists, Answering Services, Virtual Assistants.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                    While the website handles the bookings, our AI agent handles the chaos. It answers missed calls, replies to texts, and nurtures leads until they are ready to buy.
                </p>
                <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                        <Mic className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-slate-900">Never miss a call again.</span>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};