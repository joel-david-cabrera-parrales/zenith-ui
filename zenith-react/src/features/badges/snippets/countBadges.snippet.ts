export const COUNT_BADGES_HTML = `
<div class="flex flex-wrap items-center gap-2">
  <span class="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium bg-red-100 text-red-700">
    <span>Alertas</span>
    <span class="flex h-4 w-4 items-center justify-center rounded-full bg-red-600 font-mono text-[10px] font-bold text-white">14</span>
  </span>
  <span class="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium border border-slate-200 bg-slate-100 text-slate-700">
    <span>PRs Mergeados</span>
    <span class="rounded-full bg-blue-600 px-1.5 font-mono text-[10px] font-bold text-white">#402</span>
  </span>
  <span class="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium border border-slate-200 bg-slate-50 text-slate-600">
    <span>Build</span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">v2.4.1</span>
  </span>
  <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold bg-slate-900 text-white">
    <span>Tier</span>
    <span class="rounded bg-emerald-600 px-1.5 py-0.5 text-[9px] uppercase tracking-wide text-white">PRO</span>
  </span>
</div>
`;

export const COUNT_BADGES_TSX = `
export const CountBadges = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium bg-red-100 text-red-700">
        <span>Alertas</span>
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-600 font-mono text-[10px] font-bold text-white">14</span>
      </span>
      <span className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium border border-slate-200 bg-slate-100 text-slate-700">
        <span>PRs Mergeados</span>
        <span className="rounded-full bg-blue-600 px-1.5 font-mono text-[10px] font-bold text-white">#402</span>
      </span>
      <span className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium border border-slate-200 bg-slate-50 text-slate-600">
        <span>Build</span>
        <span className="font-mono text-[10px] font-semibold text-blue-700">v2.4.1</span>
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold bg-slate-900 text-white">
        <span>Tier</span>
        <span className="rounded bg-emerald-600 px-1.5 py-0.5 text-[9px] uppercase tracking-wide text-white">PRO</span>
      </span>
    </div>
  );
};
`;
