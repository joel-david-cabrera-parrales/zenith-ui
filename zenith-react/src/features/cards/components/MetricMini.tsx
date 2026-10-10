import type { HTMLAttributes } from 'react';

export interface MetricMiniProps extends HTMLAttributes<HTMLDivElement> {
  icon?: string;
  status?: string;
  label?: string;
  value?: string;
  delta?: string;
  footerLeft?: string;
  footerRight?: string;
}

export function MetricMini({
  icon = 'speed',
  status = 'OPTIMAL',
  label = 'Average Response Time',
  value = '18.4ms',
  delta = '-3.2ms',
  footerLeft = 'P95 BENCHMARK',
  footerRight = 'TARGET < 25ms',
  className = '',
  ...rest
}: MetricMiniProps) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-blue-600 border border-slate-200">
            <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
              {icon}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-slate-100 text-emerald-700 font-mono text-[9px] font-semibold border border-slate-200">
            {status}
          </span>
        </div>
        <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider block mb-1">
          {label}
        </span>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-2xl font-bold text-slate-900 tracking-tight">
            {value}
          </span>
          <span className="font-mono text-[9px] text-emerald-600 font-bold">
            {delta}
          </span>
        </div>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>{footerLeft}</span>
        <span className="text-slate-900 font-semibold">{footerRight}</span>
      </div>
    </div>
  );
}
