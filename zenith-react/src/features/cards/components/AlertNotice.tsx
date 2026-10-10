import { useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface AlertNoticeProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  body?: string;
  rows?: Array<[string, string]>;
  dismissLabel?: string;
  actionLabel?: string;
}

export function AlertNotice({
  title = 'Scheduled Maintenance',
  body = 'Regional database replica resync will occur on Sunday at 02:00 UTC. API response times may experience minor variance of ~5ms.',
  rows = [
    ['WINDOW:', '02:00 - 02:30 UTC'],
    ['IMPACTED:', 'US-EAST, EU-CENTRAL'],
  ],
  dismissLabel = 'Acknowledge',
  actionLabel = 'View Calendar',
  className = '',
  ...rest
}: AlertNoticeProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return (
      <div
        className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-center justify-between ${className}`}
        {...rest}
      >
        <span className="text-xs text-slate-500">
          Aviso descartado. La ventana sigue programada.
        </span>
        <button
          type="button"
          onClick={() => setDismissed(false)}
          className="px-3 py-1.5 rounded-lg bg-slate-100 text-blue-600 text-sm font-semibold hover:bg-slate-200 transition-colors"
        >
          Mostrar
        </button>
      </div>
    );
  }

  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 text-blue-600">
            <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
              info
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              {title}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Descartar aviso"
            className="text-slate-400 hover:text-slate-900 transition-colors"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
              close
            </span>
          </button>
        </div>
        <p className="text-sm text-slate-500 mb-4">{body}</p>
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 font-mono text-[9px] text-slate-500 space-y-1 mb-3">
          {rows.map(([term, value]) => (
            <div key={term} className="flex justify-between">
              <span>{term}</span>
              <span className="text-slate-900 font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-sm font-semibold text-slate-500 hover:text-slate-900"
        >
          {dismissLabel}
        </button>
        <button
          type="button"
          className="px-3 py-1.5 rounded-lg bg-slate-100 text-blue-600 text-sm font-semibold hover:bg-slate-200 transition-colors"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}
