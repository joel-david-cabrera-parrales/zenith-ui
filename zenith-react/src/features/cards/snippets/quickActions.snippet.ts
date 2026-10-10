export const QUICK_ACTIONS_HTML = `<div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
  <div>
    <div class="flex items-center justify-between mb-3">
      <span class="text-xs font-semibold uppercase text-slate-500 tracking-wider">Quick Actions</span>
      <span class="font-mono text-[9px] text-slate-500">SHORTCUTS</span>
    </div>
    <div class="space-y-2 mb-2">
      <a href="#" class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
        <span class="text-sm font-semibold text-slate-900">Deploy New Cluster</span>
        <span class="font-mono text-[9px] text-slate-500">⌘+N</span>
      </a>
      <a href="#" class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
        <span class="text-sm font-semibold text-slate-900">Rotate Credentials</span>
        <span class="font-mono text-[9px] text-slate-500">⌘+R</span>
      </a>
    </div>
  </div>
  <div class="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
    <span>COMMAND_BAR: READY</span>
    <span class="text-blue-600">ALL SHORTCUTS →</span>
  </div>
</div>`;

export const QUICK_ACTIONS_TSX = `export const QuickActionsCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Quick Actions</span>
          <span className="font-mono text-[9px] text-slate-500">SHORTCUTS</span>
        </div>
        <div className="space-y-2 mb-2">
          <a href="#" className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
            <span className="text-sm font-semibold text-slate-900">Deploy New Cluster</span>
            <span className="font-mono text-[9px] text-slate-500">⌘+N</span>
          </a>
          <a href="#" className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
            <span className="text-sm font-semibold text-slate-900">Rotate Credentials</span>
            <span className="font-mono text-[9px] text-slate-500">⌘+R</span>
          </a>
        </div>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>COMMAND_BAR: READY</span>
        <span className="text-blue-600">ALL SHORTCUTS →</span>
      </div>
    </div>
  );
};`;
