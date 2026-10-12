import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface RadialRingsCountdownProps extends HTMLAttributes<HTMLDivElement> {
  initialDays?: number;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  onExpire?: () => void;
}

const Ring = ({
  value,
  label,
  fraction,
  strokeClass,
  critical = false,
}: {
  value: string;
  label: string;
  fraction: number;
  strokeClass: string;
  critical?: boolean;
}) => {
  const pct = Math.max(0, Math.min(100, Math.round(fraction * 100)));
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36" aria-hidden="true">
          <path
            className="text-slate-200"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            className={strokeClass}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeDasharray={`${pct}, 100`}
            strokeLinecap="round"
            strokeWidth="2.5"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className={`text-base font-bold tabular-nums ${critical ? 'text-red-600' : 'text-slate-900'}`}>
            {value}
          </span>
          <span className={`font-mono text-[8px] ${critical ? 'font-semibold text-red-600' : 'text-slate-500'}`}>
            {label}
          </span>
        </div>
      </div>
      <span className={`mt-1 font-mono text-[9px] ${critical ? 'font-semibold text-red-600' : 'text-slate-500'}`}>
        {pct}% REM.
      </span>
    </div>
  );
};

const pad = (n: number): string => String(n).padStart(2, '0');

export const RadialRingsCountdown = ({
  initialDays = 6,
  initialHours = 18,
  initialMinutes = 32,
  initialSeconds = 12,
  onExpire,
  className = '',
  ...rest
}: RadialRingsCountdownProps) => {
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

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label="Cuenta regresiva con anillos de progreso"
      className={`flex items-center justify-around gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 ${className}`}
      {...rest}
    >
      <Ring value={pad(days)} label="DÍAS" fraction={days / 7} strokeClass="text-blue-600" />
      <Ring value={pad(hours)} label="HOR" fraction={hours / 24} strokeClass="text-emerald-600" />
      <Ring value={pad(minutes)} label="MIN" fraction={minutes / 60} strokeClass="text-amber-500" />
      <Ring value={pad(seconds)} label="SEG" fraction={seconds / 60} strokeClass="text-red-600" critical />
    </div>
  );
};
