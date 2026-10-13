export const SKELETON_TABLE_HTML = `
<div role="status" aria-label="Cargando tabla" aria-busy="true" class="overflow-hidden rounded-xl border border-slate-200 bg-white">
  <div class="flex gap-2 border-b border-slate-200 p-3">
    <div aria-hidden="true" class="h-8 flex-1 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="h-8 w-24 rounded-lg bg-slate-200 animate-pulse"></div>
  </div>
  <div class="flex items-center gap-3 bg-white px-3 py-2.5">
    <div aria-hidden="true" class="h-8 w-8 rounded-full bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="h-3 flex-1 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="h-6 w-16 rounded-full bg-slate-200 animate-pulse"></div>
  </div>
  <div class="flex items-center gap-3 bg-white px-3 py-2.5">
    <div aria-hidden="true" class="h-8 w-8 rounded-full bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="h-3 flex-1 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="h-6 w-16 rounded-full bg-slate-200 animate-pulse"></div>
  </div>
</div>
`;

export const SKELETON_TABLE_TSX = `
export const SkeletonTable = () => {
  const rows = [0, 1, 2, 3];
  return (
    <div role="status" aria-label="Cargando tabla" aria-busy="true" className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex gap-2 border-b border-slate-200 p-3">
        <div aria-hidden="true" className="h-8 flex-1 rounded-lg bg-slate-200 animate-pulse"></div>
        <div aria-hidden="true" className="h-8 w-24 rounded-lg bg-slate-200 animate-pulse"></div>
      </div>
      {rows.map((i) => (
        <div key={i} className="flex items-center gap-3 bg-white px-3 py-2.5">
          <div aria-hidden="true" className="h-8 w-8 rounded-full bg-slate-200 animate-pulse"></div>
          <div aria-hidden="true" className="h-3 flex-1 rounded-lg bg-slate-200 animate-pulse"></div>
          <div aria-hidden="true" className="h-6 w-16 rounded-full bg-slate-200 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};
`;
