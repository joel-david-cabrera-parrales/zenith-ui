export const SECONDS_ONLY_HTML = `
<div role="timer" aria-live="off" aria-label="42 segundos restantes" class="w-full rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
  <div class="flex items-baseline justify-center gap-1">
    <span class="text-3xl font-bold tracking-tight tabular-nums text-blue-600">00:42</span>
    <span class="text-xs font-semibold text-slate-500">seg</span>
  </div>
  <div class="mt-3 space-y-1">
    <div class="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
      <div class="h-full rounded-full bg-blue-600" style="width: 70%;"></div>
    </div>
    <div class="flex justify-between font-mono text-[9px] text-slate-500">
      <span>00s</span>
      <span class="font-semibold text-blue-600">42s restantes</span>
      <span>60s</span>
    </div>
  </div>
  <button type="button" class="mt-3 inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50">
    <span>Probar</span>
    <span class="material-symbols-outlined text-[16px]">replay</span>
  </button>
</div>
`;

export const SECONDS_ONLY_TSX = `
import { useEffect, useState } from 'react';

export const SecondsOnlyTimer = () => {
  const total = 60;
  const [remaining, setRemaining] = useState(42);

  useEffect(() => {
    if (remaining <= 0) return;
    const id = window.setInterval(() => {
      setRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [remaining <= 0]);

  const progress = Math.max(0, Math.min(100, (remaining / total) * 100));
  const text = '00:' + String(remaining).padStart(2, '0');

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label={remaining + ' segundos restantes'}
      className="w-full rounded-lg border border-slate-200 bg-slate-50 p-4 text-center"
    >
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-3xl font-bold tracking-tight tabular-nums text-blue-600">{text}</span>
        <span className="text-xs font-semibold text-slate-500">seg</span>
      </div>
      <div className="mt-3 space-y-1">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
          <div className="h-full rounded-full bg-blue-600 transition-all duration-300" style={{ width: progress + '%' }} />
        </div>
        <div className="flex justify-between font-mono text-[9px] text-slate-500">
          <span>00s</span>
          <span className="font-semibold text-blue-600">{remaining}s restantes</span>
          <span>{total}s</span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setRemaining(42)}
        className="mt-3 inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
      >
        <span>Probar</span>
        <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
          replay
        </span>
      </button>
    </div>
  );
};
`;
