import React from 'react';
import { Slider } from '../ui/slider';
import { Label } from '../ui/label';

export const HoursSlider = ({ value, onChange }) => {
  const getDisplayValue = (val) => val >= 40 ? '40h+' : `${val}h`;

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-white text-sm font-normal leading-relaxed block mb-4">
          On average, how many hours of non-billable research and auditing do you invest in a prospect before a contract is signed?
        </Label>
        <div className="text-4xl font-light text-white mb-6">{getDisplayValue(value)}</div>
      </div>
      <Slider min={0} max={40} step={1} value={value} onChange={onChange} />
      <div className="flex justify-between text-xs text-white/40">
        <span>0 hours</span>
        <span>40+ hours</span>
      </div>
    </div>
  );
};
