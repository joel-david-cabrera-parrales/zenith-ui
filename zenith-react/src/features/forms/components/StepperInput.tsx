import { useId, useState } from 'react';

export interface StepperInputProps {
  label?: string;
  defaultValue?: number;
  step?: number;
  min?: number;
  id?: string;
}

export function StepperInput({
  label,
  defaultValue = 150,
  step = 10,
  min = 1,
  id,
}: StepperInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [value, setValue] = useState(defaultValue);

  return (
    <div>
      {label !== undefined && (
        <label
          htmlFor={inputId}
          className="mb-1 block text-xs font-medium text-slate-600"
        >
          {label}
        </label>
      )}
      <div className="flex items-center overflow-hidden rounded-lg border border-slate-300 bg-white">
        <button
          type="button"
          onClick={() => setValue((v) => Math.max(min, v - step))}
          aria-label="Disminuir valor"
          className="flex h-10 w-10 items-center justify-center text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-base">
            remove
          </span>
        </button>
        <input
          id={inputId}
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="h-10 w-full border-0 bg-transparent text-center font-mono text-xs text-slate-900 focus:ring-0 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setValue((v) => v + step)}
          aria-label="Aumentar valor"
          className="flex h-10 w-10 items-center justify-center text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-base">
            add
          </span>
        </button>
      </div>
    </div>
  );
}
