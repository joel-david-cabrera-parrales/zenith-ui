import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface ReleaseCountdownCardProps extends HTMLAttributes<HTMLDivElement> {
  initialDays?: number;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  releaseName?: string;
  onExpire?: () => void;
}

type Timezone = 'UTC' | 'EST';

const pad = (n: number): string => String(n).padStart(2, '0');

const TARGET_LABEL: Record<Timezone, string> = {
  UTC: 'RELEASE_TARGET: 2025-04-15 00:00:00Z',
  EST: 'RELEASE_TARGET: 2025-04-14 19:00:00 EST',
};

export const ReleaseCountdownCard = ({
  initialDays = 5,
  initialHours = 11,
  initialMinutes = 4,
  initialSeconds = 19,
  releaseName = 'Release v2.5.0 Freeze',
  onExpire,
  className = '',
  ...rest
}: ReleaseCountdownCardProps) => {
  const [total, setTotal] = useState(
    ((initialDays * 24 + initialHours) * 60 + initialMinutes) * 60 + initialSeconds,
  );
  const [timezone, setTimezone] = useState<Timezone>('UTC');
  const done = total <= 0;
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  useEffect(() => {
    if (done) {
      onExpireRef.current?.();
      return;
    }
    const id = window.setInterval(() => {
      setTotal((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [done]);

  const cells: Array<{ value: string; label: string; accent?: boolean }> = [
    { value: pad(Math.floor(total / 86400)), label: 'DÍAS' },
    { value: pad(Math.floor((total % 86400) / 3600)), label: 'HOR' },
    { value: pad(Math.floor((total % 3600) / 60)), label: 'MIN' },
    { value: pad(total % 60), label: 'SEG', accent: true },
  ];

  return (
    <div className={`space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-md ${className}`} {...rest}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-slate-900">{releaseName}</span>
        <div
          role="group"
          aria-label="Huso horario del objetivo"
          className="flex rounded-md bg-slate-100 p-0.5 font-mono text-[10px]"
        >
          {(['UTC', 'EST'] as const).map((tz) => (
            <button
              key={tz}
              type="button"
              aria-pressed={timezone === tz}
              onClick={() => setTimezone(tz)}
              className={
                timezone === tz
                  ? 'rounded bg-white px-2 py-0.5 font-bold text-blue-600 shadow-sm'
                  : 'px-2 py-0.5 text-slate-500'
              }
            >
              {tz}
            </button>
          ))}
        </div>
      </div>
      <div
        role="timer"
        aria-live="off"
        aria-label={`Faltan ${cells.map((c) => `${c.value} ${c.label}`).join(', ')} para el release`}
        className="grid grid-cols-4 gap-1.5 py-1"
      >
        {cells.map((cell) => (
          <div key={cell.label} className="rounded border border-slate-200 bg-slate-50 p-2 text-center">
            <div
              className={`font-mono text-lg font-bold tabular-nums ${
                cell.accent ? 'text-blue-600' : 'text-slate-900'
              }`}
            >
              {cell.value}
            </div>
            <div
              className={`font-mono text-[8px] ${cell.accent ? 'font-semibold text-blue-600' : 'text-slate-500'}`}
            >
              {cell.label}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-1 text-xs">
        <span className="text-[11px] text-slate-500">Canary Rollout: 10% Nodes</span>
        <span className="font-mono text-[10px] font-semibold text-emerald-700">
          {done ? 'RELEASED' : 'STAGING PASS'}
        </span>
      </div>
      <div className="flex items-center justify-between border-t border-slate-200 pt-2 font-mono text-[10px] text-slate-500">
        <span>{TARGET_LABEL[timezone]}</span>
        <span className="font-semibold text-slate-900">SYNCED</span>
      </div>
    </div>
  );
};
