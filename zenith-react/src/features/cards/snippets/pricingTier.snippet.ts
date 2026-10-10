export const PRICING_TIER_HTML = `<div class="bg-white border-2 border-blue-600 rounded-xl p-5 shadow-md flex flex-col justify-between relative overflow-hidden">
  <div class="absolute -right-12 top-5 rotate-45 bg-blue-600 text-white font-mono text-[9px] uppercase px-12 py-0.5 text-center">RECOMMENDED</div>
  <div>
    <div class="mb-3">
      <span class="font-mono text-[9px] text-blue-600 uppercase font-bold tracking-wider">PLATFORM TIER</span>
      <h3 class="text-sm font-bold text-slate-900">Developer Scale</h3>
    </div>
    <div class="flex items-baseline gap-1 mb-4">
      <span class="text-2xl font-bold text-slate-900 tracking-tight">$189</span>
      <span class="text-xs text-slate-500">/ cluster / month</span>
    </div>
    <ul class="space-y-2.5 mb-5">
      <li class="flex items-center gap-2 text-xs text-slate-900">✓ 50M events / month included</li>
      <li class="flex items-center gap-2 text-xs text-slate-900">✓ Dedicated isolated edge gateway</li>
      <li class="flex items-center gap-2 text-xs text-slate-900">✓ Custom telemetry retention (90d)</li>
      <li class="flex items-center gap-2 text-xs text-slate-900">✓ 24/7 SRE escalation channel</li>
    </ul>
  </div>
  <div>
    <button class="w-full py-2.5 px-4 rounded-lg bg-blue-600 text-white text-sm font-semibold text-center">Provision Cluster</button>
  </div>
</div>`;

export const PRICING_TIER_TSX = `export const PricingTierCard = () => {
  return (
    <div className="bg-white border-2 border-blue-600 rounded-xl p-5 shadow-md flex flex-col justify-between relative overflow-hidden">
      <div className="absolute -right-12 top-5 rotate-45 bg-blue-600 text-white font-mono text-[9px] uppercase px-12 py-0.5 text-center">RECOMMENDED</div>
      <div>
        <div className="mb-3">
          <span className="font-mono text-[9px] text-blue-600 uppercase font-bold tracking-wider">PLATFORM TIER</span>
          <h3 className="text-sm font-bold text-slate-900">Developer Scale</h3>
        </div>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-2xl font-bold text-slate-900 tracking-tight">$189</span>
          <span className="text-xs text-slate-500">/ cluster / month</span>
        </div>
        <ul className="space-y-2.5 mb-5">
          <li className="flex items-center gap-2 text-xs text-slate-900">✓ 50M events / month included</li>
          <li className="flex items-center gap-2 text-xs text-slate-900">✓ Dedicated isolated edge gateway</li>
          <li className="flex items-center gap-2 text-xs text-slate-900">✓ Custom telemetry retention (90d)</li>
          <li className="flex items-center gap-2 text-xs text-slate-900">✓ 24/7 SRE escalation channel</li>
        </ul>
      </div>
      <div>
        <button className="w-full py-2.5 px-4 rounded-lg bg-blue-600 text-white text-sm font-semibold text-center">Provision Cluster</button>
      </div>
    </div>
  );
};`;
