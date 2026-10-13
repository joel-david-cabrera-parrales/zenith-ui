export const SKELETON_STATS_HTML = `
<div role="status" aria-label="Cargando métricas" aria-busy="true" class="grid grid-cols-1 gap-3 sm:grid-cols-3">
  <div class="rounded-xl border border-slate-200 bg-white p-4">
    <div aria-hidden="true" class="h-2.5 w-20 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="mt-2 h-6 w-24 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="mt-2 h-2 w-full rounded-lg bg-slate-200 animate-pulse"></div>
  </div>
  <div class="rounded-xl border border-slate-200 bg-white p-4">
    <div aria-hidden="true" class="h-2.5 w-20 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="mt-2 h-6 w-24 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="mt-2 h-2 w-full rounded-lg bg-slate-200 animate-pulse"></div>
  </div>
  <div class="rounded-xl border border-slate-200 bg-white p-4">
    <div aria-hidden="true" class="h-2.5 w-20 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="mt-2 h-6 w-24 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="mt-2 h-2 w-full rounded-lg bg-slate-200 animate-pulse"></div>
  </div>
</div>
`;

export const SKELETON_STATS_TSX = `
export const SkeletonStats = () => {
  const items = [0, 1, 2];
  return (
    <div role="status" aria-label="Cargando métricas" aria-busy="true" className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {items.map((i) => (
        <div key={i} className="rounded-xl border border-slate-200 bg-white p-4">
          <div aria-hidden="true" className="h-2.5 w-20 rounded-lg bg-slate-200 animate-pulse"></div>
          <div aria-hidden="true" className="mt-2 h-6 w-24 rounded-lg bg-slate-200 animate-pulse"></div>
          <div aria-hidden="true" className="mt-2 h-2 w-full rounded-lg bg-slate-200 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};
`;
