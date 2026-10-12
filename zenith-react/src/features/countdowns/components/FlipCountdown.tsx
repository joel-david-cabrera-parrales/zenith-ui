import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface FlipCountdownProps extends HTMLAttributes<HTMLDivElement> {
  initialDays?: number;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  onExpire?: () => void;
}

const pad = (n: number): string => String(n).padStart(2, '0');

const FlapCell = ({ value, label, accent = false }: { value: string; label: string; accent?: boolean }) => {
  const digitClass = `text-3xl font-bold tracking-tighter tabular-nums ${accent ? 'text-blue-400' : 'text-white'}`;
  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative h-20 w-16 animate-flip-tick overflow-hidden rounded-lg border shadow-lg ${
          accent ? 'border-blue-500/40' : 'border-slate-700/80'
        }`}
      >
        <div className="absolute inset-x-0 top-1/2 z-10 h-px bg-slate-950 shadow-[0_1px_1px_rgba(255,255,255,0.1)]" />
        <div className={`h-1/2 overflow-hidden ${accent ? 'bg-blue-900/40' : 'bg-slate-800/90'}`}>
          <div className="flex h-20 items-center justify-center">
            <span className={digitClass}>{value}</span>
          </div>
        </div>
        <div className={`h-1/2 overflow-hidden ${accent ? 'bg-blue-950/80' : 'bg-slate-900/95'}`}>
          <div className="-mt-10 flex h-20 items-center justify-center">
            <span className={digitClass}>{value}</span>
          </div>
        </div>
      </div>
      <span
        className={`mt-2 font-mono text-[9px] font-semibold tracking-wider ${
          accent ? 'text-blue-400' : 'text-slate-400'
        }`}
      >
        {label}
      </span>
    </div>
  );
};

const Colon = ({ accent = false }: { accent?: boolean }) => (
  <span aria-hidden="true" className={`mb-5 text-2xl font-bold ${accent ? 'animate-pulse text-blue-500' : 'text-slate-500'}`}>
    :
  </span>
);

export const FlipCountdown = ({
  initialDays = 8,
  initialHours = 14,
  initialMinutes = 27,
  initialSeconds = 9,
  onExpire,
  className = '',
  ...rest
}: FlipCountdownProps) => {
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

  const days = pad(Math.floor(total / 86400));
  const hours = pad(Math.floor((total % 86400) / 3600));
  const minutes = pad(Math.floor((total % 3600) / 60));
  const seconds = pad(total % 60);

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label="Cuenta regresiva estilo split-flap"
      className={`flex items-center justify-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-6 [perspective:600px] ${className}`}
      {...rest}
    >
      <FlapCell key={`d-${days}`} value={days} label="DÍAS" />
      <Colon />
      <FlapCell key={`h-${hours}`} value={hours} label="HORAS" />
      <Colon />
      <FlapCell key={`m-${minutes}`} value={minutes} label="MIN" />
      <Colon accent />
      <FlapCell key={`s-${seconds}`} value={seconds} label="SEG" accent />
    </div>
  );
};
