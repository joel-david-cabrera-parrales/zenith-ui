export const TONED_HTML = `
<div class="space-y-2">
  <div class="rounded-xl border border-slate-200 border-l-4 border-l-emerald-500 bg-white">
    <button type="button" aria-expanded="true" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900">API — Operativa <span class="font-mono text-[10px] text-emerald-700">99.99%</span></button>
    <div class="px-4 pb-3"><p class="text-sm text-slate-600">Lorem ipsum dolor sit amet.</p></div>
  </div>
  <div class="rounded-xl border border-slate-200 border-l-4 border-l-amber-500 bg-white">
    <button type="button" aria-expanded="false" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900">Cola de jobs — Degradada</button>
  </div>
  <div class="rounded-xl border border-slate-200 border-l-4 border-l-rose-500 bg-white">
    <button type="button" aria-expanded="false" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900">Región EU1 — Incidente</button>
  </div>
</div>
`;

export const TONED_TSX = `
import { useId, useState } from 'react';

export const TonedAccordion = () => {
  const items = [
    { id: 'api', title: 'API — Operativa', metric: '99.99%', border: 'border-l-emerald-500', icon: 'check_circle', iconColor: 'text-emerald-600', metricColor: 'text-emerald-700', body: 'Lorem ipsum dolor sit amet.' },
    { id: 'jobs', title: 'Cola de jobs — Degradada', metric: '340 en cola', border: 'border-l-amber-500', icon: 'warning', iconColor: 'text-amber-600', metricColor: 'text-amber-700', body: 'Ut enim ad minim veniam.' },
    { id: 'eu1', title: 'Región EU1 — Incidente', metric: 'INC-2041', border: 'border-l-rose-500', icon: 'error', iconColor: 'text-rose-600', metricColor: 'text-rose-700', body: 'Duis aute irure dolor.' },
  ];
  const [openId, setOpenId] = useState<string | null>('api');
  const baseId = useId();
  return (
    <div className="space-y-2">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id} className={'rounded-xl border border-slate-200 border-l-4 bg-white ' + item.border}>
            <button type="button" aria-expanded={open} onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))} className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900">
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className={'material-symbols-outlined text-[18px] ' + item.iconColor}>{item.icon}</span>
                {item.title}
                <span className={'font-mono text-[10px] ' + item.metricColor}>{item.metric}</span>
              </span>
              <span aria-hidden="true" className={open ? 'material-symbols-outlined rotate-180 text-[20px] text-slate-400 transition-transform duration-300 ease-in-out' : 'material-symbols-outlined text-[20px] text-slate-400 transition-transform duration-300 ease-in-out'}>expand_more</span>
            </button>
            <div role="region" inert={!open} className={'grid transition-all duration-300 ease-in-out motion-reduce:transition-none ' + (open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
              <div className="overflow-hidden">
                <div className="px-4 pb-3">
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
