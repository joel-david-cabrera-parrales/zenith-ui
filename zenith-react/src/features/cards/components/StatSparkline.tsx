import type { HTMLAttributes } from 'react';

export interface StatSparklineProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  code?: string;
  icon?: string;
  delta?: string;
  value?: string;
  unit?: string;
  hint?: string;
  windowLabel?: string;
  peak?: string;
}

export function StatSparkline({
  label = 'Throughput Rate',
  code = 'telemetry.stream.hz',
  icon = 'query_stats',
  delta = '+14.2%',
  value = '4,892.4',
  unit = 'ops/sec',
  hint = 'Compared to previous 24h baseline (4,284 ops/sec)',
  windowLabel = 'ROLLING_WINDOW_24H',
  peak = 'PEAK 5,120',
  className = '',
  ...rest
}: StatSparklineProps) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-blue-600 border border-slate-200">
            <span aria-hidden="true" className="material-symbols-outlined">
              {icon}
            </span>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider block">
              {label}
            </span>
            <span className="font-mono text-[9px] text-slate-500">{code}</span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-emerald-700 font-mono text-[9px] border border-slate-200">
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-[13px]"
          >
            arrow_upward
          </span>
          {delta}
        </span>
      </div>
      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-slate-900 tracking-tight">
            {value}
          </span>
          <span className="font-mono text-xs text-slate-500">{unit}</span>
        </div>
        <p className="text-[11px] text-slate-500 mt-1">{hint}</p>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 mb-1.5">
          <span>{windowLabel}</span>
          <span className="text-blue-600 font-bold">{peak}</span>
        </div>
        <svg
          aria-hidden="true"
          className="w-full h-11 text-blue-600"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 280 40"
        >
          <path
            d="M0 32 L20 28 L40 34 L60 22 L80 25 L100 15 L120 18 L140 10 L160 14 L180 8 L200 12 L220 5 L240 10 L260 4 L280 2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M0 32 L20 28 L40 34 L60 22 L80 25 L100 15 L120 18 L140 10 L160 14 L180 8 L200 12 L220 5 L240 10 L260 4 L280 2 L280 40 L0 40 Z"
            fill="currentColor"
            fillOpacity="0.08"
          />
        </svg>
      </div>
    </div>
  );
}
