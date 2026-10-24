import { ComponentDoc } from '../../../shared/components/doc';
import { BarChart, LineChart } from '../components';
import { CHART_STATES_HTML, CHART_STATES_TSX } from '../snippets';

const SIZE_DATA = [
  { name: 'Ene', value: 28 }, { name: 'Feb', value: 46 },
  { name: 'Mar', value: 39 }, { name: 'Abr', value: 61 },
];

export const ChartStatesDoc = () => (
  <ComponentDoc
    title="Tamaños, colores y estados"
    description="Elige entre tamaños compacto, mediano y amplio; personaliza el color de las series; y presenta estados de carga o sin datos. Los ejes, tooltips, superficies y etiquetas responden al tema global claro/oscuro."
    maxWidth="6xl"
    preview={
      <div className="grid w-full gap-4 md:grid-cols-3">
        <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-xs font-semibold text-slate-900 dark:text-white">Compacto · 176 px</h3>
          <div className="mt-2"><BarChart data={SIZE_DATA} size="sm" color="#8b5cf6" showGrid={false} /></div>
        </article>
        <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-xs font-semibold text-slate-900 dark:text-white">Mediano · 240 px</h3>
          <div className="mt-2"><LineChart data={SIZE_DATA} size="md" color="#10b981" /></div>
        </article>
        <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-xs font-semibold text-slate-900 dark:text-white">Amplio · 320 px</h3>
          <div className="mt-2"><BarChart data={SIZE_DATA} size="lg" color="#f59e0b" valueLabel="Eventos" /></div>
        </article>
        <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-xs font-semibold text-slate-900 dark:text-white">Estado de carga</h3>
          <div className="mt-2"><BarChart data={SIZE_DATA} size="sm" loading /></div>
        </article>
        <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-xs font-semibold text-slate-900 dark:text-white">Estado vacío</h3>
          <div className="mt-2"><LineChart data={[]} size="sm" /></div>
        </article>
      </div>
    }
    htmlCode={CHART_STATES_HTML}
    jsxCode={CHART_STATES_TSX}
  />
);
