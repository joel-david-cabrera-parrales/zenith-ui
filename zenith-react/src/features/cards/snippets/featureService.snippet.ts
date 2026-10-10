export const FEATURE_SERVICE_HTML = `
<div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
  <div>
    <div
      class="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-blue-600 mb-4 border border-slate-200"
    >
      db
    </div>
    <h3 class="text-sm font-semibold text-slate-900 mb-1.5">Automated Rebalancing</h3>
    <p class="text-xs text-slate-500 mb-4">
      Realtime partition sharding with dynamic storage migration and zero downtime.
    </p>
    <ul class="space-y-2 mb-4">
      <li class="flex items-center gap-2 text-xs text-slate-900">✓ Weighted consumer groups</li>
      <li class="flex items-center gap-2 text-xs text-slate-900">✓ Zero lock metadata synchronization</li>
      <li class="flex items-center gap-2 text-xs text-slate-900">✓ Automatic dead-letter drain</li>
    </ul>
  </div>
  <div class="pt-3 border-t border-slate-200">
    <a href="#" class="text-blue-600 text-sm font-semibold flex items-center justify-between"
      ><span>Inspect Configuration</span><span>→</span></a
    >
  </div>
</div>
`;

export const FEATURE_SERVICE_TSX = `
export const FeatureServiceCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-blue-600 mb-4 border border-slate-200">
          db
        </div>
        <h3 className="text-sm font-semibold text-slate-900 mb-1.5">Automated Rebalancing</h3>
        <p className="text-xs text-slate-500 mb-4">
          Realtime partition sharding with dynamic storage migration and zero downtime.
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-center gap-2 text-xs text-slate-900">✓ Weighted consumer groups</li>
          <li className="flex items-center gap-2 text-xs text-slate-900">✓ Zero lock metadata synchronization</li>
          <li className="flex items-center gap-2 text-xs text-slate-900">✓ Automatic dead-letter drain</li>
        </ul>
      </div>
      <div className="pt-3 border-t border-slate-200">
        <a href="#" className="text-blue-600 text-sm font-semibold flex items-center justify-between">
          <span>Inspect Configuration</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
};
`;
