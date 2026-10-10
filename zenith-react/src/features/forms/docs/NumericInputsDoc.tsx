import { ComponentDoc } from '../../../shared/components/doc';
import { LabeledRange, StepperInput, TextInput } from '../components';
import {
  NUMERIC_INPUTS_HTML,
  NUMERIC_INPUTS_TSX,
} from '../snippets';

export function NumericInputsDoc() {
  return (
    <ComponentDoc
      title="Campos numéricos, fechas & rangos"
      description="Stepper, selector de fecha y slider de rango con valor dinámico."
      preview={
        <div className="w-full space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <StepperInput label="Capacidad Máxima (Stepper)" />
            <TextInput label="Selector de Fecha" defaultValue="20/11/2025" />
          </div>
          <LabeledRange label="Límite de Aforo Dinámico" />
        </div>
      }
      htmlCode={NUMERIC_INPUTS_HTML}
      jsxCode={NUMERIC_INPUTS_TSX}
    />
  );
}
