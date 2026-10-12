export const SPLIT_BADGES_HTML = `
<div class="flex flex-wrap items-center gap-2">
  <span class="inline-flex items-stretch overflow-hidden rounded border border-slate-200 font-mono text-xs">
    <span class="bg-slate-200 px-2 py-0.5 font-bold text-slate-600">ENV</span>
    <span class="bg-emerald-600 px-2 py-0.5 font-bold text-white">PROD</span>
  </span>
  <span class="inline-flex items-stretch overflow-hidden rounded border border-slate-200 font-mono text-xs">
    <span class="bg-slate-200 px-2 py-0.5 font-bold text-slate-600">REGION</span>
    <span class="bg-blue-100 px-2 py-0.5 font-bold text-blue-800">us-east-1</span>
  </span>
  <span class="inline-flex items-stretch overflow-hidden rounded border border-slate-200 font-mono text-xs">
    <span class="bg-slate-200 px-2 py-0.5 font-bold text-slate-600">STATUS</span>
    <span class="bg-slate-100 px-2 py-0.5 font-bold text-emerald-700">200 OK</span>
  </span>
  <span class="inline-flex items-stretch overflow-hidden rounded border border-slate-200 font-mono text-xs">
    <span class="bg-slate-900 px-2 py-0.5 font-bold text-white">HTTP</span>
    <span class="bg-blue-600 px-2 py-0.5 font-bold text-white">POST</span>
  </span>
</div>
`;

export const SPLIT_BADGES_TSX = `
export const SplitBadges = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-stretch overflow-hidden rounded border border-slate-200 font-mono text-xs">
        <span className="bg-slate-200 px-2 py-0.5 font-bold text-slate-600">ENV</span>
        <span className="bg-emerald-600 px-2 py-0.5 font-bold text-white">PROD</span>
      </span>
      <span className="inline-flex items-stretch overflow-hidden rounded border border-slate-200 font-mono text-xs">
        <span className="bg-slate-200 px-2 py-0.5 font-bold text-slate-600">REGION</span>
        <span className="bg-blue-100 px-2 py-0.5 font-bold text-blue-800">us-east-1</span>
      </span>
      <span className="inline-flex items-stretch overflow-hidden rounded border border-slate-200 font-mono text-xs">
        <span className="bg-slate-200 px-2 py-0.5 font-bold text-slate-600">STATUS</span>
        <span className="bg-slate-100 px-2 py-0.5 font-bold text-emerald-700">200 OK</span>
      </span>
      <span className="inline-flex items-stretch overflow-hidden rounded border border-slate-200 font-mono text-xs">
        <span className="bg-slate-900 px-2 py-0.5 font-bold text-white">HTTP</span>
        <span className="bg-blue-600 px-2 py-0.5 font-bold text-white">POST</span>
      </span>
    </div>
  );
};
`;
