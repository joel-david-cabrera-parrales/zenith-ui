export const STAT_SPARKLINE_HTML = `
<div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
  <div class="flex items-start justify-between mb-4">
    <div class="flex items-center gap-3">
      <div
        class="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-blue-600 border border-slate-200"
      >
        stats
      </div>
      <div>
        <span class="text-xs font-semibold uppercase text-slate-500 tracking-wider block">Throughput Rate</span>
        <span class="font-mono text-[9px] text-slate-500">telemetry.stream.hz</span>
      </div>
    </div>
    <span
      class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-emerald-700 font-mono text-[9px] border border-slate-200"
      >+14.2%</span
    >
  </div>
  <div class="mb-4">
    <div class="flex items-baseline gap-2">
      <span class="text-2xl font-bold text-slate-900 tracking-tight">4,892.4</span>
      <span class="font-mono text-xs text-slate-500">ops/sec</span>
    </div>
    <p class="text-[11px] text-slate-500 mt-1">Compared to previous 24h baseline (4,284 ops/sec)</p>
  </div>
  <div class="pt-2 border-t border-slate-200">
    <div class="flex items-center justify-between font-mono text-[9px] text-slate-500 mb-1.5">
      <span>ROLLING_WINDOW_24H</span>
      <span class="text-blue-600 font-bold">PEAK 5,120</span>
    </div>
    <svg class="w-full h-11 text-blue-600" fill="none" preserveAspectRatio="none" viewBox="0 0 280 40">
      <path
        d="M0 32 L20 28 L40 34 L60 22 L80 25 L100 15 L120 18 L140 10 L160 14 L180 8 L200 12 L220 5 L240 10 L260 4 L280 2"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
      <path
        d="M0 32 L20 28 L40 34 L60 22 L80 25 L100 15 L120 18 L140 10 L160 14 L180 8 L200 12 L220 5 L240 10 L260 4 L280 2 L280 40 L0 40 Z"
        fill="currentColor"
        fill-opacity="0.08"
      ></path>
    </svg>
  </div>
</div>
`;

export const STAT_SPARKLINE_TSX = `
export const StatSparklineCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-blue-600 border border-slate-200">
            stats
          </div>
          <div>
            <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider block">Throughput Rate</span>
            <span className="font-mono text-[9px] text-slate-500">telemetry.stream.hz</span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-emerald-700 font-mono text-[9px] border border-slate-200">
          +14.2%
        </span>
      </div>
      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-slate-900 tracking-tight">4,892.4</span>
          <span className="font-mono text-xs text-slate-500">ops/sec</span>
        </div>
        <p className="text-[11px] text-slate-500 mt-1">Compared to previous 24h baseline (4,284 ops/sec)</p>
      </div>
      <div className="pt-2 border-t border-slate-200">
        <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 mb-1.5">
          <span>ROLLING_WINDOW_24H</span>
          <span className="text-blue-600 font-bold">PEAK 5,120</span>
        </div>
        <svg className="w-full h-11 text-blue-600" fill="none" preserveAspectRatio="none" viewBox="0 0 280 40">
          <path
            d="M0 32 L20 28 L40 34 L60 22 L80 25 L100 15 L120 18 L140 10 L160 14 L180 8 L200 12 L220 5 L240 10 L260 4 L280 2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
          <path
            d="M0 32 L20 28 L40 34 L60 22 L80 25 L100 15 L120 18 L140 10 L160 14 L180 8 L200 12 L220 5 L240 10 L260 4 L280 2 L280 40 L0 40 Z"
            fill="currentColor"
            fillOpacity="0.08"
          ></path>
        </svg>
      </div>
    </div>
  );
};
`;
