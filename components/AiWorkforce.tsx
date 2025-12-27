import React from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';

export const AiWorkforce: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-20">
            
            <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 mb-6">
                     <Sparkles className="h-3 w-3 text-brand-500" />
                    <span className="text-xs font-bold uppercase tracking-widest">AI Receptionist</span>
                </div>
                
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
                    Never miss a customer call again.
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    You can't answer the phone when you're under a sink. Our AI receptionist answers for you, 24/7. It talks to customers naturally, answers technical questions, and books jobs directly onto your calendar.
                </p>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <p className="font-medium text-slate-900 text-sm mb-1">"Hey, I'm stuck on a job. Can you answer?"</p>
                    <p className="text-slate-500 text-sm">-- You, never again.</p>
                </div>
            </div>

            {/* Visual: Chat Interface */}
            <div className="md:w-1/2 w-full flex justify-center">
                <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                    <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center gap-3">
                        <div className="h-8 w-8 bg-brand-500 rounded-full flex items-center justify-center text-white"><Sparkles className="h-4 w-4" /></div>
                        <div>
                            <div className="font-bold text-sm text-slate-900">Centurim AI</div>
                            <div className="text-xs text-brand-600 font-medium">Reply time: Instant</div>
                        </div>
                    </div>
                    <div className="p-6 space-y-6">
                         {/* Customer */}
                         <div className="flex gap-4 items-end">
                             <div className="h-6 w-6 rounded-full bg-slate-200 flex-shrink-0"></div>
                             <div className="bg-slate-100 p-3 rounded-2xl rounded-bl-none text-sm text-slate-600">
                                 Do you guys fix water heaters? Mine is leaking.
                             </div>
                         </div>

                         {/* AI */}
                         <div className="flex gap-4 items-end flex-row-reverse">
                             <div className="h-6 w-6 rounded-full bg-brand-500 flex items-center justify-center text-white text-[10px] flex-shrink-0">AI</div>
                             <div className="bg-brand-600 p-3 rounded-2xl rounded-br-none text-sm text-white shadow-sm">
                                 Yes we do! 🛠️ I can have a tech there between 12-2 PM today. Want me to book it?
                             </div>
                         </div>

                         {/* Customer */}
                         <div className="flex gap-4 items-end">
                             <div className="h-6 w-6 rounded-full bg-slate-200 flex-shrink-0"></div>
                             <div className="bg-slate-100 p-3 rounded-2xl rounded-bl-none text-sm text-slate-600">
                                 Yes please!
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