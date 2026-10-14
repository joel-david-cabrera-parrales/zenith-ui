import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Steps } from '../components';
import { WIZARD_STEPS_HTML, WIZARD_STEPS_TSX } from '../snippets';

const WIZARD_STEPS = [
  { label: 'Datos', description: 'Nombre del workspace' },
  { label: 'Equipo', description: 'Invita miembros' },
  { label: 'Listo', description: 'Confirma' },
];

const WIZARD_CONTENT = [
  'Ponle nombre a tu workspace, ej. Acme Central.',
  'Añade correos separados por comas.',
  'Revisa y crea el workspace.',
];

export const WizardStepsDoc = () => {
  const [current, setCurrent] = useState(1);

  return (
    <ComponentDoc
      title="Wizard con panel"
      description="Flujo real de wizard: Steps arriba y panel de contenido por paso debajo, con Anterior / Siguiente."
      preview={
        <div className="w-full space-y-4">
          <Steps steps={WIZARD_STEPS} current={current} />
          <div key={current} className="animate-step-panel-in rounded-md border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Paso {current + 1}: {WIZARD_STEPS[current]?.label}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{WIZARD_CONTENT[current]}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40"
            >
              Anterior
            </button>
            <button
              type="button"
              onClick={() => setCurrent((c) => Math.min(WIZARD_STEPS.length - 1, c + 1))}
              disabled={current === WIZARD_STEPS.length - 1}
              className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-40"
            >
              Siguiente
            </button>
          </div>
        </div>
      }
      htmlCode={WIZARD_STEPS_HTML}
      jsxCode={WIZARD_STEPS_TSX}
      maxWidth="4xl"
    />
  );
};
