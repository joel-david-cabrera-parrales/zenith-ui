import { useState } from 'react';
import type { HTMLAttributes } from 'react';

export type DismissibleChipTone = 'neutral' | 'primary';

export interface DismissibleChipProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  tone?: DismissibleChipTone;
  onDismiss?: () => void;
}

const TONE_CLASSES: Record<DismissibleChipTone, string> = {
  neutral: 'border border-slate-300 bg-white text-slate-700 shadow-sm',
  primary: 'border border-blue-500/20 bg-blue-100 text-blue-700',
};

export const DismissibleChip = ({ label, tone = 'neutral', onDismiss, className = '', ...rest }: DismissibleChipProps) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full py-1 pl-2.5 pr-1.5 text-xs font-medium ${TONE_CLASSES[tone]} ${className}`}
      {...rest}
    >
      <span>{label}</span>
      <button
        type="button"
        aria-label={`Quitar filtro ${label}`}
        onClick={handleDismiss}
        className="flex h-4 w-4 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-red-100 hover:text-red-600"
      >
        <span aria-hidden="true" className="material-symbols-outlined text-[13px]">
          close
        </span>
      </button>
    </span>
  );
};
