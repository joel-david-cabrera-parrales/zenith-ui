import { useState } from 'react';
import type { ButtonHTMLAttributes } from 'react';

export type SelectableChipTone = 'primary' | 'success';

export interface SelectableChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onToggle'> {
  label: string;
  defaultSelected?: boolean;
  selectedTone?: SelectableChipTone;
  onToggle?: (selected: boolean) => void;
}

const SELECTED_CLASSES: Record<SelectableChipTone, string> = {
  primary: 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/20',
  success: 'bg-emerald-600 text-white shadow-sm',
};

export const SelectableChip = ({
  label,
  defaultSelected = false,
  selectedTone = 'primary',
  onToggle,
  className = '',
  ...rest
}: SelectableChipProps) => {
  const [selected, setSelected] = useState(defaultSelected);

  const handleToggle = () => {
    const next = !selected;
    setSelected(next);
    onToggle?.(next);
  };

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={handleToggle}
      className={
        selected
          ? `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${SELECTED_CLASSES[selectedTone]} ${className}`
          : `inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50 ${className}`
      }
      {...rest}
    >
      {selected ? (
        <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
          check
        </span>
      ) : (
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-slate-400" />
      )}
      <span>{label}</span>
    </button>
  );
};
