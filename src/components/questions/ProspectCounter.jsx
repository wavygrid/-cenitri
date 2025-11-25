import React from 'react';
import { Label } from '../ui/label';
import { Minus, Plus } from 'lucide-react';

export const ProspectCounter = ({ value, onChange }) => {
  return (
    <div className="space-y-6">
      <Label className="text-white text-sm font-normal leading-relaxed block">
        In the last 12 months, how many qualified prospects received your full proposal and then ceased communication?
      </Label>
      <div className="flex items-center justify-center gap-8">
        <button
          type="button"
          onClick={() => value > 0 && onChange(value - 1)}
          disabled={value === 0}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        >
          <Minus className="w-4 h-4 text-white" />
        </button>
        <div className="text-center min-w-[80px]">
          <div className="text-5xl font-light text-white">{value}</div>
        </div>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-all"
        >
          <Plus className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};
