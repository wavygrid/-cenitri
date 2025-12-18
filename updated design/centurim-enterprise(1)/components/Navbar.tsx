import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { MenuIcon, CloseIcon } from './ui/Icons';
import { PageView } from '../App';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPage?: PageView;
  onNavigate?: (page: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage = 'home', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNav = (page: PageView) => {
    if (onNavigate) {
      onNavigate(page);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/60 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]' : 'bg-white/50 backdrop-blur-sm py-5 md:py-6 border-b border-transparent md:border-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer relative z-50" onClick={() => handleNav('home')}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg bg-[#2563EB] shadow-blue-500/20`}>
              C
            </div>
            <span className="text-[21px] font-bold tracking-tight text-[#0B1120]">
              CENTURIM
            </span>
          </div>

          {/* Desktop Links - text-sm (14px) */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-bold text-slate-700">
            <button 
              onClick={() => handleNav('platform')} 
              className={`hover:text-[#2563EB] transition-colors focus:outline-none focus:text-[#2563EB] ${currentPage === 'platform' ? 'text-[#2563EB]' : ''}`}
            >
              Platform
            </button>
            <button 
              onClick={() => handleNav('healthcare')} 
              className={`hover:text-[#2563EB] transition-colors focus:outline-none focus:text-[#2563EB] ${currentPage === 'healthcare' ? 'text-[#2563EB]' : ''}`}
            >
              Healthcare
            </button>
            <button 
              onClick={() => handleNav('legal')} 
              className={`hover:text-[#2563EB] transition-colors focus:outline-none focus:text-[#2563EB] ${currentPage === 'legal' ? 'text-[#2563EB]' : ''}`}
            >
              Legal
            </button>
          </div>

          {/* Right Action */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
                onClick={() => handleNav('login')} 
                className={`text-sm font-bold hover:text-[#2563EB] transition-colors focus:outline-none focus:text-[#2563EB] text-slate-700`}
            >
                Login
            </button>
            <Button 
                variant="secondary" 
                className="h-10 px-6 text-sm bg-[#0B1120]"
                onClick={() => handleNav('contact')}
            >
              Start Audit
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
              className="md:hidden p-2 -mr-2 text-slate-700 hover:bg-slate-100 rounded-full focus:outline-none relative z-50" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 pt-28 pb-8 px-8 flex flex-col md:hidden overflow-y-auto"
          >
             <div className="flex-1 flex flex-col gap-4">
                 <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Navigation</div>
                 <button onClick={() => handleNav('platform')} className="text-left text-[21px] font-bold text-slate-900 py-4 border-b border-slate-100 active:text-[#2563EB]">Platform</button>
                 <button onClick={() => handleNav('healthcare')} className="text-left text-[21px] font-bold text-slate-900 py-4 border-b border-slate-100 active:text-[#2563EB]">Healthcare</button>
                 <button onClick={() => handleNav('legal')} className="text-left text-[21px] font-bold text-slate-900 py-4 border-b border-slate-100 active:text-[#2563EB]">Legal</button>
                 
                 <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-10 mb-4">Account</div>
                 <button onClick={() => handleNav('login')} className="text-left text-[21px] font-medium text-slate-700 py-2">Login</button>
             </div>

             <div className="mt-8">
               <Button variant="secondary" className="w-full justify-center h-14 text-base" onClick={() => handleNav('contact')}>
                  Start Audit
               </Button>
               <p className="text-center text-sm text-slate-500 mt-6 font-medium">
                 v2.4.0 &bull; Secure Enclave Active
               </p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};