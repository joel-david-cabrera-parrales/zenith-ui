import { useId, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface SidebarNavLink {
  id: string;
  label: string;
  icon: string;
  badge?: string;
}

export interface SidebarNavGroup {
  id: string;
  label: string;
  icon: string;
  links: SidebarNavLink[];
}

export interface SidebarAccordionProps extends Omit<HTMLAttributes<HTMLElement>, 'onSelect'> {
  brandName?: string;
  brandBadge?: string;
  topLinks?: SidebarNavLink[];
  groups?: SidebarNavGroup[];
  defaultOpenId?: string | null;
  defaultActiveId?: string | null;
  onNavigate?: (id: string) => void;
  userName?: string;
  userInitials?: string;
  version?: string;
}

const DEFAULT_TOP_LINKS: SidebarNavLink[] = [
  { id: 'resumen', label: 'Resumen', icon: 'dashboard' },
];

const DEFAULT_GROUPS: SidebarNavGroup[] = [
  {
    id: 'display',
    label: 'Display',
    icon: 'view_in_ar',
    links: [
      { id: 'acordeones', label: 'Acordeones', icon: 'smart_button' },
      { id: 'badges', label: 'Badges', icon: 'badge', badge: '3' },
      { id: 'avatars', label: 'Avatars', icon: 'account_circle' },
    ],
  },
  {
    id: 'feedback',
    label: 'Feedback',
    icon: 'feedback',
    links: [
      { id: 'modals', label: 'Modales', icon: 'window' },
      { id: 'toasts', label: 'Toasts', icon: 'notifications', badge: '5' },
    ],
  },
];

export const SidebarAccordion = ({
  brandName = 'Zenith UI',
  brandBadge = 'ADMIN',
  topLinks = DEFAULT_TOP_LINKS,
  groups = DEFAULT_GROUPS,
  defaultOpenId = 'display',
  defaultActiveId = 'acordeones',
  onNavigate,
  userName = 'Jonathan J.',
  userInitials = 'JJ',
  version = 'v2.4.0',
  className = '',
  ...rest
}: SidebarAccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);
  const [activeId, setActiveId] = useState<string | null>(defaultActiveId);
  const baseId = useId();

  const toggleGroup = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleNavigate = (id: string) => {
    setActiveId(id);
    onNavigate?.(id);
  };

  const linkClasses = (active: boolean) =>
    active
      ? 'flex w-full cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-left text-sm font-semibold text-white'
      : 'flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 text-left text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100';

  return (
    <nav
      aria-label="Navegación lateral"
      className={`flex w-[350px] shrink-0 flex-col rounded-xl border border-slate-200 bg-white ${className}`}
      {...rest}
    >
      <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3">
        <span
          aria-hidden="true"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white"
        >
          Z
        </span>
        <span className="text-sm font-bold text-slate-900">{brandName}</span>
        <span className="ml-auto rounded-full bg-blue-100 px-2 py-0.5 font-mono text-[9px] font-bold text-blue-800">
          {brandBadge}
        </span>
      </div>

      <div className="space-y-1 p-3">
        {topLinks.map((link) => (
          <button
            key={link.id}
            type="button"
            aria-current={activeId === link.id ? 'page' : undefined}
            onClick={() => handleNavigate(link.id)}
            className={
              activeId === link.id
                ? 'flex w-full cursor-pointer items-center gap-2 rounded-lg bg-blue-50/70 px-3 py-2 text-left text-sm font-semibold text-blue-600'
                : 'flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900'
            }
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-slate-400">
              {link.icon}
            </span>
            {link.label}
          </button>
        ))}

        {groups.map((group) => {
          const open = openId === group.id;
          const buttonId = `${baseId}-${group.id}-button`;
          const panelId = `${baseId}-${group.id}-panel`;
          return (
            <div key={group.id} className={open ? 'rounded-lg bg-blue-50/60' : 'rounded-lg'}>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggleGroup(group.id)}
                className="flex w-full cursor-pointer items-center justify-between gap-2 px-3 py-2 text-left text-sm font-semibold text-slate-900"
              >
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={
                      open
                        ? 'material-symbols-outlined text-[18px] text-blue-600'
                        : 'material-symbols-outlined text-[18px] text-slate-400'
                    }
                  >
                    {group.icon}
                  </span>
                  {group.label}
                </span>
                <span
                  aria-hidden="true"
                  className={
                    open
                      ? 'material-symbols-outlined rotate-180 text-[18px] text-blue-600 transition-transform duration-300 ease-in-out'
                      : 'material-symbols-outlined text-[18px] text-slate-400 transition-transform duration-300 ease-in-out'
                  }
                >
                  expand_more
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                inert={!open}
                className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                  open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-0.5 px-2 pb-2">
                    {group.links.map((link) => {
                      const active = activeId === link.id;
                      return (
                        <button
                          key={link.id}
                          type="button"
                          aria-current={active ? 'page' : undefined}
                          onClick={() => handleNavigate(link.id)}
                          className={linkClasses(active)}
                          tabIndex={open ? 0 : -1}
                        >
                          <span
                            aria-hidden="true"
                            className={
                              active
                                ? 'material-symbols-outlined text-[16px]'
                                : 'material-symbols-outlined text-[16px] text-slate-400'
                            }
                          >
                            {link.icon}
                          </span>
                          {link.label}
                          {link.badge !== undefined && (
                            <span
                              className={
                                active
                                  ? 'ml-auto rounded-full bg-white/20 px-1.5 py-0.5 font-mono text-[9px] font-bold text-white'
                                  : 'ml-auto rounded-full bg-blue-600 px-1.5 py-0.5 font-mono text-[9px] font-bold text-white'
                              }
                            >
                              {link.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-auto flex items-center gap-2 border-t border-slate-200 px-4 py-3">
        <span
          aria-hidden="true"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800"
        >
          {userInitials}
        </span>
        <span className="text-xs font-semibold text-slate-900">{userName}</span>
        <span className="ml-auto font-mono text-[9px] text-slate-500">{version}</span>
      </div>
    </nav>
  );
};
