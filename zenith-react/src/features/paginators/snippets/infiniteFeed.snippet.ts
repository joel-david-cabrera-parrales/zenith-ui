export const INFINITE_FEED_HTML = `
<div class="space-y-2.5 p-3.5 bg-slate-100/40 rounded-lg border border-slate-200">
  <div class="flex items-center gap-3">
    <div class="w-8 h-8 rounded bg-slate-200 animate-pulse"></div>
    <div class="flex-1 space-y-1.5"><div class="h-3 bg-slate-200 rounded w-3/4 animate-pulse"></div></div>
  </div>
  <div class="flex items-center justify-center gap-2 font-mono text-xs text-blue-600">
    <span>Cargando mas registros de telemetria...</span>
  </div>
</div>
<div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 font-mono text-xs">
  <span>Has llegado al final (1,248 elementos sincronizados)</span>
</div>
`;

export const INFINITE_FEED_TSX = `
export const InfiniteFeed = () => {
  return (
    <div>
      <div className="p-3.5 bg-slate-100/40 rounded-lg border border-slate-200">
        <div className="h-3 w-3/4 bg-slate-200 rounded animate-pulse" />
        <p className="font-mono text-xs text-blue-600">Cargando mas registros...</p>
      </div>
      <div className="inline-flex px-3 py-1 rounded-full bg-slate-200 font-mono text-xs">
        Has llegado al final (1,248 sincronizados)
      </div>
    </div>
  );
};
`;
