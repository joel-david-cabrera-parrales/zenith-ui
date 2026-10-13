export const SKELETON_FORM_HTML = `
<div role="status" aria-label="Cargando formulario" aria-busy="true" class="space-y-4 rounded-xl border border-slate-200 bg-white p-4">
  <div>
    <div aria-hidden="true" class="h-2.5 w-24 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="mt-1.5 h-9 w-full rounded-lg bg-slate-200 animate-pulse"></div>
  </div>
  <div>
    <div aria-hidden="true" class="h-2.5 w-28 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="mt-1.5 h-20 w-full rounded-lg bg-slate-200 animate-pulse"></div>
  </div>
  <div class="flex gap-2">
    <div aria-hidden="true" class="h-9 flex-1 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="h-9 w-28 rounded-lg bg-slate-200 animate-pulse"></div>
  </div>
</div>
`;

export const SKELETON_FORM_TSX = `
export const SkeletonForm = () => {
  return (
    <div role="status" aria-label="Cargando formulario" aria-busy="true" className="space-y-4 rounded-xl border border-slate-200 bg-white p-4">
      <div>
        <div aria-hidden="true" className="h-2.5 w-24 rounded-lg bg-slate-200 animate-pulse"></div>
        <div aria-hidden="true" className="mt-1.5 h-9 w-full rounded-lg bg-slate-200 animate-pulse"></div>
      </div>
      <div>
        <div aria-hidden="true" className="h-2.5 w-28 rounded-lg bg-slate-200 animate-pulse"></div>
        <div aria-hidden="true" className="mt-1.5 h-20 w-full rounded-lg bg-slate-200 animate-pulse"></div>
      </div>
      <div className="flex gap-2">
        <div aria-hidden="true" className="h-9 flex-1 rounded-lg bg-slate-200 animate-pulse"></div>
        <div aria-hidden="true" className="h-9 w-28 rounded-lg bg-slate-200 animate-pulse"></div>
      </div>
    </div>
  );
};
`;
