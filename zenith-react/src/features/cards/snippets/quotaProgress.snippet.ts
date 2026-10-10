export const QUOTA_PROGRESS_HTML = `
<div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
  <div>
    <div class="flex items-center justify-between mb-3">
      <span class="text-xs font-semibold uppercase text-slate-500 tracking-wider">Cluster Quota Usage</span>
      <span class="font-mono text-[9px] text-blue-600 bg-blue-100 px-2 py-0.5 rounded font-semibold">ACTIVE_CYCLE</span>
    </div>
    <div class="flex items-baseline justify-between mb-2">
      <div class="text-2xl font-bold text-slate-900">82.4%</div>
      <div class="text-right">
        <span class="font-mono text-[9px] text-slate-500 block">TARGET CAP</span>
        <span class="text-sm font-semibold text-slate-900">16.4 / 20.0 TB</span>
      </div>
    </div>
    <div class="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden flex my-3">
      <div class="bg-blue-600 h-full rounded-l-full" style="width: 68%;"></div>
      <div class="bg-blue-900 h-full" style="width: 14.4%;"></div>
      <div class="bg-slate-300/40 h-full flex-1"></div>
    </div>
    <div class="flex items-center justify-between font-mono text-[9px] text-slate-500 pt-1">
      <span>DB Allocated (68%)</span>
      <span>Buffers (14.4%)</span>
    </div>
  </div>
  <div class="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
    <span class="text-slate-500">Within threshold</span>
    <span class="font-mono text-[9px] text-slate-900 font-semibold">ETA LIMIT: ~18 DAYS</span>
  </div>
</div>
`;

export const QUOTA_PROGRESS_TSX = `
export const QuotaProgressCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Cluster Quota Usage</span>
          <span className="font-mono text-[9px] text-blue-600 bg-blue-100 px-2 py-0.5 rounded font-semibold">
            ACTIVE_CYCLE
          </span>
        </div>
        <div className="flex items-baseline justify-between mb-2">
          <div className="text-2xl font-bold text-slate-900">82.4%</div>
          <div className="text-right">
            <span className="font-mono text-[9px] text-slate-500 block">TARGET CAP</span>
            <span className="text-sm font-semibold text-slate-900">16.4 / 20.0 TB</span>
          </div>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden flex my-3">
          <div className="bg-blue-600 h-full rounded-l-full" style={{ width: '68%' }}></div>
          <div className="bg-blue-900 h-full" style={{ width: '14.4%' }}></div>
          <div className="bg-slate-300/40 h-full flex-1"></div>
        </div>
        <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 pt-1">
          <span>DB Allocated (68%)</span>
          <span>Buffers (14.4%)</span>
        </div>
      </div>
      <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
        <span className="text-slate-500">Within threshold</span>
        <span className="font-mono text-[9px] text-slate-900 font-semibold">ETA LIMIT: ~18 DAYS</span>
      </div>
    </div>
  );
};
`;
