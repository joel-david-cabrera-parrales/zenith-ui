import { ComponentDoc } from '../../../shared/components/doc';
import { Accordion } from '../components';
import { ACCORDION_HTML, ACCORDION_TSX } from '../snippets';

export const AccordionDoc = () => {
  return (
    <ComponentDoc
      title="Acordeón base"
      description="Tres secciones con lorem corto, una abierta por defecto. Toggle single-open con useState, a11y con aria-expanded y regiones."
      preview={
        <div className="mx-auto w-full max-w-2xl">
          <Accordion />
        </div>
      }
      htmlCode={ACCORDION_HTML}
      jsxCode={ACCORDION_TSX}
    />
  );
};
