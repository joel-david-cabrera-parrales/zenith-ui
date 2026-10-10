import type { HTMLAttributes } from 'react';

export interface TestimonialProps extends HTMLAttributes<HTMLDivElement> {
  quote?: string;
  author?: string;
  role?: string;
  initials?: string;
  stars?: number;
}

export function Testimonial({
  quote = '"Migrating our payment ingestion cluster to Zenith reduced our P99 latency from 140ms down to 18ms without adding compute nodes."',
  author = 'Arthur Pendelton',
  role = 'VP Infrastructure @ FinEdge',
  initials = 'AP',
  stars = 5,
  className = '',
  ...rest
}: TestimonialProps) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div
            className="flex items-center text-blue-600"
            aria-label={`${stars} de 5 estrellas`}
          >
            {Array.from({ length: stars }, (_, index) => (
              <span
                key={index}
                aria-hidden="true"
                className="material-symbols-outlined text-[18px]"
              >
                star
              </span>
            ))}
          </div>
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-slate-300 text-[24px]"
          >
            format_quote
          </span>
        </div>
        <p className="text-sm text-slate-900 italic mb-4 leading-relaxed">
          {quote}
        </p>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center gap-3">
        <div
          aria-hidden="true"
          className="w-9 h-9 rounded-full bg-blue-100 border border-slate-200 flex items-center justify-center text-blue-700 text-xs font-bold"
        >
          {initials}
        </div>
        <div>
          <span className="block text-sm font-semibold text-slate-900">
            {author}
          </span>
          <span className="block font-mono text-[9px] text-slate-500">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}
