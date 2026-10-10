import type { HTMLAttributes } from 'react';
import { useCopyToClipboard } from '../../../shared/hooks/useCopyToClipboard';

export interface ApiEndpointProps extends HTMLAttributes<HTMLDivElement> {
  method?: string;
  path?: string;
  status?: string;
  description?: string;
  headerLines?: string[];
  payload?: string;
  footerLeft?: string;
  footerLink?: string;
}

export const ApiEndpoint = ({
  method = 'POST',
  path = '/v2/ingest',
  status = '200 OK',
  description = 'Submit batch events to ingestion broker with idempotency token verification.',
  headerLines = ['Authorization: Bearer <key>', 'X-Event-Batch: 128'],
  payload = '{"sync": true}',
  footerLeft = 'AVG_EXEC: 12ms',
  footerLink = 'API_DOCS →',
  className = '',
  ...rest
}: ApiEndpointProps) => {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded bg-slate-100 font-mono text-[9px] font-bold text-blue-600">
              {method}
            </span>
            <span className="font-mono text-[9px] text-slate-500">{path}</span>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-50 text-emerald-700 font-mono text-[9px] font-bold border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            {status}
          </span>
        </div>
        <p className="text-xs text-slate-500 mb-3">{description}</p>
        <div className="bg-slate-900 rounded-lg p-3 font-mono text-[9px] text-slate-100 relative mb-3">
          <button
            type="button"
            onClick={() => {
              void copy([...headerLines, payload].join('\n'));
            }}
            title="Copiar curl"
            aria-label="Copiar curl"
            className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[13px]">
              {copied ? 'check' : 'content_copy'}
            </span>
          </button>
          <div className="text-slate-500 select-none">// Payload Header</div>
          {headerLines.map((line) => (
            <div key={line}>
              <span className="text-blue-300">{line.split(':')[0]}:</span>
              {line.slice(line.indexOf(':') + 1)}
            </div>
          ))}
          <div className="text-emerald-300">{payload}</div>
        </div>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>{footerLeft}</span>
        <span className="text-blue-600 font-semibold hover:underline cursor-pointer">
          {footerLink}
        </span>
      </div>
    </div>
  );
}
