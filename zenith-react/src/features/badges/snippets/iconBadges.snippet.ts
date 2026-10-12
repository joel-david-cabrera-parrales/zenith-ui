export const ICON_BADGES_HTML = `
<div class="flex flex-wrap items-center gap-2">
  <span class="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium bg-blue-100 text-blue-700">
    <span class="material-symbols-outlined text-[16px]">cloud</span>
    <span>Cloud Engine</span>
  </span>
  <span class="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium border border-emerald-600/20 bg-emerald-100 text-emerald-700">
    <span class="material-symbols-outlined text-[16px]">verified</span>
    <span>Audit Passed</span>
  </span>
  <span class="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium bg-slate-200 text-slate-700">
    <span class="material-symbols-outlined text-[16px]">terminal</span>
    <span>Console v2.4</span>
  </span>
  <span class="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium bg-indigo-100 text-indigo-800">
    <span class="material-symbols-outlined text-[16px]">bolt</span>
    <span>Fast Gateway</span>
  </span>
</div>
`;

export const ICON_BADGES_TSX = `
export const IconBadges = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium bg-blue-100 text-blue-700">
        <span aria-hidden="true" className="material-symbols-outlined text-[16px]">cloud</span>
        <span>Cloud Engine</span>
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium border border-emerald-600/20 bg-emerald-100 text-emerald-700">
        <span aria-hidden="true" className="material-symbols-outlined text-[16px]">verified</span>
        <span>Audit Passed</span>
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium bg-slate-200 text-slate-700">
        <span aria-hidden="true" className="material-symbols-outlined text-[16px]">terminal</span>
        <span>Console v2.4</span>
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium bg-indigo-100 text-indigo-800">
        <span aria-hidden="true" className="material-symbols-outlined text-[16px]">bolt</span>
        <span>Fast Gateway</span>
      </span>
    </div>
  );
};
`;
