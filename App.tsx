import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PlatformPage from './components/PlatformPage';
import CompliancePage from './components/CompliancePage';
import MarketsPage from './components/MarketsPage';
import DeployPage from './components/DeployPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import CookiePage from './components/CookiePage';
import Footer from './components/Footer';

export type ViewState = 'home' | 'platform' | 'compliance' | 'markets' | 'deploy' | 'privacy' | 'terms' | 'cookies';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const navigateTo = (view: ViewState) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Navbar currentView={currentView} onNavigate={navigateTo} />
      <main className="flex-grow">
        {currentView === 'home' && <Home onNavigate={navigateTo} />}
        {currentView === 'platform' && <PlatformPage onNavigate={navigateTo} />}
        {currentView === 'compliance' && <CompliancePage />}
        {currentView === 'markets' && <MarketsPage onNavigate={navigateTo} />}
        {currentView === 'deploy' && <DeployPage />}
        
        {/* Legal Pages */}
        {currentView === 'privacy' && <PrivacyPage onNavigate={navigateTo} />}
        {currentView === 'terms' && <TermsPage onNavigate={navigateTo} />}
        {currentView === 'cookies' && <CookiePage onNavigate={navigateTo} />}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;