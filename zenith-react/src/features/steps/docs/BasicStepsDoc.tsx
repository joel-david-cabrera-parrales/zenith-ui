import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Steps } from '../components';
import { BASIC_STEPS_HTML, BASIC_STEPS_TSX } from '../snippets';

export const BasicStepsDoc = () => {
  const [current, setCurrent] = useState(1);

  const prev = () => {
    setCurrent((c) => Math.max(0, c - 1));
  };

  const next = () => {
    setCurrent((c) => Math.min(3, c + 1));
  };

  return (
    <ComponentDoc
      title="Steps base"
      description="Estructura base del componente Steps: contenedor ol, items con círculo, etiqueta y descripción, y tres estados (completado, activo, pendiente). Demo interactiva con Anterior / Siguiente."
      preview={
        <div className="w-full space-y-4">
          <Steps current={current} onStepChange={setCurrent} />
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={prev}
              disabled={current === 0}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-40"
            >
              Anterior
            </button>
            <p className="text-xs tabular-nums text-slate-500">
              Paso {current + 1} de 4
            </p>
            <button
              type="button"
              onClick={next}
              disabled={current === 3}
              className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-40"
            >
              Siguiente
            </button>
          </div>
        </div>
      }
      htmlCode={BASIC_STEPS_HTML}
      jsxCode={BASIC_STEPS_TSX}
      maxWidth="4xl"
    />
  );
};
