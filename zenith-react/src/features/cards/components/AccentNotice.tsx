import type { HTMLAttributes } from 'react';

export interface AccentNoticeProps extends HTMLAttributes<HTMLDivElement> {
  badge?: string;
  icon?: string;
  title?: string;
  excerpt?: string;
  period?: string;
  link?: string;
}

export function AccentNotice({
  badge = 'NOTICE // AUDIT',
  icon = 'verified_user',
  title = 'SOC2 Compliance Attestation',
  excerpt = 'Automated evidence collection cycle completed for Q4. Continuous audit monitors are currently reporting green.',
  period = 'PERIOD: 2024-Q4',
  link = 'VIEW AUDIT',
  className = '',
  ...rest
}: AccentNoticeProps) {
  return (
    <div
      className={`bg-white border border-slate-200 border-l-4 border-l-blue-600 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-600 font-mono text-[9px] font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            {badge}
          </span>
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-slate-400 text-[18px]"
          >
            {icon}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
          {title}
        </h3>
        <p className="text-xs text-slate-500 mb-4 leading-relaxed">{excerpt}</p>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>{period}</span>
        <a
          href="#"
          className="text-blue-600 font-semibold hover:underline flex items-center gap-0.5"
        >
          <span>{link}</span>
          <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>
        </a>
      </div>
    </div>
  );
}
