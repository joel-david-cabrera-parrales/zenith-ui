import type { HTMLAttributes } from 'react';

export type ToastTone = 'success' | 'error' | 'warning' | 'info' | 'neutral';
export type ToastMode = 'solid' | 'soft' | 'outline';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  tone?: ToastTone;
  mode?: ToastMode;
  title: string;
  message: string;
  meta?: string;
  actionLabel?: string;
  exiting?: boolean;
  onClose?: () => void;
  onAction?: () => void;
}

const TONE_ICONS: Record<ToastTone, string> = {
  success: 'check_circle',
  error: 'cancel',
  warning: 'warning',
  info: 'info',
  neutral: 'inventory_2',
};

const SOLID_BOX: Record<ToastTone, string> = {
  success: 'bg-emerald-600 border-emerald-700 text-white',
  error: 'bg-rose-600 border-rose-700 text-white',
  warning: 'bg-slate-900 border-slate-900 text-white',
  info: 'bg-blue-600 border-blue-700 text-white',
  neutral: 'bg-slate-800 border-slate-800 text-slate-100',
};

const SOFT_BOX: Record<ToastTone, string> = {
  success: 'bg-emerald-50 border-emerald-200',
  error: 'bg-rose-50 border-rose-200',
  warning: 'bg-amber-50 border-amber-200',
  info: 'bg-blue-50 border-blue-200',
  neutral: 'bg-slate-100 border-slate-200',
};

const SOFT_ICON: Record<ToastTone, string> = {
  success: 'text-emerald-600',
  error: 'text-rose-600',
  warning: 'text-amber-600',
  info: 'text-blue-600',
  neutral: 'text-slate-500',
};

const OUTLINE_ACCENT: Record<ToastTone, string> = {
  success: 'border-l-emerald-600',
  error: 'border-l-rose-600',
  warning: 'border-l-slate-900',
  info: 'border-l-blue-600',
  neutral: 'border-l-slate-400',
};

export const Toast = ({
  tone = 'info',
  mode = 'soft',
  title,
  message,
  meta,
  actionLabel,
  exiting = false,
  onClose,
  onAction,
  className = '',
  ...rest
}: ToastProps) => {
  const icon = TONE_ICONS[tone];
  const isAlert = tone === 'error' || tone === 'warning';
  const animation = exiting ? 'animate-toast-out' : 'animate-toast-in';

  if (mode === 'solid') {
    return (
      <div
        role={isAlert ? 'alert' : 'status'}
        className={`rounded-xl border p-3 shadow-md ${SOLID_BOX[tone]} ${animation} ${className}`}
        {...rest}
      >
        <div className="flex items-start gap-2">
          <span aria-hidden="true" className="material-symbols-outlined text-lg shrink-0">
            {icon}
          </span>
          <div className="flex-1">
            <p className="text-sm font-bold leading-tight text-white">{title}</p>
            <p className="mt-0.5 text-xs font-medium text-white/80">{message}</p>
          </div>
          <button
            type="button"
            aria-label="Descartar notificación"
            onClick={onClose}
            className="rounded text-white/70 transition-colors hover:text-white"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-base">
              close
            </span>
          </button>
        </div>
        {(meta !== undefined || actionLabel !== undefined) && (
          <div className="mt-2 flex items-center justify-between border-t border-white/20 pt-1">
            <span className="font-mono text-[10px] font-semibold text-white/80">{meta ?? ''}</span>
            {actionLabel !== undefined && (
              <button
                type="button"
                onClick={onAction}
                className="rounded bg-white/20 px-2 py-0.5 text-xs font-semibold text-white transition-colors hover:bg-white/30"
              >
                {actionLabel}
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

  if (mode === 'outline') {
    return (
      <div
        role={isAlert ? 'alert' : 'status'}
        className={`rounded-r-xl rounded-l border border-slate-200 border-l-4 bg-white p-3 shadow-sm ${OUTLINE_ACCENT[tone]} ${animation} ${className}`}
        {...rest}
      >
        <div className="flex items-start gap-2">
          <span aria-hidden="true" className={`material-symbols-outlined text-lg shrink-0 ${SOFT_ICON[tone]}`}>
            {icon}
          </span>
          <div className="flex-1">
            <p className="text-sm font-bold text-slate-900">{title}</p>
            <p className="mt-0.5 text-xs font-medium text-slate-500">{message}</p>
          </div>
          <button
            type="button"
            aria-label="Descartar notificación"
            onClick={onClose}
            className="rounded text-slate-400 transition-colors hover:text-slate-900"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-base">
              close
            </span>
          </button>
        </div>
        {(meta !== undefined || actionLabel !== undefined) && (
          <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-1">
            <span className="font-mono text-[10px] font-semibold text-slate-500">{meta ?? ''}</span>
            {actionLabel !== undefined && (
              <button
                type="button"
                onClick={onAction}
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                {actionLabel}
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      role={isAlert ? 'alert' : 'status'}
      className={`rounded-xl border p-3 ${SOFT_BOX[tone]} ${animation} ${className}`}
      {...rest}
    >
      <div className="flex items-start gap-2">
        <span aria-hidden="true" className={`material-symbols-outlined text-lg shrink-0 ${SOFT_ICON[tone]}`}>
          {icon}
        </span>
        <div className="flex-1">
          <p className="text-sm font-bold text-slate-900">{title}</p>
          <p className="mt-0.5 text-xs font-medium text-slate-500">{message}</p>
        </div>
        <button
          type="button"
          aria-label="Descartar notificación"
          onClick={onClose}
          className="rounded text-slate-400 transition-colors hover:text-slate-900"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-base">
            close
          </span>
        </button>
      </div>
      {(meta !== undefined || actionLabel !== undefined) && (
        <div className="mt-2 flex items-center justify-between border-t border-slate-200/80 pt-1">
          <span className="font-mono text-[10px] font-semibold text-slate-500">{meta ?? ''}</span>
          {actionLabel !== undefined && (
            <button
              type="button"
              onClick={onAction}
              className={`text-xs font-bold hover:underline ${SOFT_ICON[tone]}`}
            >
              {actionLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
