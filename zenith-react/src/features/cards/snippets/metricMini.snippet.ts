export const METRIC_MINI_HTML = `
<div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
  <div>
    <div class="flex items-center justify-between mb-3">
      <div
        class="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-blue-600 border border-slate-200"
      >
        ~
      </div>
      <span
        class="px-2 py-0.5 rounded bg-slate-100 text-emerald-700 font-mono text-[9px] font-semibold border border-slate-200"
        >OPTIMAL</span
      >
    </div>
    <span class="text-xs font-semibold uppercase text-slate-500 tracking-wider block mb-1">Average Response Time</span>
    <div class="flex items-baseline gap-2 mb-1">
      <span class="text-2xl font-bold text-slate-900 tracking-tight">18.4ms</span>
      <span class="font-mono text-[9px] text-emerald-600 font-bold">-3.2ms</span>
    </div>
  </div>
  <div class="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
    <span>P95 BENCHMARK</span>
    <span class="text-slate-900 font-semibold">TARGET &lt; 25ms</span>
  </div>
</div>
`;

export const METRIC_MINI_TSX = `
export const MetricMiniCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-blue-600 border border-slate-200">
            ~
          </div>
          <span className="px-2 py-0.5 rounded bg-slate-100 text-emerald-700 font-mono text-[9px] font-semibold border border-slate-200">
            OPTIMAL
          </span>
        </div>
        <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider block mb-1">
          Average Response Time
        </span>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-2xl font-bold text-slate-900 tracking-tight">18.4ms</span>
          <span className="font-mono text-[9px] text-emerald-600 font-bold">-3.2ms</span>
        </div>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>P95 BENCHMARK</span>
        <span className="text-slate-900 font-semibold">TARGET &lt; 25ms</span>
      </div>
    </div>
  );
};
`;
