import { ComponentDoc } from '../../../shared/components/doc';
import { StepDots } from '../components';
import { STEP_DOTS_HTML, STEP_DOTS_TSX } from '../snippets';

export function StepDotsDoc() {
  return (
    <ComponentDoc
      title="Micro-indicadores lineales"
      description="Dots de walkthrough con indicador DIAPOSITIVA NN/MM y flechas rápidas."
      preview={
        <div className="w-full rounded-xl border border-slate-200 bg-white p-6">
          <StepDots />
        </div>
      }
      htmlCode={STEP_DOTS_HTML}
      jsxCode={STEP_DOTS_TSX}
    />
  );
}
