import type { HTMLAttributes } from 'react';

export interface StatusDraftProps extends HTMLAttributes<HTMLDivElement> {
  badge?: string;
  rev?: string;
  title?: string;
  excerpt?: string;
  author?: string;
  modified?: string;
}

export function StatusDraft({
  badge = 'DRAFT',
  rev = 'REV #04',
  title = 'Observability Pipeline v3',
  excerpt = 'Specification proposal for tracing collector ingress and OpenTelemetry ingestion endpoints.',
  author = 'AUTHOR: @alec',
  modified = 'MODIFIED 4H AGO',
  className = '',
  ...rest
}: StatusDraftProps) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-2 py-0.5 rounded-full bg-slate-50 text-slate-500 font-mono text-[9px] font-semibold border border-slate-200 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            {badge}
          </span>
          <span className="font-mono text-[9px] text-slate-500">{rev}</span>
        </div>
        <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
          {title}
        </h3>
        <p className="text-xs text-slate-500 mb-4 leading-relaxed line-clamp-2">
          {excerpt}
        </p>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>{author}</span>
        <span>{modified}</span>
      </div>
    </div>
  );
}
