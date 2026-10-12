import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface UndoToastProps extends HTMLAttributes<HTMLDivElement> {
  recordId?: string;
  userName?: string;
  seconds?: number;
  exiting?: boolean;
  onUndo?: () => void;
  onClose?: () => void;
}

export const UndoToast = ({
  recordId = '#USR-992',
  userName = 'Alonso Vargas',
  seconds = 10,
  exiting = false,
  onUndo,
  onClose,
  className = '',
  ...rest
}: UndoToastProps) => {
  const [remaining, setRemaining] = useState(seconds);
  const closeRef = useRef(onClose);

  useEffect(() => {
    closeRef.current = onClose;
  });

  useEffect(() => {
    if (remaining <= 0) {
      const done = window.setTimeout(() => closeRef.current?.(), 200);
      return () => window.clearTimeout(done);
    }
    const timer = window.setTimeout(() => setRemaining((prev) => prev - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [remaining]);

  return (
    <div
      role="alert"
      className={`flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-lg ${exiting ? 'animate-toast-out' : 'animate-toast-in'} ${className}`}
      {...rest}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
          <span aria-hidden="true" className="material-symbols-outlined">
            delete
          </span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900">Registro Eliminado</span>
            <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-500">
              {recordId}
            </span>
          </div>
          <p className="mt-0.5 text-xs text-slate-500">
            El usuario “{userName}” fue retirado del equipo.
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={onUndo}
          className="flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-slate-700"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-sm text-emerald-400">
            undo
          </span>
          <span>
            Deshacer ({remaining}s)
          </span>
        </button>
        <button
          type="button"
          aria-label="Descartar notificación"
          onClick={onClose}
          className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-base">
            close
          </span>
        </button>
      </div>
    </div>
  );
};
