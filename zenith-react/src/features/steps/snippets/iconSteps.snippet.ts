export const ICON_STEPS_HTML = `
<ol aria-label="Progreso de pasos" class="flex w-full items-start">
  <li class="flex flex-1 items-start" aria-current="step">
    <span class="flex flex-col items-center gap-2 p-1 text-center">
      <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100">
        <span aria-hidden="true" class="material-symbols-outlined text-[18px]">shopping_cart</span>
      </span>
      <span class="min-w-0">
        <span class="block truncate text-sm font-semibold text-blue-700">Carrito</span>
        <span class="mt-0.5 block truncate text-xs text-slate-500">2 artículos</span>
      </span>
    </span>
    <span aria-hidden="true" class="mx-2 mt-4 h-0.5 min-w-6 flex-1"><span class="block h-0.5 w-full bg-slate-200"></span></span>
  </li>
  <li class="flex flex-none items-start">
    <span class="flex flex-col items-center gap-2 p-1 text-center">
      <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-400">
        <span class="text-[13px] tabular-nums">02</span>
      </span>
      <span class="min-w-0">
        <span class="block truncate text-sm font-medium text-slate-400">Envío</span>
        <span class="mt-0.5 block truncate text-xs text-slate-500">Dirección de entrega</span>
      </span>
    </span>
  </li>
</ol>
`;

export const ICON_STEPS_TSX = `
import { useState } from 'react';

export const IconSteps = () => {
  const steps = [
    { label: 'Carrito', description: '2 artículos', icon: 'shopping_cart' },
    { label: 'Envío', description: 'Dirección de entrega', icon: 'local_shipping' },
    { label: 'Pago', description: 'Tarjeta o PayPal', icon: 'credit_card' },
  ];
  const [current, setCurrent] = useState(0);

  return (
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
            <button
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={'Ir al paso ' + (index + 1) + ': ' + step.label}
              className="flex flex-col items-center gap-2 rounded-md p-1 text-center hover:bg-slate-50"
            >
              <span aria-hidden="true" className={'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ' + circle}>
                {status === 'completed' ? (
                  <span className="material-symbols-outlined text-[18px]">check</span>
                ) : status === 'active' ? (
                  <span className="material-symbols-outlined text-[18px]">{step.icon}</span>
                ) : (
                  <span className="text-[13px] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                )}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-slate-900">{step.label}</span>
                <span className="mt-0.5 block truncate text-xs text-slate-500">{step.description}</span>
              </span>
            </button>
            {!isLast && (
              <span aria-hidden="true" className="mx-2 mt-4 h-0.5 min-w-6 flex-1">
                <span className={'block h-0.5 w-full ' + (index < current ? 'bg-blue-600' : 'bg-slate-200')} />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
};
`;
