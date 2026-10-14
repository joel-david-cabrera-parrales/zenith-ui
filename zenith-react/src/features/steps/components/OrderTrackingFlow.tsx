import { useState } from 'react';
import { Steps } from './Steps';

interface TrackingEvent {
  label: string;
  meta: string;
  detail: string;
  icon: string;
}

const TRACKING_EVENTS: TrackingEvent[] = [
  { label: 'Pedido recibido', meta: '12 may · 10:24', detail: 'Confirmamos el pago de 84,99 € y reservamos el stock en el almacén Madrid-Norte.', icon: 'receipt_long' },
  { label: 'Preparando', meta: '12 may · 12:40', detail: 'Auriculares + funda empaquetados. Bulto 1/1 · 0,8 kg. Etiqueta generada.', icon: 'inventory_2' },
  { label: 'En reparto', meta: 'Hoy · 14:05 · Madrid', detail: 'El repartidor lleva 8 paradas por delante. Ventana estimada 17:30–18:30.', icon: 'local_shipping' },
  { label: 'Entregado', meta: 'Estimado hoy 18:00', detail: 'Requiere firma de Ada. Código de entrega 4821 (simulado).', icon: 'home' },
];

export const OrderTrackingFlow = () => {
  const [current, setCurrent] = useState(2);
  const [expanded, setExpanded] = useState(true);
  const [notified, setNotified] = useState(false);

  const progress = Math.round(((current + 1) / TRACKING_EVENTS.length) * 100);
  const active = TRACKING_EVENTS[current];

  const steps = TRACKING_EVENTS.map((e) => ({ label: e.label, description: e.meta, icon: e.icon }));

  const simulate = () => {
    setCurrent((c) => Math.min(TRACKING_EVENTS.length - 1, c + 1));
  };

  const reset = () => {
    setCurrent(0);
    setNotified(false);
  };

  return (
    <div className="grid w-full gap-4 lg:grid-cols-[280px_1fr]">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="font-mono text-[11px] tracking-wide text-slate-500">PEDIDO #8492 · SIMULADO</p>
        <div className="mt-2">
          <Steps orientation="vertical" steps={steps} current={current} onStepChange={setCurrent} />
        </div>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={simulate}
            disabled={current === TRACKING_EVENTS.length - 1}
            className="flex-1 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-40"
          >
            Simular avance
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Reiniciar
          </button>
        </div>
      </div>
      <div key={current} className="animate-step-panel-in space-y-3 rounded-lg border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">{active?.label}</h3>
          <span className="rounded-full bg-blue-50 px-2.5 py-1 font-mono text-[11px] font-semibold text-blue-700 tabular-nums">{progress}%</span>
        </div>
        <div aria-hidden="true" className="h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-xs text-slate-500">{active?.meta}</p>
        <p className="text-sm text-slate-600">{active?.detail}</p>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="flex items-center gap-1 text-xs font-medium text-blue-700 hover:underline"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[16px]">{expanded ? 'expand_less' : 'expand_more'}</span>
          {expanded ? 'Ocultar detalle del bulto' : 'Ver detalle del bulto'}
        </button>
        {expanded && (
          <dl className="grid grid-cols-2 gap-2 rounded-md bg-slate-50 p-3 text-xs">
            <div><dt className="text-slate-500">Destinatario</dt><dd className="font-medium text-slate-900">Ada Lovelace</dd></div>
            <div><dt className="text-slate-500">Dirección</dt><dd className="font-medium text-slate-900">Calle Mayor 12, Madrid</dd></div>
            <div><dt className="text-slate-500">Bulto</dt><dd className="font-medium text-slate-900 tabular-nums">1/1 · 0,8 kg</dd></div>
            <div><dt className="text-slate-500">Repartidor</dt><dd className="font-medium text-slate-900">Ruta M-14 · 8 paradas</dd></div>
          </dl>
        )}
        <button
          type="button"
          onClick={() => setNotified(true)}
          disabled={notified}
          className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60"
        >
          {notified ? 'Aviso activado: te avisaremos al entregar (simulado)' : 'Avisarme al entregar'}
        </button>
      </div>
    </div>
  );
};
