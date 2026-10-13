export const SKELETON_LIST_HTML = `
<ul aria-busy="true" aria-label="Cargando lista" class="space-y-3">
  <li class="flex items-center gap-3" aria-hidden="true">
    <div class="h-8 w-8 shrink-0 rounded-full bg-slate-200 animate-pulse"></div>
    <div class="flex-1 space-y-1.5">
      <div class="h-2.5 w-1/2 rounded-lg bg-slate-200 animate-pulse"></div>
      <div class="h-2 w-1/4 rounded-lg bg-slate-200 animate-pulse"></div>
    </div>
    <div class="h-6 w-12 shrink-0 rounded-full bg-slate-200 animate-pulse"></div>
  </li>
  <li class="flex items-center gap-3" aria-hidden="true">
    <div class="h-8 w-8 shrink-0 rounded-full bg-slate-200 animate-pulse"></div>
    <div class="flex-1 space-y-1.5">
      <div class="h-2.5 w-2/3 rounded-lg bg-slate-200 animate-pulse"></div>
      <div class="h-2 w-1/3 rounded-lg bg-slate-200 animate-pulse"></div>
    </div>
    <div class="h-6 w-12 shrink-0 rounded-full bg-slate-200 animate-pulse"></div>
  </li>
  <li class="flex items-center gap-3" aria-hidden="true">
    <div class="h-8 w-8 shrink-0 rounded-full bg-slate-200 animate-pulse"></div>
    <div class="flex-1 space-y-1.5">
      <div class="h-2.5 w-1/3 rounded-lg bg-slate-200 animate-pulse"></div>
      <div class="h-2 w-1/4 rounded-lg bg-slate-200 animate-pulse"></div>
    </div>
    <div class="h-6 w-12 shrink-0 rounded-full bg-slate-200 animate-pulse"></div>
  </li>
</ul>
`;

export const SKELETON_LIST_TSX = `
export const SkeletonList = () => {
  const rows = [0, 1, 2];
  return (
    <ul aria-busy="true" aria-label="Cargando lista" className="space-y-3">
      {rows.map((i) => (
        <li key={i} className="flex items-center gap-3" aria-hidden="true">
          <div className="h-8 w-8 shrink-0 rounded-full bg-slate-200 animate-pulse"></div>
          <div className="flex-1 space-y-1.5">
            <div className="h-2.5 w-1/2 rounded-lg bg-slate-200 animate-pulse"></div>
            <div className="h-2 w-1/4 rounded-lg bg-slate-200 animate-pulse"></div>
          </div>
          <div className="h-6 w-12 shrink-0 rounded-full bg-slate-200 animate-pulse"></div>
        </li>
      ))}
    </ul>
  );
};
`;
