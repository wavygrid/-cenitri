import React, { useState, useEffect } from 'react';
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

  // Dynamic Metadata Management
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    const updateMetadata = (title: string, description: string) => {
      document.title = title;
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    };

    switch (currentView) {
      case 'home':
        updateMetadata(
          "Centurim | Autonomous Document Reconciliation Platform",
          "Centurim deploys deterministic comparator engines to validate unstructured source data against structured regulatory frameworks. Mitigate liability and capture revenue variance."
        );
        break;
      case 'markets': // Healthcare / PDPM Focus
        updateMetadata(
          "Centurim Health | Automated PDPM Revenue Integrity",
          "Automated clinical documentation integrity (CDI) for Skilled Nursing Facilities. Reconcile Hospital Transfer Packets against MDS 3.0 Assessments to capture NTA revenue."
        );
        break;
      case 'platform':
        updateMetadata(
          "Centurim Platform | Architectural Logic & Logic Library",
          "Explore the deterministic logic core of the Centurim Engine. Select from pre-configured visa architectures and compliance modules."
        );
        break;
      case 'compliance':
        updateMetadata(
          "Centurim Security | Sovereign Data Architecture",
          "Centurim operates on a Zero Trust architecture designed for US Healthcare regulations, including HIPAA compliance and US-East-1 data residency."
        );
        break;
      case 'deploy':
        updateMetadata(
          "Centurim | Configure Instance",
          "Initialize your dedicated Centurim instance. Select jurisdiction, practice area, and monthly lead volume for automated provisioning."
        );
        break;
      case 'privacy':
        updateMetadata(
          "Centurim | Privacy Policy",
          "Centurim acts as a Data Processor. We retain no client data for model training and adhere to strict ephemeral processing protocols."
        );
        break;
      case 'terms':
        updateMetadata(
          "Centurim | Terms of Service",
          "Review the Master Services Agreement for the Centurim Client Intelligence Infrastructure."
        );
        break;
      case 'cookies':
        updateMetadata(
          "Centurim | Cookie Policy",
          "Understanding strict necessity cookies and analytics usage on the Centurim platform."
        );
        break;
      default:
        updateMetadata(
          "Centurim | Autonomous Document Reconciliation",
          "The standard for autonomous variance detection in regulated industries."
        );
    }
  }, [currentView]);

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
      <Footer currentView={currentView} onNavigate={navigateTo} />
    </div>
  );
};

export default App;