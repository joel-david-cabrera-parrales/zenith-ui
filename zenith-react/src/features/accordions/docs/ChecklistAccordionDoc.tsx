import { ComponentDoc } from '../../../shared/components/doc';
import { ChecklistAccordion } from '../components';
import { CHECKLIST_HTML, CHECKLIST_TSX } from '../snippets';

export const ChecklistAccordionDoc = () => {
  return (
    <ComponentDoc
      title="Checklist con progreso"
      description="Onboarding con barra de progreso viva según checks. Progressbar accesible con valores numéricos."
      preview={
        <div className="mx-auto w-full max-w-2xl">
          <ChecklistAccordion />
        </div>
      }
      htmlCode={CHECKLIST_HTML}
      jsxCode={CHECKLIST_TSX}
    />
  );
};
