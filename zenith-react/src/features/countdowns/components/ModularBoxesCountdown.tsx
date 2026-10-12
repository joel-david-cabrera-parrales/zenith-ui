import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface ModularBoxesCountdownProps extends HTMLAttributes<HTMLDivElement> {
  initialDays?: number;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  onExpire?: () => void;
}

const pad = (n: number): string => String(n).padStart(2, '0');

export const ModularBoxesCountdown = ({
  initialDays = 2,
  initialHours = 19,
  initialMinutes = 43,
  initialSeconds = 51,
  onExpire,
  className = '',
  ...rest
}: ModularBoxesCountdownProps) => {
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

  const units: Array<{ value: string; label: string; accent?: boolean }> = [
    { value: pad(Math.floor(total / 86400)), label: 'DÍAS' },
    { value: pad(Math.floor((total % 86400) / 3600)), label: 'HOR' },
    { value: pad(Math.floor((total % 3600) / 60)), label: 'MIN' },
    { value: pad(total % 60), label: 'SEG', accent: true },
  ];

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label="Cuenta regresiva en cajas modulares"
      className={`flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50/40 p-6 ${className}`}
      {...rest}
    >
      <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-1.5">
            {i > 0 && (
              <span aria-hidden="true" className="animate-pulse font-bold text-slate-300">
                :
              </span>
            )}
            <div className="px-2 text-center">
              <span
                className={`text-2xl font-bold tabular-nums ${unit.accent ? 'text-blue-600' : 'text-slate-900'}`}
              >
                {unit.value}
              </span>
              <span
                className={`block font-mono text-[9px] ${
                  unit.accent ? 'font-semibold text-blue-600' : 'text-slate-500'
                }`}
              >
                {unit.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
