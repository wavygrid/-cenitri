import React from 'react';
import { Mic, Volume2 } from 'lucide-react';

export const VoiceScale: React.FC = () => {
  return (
    <section className="py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
            
            <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-white border border-stone-200 flex items-center justify-center font-display font-bold text-xl shadow-sm">3</div>
                    <span className="text-sm font-bold uppercase tracking-wider text-stone-400">Scale Capacity</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">
                    The employee that <br/>never sleeps.
                </h2>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                    Growth is limited by how many calls you can answer. Our <strong>AI Operations Agent</strong> answers the phone 24/7. It sounds human, checks your calendar, and books jobs while you sleep.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="bg-stone-100 px-3 py-1 rounded-full text-sm font-medium text-stone-600">Handles 50+ calls at once</span>
                    <span className="bg-stone-100 px-3 py-1 rounded-full text-sm font-medium text-stone-600">Perfect English & Spanish</span>
                </div>
            </div>

            {/* Visual: Audio Interface */}
            <div className="md:w-1/2 w-full flex justify-center">
                <div className="bg-stone-900 p-8 rounded-[2.5rem] shadow-2xl w-full max-w-md relative overflow-hidden">
                    {/* Background blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-600 rounded-full blur-[60px] opacity-20 animate-pulse"></div>
                    
                    <div className="relative z-10 flex flex-col items-center justify-center py-12">
                        <div className="h-24 w-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 ring-4 ring-white/5 relative">
                            <Mic className="h-10 w-10 text-white" />
                            {/* Audio Waves */}
                            <div className="absolute -inset-4 border border-white/10 rounded-full animate-ping opacity-20"></div>
                            <div className="absolute -inset-8 border border-white/5 rounded-full animate-ping opacity-10 animation-delay-500"></div>
                        </div>
                        
                        <div className="w-full space-y-4">
                            {/* Live Transcription */}
                            <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                    <span className="text-xs font-bold text-stone-400 uppercase">Live Call - 0:14</span>
                                </div>
                                <p className="text-white text-lg leading-snug">
                                    "I can certainly help with that. We have a technician available in your area tomorrow at 9 AM. Would you like to book that?"
                                </p>
                            </div>
                            
                            <div className="flex justify-center gap-4 pt-4">
                                <button className="h-12 w-12 rounded-full bg-white text-stone-900 flex items-center justify-center hover:bg-stone-200 transition-colors">
                                    <Volume2 className="h-5 w-5" />
                                </button>
                                <button className="h-12 px-6 rounded-full bg-red-500/20 text-red-400 font-bold text-sm flex items-center justify-center border border-red-500/30">
                                    End Demo
                                </button>
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