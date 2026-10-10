import { useState } from 'react';

export interface SegmentedOption {
  value: string;
  label?: string;
  icon?: string;
  ariaLabel?: string;
}

export interface SegmentedControlProps {
  options: SegmentedOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  ariaLabel?: string;
}

export function SegmentedControl({
  options,
  defaultValue,
  onChange,
  ariaLabel = 'Opciones',
}: SegmentedControlProps) {
  const [selected, setSelected] = useState(
    defaultValue ?? options[0]?.value ?? '',
  );

  if (options.length === 0) return null;

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="inline-flex rounded-lg border border-slate-300 bg-white p-0.5 shadow-sm"
    >
      {options.map((option) => {
        const isSelected = option.value === selected;
        const content =
          option.icon !== undefined ? (
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[18px]"
            >
              {option.icon}
            </span>
          ) : (
            <span>{option.label}</span>
          );
        return (
          <button
            key={option.value}
            type="button"
            aria-label={option.ariaLabel}
            aria-pressed={isSelected}
            onClick={() => handleSelect(option.value)}
            className={
              option.icon !== undefined
                ? `rounded-md p-1.5 transition-colors ${isSelected ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-900'}`
                : `rounded-md px-3 py-1.5 text-xs font-semibold transition-all ${isSelected ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`
            }
          >
            {content}
          </button>
        );
      })}
    </div>
  );
}
