export const ORDER_TRACKING_FLOW_HTML = `
<div class="grid w-full gap-4 lg:grid-cols-[280px_1fr]">
  <div class="rounded-lg border border-slate-200 bg-white p-4">
    <p class="font-mono text-[11px] tracking-wide text-slate-500">PEDIDO #8492 · SIMULADO</p>
    <ol aria-label="Progreso de pasos" class="mt-2 flex w-full flex-col gap-0">
      <li>
        <span class="block p-1">
          <span class="flex items-start gap-3">
            <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-600 text-white">
              <span aria-hidden="true" class="material-symbols-outlined text-[18px]">check</span>
            </span>
            <span><span class="block text-sm font-medium text-slate-900">Pedido recibido</span><span class="block text-xs text-slate-500">12 may · 10:24</span></span>
          </span>
          <span aria-hidden="true" class="ml-4 flex h-8 w-px flex-col"><span class="w-px flex-1 bg-blue-600"></span></span>
        </span>
      </li>
      <li aria-current="step">
        <span class="block p-1">
          <span class="flex items-start gap-3">
            <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100">
              <span aria-hidden="true" class="material-symbols-outlined text-[18px]">local_shipping</span>
            </span>
            <span><span class="block text-sm font-semibold text-blue-700">En reparto</span><span class="block text-xs text-slate-500">Hoy · 14:05 · Madrid</span></span>
          </span>
        </span>
      </li>
    </ol>
  </div>
  <div class="rounded-lg border border-slate-200 bg-white p-4">
    <h3 class="text-sm font-semibold text-slate-900">En reparto</h3>
    <p class="text-xs text-slate-500">Hoy · 14:05 · Madrid</p>
    <p class="text-sm text-slate-600">El repartidor lleva 8 paradas por delante. Ventana estimada 17:30–18:30.</p>
  </div>
</div>
`;

export const ORDER_TRACKING_FLOW_TSX = `
import { useState } from 'react';

export const OrderTrackingFlow = () => {
  const events = [
    { label: 'Pedido recibido', meta: '12 may · 10:24', detail: 'Pago de 84,99 € confirmado.', icon: 'receipt_long' },
    { label: 'Preparando', meta: '12 may · 12:40', detail: 'Bulto 1/1 · 0,8 kg.', icon: 'inventory_2' },
    { label: 'En reparto', meta: 'Hoy · 14:05 · Madrid', detail: '8 paradas por delante.', icon: 'local_shipping' },
    { label: 'Entregado', meta: 'Estimado hoy 18:00', detail: 'Requiere firma.', icon: 'home' },
  ];
  const [current, setCurrent] = useState(2);
  const [notified, setNotified] = useState(false);
  const progress = Math.round(((current + 1) / events.length) * 100);
  const active = events[current];

  return (
    <div className="grid w-full gap-4 lg:grid-cols-[280px_1fr]">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="font-mono text-[11px] tracking-wide text-slate-500">PEDIDO #8492 · SIMULADO</p>
        <ol aria-label="Progreso de pasos" className="mt-2 flex w-full flex-col gap-0">
          {events.map((event, index) => {
            const status = index < current ? 'completed' : index === current ? 'active' : 'pending';
            const circle =
              status === 'completed'
                ? 'border-blue-600 bg-blue-600 text-white'
                : status === 'active'
                  ? 'border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100'
                  : 'border-slate-300 bg-white text-slate-400';
            return (
              <li key={event.label} aria-current={status === 'active' ? 'step' : undefined}>
                <button type="button" onClick={() => setCurrent(index)} className="block w-full p-1 text-left">
                  <span className="flex items-start gap-3">
                    <span aria-hidden="true" className={'flex h-8 w-8 items-center justify-center rounded-full border-2 ' + circle}>
                      {status === 'completed' ? (
                        <span className="material-symbols-outlined text-[18px]">check</span>
                      ) : status === 'active' ? (
                        <span className="material-symbols-outlined text-[18px]">{event.icon}</span>
                      ) : (
                        <span className="text-[13px] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                      )}
                    </span>
                    <span>
                      <span className="block text-sm text-slate-900">{event.label}</span>
                      <span className="block text-xs text-slate-500">{event.meta}</span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
        <button
          type="button"
          onClick={() => setCurrent((c) => Math.min(events.length - 1, c + 1))}
          className="mt-3 w-full rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white"
        >
          Simular avance
        </button>
      </div>
      <div key={current?.label} className="animate-step-panel-in rounded-lg border border-slate-200 bg-white p-4">
        <h3 className="text-sm font-semibold text-slate-900">{active?.label}</h3>
        <p className="text-xs text-slate-500">{active?.meta}</p>
        <p className="text-sm text-slate-600">{active?.detail}</p>
        <p className="mt-2 font-mono text-[11px] text-blue-700">{progress}%</p>
        <button
          type="button"
          onClick={() => setNotified(true)}
          className="mt-3 w-full rounded-md border px-3 py-1.5 text-sm"
        >
          {notified ? 'Aviso activado (simulado)' : 'Avisarme al entregar'}
        </button>
      </div>
    </div>
  );
};
`;
