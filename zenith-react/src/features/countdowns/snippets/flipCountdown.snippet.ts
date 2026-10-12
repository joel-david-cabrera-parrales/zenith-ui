export const FLIP_COUNTDOWN_HTML = `
<div role="timer" aria-live="off" aria-label="Cuenta regresiva estilo split-flap" class="flex items-center justify-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-6">
  <div class="flex flex-col items-center">
    <div class="relative h-20 w-16 overflow-hidden rounded-lg border border-slate-700/80 shadow-lg">
      <div class="absolute inset-x-0 top-1/2 h-px bg-slate-950"></div>
      <div class="h-1/2 overflow-hidden bg-slate-800/90">
        <div class="flex h-20 items-center justify-center"><span class="text-3xl font-bold text-white">08</span></div>
      </div>
      <div class="h-1/2 overflow-hidden bg-slate-900/95">
        <div class="-mt-10 flex h-20 items-center justify-center"><span class="text-3xl font-bold text-white">08</span></div>
      </div>
    </div>
    <span class="mt-2 font-mono text-[9px] font-semibold tracking-wider text-slate-400">DÍAS</span>
  </div>
  <span class="mb-5 text-2xl font-bold text-slate-500">:</span>
  <div class="flex flex-col items-center">
    <div class="relative h-20 w-16 overflow-hidden rounded-lg border border-slate-700/80 shadow-lg">
      <div class="absolute inset-x-0 top-1/2 h-px bg-slate-950"></div>
      <div class="h-1/2 overflow-hidden bg-slate-800/90">
        <div class="flex h-20 items-center justify-center"><span class="text-3xl font-bold text-white">14</span></div>
      </div>
      <div class="h-1/2 overflow-hidden bg-slate-900/95">
        <div class="-mt-10 flex h-20 items-center justify-center"><span class="text-3xl font-bold text-white">14</span></div>
      </div>
    </div>
    <span class="mt-2 font-mono text-[9px] font-semibold tracking-wider text-slate-400">HORAS</span>
  </div>
  <span class="mb-5 text-2xl font-bold text-slate-500">:</span>
  <div class="flex flex-col items-center">
    <div class="relative h-20 w-16 overflow-hidden rounded-lg border border-slate-700/80 shadow-lg">
      <div class="absolute inset-x-0 top-1/2 h-px bg-slate-950"></div>
      <div class="h-1/2 overflow-hidden bg-slate-800/90">
        <div class="flex h-20 items-center justify-center"><span class="text-3xl font-bold text-white">27</span></div>
      </div>
      <div class="h-1/2 overflow-hidden bg-slate-900/95">
        <div class="-mt-10 flex h-20 items-center justify-center"><span class="text-3xl font-bold text-white">27</span></div>
      </div>
    </div>
    <span class="mt-2 font-mono text-[9px] font-semibold tracking-wider text-slate-400">MIN</span>
  </div>
  <span class="mb-5 text-2xl font-bold text-blue-500">:</span>
  <div class="flex flex-col items-center">
    <div class="relative h-20 w-16 overflow-hidden rounded-lg border border-blue-500/40 shadow-lg">
      <div class="absolute inset-x-0 top-1/2 h-px bg-blue-950"></div>
      <div class="h-1/2 overflow-hidden bg-blue-900/40">
        <div class="flex h-20 items-center justify-center"><span class="text-3xl font-bold text-blue-400">09</span></div>
      </div>
      <div class="h-1/2 overflow-hidden bg-blue-950/80">
        <div class="-mt-10 flex h-20 items-center justify-center"><span class="text-3xl font-bold text-blue-400">09</span></div>
      </div>
    </div>
    <span class="mt-2 font-mono text-[9px] font-semibold tracking-wider text-blue-400">SEG</span>
  </div>
</div>
`;

export const FLIP_COUNTDOWN_TSX = `
import { useEffect, useState } from 'react';

const FlapCell = ({ value, label, accent = false }: { value: string; label: string; accent?: boolean }) => {
  const digitClass =
    'text-3xl font-bold tracking-tighter tabular-nums ' + (accent ? 'text-blue-400' : 'text-white');
  return (
    <div className="flex flex-col items-center">
      <div
        className={
          'relative h-20 w-16 overflow-hidden rounded-lg border shadow-lg ' +
          (accent ? 'border-blue-500/40' : 'border-slate-700/80')
        }
        style={{ animation: 'flip-tick 0.6s ease-in-out' }}
      >
        <div className="absolute inset-x-0 top-1/2 z-10 h-px bg-slate-950" />
        <div className={'h-1/2 overflow-hidden ' + (accent ? 'bg-blue-900/40' : 'bg-slate-800/90')}>
          <div className="flex h-20 items-center justify-center">
            <span className={digitClass}>{value}</span>
          </div>
        </div>
        <div className={'h-1/2 overflow-hidden ' + (accent ? 'bg-blue-950/80' : 'bg-slate-900/95')}>
          <div className="-mt-10 flex h-20 items-center justify-center">
            <span className={digitClass}>{value}</span>
          </div>
        </div>
      </div>
      <span
        className={
          'mt-2 font-mono text-[9px] font-semibold tracking-wider ' +
          (accent ? 'text-blue-400' : 'text-slate-400')
        }
      >
        {label}
      </span>
    </div>
  );
};

export const FlipCountdown = () => {
  const [total, setTotal] = useState(((8 * 24 + 14) * 60 + 27) * 60 + 9);
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
    { value: String(Math.floor((total % 86400) / 3600)).padStart(2, '0'), label: 'HORAS', accent: false },
    { value: String(Math.floor((total % 3600) / 60)).padStart(2, '0'), label: 'MIN', accent: false },
    { value: String(total % 60).padStart(2, '0'), label: 'SEG', accent: true },
  ];

  return (
    <>
      <style>{'@keyframes flip-tick { 0% { transform: rotateX(0deg); } 45% { transform: rotateX(-82deg); } 100% { transform: rotateX(0deg); } }'}</style>
      <div
        role="timer"
        aria-live="off"
        aria-label="Cuenta regresiva estilo split-flap"
        className="flex items-center justify-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-6 [perspective:600px]"
      >
        {units.map((unit, i) => (
          <div key={unit.label} className="flex items-center gap-3">
            {i > 0 && (
              <span
                aria-hidden="true"
                className={'mb-5 text-2xl font-bold ' + (unit.accent ? 'animate-pulse text-blue-500' : 'text-slate-500')}
              >
                :
              </span>
            )}
            <div key={unit.value}>
              <FlapCell value={unit.value} label={unit.label} accent={unit.accent} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
`;
