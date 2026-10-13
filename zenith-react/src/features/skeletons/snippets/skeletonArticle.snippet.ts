export const SKELETON_ARTICLE_HTML = `
<div role="status" aria-label="Cargando artículo" aria-busy="true" class="rounded-xl border border-slate-200 bg-white p-4">
  <div aria-hidden="true" class="h-4 w-3/4 rounded-lg bg-slate-200 animate-pulse"></div>
  <div aria-hidden="true" class="mt-2 h-3 w-1/3 rounded-lg bg-slate-200 animate-pulse"></div>
  <div class="mt-4 space-y-2">
    <div aria-hidden="true" class="h-3 w-full rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="h-3 w-full rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="h-3 w-11/12 rounded-lg bg-slate-200 animate-pulse"></div>
    <div aria-hidden="true" class="h-3 w-2/3 rounded-lg bg-slate-200 animate-pulse"></div>
  </div>
</div>
`;

export const SKELETON_ARTICLE_TSX = `
export const SkeletonArticle = () => {
  return (
    <div role="status" aria-label="Cargando artículo" aria-busy="true" className="rounded-xl border border-slate-200 bg-white p-4">
      <div aria-hidden="true" className="h-4 w-3/4 rounded-lg bg-slate-200 animate-pulse"></div>
      <div aria-hidden="true" className="mt-2 h-3 w-1/3 rounded-lg bg-slate-200 animate-pulse"></div>
      <div className="mt-4 space-y-2">
        <div aria-hidden="true" className="h-3 w-full rounded-lg bg-slate-200 animate-pulse"></div>
        <div aria-hidden="true" className="h-3 w-full rounded-lg bg-slate-200 animate-pulse"></div>
        <div aria-hidden="true" className="h-3 w-11/12 rounded-lg bg-slate-200 animate-pulse"></div>
        <div aria-hidden="true" className="h-3 w-2/3 rounded-lg bg-slate-200 animate-pulse"></div>
      </div>
    </div>
  );
};
`;
