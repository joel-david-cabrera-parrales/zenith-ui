export const ADVANCED_ANALYTICS_HTML = `<section class="space-y-4 rounded-3xl bg-slate-50 p-4 dark:bg-slate-950/70 sm:p-6">
  <header class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
    <div><h2 class="text-lg font-bold text-slate-900 dark:text-white">Visión general <span class="text-emerald-600">LIVE</span></h2><p class="text-xs text-slate-500">Producto, infraestructura e ingresos</p></div>
    <div class="flex gap-1 rounded-xl border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900"><button class="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">7 días</button><button class="px-3 py-1.5 text-xs">30 días</button><button class="px-3 py-1.5 text-xs">90 días</button></div>
  </header>
  <div class="grid grid-cols-2 gap-3 xl:grid-cols-4">
    <article class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"><p class="text-xs text-slate-500">Ingresos recurrentes</p><strong class="text-xl text-slate-900 dark:text-white">€128.4k</strong><span class="ml-2 text-xs text-emerald-600">+12.8%</span></article>
    <article class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"><p class="text-xs text-slate-500">Usuarios activos</p><strong class="text-xl text-slate-900 dark:text-white">24,892</strong><span class="ml-2 text-xs text-emerald-600">+8.2%</span></article>
    <article class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"><p class="text-xs text-slate-500">Solicitudes API</p><strong class="text-xl text-slate-900 dark:text-white">8.42M</strong><span class="ml-2 text-xs text-emerald-600">+18.4%</span></article>
    <article class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"><p class="text-xs text-slate-500">Disponibilidad</p><strong class="text-xl text-slate-900 dark:text-white">99.98%</strong><span class="ml-2 text-xs text-emerald-600">+0.03%</span></article>
  </div>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-12">
    <article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 lg:col-span-8"><h3 class="font-semibold">1. Tráfico de plataforma</h3><div class="mt-3 h-60"><!-- LineChart: solicitudes y usuarios --> </div></article>
    <article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 lg:col-span-4"><h3 class="font-semibold">2. Costes cloud</h3><div class="mt-3 h-60"><!-- DonutChart: distribución de gasto --> </div></article>
    <article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 lg:col-span-4"><h3 class="font-semibold">3. Ingresos vs. costes</h3><div class="mt-3 h-60"><!-- BarChart: series agrupadas --> </div></article>
    <article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 lg:col-span-4"><h3 class="font-semibold">4. Latencia de API</h3><div class="mt-3 h-60"><!-- LineChart: percentil 95 --> </div></article>
    <article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 lg:col-span-4"><h3 class="font-semibold">5. Conversión del producto</h3><div class="mt-3 h-60"><!-- BarChart: etapas del funnel --> </div></article>
    <article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 lg:col-span-4"><h3 class="font-semibold">6. Incidentes por severidad</h3><div class="mt-3 h-60"><!-- DonutChart: severidad --> </div></article>
    <article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 lg:col-span-4"><h3 class="font-semibold">7. Tráfico por región</h3><div class="mt-3 h-60"><!-- BarChart: capacidad por región --> </div></article>
    <article class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 lg:col-span-4"><h3 class="font-semibold">8. Despliegues</h3><div class="mt-3 h-60"><!-- LineChart: publicaciones por día --> </div></article>
  </div>
</section>`;

