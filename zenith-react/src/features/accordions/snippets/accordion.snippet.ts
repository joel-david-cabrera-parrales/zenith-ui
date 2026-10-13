export const ACCORDION_HTML = `
<div class="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
  <div>
    <button type="button" aria-expanded="true" aria-controls="acc-panel-1" id="acc-button-1" class="flex w-full items-center justify-between gap-3 bg-blue-50/60 px-4 py-3 text-left text-sm font-semibold text-slate-900">
      <span class="flex items-center gap-2">
        <span aria-hidden="true" class="material-symbols-outlined text-[18px] text-blue-600">help</span>
        ¿Qué es Zenith UI?
      </span>
      <span aria-hidden="true" class="material-symbols-outlined rotate-180 text-[20px] text-blue-600">expand_more</span>
    </button>
    <div id="acc-panel-1" role="region" aria-labelledby="acc-button-1" class="px-4 pb-4 pt-1">
      <p class="text-sm leading-relaxed text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
    </div>
  </div>
  <div>
    <button type="button" aria-expanded="false" aria-controls="acc-panel-2" id="acc-button-2" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50">
      <span class="flex items-center gap-2">
        <span aria-hidden="true" class="material-symbols-outlined text-[18px] text-slate-400">palette</span>
        ¿Cómo personalizo los estilos?
      </span>
      <span aria-hidden="true" class="material-symbols-outlined text-[20px] text-slate-400">expand_more</span>
    </button>
    <div id="acc-panel-2" role="region" aria-labelledby="acc-button-2" hidden class="px-4 pb-4 pt-1">
      <p class="text-sm leading-relaxed text-slate-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
    </div>
  </div>
  <div>
    <button type="button" aria-expanded="false" aria-controls="acc-panel-3" id="acc-button-3" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50">
      <span class="flex items-center gap-2">
        <span aria-hidden="true" class="material-symbols-outlined text-[18px] text-slate-400">rocket_launch</span>
        ¿Cómo empiezo un proyecto?
      </span>
      <span aria-hidden="true" class="material-symbols-outlined text-[20px] text-slate-400">expand_more</span>
    </button>
    <div id="acc-panel-3" role="region" aria-labelledby="acc-button-3" hidden class="px-4 pb-4 pt-1">
      <p class="text-sm leading-relaxed text-slate-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
    </div>
  </div>
</div>
`;

export const ACCORDION_TSX = `
import { useId, useState } from 'react';

export const Accordion = () => {
  const items = [
    { id: 'que-es', title: '¿Qué es Zenith UI?', icon: 'help', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.' },
    { id: 'estilos', title: '¿Cómo personalizo los estilos?', icon: 'palette', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
    { id: 'empezar', title: '¿Cómo empiezo un proyecto?', icon: 'rocket_launch', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
  ];
  const [openId, setOpenId] = useState<string | null>('que-es');
  const baseId = useId();
  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {items.map((item) => {
        const open = openId === item.id;
        const buttonId = baseId + '-' + item.id + '-button';
        const panelId = baseId + '-' + item.id + '-panel';
        return (
          <div key={item.id}>
            <button
              type="button"
              id={buttonId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
              className={
                open
                  ? 'flex w-full cursor-pointer items-center justify-between gap-3 bg-blue-50/60 px-4 py-3 text-left text-sm font-semibold text-slate-900'
                  : 'flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50'
              }
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className={open ? 'material-symbols-outlined text-[18px] text-blue-600' : 'material-symbols-outlined text-[18px] text-slate-400'}>
                  {item.icon}
                </span>
                {item.title}
              </span>
              <span aria-hidden="true" className={open ? 'material-symbols-outlined rotate-180 text-[20px] text-blue-600 transition-transform duration-300 ease-in-out' : 'material-symbols-outlined text-[20px] text-slate-400 transition-transform duration-300 ease-in-out'}>
                expand_more
              </span>
            </button>
            <div id={panelId} role="region" aria-labelledby={buttonId} inert={!open} className={'grid transition-all duration-300 ease-in-out motion-reduce:transition-none ' + (open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
              <div className="overflow-hidden">
                <div className="px-4 pb-4 pt-1">
                  <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
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
