import type { HTMLAttributes } from 'react';

export interface FeatureServiceProps extends HTMLAttributes<HTMLDivElement> {
  icon?: string;
  title?: string;
  excerpt?: string;
  items?: string[];
  link?: string;
}

export const FeatureService = ({
  icon = 'database',
  title = 'Automated Rebalancing',
  excerpt = 'Realtime partition sharding with dynamic storage migration and zero downtime.',
  items = [
    'Weighted consumer groups',
    'Zero lock metadata synchronization',
    'Automatic dead-letter drain',
  ],
  link = 'Inspect Configuration',
  className = '',
  ...rest
}: FeatureServiceProps) => {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div>
        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-blue-600 mb-4 border border-slate-200">
          <span aria-hidden="true" className="material-symbols-outlined">
            {icon}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-slate-900 mb-1.5">{title}</h3>
        <p className="text-xs text-slate-500 mb-4">{excerpt}</p>
        <ul className="space-y-2 mb-4">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-xs text-slate-900"
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-emerald-600 text-[16px]"
              >
                check
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-3 border-t border-slate-200">
        <a
          href="#"
          className="text-blue-600 text-sm font-semibold flex items-center justify-between group"
        >
          <span>{link}</span>
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
