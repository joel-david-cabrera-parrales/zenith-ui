export const KEBAB_MENU_HTML = `
<div class="relative w-full">
  <div class="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-100 p-2">
    <span class="font-mono text-xs text-slate-500">id: svc-auth-eu-west</span>
    <button type="button" aria-haspopup="menu" aria-expanded="true" aria-label="Abrir menú contextual" class="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors">
      <span class="material-symbols-outlined text-[18px]">more_vert</span>
    </button>
  </div>
  <div role="menu" aria-label="Menú contextual kebab" class="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-0.5 rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
    <div class="space-y-0.5">
      <button type="button" role="menuitem" class="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors">
        <span class="material-symbols-outlined text-[16px] text-slate-500">open_in_new</span>
        Ver telemetría viva
      </button>
      <button type="button" role="menuitem" class="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors">
        <span class="material-symbols-outlined text-[16px] text-slate-500">replay</span>
        Reiniciar pod k8s
      </button>
      <button type="button" role="menuitem" class="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors">
        <span class="material-symbols-outlined text-[16px] text-slate-500">key</span>
        Rotar API secret
      </button>
    </div>
    <div class="my-1 border-t border-slate-200"></div>
    <button type="button" role="menuitem" class="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors">
      <span class="material-symbols-outlined text-[16px] text-rose-600">stop_circle</span>
      Forzar terminación
    </button>
  </div>
</div>
`;

export const KEBAB_MENU_TSX = `
import { useEffect, useRef, useState } from 'react';

const ACTIONS = [
  { id: 'telemetry', label: 'Ver telemetría viva', icon: 'open_in_new' },
  { id: 'restart', label: 'Reiniciar pod k8s', icon: 'replay' },
  { id: 'rotate', label: 'Rotar API secret', icon: 'key' },
];

export const KebabMenu = () => {
  const [open, setOpen] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current !== null && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const handleAction = (label: string) => {
    window.alert(\`Presionaste: \${label}\`);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative w-full">
      <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-100 p-2">
        <span className="font-mono text-xs text-slate-500">id: svc-auth-eu-west</span>
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label="Abrir menú contextual"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition-colors hover:bg-slate-50"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
            more_vert
          </span>
        </button>
      </div>
      {open && (
        <div
          role="menu"
          aria-label="Menú contextual kebab"
          className="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-0.5 rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]"
        >
          <div className="space-y-0.5">
            {ACTIONS.map((action) => (
              <button
                key={action.id}
                type="button"
                role="menuitem"
                onClick={() => handleAction(action.label)}
                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-100"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
                  {action.icon}
                </span>
                {action.label}
              </button>
            ))}
          </div>
          <div className="my-1 border-t border-slate-200" />
          <button
            type="button"
            role="menuitem"
            onClick={() => handleAction('Forzar terminación')}
            className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium text-rose-600 transition-colors hover:bg-rose-50"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-rose-600">
              stop_circle
            </span>
            Forzar terminación
          </button>
        </div>
      )}
    </div>
  );
};
`;
