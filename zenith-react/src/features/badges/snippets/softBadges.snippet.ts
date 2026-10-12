export const SOFT_BADGES_HTML = `
<div class="flex flex-wrap items-center gap-2">
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm bg-blue-100 text-blue-800">Primary Soft</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm bg-emerald-100 text-emerald-800">Success Soft</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm bg-amber-100 text-amber-900">Warning Soft</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm bg-red-100 text-red-700">Critical Soft</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-slate-300 bg-slate-100 text-slate-600">Neutral Soft</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm bg-blue-100 text-blue-800">Info Soft</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm bg-indigo-100 text-indigo-800">Indigo Soft</span>
</div>
`;

export const SOFT_BADGES_TSX = `
export const SoftBadges = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm bg-blue-100 text-blue-800">Primary Soft</span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm bg-emerald-100 text-emerald-800">Success Soft</span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm bg-amber-100 text-amber-900">Warning Soft</span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm bg-red-100 text-red-700">Critical Soft</span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-slate-300 bg-slate-100 text-slate-600">Neutral Soft</span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm bg-blue-100 text-blue-800">Info Soft</span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm bg-indigo-100 text-indigo-800">Indigo Soft</span>
    </div>
  );
};
`;
