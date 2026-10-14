import { ComponentDoc } from '../../../shared/components/doc';
import { Tabs } from '../components';
import type { TabItem } from '../components';
import { VERTICAL_TABS_HTML, VERTICAL_TABS_TSX } from '../snippets';

const TABS: TabItem[] = [
  { id: 'general', label: 'General', icon: 'tune', content: 'Nombre, descripción y visibilidad del espacio de trabajo.' },
  { id: 'miembros', label: 'Miembros', icon: 'group', content: '24 miembros, 3 invitaciones pendientes de aceptar.' },
  { id: 'permisos', label: 'Permisos', icon: 'lock', content: 'Roles por defecto y accesos a módulos sensibles.' },
];

export const VerticalTabsDoc = () => {
  return (
    <ComponentDoc
      title="Orientación vertical"
      description="Snippet reutilizable para navegación lateral: columna fija de 208px en desktop que colapsa encima del panel en móvil."
      preview={
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4">
          <Tabs tabs={TABS} orientation="vertical" />
        </div>
      }
      htmlCode={VERTICAL_TABS_HTML}
      jsxCode={VERTICAL_TABS_TSX}
      maxWidth="4xl"
    />
  );
};
