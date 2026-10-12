import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface HoursMinutesSecondsTimerProps extends HTMLAttributes<HTMLDivElement> {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  targetLabel?: string;
  onExpire?: () => void;
}

const pad = (n: number): string => String(n).padStart(2, '0');

export const HoursMinutesSecondsTimer = ({
  initialHours = 3,
  initialMinutes = 42,
  initialSeconds = 18,
  targetLabel = 'TARGET: 04:00:00',
  onExpire,
  className = '',
  ...rest
}: HoursMinutesSecondsTimerProps) => {
  const [total, setTotal] = useState(initialHours * 3600 + initialMinutes * 60 + initialSeconds);
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

  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label={`${hours} horas, ${minutes} minutos y ${seconds} segundos restantes`}
      className={`w-full rounded-lg border border-slate-200 bg-slate-50 p-4 text-center ${className}`}
      {...rest}
    >
      <div className="flex items-center justify-center gap-1.5">
        <div className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm">
          <span className="text-xl font-bold tabular-nums text-slate-900">{pad(hours)}</span>
          <span className="block font-mono text-[8px] text-slate-500">H</span>
        </div>
        <span aria-hidden="true" className="animate-pulse font-bold text-slate-500">
          :
        </span>
        <div className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm">
          <span className="text-xl font-bold tabular-nums text-slate-900">{pad(minutes)}</span>
          <span className="block font-mono text-[8px] text-slate-500">M</span>
        </div>
        <span aria-hidden="true" className="animate-pulse font-bold text-slate-500">
          :
        </span>
        <div className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm">
          <span className="text-xl font-bold tabular-nums text-blue-600">{pad(seconds)}</span>
          <span className="block font-mono text-[8px] text-slate-500">S</span>
        </div>
      </div>
      <div className="mt-2 font-mono text-[10px] text-slate-500">DB_REPLICA_SYNC_WINDOW</div>
      <div className="mt-1 flex items-center justify-between font-mono text-[11px] text-slate-500">
        <span>{targetLabel}</span>
        <span className="font-semibold text-blue-600">{done ? 'COMPLETADO' : 'EN CURSO'}</span>
      </div>
    </div>
  );
};
