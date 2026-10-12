import { useId, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface MentionToastProps extends HTMLAttributes<HTMLDivElement> {
  exiting?: boolean;
  onClose?: () => void;
  onReply?: (message: string) => void;
}

export const MentionToast = ({
  exiting = false,
  onClose,
  onReply,
  className = '',
  ...rest
}: MentionToastProps) => {
  const [draft, setDraft] = useState('');
  const [sent, setSent] = useState(false);
  const inputId = useId();

  const send = () => {
    if (draft.trim() === '') return;
    onReply?.(draft.trim());
    setDraft('');
    setSent(true);
  };

  return (
    <div
      role="status"
      className={`flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg ${exiting ? 'animate-toast-out' : 'animate-toast-in'} ${className}`}
      {...rest}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="relative shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
              MD
            </div>
            <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-bold text-slate-900">@marcus_dev</span>
              <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-500">
                GitHub PR #302
              </span>
              <span className="text-xs text-slate-400">Hace 2m</span>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              “Revisar la latencia de queries en el endpoint{' '}
              <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-blue-600">
                /api/v1/telemetry
              </code>{' '}
              antes de mergear.”
            </p>
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
      <div className="flex items-center gap-2 border-t border-slate-200 pt-2">
        <label htmlFor={inputId} className="sr-only">
          Respuesta rápida
        </label>
        <input
          id={inputId}
          type="text"
          value={draft}
          onChange={(event) => {
            setDraft(event.target.value);
            setSent(false);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') send();
          }}
          placeholder="Escribe una respuesta rápida inline..."
          className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
        />
        <button
          type="button"
          onClick={send}
          className="flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
        >
          <span>Enviar</span>
          <span aria-hidden="true" className="material-symbols-outlined text-xs">
            send
          </span>
        </button>
      </div>
      {sent ? (
        <p className="flex items-center gap-1 text-xs font-medium text-emerald-600">
          <span aria-hidden="true" className="material-symbols-outlined text-sm">
            check
          </span>
          Respuesta enviada
        </p>
      ) : null}
    </div>
  );
};
