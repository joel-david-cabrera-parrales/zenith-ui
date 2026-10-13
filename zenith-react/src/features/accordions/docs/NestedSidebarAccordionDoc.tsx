import { ComponentDoc } from '../../../shared/components/doc';
import { NestedSidebarAccordion } from '../components';
import { NESTED_SIDEBAR_HTML, NESTED_SIDEBAR_TSX } from '../snippets';

export const NestedSidebarAccordionDoc = () => {
  return (
    <ComponentDoc
      title="Sidebar de 3 niveles"
      description="Grupo → sección → links con guía lateral y single-open por nivel. Secciones indentadas con borde-guía que se tiñe al abrir."
      preview={
        <div className="flex justify-center">
          <NestedSidebarAccordion />
        </div>
      }
      htmlCode={NESTED_SIDEBAR_HTML}
      jsxCode={NESTED_SIDEBAR_TSX}
    />
  );
};
