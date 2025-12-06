import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    // Angellist Style: Solid Black
    primary: "bg-zinc-900 text-white hover:bg-zinc-800 hover:-translate-y-0.5 shadow-[0_2px_10px_rgba(0,0,0,0.1)]",
    // Secondary: Light Gray background or White with border
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    // Ghost: Minimal
    ghost: "hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900",
    // Outline: Strong border
    outline: "border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900"
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-5 py-2",
    lg: "h-12 px-8 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};