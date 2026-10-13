export const AVATAR_FALLBACKS_HTML = `
<div class="flex flex-wrap items-end gap-4">
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-blue-600/20">JD</span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">INITIALS</span>
    <span class="font-mono text-[9px] text-slate-500">soft</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-base font-bold text-white ring-1 ring-blue-600">AR</span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">INITIALS</span>
    <span class="font-mono text-[9px] text-slate-500">solid</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-slate-500 ring-1 ring-slate-200">P</span>
    <span class="font-mono text-[10px] font-semibold text-slate-500">SILHOUETTE</span>
    <span class="font-mono text-[9px] text-slate-500">anon</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-slate-100 text-blue-600 ring-1 ring-blue-600/20">T</span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">AUTOMATION</span>
    <span class="font-mono text-[9px] text-slate-500">svc account</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-slate-100 text-slate-500 ring-1 ring-slate-200">D</span>
    <span class="font-mono text-[10px] font-semibold text-slate-500">ORGANIZATION</span>
    <span class="font-mono text-[9px] text-slate-500">tenant</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-14 w-14 shrink-0 cursor-pointer animate-pulse items-center justify-center overflow-hidden rounded-full bg-slate-200" role="status" aria-label="Cargando avatar">
      <span class="h-6 w-6 rounded-full bg-slate-100"></span>
    </span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">SKELETON</span>
    <span class="font-mono text-[9px] text-slate-500">animate-pulse</span>
  </div>
</div>
`;

export const AVATAR_FALLBACKS_TSX = `
export const AvatarFallbacks = () => {
  return (
    <div className="flex flex-wrap items-end gap-4">
      <div className="flex flex-col items-center gap-1.5">
        <span role="img" aria-label="Avatar con iniciales" className="inline-flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-blue-600/20">JD</span>
        <span className="font-mono text-[10px] font-semibold text-blue-700">INITIALS</span>
        <span className="font-mono text-[9px] text-slate-500">soft</span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span role="img" aria-label="Avatar con iniciales sólidas" className="inline-flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-base font-bold text-white ring-1 ring-blue-600">AR</span>
        <span className="font-mono text-[10px] font-semibold text-blue-700">INITIALS</span>
        <span className="font-mono text-[9px] text-slate-500">solid</span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span role="img" aria-label="Avatar genérico" className="inline-flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-slate-500 ring-1 ring-slate-200">P</span>
        <span className="font-mono text-[10px] font-semibold text-slate-500">SILHOUETTE</span>
        <span className="font-mono text-[9px] text-slate-500">anon</span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span role="img" aria-label="Cuenta de servicio" className="inline-flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-slate-100 text-blue-600 ring-1 ring-blue-600/20">T</span>
        <span className="font-mono text-[10px] font-semibold text-blue-700">AUTOMATION</span>
        <span className="font-mono text-[9px] text-slate-500">svc account</span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span role="img" aria-label="Organización" className="inline-flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-slate-100 text-slate-500 ring-1 ring-slate-200">D</span>
        <span className="font-mono text-[10px] font-semibold text-slate-500">ORGANIZATION</span>
        <span className="font-mono text-[9px] text-slate-500">tenant</span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span role="status" aria-label="Cargando avatar" className="inline-flex h-14 w-14 shrink-0 cursor-pointer animate-pulse items-center justify-center overflow-hidden rounded-full bg-slate-200">
          <span className="h-6 w-6 rounded-full bg-slate-100" />
        </span>
        <span className="font-mono text-[10px] font-semibold text-blue-700">SKELETON</span>
        <span className="font-mono text-[9px] text-slate-500">animate-pulse</span>
      </div>
    </div>
  );
};
`;
