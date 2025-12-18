import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        <span className="text-[#2563EB] font-medium tracking-widest uppercase text-lg mb-8 block">The Operational Challenge</span>
        {/* text-6xl -> text-5xl */}
        <h2 className="text-3xl md:text-5xl font-medium text-[#0B1120] mb-10 leading-tight tracking-tight">
          Legal teams are expected to challenge claims, but are paralyzed by unstructured records.
        </h2>
        <div className="w-20 h-1.5 bg-slate-100 mx-auto mb-10"></div>
        <p className="text-slate-700 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-medium">
          Manual review is slow, expensive, and prone to human error. Relying on human speed to process complex clinical data creates a backlog that freezes your cash flow and exposes your organization to liability.
        </p>
      </div>
    </section>
  );
};