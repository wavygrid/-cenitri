import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ViewState } from '../App';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-navy-900 text-white min-h-[90vh] flex flex-col justify-center">
      
      {/* Abstract Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start text-left max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8"
          >
             <div className="h-px w-8 bg-zinc-500"></div>
             <span className="text-zinc-400 text-xs font-mono uppercase tracking-widest">System Operational</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8"
          >
            Autonomous Reconciliation for <br className="hidden lg:block" />
            <span className="text-zinc-400">Regulated Data</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-lg mb-10 font-light"
          >
            We bridge the gap between unstructured clinical evidence and structured billing claims. Our comparator engine identifies revenue variance and compliance risk with forensic precision.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button onClick={() => onNavigate('markets')} className="bg-white text-navy-900 hover:bg-zinc-200 h-14 px-8 text-base font-semibold rounded-sm">
              Explore Healthcare Solutions
            </Button>
            <Button onClick={() => onNavigate('platform')} variant="outline" className="h-14 px-8 text-base font-medium rounded-sm border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 bg-transparent">
              View Platform Architecture
            </Button>
          </motion.div>
        </div>

        {/* Right Content - Abstract Wireframe Animation */}
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
           <div className="absolute inset-0 bg-gradient-to-tr from-navy-900 via-transparent to-transparent z-10"></div>
           
           {/* The "Blueprint" Document */}
           <motion.div 
              initial={{ rotateX: 45, rotateZ: 45, opacity: 0, scale: 0.8 }}
              animate={{ rotateX: 60, rotateZ: -15, opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-64 h-80 border border-zinc-600 bg-navy-800/50 backdrop-blur-sm relative transform-gpu shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
           >
              {/* Scan Lines */}
              <motion.div 
                 animate={{ top: ['0%', '100%', '0%'] }}
                 transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                 className="absolute left-0 w-full h-px bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20"
              ></motion.div>

              {/* Internal Grid */}
              <div className="absolute inset-4 border border-dashed border-zinc-700 grid grid-cols-4 grid-rows-6 gap-2 opacity-50">
                 {[...Array(24)].map((_, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0 }}
                       animate={{ opacity: [0, 0.5, 0] }}
                       transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                       className="bg-blue-500/20 w-full h-full"
                    />
                 ))}
              </div>
           </motion.div>

           {/* Floating Data Points */}
           <div className="absolute inset-0 pointer-events-none">
              <motion.div 
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 bg-zinc-800 text-zinc-400 text-[10px] font-mono px-2 py-1 border border-zinc-700 rounded-sm"
              >
                Parsing...
              </motion.div>
              <motion.div 
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/3 left-1/4 bg-zinc-800 text-zinc-400 text-[10px] font-mono px-2 py-1 border border-zinc-700 rounded-sm"
              >
                Structure: JSON
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;