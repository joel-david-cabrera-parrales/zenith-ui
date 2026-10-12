export const OUTLINE_BADGES_HTML = `
<div class="flex flex-wrap items-center gap-2">
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-blue-600/50 bg-transparent text-blue-700">Primary Outline</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-emerald-600/60 bg-transparent text-emerald-700">Success Outline</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-slate-500 bg-transparent text-slate-900">Warning Outline</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-red-500/50 bg-transparent text-red-600">Critical Outline</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-slate-300 bg-transparent text-slate-600">Neutral Outline</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-blue-500/40 bg-transparent text-blue-700">Info Outline</span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-indigo-500/40 bg-transparent text-indigo-600">Indigo Outline</span>
</div>
`;

export const OUTLINE_BADGES_TSX = `
export const OutlineBadges = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-blue-600/50 bg-transparent text-blue-700">Primary Outline</span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-emerald-600/60 bg-transparent text-emerald-700">Success Outline</span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-slate-500 bg-transparent text-slate-900">Warning Outline</span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-red-500/50 bg-transparent text-red-600">Critical Outline</span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-slate-300 bg-transparent text-slate-600">Neutral Outline</span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-blue-500/40 bg-transparent text-blue-700">Info Outline</span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border border-indigo-500/40 bg-transparent text-indigo-600">Indigo Outline</span>
    </div>
  );
};
`;
