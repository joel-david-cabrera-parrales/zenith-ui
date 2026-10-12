import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface FullGranularityTimerProps extends HTMLAttributes<HTMLDivElement> {
  initialDays?: number;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  releaseLabel?: string;
  onExpire?: () => void;
}

const pad = (n: number): string => String(n).padStart(2, '0');

export const FullGranularityTimer = ({
  initialDays = 14,
  initialHours = 8,
  initialMinutes = 22,
  initialSeconds = 45,
  releaseLabel = 'V3.0.0-PROD_FREEZE',
  onExpire,
  className = '',
  ...rest
}: FullGranularityTimerProps) => {
  const [total, setTotal] = useState(
    ((initialDays * 24 + initialHours) * 60 + initialMinutes) * 60 + initialSeconds,
  );
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

  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  const cells: Array<{ value: string; label: string; accent?: boolean }> = [
    { value: pad(days), label: 'DÍAS' },
    { value: pad(hours), label: 'HOR' },
    { value: pad(minutes), label: 'MIN' },
    { value: pad(seconds), label: 'SEG', accent: true },
  ];

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label={`${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos restantes`}
      className={`w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-center ${className}`}
      {...rest}
    >
      <div className="grid grid-cols-4 gap-1">
        {cells.map((cell) => (
          <div key={cell.label} className="rounded border border-slate-200 bg-white p-1">
            <div
              className={`text-lg font-bold tabular-nums ${cell.accent ? 'text-blue-600' : 'text-slate-900'}`}
            >
              {cell.value}
            </div>
            <div className="font-mono text-[8px] text-slate-500">{cell.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 truncate font-mono text-[10px] text-slate-500">{releaseLabel}</div>
      <div className="mt-1 font-mono text-[11px] font-semibold text-emerald-700">
        {done ? 'LIBERADO' : 'PLANIFICADO'}
      </div>
    </div>
  );
};
