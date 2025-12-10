import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SecurityStrip from './components/SecurityStrip';
import DashboardPreview from './components/DashboardPreview';
import MarginSection from './components/MarginSection';
import BenefitRows from './components/BenefitRows';
import WorkflowTable from './components/WorkflowTable';
import PricingPlans from './components/PricingPlans';
import SecuritySection from './components/SecuritySection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PlatformPage from './components/PlatformPage';
import SecurityPage from './components/SecurityPage';
import ProductTour from './components/ProductTour';
import RequestAuditPage from './components/RequestAuditPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsPage from './components/TermsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToRequest = () => {
      setCurrentPage('request_audit');
      window.scrollTo(0, 0);
  };

  const setPage = (page: string) => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'platform':
        return <PlatformPage onNavigate={navigateToRequest} />;
      case 'security':
        return <SecurityPage />;
      case 'request_audit':
        return <RequestAuditPage />;
      case 'privacy_policy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return (
          <>
            <HeroSection onNavigate={navigateToRequest} />
            <SecurityStrip />
            <DashboardPreview />
            <ProductTour />
            <BenefitRows />
            <MarginSection />
            <WorkflowTable />
            <PricingPlans onNavigate={navigateToRequest} />
            <SecuritySection />
            <FinalCTA onNavigate={navigateToRequest} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar setPage={setPage} currentPage={currentPage} onNavigate={navigateToRequest} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={setPage} />
    </div>
  );
};

export default App;