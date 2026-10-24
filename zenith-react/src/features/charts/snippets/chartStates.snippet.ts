export const CHART_STATES_HTML = `<div class="grid gap-4 md:grid-cols-2">
  <article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
    <h3 class="text-sm font-semibold text-slate-900 dark:text-white">Cargando métricas</h3>
    <div class="mt-4 flex h-44 items-center rounded-xl bg-slate-50 px-8 dark:bg-slate-950/60">
      <div class="w-full space-y-3"><div class="h-3 w-1/3 animate-pulse rounded bg-slate-200 dark:bg-slate-800"></div><div class="h-24 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800"></div></div>
    </div>
  </article>
  <article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
    <h3 class="text-sm font-semibold text-slate-900 dark:text-white">Sin datos</h3>
    <div class="mt-4 flex h-44 items-center justify-center rounded-xl bg-slate-50 text-sm text-slate-500 dark:bg-slate-950/60 dark:text-slate-400">No hay datos disponibles</div>
  </article>
</div>`;

export const CHART_STATES_TSX = `import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Ene', value: 38 }, { name: 'Feb', value: 52 },
  { name: 'Mar', value: 45 }, { name: 'Abr', value: 68 },
];
const emptyData: typeof data = [];
const loading = false;

export const ChartStatesExample = () => (
  <div className="grid gap-4 md:grid-cols-2">
    <article className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Cargando métricas</h3>
      <div className="mt-4 h-44">
        {loading ? (
          <div role="status" aria-label="Cargando gráfico" className="flex h-full items-center rounded-xl bg-slate-50 px-8 dark:bg-slate-950/60">
            <div className="w-full space-y-3"><div className="h-3 w-1/3 animate-pulse rounded bg-slate-200 dark:bg-slate-800" /><div className="h-24 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" /></div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%"><BarChart data={data}><CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" /><XAxis dataKey="name" /><YAxis /><Tooltip /><Bar dataKey="value" fill="#8b5cf6" radius={[5, 5, 0, 0]} /></BarChart></ResponsiveContainer>
        )}
      </div>
    </article>
    <article className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Sin datos</h3>
      {emptyData.length === 0 ? <div role="status" className="mt-4 flex h-44 items-center justify-center rounded-xl bg-slate-50 text-sm text-slate-500 dark:bg-slate-950/60 dark:text-slate-400">No hay datos disponibles</div> : <p className="mt-4 text-xs text-slate-500">Se muestra el gráfico cuando hay datos.</p>}
    </article>
  </div>
);`;
