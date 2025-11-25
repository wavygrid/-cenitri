import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

export const CurrencyInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = React.useState('');

  React.useEffect(() => {
    if (value) setDisplayValue(value.toLocaleString());
  }, []);

  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    const numericValue = rawValue ? parseInt(rawValue, 10) : 0;
    onChange(numericValue);
    setDisplayValue(numericValue ? numericValue.toLocaleString() : '');
  };

  return (
    <div className="space-y-4">
      <Label className="text-white text-sm font-normal leading-relaxed block mb-4">
        What is the average contract value of the deals you lost to 'cheaper' competitors or internal implementation last year?
      </Label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">$</div>
        <Input
          type="text"
          value={displayValue}
          onChange={handleChange}
          placeholder="0"
          className="pl-7 text-lg font-light bg-white/5 border-white/10 text-white h-11"
        />
      </div>
    </div>
  );
};
