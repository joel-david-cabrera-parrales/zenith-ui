import type { HTMLAttributes } from 'react';

export type StatusKind = 'online' | 'degraded' | 'offline' | 'maintenance' | 'standby';

export type StatusShape = 'pill' | 'tech';

export interface StatusPillProps extends HTMLAttributes<HTMLSpanElement> {
  status?: StatusKind;
  shape?: StatusShape;
}

interface StatusConfig {
  pillLabel: string;
  techLabel: string;
  pillClasses: string;
  techClasses: string;
  dotClasses: string;
  live: boolean;
}

const STATUS_CONFIG: Record<StatusKind, StatusConfig> = {
  online: {
    pillLabel: 'Online / Activo',
    techLabel: 'SYS_READY',
    pillClasses: 'border border-emerald-600/20 bg-slate-100 text-emerald-700',
    techClasses: 'border border-slate-200 bg-white text-emerald-700 shadow-sm',
    dotClasses: 'bg-emerald-500',
    live: true,
  },
  degraded: {
    pillLabel: 'Degraded / 340ms',
    techLabel: 'THROTTLED',
    pillClasses: 'border border-amber-500/30 bg-amber-100 text-amber-900',
    techClasses: 'border border-slate-200 bg-white text-amber-800 shadow-sm',
    dotClasses: 'bg-amber-500',
    live: false,
  },
  offline: {
    pillLabel: 'Offline / Caído',
    techLabel: 'ERR_503_CRIT',
    pillClasses: 'border border-red-500/20 bg-red-100 text-red-700',
    techClasses: 'border border-red-500/40 bg-white text-red-600 shadow-sm',
    dotClasses: 'bg-red-500',
    live: true,
  },
  maintenance: {
    pillLabel: 'Mantenimiento',
    techLabel: 'SYNC_RUNNING',
    pillClasses: 'border border-blue-500/20 bg-blue-100 text-blue-700',
    techClasses: 'border border-slate-200 bg-white text-blue-700 shadow-sm',
    dotClasses: 'bg-blue-500',
    live: false,
  },
  standby: {
    pillLabel: 'En Cola (Standby)',
    techLabel: 'IDLE_DRAIN',
    pillClasses: 'border border-slate-300 bg-slate-100 text-slate-600',
    techClasses: 'border border-slate-200 bg-white text-slate-600 shadow-sm',
    dotClasses: 'bg-slate-400',
    live: false,
  },
};

export const StatusPill = ({ status = 'online', shape = 'pill', className = '', ...rest }: StatusPillProps) => {
  const config = STATUS_CONFIG[status];
  const label = shape === 'pill' ? config.pillLabel : config.techLabel;
  const shapeClasses =
    shape === 'pill'
      ? 'gap-2 rounded-full px-3 py-1'
      : 'gap-2 rounded-md px-2.5 py-1';

  return (
    <span
      className={`inline-flex items-center ${shapeClasses} text-xs font-semibold ${shape === 'pill' ? config.pillClasses : config.techClasses} ${className}`}
      {...rest}
    >
      {config.live ? (
        <span className="relative flex h-2 w-2">
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${config.dotClasses}`} />
          <span className={`relative inline-flex h-2 w-2 rounded-full ${config.dotClasses}`} />
        </span>
      ) : (
        <span className={`h-2 w-2 rounded-full ${config.dotClasses}`} />
      )}
      <span>{label}</span>
    </span>
  );
};
