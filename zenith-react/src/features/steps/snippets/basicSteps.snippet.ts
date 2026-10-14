export const BASIC_STEPS_HTML = `
<ol aria-label="Progreso de pasos" class="flex w-full items-start">
  <li class="flex flex-1 items-start">
    <span class="flex flex-col items-center gap-2 p-1 text-center">
      <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-600 text-white">
        <span aria-hidden="true" class="material-symbols-outlined text-[18px]">check</span>
      </span>
      <span class="min-w-0">
        <span class="block truncate text-sm font-medium text-slate-900">Cuenta</span>
        <span class="mt-0.5 block truncate text-xs text-slate-500">Crea tu cuenta</span>
      </span>
    </span>
    <span aria-hidden="true" class="mx-2 mt-4 h-0.5 min-w-6 flex-1">
      <span class="block h-0.5 w-full bg-blue-600"></span>
    </span>
  </li>
  <li class="flex flex-1 items-start" aria-current="step">
    <span class="flex flex-col items-center gap-2 p-1 text-center">
      <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100 text-sm font-semibold">
        <span class="text-[13px] tabular-nums">02</span>
      </span>
      <span class="min-w-0">
        <span class="block truncate text-sm font-semibold text-blue-700">Perfil</span>
        <span class="mt-0.5 block truncate text-xs text-slate-500">Completa tus datos</span>
      </span>
    </span>
    <span aria-hidden="true" class="mx-2 mt-4 h-0.5 min-w-6 flex-1">
      <span class="block h-0.5 w-full bg-slate-200"></span>
    </span>
  </li>
  <li class="flex flex-1 items-start">
    <span class="flex flex-col items-center gap-2 p-1 text-center">
      <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-400 text-sm font-semibold">
        <span class="text-[13px] tabular-nums">03</span>
      </span>
      <span class="min-w-0">
        <span class="block truncate text-sm font-medium text-slate-400">Plan</span>
        <span class="mt-0.5 block truncate text-xs text-slate-500">Elige tu plan</span>
      </span>
    </span>
    <span aria-hidden="true" class="mx-2 mt-4 h-0.5 min-w-6 flex-1">
      <span class="block h-0.5 w-full bg-slate-200"></span>
    </span>
  </li>
  <li class="flex flex-none items-start">
    <span class="flex flex-col items-center gap-2 p-1 text-center">
      <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-400 text-sm font-semibold">
        <span class="text-[13px] tabular-nums">04</span>
      </span>
      <span class="min-w-0">
        <span class="block truncate text-sm font-medium text-slate-400">Confirmar</span>
        <span class="mt-0.5 block truncate text-xs text-slate-500">Revisa y confirma</span>
      </span>
    </span>
  </li>
</ol>
`;

export const BASIC_STEPS_TSX = `
import { useState } from 'react';

export const BasicSteps = () => {
  const steps = [
    { label: 'Cuenta', description: 'Crea tu cuenta' },
    { label: 'Perfil', description: 'Completa tus datos' },
    { label: 'Plan', description: 'Elige tu plan' },
    { label: 'Confirmar', description: 'Revisa y confirma' },
  ];
  const [current, setCurrent] = useState(1);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(steps.length - 1, c + 1));

  return (
    <div className="w-full space-y-4">
      <ol aria-label="Progreso de pasos" className="flex w-full items-start">
        {steps.map((step, index) => {
          const status = index < current ? 'completed' : index === current ? 'active' : 'pending';
          const isLast = index === steps.length - 1;
          const circle =
            status === 'completed'
              ? 'border-blue-600 bg-blue-600 text-white'
              : status === 'active'
                ? 'border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100'
                : 'border-slate-300 bg-white text-slate-400';
          return (
            <li key={step.label} aria-current={status === 'active' ? 'step' : undefined} className="flex flex-1 items-start last:flex-none">
              <span className="flex flex-col items-center gap-2 p-1 text-center">
                <span aria-hidden="true" className={'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold ' + circle}>
                  {status === 'completed' ? (
                    <span className="material-symbols-outlined text-[18px]">check</span>
                  ) : (
                    <span className="text-[13px] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                  )}
                </span>
                <span className="min-w-0">
                  <span className={status === 'pending' ? 'block truncate text-sm font-medium text-slate-400' : status === 'active' ? 'block truncate text-sm font-semibold text-blue-700' : 'block truncate text-sm font-medium text-slate-900'}>
                    {step.label}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-slate-500">{step.description}</span>
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
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={prev}
          disabled={current === 0}
          className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 disabled:opacity-40"
        >
          Anterior
        </button>
        <p className="text-xs text-slate-500 tabular-nums">
          Paso {current + 1} de {steps.length}
        </p>
        <button
          type="button"
          onClick={next}
          disabled={current === steps.length - 1}
          className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-40"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
`;
