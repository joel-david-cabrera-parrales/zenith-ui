import type { HTMLAttributes } from 'react';

export interface TimedToastProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  message: string;
  duration?: number;
  exiting?: boolean;
  onClose?: () => void;
}

export const TimedToast = ({
  title,
  message,
  duration = 4000,
  exiting = false,
  onClose,
  className = '',
  ...rest
}: TimedToastProps) => {
  return (
    <div
      role="status"
      className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md ${exiting ? 'animate-toast-out' : 'animate-toast-in'} ${className}`}
      {...rest}
    >
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800">
            AUTO_DISMISS // {duration}MS
          </span>
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
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-blue-600">
            <span aria-hidden="true" className="material-symbols-outlined">
              sync
            </span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">{title}</h4>
            <p className="mt-0.5 text-xs font-medium text-slate-500">{message}</p>
          </div>
        </div>
      </div>
      <div className="h-1.5 w-full overflow-hidden bg-slate-100">
        <div
          className="h-full bg-blue-600 animate-toast-progress"
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>
    </div>
  );
};
