export const SKELETON_PRODUCT_HTML = `
<div role="status" aria-label="Cargando producto" aria-busy="true" class="flex gap-3 rounded-xl border border-slate-200 bg-white p-3">
  <div aria-hidden="true" class="h-24 w-24 shrink-0 rounded-xl bg-slate-200 animate-pulse"></div>
  <div class="flex-1 space-y-2 py-1">
    <div aria-hidden="true" class="h-3 w-2/3 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="h-2.5 w-1/3 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="h-4 w-20 rounded-lg bg-slate-200 animate-pulse"></div>
  </div>
</div>
`;

export const SKELETON_PRODUCT_TSX = `
export const SkeletonProduct = () => {
  return (
    <div role="status" aria-label="Cargando producto" aria-busy="true" className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3">
      <div aria-hidden="true" className="h-24 w-24 shrink-0 rounded-xl bg-slate-200 animate-pulse"></div>
      <div className="flex-1 space-y-2 py-1">
        <div aria-hidden="true" className="h-3 w-2/3 rounded-lg bg-slate-200 animate-pulse"></div>
        <div aria-hidden="true" className="h-2.5 w-1/3 rounded-lg bg-slate-200 animate-pulse"></div>
        <div aria-hidden="true" className="h-4 w-20 rounded-lg bg-slate-200 animate-pulse"></div>
      </div>
    </div>
  );
};
`;
