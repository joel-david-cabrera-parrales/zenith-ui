export const PRODUCT_RESOURCE_HTML = `<div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
  <div>
    <div class="relative rounded-lg border border-slate-200/60 mb-3 aspect-square bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 flex items-center justify-center">
      <span class="absolute top-2 right-2 px-2 py-0.5 rounded bg-white text-emerald-700 font-mono text-[9px] font-bold border border-slate-200">STABLE</span>
    </div>
    <div class="flex items-center justify-between mb-1">
      <span class="font-mono text-[9px] text-slate-500">PKG // DEV-TOOLKIT</span>
      <span class="text-sm font-bold text-blue-600">v3.12.4</span>
    </div>
    <h3 class="text-sm font-semibold text-slate-900 mb-1">Zenith Sensor Agent</h3>
    <p class="text-xs text-slate-500 mb-3">Ultra-lightweight Linux telemetry exporter with Prometheus native endpoints.</p>
  </div>
  <div class="pt-3 border-t border-slate-200">
    <div class="flex items-center justify-between mb-3 font-mono text-[9px] text-slate-500">
      <span>LICENSED: MIT</span>
      <span>SIZE: 8.4MB</span>
    </div>
    <button class="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-600 text-white text-sm font-semibold">Install Package</button>
  </div>
</div>`;

export const PRODUCT_RESOURCE_TSX = `export const ProductResourceCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between">
      <div>
        <div className="relative rounded-lg border border-slate-200/60 mb-3 aspect-square bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 flex items-center justify-center">
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-white text-emerald-700 font-mono text-[9px] font-bold border border-slate-200">STABLE</span>
        </div>
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-[9px] text-slate-500">PKG // DEV-TOOLKIT</span>
          <span className="text-sm font-bold text-blue-600">v3.12.4</span>
        </div>
        <h3 className="text-sm font-semibold text-slate-900 mb-1">Zenith Sensor Agent</h3>
        <p className="text-xs text-slate-500 mb-3">Ultra-lightweight Linux telemetry exporter with Prometheus native endpoints.</p>
      </div>
      <div className="pt-3 border-t border-slate-200">
        <div className="flex items-center justify-between mb-3 font-mono text-[9px] text-slate-500">
          <span>LICENSED: MIT</span>
          <span>SIZE: 8.4MB</span>
        </div>
        <button className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-600 text-white text-sm font-semibold">Install Package</button>
      </div>
    </div>
  );
};`;
