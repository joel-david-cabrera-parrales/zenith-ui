import { useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

export type TextInputSize = 'sm' | 'md' | 'lg';
export type TextInputState = 'default' | 'error' | 'success';

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: TextInputSize;
  state?: TextInputState;
  label?: string;
  hint?: string;
  message?: ReactNode;
}

const SIZE_CLASSES: Record<TextInputSize, string> = {
  sm: 'h-8 px-2.5 text-xs rounded-lg',
  md: 'h-10 px-3 text-sm rounded-lg',
  lg: 'h-12 px-4 text-base rounded-xl',
};

const STATE_CLASSES: Record<TextInputState, string> = {
  default:
    'border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600',
  error: 'border-red-600 focus:border-red-600 focus:ring-1 focus:ring-red-600',
  success:
    'border-green-700 focus:border-green-700 focus:ring-1 focus:ring-green-700',
};

const MESSAGE_CLASSES: Record<TextInputState, string> = {
  default: 'text-slate-500',
  error: 'text-red-700',
  success: 'text-green-700',
};

export function TextInput({
  size = 'md',
  state = 'default',
  label,
  hint,
  message,
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
        className={`w-full border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 ${SIZE_CLASSES[size]} ${STATE_CLASSES[state]} ${className}`}
        {...rest}
      />
      {message !== undefined && (
        <p className={`mt-1 text-xs ${MESSAGE_CLASSES[state]}`}>{message}</p>
      )}
    </div>
  );
}
