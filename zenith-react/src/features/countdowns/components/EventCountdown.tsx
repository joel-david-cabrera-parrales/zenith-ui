import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface EventCountdownProps extends HTMLAttributes<HTMLDivElement> {
  initialDays?: number;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  onExpire?: () => void;
}

const pad = (n: number): string => String(n).padStart(2, '0');

export const EventCountdown = ({
  initialDays = 14,
  initialHours = 8,
  initialMinutes = 22,
  initialSeconds = 45,
  onExpire,
  className = '',
  ...rest
}: EventCountdownProps) => {
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

  const cells: Array<{ value: string; label: string }> = [
    { value: pad(Math.floor(total / 86400)), label: 'DÍAS' },
    { value: pad(Math.floor((total % 86400) / 3600)), label: 'HORAS' },
    { value: pad(Math.floor((total % 3600) / 60)), label: 'MIN' },
    { value: pad(total % 60), label: 'SEG' },
  ];

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label="Cuenta regresiva al evento"
      className={`flex flex-wrap items-center gap-2 sm:gap-2.5 ${className}`}
      {...rest}
    >
      {cells.map((cell) => (
        <div
          key={cell.label}
          className="flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm sm:h-16 sm:w-16"
        >
          <span className="text-sm font-bold tabular-nums text-slate-900">{cell.value}</span>
          <span className="text-[10px] font-semibold text-slate-500">{cell.label}</span>
        </div>
      ))}
    </div>
  );
};
