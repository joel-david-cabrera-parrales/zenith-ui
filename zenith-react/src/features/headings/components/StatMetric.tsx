import type { HTMLAttributes } from 'react';

export type StatMetricTone = 'success' | 'info' | 'live';

export interface StatMetricProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
  hint: string;
  delta: string;
  tone?: StatMetricTone;
  deltaIcon?: string;
}

const DELTA_CLASSES: Record<StatMetricTone, string> = {
  success: 'text-emerald-600',
  info: 'text-blue-600',
  live: 'text-emerald-600',
};

export const StatMetric = ({
  label,
  value,
  hint,
  delta,
  tone = 'success',
  deltaIcon = 'arrow_upward',
  className = '',
  ...rest
}: StatMetricProps) => {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2 ${className}`}
      {...rest}
    >
      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>{label}</span>
        <span
          className={`flex items-center text-xs font-bold gap-0.5 ${DELTA_CLASSES[tone]}`}
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
            {deltaIcon}
          </span>
          {delta}
        </span>
      </div>
      <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-mono">
        {value}
      </div>
      <p className="text-xs text-slate-500">{hint}</p>
    </div>
  );
}
