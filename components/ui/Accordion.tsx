import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ 
  trigger, 
  content, 
  isOpen, 
  onClick 
}) => {
  return (
    <div className="border-b border-zinc-200 last:border-0">
      <button 
        onClick={onClick}
        className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-emerald-600 w-full text-left text-zinc-900"
      >
        {trigger}
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-sm text-zinc-500 pb-4">
          {content}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { value: string; trigger: string; content: string }[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <div className={`w-full ${className}`}>
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          trigger={item.trigger}
          content={item.content}
          isOpen={openItem === item.value}
          onClick={() => handleToggle(item.value)}
        />
      ))}
    </div>
  );
};