import type { HTMLAttributes } from 'react';

export interface TelemetryToastProps extends HTMLAttributes<HTMLDivElement> {
  exiting?: boolean;
  onOpenGrafana?: () => void;
  onClose?: () => void;
}

const BARS: { height: string; tone: string }[] = [
  { height: 'h-2', tone: 'bg-blue-600/40' },
  { height: 'h-3', tone: 'bg-blue-600/40' },
  { height: 'h-2', tone: 'bg-blue-600/40' },
  { height: 'h-5', tone: 'bg-blue-600/40' },
  { height: 'h-4', tone: 'bg-blue-600/50' },
  { height: 'h-6', tone: 'bg-blue-600/60' },
  { height: 'h-7', tone: 'bg-blue-600/70' },
  { height: 'h-8', tone: 'bg-blue-600/80' },
  { height: 'h-9', tone: 'bg-blue-600' },
  { height: 'h-11', tone: 'bg-rose-600' },
  { height: 'h-12', tone: 'bg-rose-600' },
  { height: 'h-10', tone: 'bg-rose-600' },
];

export const TelemetryToast = ({
  exiting = false,
  onOpenGrafana,
  onClose,
  className = '',
  ...rest
}: TelemetryToastProps) => {
  return (
    <div
      role="alert"
      className={`flex flex-col justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg ${exiting ? 'animate-toast-out' : 'animate-toast-in'} ${className}`}
      {...rest}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 animate-ping rounded-full bg-rose-600" />
          <h4 className="text-sm font-bold text-slate-900">Pico de CPU Detectado: 94.2%</h4>
        </div>
        <button
          type="button"
          aria-label="Descartar notificación"
          onClick={onClose}
          className="rounded text-slate-400 transition-colors hover:text-slate-900"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-sm">
            close
          </span>
        </button>
      </div>
      <div className="flex h-12 items-end gap-1 rounded-lg border border-slate-200 bg-slate-50 p-2" aria-hidden="true">
        {BARS.map((bar, index) => (
          <div key={index} className={`w-1/12 rounded-t ${bar.tone} ${bar.height}`} />
        ))}
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="font-mono text-slate-500">Host: ip-10-0-4-88.internal</span>
        <div className="flex items-center gap-2">
          <span className="rounded bg-rose-100 px-2 py-0.5 font-mono text-[10px] font-bold text-rose-600">
            CRITICAL_NODE
          </span>
          <button
            type="button"
            onClick={onOpenGrafana}
            className="text-xs font-semibold text-blue-600 hover:underline"
          >
            Abrir Grafana
          </button>
        </div>
      </div>
    </div>
  );
};
