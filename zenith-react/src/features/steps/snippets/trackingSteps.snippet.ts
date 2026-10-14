export const TRACKING_STEPS_HTML = `
<ol aria-label="Progreso de pasos" class="flex w-full flex-col gap-0">
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
`;

export const TRACKING_STEPS_TSX = `
import { useState } from 'react';

export const TrackingSteps = () => {
  const events = [
    { label: 'Pedido recibido', meta: '12 may · 10:24', icon: 'receipt_long' },
    { label: 'Preparando', meta: '12 may · 12:40', icon: 'inventory_2' },
    { label: 'En reparto', meta: 'Hoy · 14:05 · Madrid', icon: 'local_shipping' },
    { label: 'Entregado', meta: 'Estimado hoy 18:00', icon: 'home' },
  ];
  const [current, setCurrent] = useState(2);

  return (
    <div className="w-full max-w-sm space-y-3 rounded-lg border border-slate-200 p-4">
      <p className="font-mono text-[11px] tracking-wide text-slate-500">PEDIDO #8492 · SEGUIMIENTO</p>
      <ol aria-label="Progreso de pasos" className="flex w-full flex-col gap-0">
        {events.map((event, index) => {
          const status = index < current ? 'completed' : index === current ? 'active' : 'pending';
          const isLast = index === events.length - 1;
          const circle =
            status === 'completed'
              ? 'border-blue-600 bg-blue-600 text-white'
              : status === 'active'
                ? 'border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100'
                : 'border-slate-300 bg-white text-slate-400';
          return (
            <li key={event.label} aria-current={status === 'active' ? 'step' : undefined} className={!isLast ? 'pb-1' : ''}>
              <span className="block p-1">
                <span className="flex items-start gap-3">
                  <span aria-hidden="true" className={'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ' + circle}>
                    {status === 'completed' ? (
                      <span className="material-symbols-outlined text-[18px]">check</span>
                    ) : status === 'active' ? (
                      <span className="material-symbols-outlined text-[18px]">{event.icon}</span>
                    ) : (
                      <span className="text-[13px] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                    )}
                  </span>
                  <span>
                    <span className={status === 'active' ? 'block text-sm font-semibold text-blue-700' : 'block text-sm text-slate-900'}>
                      {event.label}
                    </span>
                    <span className="block text-xs text-slate-500">{event.meta}</span>
                  </span>
                </span>
                {!isLast && (
                  <span aria-hidden="true" className="ml-4 flex h-8 w-px flex-col">
                    <span className={'w-px flex-1 ' + (index < current ? 'bg-blue-600' : 'bg-slate-200')} />
                  </span>
                )}
              </span>
            </li>
          );
        })}
      </ol>
      <button
        type="button"
        onClick={() => setCurrent((c) => Math.min(events.length - 1, c + 1))}
        disabled={current === events.length - 1}
        className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm disabled:opacity-40"
      >
        Simular avance
      </button>
    </div>
  );
};
`;
