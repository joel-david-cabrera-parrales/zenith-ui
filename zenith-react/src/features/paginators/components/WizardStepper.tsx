import { useState } from 'react';

export interface WizardStep {
  title: string;
  code: string;
}

export interface WizardStepperProps {
  steps?: WizardStep[];
  defaultStep?: number;
}

const DEFAULT_STEPS: WizardStep[] = [
  { title: 'Configuración Base', code: 'PASO 01 // OK' },
  { title: 'Validación de Esquema', code: 'PASO 02 // ACTIVO' },
  { title: 'Despliegue a Producción', code: 'PASO 03 // PENDIENTE' },
];

export function WizardStepper({ steps = DEFAULT_STEPS, defaultStep = 1 }: WizardStepperProps) {
  const [active, setActive] = useState(defaultStep);

  return (
    <div className="w-full">
      <div className="px-2 py-4">
        <div className="relative flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          {steps.map((step, i) => {
            const done = i < active;
            const current = i === active;
            return (
              <div key={step.title} className="z-10 flex w-full items-center gap-3 bg-white sm:w-auto">
                <div
                  className={
                    done
                      ? 'flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white shadow-sm ring-4 ring-emerald-200/50'
                      : current
                        ? 'flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-md ring-4 ring-blue-200'
                        : 'flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-sm font-bold text-slate-500 opacity-60'
                  }
                >
                  {done ? (
                    <span aria-hidden="true" className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check
                    </span>
                  ) : (
                    i + 1
                  )}
                </div>
                <div>
                  <div
                    className={
                      done
                        ? 'font-mono text-xs font-semibold text-emerald-600'
                        : current
                          ? 'font-mono text-xs font-semibold text-blue-600'
                          : 'font-mono text-xs text-slate-400'
                    }
                  >
                    {step.code}
                  </div>
                  <div className="text-sm font-semibold text-slate-900">{step.title}</div>
                </div>
                {i < steps.length - 1 ? (
                  <div
                    aria-hidden="true"
                    className={`mx-2 hidden h-[2px] flex-1 sm:block ${i < active ? 'bg-emerald-500' : 'bg-slate-200'}`}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
        <button
          type="button"
          onClick={() => setActive((v) => Math.max(0, v - 1))}
          disabled={active === 0}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-40"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-base">
            arrow_back
          </span>
          <span>Paso Anterior</span>
        </button>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
          >
            Guardar Borrador
          </button>
          <button
            type="button"
            onClick={() => setActive((v) => Math.min(steps.length - 1, v + 1))}
            disabled={active >= steps.length - 1}
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-40"
          >
            <span>Validar y Continuar</span>
            <span aria-hidden="true" className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
