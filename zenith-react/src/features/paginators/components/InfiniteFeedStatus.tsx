export interface InfiniteFeedStatusProps {
  totalSynced?: number;
}

export function InfiniteFeedStatus({ totalSynced = 1248 }: InfiniteFeedStatusProps) {
  return (
    <div className="w-full">
      <div className="mb-4 space-y-2.5 rounded-lg border border-slate-200 bg-slate-100/40 p-3.5">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 animate-pulse rounded bg-slate-200" />
          <div className="flex-1 space-y-1.5">
            <div className="h-3 w-3/4 animate-pulse rounded bg-slate-200" />
            <div className="h-2 w-1/2 animate-pulse rounded bg-slate-200" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 py-2 font-mono text-xs text-blue-600">
          <span aria-hidden="true" className="material-symbols-outlined animate-spin text-sm">
            sync
          </span>
          <span>Cargando más registros de telemetría...</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 pt-2">
        <div aria-hidden="true" className="h-[1px] flex-1 bg-slate-300/70" />
        <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-200 px-3 py-1 font-mono text-xs text-slate-600">
          <span aria-hidden="true" className="material-symbols-outlined text-sm text-emerald-600">
            check_circle
          </span>
          <span>Has llegado al final ({totalSynced.toLocaleString('es')} elementos sincronizados)</span>
        </div>
        <div aria-hidden="true" className="h-[1px] flex-1 bg-slate-300/70" />
      </div>
    </div>
  );
}
