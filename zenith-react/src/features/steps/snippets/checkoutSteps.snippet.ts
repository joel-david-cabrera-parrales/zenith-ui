export const CHECKOUT_STEPS_HTML = `
<div class="w-full rounded-lg border border-slate-200 p-4">
  <ol aria-label="Progreso de pasos" class="flex w-full items-start">
    <li class="flex flex-1 items-start">
      <span class="flex flex-col items-center gap-2 p-1 text-center">
        <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-600 text-white">
          <span aria-hidden="true" class="material-symbols-outlined text-[18px]">check</span>
        </span>
        <span class="block text-sm font-medium text-slate-900">Carrito</span>
      </span>
      <span aria-hidden="true" class="mx-2 mt-4 h-0.5 min-w-6 flex-1"><span class="block h-0.5 w-full bg-blue-600"></span></span>
    </li>
    <li class="flex flex-1 items-start" aria-current="step">
      <span class="flex flex-col items-center gap-2 p-1 text-center">
        <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100">
          <span aria-hidden="true" class="material-symbols-outlined text-[18px]">local_shipping</span>
        </span>
        <span class="block text-sm font-semibold text-blue-700">Envío · 4,99 €</span>
      </span>
      <span aria-hidden="true" class="mx-2 mt-4 h-0.5 min-w-6 flex-1"><span class="block h-0.5 w-full bg-slate-200"></span></span>
    </li>
    <li class="flex flex-none items-start">
      <span class="flex flex-col items-center gap-2 p-1 text-center">
        <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-400">03</span>
        <span class="block text-sm text-slate-400">Pago</span>
      </span>
    </li>
  </ol>
  <p class="mt-3 text-right text-sm text-slate-500">Total: <span class="font-semibold text-slate-900">84,99 €</span></p>
</div>
`;

export const CHECKOUT_STEPS_TSX = `
import { useState } from 'react';

export const CheckoutSteps = () => {
  const steps = [
    { label: 'Carrito', description: '2 artículos · 80 €', icon: 'shopping_cart' },
    { label: 'Envío', description: '24-48h · 4,99 €', icon: 'local_shipping' },
    { label: 'Pago', description: 'Tarjeta o PayPal', icon: 'credit_card' },
    { label: 'Revisión', description: 'Confirma el pedido', icon: 'receipt_long' },
  ];
  const [current, setCurrent] = useState(1);

  return (
    <div className="w-full space-y-3 rounded-lg border border-slate-200 p-4">
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
              <button type="button" onClick={() => setCurrent(index)} className="flex flex-col items-center gap-2 rounded-md p-1 text-center hover:bg-slate-50">
                <span aria-hidden="true" className={'flex h-8 w-8 items-center justify-center rounded-full border-2 ' + circle}>
                  {status === 'completed' ? (
                    <span className="material-symbols-outlined text-[18px]">check</span>
                  ) : status === 'active' ? (
                    <span className="material-symbols-outlined text-[18px]">{step.icon}</span>
                  ) : (
                    <span className="text-[13px] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                  )}
                </span>
                <span className="block text-sm font-medium text-slate-900">{step.label}</span>
                <span className="block text-xs text-slate-500">{step.description}</span>
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
      <div className="flex items-center justify-between border-t border-slate-100 pt-3">
        <p className="text-sm text-slate-500">Total: <span className="font-semibold text-slate-900">84,99 €</span></p>
        <button type="button" onClick={() => setCurrent((c) => Math.min(steps.length - 1, c + 1))} className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white">
          Continuar
        </button>
      </div>
    </div>
  );
};
`;
