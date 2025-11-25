import React from 'react';
import { Label } from '../ui/label';
import { cn } from '../../lib/utils';

export const BinaryToggle = ({ value, onChange }) => {
  return (
    <div className="space-y-4">
      <Label className="text-white text-sm font-normal leading-relaxed block mb-4">
        If a prospect handed your current discovery report to a junior generalist, could they execute 80% of your strategy without hiring you?
      </Label>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => onChange('yes')}
          className={cn(
            "h-11 rounded-lg border font-medium transition-all",
            value === 'yes'
              ? "border-white bg-white text-black"
              : "border-white/20 text-white hover:border-white/30"
          )}
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => onChange('no')}
          className={cn(
            "h-11 rounded-lg border font-medium transition-all",
            value === 'no'
              ? "border-white bg-white text-black"
              : "border-white/20 text-white hover:border-white/30"
          )}
        >
          No
        </button>
      </div>
    </div>
  );
};
