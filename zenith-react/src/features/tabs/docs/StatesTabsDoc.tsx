import { ComponentDoc } from '../../../shared/components/doc';
import { Tabs } from '../components';
import type { TabItem } from '../components';
import { STATES_TABS_HTML, STATES_TABS_TSX } from '../snippets';

const TABS: TabItem[] = [
  { id: 'activa', label: 'Activa', content: 'Pestaña seleccionada: texto azul con barra inferior.' },
  { id: 'inactiva', label: 'Inactiva (hover)', content: 'Pasa el cursor para ver el hover o tabula para ver el focus azul.' },
  { id: 'bloqueada', label: 'Bloqueada', disabled: true, content: 'No deberías ver este panel.' },
];

export const StatesTabsDoc = () => {
  return (
    <ComponentDoc
      title="Estados de interacción"
      description="Activo, inactivo, hover y focus más deshabilitado: la pestaña bloqueada queda fuera del orden de tabulación con aria-disabled y explica el motivo en su tooltip."
      preview={
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4">
          <Tabs tabs={TABS} defaultActiveId="activa" />
        </div>
      }
      htmlCode={STATES_TABS_HTML}
      jsxCode={STATES_TABS_TSX}
      maxWidth="4xl"
    />
  );
};
