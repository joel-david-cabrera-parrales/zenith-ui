export const ERROR_STEPS_HTML = `
<ol aria-label="Progreso de pasos" class="flex w-full items-start">
  <li class="flex flex-1 items-start">
    <span class="flex flex-col items-center gap-2 p-1 text-center">
      <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-600 text-white">
        <span aria-hidden="true" class="material-symbols-outlined text-[18px]">check</span>
      </span>
      <span class="min-w-0"><span class="block truncate text-sm font-medium text-slate-900">Cuenta</span></span>
    </span>
    <span aria-hidden="true" class="mx-2 mt-4 h-0.5 min-w-6 flex-1"><span class="block h-0.5 w-full bg-blue-600"></span></span>
  </li>
  <li class="flex flex-1 items-start" aria-current="step">
    <span class="flex flex-col items-center gap-2 p-1 text-center">
      <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-red-600 bg-red-600 text-white">
        <span aria-hidden="true" class="material-symbols-outlined text-[18px]">close</span>
      </span>
      <span class="min-w-0">
        <span class="block truncate text-sm font-semibold text-red-700">Pago</span>
        <span class="mt-0.5 block truncate text-xs text-red-500">Tarjeta rechazada</span>
      </span>
    </span>
    <span aria-hidden="true" class="mx-2 mt-4 h-0.5 min-w-6 flex-1"><span class="block h-0.5 w-full bg-slate-200"></span></span>
  </li>
  <li class="flex flex-none items-start">
    <span class="flex flex-col items-center gap-2 p-1 text-center">
      <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-400">
        <span class="text-[13px] tabular-nums">03</span>
      </span>
      <span class="min-w-0"><span class="block truncate text-sm font-medium text-slate-400">Confirmar</span></span>
    </span>
  </li>
</ol>
`;

export const ERROR_STEPS_TSX = `
import { useState } from 'react';

export const ErrorSteps = () => {
  const [current, setCurrent] = useState(1);
  const steps = [
    { label: 'Cuenta', description: 'Verificada' },
    { label: 'Pago', description: 'Tarjeta rechazada', status: 'error' as const },
    { label: 'Confirmar', description: 'Pendiente' },
  ];

  return (
    <div className="w-full space-y-3">
      <ol aria-label="Progreso de pasos" className="flex w-full items-start">
        {steps.map((step, index) => {
          const status = step.status === 'error' ? 'error' : index < current ? 'completed' : index === current ? 'active' : 'pending';
          const isLast = index === steps.length - 1;
          const circle =
            status === 'error'
              ? 'border-red-600 bg-red-600 text-white'
              : status === 'completed'
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'border-slate-300 bg-white text-slate-400';
          return (
            <li key={step.label} aria-current={status === 'error' ? 'step' : undefined} className="flex flex-1 items-start last:flex-none">
              <span className="flex flex-col items-center gap-2 p-1 text-center">
                <span aria-hidden="true" className={'flex h-8 w-8 items-center justify-center rounded-full border-2 ' + circle}>
                  {status === 'error' ? (
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  ) : status === 'completed' ? (
                    <span className="material-symbols-outlined text-[18px]">check</span>
                  ) : (
                    <span className="text-[13px] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                  )}
                </span>
                <span className="min-w-0">
                  <span className={status === 'error' ? 'block text-sm font-semibold text-red-700' : 'block text-sm text-slate-900'}>
                    {step.label}
                  </span>
                  <span className={status === 'error' ? 'block text-xs text-red-500' : 'block text-xs text-slate-500'}>
                    {step.description}
                  </span>
                </span>
              </span>
              {!isLast && (
                <span aria-hidden="true" className="mx-2 mt-4 h-0.5 min-w-6 flex-1">
                  <span className={'block h-0.5 w-full ' + (index < current ? 'bg-blue-600' : 'bg-slate-200')} />
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <div className="flex gap-2">
        <button type="button" onClick={() => setCurrent(1)} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm">
          Reintentar pago
        </button>
        <button type="button" onClick={() => setCurrent(2)} className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white">
          Marcar como resuelto
        </button>
      </div>
    </div>
  );
};
`;
