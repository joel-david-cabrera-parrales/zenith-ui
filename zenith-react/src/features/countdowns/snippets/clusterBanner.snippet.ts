export const CLUSTER_BANNER_HTML = `
<div role="timer" aria-live="off" aria-label="Ventana de mantenimiento restante: 01:14:38" class="space-y-3 rounded-xl bg-blue-950 p-4 text-white shadow-md">
  <div class="flex items-start justify-between gap-2">
    <div class="flex items-center gap-2">
      <span class="material-symbols-outlined text-[18px] text-blue-400">dns</span>
      <span class="font-mono text-[11px] font-semibold text-blue-200">CLUSTER-EU-CENTRAL-01</span>
    </div>
    <span class="rounded bg-blue-500/20 px-1.5 py-0.5 font-mono text-[9px] uppercase text-blue-300">DRAINING</span>
  </div>
  <p class="text-xs text-blue-100">Ventana de migración sin interrupción a PostgreSQL v16.3.</p>
  <div class="flex items-center justify-between rounded-lg border border-blue-800 bg-blue-900/60 p-2.5">
    <span class="font-mono text-[10px] text-blue-300">VENTANA RESTANTE:</span>
    <span class="font-mono text-lg font-bold tracking-wider text-white">01:14:38</span>
  </div>
  <div class="space-y-1">
    <div class="h-1.5 w-full overflow-hidden rounded-full bg-blue-900">
      <div class="h-full rounded-full bg-blue-400" style="width: 42%;"></div>
    </div>
    <div class="flex justify-between font-mono text-[9px] text-blue-300">
      <span>Iniciado: 00:00 UTC</span>
      <span>Fin estimado: 02:30 UTC</span>
    </div>
  </div>
</div>
`;

export const CLUSTER_BANNER_TSX = `
import { useEffect, useState } from 'react';

export const ClusterMaintenanceBanner = () => {
  const initial = 1 * 3600 + 14 * 60 + 38;
  const [total, setTotal] = useState(initial);
  const done = total <= 0;

  useEffect(() => {
    if (done) return;
    const id = window.setInterval(() => {
      setTotal((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [done]);

  const progress = Math.max(0, Math.min(100, (total / initial) * 100));
  const text =
    String(Math.floor(total / 3600)).padStart(2, '0') +
    ':' +
    String(Math.floor((total % 3600) / 60)).padStart(2, '0') +
    ':' +
    String(total % 60).padStart(2, '0');

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label={'Ventana de mantenimiento restante: ' + text}
      className="space-y-3 rounded-xl bg-blue-950 p-4 text-white shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-blue-400">
            dns
          </span>
          <span className="font-mono text-[11px] font-semibold text-blue-200">CLUSTER-EU-CENTRAL-01</span>
        </div>
        <span className="rounded bg-blue-500/20 px-1.5 py-0.5 font-mono text-[9px] uppercase text-blue-300">
          {done ? 'COMPLETE' : 'DRAINING'}
        </span>
      </div>
      <p className="text-xs text-blue-100">Ventana de migración sin interrupción a PostgreSQL v16.3.</p>
      <div className="flex items-center justify-between rounded-lg border border-blue-800 bg-blue-900/60 p-2.5">
        <span className="font-mono text-[10px] text-blue-300">VENTANA RESTANTE:</span>
        <span className="font-mono text-lg font-bold tabular-nums tracking-wider text-white">{text}</span>
      </div>
      <div className="space-y-1">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-blue-900">
          <div className="h-full rounded-full bg-blue-400 transition-all" style={{ width: progress + '%' }} />
        </div>
        <div className="flex justify-between font-mono text-[9px] text-blue-300">
          <span>Iniciado: 00:00 UTC</span>
          <span>Fin estimado: 02:30 UTC</span>
        </div>
      </div>
    </div>
  );
};
`;
