import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Steps } from '../components';
import { VERTICAL_STEPS_HTML, VERTICAL_STEPS_TSX } from '../snippets';

export const VerticalStepsDoc = () => {
  const [current, setCurrent] = useState(1);

  return (
    <ComponentDoc
      title="Steps vertical"
      description="Orientación vertical con rail lateral: círculo arriba y conector vertical de 32px. Ideal para timelines y asistentes largos."
      preview={
        <div className="w-full max-w-sm space-y-4">
          <Steps orientation="vertical" current={current} onStepChange={setCurrent} />
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Anterior
            </button>
            <button
              type="button"
              onClick={() => setCurrent((c) => Math.min(3, c + 1))}
              className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Siguiente
            </button>
          </div>
        </div>
      }
      htmlCode={VERTICAL_STEPS_HTML}
      jsxCode={VERTICAL_STEPS_TSX}
      maxWidth="4xl"
    />
  );
};
