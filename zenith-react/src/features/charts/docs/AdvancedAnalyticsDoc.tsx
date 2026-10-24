import { useState } from 'react';
import type { ReactNode } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { BarChart, DonutChart, LineChart } from '../components';
import type { ChartDatum } from '../components';
import { ADVANCED_ANALYTICS_HTML, ADVANCED_ANALYTICS_TSX } from '../snippets';

const THROUGHPUT: ChartDatum[] = [
  { name: '00h', value: 42, secondary: 18 }, { name: '04h', value: 34, secondary: 14 },
  { name: '08h', value: 68, secondary: 28 }, { name: '12h', value: 88, secondary: 40 },
  { name: '16h', value: 76, secondary: 34 }, { name: '20h', value: 59, secondary: 24 },
];

const REVENUE: ChartDatum[] = [
  { name: 'Ene', value: 84, secondary: 49 }, { name: 'Feb', value: 92, secondary: 55 },
  { name: 'Mar', value: 106, secondary: 61 }, { name: 'Abr', value: 98, secondary: 58 },
  { name: 'May', value: 126, secondary: 73 }, { name: 'Jun', value: 142, secondary: 81 },
];

const LATENCY: ChartDatum[] = [
  { name: '00h', value: 128 }, { name: '04h', value: 116 }, { name: '08h', value: 154 },
  { name: '12h', value: 182 }, { name: '16h', value: 163 }, { name: '20h', value: 139 },
];

const FUNNEL: ChartDatum[] = [
  { name: 'Visitas', value: 9800 }, { name: 'Pruebas', value: 4250 },
  { name: 'Activación', value: 2760 }, { name: 'Pago', value: 1640 },
];

const REGIONS: ChartDatum[] = [
  { name: 'US-East', value: 74 }, { name: 'EU-West', value: 61 },
  { name: 'AP-South', value: 47 }, { name: 'US-West', value: 39 },
];

const DEPLOYMENTS: ChartDatum[] = [
  { name: 'Lun', value: 18 }, { name: 'Mar', value: 24 }, { name: 'Mié', value: 21 },
  { name: 'Jue', value: 31 }, { name: 'Vie', value: 27 }, { name: 'Sáb', value: 12 },
  { name: 'Dom', value: 16 },
];

const CLOUD_COSTS: ChartDatum[] = [
  { name: 'Cómputo', value: 42, color: '#2563eb' }, { name: 'Base de datos', value: 26, color: '#06b6d4' },
  { name: 'Almacenamiento', value: 18, color: '#8b5cf6' }, { name: 'Red', value: 14, color: '#10b981' },
];

const INCIDENTS: ChartDatum[] = [
  { name: 'Críticos', value: 4, color: '#f43f5e' }, { name: 'Altos', value: 9, color: '#f97316' },
  { name: 'Medios', value: 17, color: '#f59e0b' }, { name: 'Bajos', value: 28, color: '#10b981' },
];

const PERIOD_FACTOR = { '7d': 1, '30d': 4, '90d': 12 };
type Period = keyof typeof PERIOD_FACTOR;

const scaleData = (data: ChartDatum[], factor: number): ChartDatum[] =>
  data.map((point) => ({
    ...point,
    value: Math.round(point.value * factor),
    ...(point.secondary === undefined ? {} : { secondary: Math.round(point.secondary * factor) }),
  }));

interface AnalyticsPanelProps {
  title: string;
  subtitle: string;
  className?: string;
  children: ReactNode;
}

const AnalyticsPanel = ({ title, subtitle, className = '', children }: AnalyticsPanelProps) => (
  <article className={`min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5 ${className}`}>
    <header className="mb-2">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{subtitle}</p>
    </header>
    {children}
  </article>
);

