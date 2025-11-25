import * as React from "react"
import { cn } from "../../lib/utils"

const Slider = React.forwardRef(({ className, min = 0, max = 100, step = 1, value, onChange, ...props }, ref) => {
  return (
    <div className={cn("relative flex w-full touch-none select-none items-center", className)}>
      <input
        type="range"
        ref={ref}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className="w-full h-2 bg-[var(--color-secondary)] rounded-lg appearance-none cursor-pointer slider-thumb"
        {...props}
      />
      <style>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }
        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  )
})
Slider.displayName = "Slider"

export { Slider }
