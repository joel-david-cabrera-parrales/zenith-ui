import { ComponentDoc } from '../../../shared/components/doc';
import { Tabs } from '../components';
import type { TabItem } from '../components';
import { BADGED_TABS_HTML, BADGED_TABS_TSX } from '../snippets';

const TABS: TabItem[] = [
  { id: 'bandeja', label: 'Bandeja', badge: '12', content: '12 mensajes sin leer en la bandeja.' },
  { id: 'enviados', label: 'Enviados', badge: '48', content: '48 mensajes enviados este mes.' },
  { id: 'archivados', label: 'Archivados', badge: '3', content: '3 hilos archivados esta semana.' },
];

export const BadgedTabsDoc = () => {
  return (
    <ComponentDoc
      title="Con contadores"
      description="Badges con conteo por pestaña: el activo usa fondo azul y anuncian su valor a lectores con aria-label."
      preview={
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4">
          <Tabs tabs={TABS} variant="pills" />
        </div>
      }
      htmlCode={BADGED_TABS_HTML}
      jsxCode={BADGED_TABS_TSX}
      maxWidth="4xl"
    />
  );
};