export const AdvancedAnalyticsDoc = () => {
  const [period, setPeriod] = useState<Period>('7d');
  const factor = PERIOD_FACTOR[period];

  return (
    <ComponentDoc
      title="Dashboard de analítica avanzada"
      description="Un dashboard listo para adaptar a analítica de producto y operaciones: ocho gráficos coordinados, KPI destacados y un filtro temporal que actualiza las series de actividad. La cuadrícula se reorganiza desde móvil hasta escritorio."
      maxWidth="6xl"
      preview={
        <section className="w-full space-y-4 rounded-3xl bg-slate-50 p-4 dark:bg-slate-950/70 sm:p-6">
          <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Visión general</h2>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300">LIVE</span>
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Rendimiento de producto, infraestructura e ingresos</p>
            </div>
            <div className="flex w-fit rounded-xl border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900" aria-label="Periodo del dashboard">
              {(['7d', '30d', '90d'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={period === option}
                  onClick={() => setPeriod(option)}
                  className={period === option
                    ? 'rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm'
                    : 'rounded-lg px-3 py-1.5 text-xs font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}
                >
                  {option === '7d' ? '7 días' : option === '30d' ? '30 días' : '90 días'}
                </button>
              ))}
            </div>
          </header>

          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
            {[
              { label: 'Ingresos recurrentes', value: '€128.4k', change: '+12.8%', icon: 'payments' },
              { label: 'Usuarios activos', value: '24,892', change: '+8.2%', icon: 'group' },
              { label: 'Solicitudes API', value: '8.42M', change: '+18.4%', icon: 'bolt' },
              { label: 'Disponibilidad', value: '99.98%', change: '+0.03%', icon: 'check_circle' },
            ].map((metric) => (
              <article key={metric.label} className="min-w-0 rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900 sm:p-4">
                <div className="flex items-center justify-between gap-2">
                  <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400">{metric.icon}</span>
                  <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">{metric.change}</span>
                </div>
                <p className="mt-3 truncate text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">{metric.value}</p>
                <p className="mt-0.5 truncate text-[10px] text-slate-500 dark:text-slate-400 sm:text-xs">{metric.label}</p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <AnalyticsPanel title="Tráfico de plataforma" subtitle="Solicitudes y usuarios activos por hora" className="lg:col-span-8">
              <LineChart data={scaleData(THROUGHPUT, factor)} size="md" color="#2563eb" secondaryColor="#06b6d4" valueLabel="Solicitudes (k)" secondaryLabel="Usuarios (k)" />
              <div className="flex flex-wrap gap-4 text-[10px] text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5"><i className="h-0.5 w-3 rounded bg-blue-600" />Solicitudes</span>
                <span className="inline-flex items-center gap-1.5"><i className="h-0.5 w-3 rounded bg-cyan-500" />Usuarios activos</span>
              </div>
            </AnalyticsPanel>
            <AnalyticsPanel title="Costes cloud" subtitle="Distribución del gasto mensual" className="lg:col-span-4">
              <DonutChart data={CLOUD_COSTS} size="md" />
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] text-slate-500 dark:text-slate-400">
                {CLOUD_COSTS.map((item) => <span key={item.name} className="inline-flex min-w-0 items-center gap-1.5"><i className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: item.color }} /><span className="truncate">{item.name}</span></span>)}
              </div>
            </AnalyticsPanel>

            <AnalyticsPanel title="Ingresos vs. costes" subtitle="Últimos seis meses · miles de euros" className="lg:col-span-4">
              <BarChart data={scaleData(REVENUE, factor / 2)} size="md" color="#2563eb" secondaryColor="#94a3b8" valueLabel="Ingresos" secondaryLabel="Costes" />
            </AnalyticsPanel>
            <AnalyticsPanel title="Latencia de API" subtitle="Percentil 95 · milisegundos" className="lg:col-span-4">
              <LineChart data={LATENCY} size="md" color="#8b5cf6" valueLabel="P95 (ms)" showGrid={false} />
            </AnalyticsPanel>
            <AnalyticsPanel title="Conversión del producto" subtitle="Visita → cuenta de pago" className="lg:col-span-4">
              <BarChart data={FUNNEL} size="md" color="#10b981" valueLabel="Usuarios" />
            </AnalyticsPanel>

            <AnalyticsPanel title="Incidentes por severidad" subtitle="Eventos abiertos en el periodo" className="lg:col-span-4">
              <DonutChart data={INCIDENTS} size="md" />
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] text-slate-500 dark:text-slate-400">
                {INCIDENTS.map((item) => <span key={item.name} className="inline-flex items-center gap-1.5"><i className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />{item.name}<b className="ml-auto text-slate-700 dark:text-slate-300">{item.value}</b></span>)}
              </div>
            </AnalyticsPanel>
            <AnalyticsPanel title="Tráfico por región" subtitle="Uso de capacidad · promedio" className="lg:col-span-4">
              <BarChart data={REGIONS} size="md" color="#06b6d4" valueLabel="Capacidad (%)" />
            </AnalyticsPanel>
            <AnalyticsPanel title="Despliegues" subtitle="Versiones publicadas por día" className="lg:col-span-4">
              <LineChart data={scaleData(DEPLOYMENTS, factor)} size="md" color="#f59e0b" valueLabel="Despliegues" showGrid={false} />
            </AnalyticsPanel>
          </div>
          <footer className="flex flex-wrap items-center justify-between gap-2 px-1 text-[10px] text-slate-400">
            <span>Datos de demostración · actualizados hace 2 min</span>
            <span>Todos los horarios en UTC</span>
          </footer>
        </section>
      }
      htmlCode={ADVANCED_ANALYTICS_HTML}
      jsxCode={ADVANCED_ANALYTICS_TSX}
    />
  );
};
