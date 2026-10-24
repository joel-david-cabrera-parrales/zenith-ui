import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { BarChart, LineChart } from '../components';
import { CHART_DASHBOARD_HTML, CHART_DASHBOARD_TSX } from '../snippets';

const RANGE_DATA = {
  '7d': [
    { name: 'Lun', value: 42, secondary: 3 }, { name: 'Mar', value: 58, secondary: 5 },
    { name: 'Mié', value: 51, secondary: 2 }, { name: 'Jue', value: 76, secondary: 8 },
    { name: 'Vie', value: 64, secondary: 4 }, { name: 'Sáb', value: 38, secondary: 1 },
    { name: 'Dom', value: 47, secondary: 2 },
  ],
  '30d': [
    { name: 'Sem 1', value: 188, secondary: 14 }, { name: 'Sem 2', value: 224, secondary: 19 },
    { name: 'Sem 3', value: 206, secondary: 11 }, { name: 'Sem 4', value: 261, secondary: 21 },
  ],
};

const TEAM_DATA = [
  { name: 'Platform', value: 82 }, { name: 'Data', value: 64 },
  { name: 'Search', value: 48 }, { name: 'Payments', value: 35 },
];

type Period = keyof typeof RANGE_DATA;

export const ChartDashboardDoc = () => {
  const [period, setPeriod] = useState<Period>('7d');
  const periodOptions: Period[] = ['7d', '30d'];

  return (
    <ComponentDoc
      title="Dashboard y reportes"
      description="Combina gráficos responsivos con filtros controlados por estado. Este ejemplo compara el volumen y los errores de plataforma por periodo, junto al consumo de CPU por equipo."
      maxWidth="6xl"
      preview={
        <section className="grid w-full gap-5 xl:grid-cols-[1.5fr_1fr]">
          <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Rendimiento de la plataforma</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Solicitudes y errores</p>
              </div>
              <div className="flex rounded-lg bg-slate-100 p-1 dark:bg-slate-800" aria-label="Periodo del informe">
                {periodOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={period === option}
                    onClick={() => setPeriod(option)}
                    className={period === option
                      ? 'rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm dark:bg-slate-700 dark:text-blue-300'
                      : 'px-3 py-1.5 text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}
                  >
                    {option === '7d' ? '7 días' : '30 días'}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <LineChart data={RANGE_DATA[period]} size="md" color="#2563eb" secondaryColor="#f43f5e" valueLabel="Solicitudes (k)" secondaryLabel="Errores" />
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-2"><i className="h-0.5 w-4 bg-blue-600" />Solicitudes</span>
              <span className="inline-flex items-center gap-2"><i className="h-0.5 w-4 bg-rose-500" />Errores</span>
            </div>
          </article>
          <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Consumo por equipo</h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">CPU promedio · últimos 7 días</p>
            <div className="mt-4"><BarChart data={TEAM_DATA} size="md" color="#06b6d4" valueLabel="CPU (%)" /></div>
          </article>
        </section>
      }
      htmlCode={CHART_DASHBOARD_HTML}
      jsxCode={CHART_DASHBOARD_TSX}
    />
  );
};
