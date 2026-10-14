import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Steps } from '../components';
import type { StepItem } from '../components';
import { ERROR_STEPS_HTML, ERROR_STEPS_TSX } from '../snippets';

export const ErrorStepsDoc = () => {
  const [resolved, setResolved] = useState(false);
  const steps: StepItem[] = [
    { label: 'Cuenta', description: 'Verificada' },
    resolved
      ? { label: 'Pago', description: 'Pendiente' }
      : { label: 'Pago', description: 'Tarjeta rechazada', status: 'error' },
    { label: 'Confirmar', description: 'Pendiente' },
  ];

  return (
    <ComponentDoc
      title="Steps con error"
      description="Variante con estado de error (rojo, icono close): bloquea el avance hasta resolver. Demo con reintentar y marcar como resuelto."
      preview={
        <div className="w-full space-y-3">
          <Steps steps={steps} current={1} />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setResolved(false)}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Reintentar pago
            </button>
            <button
              type="button"
              onClick={() => setResolved(true)}
              className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Marcar como resuelto
            </button>
          </div>
        </div>
      }
      htmlCode={ERROR_STEPS_HTML}
      jsxCode={ERROR_STEPS_TSX}
      maxWidth="4xl"
    />
  );
};
