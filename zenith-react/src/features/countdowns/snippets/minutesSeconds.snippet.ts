export const MINUTES_SECONDS_HTML = `
<div role="timer" aria-live="off" aria-label="14 minutos y 59 segundos restantes" class="w-full rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
  <div class="flex items-center justify-center gap-2">
    <div class="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <span class="text-2xl font-bold tabular-nums text-slate-900">14</span>
      <span class="block font-mono text-[9px] tracking-wider text-slate-500">MIN</span>
    </div>
    <span class="text-2xl font-bold text-blue-600">:</span>
    <div class="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <span class="text-2xl font-bold tabular-nums text-slate-900">59</span>
      <span class="block font-mono text-[9px] tracking-wider text-slate-500">SEG</span>
    </div>
  </div>
  <div class="mt-3 inline-flex items-center gap-1.5 rounded bg-emerald-600/10 px-2 py-0.5 font-mono text-[10px] text-emerald-700">
    <span class="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
    <span>SLOT RESERVADO // ACTIVO</span>
  </div>
</div>
`;

export const MINUTES_SECONDS_TSX = `
import { useEffect, useState } from 'react';

export const MinutesSecondsTimer = () => {
  const [total, setTotal] = useState(14 * 60 + 59);
  const done = total <= 0;

  useEffect(() => {
    if (done) return;
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
      aria-label={minutes + ' minutos y ' + seconds + ' segundos restantes'}
      className="w-full rounded-lg border border-slate-200 bg-slate-50 p-4 text-center"
    >
      <div className="flex items-center justify-center gap-2">
        <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
          <span className="text-2xl font-bold tabular-nums text-slate-900">
            {String(minutes).padStart(2, '0')}
          </span>
          <span className="block font-mono text-[9px] tracking-wider text-slate-500">MIN</span>
        </div>
        <span aria-hidden="true" className="animate-pulse text-2xl font-bold text-blue-600">:</span>
        <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
          <span className="text-2xl font-bold tabular-nums text-slate-900">
            {String(seconds).padStart(2, '0')}
          </span>
          <span className="block font-mono text-[9px] tracking-wider text-slate-500">SEG</span>
        </div>
      </div>
      <div className="mt-3 inline-flex items-center gap-1.5 rounded bg-emerald-600/10 px-2 py-0.5 font-mono text-[10px] text-emerald-700">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
        <span>{done ? 'SLOT EXPIRADO' : 'SLOT RESERVADO // ACTIVO'}</span>
      </div>
    </div>
  );
};
`;
