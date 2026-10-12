import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface CountdownToastProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  seconds?: number;
  exiting?: boolean;
  onUndo?: () => void;
  onClose?: () => void;
}

const CIRCUMFERENCE = 100;

export const CountdownToast = ({
  title = 'Deshacer Disponible',
  seconds = 4,
  exiting = false,
  onUndo,
  onClose,
  className = '',
  ...rest
}: CountdownToastProps) => {
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

  const progress = Math.max(remaining / seconds, 0) * CIRCUMFERENCE;

  return (
    <div
      role="status"
      className={`flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-md ${exiting ? 'animate-toast-out' : 'animate-toast-in'} ${className}`}
      {...rest}
    >
      <div className="flex items-center gap-3">
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
          <svg className="h-10 w-10 -rotate-90" viewBox="0 0 36 36" aria-hidden="true">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-slate-200"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeDasharray={`${progress}, 100`}
              className="text-blue-600 transition-all duration-1000"
            />
          </svg>
          <span className="absolute text-[10px] font-bold text-slate-900">{remaining}s</span>
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm font-bold text-slate-900">{title}</h4>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs text-slate-500">Cerrando en {remaining}s automáticamente</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onUndo}
        className="shrink-0 rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold text-blue-600 transition-colors hover:bg-slate-200"
      >
        Deshacer
      </button>
    </div>
  );
};
