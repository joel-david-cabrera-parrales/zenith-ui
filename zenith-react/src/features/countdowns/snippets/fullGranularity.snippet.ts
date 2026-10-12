export const FULL_GRANULARITY_HTML = `
<div role="timer" aria-live="off" aria-label="14 días, 8 horas, 22 minutos y 45 segundos restantes" class="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-center">
  <div class="grid grid-cols-4 gap-1">
    <div class="rounded border border-slate-200 bg-white p-1">
      <div class="text-lg font-bold tabular-nums text-slate-900">14</div>
      <div class="font-mono text-[8px] text-slate-500">DÍAS</div>
    </div>
    <div class="rounded border border-slate-200 bg-white p-1">
      <div class="text-lg font-bold tabular-nums text-slate-900">08</div>
      <div class="font-mono text-[8px] text-slate-500">HOR</div>
    </div>
    <div class="rounded border border-slate-200 bg-white p-1">
      <div class="text-lg font-bold tabular-nums text-slate-900">22</div>
      <div class="font-mono text-[8px] text-slate-500">MIN</div>
    </div>
    <div class="rounded border border-slate-200 bg-white p-1">
      <div class="text-lg font-bold tabular-nums text-blue-600">45</div>
      <div class="font-mono text-[8px] text-slate-500">SEG</div>
    </div>
  </div>
  <div class="mt-2 truncate font-mono text-[10px] text-slate-500">V3.0.0-PROD_FREEZE</div>
</div>
`;

export const FULL_GRANULARITY_TSX = `
import { useEffect, useState } from 'react';

export const FullGranularityTimer = () => {
  const [total, setTotal] = useState(((14 * 24 + 8) * 60 + 22) * 60 + 45);
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
  const cells = [
    { value: String(days).padStart(2, '0'), label: 'DÍAS', accent: false },
    { value: String(hours).padStart(2, '0'), label: 'HOR', accent: false },
    { value: String(minutes).padStart(2, '0'), label: 'MIN', accent: false },
    { value: String(seconds).padStart(2, '0'), label: 'SEG', accent: true },
  ];

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label={days + ' días, ' + hours + ' horas, ' + minutes + ' minutos y ' + seconds + ' segundos restantes'}
      className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-center"
    >
      <div className="grid grid-cols-4 gap-1">
        {cells.map((cell) => (
          <div key={cell.label} className="rounded border border-slate-200 bg-white p-1">
            <div className={'text-lg font-bold tabular-nums ' + (cell.accent ? 'text-blue-600' : 'text-slate-900')}>
              {cell.value}
            </div>
            <div className="font-mono text-[8px] text-slate-500">{cell.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 truncate font-mono text-[10px] text-slate-500">V3.0.0-PROD_FREEZE</div>
      <div className="mt-1 font-mono text-[11px] font-semibold text-emerald-700">
        {done ? 'LIBERADO' : 'PLANIFICADO'}
      </div>
    </div>
  );
};
`;
