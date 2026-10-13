import { ComponentDoc } from '../../../shared/components/doc';
import { DeepSidebarAccordion } from '../components';
import { DEEP_SIDEBAR_HTML, DEEP_SIDEBAR_TSX } from '../snippets';

export const DeepSidebarAccordionDoc = () => {
  return (
    <ComponentDoc
      title="Sidebar de 4 niveles"
      description="Área → grupo → sección → links con triple indentación y etiquetas mono en el tercer nivel. Single-open en cada nivel."
      preview={
        <div className="flex justify-center">
          <DeepSidebarAccordion />
        </div>
      }
      htmlCode={DEEP_SIDEBAR_HTML}
      jsxCode={DEEP_SIDEBAR_TSX}
    />
  );
};
