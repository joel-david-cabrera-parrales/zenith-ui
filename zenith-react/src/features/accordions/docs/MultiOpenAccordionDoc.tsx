import { ComponentDoc } from '../../../shared/components/doc';
import { MultiOpenAccordion } from '../components';
import { MULTI_OPEN_HTML, MULTI_OPEN_TSX } from '../snippets';

export const MultiOpenAccordionDoc = () => {
  return (
    <ComponentDoc
      title="Multi-apertura con toolbar"
      description="Varias secciones abiertas a la vez, contador vivo y acciones expandir todo / colapsar. Cards separadas con highlight blue."
      preview={
        <div className="mx-auto w-full max-w-2xl">
          <MultiOpenAccordion />
        </div>
      }
      htmlCode={MULTI_OPEN_HTML}
      jsxCode={MULTI_OPEN_TSX}
    />
  );
};
