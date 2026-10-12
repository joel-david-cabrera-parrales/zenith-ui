export const MODULAR_BOXES_HTML = `
<div role="timer" aria-live="off" aria-label="Cuenta regresiva en cajas modulares" class="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50/40 p-6">
  <div class="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
    <div class="px-2 text-center">
      <span class="text-2xl font-bold text-slate-900">02</span>
      <span class="block font-mono text-[9px] text-slate-500">DÍAS</span>
    </div>
    <span class="font-bold text-slate-300">:</span>
    <div class="px-2 text-center">
      <span class="text-2xl font-bold text-slate-900">19</span>
      <span class="block font-mono text-[9px] text-slate-500">HOR</span>
    </div>
    <span class="font-bold text-slate-300">:</span>
    <div class="px-2 text-center">
      <span class="text-2xl font-bold text-slate-900">43</span>
      <span class="block font-mono text-[9px] text-slate-500">MIN</span>
    </div>
    <span class="font-bold text-slate-300">:</span>
    <div class="px-2 text-center">
      <span class="text-2xl font-bold text-blue-600">51</span>
      <span class="block font-mono text-[9px] font-semibold text-blue-600">SEG</span>
    </div>
  </div>
</div>
`;

export const MODULAR_BOXES_TSX = `
import { useEffect, useState } from 'react';

export const ModularBoxesCountdown = () => {
  const [total, setTotal] = useState(((2 * 24 + 19) * 60 + 43) * 60 + 51);
  const done = total <= 0;

  useEffect(() => {
    if (done) return;
    const id = window.setInterval(() => {
      setTotal((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [done]);

  const units = [
    { value: String(Math.floor(total / 86400)).padStart(2, '0'), label: 'DÍAS', accent: false },
    { value: String(Math.floor((total % 86400) / 3600)).padStart(2, '0'), label: 'HOR', accent: false },
    { value: String(Math.floor((total % 3600) / 60)).padStart(2, '0'), label: 'MIN', accent: false },
    { value: String(total % 60).padStart(2, '0'), label: 'SEG', accent: true },
  ];

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label="Cuenta regresiva en cajas modulares"
      className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50/40 p-6"
    >
      <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-1.5">
            {i > 0 && (
              <span aria-hidden="true" className="animate-pulse font-bold text-slate-300">:</span>
            )}
            <div className="px-2 text-center">
              <span className={'text-2xl font-bold tabular-nums ' + (unit.accent ? 'text-blue-600' : 'text-slate-900')}>
                {unit.value}
              </span>
              <span className={'block font-mono text-[9px] ' + (unit.accent ? 'font-semibold text-blue-600' : 'text-slate-500')}>
                {unit.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
`;
