export const BADGED_HTML = `
<div class="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
  <div>
    <button type="button" aria-expanded="true" class="flex w-full items-center justify-between gap-3 bg-blue-50/60 px-4 py-3 text-left">
      <span>
        <span class="flex items-center gap-2 text-sm font-semibold text-slate-900">v2.4.0 — Panel de telemetría <span class="rounded-full bg-blue-600 px-2 py-0.5 font-mono text-[9px] font-bold text-white">NUEVO</span></span>
        <span class="mt-0.5 block pl-7 text-xs text-slate-500">12 cambios · publicado hace 3 días</span>
      </span>
      <span aria-hidden="true" class="material-symbols-outlined rotate-180 text-[20px] text-blue-600">expand_more</span>
    </button>
    <div class="px-4 pb-4 pl-11"><p class="text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
  </div>
  <div>
    <button type="button" aria-expanded="false" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
      <span>
        <span class="flex items-center gap-2 text-sm font-semibold text-slate-900">v2.3.2 — Fixes de sincronía <span class="rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[9px] font-bold text-slate-600">4 FIXES</span></span>
        <span class="mt-0.5 block pl-7 text-xs text-slate-500">Parche menor · hace 2 semanas</span>
      </span>
      <span aria-hidden="true" class="material-symbols-outlined text-[20px] text-slate-400">expand_more</span>
    </button>
  </div>
</div>
`;

export const BADGED_TSX = `
import { useId, useState } from 'react';

export const BadgedAccordion = () => {
  const items = [
    { id: 'v240', title: 'v2.4.0 — Panel de telemetría', badge: 'NUEVO', badgeClasses: 'bg-blue-600 text-white', hint: '12 cambios · publicado hace 3 días', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 'v232', title: 'v2.3.2 — Fixes de sincronía', badge: '4 FIXES', badgeClasses: 'bg-slate-100 text-slate-600', hint: 'Parche menor · hace 2 semanas', body: 'Ut enim ad minim veniam, quis nostrud.' },
    { id: 'v230', title: 'v2.3.0 — SSO y auditoría', badge: 'HOT', badgeClasses: 'bg-blue-100 text-blue-800', hint: 'Seguridad · requiere migración', body: 'Duis aute irure dolor in reprehenderit.' },
  ];
  const [openId, setOpenId] = useState<string | null>('v240');
  const baseId = useId();
  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id}>
            <button type="button" aria-expanded={open} onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))} className={open ? 'flex w-full cursor-pointer items-center justify-between gap-3 bg-blue-50/60 px-4 py-3 text-left' : 'flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left hover:bg-slate-50'}>
              <span>
                <span className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  {item.title}
                  <span className={'rounded-full px-2 py-0.5 font-mono text-[9px] font-bold ' + item.badgeClasses}>{item.badge}</span>
                </span>
                <span className="mt-0.5 block pl-1 text-xs text-slate-500">{item.hint}</span>
              </span>
              <span aria-hidden="true" className={open ? 'material-symbols-outlined rotate-180 text-[20px] text-blue-600 transition-transform duration-300 ease-in-out' : 'material-symbols-outlined text-[20px] text-slate-400 transition-transform duration-300 ease-in-out'}>expand_more</span>
            </button>
            <div role="region" inert={!open} className={'grid transition-all duration-300 ease-in-out motion-reduce:transition-none ' + (open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
              <div className="overflow-hidden">
                <div className="px-4 pb-4 pl-11">
                  <p className="text-sm text-slate-600">{item.body}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
`;
