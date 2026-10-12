import type { HTMLAttributes } from 'react';

export type SplitValueTone = 'success' | 'info' | 'neutral' | 'primary';

export interface SplitBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  value: string;
  valueTone?: SplitValueTone;
}

const VALUE_CLASSES: Record<SplitValueTone, string> = {
  success: 'bg-emerald-600 text-white',
  info: 'bg-blue-100 text-blue-800',
  neutral: 'bg-slate-100 text-emerald-700',
  primary: 'bg-blue-600 text-white',
};

export const SplitBadge = ({ label, value, valueTone = 'info', className = '', ...rest }: SplitBadgeProps) => {
  return (
    <span
      className={`inline-flex items-stretch overflow-hidden rounded border border-slate-200 font-mono text-xs ${className}`}
      {...rest}
    >
      <span className="bg-slate-200 px-2 py-0.5 font-bold text-slate-600">{label}</span>
      <span className={`px-2 py-0.5 font-bold ${VALUE_CLASSES[valueTone]}`}>{value}</span>
    </span>
  );
};
