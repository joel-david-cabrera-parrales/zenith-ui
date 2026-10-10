export const GATEWAY_SPLIT_HTML = `
<div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
  <div>
    <div class="flex items-center justify-between mb-3">
      <span class="text-xs font-semibold uppercase text-slate-500 tracking-wider">Gateway Network</span>
      <span class="px-2 py-0.5 rounded bg-slate-50 text-slate-500 font-mono text-[9px] border border-slate-200"
        >REGION: US-EAST</span
      >
    </div>
    <div class="text-2xl font-bold text-slate-900 mb-3">
      1,248,930 <span class="text-[11px] text-slate-500 font-normal ml-1">total requests</span>
    </div>
    <div class="grid grid-cols-3 gap-2 py-2">
      <div class="bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
        <span class="font-mono text-[9px] text-slate-500 block">LATENCY</span>
        <span class="text-sm font-semibold text-slate-900">24ms</span>
        <span class="font-mono text-[9px] text-emerald-600 block mt-0.5 font-bold">-2ms</span>
      </div>
      <div class="bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
        <span class="font-mono text-[9px] text-slate-500 block">SUCCESS</span>
        <span class="text-sm font-semibold text-slate-900">99.98%</span>
        <span class="font-mono text-[9px] text-emerald-600 block mt-0.5 font-bold">NOMINAL</span>
      </div>
      <div class="bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
        <span class="font-mono text-[9px] text-slate-500 block">DROPPED</span>
        <span class="text-sm font-semibold text-rose-600">12</span>
        <span class="font-mono text-[9px] text-rose-600 block mt-0.5 font-bold">0.001%</span>
      </div>
    </div>
  </div>
  <div
    class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500"
  >
    <span>EDGE_NODES: 32/32 ONLINE</span>
    <span class="text-blue-600 font-semibold">TELEMETRY &gt;</span>
  </div>
</div>
`;

export const GATEWAY_SPLIT_TSX = `
export const GatewaySplitCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Gateway Network</span>
          <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-500 font-mono text-[9px] border border-slate-200">
            REGION: US-EAST
          </span>
        </div>
        <div className="text-2xl font-bold text-slate-900 mb-3">
          1,248,930 <span className="text-[11px] text-slate-500 font-normal ml-1">total requests</span>
        </div>
        <div className="grid grid-cols-3 gap-2 py-2">
          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
            <span className="font-mono text-[9px] text-slate-500 block">LATENCY</span>
            <span className="text-sm font-semibold text-slate-900">24ms</span>
            <span className="font-mono text-[9px] text-emerald-600 block mt-0.5 font-bold">-2ms</span>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
            <span className="font-mono text-[9px] text-slate-500 block">SUCCESS</span>
            <span className="text-sm font-semibold text-slate-900">99.98%</span>
            <span className="font-mono text-[9px] text-emerald-600 block mt-0.5 font-bold">NOMINAL</span>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
            <span className="font-mono text-[9px] text-slate-500 block">DROPPED</span>
            <span className="text-sm font-semibold text-rose-600">12</span>
            <span className="font-mono text-[9px] text-rose-600 block mt-0.5 font-bold">0.001%</span>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>EDGE_NODES: 32/32 ONLINE</span>
        <span className="text-blue-600 font-semibold">TELEMETRY &gt;</span>
      </div>
    </div>
  );
};
`;
