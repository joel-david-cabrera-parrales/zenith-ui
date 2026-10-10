import type { HTMLAttributes } from 'react';

export interface QuotaProgressProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  badge?: string;
  value?: string;
  targetLabel?: string;
  target?: string;
  allocatedPct?: number;
  buffersPct?: number;
  allocatedLabel?: string;
  buffersLabel?: string;
  status?: string;
  eta?: string;
}

export function QuotaProgress({
  label = 'Cluster Quota Usage',
  badge = 'ACTIVE_CYCLE',
  value = '82.4%',
  targetLabel = 'TARGET CAP',
  target = '16.4 / 20.0 TB',
  allocatedPct = 68,
  buffersPct = 14.4,
  allocatedLabel = 'DB Allocated (68%)',
  buffersLabel = 'Buffers (14.4%)',
  status = 'Within threshold',
  eta = 'ETA LIMIT: ~18 DAYS',
  className = '',
  ...rest
}: QuotaProgressProps) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
            {label}
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-[9px] text-blue-600 bg-blue-100 px-2 py-0.5 rounded font-semibold">
            {badge}
          </span>
        </div>
        <div className="flex items-baseline justify-between mb-2">
          <div className="text-2xl font-bold text-slate-900">{value}</div>
          <div className="text-right">
            <span className="font-mono text-[9px] text-slate-500 block">
              {targetLabel}
            </span>
            <span className="text-sm font-semibold text-slate-900">
              {target}
            </span>
          </div>
        </div>
        <div
          className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden flex my-3"
          role="progressbar"
          aria-valuenow={allocatedPct + buffersPct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label}
        >
          <div
            className="bg-blue-600 h-full rounded-l-full"
            style={{ width: `${allocatedPct}%` }}
          />
          <div className="bg-blue-900 h-full" style={{ width: `${buffersPct}%` }} />
          <div className="bg-slate-300/40 h-full flex-1" />
        </div>
        <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 pt-1">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            {allocatedLabel}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-900 inline-block" />
            {buffersLabel}
          </span>
        </div>
      </div>
      <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
        <span className="text-slate-500 flex items-center gap-1">
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-[16px] text-emerald-600"
          >
            check_circle
          </span>
          {status}
        </span>
        <span className="font-mono text-[9px] text-slate-900 font-semibold">
          {eta}
        </span>
      </div>
    </div>
  );
}
