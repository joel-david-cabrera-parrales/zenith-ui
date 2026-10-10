import { useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

export type LabeledFieldState = 'default' | 'error' | 'success' | 'disabled';

export interface LabeledFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  helper?: ReactNode;
  state?: LabeledFieldState;
  badge?: string;
}

const INPUT_CLASSES: Record<LabeledFieldState, string> = {
  default:
    'border-slate-300 bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600',
  error:
    'border-rose-600 bg-rose-50/40 focus:border-rose-600 focus:ring-1 focus:ring-rose-600',
  success:
    'border-emerald-600 bg-emerald-50/30 focus:ring-1 focus:ring-emerald-600',
  disabled:
    'border-slate-200 bg-slate-100 text-slate-500 cursor-not-allowed select-none',
};

export function LabeledField({
  label,
  helper,
  state = 'default',
  badge,
  id,
  className = '',
  disabled,
  ...rest
}: LabeledFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const helperId = `${fieldId}-helper`;
  const isDisabled = disabled === true || state === 'disabled';

  return (
    <div className={`space-y-2 ${state === 'disabled' ? 'opacity-65' : ''}`}>
      <div className="flex items-center justify-between">
        <label
          htmlFor={fieldId}
          className={`text-sm font-semibold ${isDisabled ? 'text-slate-500' : 'text-slate-900'}`}
        >
          {label}
        </label>
        {badge !== undefined && (
          <span className="text-[10px] font-mono font-bold uppercase text-slate-400">
            {badge}
          </span>
        )}
      </div>
      <input
        id={fieldId}
        type="text"
        disabled={isDisabled}
        aria-describedby={helper === undefined ? undefined : helperId}
        aria-invalid={state === 'error'}
        className={`w-full text-sm px-3.5 py-2 rounded-lg border outline-none transition ${INPUT_CLASSES[state]} ${className}`}
        {...rest}
      />
      {helper !== undefined && (
        <p id={helperId} className="text-xs text-slate-400 flex items-center gap-1">
          {helper}
        </p>
      )}
    </div>
  );
}
