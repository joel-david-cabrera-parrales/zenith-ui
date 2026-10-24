import { ComponentDoc } from '../../../shared/components/doc';
import { BarChart, DonutChart, LineChart } from '../components';
import { CHART_TYPES_HTML, CHART_TYPES_TSX } from '../snippets';

const MONTHLY_DATA = [
  { name: 'Ene', value: 38 }, { name: 'Feb', value: 52 }, { name: 'Mar', value: 45 },
  { name: 'Abr', value: 68 }, { name: 'May', value: 59 }, { name: 'Jun', value: 82 },
];

const USAGE_DATA = [
  { name: '00h', value: 24 }, { name: '04h', value: 18 }, { name: '08h', value: 54 },
  { name: '12h', value: 76 }, { name: '16h', value: 63 }, { name: '20h', value: 42 },
];

const SERVICE_DATA = [
  { name: 'API', value: 42, color: '#2563eb' },
  { name: 'Workers', value: 28, color: '#06b6d4' },
  { name: 'Storage', value: 18, color: '#8b5cf6' },
  { name: 'Otros', value: 12, color: '#10b981' },
];

export const ChartTypesDoc = () => (
  <ComponentDoc
    title="Tipos de gráficos"
    description="Barras para comparar categorías, líneas para observar tendencias y pastel/donut para representar proporciones. Los tooltips aparecen al interactuar; el contenedor y los ejes se adaptan al tema y al ancho disponible."
    maxWidth="6xl"
    preview={
      <div className="grid w-full gap-4 lg:grid-cols-3">
        <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Ingresos mensuales</h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Miles de euros · tamaño mediano</p>
          <div className="mt-3"><BarChart data={MONTHLY_DATA} size="sm" valueLabel="Ingresos (k€)" /></div>
        </article>
        <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Uso de API</h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Solicitudes por hora · tamaño mediano</p>
          <div className="mt-3"><LineChart data={USAGE_DATA} size="sm" color="#06b6d4" valueLabel="Solicitudes (k)" /></div>
        </article>
        <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Recursos por servicio</h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Distribución de capacidad</p>
          <div className="mt-3"><DonutChart data={SERVICE_DATA} size="sm" /></div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400">
            {SERVICE_DATA.map((item) => <span key={item.name} className="inline-flex items-center gap-1.5"><i className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />{item.name}</span>)}
          </div>
        </article>
      </div>
    }
    htmlCode={CHART_TYPES_HTML}
    jsxCode={CHART_TYPES_TSX}
  />
);
