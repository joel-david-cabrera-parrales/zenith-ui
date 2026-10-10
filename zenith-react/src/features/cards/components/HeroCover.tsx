import type { HTMLAttributes } from 'react';

export interface HeroCoverProps extends HTMLAttributes<HTMLDivElement> {
  category?: string;
  readTime?: string;
  title?: string;
  excerpt?: string;
  author?: string;
  role?: string;
  initials?: string;
}

export const HeroCover = ({
  category = 'Architecture',
  readTime = '6 MIN READ',
  title = 'Distributed Telemetry Pipelines at Enterprise Scale',
  excerpt = 'Deep dive into handling multi-region edge ingestion with zero data loss and automated failover topologies.',
  author = 'Elena Vance',
  role = 'Staff Systems Eng',
  initials = 'EV',
  className = '',
  ...rest
}: HeroCoverProps) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden border border-slate-700 shadow-sm min-h-[380px] flex flex-col justify-between p-5 bg-slate-900 ${className}`}
      {...rest}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center opacity-20"
      >
        <span className="material-symbols-outlined text-[120px] text-blue-400">
          dns
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
      <div className="relative z-10 flex items-center justify-between">
        <span className="px-2.5 py-1 rounded bg-blue-600 text-white font-mono text-[9px] font-semibold uppercase tracking-wider shadow-sm">
          {category}
        </span>
        <span className="text-slate-200 font-mono text-[9px] flex items-center gap-1 bg-slate-950/60 backdrop-blur-md px-2 py-0.5 rounded">
          <span aria-hidden="true" className="material-symbols-outlined text-[13px]">
            schedule
          </span>
          {readTime}
        </span>
      </div>
      <div className="relative z-10">
        <h3 className="text-sm font-bold text-white mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-xs text-slate-300 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between pt-3 border-t border-white/20">
          <div className="flex items-center gap-2">
            <div
              aria-hidden="true"
              className="w-7 h-7 rounded-full bg-blue-600 border border-white/40 flex items-center justify-center text-white text-[10px] font-bold"
            >
              {initials}
            </div>
            <div>
              <span className="block text-xs font-semibold text-white">
                {author}
              </span>
              <span className="block font-mono text-[9px] text-slate-300">
                {role}
              </span>
            </div>
          </div>
          <button
            type="button"
            aria-label="Abrir artículo"
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
