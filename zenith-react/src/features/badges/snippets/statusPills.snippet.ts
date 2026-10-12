export const STATUS_PILLS_HTML = `
<div class="flex flex-wrap items-center gap-2">
  <span class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border border-emerald-600/20 bg-slate-100 text-emerald-700">
    <span class="relative flex h-2 w-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
    </span>
    <span>Online / Activo</span>
  </span>
  <span class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border border-amber-500/30 bg-amber-100 text-amber-900">
    <span class="h-2 w-2 rounded-full bg-amber-500"></span>
    <span>Degraded / 340ms</span>
  </span>
  <span class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border border-red-500/20 bg-red-100 text-red-700">
    <span class="relative flex h-2 w-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
    </span>
    <span>Offline / Caído</span>
  </span>
  <span class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border border-blue-500/20 bg-blue-100 text-blue-700">
    <span class="h-2 w-2 rounded-full bg-blue-500"></span>
    <span>Mantenimiento</span>
  </span>
  <span class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border border-slate-300 bg-slate-100 text-slate-600">
    <span class="h-2 w-2 rounded-full bg-slate-400"></span>
    <span>En Cola (Standby)</span>
  </span>
</div>
<div class="flex flex-wrap items-center gap-2">
  <span class="inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-semibold border border-slate-200 bg-white text-emerald-700 shadow-sm">
    <span class="relative flex h-2 w-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
    </span>
    <span>SYS_READY</span>
  </span>
  <span class="inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-semibold border border-slate-200 bg-white text-amber-800 shadow-sm">
    <span class="h-2 w-2 rounded-full bg-amber-500"></span>
    <span>THROTTLED</span>
  </span>
  <span class="inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-semibold border border-red-500/40 bg-white text-red-600 shadow-sm">
    <span class="h-2 w-2 rounded-full bg-red-500"></span>
    <span>ERR_503_CRIT</span>
  </span>
  <span class="inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-semibold border border-slate-200 bg-white text-blue-700 shadow-sm">
    <span class="h-2 w-2 rounded-full bg-blue-500"></span>
    <span>SYNC_RUNNING</span>
  </span>
  <span class="inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-semibold border border-slate-200 bg-white text-slate-600 shadow-sm">
    <span class="h-2 w-2 rounded-full bg-slate-400"></span>
    <span>IDLE_DRAIN</span>
  </span>
</div>
`;

export const STATUS_PILLS_TSX = `
export const StatusPills = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border border-emerald-600/20 bg-slate-100 text-emerald-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Online / Activo</span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border border-amber-500/30 bg-amber-100 text-amber-900">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          <span>Degraded / 340ms</span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border border-red-500/20 bg-red-100 text-red-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span>Offline / Caído</span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border border-blue-500/20 bg-blue-100 text-blue-700">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          <span>Mantenimiento</span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border border-slate-300 bg-slate-100 text-slate-600">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span>En Cola (Standby)</span>
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-semibold border border-slate-200 bg-white text-emerald-700 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>SYS_READY</span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-semibold border border-slate-200 bg-white text-amber-800 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          <span>THROTTLED</span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-semibold border border-red-500/40 bg-white text-red-600 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          <span>ERR_503_CRIT</span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-semibold border border-slate-200 bg-white text-blue-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          <span>SYNC_RUNNING</span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-semibold border border-slate-200 bg-white text-slate-600 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span>IDLE_DRAIN</span>
        </span>
      </div>
    </div>
  );
};
`;
