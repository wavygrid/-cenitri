import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../App';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900 text-white h-20 flex items-center border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-full">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-4 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <span className="text-2xl font-bold tracking-wide text-white leading-none font-sans uppercase">
              Centurim
            </span>
          </div>

          {/* Desktop Links (Left) */}
          <div className="hidden md:flex items-center gap-8 ml-12 mr-auto">
            <button onClick={() => onNavigate('platform')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Platform
            </button>
            <button onClick={() => onNavigate('compliance')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Security
            </button>
          </div>

          {/* Desktop Links (Right) */}
          <div className="hidden md:flex items-center gap-6">
            <Button onClick={() => onNavigate('markets')} className="bg-white text-navy-900 hover:bg-zinc-200 border-0 rounded-sm font-semibold px-5 h-9 text-sm">
              Healthcare Solutions
            </Button>
            <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Client Login</button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-navy-900 z-40 overflow-y-auto border-t border-white/10">
          <div className="p-8 flex flex-col gap-6">
            <div className="space-y-4 flex flex-col">
              <button 
                className="text-left text-lg font-medium text-white hover:text-zinc-300" 
                onClick={() => { onNavigate('platform'); setMobileMenuOpen(false); }}
              >
                Platform
              </button>
              <button 
                className="text-left text-lg font-medium text-white hover:text-zinc-300" 
                onClick={() => { onNavigate('compliance'); setMobileMenuOpen(false); }}
              >
                Security
              </button>
            </div>
            
            <div className="flex flex-col gap-4 mt-8">
              <Button onClick={() => { onNavigate('markets'); setMobileMenuOpen(false); }} className="w-full justify-center bg-white text-navy-900 font-bold h-12">Healthcare Solutions</Button>
              <button className="w-full py-3 text-white font-medium border border-zinc-700 rounded-lg hover:bg-navy-800">Client Login</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;