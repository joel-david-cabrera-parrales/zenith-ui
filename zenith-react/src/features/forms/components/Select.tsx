import { useId } from 'react';
import type { SelectHTMLAttributes } from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  options: SelectOption[];
}

export const Select = ({ label, options, id, ...rest }: SelectProps) => {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  return (
    <div>
      {label !== undefined && (
        <label
          htmlFor={selectId}
          className="mb-1 block text-xs font-medium text-slate-600"
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        <select
          id={selectId}
          className="h-10 w-full cursor-pointer appearance-none rounded-lg border border-slate-300 bg-white pr-10 pl-3 text-sm text-slate-900 transition-colors outline-none hover:bg-slate-50 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span
          aria-hidden="true"
          className="material-symbols-outlined pointer-events-none absolute top-2.5 right-3 text-base text-slate-500"
        >
          expand_more
        </span>
      </div>
    </div>
  );
}
