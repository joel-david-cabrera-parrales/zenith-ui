import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface BackgroundTaskToastProps extends HTMLAttributes<HTMLDivElement> {
  fileName?: string;
  exiting?: boolean;
  onCancel?: () => void;
  onClose?: () => void;
}

const TOTAL_MB = 5;

export const BackgroundTaskToast = ({
  fileName = 'reporte CSV',
  exiting = false,
  onCancel,
  onClose,
  className = '',
  ...rest
}: BackgroundTaskToastProps) => {
  const [progress, setProgress] = useState(42);
  const doneRef = useRef(onClose);

  useEffect(() => {
    doneRef.current = onClose;
  });

  useEffect(() => {
    if (progress >= 100) {
      const done = window.setTimeout(() => doneRef.current?.(), 1500);
      return () => window.clearTimeout(done);
    }
    const timer = window.setTimeout(() => setProgress((prev) => Math.min(prev + 7, 100)), 600);
    return () => window.clearTimeout(timer);
  }, [progress]);

  const complete = progress >= 100;
  const transferred = ((progress / 100) * TOTAL_MB).toFixed(1);

  return (
    <div
      role="status"
      className={`flex flex-col justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-md ${exiting ? 'animate-toast-out' : 'animate-toast-in'} ${className}`}
      {...rest}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          {complete ? (
            <span aria-hidden="true" className="material-symbols-outlined text-base text-emerald-600">
              check_circle
            </span>
          ) : (
            <div className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
          )}
          <span className="text-sm font-bold text-slate-900">
            {complete ? `Exportación de ${fileName} completada` : `Exportando ${fileName} (${progress}%)...`}
          </span>
        </div>
        <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-500">PID 9081</span>
      </div>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full rounded-full transition-all duration-500 ${complete ? 'bg-emerald-500' : 'bg-blue-600'}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex items-center justify-between pt-1">
        <span className="text-xs text-slate-500">
          {complete ? `${TOTAL_MB.toFixed(1)} MB transferidos` : `${transferred} MB de ${TOTAL_MB.toFixed(1)} MB transferidos`}
        </span>
        {complete ? (
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-blue-600 hover:underline"
          >
            Cerrar
          </button>
        ) : (
          <button
            type="button"
            onClick={onCancel}
            className="text-xs font-semibold text-rose-600 hover:underline"
          >
            Cancelar
          </button>
        )}
      </div>
    </div>
  );
};