export const ADVANCED_ANALYTICS_TSX = `import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const traffic = [{ name: '00h', value: 42, secondary: 18 }, { name: '04h', value: 34, secondary: 14 }, { name: '08h', value: 68, secondary: 28 }, { name: '12h', value: 88, secondary: 40 }, { name: '16h', value: 76, secondary: 34 }, { name: '20h', value: 59, secondary: 24 }];
const revenue = [{ name: 'Ene', value: 84, secondary: 49 }, { name: 'Feb', value: 92, secondary: 55 }, { name: 'Mar', value: 106, secondary: 61 }, { name: 'Abr', value: 98, secondary: 58 }, { name: 'May', value: 126, secondary: 73 }, { name: 'Jun', value: 142, secondary: 81 }];
const latency = [{ name: '00h', value: 128 }, { name: '04h', value: 116 }, { name: '08h', value: 154 }, { name: '12h', value: 182 }, { name: '16h', value: 163 }, { name: '20h', value: 139 }];
const funnel = [{ name: 'Visitas', value: 9800 }, { name: 'Pruebas', value: 4250 }, { name: 'Activación', value: 2760 }, { name: 'Pago', value: 1640 }];
const regions = [{ name: 'US-East', value: 74 }, { name: 'EU-West', value: 61 }, { name: 'AP-South', value: 47 }, { name: 'US-West', value: 39 }];
const deployments = [{ name: 'Lun', value: 18 }, { name: 'Mar', value: 24 }, { name: 'Mié', value: 21 }, { name: 'Jue', value: 31 }, { name: 'Vie', value: 27 }, { name: 'Sáb', value: 12 }, { name: 'Dom', value: 16 }];
const costs = [{ name: 'Cómputo', value: 42, color: '#2563eb' }, { name: 'Base de datos', value: 26, color: '#06b6d4' }, { name: 'Almacenamiento', value: 18, color: '#8b5cf6' }, { name: 'Red', value: 14, color: '#10b981' }];
const incidents = [{ name: 'Críticos', value: 4, color: '#f43f5e' }, { name: 'Altos', value: 9, color: '#f97316' }, { name: 'Medios', value: 17, color: '#f59e0b' }, { name: 'Bajos', value: 28, color: '#10b981' }];
const scale = (data, factor) => data.map((point) => ({ ...point, value: Math.round(point.value * factor), secondary: point.secondary === undefined ? undefined : Math.round(point.secondary * factor) }));
const panel = 'min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5';
const axis = { fill: '#64748b', fontSize: 10 };

export const AdvancedAnalyticsDashboard = () => {
  const [period, setPeriod] = useState('7d');
  const factor = period === '7d' ? 1 : period === '30d' ? 4 : 12;

  return (
    <section className="space-y-4 rounded-3xl bg-slate-50 p-4 dark:bg-slate-950/70 sm:p-6">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div><h2 className="text-lg font-bold text-slate-900 dark:text-white">Visión general <span className="text-emerald-600">LIVE</span></h2><p className="text-xs text-slate-500">Producto, infraestructura e ingresos</p></div>
        <div className="flex gap-1 rounded-xl border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900" aria-label="Periodo del dashboard">
          {['7d', '30d', '90d'].map((value) => <button key={value} type="button" aria-pressed={period === value} onClick={() => setPeriod(value)} className={period === value ? 'rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white' : 'rounded-lg px-3 py-1.5 text-xs text-slate-500'}>{value === '7d' ? '7 días' : value === '30d' ? '30 días' : '90 días'}</button>)}
        </div>
      </header>
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {[['Ingresos recurrentes', '€128.4k', '+12.8%'], ['Usuarios activos', '24,892', '+8.2%'], ['Solicitudes API', '8.42M', '+18.4%'], ['Disponibilidad', '99.98%', '+0.03%']].map(([label, value, change]) => <article key={label} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"><p className="text-xs text-slate-500">{label}</p><strong className="text-xl text-slate-900 dark:text-white">{value}</strong><span className="ml-2 text-xs text-emerald-600">{change}</span></article>)}
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <article className={panel + ' lg:col-span-8'}><h3 className="font-semibold">1. Tráfico de plataforma</h3><p className="text-[11px] text-slate-500">Solicitudes y usuarios activos por hora</p><div className="mt-3 h-56"><ResponsiveContainer width="100%" height="100%"><LineChart data={scale(traffic, factor)} accessibilityLayer><CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} /><XAxis dataKey="name" tick={axis} /><YAxis tick={axis} /><Tooltip /><Line dataKey="value" name="Solicitudes" stroke="#2563eb" strokeWidth={2.5} /><Line dataKey="secondary" name="Usuarios" stroke="#06b6d4" strokeWidth={2.5} /></LineChart></ResponsiveContainer></div></article>
        <article className={panel + ' lg:col-span-4'}><h3 className="font-semibold">2. Costes cloud</h3><p className="text-[11px] text-slate-500">Distribución del gasto mensual</p><div className="mt-3 h-56"><ResponsiveContainer width="100%" height="100%"><PieChart accessibilityLayer><Pie data={costs} dataKey="value" nameKey="name" innerRadius="52%" outerRadius="76%" paddingAngle={3}>{costs.map((item) => <Cell key={item.name} fill={item.color} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></div></article>
        <article className={panel + ' lg:col-span-4'}><h3 className="font-semibold">3. Ingresos vs. costes</h3><p className="text-[11px] text-slate-500">Miles de euros</p><div className="mt-3 h-56"><ResponsiveContainer width="100%" height="100%"><BarChart data={scale(revenue, factor / 2)} accessibilityLayer><CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} /><XAxis dataKey="name" tick={axis} /><YAxis tick={axis} /><Tooltip /><Bar dataKey="value" name="Ingresos" fill="#2563eb" radius={[4, 4, 0, 0]} /><Bar dataKey="secondary" name="Costes" fill="#94a3b8" radius={[4, 4, 0, 0]} /></BarChart></ResponsiveContainer></div></article>
        <article className={panel + ' lg:col-span-4'}><h3 className="font-semibold">4. Latencia de API</h3><p className="text-[11px] text-slate-500">Percentil 95 · milisegundos</p><div className="mt-3 h-56"><ResponsiveContainer width="100%" height="100%"><LineChart data={latency} accessibilityLayer><CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} /><XAxis dataKey="name" tick={axis} /><YAxis tick={axis} /><Tooltip /><Line dataKey="value" name="P95 (ms)" stroke="#8b5cf6" strokeWidth={2.5} /></LineChart></ResponsiveContainer></div></article>
        <article className={panel + ' lg:col-span-4'}><h3 className="font-semibold">5. Conversión del producto</h3><p className="text-[11px] text-slate-500">Visita a cuenta de pago</p><div className="mt-3 h-56"><ResponsiveContainer width="100%" height="100%"><BarChart data={funnel} accessibilityLayer><CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} /><XAxis dataKey="name" tick={axis} /><YAxis tick={axis} /><Tooltip /><Bar dataKey="value" name="Usuarios" fill="#10b981" radius={[4, 4, 0, 0]} /></BarChart></ResponsiveContainer></div></article>
        <article className={panel + ' lg:col-span-4'}><h3 className="font-semibold">6. Incidentes por severidad</h3><p className="text-[11px] text-slate-500">Eventos abiertos en el periodo</p><div className="mt-3 h-56"><ResponsiveContainer width="100%" height="100%"><PieChart accessibilityLayer><Pie data={incidents} dataKey="value" nameKey="name" innerRadius="52%" outerRadius="76%" paddingAngle={3}>{incidents.map((item) => <Cell key={item.name} fill={item.color} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></div></article>
        <article className={panel + ' lg:col-span-4'}><h3 className="font-semibold">7. Tráfico por región</h3><p className="text-[11px] text-slate-500">Uso de capacidad promedio</p><div className="mt-3 h-56"><ResponsiveContainer width="100%" height="100%"><BarChart data={regions} accessibilityLayer><CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} /><XAxis dataKey="name" tick={axis} /><YAxis tick={axis} /><Tooltip /><Bar dataKey="value" name="Capacidad (%)" fill="#06b6d4" radius={[4, 4, 0, 0]} /></BarChart></ResponsiveContainer></div></article>
        <article className={panel + ' lg:col-span-4'}><h3 className="font-semibold">8. Despliegues</h3><p className="text-[11px] text-slate-500">Versiones publicadas por día</p><div className="mt-3 h-56"><ResponsiveContainer width="100%" height="100%"><LineChart data={scale(deployments, factor)} accessibilityLayer><CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} /><XAxis dataKey="name" tick={axis} /><YAxis tick={axis} /><Tooltip /><Line dataKey="value" name="Despliegues" stroke="#f59e0b" strokeWidth={2.5} /></LineChart></ResponsiveContainer></div></article>
      </div>
      <footer className="flex justify-between text-[10px] text-slate-400"><span>Datos de demostración · actualizados hace 2 min</span><span>Horarios UTC</span></footer>
    </section>
  );
};`;
