import { ComponentDoc } from '../../../shared/components/doc';
import { SidebarAccordion } from '../components';
import { SIDEBAR_HTML, SIDEBAR_TSX } from '../snippets';

export const SidebarAccordionDoc = () => {
  return (
    <ComponentDoc
      title="Sidebar con acordeones"
      description="Navegación lateral ancha con grupos plegables single-open (abrir uno cierra los demás), link activo con aria-current, badges de conteo y footer de usuario."
      preview={
        <div className="flex justify-center">
          <SidebarAccordion />
        </div>
      }
      htmlCode={SIDEBAR_HTML}
      jsxCode={SIDEBAR_TSX}
    />
  );
};
