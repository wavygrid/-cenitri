import React from 'react';

export const Transformation: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="transformation">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
              <h2 className="text-3xl font-black uppercase mb-4">How we stop you from failing</h2>
              <p className="text-lg text-gray-600">
                 Most trade businesses fail because of "Admin Chaos", not bad workmanship.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="border-2 border-black p-8">
                  <div className="bg-black text-white text-xs font-bold px-2 py-1 inline-block mb-4 uppercase">The Problem</div>
                  <h3 className="text-xl font-bold mb-2">"Can you give me a quote?"</h3>
                  <p className="text-sm text-gray-500 mb-6 italic">
                      You drive 30 minutes to quote a job, and they say "I'll think about it." You just lost 1 hour and fuel money.
                  </p>
                  
                  <div className="border-t-2 border-gray-100 pt-4">
                      <div className="text-xs font-bold uppercase text-green-600 mb-1">The Solution</div>
                      <p className="font-bold">Price Anchoring Wizard.</p>
                      <p className="text-sm mt-1">Our booking engine gives an estimated range BEFORE they book. Tyre kickers leave. Buyers commit.</p>
                  </div>
              </div>

              {/* Card 2 */}
              <div className="border-2 border-black p-8">
                  <div className="bg-black text-white text-xs font-bold px-2 py-1 inline-block mb-4 uppercase">The Problem</div>
                  <h3 className="text-xl font-bold mb-2">Missed Calls</h3>
                  <p className="text-sm text-gray-500 mb-6 italic">
                      You are under a sink. You miss a call. That customer calls the next plumber on Google. You lost $500.
                  </p>
                  
                  <div className="border-t-2 border-gray-100 pt-4">
                      <div className="text-xs font-bold uppercase text-green-600 mb-1">The Solution</div>
                      <p className="font-bold">AI Catch-All Agent.</p>
                      <p className="text-sm mt-1">We instantly text back: "Hey, I'm on a job. How can I help?" The AI books the job via text.</p>
                  </div>
              </div>

              {/* Card 3 */}
              <div className="border-2 border-black p-8">
                  <div className="bg-black text-white text-xs font-bold px-2 py-1 inline-block mb-4 uppercase">The Problem</div>
                  <h3 className="text-xl font-bold mb-2">Paperwork Nightmares</h3>
                  <p className="text-sm text-gray-500 mb-6 italic">
                      You get home at 6PM and spend 2 hours sending invoices and emails. You have no free time.
                  </p>
                  
                  <div className="border-t-2 border-gray-100 pt-4">
                      <div className="text-xs font-bold uppercase text-green-600 mb-1">The Solution</div>
                      <p className="font-bold">Automated Logistics.</p>
                      <p className="text-sm mt-1">Confirmations, reminders, invoices, and review requests are sent automatically. Done.</p>
                  </div>
              </div>
          </div>
       </div>
    </section>
  );
};