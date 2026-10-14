export const VERTICAL_STEPS_HTML = `
<ol aria-label="Progreso de pasos" class="flex w-full flex-col gap-0">
  <li>
    <span class="block p-1">
      <span class="flex items-start gap-3">
        <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-600 text-white">
          <span aria-hidden="true" class="material-symbols-outlined text-[18px]">check</span>
        </span>
        <span class="min-w-0">
          <span class="block truncate text-sm font-medium text-slate-900">Cuenta</span>
          <span class="mt-0.5 block truncate text-xs text-slate-500">Crea tu cuenta</span>
        </span>
      </span>
      <span aria-hidden="true" class="ml-4 flex h-8 w-px flex-col"><span class="w-px flex-1 bg-blue-600"></span></span>
    </span>
  </li>
  <li aria-current="step">
    <span class="block p-1">
      <span class="flex items-start gap-3">
        <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100 text-sm font-semibold">
          <span class="text-[13px] tabular-nums">02</span>
        </span>
        <span class="min-w-0">
          <span class="block truncate text-sm font-semibold text-blue-700">Perfil</span>
          <span class="mt-0.5 block truncate text-xs text-slate-500">Completa tus datos</span>
        </span>
      </span>
      <span aria-hidden="true" class="ml-4 flex h-8 w-px flex-col"><span class="w-px flex-1 bg-slate-200"></span></span>
    </span>
  </li>
  <li>
    <span class="block p-1">
      <span class="flex items-start gap-3">
        <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-400 text-sm font-semibold">
          <span class="text-[13px] tabular-nums">03</span>
        </span>
        <span class="min-w-0">
          <span class="block truncate text-sm font-medium text-slate-400">Plan</span>
          <span class="mt-0.5 block truncate text-xs text-slate-500">Elige tu plan</span>
        </span>
      </span>
    </span>
  </li>
</ol>
`;

export const VERTICAL_STEPS_TSX = `
import { useState } from 'react';

export const VerticalSteps = () => {
  const steps = [
    { label: 'Cuenta', description: 'Crea tu cuenta' },
    { label: 'Perfil', description: 'Completa tus datos' },
    { label: 'Plan', description: 'Elige tu plan' },
  ];
  const [current, setCurrent] = useState(1);

  return (
    <div className="w-full max-w-sm space-y-4">
      <ol aria-label="Progreso de pasos" className="flex w-full flex-col gap-0">
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
            <li key={step.label} aria-current={status === 'active' ? 'step' : undefined} className={!isLast ? 'pb-1' : ''}>
              <button
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={'Ir al paso ' + (index + 1) + ': ' + step.label}
                className="w-full rounded-md p-1 text-left hover:bg-slate-50"
              >
                <span className="flex items-start gap-3">
                  <span aria-hidden="true" className={'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold ' + circle}>
                    {status === 'completed' ? (
                      <span className="material-symbols-outlined text-[18px]">check</span>
                    ) : (
                      <span className="text-[13px] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className={status === 'active' ? 'block truncate text-sm font-semibold text-blue-700' : 'block truncate text-sm font-medium text-slate-900'}>
                      {step.label}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-slate-500">{step.description}</span>
                  </span>
                </span>
                {!isLast && (
                  <span aria-hidden="true" className="ml-4 flex h-8 w-px flex-col">
                    <span className={'w-px flex-1 ' + (index < current ? 'bg-blue-600' : 'bg-slate-200')} />
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ol>
      <div className="flex items-center justify-between">
        <button type="button" onClick={() => setCurrent((c) => Math.max(0, c - 1))} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm">
          Anterior
        </button>
        <button type="button" onClick={() => setCurrent((c) => Math.min(steps.length - 1, c + 1))} className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white">
          Siguiente
        </button>
      </div>
    </div>
  );
};
`;
