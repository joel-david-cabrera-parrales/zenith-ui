import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface ClusterMaintenanceBannerProps extends HTMLAttributes<HTMLDivElement> {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  clusterName?: string;
  onExpire?: () => void;
}

const pad = (n: number): string => String(n).padStart(2, '0');

export const ClusterMaintenanceBanner = ({
  initialHours = 1,
  initialMinutes = 14,
  initialSeconds = 38,
  clusterName = 'CLUSTER-EU-CENTRAL-01',
  onExpire,
  className = '',
  ...rest
}: ClusterMaintenanceBannerProps) => {
  const initial = initialHours * 3600 + initialMinutes * 60 + initialSeconds;
  const [total, setTotal] = useState(initial);
  const done = total <= 0;
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  useEffect(() => {
    if (done) {
      onExpireRef.current?.();
      return;
    }
    const id = window.setInterval(() => {
      setTotal((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [done]);

  const progress = Math.max(0, Math.min(100, (total / initial) * 100));
  const text = `${pad(Math.floor(total / 3600))}:${pad(Math.floor((total % 3600) / 60))}:${pad(total % 60)}`;

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label={`Ventana de mantenimiento restante: ${text}`}
      className={`space-y-3 rounded-xl bg-blue-950 p-4 text-white shadow-md ${className}`}
      {...rest}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-blue-400">
            dns
          </span>
          <span className="font-mono text-[11px] font-semibold text-blue-200">{clusterName}</span>
        </div>
        <span className="rounded bg-blue-500/20 px-1.5 py-0.5 font-mono text-[9px] text-blue-300 uppercase">
          {done ? 'COMPLETE' : 'DRAINING'}
        </span>
      </div>
      <p className="text-xs text-blue-100">
        Ventana de migración sin interrupción a PostgreSQL v16.3.
      </p>
      <div className="flex items-center justify-between rounded-lg border border-blue-800 bg-blue-900/60 p-2.5">
        <span className="font-mono text-[10px] text-blue-300">VENTANA RESTANTE:</span>
        <span className="font-mono text-lg font-bold tabular-nums tracking-wider text-white">{text}</span>
      </div>
      <div className="space-y-1">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-blue-900">
          <div className="h-full rounded-full bg-blue-400 transition-all" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex justify-between font-mono text-[9px] text-blue-300">
          <span>Iniciado: 00:00 UTC</span>
          <span>Fin estimado: 02:30 UTC</span>
        </div>
      </div>
    </div>
  );
};
