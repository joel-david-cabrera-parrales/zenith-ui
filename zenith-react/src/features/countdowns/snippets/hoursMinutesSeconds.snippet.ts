export const HOURS_MINUTES_SECONDS_HTML = `
<div role="timer" aria-live="off" aria-label="3 horas, 42 minutos y 18 segundos restantes" class="w-full rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
  <div class="flex items-center justify-center gap-1.5">
    <div class="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm">
      <span class="text-xl font-bold tabular-nums text-slate-900">03</span>
      <span class="block font-mono text-[8px] text-slate-500">H</span>
    </div>
    <span class="font-bold text-slate-500">:</span>
    <div class="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm">
      <span class="text-xl font-bold tabular-nums text-slate-900">42</span>
      <span class="block font-mono text-[8px] text-slate-500">M</span>
    </div>
    <span class="font-bold text-slate-500">:</span>
    <div class="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm">
      <span class="text-xl font-bold tabular-nums text-blue-600">18</span>
      <span class="block font-mono text-[8px] text-slate-500">S</span>
    </div>
  </div>
  <div class="mt-2 font-mono text-[10px] text-slate-500">DB_REPLICA_SYNC_WINDOW</div>
</div>
`;

export const HOURS_MINUTES_SECONDS_TSX = `
import { useEffect, useState } from 'react';

export const HoursMinutesSecondsTimer = () => {
  const [total, setTotal] = useState(3 * 3600 + 42 * 60 + 18);
  const done = total <= 0;

  useEffect(() => {
    if (done) return;
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
      aria-label={hours + ' horas, ' + minutes + ' minutos y ' + seconds + ' segundos restantes'}
      className="w-full rounded-lg border border-slate-200 bg-slate-50 p-4 text-center"
    >
      <div className="flex items-center justify-center gap-1.5">
        <div className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm">
          <span className="text-xl font-bold tabular-nums text-slate-900">
            {String(hours).padStart(2, '0')}
          </span>
          <span className="block font-mono text-[8px] text-slate-500">H</span>
        </div>
        <span aria-hidden="true" className="animate-pulse font-bold text-slate-500">:</span>
        <div className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm">
          <span className="text-xl font-bold tabular-nums text-slate-900">
            {String(minutes).padStart(2, '0')}
          </span>
          <span className="block font-mono text-[8px] text-slate-500">M</span>
        </div>
        <span aria-hidden="true" className="animate-pulse font-bold text-slate-500">:</span>
        <div className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm">
          <span className="text-xl font-bold tabular-nums text-blue-600">
            {String(seconds).padStart(2, '0')}
          </span>
          <span className="block font-mono text-[8px] text-slate-500">S</span>
        </div>
      </div>
      <div className="mt-2 font-mono text-[10px] text-slate-500">DB_REPLICA_SYNC_WINDOW</div>
      <div className="mt-1 font-mono text-[11px] font-semibold text-blue-600">
        {done ? 'COMPLETADO' : 'EN CURSO'}
      </div>
    </div>
  );
};
`;
