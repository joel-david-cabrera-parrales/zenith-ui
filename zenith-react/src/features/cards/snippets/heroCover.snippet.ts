export const HERO_COVER_HTML = `
<div
  class="relative rounded-xl overflow-hidden border border-slate-700 shadow-sm min-h-[380px] flex flex-col justify-between p-5 bg-slate-900"
>
  <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950"></div>
  <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
  <div class="relative z-10 flex items-center justify-between">
    <span class="px-2.5 py-1 rounded bg-blue-600 text-white font-mono text-[9px] font-semibold uppercase tracking-wider"
      >Architecture</span
    >
    <span class="text-slate-200 font-mono text-[9px] bg-slate-950/60 px-2 py-0.5 rounded">6 MIN READ</span>
  </div>
  <div class="relative z-10">
    <h3 class="text-sm font-bold text-white mb-2 leading-snug">Distributed Telemetry Pipelines at Enterprise Scale</h3>
    <p class="text-xs text-slate-300 mb-4">Deep dive into multi-region edge ingestion with zero data loss.</p>
    <div class="flex items-center justify-between pt-3 border-t border-white/20">
      <div class="flex items-center gap-2">
        <div class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
          EV
        </div>
        <div>
          <span class="block text-xs font-semibold text-white">Elena Vance</span>
          <span class="block font-mono text-[9px] text-slate-300">Staff Systems Eng</span>
        </div>
      </div>
      <button class="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center">→</button>
    </div>
  </div>
</div>
`;

export const HERO_COVER_TSX = `
export const HeroCoverCard = () => {
  return (
    <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-sm min-h-[380px] flex flex-col justify-between p-5 bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
      <div className="relative z-10 flex items-center justify-between">
        <span className="px-2.5 py-1 rounded bg-blue-600 text-white font-mono text-[9px] font-semibold uppercase tracking-wider">
          Architecture
        </span>
        <span className="text-slate-200 font-mono text-[9px] bg-slate-950/60 px-2 py-0.5 rounded">6 MIN READ</span>
      </div>
      <div className="relative z-10">
        <h3 className="text-sm font-bold text-white mb-2 leading-snug">
          Distributed Telemetry Pipelines at Enterprise Scale
        </h3>
        <p className="text-xs text-slate-300 mb-4">Deep dive into multi-region edge ingestion with zero data loss.</p>
        <div className="flex items-center justify-between pt-3 border-t border-white/20">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
              EV
            </div>
            <div>
              <span className="block text-xs font-semibold text-white">Elena Vance</span>
              <span className="block font-mono text-[9px] text-slate-300">Staff Systems Eng</span>
            </div>
          </div>
          <button className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center">→</button>
        </div>
      </div>
    </div>
  );
};
`;
