import { ComponentDoc } from '../../../shared/components/doc';
import { Tabs } from '../components';
import type { TabItem } from '../components';
import { ICON_TABS_HTML, ICON_TABS_TSX } from '../snippets';

const TABS: TabItem[] = [
  { id: 'resumen', label: 'Resumen', icon: 'dashboard', content: 'Vista general con métricas del sprint.' },
  { id: 'actividad', label: 'Actividad', icon: 'timeline', content: 'Historial de cambios y comentarios.' },
  { id: 'ajustes', label: 'Ajustes', icon: 'settings', content: 'Preferencias del espacio de trabajo.' },
];

export const IconTabsDoc = () => {
  return (
    <ComponentDoc
      title="Con iconos"
      description="Cada pestaña combina icono material-symbols con etiqueta: el icono activo se tiñe de azul y queda oculto a lectores con aria-hidden."
      preview={
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4">
          <Tabs tabs={TABS} />
        </div>
      }
      htmlCode={ICON_TABS_HTML}
      jsxCode={ICON_TABS_TSX}
      maxWidth="4xl"
    />
  );
};
