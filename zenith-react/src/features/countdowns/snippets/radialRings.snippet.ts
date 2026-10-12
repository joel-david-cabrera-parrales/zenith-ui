export const RADIAL_RINGS_HTML = `
<div role="timer" aria-live="off" aria-label="Cuenta regresiva con anillos de progreso" class="flex items-center justify-around gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
  <div class="flex flex-col items-center">
    <div class="relative flex h-20 w-20 items-center justify-center">
      <svg class="h-full w-full -rotate-90" viewBox="0 0 36 36">
        <path class="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="2.5"></path>
        <path class="text-blue-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="75, 100" stroke-linecap="round" stroke-width="2.5"></path>
      </svg>
      <div class="absolute flex flex-col items-center justify-center">
        <span class="text-base font-bold text-slate-900">06</span>
        <span class="font-mono text-[8px] text-slate-500">DÍAS</span>
      </div>
    </div>
    <span class="mt-1 font-mono text-[9px] text-slate-500">75% REM.</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="relative flex h-20 w-20 items-center justify-center">
      <svg class="h-full w-full -rotate-90" viewBox="0 0 36 36">
        <path class="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="2.5"></path>
        <path class="text-emerald-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="50, 100" stroke-linecap="round" stroke-width="2.5"></path>
      </svg>
      <div class="absolute flex flex-col items-center justify-center">
        <span class="text-base font-bold text-slate-900">18</span>
        <span class="font-mono text-[8px] text-slate-500">HOR</span>
      </div>
    </div>
    <span class="mt-1 font-mono text-[9px] text-slate-500">50% REM.</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="relative flex h-20 w-20 items-center justify-center">
      <svg class="h-full w-full -rotate-90" viewBox="0 0 36 36">
        <path class="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="2.5"></path>
        <path class="text-amber-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="35, 100" stroke-linecap="round" stroke-width="2.5"></path>
      </svg>
      <div class="absolute flex flex-col items-center justify-center">
        <span class="text-base font-bold text-slate-900">32</span>
        <span class="font-mono text-[8px] text-slate-500">MIN</span>
      </div>
    </div>
    <span class="mt-1 font-mono text-[9px] text-slate-500">35% REM.</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="relative flex h-20 w-20 items-center justify-center">
      <svg class="h-full w-full -rotate-90" viewBox="0 0 36 36">
        <path class="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="2.5"></path>
        <path class="text-red-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="15, 100" stroke-linecap="round" stroke-width="2.5"></path>
      </svg>
      <div class="absolute flex flex-col items-center justify-center">
        <span class="text-base font-bold text-red-600">12</span>
        <span class="font-mono text-[8px] font-semibold text-red-600">SEG</span>
      </div>
    </div>
    <span class="mt-1 font-mono text-[9px] font-semibold text-red-600">15% REM.</span>
  </div>
</div>
`;

export const RADIAL_RINGS_TSX = `
import { useEffect, useState } from 'react';

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
            strokeDasharray={pct + ', 100'}
            strokeLinecap="round"
            strokeWidth="2.5"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className={'text-base font-bold tabular-nums ' + (critical ? 'text-red-600' : 'text-slate-900')}>
            {value}
          </span>
          <span className={'font-mono text-[8px] ' + (critical ? 'font-semibold text-red-600' : 'text-slate-500')}>
            {label}
          </span>
        </div>
      </div>
      <span className={'mt-1 font-mono text-[9px] ' + (critical ? 'font-semibold text-red-600' : 'text-slate-500')}>
        {pct}% REM.
      </span>
    </div>
  );
};

export const RadialRingsCountdown = () => {
  const [total, setTotal] = useState(((6 * 24 + 18) * 60 + 32) * 60 + 12);
  const done = total <= 0;

  useEffect(() => {
    if (done) return;
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
      className="flex items-center justify-around gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4"
    >
      <Ring value={String(days).padStart(2, '0')} label="DÍAS" fraction={days / 7} strokeClass="text-blue-600" />
      <Ring value={String(hours).padStart(2, '0')} label="HOR" fraction={hours / 24} strokeClass="text-emerald-600" />
      <Ring value={String(minutes).padStart(2, '0')} label="MIN" fraction={minutes / 60} strokeClass="text-amber-500" />
      <Ring value={String(seconds).padStart(2, '0')} label="SEG" fraction={seconds / 60} strokeClass="text-red-600" critical />
    </div>
  );
};
`;
