export const MULTI_OPEN_HTML = `
<div>
  <div class="flex flex-wrap items-center justify-between gap-2">
    <span class="rounded-full bg-blue-100 px-2.5 py-1 font-mono text-[10px] font-semibold text-blue-800">2 abiertas</span>
    <span class="flex gap-2">
      <button type="button" class="rounded-lg border border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-700">Expandir todo</button>
      <button type="button" class="rounded-lg border border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-700">Colapsar</button>
    </span>
  </div>
  <div class="mt-3 space-y-2">
    <div class="rounded-xl border border-blue-200 bg-blue-50/40">
      <button type="button" aria-expanded="true" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900">Instalación</button>
      <div class="px-4 pb-4"><p class="text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
    </div>
    <div class="rounded-xl border border-slate-200">
      <button type="button" aria-expanded="false" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900">Configuración avanzada</button>
    </div>
  </div>
</div>
`;

export const MULTI_OPEN_TSX = `
import { useId, useState } from 'react';

export const MultiOpenAccordion = () => {
  const items = [
    { id: 'install', title: 'Instalación', icon: 'deployed_code', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 'config', title: 'Configuración avanzada', icon: 'tune', body: 'Ut enim ad minim veniam, quis nostrud exercitation.' },
    { id: 'envs', title: 'Entornos de prueba', icon: 'science', body: 'Duis aute irure dolor in reprehenderit.' },
  ];
  const [openIds, setOpenIds] = useState<string[]>(['install', 'envs']);
  const baseId = useId();
  const toggle = (id: string) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((open) => open !== id) : [...prev, id]));
  };
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-full bg-blue-100 px-2.5 py-1 font-mono text-[10px] font-semibold text-blue-800">{openIds.length} abiertas</span>
        <span className="flex gap-2">
          <button type="button" onClick={() => setOpenIds(items.map((item) => item.id))} className="rounded-lg border border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-700">Expandir todo</button>
          <button type="button" onClick={() => setOpenIds([])} className="rounded-lg border border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-700">Colapsar</button>
        </span>
      </div>
      <div className="mt-3 space-y-2">
        {items.map((item) => {
          const open = openIds.includes(item.id);
          return (
            <div key={item.id} className={open ? 'rounded-xl border border-blue-200 bg-blue-50/40' : 'rounded-xl border border-slate-200 bg-white'}>
              <button type="button" aria-expanded={open} onClick={() => toggle(item.id)} className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900">
                <span className="flex items-center gap-2">
                  <span aria-hidden="true" className={open ? 'material-symbols-outlined text-[18px] text-blue-600' : 'material-symbols-outlined text-[18px] text-slate-400'}>{item.icon}</span>
                  {item.title}
                </span>
                <span aria-hidden="true" className={open ? 'material-symbols-outlined rotate-180 text-[20px] text-blue-600 transition-transform duration-300 ease-in-out' : 'material-symbols-outlined text-[20px] text-slate-400 transition-transform duration-300 ease-in-out'}>expand_more</span>
              </button>
              <div role="region" inert={!open} className={'grid transition-all duration-300 ease-in-out motion-reduce:transition-none ' + (open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
                <div className="overflow-hidden">
                  <div className="px-4 pb-4">
                    <p className="text-sm text-slate-600">{item.body}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
`;
