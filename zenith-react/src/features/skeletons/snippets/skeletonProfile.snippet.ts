export const SKELETON_PROFILE_HTML = `
<div role="status" aria-label="Cargando perfil" aria-busy="true" class="overflow-hidden rounded-xl border border-slate-200 bg-white">
  <div aria-hidden="true" class="h-20 bg-slate-200 animate-pulse"></div>
  <div class="p-4">
    <div class="flex items-center gap-3">
      <div aria-hidden="true" class="h-14 w-14 -mt-10 rounded-full bg-slate-200 animate-pulse ring-4 ring-white"></div>
      <div class="space-y-2">
        <div aria-hidden="true" class="h-3.5 w-36 rounded-lg bg-slate-200 animate-pulse"></div>
        <div aria-hidden="true" class="h-2.5 w-24 rounded-lg bg-slate-200 animate-pulse"></div>
      </div>
    </div>
  </div>
</div>
`;

export const SKELETON_PROFILE_TSX = `
export const SkeletonProfile = () => {
  return (
    <div role="status" aria-label="Cargando perfil" aria-busy="true" className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div aria-hidden="true" className="h-20 bg-slate-200 animate-pulse"></div>
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div aria-hidden="true" className="h-14 w-14 -mt-10 rounded-full bg-slate-200 animate-pulse ring-4 ring-white"></div>
          <div className="space-y-2">
            <div aria-hidden="true" className="h-3.5 w-36 rounded-lg bg-slate-200 animate-pulse"></div>
            <div aria-hidden="true" className="h-2.5 w-24 rounded-lg bg-slate-200 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
`;
