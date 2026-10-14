import { ComponentDoc } from '../../../shared/components/doc';
import { Tabs } from '../components';
import type { TabItem } from '../components';
import { BASIC_TABS_HTML, BASIC_TABS_TSX } from '../snippets';

const TABS: TabItem[] = [
  {
    id: 'resumen',
    label: 'Resumen',
    content: (
      <div>
        <p className="font-semibold text-slate-900">Resumen del proyecto</p>
        <p className="mt-1">12 tareas activas, 3 hitos esta semana y 98% de disponibilidad.</p>
      </div>
    ),
  },
  {
    id: 'actividad',
    label: 'Actividad',
    content: (
      <div>
        <p className="font-semibold text-slate-900">Actividad reciente</p>
        <p className="mt-1">Mariana movió 4 tarjetas a revisión hace 20 minutos.</p>
      </div>
    ),
  },
  {
    id: 'ajustes',
    label: 'Ajustes',
    content: (
      <div>
        <p className="font-semibold text-slate-900">Ajustes del proyecto</p>
        <p className="mt-1">Configura visibilidad, permisos y notificaciones.</p>
      </div>
    ),
  },
];

export const BasicTabsDoc = () => {
  return (
    <ComponentDoc
      title="Pestañas básicas"
      description="Estructura base con navegación horizontal: presión con escala en cada pestaña, indicador que crece al seleccionar y previsualización tenue en hover, más navegación por teclado con flechas, Inicio y Fin."
      preview={
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4">
          <Tabs tabs={TABS} />
        </div>
      }
      htmlCode={BASIC_TABS_HTML}
      jsxCode={BASIC_TABS_TSX}
      maxWidth="4xl"
    />
  );
};
