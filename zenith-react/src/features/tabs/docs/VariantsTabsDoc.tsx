import { ComponentDoc } from '../../../shared/components/doc';
import { Tabs } from '../components';
import type { TabItem } from '../components';
import { VARIANTS_TABS_HTML, VARIANTS_TABS_TSX } from '../snippets';

const TABS: TabItem[] = [
  { id: 'resumen', label: 'Resumen', content: 'Contenido de resumen.' },
  { id: 'actividad', label: 'Actividad', content: 'Contenido de actividad.' },
  { id: 'ajustes', label: 'Ajustes', content: 'Contenido de ajustes.' },
];

export const VariantsTabsDoc = () => {
  return (
    <ComponentDoc
      title="Estilos"
      description="Tres variantes visuales: subrayado para páginas, píldoras para filtros compactos y cajas para selectores de modo."
      preview={
        <div className="w-full space-y-6 rounded-xl border border-slate-200 bg-white p-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Subrayado</p>
            <Tabs tabs={TABS} variant="underline" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Píldoras</p>
            <Tabs tabs={TABS} variant="pills" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Cajas</p>
            <Tabs tabs={TABS} variant="boxed" />
          </div>
        </div>
      }
      htmlCode={VARIANTS_TABS_HTML}
      jsxCode={VARIANTS_TABS_TSX}
      maxWidth="4xl"
    />
  );
};
