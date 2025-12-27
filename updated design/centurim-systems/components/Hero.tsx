import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden bg-white">
      
      {/* Minimalist Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.15),rgba(255,255,255,0))] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 mb-8 animate-fade-up">
            <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
            <span className="text-xs font-semibold tracking-wide uppercase">New: AI Receptionist 2.0</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight text-slate-900 mb-8 leading-[1] animate-fade-up [animation-delay:100ms]">
            The Operating System <br/>
            <span className="text-slate-400">for Trade Business.</span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-10 max-w-2xl leading-relaxed animate-fade-up [animation-delay:200ms]">
             Centurim replaces your fragmented stack with one unified platform. Dispatch, payments, bookings, and AI — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 animate-fade-up [animation-delay:300ms]">
             <button className="h-12 px-8 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/10 transition-all flex items-center gap-2">
                Start 14-day trial
             </button>
             <button className="h-12 px-8 rounded-full bg-white text-slate-900 font-bold text-sm border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2">
                <Play className="h-3 w-3 fill-slate-900" /> Watch Demo
             </button>
          </div>
        </div>

        {/* Premium Dashboard Visual */}
        <div className="relative mx-auto max-w-6xl animate-fade-up [animation-delay:500ms]">
            <div className="relative rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:rounded-2xl lg:p-4">
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200/50">
                    <img 
                        src="https://cdn.dribbble.com/userupload/12586737/file/original-b184293f01956ce43764836f6176317b.png?resize=2400x1800"
                        alt="Centurim Dashboard"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
            
            {/* Decorative Grid Behind */}
            <div className="absolute -inset-x-20 -top-20 -bottom-20 -z-10 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                backgroundSize: '32px 32px'
            }}></div>
        </div>

      </div>
    </section>
  );
};