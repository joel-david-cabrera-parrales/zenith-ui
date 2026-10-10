import { useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

export interface AffixInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export function AffixInput({
  label,
  prefix,
  suffix,
  id,
  ...rest
}: AffixInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

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
      <div className="flex overflow-hidden rounded-lg border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        {prefix !== undefined && (
          <span className="inline-flex items-center border-r border-slate-300 bg-slate-100 px-3 font-mono text-xs text-slate-500 select-none">
            {prefix}
          </span>
        )}
        <input
          id={inputId}
          type="text"
          className="h-10 w-full border-none bg-transparent px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
          {...rest}
        />
        {suffix !== undefined && (
          <span className="inline-flex items-center border-l border-slate-300 bg-slate-100 px-3 font-mono text-xs text-slate-600 select-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
