import { ComponentDoc } from '../../../shared/components/doc';
import { Tabs } from '../components';
import type { TabItem } from '../components';
import { SIZES_TABS_HTML, SIZES_TABS_TSX } from '../snippets';

const TABS: TabItem[] = [
  { id: 'resumen', label: 'Resumen', content: 'Contenido de resumen.' },
  { id: 'actividad', label: 'Actividad', content: 'Contenido de actividad.' },
  { id: 'ajustes', label: 'Ajustes', content: 'Contenido de ajustes.' },
];

export const SizesTabsDoc = () => {
  return (
    <ComponentDoc
      title="Tamaños"
      description="Tres tallas: pequeña para toolbars densas, mediana como default de formularios y grande para cabeceras de sección."
      preview={
        <div className="w-full space-y-6 rounded-xl border border-slate-200 bg-white p-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Pequeña</p>
            <Tabs tabs={TABS} size="sm" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Mediana</p>
            <Tabs tabs={TABS} size="md" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Grande</p>
            <Tabs tabs={TABS} size="lg" />
          </div>
        </div>
      }
      htmlCode={SIZES_TABS_HTML}
      jsxCode={SIZES_TABS_TSX}
      maxWidth="4xl"
    />
  );
};
