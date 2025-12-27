import React from 'react';

export const TheStruggle: React.FC = () => {
  return (
    <section className="py-24 bg-white">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
              <h2 className="text-3xl font-black uppercase mb-4">Why you are tired.</h2>
              <p className="text-lg text-gray-600 font-bold">
                 It's not the work. It's the admin.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="border-2 border-black p-8 bg-gray-50">
                  <h3 className="text-xl font-bold mb-3 uppercase">Phone Tag</h3>
                  <p className="text-sm text-gray-600 mb-4">
                      You miss a call while under a sink. You call back later, they don't answer. You chase them for 2 days.
                  </p>
                  <div className="font-bold text-sm border-t-2 border-black pt-4">
                     Result: You lose the job.
                  </div>
              </div>

              <div className="border-2 border-black p-8 bg-gray-50">
                  <h3 className="text-xl font-bold mb-3 uppercase">Evening Paperwork</h3>
                  <p className="text-sm text-gray-600 mb-4">
                      You get home at 6 PM. Instead of dinner with the family, you spend 2 hours sending quotes and invoices.
                  </p>
                  <div className="font-bold text-sm border-t-2 border-black pt-4">
                     Result: No free time.
                  </div>
              </div>

              <div className="border-2 border-black p-8 bg-gray-50">
                  <h3 className="text-xl font-bold mb-3 uppercase">Tyre Kickers</h3>
                  <p className="text-sm text-gray-600 mb-4">
                      You drive 30 minutes to quote a job. The customer says "That's too expensive." You wasted gas and an hour.
                  </p>
                  <div className="font-bold text-sm border-t-2 border-black pt-4">
                     Result: You work for free.
                  </div>
              </div>
          </div>
       </div>
    </section>
  );
};