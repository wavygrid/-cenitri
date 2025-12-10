import React from 'react';
import { Menu, X } from 'lucide-react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/centurim-logo-light.svg"
        alt="Centurim Healthcare Logo"
        className="h-8 w-auto"
      />
    </div>
  );
};

export const MenuIcon = Menu;
export const CloseIcon = X;

// Custom Medical Icons (Thin Stroke, Geometric)

export const IconRapidTurnaround: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export const IconCitationBacked: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </svg>
);

export const IconZeroRetention: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1">
     <rect x="3" y="6" width="18" height="12" rx="2" />
     <path d="M12 11v2" />
     <path d="M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
  </svg>
);