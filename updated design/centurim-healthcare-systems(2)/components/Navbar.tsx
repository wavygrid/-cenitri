import React, { useState } from 'react';
import { Logo, MenuIcon, CloseIcon } from './Icons';

interface NavbarProps {
    setPage: (page: string) => void;
    currentPage: string;
    onNavigate: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ setPage, currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (page: string) => {
      setPage(page);
      setIsOpen(false);
      window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md w-full py-5 border-b border-slate-800 sticky top-0 z-[999]" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
        <button 
            className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-sm" 
            onClick={() => handleNav('home')}
            aria-label="Go to Homepage"
        >
            <Logo className="text-white" />
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => handleNav('platform')} className={`text-sm font-medium transition-colors ${currentPage === 'platform' ? 'text-white' : 'text-slate-400 hover:text-white'} focus:outline-none focus:text-white`}>Platform</button>
          <button onClick={() => handleNav('security')} className={`text-sm font-medium transition-colors ${currentPage === 'security' ? 'text-white' : 'text-slate-400 hover:text-white'} focus:outline-none focus:text-white`}>Security</button>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="text-xs font-bold text-white hover:text-slate-300 uppercase tracking-wide focus:outline-none focus:underline underline-offset-4">Login</button>
          {/* Inverted Button Colors */}
          <button 
            onClick={onNavigate}
            className="bg-white text-slate-900 px-6 py-2.5 rounded-full text-xs font-bold hover:bg-slate-100 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Start Your Pilot Audit
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white focus:outline-none focus:ring-2 focus:ring-slate-500 rounded p-1"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isOpen}
            >
                {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full px-4 pt-4 pb-8 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
             <div className="flex flex-col space-y-4">
                <button onClick={() => handleNav('platform')} className="text-left text-sm font-medium text-slate-300 hover:text-white block py-3 border-b border-slate-800">Platform</button>
                <button onClick={() => handleNav('security')} className="text-left text-sm font-medium text-slate-300 hover:text-white block py-3 border-b border-slate-800">Security</button>
                <button className="text-left text-sm font-medium text-slate-300 hover:text-white block py-3">Login</button>
                <button 
                    onClick={() => {
                        setIsOpen(false);
                        onNavigate();
                    }}
                    className="w-full bg-white text-slate-900 px-5 py-4 rounded-lg text-sm font-medium mt-2"
                >
                    Start Your Pilot Audit
                </button>
             </div>
          </div>
      )}
    </nav>
  );
};

export default Navbar;