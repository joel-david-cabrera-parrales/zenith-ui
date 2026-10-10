import { ComponentDoc } from '../../../shared/components/doc';
import { WizardStepper } from '../components';
import { WIZARD_STEPPER_HTML, WIZARD_STEPPER_TSX } from '../snippets';

export const WizardStepperDoc = () => {
  return (
    <ComponentDoc
      title="Wizard multietapa numerado"
      description="Estados completado, activo y pendiente con barra de acciones Anterior / Guardar / Continuar."
      preview={
        <div className="w-full rounded-xl border border-slate-200 bg-white p-6">
          <WizardStepper />
        </div>
      }
      htmlCode={WIZARD_STEPPER_HTML}
      jsxCode={WIZARD_STEPPER_TSX}
    />
  );
}
