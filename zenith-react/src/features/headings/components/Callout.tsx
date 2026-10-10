import type { HTMLAttributes, ReactNode } from 'react';

export type CalloutTone = 'info' | 'success' | 'warning';

export interface CalloutProps extends HTMLAttributes<HTMLDivElement> {
  tone?: CalloutTone;
  icon?: string;
  title: string;
  children: ReactNode;
}

const TONE_CLASSES: Record<CalloutTone, string> = {
  info: 'bg-slate-50 border-blue-600',
  success: 'bg-emerald-50/80 border-emerald-600',
  warning: 'bg-amber-50/80 border-amber-500',
};

const ICON_CLASSES: Record<CalloutTone, string> = {
  info: 'text-blue-600',
  success: 'text-emerald-600',
  warning: 'text-amber-600',
};

const TITLE_CLASSES: Record<CalloutTone, string> = {
  info: 'text-blue-700',
  success: 'text-emerald-900',
  warning: 'text-amber-900',
};

const BODY_CLASSES: Record<CalloutTone, string> = {
  info: 'text-slate-600',
  success: 'text-emerald-800',
  warning: 'text-amber-800',
};

const DEFAULT_ICON: Record<CalloutTone, string> = {
  info: 'info',
  success: 'check_circle',
  warning: 'warning',
};

export const Callout = ({
  tone = 'info',
  icon,
  title,
  className = '',
  children,
  ...rest
}: CalloutProps) => {
  return (
    <div
      role="note"
      className={`p-4 rounded-lg border-l-4 flex gap-3 items-start ${TONE_CLASSES[tone]} ${className}`}
      {...rest}
    >
      <span
        aria-hidden="true"
        className={`material-symbols-outlined text-[20px] shrink-0 mt-0.5 ${ICON_CLASSES[tone]}`}
      >
        {icon ?? DEFAULT_ICON[tone]}
      </span>
      <div className="text-sm space-y-1">
        <span className={`font-bold block ${TITLE_CLASSES[tone]}`}>{title}</span>
        <p className={BODY_CLASSES[tone]}>{children}</p>
      </div>
    </div>
  );
}
