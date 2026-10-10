import { useId } from 'react';

export interface SwitchProps {
  label?: string;
  description?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
}

export function Switch({
  label,
  description,
  defaultChecked = false,
  disabled = false,
  id,
}: SwitchProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label
      htmlFor={inputId}
      className={`flex items-center justify-between ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
    >
      {(label !== undefined || description !== undefined) && (
        <div className="pr-4">
          {label !== undefined && (
            <span className="block text-sm font-medium text-slate-900">
              {label}
            </span>
          )}
          {description !== undefined && (
            <span className="block text-xs text-slate-500">{description}</span>
          )}
        </div>
      )}
      <div className="relative shrink-0">
        <input
          id={inputId}
          type="checkbox"
          defaultChecked={defaultChecked}
          disabled={disabled}
          className="peer sr-only"
        />
        <div className="h-5 w-9 rounded-full bg-slate-300 transition-colors peer-checked:bg-blue-600 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600/20 peer-disabled:bg-slate-200" />
        <div className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-4" />
      </div>
    </label>
  );
}
