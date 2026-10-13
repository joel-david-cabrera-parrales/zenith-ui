export const SIDEBAR_HTML = `
<nav aria-label="Navegación lateral" class="flex w-[350px] shrink-0 flex-col rounded-xl border border-slate-200 bg-white">
  <div class="flex items-center gap-2 border-b border-slate-200 px-4 py-3">
    <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">Z</span>
    <span class="text-sm font-bold text-slate-900">Zenith UI</span>
    <span class="ml-auto rounded-full bg-blue-100 px-2 py-0.5 font-mono text-[9px] font-bold text-blue-800">ADMIN</span>
  </div>
  <div class="space-y-1 p-3">
    <button type="button" class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-600">Resumen</button>
    <div class="rounded-lg bg-blue-50/60">
      <button type="button" aria-expanded="true" class="flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm font-semibold text-slate-900">Display</button>
      <div class="space-y-0.5 px-2 pb-2">
        <button type="button" aria-current="page" class="flex w-full items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-left text-sm font-semibold text-white">Acordeones</button>
        <button type="button" class="flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-left text-sm font-medium text-slate-600">Badges <span class="ml-auto rounded-full bg-blue-600 px-1.5 py-0.5 font-mono text-[9px] font-bold text-white">3</span></button>
        <button type="button" class="flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-left text-sm font-medium text-slate-600">Avatars</button>
      </div>
    </div>
  </div>
  <div class="mt-auto flex items-center gap-2 border-t border-slate-200 px-4 py-3">
    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800">JJ</span>
    <span class="text-xs font-semibold text-slate-900">Jonathan J.</span>
    <span class="ml-auto font-mono text-[9px] text-slate-500">v2.4.0</span>
  </div>
</nav>
`;

export const SIDEBAR_TSX = `
import { useId, useState } from 'react';

export const SidebarAccordion = () => {
  const groups = [
    {
      id: 'display', label: 'Display', icon: 'view_in_ar',
      links: [
        { id: 'acordeones', label: 'Acordeones', icon: 'smart_button' },
        { id: 'badges', label: 'Badges', icon: 'badge', badge: '3' },
        { id: 'avatars', label: 'Avatars', icon: 'account_circle' },
      ],
    },
    {
      id: 'feedback', label: 'Feedback', icon: 'feedback',
      links: [
        { id: 'modals', label: 'Modales', icon: 'window' },
        { id: 'toasts', label: 'Toasts', icon: 'notifications', badge: '5' },
      ],
    },
  ];
  const [openId, setOpenId] = useState<string | null>('display');
  const [activeId, setActiveId] = useState<string | null>('acordeones');
  const baseId = useId();
  const toggleGroup = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };
  return (
    <nav aria-label="Navegación lateral" className="flex w-[350px] shrink-0 flex-col rounded-xl border border-slate-200 bg-white">
      <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3">
        <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">Z</span>
        <span className="text-sm font-bold text-slate-900">Zenith UI</span>
        <span className="ml-auto rounded-full bg-blue-100 px-2 py-0.5 font-mono text-[9px] font-bold text-blue-800">ADMIN</span>
      </div>
      <div className="space-y-1 p-3">
        {groups.map((group) => {
          const open = openId === group.id;
          return (
            <div key={group.id} className={open ? 'rounded-lg bg-blue-50/60' : 'rounded-lg'}>
              <button type="button" aria-expanded={open} onClick={() => toggleGroup(group.id)} className="flex w-full cursor-pointer items-center justify-between gap-2 px-3 py-2 text-left text-sm font-semibold text-slate-900">
                <span className="flex items-center gap-2">
                  <span aria-hidden="true" className={open ? 'material-symbols-outlined text-[18px] text-blue-600' : 'material-symbols-outlined text-[18px] text-slate-400'}>{group.icon}</span>
                  {group.label}
                </span>
                <span aria-hidden="true" className={open ? 'material-symbols-outlined rotate-180 text-[18px] text-blue-600 transition-transform duration-300 ease-in-out' : 'material-symbols-outlined text-[18px] text-slate-400 transition-transform duration-300 ease-in-out'}>expand_more</span>
              </button>
              <div role="region" inert={!open} className={'grid transition-all duration-300 ease-in-out motion-reduce:transition-none ' + (open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
                <div className="overflow-hidden">
                  <div className="space-y-0.5 px-2 pb-2">
                    {group.links.map((link) => {
                      const active = activeId === link.id;
                      return (
                        <button key={link.id} type="button" aria-current={active ? 'page' : undefined} onClick={() => setActiveId(link.id)} tabIndex={open ? 0 : -1} className={active ? 'flex w-full cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-left text-sm font-semibold text-white' : 'flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 text-left text-sm font-medium text-slate-600 hover:bg-slate-100'}>
                          {link.label}
                          {link.badge !== undefined && (
                            <span className="ml-auto rounded-full bg-blue-600 px-1.5 py-0.5 font-mono text-[9px] font-bold text-white">{link.badge}</span>
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
        <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800">JJ</span>
        <span className="text-xs font-semibold text-slate-900">Jonathan J.</span>
        <span className="ml-auto font-mono text-[9px] text-slate-500">v2.4.0</span>
      </div>
    </nav>
  );
};
`;
