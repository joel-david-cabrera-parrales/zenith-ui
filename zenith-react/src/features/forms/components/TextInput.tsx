import { useId } from 'react';
import type { InputHTMLAttributes } from 'react';

export type TextInputSize = 'sm' | 'md' | 'lg';

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: TextInputSize;
  label?: string;
  hint?: string;
}

const SIZE_CLASSES: Record<TextInputSize, string> = {
  sm: 'h-8 px-2.5 text-xs rounded-lg',
  md: 'h-10 px-3 text-sm rounded-lg',
  lg: 'h-12 px-4 text-base rounded-xl',
};

export function TextInput({
  size = 'md',
  label,
  hint,
  id,
  className = '',
  ...rest
}: TextInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div>
      {(label !== undefined || hint !== undefined) && (
        <div className="mb-1 flex items-center justify-between">
          {label !== undefined && (
            <label
              htmlFor={inputId}
              className="text-xs font-medium text-slate-600"
            >
              {label}
            </label>
          )}
          {hint !== undefined && (
            <span className="font-mono text-[10px] font-semibold text-slate-500">
              {hint}
            </span>
          )}
        </div>
      )}
      <input
        id={inputId}
        type="text"
        className={`w-full border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all ${SIZE_CLASSES[size]} ${className}`}
        {...rest}
      />
    </div>
  );
}
