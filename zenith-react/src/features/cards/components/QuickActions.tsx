import type { HTMLAttributes } from 'react';

export interface QuickAction {
  icon: string;
  label: string;
  shortcut: string;
}

export interface QuickActionsProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  badge?: string;
  actions?: QuickAction[];
  footerLeft?: string;
  footerLink?: string;
}

const DEFAULT_ACTIONS: QuickAction[] = [
  { icon: 'add_circle', label: 'Deploy New Cluster', shortcut: '⌘+N' },
  { icon: 'sync_alt', label: 'Rotate Credentials', shortcut: '⌘+R' },
];

export function QuickActions({
  title = 'Quick Actions',
  badge = 'SHORTCUTS',
  actions = DEFAULT_ACTIONS,
  footerLeft = 'COMMAND_BAR: READY',
  footerLink = 'ALL SHORTCUTS →',
  className = '',
  ...rest
}: QuickActionsProps) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
            {title}
          </span>
          <span className="font-mono text-[9px] text-slate-500">{badge}</span>
        </div>
        <div className="space-y-2 mb-2">
          {actions.map((action) => (
            <a
              key={action.label}
              href="#"
              className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-[18px] text-blue-600"
                >
                  {action.icon}
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  {action.label}
                </span>
              </div>
              <span className="font-mono text-[9px] text-slate-500 group-hover:text-blue-600">
                {action.shortcut}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>{footerLeft}</span>
        <span className="text-blue-600 hover:underline cursor-pointer">
          {footerLink}
        </span>
      </div>
    </div>
  );
}
