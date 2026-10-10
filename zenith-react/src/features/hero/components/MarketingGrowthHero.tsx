import { useState } from 'react';

const CHANNELS = ['Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn B2B'] as const;

type Channel = (typeof CHANNELS)[number];

const FUNNEL = [
  { step: '01', title: 'Impresiones Cualificadas', sub: 'Audiencias de intención alta', value: '1,480,200', delta: '+18.4% WoW', indent: '' },
  { step: '02', title: 'Clics de Alto Rendimiento', sub: 'CTR medio 4.82%', value: '71,345', delta: '+22.1%', indent: 'ml-3' },
  { step: '03', title: 'Leads MQL / Demostraciones', sub: 'Lead-to-opp: 31%', value: '6,240', delta: '+38.6%', indent: 'ml-6' },
  { step: '04', title: 'Nuevos Clientes & MRR', sub: 'CAC: $48.20 / LTV: $840', value: '1,180 Contratos', delta: 'ROAS 5.4X', indent: 'ml-9', highlight: true },
];

const METRICS = [
  { value: '+340%', label: 'Conversión promedio', accent: 'text-emerald-700' },
  { value: '12M+', label: 'Impresiones mensuales', accent: 'text-slate-900' },
  { value: '4.2x', label: 'ROAS consolidado', accent: 'text-blue-700' },
];

export const MarketingGrowthHero = () => {
  const [channel, setChannel] = useState<Channel>('Google Ads');

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
      <div className="pointer-events-none absolute -top-12 -right-12 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-slate-900 uppercase">
            <span aria-hidden="true" className="material-symbols-outlined text-base text-emerald-600">
              trending_up
            </span>
            Motor Predictivo v4.8 • ROI Garantizado
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-4xl md:leading-tight">
            Multiplica el impacto de cada campaña con analítica predictiva y
            automatización creativa
          </h2>
          <p className="max-w-xl text-sm text-slate-500">
            Centralizamos la atribución multicanal en tiempo real. Escalamos
            presupuestos en Meta, Google Ads y TikTok con control estricto de
            CAC y LTV empresarial.
          </p>
          <div className="grid grid-cols-2 gap-2 pt-1 sm:grid-cols-3">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-3"
              >
                <p className={`text-sm font-bold ${m.accent}`}>{m.value}</p>
                <p className="text-[11px] text-slate-500">{m.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-2 sm:flex-row">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 sm:w-auto"
            >
              Iniciar Auditoría Gratuita
              <span aria-hidden="true" className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </button>
            <button
              type="button"
              className="w-full rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 sm:w-auto"
            >
              Ver Casos de Éxito ↗
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-4 border-t border-slate-200 pt-4">
            <span className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">
              Partners Verificados:
            </span>
            {['Google Premier', 'Meta Business', 'TikTok Agency'].map((p) => (
              <span
                key={p}
                className="flex items-center gap-1 font-mono text-xs font-semibold text-slate-500"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                {p}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <span className="font-mono text-xs font-semibold text-slate-900">
                CAMPAIGN_CONSOLE // {channel.toUpperCase()}
              </span>
              <span className="flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-500">
                LIVE SYNC
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 py-3">
              {CHANNELS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setChannel(c)}
                  className={`rounded px-2 py-1 font-mono text-[10px] font-semibold ${
                    channel === c
                      ? 'bg-blue-600 text-white'
                      : 'border border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="space-y-1.5 py-2">
              {FUNNEL.map((f) => (
                <div
                  key={f.step}
                  className={`flex items-center justify-between rounded border p-2 ${f.indent} ${
                    f.highlight
                      ? 'border-blue-200 bg-blue-50'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-blue-700">
                      {f.step}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">{f.title}</p>
                      <p className="font-mono text-[10px] text-slate-500">{f.sub}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs font-bold text-slate-900">{f.value}</p>
                    <span className="font-mono text-[10px] font-semibold text-emerald-600">
                      {f.delta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 space-y-1.5 border-t border-slate-200 pt-3">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-slate-500">Presupuesto Mensual Activo</span>
                <span className="font-semibold text-slate-900">
                  $84,500 / $100,000 (84.5%)
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-2 rounded-full bg-blue-600" style={{ width: '84.5%' }} />
              </div>
              <div className="flex justify-between pt-1 font-mono text-[10px] text-slate-500">
                <span>OPTIMIZADOR AUTOMÁTICO: ACTIVO</span>
                <span className="text-emerald-600">+210 CLIENTES EXTRA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
