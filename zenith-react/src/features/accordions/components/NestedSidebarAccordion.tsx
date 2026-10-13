import { useId, useState } from 'react';
import type { HTMLAttributes } from 'react';
import type { SidebarNavLink } from './SidebarAccordion';

export interface NestedSection {
  id: string;
  label: string;
  links: SidebarNavLink[];
}

export interface NestedGroup {
  id: string;
  label: string;
  icon: string;
  sections: NestedSection[];
}

export interface NestedSidebarAccordionProps extends Omit<HTMLAttributes<HTMLElement>, 'onSelect'> {
  brandName?: string;
  brandBadge?: string;
  groups?: NestedGroup[];
  defaultOpenGroupId?: string | null;
  defaultOpenSectionId?: string | null;
  defaultActiveId?: string | null;
  onNavigate?: (id: string) => void;
  userName?: string;
  userInitials?: string;
  version?: string;
}

const DEFAULT_GROUPS: NestedGroup[] = [
  {
    id: 'display',
    label: 'Display',
    icon: 'view_in_ar',
    sections: [
      {
        id: 'fundamentos',
        label: 'Fundamentos',
        links: [
          { id: 'colores', label: 'Colores', icon: 'palette' },
          { id: 'tipografia', label: 'Tipografía', icon: 'text_fields' },
        ],
      },
      {
        id: 'componentes',
        label: 'Componentes',
        links: [
          { id: 'acordeones', label: 'Acordeones', icon: 'smart_button' },
          { id: 'badges', label: 'Badges', icon: 'badge', badge: '3' },
          { id: 'avatars', label: 'Avatars', icon: 'account_circle' },
        ],
      },
    ],
  },
  {
    id: 'feedback',
    label: 'Feedback',
    icon: 'feedback',
    sections: [
      {
        id: 'overlays',
        label: 'Overlays',
        links: [
          { id: 'modals', label: 'Modales', icon: 'window' },
          { id: 'drawers', label: 'Drawers', icon: 'menu_open' },
        ],
      },
      {
        id: 'avisos',
        label: 'Avisos',
        links: [
          { id: 'toasts', label: 'Toasts', icon: 'notifications', badge: '5' },
          { id: 'countdowns', label: 'Countdowns', icon: 'timer' },
        ],
      },
    ],
  },
];

export const NestedSidebarAccordion = ({
  brandName = 'Zenith UI',
  brandBadge = 'ADMIN',
  groups = DEFAULT_GROUPS,
  defaultOpenGroupId = 'display',
  defaultOpenSectionId = 'componentes',
  defaultActiveId = 'acordeones',
  onNavigate,
  userName = 'Jonathan J.',
  userInitials = 'JJ',
  version = 'v2.4.0',
  className = '',
  ...rest
}: NestedSidebarAccordionProps) => {
  const [openGroupId, setOpenGroupId] = useState<string | null>(defaultOpenGroupId);
  const [openSectionId, setOpenSectionId] = useState<string | null>(defaultOpenSectionId);
  const [activeId, setActiveId] = useState<string | null>(defaultActiveId);
  const baseId = useId();

  const toggleGroup = (id: string) => {
    setOpenGroupId((prev) => (prev === id ? null : id));
  };

  const toggleSection = (id: string) => {
    setOpenSectionId((prev) => (prev === id ? null : id));
  };

  const handleNavigate = (id: string) => {
    setActiveId(id);
    onNavigate?.(id);
  };

  const chevron = (open: boolean, color: string) =>
    open
      ? `material-symbols-outlined rotate-180 text-[18px] ${color} transition-transform duration-300 ease-in-out`
      : `material-symbols-outlined text-[18px] text-slate-400 transition-transform duration-300 ease-in-out`;

  const panel = (open: boolean) =>
    `grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
    }`;

  return (
    <nav
      aria-label="Navegación lateral de tres niveles"
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
        {groups.map((group) => {
          const groupOpen = openGroupId === group.id;
          const groupButtonId = `${baseId}-${group.id}-button`;
          const groupPanelId = `${baseId}-${group.id}-panel`;
          return (
            <div key={group.id} className={groupOpen ? 'rounded-lg bg-blue-50/60' : 'rounded-lg'}>
              <button
                type="button"
                id={groupButtonId}
                aria-expanded={groupOpen}
                aria-controls={groupPanelId}
                onClick={() => toggleGroup(group.id)}
                className="flex w-full cursor-pointer items-center justify-between gap-2 px-3 py-2 text-left text-sm font-semibold text-slate-900"
              >
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={
                      groupOpen
                        ? 'material-symbols-outlined text-[18px] text-blue-600'
                        : 'material-symbols-outlined text-[18px] text-slate-400'
                    }
                  >
                    {group.icon}
                  </span>
                  {group.label}
                </span>
                <span aria-hidden="true" className={chevron(groupOpen, 'text-blue-600')}>
                  expand_more
                </span>
              </button>
              <div
                id={groupPanelId}
                role="region"
                aria-labelledby={groupButtonId}
                inert={!groupOpen}
                className={panel(groupOpen)}
              >
                <div className="overflow-hidden">
                  <div className="space-y-1 px-2 pb-2">
                    {group.sections.map((section) => {
                      const sectionOpen = openSectionId === section.id;
                      const sectionButtonId = `${baseId}-${section.id}-button`;
                      const sectionPanelId = `${baseId}-${section.id}-panel`;
                      return (
                        <div
                          key={section.id}
                          className="ml-2 border-l-2 border-slate-200 pl-2 has-[button[aria-expanded=true]]:border-blue-200"
                        >
                          <button
                            type="button"
                            id={sectionButtonId}
                            aria-expanded={sectionOpen}
                            aria-controls={sectionPanelId}
                            onClick={() => toggleSection(section.id)}
                            tabIndex={groupOpen ? 0 : -1}
                            className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-[13px] font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                          >
                            {section.label}
                            <span aria-hidden="true" className={chevron(sectionOpen, 'text-slate-500')}>
                              expand_more
                            </span>
                          </button>
                          <div
                            id={sectionPanelId}
                            role="region"
                            aria-labelledby={sectionButtonId}
                            inert={!groupOpen || !sectionOpen}
                            className={panel(groupOpen && sectionOpen)}
                          >
                            <div className="overflow-hidden">
                              <div className="space-y-0.5 pb-1">
                                {section.links.map((link) => {
                                  const active = activeId === link.id;
                                  return (
                                    <button
                                      key={link.id}
                                      type="button"
                                      aria-current={active ? 'page' : undefined}
                                      onClick={() => handleNavigate(link.id)}
                                      tabIndex={groupOpen && sectionOpen ? 0 : -1}
                                      className={
                                        active
                                          ? 'flex w-full cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-left text-[13px] font-semibold text-white'
                                          : 'flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 text-left text-[13px] font-medium text-slate-600 transition-colors hover:bg-slate-100'
                                      }
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
                                        <span className="ml-auto rounded-full bg-blue-600 px-1.5 py-0.5 font-mono text-[9px] font-bold text-white">
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
