export const WIZARD_STEPS_HTML = `
<div class="w-full space-y-4">
  <ol aria-label="Progreso de pasos" class="flex w-full items-start">
    <li class="flex flex-1 items-start">
      <span class="flex flex-col items-center gap-2 p-1 text-center">
        <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-600 text-white">
          <span aria-hidden="true" class="material-symbols-outlined text-[18px]">check</span>
        </span>
        <span class="block text-sm font-medium text-slate-900">Datos</span>
      </span>
      <span aria-hidden="true" class="mx-2 mt-4 h-0.5 min-w-6 flex-1"><span class="block h-0.5 w-full bg-blue-600"></span></span>
    </li>
    <li class="flex flex-none items-start" aria-current="step">
      <span class="flex flex-col items-center gap-2 p-1 text-center">
        <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100">02</span>
        <span class="block text-sm font-semibold text-blue-700">Equipo</span>
      </span>
    </li>
  </ol>
  <div class="rounded-md border border-slate-200 bg-slate-50 p-4">
    <h3 class="text-sm font-semibold text-slate-900">Paso 2: Invita a tu equipo</h3>
    <p class="mt-1 text-sm text-slate-500">Añade correos separados por comas.</p>
  </div>
</div>
`;

export const WIZARD_STEPS_TSX = `
import { useState } from 'react';

export const WizardSteps = () => {
  const steps = [
    { label: 'Datos', description: 'Nombre del workspace', content: 'Ponle nombre a tu workspace, ej. Acme Central.' },
    { label: 'Equipo', description: 'Invita miembros', content: 'Añade correos separados por comas.' },
    { label: 'Listo', description: 'Confirma', content: 'Revisa y crea el workspace.' },
  ];
  const [current, setCurrent] = useState(1);

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
                <span aria-hidden="true" className={'flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold ' + circle}>
                  {status === 'completed' ? (
                    <span className="material-symbols-outlined text-[18px]">check</span>
                  ) : (
                    <span className="text-[13px] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                  )}
                </span>
                <span className="text-sm font-medium text-slate-900">{step.label}</span>
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
      <div key={current} className="animate-step-panel-in rounded-md border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-sm font-semibold text-slate-900">
          Paso {current + 1}: {steps[current]?.label}
        </h3>
        <p className="mt-1 text-sm text-slate-500">{steps[current]?.content}</p>
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={() => setCurrent((c) => Math.max(0, c - 1))} disabled={current === 0} className="rounded-md border px-3 py-1.5 text-sm disabled:opacity-40">
          Anterior
        </button>
        <button type="button" onClick={() => setCurrent((c) => Math.min(steps.length - 1, c + 1))} disabled={current === steps.length - 1} className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white disabled:opacity-40">
          Siguiente
        </button>
      </div>
    </div>
  );
};
`;
