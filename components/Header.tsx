import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, LayoutGrid } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md border-slate-200 py-4' 
            : 'bg-white/0 border-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Area */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="h-9 w-9 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg group-hover:bg-brand-500 transition-colors duration-300">
                 <LayoutGrid className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 leading-none">
                Centurim
              </span>
            </div>
            
            {/* Desktop Nav - Centered */}
            <nav className="hidden md:flex items-center gap-8">
              {['Product', 'Architecture', 'Pricing'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:block text-sm font-semibold text-slate-900 hover:text-brand-600 transition-colors">
                Log in
              </button>
              <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 hover:shadow-lg transition-all flex items-center gap-2">
                Start Trial
                <ArrowRight className="h-4 w-4" />
              </button>
              <button 
                className="md:hidden p-2 text-slate-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
           <div className="flex flex-col gap-6">
             <a href="#product" className="text-2xl font-bold text-slate-900" onClick={() => setMobileMenuOpen(false)}>Product</a>
             <a href="#architecture" className="text-2xl font-bold text-slate-900" onClick={() => setMobileMenuOpen(false)}>Architecture</a>
             <a href="#pricing" className="text-2xl font-bold text-slate-900" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
             <div className="h-px bg-slate-100 my-4"></div>
             <button className="bg-slate-900 text-white py-4 rounded-xl font-bold text-lg w-full">Start Free Trial</button>
           </div>
        </div>
      )}
    </>
  );
};