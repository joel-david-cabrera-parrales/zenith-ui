import { ComponentDoc } from '../../../shared/components/doc';
import { ActionsAccordion } from '../components';
import { ACTIONS_HTML, ACTIONS_TSX } from '../snippets';

export const ActionsAccordionDoc = () => {
  return (
    <ComponentDoc
      title="Acciones + fila bloqueada"
      description="Clave API con botón copiar (feedback 1.5s), ver docs y fila revocada deshabilitada."
      preview={
        <div className="mx-auto w-full max-w-2xl">
          <ActionsAccordion />
        </div>
      }
      htmlCode={ACTIONS_HTML}
      jsxCode={ACTIONS_TSX}
    />
  );
};
