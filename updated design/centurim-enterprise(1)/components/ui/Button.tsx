import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  // Reverted to text-sm/base font-bold (standard UI size)
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:pointer-events-none rounded-lg active:scale-[0.98] tracking-tight";
  
  const styling = {
      primary: "bg-[#2563EB] text-white hover:bg-[#1d4ed8] border border-transparent shadow-md hover:shadow-lg",
      secondary: "bg-[#0B1120] text-white hover:bg-[#1e293b] border border-transparent shadow-sm",
      outline: "bg-white text-slate-800 border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900",
      ghost: "bg-transparent text-slate-800 hover:bg-slate-100",
      white: "bg-white text-[#0B1120] hover:bg-slate-50 shadow-sm border border-slate-100"
  }

  return (
    <button 
      className={`${baseStyles} ${styling[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};