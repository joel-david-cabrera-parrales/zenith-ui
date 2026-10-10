import type { HTMLAttributes, ReactNode } from 'react';

export interface CodePanelProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: string;
  children: ReactNode;
}

export const CodePanel = ({
  title,
  icon = 'data_object',
  className = '',
  children,
  ...rest
}: CodePanelProps) => {
  return (
    <div
      className={`bg-slate-900 rounded-xl border border-slate-800 p-5 text-slate-100 shadow-md space-y-3 font-mono ${className}`}
      {...rest}
    >
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-slate-400 text-[16px]"
          >
            {icon}
          </span>
          <span className="text-xs text-slate-400">{title}</span>
        </div>
      </div>
      <div className="text-xs sm:text-sm leading-relaxed overflow-x-auto py-2">
        {children}
      </div>
    </div>
  );
}
