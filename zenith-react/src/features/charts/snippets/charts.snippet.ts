export const CHART_TYPES_HTML = `<div class="grid gap-4 lg:grid-cols-3">
  <article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
    <h3 class="text-sm font-semibold text-slate-900 dark:text-white">Ingresos mensuales</h3>
    <div class="mt-4 h-56"><!-- ResponsiveContainer + BarChart de Recharts --></div>
  </article>
  <article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
    <h3 class="text-sm font-semibold text-slate-900 dark:text-white">Uso de API</h3>
    <div class="mt-4 h-56"><!-- ResponsiveContainer + LineChart de Recharts --></div>
  </article>
  <article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
    <h3 class="text-sm font-semibold text-slate-900 dark:text-white">Recursos por servicio</h3>
    <div class="mt-4 h-56"><!-- ResponsiveContainer + PieChart de Recharts --></div>
  </article>
</div>`;

export const CHART_TYPES_TSX = `import {
  Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';

const monthly = [
  { name: 'Ene', value: 38 }, { name: 'Feb', value: 52 }, { name: 'Mar', value: 45 },
  { name: 'Abr', value: 68 }, { name: 'May', value: 59 }, { name: 'Jun', value: 82 },
];
const usage = [
  { name: '00h', value: 24 }, { name: '04h', value: 18 }, { name: '08h', value: 54 },
  { name: '12h', value: 76 }, { name: '16h', value: 63 }, { name: '20h', value: 42 },
];
const services = [
  { name: 'API', value: 42, color: '#2563eb' },
  { name: 'Workers', value: 28, color: '#06b6d4' },
  { name: 'Storage', value: 18, color: '#8b5cf6' },
  { name: 'Otros', value: 12, color: '#10b981' },
];
const tick = '#64748b';
const grid = '#e2e8f0';

export const ChartTypesExample = () => (
  <div className="grid gap-4 lg:grid-cols-3">
    <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Ingresos mensuales</h3>
      <div className="mt-4 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthly} accessibilityLayer>
            <CartesianGrid stroke={grid} strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: tick, fontSize: 11 }} />
            <YAxis tick={{ fill: tick, fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="value" name="Ingresos (k€)" fill="#2563eb" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
    <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Uso de API</h3>
      <div className="mt-4 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={usage} accessibilityLayer>
            <CartesianGrid stroke={grid} strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: tick, fontSize: 11 }} />
            <YAxis tick={{ fill: tick, fontSize: 11 }} />
            <Tooltip />
            <Line type="monotone" dataKey="value" name="Solicitudes (k)" stroke="#06b6d4" strokeWidth={2.5} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
    <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Recursos por servicio</h3>
      <div className="mt-4 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart accessibilityLayer>
            <Pie data={services} dataKey="value" nameKey="name" innerRadius="54%" outerRadius="78%" paddingAngle={3}>
              {services.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">
        {services.map((entry) => <span key={entry.name} className="inline-flex items-center gap-1.5"><i className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />{entry.name}</span>)}
      </div>
    </article>
  </div>
);`;

export const CHART_DASHBOARD_HTML = `<section class="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
  <article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
    <h2 class="text-base font-semibold text-slate-900 dark:text-white">Rendimiento de la plataforma</h2>
    <div class="mt-5 h-72"><!-- Gráfico de líneas responsivo --> </div>
  </article>
  <article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
    <h2 class="text-base font-semibold text-slate-900 dark:text-white">Consumo por equipo</h2>
    <div class="mt-5 h-72"><!-- Gráfico de barras responsivo --> </div>
  </article>
</section>`;

export const CHART_DASHBOARD_TSX = `import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ranges = {
  '7d': [
    { name: 'Lun', requests: 42, errors: 3 }, { name: 'Mar', requests: 58, errors: 5 },
    { name: 'Mié', requests: 51, errors: 2 }, { name: 'Jue', requests: 76, errors: 8 },
    { name: 'Vie', requests: 64, errors: 4 }, { name: 'Sáb', requests: 38, errors: 1 },
    { name: 'Dom', requests: 47, errors: 2 },
  ],
  '30d': [
    { name: 'Sem 1', requests: 188, errors: 14 }, { name: 'Sem 2', requests: 224, errors: 19 },
    { name: 'Sem 3', requests: 206, errors: 11 }, { name: 'Sem 4', requests: 261, errors: 21 },
  ],
};
const teams = [
  { name: 'Platform', value: 82 }, { name: 'Data', value: 64 },
  { name: 'Search', value: 48 }, { name: 'Payments', value: 35 },
];

export const DashboardChartsExample = () => {
  const [period, setPeriod] = useState<'7d' | '30d'>('7d');
  const data = ranges[period];

  return (
    <section className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
      <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div><h2 className="text-base font-semibold text-slate-900 dark:text-white">Rendimiento de la plataforma</h2><p className="mt-1 text-xs text-slate-500">Solicitudes y errores</p></div>
          <div className="flex rounded-lg bg-slate-100 p-1 dark:bg-slate-800" aria-label="Periodo">
            {(['7d', '30d'] as const).map((item) => <button key={item} type="button" aria-pressed={period === item} onClick={() => setPeriod(item)} className={period === item ? 'rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm dark:bg-slate-700 dark:text-blue-300' : 'px-3 py-1.5 text-xs text-slate-500'}>{item === '7d' ? '7 días' : '30 días'}</button>)}
          </div>
        </div>
        <div className="mt-5 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} accessibilityLayer>
              <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 11 }} />
              <YAxis tick={{ fill: '#64748b', fontSize: 11 }} />
              <Tooltip />
              <Line type="monotone" dataKey="requests" name="Solicitudes (k)" stroke="#2563eb" strokeWidth={2.5} />
              <Line type="monotone" dataKey="errors" name="Errores" stroke="#f43f5e" strokeWidth={2.5} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </article>
      <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">Consumo por equipo</h2>
        <p className="mt-1 text-xs text-slate-500">CPU promedio · últimos 7 días</p>
        <div className="mt-5 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={teams} accessibilityLayer>
              <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 11 }} />
              <YAxis tick={{ fill: '#64748b', fontSize: 11 }} unit="%" />
              <Tooltip />
              <Bar dataKey="value" name="CPU" fill="#06b6d4" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>
    </section>
  );
};`;
