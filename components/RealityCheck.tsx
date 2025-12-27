import React from 'react';
import { PhoneMissed, Clock } from 'lucide-react';

export const RealityCheck: React.FC = () => {
  return (
    <section id="reality-check" className="py-24 lg:py-32 bg-slate-50 border-t border-slate-100" aria-labelledby="reality-check-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div>
                <h2 id="reality-check-heading" className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-6">The "Missed Call" Problem</h2>
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                    You are under a sink or on a roof. Your phone rings. You can't answer it.
                </p>
                <p className="text-lg leading-relaxed text-slate-700">
                    That customer doesn't leave a voicemail. They call the next plumber on Google. <strong>You just lost $500 in 30 seconds.</strong>
                </p>
            </div>

            {/* Visualizing the pain */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col gap-4 max-w-md mx-auto w-full">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-2 rounded-full">
                            <PhoneMissed className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                            <p className="font-medium text-slate-900">Missed Call</p>
                            <p className="text-xs leading-normal text-slate-600">Today, 2:14 PM</p>
                        </div>
                    </div>
                    <span className="text-red-500 font-semibold">-$450</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 opacity-70">
                    <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-2 rounded-full">
                            <PhoneMissed className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                            <p className="font-medium text-slate-900">Missed Call</p>
                            <p className="text-xs leading-normal text-slate-600">Yesterday, 4:30 PM</p>
                        </div>
                    </div>
                    <span className="text-red-500 font-semibold">-$800</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg text-center mt-2">
                    <p className="text-xs leading-normal font-medium uppercase text-slate-600 mb-1">Weekly Revenue Leak</p>
                    <p className="text-2xl font-bold text-slate-900">~$2,500/week</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
