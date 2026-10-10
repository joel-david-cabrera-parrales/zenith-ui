import type { HTMLAttributes } from 'react';

export interface HorizontalSplitProps extends HTMLAttributes<HTMLDivElement> {
  badge?: string;
  eyebrow?: string;
  title?: string;
  excerpt?: string;
  tags?: string[];
  link?: string;
}

export const HorizontalSplit = ({
  badge = 'RELEASE_LOG',
  eyebrow = 'V2.4.0 ENGINE UPDATE • OCT 28, 2024',
  title = 'Kernel Memory Optimization & Sub-Millisecond RPC Routing',
  excerpt = 'Redesigned zero-copy ring buffers and integrated eBPF observability filters directly into node-level daemon monitors.',
  tags = ['#NETWORKING', '#EBPF'],
  link = 'Read Spec',
  className = '',
  ...rest
}: HorizontalSplitProps) => {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row ${className}`}
      {...rest}
    >
      <div className="sm:w-2/5 min-h-[180px] sm:min-h-full relative overflow-hidden bg-gradient-to-br from-blue-100 via-slate-100 to-slate-200 flex items-center justify-center">
        <span
          aria-hidden="true"
          className="material-symbols-outlined text-[72px] text-blue-300"
        >
          biotech
        </span>
        <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-white/90 backdrop-blur text-blue-600 font-mono text-[9px] font-semibold border border-slate-200">
          {badge}
        </span>
      </div>
      <div className="p-5 sm:w-3/5 flex flex-col justify-between">
        <div>
          <div className="mb-2 font-mono text-[9px] text-slate-500">
            {eyebrow}
          </div>
          <h3 className="text-sm font-semibold text-slate-900 mb-2 leading-snug">
            {title}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-3 mb-4">{excerpt}</p>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-slate-200">
          <div className="flex items-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-slate-50 text-slate-500 font-mono text-[9px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-blue-600 flex items-center gap-1 hover:underline"
          >
            {link}
            <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
              open_in_new
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
