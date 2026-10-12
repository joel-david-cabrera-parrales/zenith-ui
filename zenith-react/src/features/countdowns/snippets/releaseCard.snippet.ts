export const RELEASE_CARD_HTML = `
<div class="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-md">
  <div class="flex items-center justify-between">
    <span class="text-sm font-bold text-slate-900">Release v2.5.0 Freeze</span>
    <div class="flex rounded-md bg-slate-100 p-0.5 font-mono text-[10px]">
      <button class="rounded bg-white px-2 py-0.5 font-bold text-blue-600 shadow-sm">UTC</button>
      <button class="px-2 py-0.5 text-slate-500">EST</button>
    </div>
  </div>
  <div role="timer" aria-live="off" aria-label="Faltan 05 DÍAS, 11 HOR, 04 MIN, 19 SEG para el release" class="grid grid-cols-4 gap-1.5 py-1">
    <div class="rounded border border-slate-200 bg-slate-50 p-2 text-center">
      <div class="font-mono text-lg font-bold text-slate-900">05</div>
      <div class="font-mono text-[8px] text-slate-500">DÍAS</div>
    </div>
    <div class="rounded border border-slate-200 bg-slate-50 p-2 text-center">
      <div class="font-mono text-lg font-bold text-slate-900">11</div>
      <div class="font-mono text-[8px] text-slate-500">HOR</div>
    </div>
    <div class="rounded border border-slate-200 bg-slate-50 p-2 text-center">
      <div class="font-mono text-lg font-bold text-slate-900">04</div>
      <div class="font-mono text-[8px] text-slate-500">MIN</div>
    </div>
    <div class="rounded border border-slate-200 bg-slate-50 p-2 text-center">
      <div class="font-mono text-lg font-bold text-blue-600">19</div>
      <div class="font-mono text-[8px] font-semibold text-blue-600">SEG</div>
    </div>
  </div>
  <div class="flex items-center justify-between pt-1 text-xs">
    <span class="text-[11px] text-slate-500">Canary Rollout: 10% Nodes</span>
    <span class="font-mono text-[10px] font-semibold text-emerald-700">STAGING PASS</span>
  </div>
  <div class="flex items-center justify-between border-t border-slate-200 pt-2 font-mono text-[10px] text-slate-500">
    <span>RELEASE_TARGET: 2025-04-15 00:00:00Z</span>
    <span class="font-semibold text-slate-900">SYNCED</span>
  </div>
</div>
`;

export const RELEASE_CARD_TSX = `
import { useEffect, useState } from 'react';

export const ReleaseCountdownCard = () => {
  const [total, setTotal] = useState(((5 * 24 + 11) * 60 + 4) * 60 + 19);
  const [timezone, setTimezone] = useState<'UTC' | 'EST'>('UTC');
  const done = total <= 0;

  useEffect(() => {
    if (done) return;
    const id = window.setInterval(() => {
      setTotal((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [done]);

  const cells = [
    { value: String(Math.floor(total / 86400)).padStart(2, '0'), label: 'DÍAS', accent: false },
    { value: String(Math.floor((total % 86400) / 3600)).padStart(2, '0'), label: 'HOR', accent: false },
    { value: String(Math.floor((total % 3600) / 60)).padStart(2, '0'), label: 'MIN', accent: false },
    { value: String(total % 60).padStart(2, '0'), label: 'SEG', accent: true },
  ];

  return (
    <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-slate-900">Release v2.5.0 Freeze</span>
        <div role="group" aria-label="Huso horario del objetivo" className="flex rounded-md bg-slate-100 p-0.5 font-mono text-[10px]">
          {(['UTC', 'EST'] as const).map((tz) => (
            <button
              key={tz}
              type="button"
              aria-pressed={timezone === tz}
              onClick={() => setTimezone(tz)}
              className={
                timezone === tz
                  ? 'rounded bg-white px-2 py-0.5 font-bold text-blue-600 shadow-sm'
                  : 'px-2 py-0.5 text-slate-500'
              }
            >
              {tz}
            </button>
          ))}
        </div>
      </div>
      <div
        role="timer"
        aria-live="off"
        aria-label={'Faltan ' + cells.map((c) => c.value + ' ' + c.label).join(', ') + ' para el release'}
        className="grid grid-cols-4 gap-1.5 py-1"
      >
        {cells.map((cell) => (
          <div key={cell.label} className="rounded border border-slate-200 bg-slate-50 p-2 text-center">
            <div className={'font-mono text-lg font-bold tabular-nums ' + (cell.accent ? 'text-blue-600' : 'text-slate-900')}>
              {cell.value}
            </div>
            <div className={'font-mono text-[8px] ' + (cell.accent ? 'font-semibold text-blue-600' : 'text-slate-500')}>
              {cell.label}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-1 text-xs">
        <span className="text-[11px] text-slate-500">Canary Rollout: 10% Nodes</span>
        <span className="font-mono text-[10px] font-semibold text-emerald-700">
          {done ? 'RELEASED' : 'STAGING PASS'}
        </span>
      </div>
      <div className="flex items-center justify-between border-t border-slate-200 pt-2 font-mono text-[10px] text-slate-500">
        <span>
          {timezone === 'UTC' ? 'RELEASE_TARGET: 2025-04-15 00:00:00Z' : 'RELEASE_TARGET: 2025-04-14 19:00:00 EST'}
        </span>
        <span className="font-semibold text-slate-900">SYNCED</span>
      </div>
    </div>
  );
};
`;
