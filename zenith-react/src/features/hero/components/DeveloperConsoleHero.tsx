import { useCopyToClipboard } from '../../../shared/hooks/useCopyToClipboard';

const INSTALL_CMD = 'npm i @zenith/core';

export const DeveloperConsoleHero = () => {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 md:p-12">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 md:gap-10">
        <div className="space-y-6 lg:col-span-5">
          <span className="inline-flex items-center gap-2 rounded bg-slate-100 px-3 py-1 font-mono text-xs font-semibold text-blue-700">
            <span aria-hidden="true" className="material-symbols-outlined text-sm">
              terminal
            </span>
            SDK v3.2.0 • Zero Dependencies
          </span>
          <h2 className="text-2xl leading-snug font-extrabold text-slate-900 sm:text-3xl md:text-4xl">
            Una línea de comando para unificar todas tus APIs.
          </h2>
          <p className="text-sm text-slate-500">
            Diseñado pensando primero en la experiencia del desarrollador.
            Importa el cliente nativo, autentica con variables de entorno y
            despacha eventos con tipado estricto en TypeScript.
          </p>
          <div className="flex flex-col items-start justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5 sm:flex-row sm:items-center">
            <p className="flex w-full items-center gap-2 overflow-x-auto font-mono text-sm text-slate-900 sm:w-auto">
              <span className="font-bold text-blue-600">$</span>
              {INSTALL_CMD}
            </p>
            <button
              type="button"
              onClick={() => void copy(INSTALL_CMD)}
              className="w-full shrink-0 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-100 sm:w-auto"
            >
              {copied ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>
          <p className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500 sm:gap-6">
            <span>TypeScript Ready</span>
            <span>•</span>
            <span>Deno / Bun Compatible</span>
            <span>•</span>
            <span>&lt; 4kb gzipped</span>
          </p>
        </div>
        <div className="w-full lg:col-span-7">
          <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950 font-mono text-xs text-slate-300 shadow-xl md:text-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-900 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
                <span className="ml-2 text-xs text-slate-400">sandbox-response.json</span>
              </div>
              <span className="flex items-center gap-2 rounded border border-emerald-800/50 bg-emerald-950/60 px-2 py-0.5 text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                HTTP 200 OK • 18ms
              </span>
            </div>
            <div className="space-y-1 overflow-x-auto p-4 leading-relaxed sm:p-6">
              <p className="text-slate-500">{'// POST /api/v3/events/dispatch'}</p>
              <p>{'{'}</p>
              <p className="pl-4">
                <span className="text-sky-400">&quot;status&quot;</span>:{' '}
                <span className="text-emerald-300">&quot;dispatched&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-sky-400">&quot;eventId&quot;</span>:{' '}
                <span className="text-emerald-300">&quot;evt_zenith_88293710a&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-sky-400">&quot;region&quot;</span>:{' '}
                <span className="text-emerald-300">&quot;europe-west3&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-sky-400">&quot;activeNodes&quot;</span>:{' '}
                <span className="text-purple-300">16</span>,
              </p>
              <p className="pl-4">
                <span className="text-sky-400">&quot;durationMs&quot;</span>:{' '}
                <span className="text-purple-300">18.42</span>
              </p>
              <p>{'}'}</p>
            </div>
            <div className="flex flex-col gap-2 border-t border-slate-800 bg-slate-900 px-4 py-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="material-symbols-outlined text-sm text-blue-400">
                  sync
                </span>
                Escuchando webhooks entrantes en tiempo real...
              </span>
              <span className="text-slate-500">Ctrl + C para cancelar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
