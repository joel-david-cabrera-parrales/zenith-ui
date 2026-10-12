export const EVENT_COUNTDOWN_HTML = `
<div role="timer" aria-live="off" aria-label="Cuenta regresiva al evento" class="flex flex-wrap items-center gap-2">
  <div class="flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
    <span class="text-sm font-bold text-slate-900">14</span>
    <span class="text-[10px] font-semibold text-slate-500">DÍAS</span>
  </div>
  <div class="flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
    <span class="text-sm font-bold text-slate-900">08</span>
    <span class="text-[10px] font-semibold text-slate-500">HORAS</span>
  </div>
  <div class="flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
    <span class="text-sm font-bold text-slate-900">22</span>
    <span class="text-[10px] font-semibold text-slate-500">MIN</span>
  </div>
  <div class="flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
    <span class="text-sm font-bold text-slate-900">45</span>
    <span class="text-[10px] font-semibold text-slate-500">SEG</span>
  </div>
</div>
`;

export const EVENT_COUNTDOWN_TSX = `
import { useEffect, useState } from 'react';

export const EventCountdown = () => {
  const [total, setTotal] = useState(((14 * 24 + 8) * 60 + 22) * 60 + 45);
  const done = total <= 0;

  useEffect(() => {
    if (done) return;
    const id = window.setInterval(() => {
      setTotal((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [done]);

  const cells = [
    { value: String(Math.floor(total / 86400)).padStart(2, '0'), label: 'DÍAS' },
    { value: String(Math.floor((total % 86400) / 3600)).padStart(2, '0'), label: 'HORAS' },
    { value: String(Math.floor((total % 3600) / 60)).padStart(2, '0'), label: 'MIN' },
    { value: String(total % 60).padStart(2, '0'), label: 'SEG' },
  ];

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label="Cuenta regresiva al evento"
      className="flex flex-wrap items-center gap-2"
    >
      {cells.map((cell) => (
        <div
          key={cell.label}
          className="flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm"
        >
          <span className="text-sm font-bold tabular-nums text-slate-900">{cell.value}</span>
          <span className="text-[10px] font-semibold text-slate-500">{cell.label}</span>
        </div>
      ))}
    </div>
  );
};
`;
