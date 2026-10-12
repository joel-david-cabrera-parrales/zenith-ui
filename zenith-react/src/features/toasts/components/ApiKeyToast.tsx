import { useCopyToClipboard } from '../../../shared/hooks/useCopyToClipboard';
import type { HTMLAttributes } from 'react';

export interface ApiKeyToastProps extends HTMLAttributes<HTMLDivElement> {
  exiting?: boolean;
  onClose?: () => void;
}

const TOKEN = 'zenith_live_pk_9942a8b30d88fe21c43';

export const ApiKeyToast = ({
  exiting = false,
  onClose,
  className = '',
  ...rest
}: ApiKeyToastProps) => {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div
      role="status"
      className={`flex flex-col justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg ${exiting ? 'animate-toast-out' : 'animate-toast-in'} ${className}`}
      {...rest}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-slate-900">
            <span aria-hidden="true" className="material-symbols-outlined text-base">
              key
            </span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Clave API Generada</h4>
            <p className="text-xs text-slate-500">Este token no se volverá a mostrar.</p>
          </div>
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
      <div className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900 p-2.5 font-mono text-xs">
        <span className="truncate text-blue-200">{TOKEN}...</span>
        <button
          type="button"
          onClick={() => copy(TOKEN)}
          className="ml-2 flex shrink-0 items-center gap-1 rounded bg-white/10 px-2 py-1 text-white transition-colors hover:bg-white/20"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-xs">
            {copied ? 'done' : 'content_copy'}
          </span>
          <span>{copied ? '¡Copiado!' : 'Copiar Token'}</span>
        </button>
      </div>
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>Expira en: 30 días</span>
        <span className="rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800">
          SCOPES: READ/WRITE
        </span>
      </div>
    </div>
  );
};
