import type { HTMLAttributes } from 'react';

export interface DocLinkProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title?: string;
  excerpt?: string;
  readTime?: string;
  action?: string;
}

export const DocLink = ({
  eyebrow = 'DOCS // QUICKSTART',
  title = 'Environment Variables',
  excerpt = 'Configure global secrets and staging environment variables for microservice runtime contexts.',
  readTime = '3 MIN READ',
  action = 'Configure',
  className = '',
  ...rest
}: DocLinkProps) => {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div>
        <span className="font-mono text-[9px] text-slate-500 uppercase block mb-1">
          {eyebrow}
        </span>
        <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
          {title}
        </h3>
        <p className="text-xs text-slate-500 mb-4 leading-relaxed">
          {excerpt}
        </p>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
        <span className="font-mono text-[9px] text-slate-500">{readTime}</span>
        <a
          href="#"
          className="text-sm font-semibold text-blue-600 flex items-center gap-1 group hover:underline"
        >
          <span>{action}</span>
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform"
          >
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
}
