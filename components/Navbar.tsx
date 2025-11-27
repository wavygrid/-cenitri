import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X, ChevronRight } from 'lucide-react';
import { ViewState } from '../App';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enterprise Nav Link Style: Clean, minimal, no background pills unless active
  const navLinkClass = (view: ViewState) => 
    `text-sm font-medium transition-all duration-200 px-4 py-2 ${
      currentView === view 
      ? 'text-zinc-900 font-semibold' 
      : 'text-zinc-500 hover:text-zinc-900'
    }`;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
          ? 'bg-white/95 backdrop-blur-sm border-zinc-200 py-3' 
          : 'bg-white border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <span className="text-xl font-bold tracking-tight text-zinc-900 leading-none font-sans">
              Centurim
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate('platform')} className={navLinkClass('platform')}>
              Platform
            </button>
            <button onClick={() => onNavigate('compliance')} className={navLinkClass('compliance')}>
              Trust Center
            </button>
            <button onClick={() => onNavigate('markets')} className={navLinkClass('markets')}>
              Jurisdictions
            </button>
          </div>

          {/* Action */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Client Login</button>
            <Button onClick={() => onNavigate('deploy')} variant="primary" size="sm" className="rounded-md px-6 shadow-none font-medium h-9 text-sm">
              Deploy Instance
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-zinc-900 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 overflow-y-auto border-t border-zinc-100">
          <div className="p-8 flex flex-col gap-4">
            <div className="space-y-2 border-b border-zinc-100 pb-8 mb-4">
              <button 
                className="w-full text-left px-4 py-4 hover:bg-zinc-50 text-lg font-medium text-zinc-900 flex justify-between items-center" 
                onClick={() => { onNavigate('platform'); setMobileMenuOpen(false); }}
              >
                Platform <ChevronRight size={16} className="text-zinc-400"/>
              </button>
              <button 
                className="w-full text-left px-4 py-4 hover:bg-zinc-50 text-lg font-medium text-zinc-900 flex justify-between items-center" 
                onClick={() => { onNavigate('compliance'); setMobileMenuOpen(false); }}
              >
                Trust Center <ChevronRight size={16} className="text-zinc-400"/>
              </button>
              <button 
                className="w-full text-left px-4 py-4 hover:bg-zinc-50 text-lg font-medium text-zinc-900 flex justify-between items-center" 
                onClick={() => { onNavigate('markets'); setMobileMenuOpen(false); }}
              >
                Jurisdictions <ChevronRight size={16} className="text-zinc-400"/>
              </button>
            </div>
            
            <div className="flex flex-col gap-4 px-4">
              <Button onClick={() => { onNavigate('deploy'); setMobileMenuOpen(false); }} variant="primary" size="lg" className="w-full justify-center">Deploy Instance</Button>
              <Button variant="outline" size="lg" className="w-full justify-center text-zinc-600 border-zinc-300 hover:bg-zinc-50">Client Login</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;