import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ChaosCheck } from './components/ChaosCheck';
import { InfrastructureGrid } from './components/InfrastructureGrid';
import { StorefrontBuilder } from './components/StorefrontBuilder';
import { OperationsCenter } from './components/OperationsCenter';
import { AiWorkforce } from './components/AiWorkforce';
import { SectorSelector } from './components/SectorSelector';
import { TechnicalSpecs } from './components/TechnicalSpecs';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { ChatInterface } from './components/ChatInterface';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Header />
      <main className="relative">
        <Hero />
        
        {/* Friendly Comparison */}
        <ChaosCheck />
        
        {/* Core Benefits Grid */}
        <InfrastructureGrid />
        
        {/* Deep Dives - The "Product Tour" feel */}
        <div className="space-y-0">
          <StorefrontBuilder />
          <OperationsCenter />
          <AiWorkforce />
        </div>

        {/* Customization */}
        <SectorSelector />
        
        {/* Reliability (formerly Tech Specs) */}
        <TechnicalSpecs />
        
        <Pricing />
      </main>
      <Footer />
      <ChatInterface />
    </div>
  );
}

export default App;