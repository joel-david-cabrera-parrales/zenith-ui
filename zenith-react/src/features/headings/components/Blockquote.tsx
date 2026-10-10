import type { HTMLAttributes } from 'react';

export interface BlockquoteProps extends HTMLAttributes<HTMLElement> {
  author?: string;
  role?: string;
  initials?: string;
}

export function Blockquote({
  author,
  role,
  initials,
  className = '',
  children,
  ...rest
}: BlockquoteProps) {
  return (
    <figure className={`flex flex-col justify-between ${className}`} {...rest}>
      <blockquote className="border-l-4 border-blue-600 pl-4">
        <p className="text-base sm:text-lg italic text-slate-900 font-medium leading-relaxed">
          {children}
        </p>
      </blockquote>
      {author !== undefined && (
        <figcaption className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-200">
          <div
            aria-hidden="true"
            className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0"
          >
            {initials ?? author.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">{author}</div>
            {role !== undefined && (
              <div className="text-xs text-slate-400">{role}</div>
            )}
          </div>
        </figcaption>
      )}
    </figure>
  );
}
