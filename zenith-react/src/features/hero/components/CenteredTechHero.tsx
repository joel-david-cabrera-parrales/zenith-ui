import { useState } from 'react';
import { useCopyToClipboard } from '../../../shared/hooks/useCopyToClipboard';

const TABS = ['CLI', 'REST API', 'Node.js SDK'] as const;

type Tab = (typeof TABS)[number];

const CODE: Record<Tab, string[]> = {
  CLI: [
    '# 1. Instalar CLI global de Zenith',
    '$ npm install -g @zenith/engine-cli@latest',
    '# 2. Aprovisionar entorno edge',
    '$ zenith init --cluster=production-eu-west --nodes=12',
  ],
  'REST API': [
    '# Crear despliegue vía API',
    '$ curl -X POST https://api.zenith.dev/v3/deploy \\',
    '  -H "Authorization: Bearer $ZENITH_TOKEN"',
  ],
  'Node.js SDK': [
    '// Despliegue programático',
    "import { Zenith } from '@zenith/core';",
    "await Zenith.deploy({ cluster: 'eu-west', nodes: 12 });",
  ],
};

export function CenteredTechHero() {
  const [tab, setTab] = useState<Tab>('CLI');
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 md:p-12">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <button
          type="button"
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm transition-colors hover:border-blue-300"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
          Zenith Engine v3.0 disponible
          <span aria-hidden="true">→</span>
        </button>
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-5xl md:leading-tight">
          Diseña, despliega y escala sistemas{' '}
          <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 bg-clip-text text-transparent">
            con precisión milimétrica
          </span>
        </h2>
        <p className="mx-auto mb-7 max-w-2xl text-sm text-slate-500">
          El framework operacional unificado para arquitectura de datos y
          plataformas distribuidas. Automatiza orquestación en la nube y
          telemetría crítica en segundos.
        </p>
        <div className="mb-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-xs font-semibold text-white shadow-md transition-all hover:bg-blue-700 sm:w-auto"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-lg">
              rocket_launch
            </span>
            Comenzar gratis 14 días
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-xs font-semibold text-slate-900 transition-colors hover:bg-slate-50 sm:w-auto"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-lg text-slate-500">
              description
            </span>
            Ver Documentación ↗
          </button>
        </div>
        <div className="relative mx-auto w-full max-w-3xl text-left">
          <div className="absolute -left-6 top-10 z-20 hidden items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm md:flex">
            <span className="h-3 w-3 animate-ping rounded-full bg-emerald-500" />
            <div>
              <p className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                Service SLA
              </p>
              <p className="text-sm font-bold text-slate-900">99.99% Uptime</p>
            </div>
          </div>
          <div className="absolute -right-6 bottom-10 z-20 hidden items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm md:flex">
            <span className="material-symbols-outlined text-lg text-blue-600">bolt</span>
            <div>
              <p className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                Rendimiento IO
              </p>
              <p className="text-sm font-bold text-slate-900">12k peticiones/seg</p>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 text-slate-200 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 bg-slate-800/60 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="inline-block h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="inline-block h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-slate-400">
                  zenith-cluster-deploy.sh
                </span>
              </div>
              <div className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-950 p-1">
                {TABS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    className={`rounded px-2.5 py-1 font-mono text-xs ${
                      tab === t
                        ? 'bg-blue-600 font-medium text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => void copy(CODE[tab].join('\n'))}
                className="flex items-center gap-1 font-mono text-xs text-slate-400 transition-colors hover:text-white"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-sm">
                  {copied ? 'check' : 'content_copy'}
                </span>
                {copied ? 'Copiado' : 'Copiar'}
              </button>
            </div>
            <div className="space-y-1.5 overflow-x-auto p-4 font-mono text-xs leading-relaxed sm:p-6 sm:text-sm">
              {CODE[tab].map((line) => (
                <p
                  key={line}
                  className={line.startsWith('#') ? 'text-slate-500' : undefined}
                >
                  {line.startsWith('$') ? (
                    <>
                      <span className="text-emerald-400">$</span> {line.slice(2)}
                    </>
                  ) : (
                    line
                  )}
                </p>
              ))}
              <p className="text-blue-400">✓ Auth token validado [zenith_live_pk_9934e]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
