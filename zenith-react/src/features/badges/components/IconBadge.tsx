import type { HTMLAttributes } from 'react';

export type IconBadgeTone = 'primary' | 'success' | 'info' | 'warning';

export interface IconBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: IconBadgeTone;
  icon?: string;
}

const TONE_CLASSES: Record<IconBadgeTone, string> = {
  primary: 'bg-blue-100 text-blue-700',
  success: 'border border-emerald-600/20 bg-emerald-100 text-emerald-700',
  info: 'bg-slate-200 text-slate-700',
  warning: 'bg-indigo-100 text-indigo-800',
};

export const IconBadge = ({ tone = 'primary', icon = 'cloud', className = '', children, ...rest }: IconBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium ${TONE_CLASSES[tone]} ${className}`}
      {...rest}
    >
      <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
        {icon}
      </span>
      <span>{children}</span>
    </span>
  );
};
