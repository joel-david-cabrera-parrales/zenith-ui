import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface MinutesSecondsTimerProps extends HTMLAttributes<HTMLDivElement> {
  initialMinutes?: number;
  initialSeconds?: number;
  windowLabel?: string;
  onExpire?: () => void;
}

const pad = (n: number): string => String(n).padStart(2, '0');

export const MinutesSecondsTimer = ({
  initialMinutes = 14,
  initialSeconds = 59,
  windowLabel = 'WINDOW: 15m 00s',
  onExpire,
  className = '',
  ...rest
}: MinutesSecondsTimerProps) => {
  const [total, setTotal] = useState(initialMinutes * 60 + initialSeconds);
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

  const minutes = Math.floor(total / 60);
  const seconds = total % 60;

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label={`${minutes} minutos y ${seconds} segundos restantes`}
      className={`w-full rounded-lg border border-slate-200 bg-slate-50 p-4 text-center ${className}`}
      {...rest}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
          <span className="text-2xl font-bold tabular-nums text-slate-900">{pad(minutes)}</span>
          <span className="block font-mono text-[9px] tracking-wider text-slate-500">MIN</span>
        </div>
        <span aria-hidden="true" className="animate-pulse text-2xl font-bold text-blue-600">
          :
        </span>
        <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
          <span className="text-2xl font-bold tabular-nums text-slate-900">{pad(seconds)}</span>
          <span className="block font-mono text-[9px] tracking-wider text-slate-500">SEG</span>
        </div>
      </div>
      <div className="mt-3 inline-flex items-center gap-1.5 rounded bg-emerald-600/10 px-2 py-0.5 font-mono text-[10px] text-emerald-700">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
        <span>{done ? 'SLOT EXPIRADO' : 'SLOT RESERVADO // ACTIVO'}</span>
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-slate-500">
        <span>{windowLabel}</span>
      </div>
    </div>
  );
};
