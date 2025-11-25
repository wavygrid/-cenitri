import React from 'react';
import { Label } from '../ui/label';
import { cn } from '../../lib/utils';

const LEVELS = [
  { id: 1, label: 'Problem Identification' },
  { id: 2, label: 'Methodology Preview' },
  { id: 3, label: 'Full Implementation Roadmap' },
];

export const DepthGauge = ({ value, onChange }) => {
  return (
    <div className="space-y-4">
      <Label className="text-white text-sm font-normal leading-relaxed block mb-4">
        At what stage do you currently stop providing free value?
      </Label>
      <div className="grid gap-3">
        {LEVELS.map((level) => (
          <button
            key={level.id}
            type="button"
            onClick={() => onChange(level.id)}
            className={cn(
              "p-4 rounded-lg border text-left transition-all",
              value === level.id
                ? "border-white bg-white/5"
                : "border-white/10 hover:border-white/20"
            )}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                value === level.id ? "border-white" : "border-white/30"
              )}>
                {value === level.id && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
              </div>
              <span className="text-white text-sm">{level.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
