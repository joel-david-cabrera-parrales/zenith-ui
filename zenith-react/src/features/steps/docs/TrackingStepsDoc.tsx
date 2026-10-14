import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Steps } from '../components';
import { TRACKING_STEPS_HTML, TRACKING_STEPS_TSX } from '../snippets';

const TRACKING_STEPS = [
  { label: 'Pedido recibido', description: '12 may · 10:24', icon: 'receipt_long' },
  { label: 'Preparando', description: '12 may · 12:40', icon: 'inventory_2' },
  { label: 'En reparto', description: 'Hoy · 14:05 · Madrid', icon: 'local_shipping' },
  { label: 'Entregado', description: 'Estimado hoy 18:00', icon: 'home' },
];

export const TrackingStepsDoc = () => {
  const [current, setCurrent] = useState(2);

  return (
    <ComponentDoc
      title="Seguimiento de pedido"
      description="Caso real de tracking vertical con marcas temporales: demo con botón Simular avance hasta la entrega."
      preview={
        <div className="w-full max-w-sm space-y-3 rounded-lg border border-slate-200 p-4">
          <p className="font-mono text-[11px] tracking-wide text-slate-500">PEDIDO #8492 · SEGUIMIENTO</p>
          <Steps orientation="vertical" steps={TRACKING_STEPS} current={current} />
          <button
            type="button"
            onClick={() => setCurrent((c) => Math.min(TRACKING_STEPS.length - 1, c + 1))}
            disabled={current === TRACKING_STEPS.length - 1}
            className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40"
          >
            Simular avance
          </button>
        </div>
      }
      htmlCode={TRACKING_STEPS_HTML}
      jsxCode={TRACKING_STEPS_TSX}
      maxWidth="4xl"
    />
  );
};
