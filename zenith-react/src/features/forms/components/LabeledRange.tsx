import { useId, useState } from 'react';

export interface LabeledRangeProps {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  unit?: string;
  id?: string;
}

export function LabeledRange({
  label,
  min = 50,
  max = 1000,
  step = 25,
  defaultValue = 650,
  unit = 'personas',
  id,
}: LabeledRangeProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="pt-2">
      <div className="mb-1.5 flex items-center justify-between">
        {label !== undefined && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium text-slate-600"
          >
            {label}
          </label>
        )}
        <span className="font-mono text-[10px] font-semibold text-blue-600">
          {value} {unit}
        </span>
      </div>
      <input
        id={inputId}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
      />
      <div className="mt-1 flex justify-between font-mono text-[10px] text-slate-500">
        <span>{min}</span>
        <span>{Math.round((min + max) / 2)}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
