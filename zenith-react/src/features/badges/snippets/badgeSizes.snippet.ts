export const BADGE_SIZES_HTML = `
<div class="flex flex-wrap items-end gap-3">
  <span class="inline-flex items-center rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold leading-3 border border-blue-500/20 bg-blue-100 text-blue-800">MICRO_TAG</span>
  <span class="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800">Small Data</span>
  <span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold shadow-sm bg-blue-600 text-white">Medium Default</span>
  <span class="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-bold shadow-sm bg-emerald-600 text-white">
    <span class="h-2 w-2 rounded-full bg-white animate-pulse"></span>
    Large Prominent
  </span>
</div>
`;

export const BADGE_SIZES_TSX = `
export const BadgeSizes = () => {
  return (
    <div className="flex flex-wrap items-end gap-3">
      <span className="inline-flex items-center rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold leading-3 border border-blue-500/20 bg-blue-100 text-blue-800">MICRO_TAG</span>
      <span className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800">Small Data</span>
      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold shadow-sm bg-blue-600 text-white">Medium Default</span>
      <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-bold shadow-sm bg-emerald-600 text-white">
        <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
        Large Prominent
      </span>
    </div>
  );
};
`;
