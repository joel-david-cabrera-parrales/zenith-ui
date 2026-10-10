export const ALERT_NOTICE_HTML = `<div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
  <div>
    <div class="flex items-start justify-between mb-3">
      <span class="text-xs font-semibold uppercase tracking-wider text-slate-900">Scheduled Maintenance</span>
    </div>
    <p class="text-sm text-slate-500 mb-4">Regional database replica resync will occur on Sunday at 02:00 UTC.</p>
    <div class="bg-slate-50 p-3 rounded-lg border border-slate-200 font-mono text-[9px] text-slate-500 space-y-1 mb-3">
      <div class="flex justify-between"><span>WINDOW:</span><span class="text-slate-900 font-semibold">02:00 - 02:30 UTC</span></div>
      <div class="flex justify-between"><span>IMPACTED:</span><span class="text-slate-900 font-semibold">US-EAST, EU-CENTRAL</span></div>
    </div>
  </div>
  <div class="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
    <button class="text-sm font-semibold text-slate-500">Acknowledge</button>
    <button class="px-3 py-1.5 rounded-lg bg-slate-100 text-blue-600 text-sm font-semibold">View Calendar</button>
  </div>
</div>`;

export const ALERT_NOTICE_TSX = `import { useState } from 'react';

export const AlertNoticeCard = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-center justify-between">
        <span className="text-xs text-slate-500">Aviso descartado. La ventana sigue programada.</span>
        <button
          onClick={() => setDismissed(false)}
          className="px-3 py-1.5 rounded-lg bg-slate-100 text-blue-600 text-sm font-semibold"
        >
          Mostrar
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-900">Scheduled Maintenance</span>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Descartar aviso"
            className="text-slate-400"
          >
            ✕
          </button>
        </div>
        <p className="text-sm text-slate-500 mb-4">Regional database replica resync will occur on Sunday at 02:00 UTC.</p>
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 font-mono text-[9px] text-slate-500 space-y-1 mb-3">
          <div className="flex justify-between"><span>WINDOW:</span><span className="text-slate-900 font-semibold">02:00 - 02:30 UTC</span></div>
          <div className="flex justify-between"><span>IMPACTED:</span><span className="text-slate-900 font-semibold">US-EAST, EU-CENTRAL</span></div>
        </div>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
        <button onClick={() => setDismissed(true)} className="text-sm font-semibold text-slate-500">Acknowledge</button>
        <button className="px-3 py-1.5 rounded-lg bg-slate-100 text-blue-600 text-sm font-semibold">View Calendar</button>
      </div>
    </div>
  );
};`;
