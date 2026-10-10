import { useState } from 'react';

export interface StepDotsProps {
  total?: number;
  defaultStep?: number;
}

export function StepDots({ total = 5, defaultStep = 2 }: StepDotsProps) {
  const [active, setActive] = useState(defaultStep);

  return (
    <div className="flex w-full flex-col items-center justify-between gap-6 rounded-xl border border-slate-200 bg-slate-100/50 p-4 sm:flex-row">
      <div className="flex items-center gap-2">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            type="button"
            title={`Paso ${i + 1}${i < active ? ' (Completado)' : i === active ? ' (Activo actual)' : ''}`}
            aria-label={`Ir al paso ${i + 1}`}
            onClick={() => setActive(i)}
            className={
              i < active
                ? 'h-2 w-8 rounded-full bg-blue-400 transition-all'
                : i === active
                  ? 'h-2.5 w-12 rounded-full bg-blue-600 shadow-sm transition-all'
                  : 'h-2 w-8 rounded-full bg-slate-300 transition-all hover:bg-slate-400'
            }
          />
        ))}
      </div>
      <div className="font-mono text-sm text-slate-600">
        DIAPOSITIVA <span className="font-bold text-blue-600">{String(active + 1).padStart(2, '0')}</span> /{' '}
        {String(total).padStart(2, '0')}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Diapositiva anterior"
          onClick={() => setActive((v) => Math.max(0, v - 1))}
          disabled={active === 0}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-40"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-base">
            chevron_left
          </span>
        </button>
        <button
          type="button"
          aria-label="Diapositiva siguiente"
          onClick={() => setActive((v) => Math.min(total - 1, v + 1))}
          disabled={active === total - 1}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-40"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-base">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}
