export const SPLIT_DEPLOY_HTML = `
<div class="relative w-full">
  <div class="inline-flex w-full rounded-lg shadow-sm">
    <button type="button" class="inline-flex flex-1 items-center justify-center gap-2 rounded-l-lg bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
      <span class="material-symbols-outlined text-[18px]">rocket_launch</span>
      Crear Despliegue
    </button>
    <button type="button" aria-haspopup="menu" aria-expanded="true" aria-label="Ver opciones de despliegue" class="inline-flex items-center justify-center rounded-r-lg border-l border-blue-500 bg-blue-600 px-2.5 py-2 text-white hover:bg-blue-700 transition-colors">
      <span class="material-symbols-outlined text-[18px]">arrow_drop_down</span>
    </button>
  </div>
  <div role="menu" aria-label="Opciones de despliegue" class="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-0.5 rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
    <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
      <span class="flex items-center gap-2">
        <span class="h-2 w-2 rounded-full bg-blue-600"></span>
        Desplegar en Staging
      </span>
      <span class="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-800">DEF</span>
    </button>
    <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
      <span class="flex items-center gap-2">
        <span class="h-2 w-2 rounded-full bg-amber-500"></span>
        Desplegar en Canary 10%
      </span>
    </button>
    <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
      <span class="flex items-center gap-2">
        <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
        Promover a Producción
      </span>
    </button>
    <div class="my-1 border-t border-slate-200"></div>
    <button type="button" role="menuitem" class="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm text-slate-500 hover:bg-slate-100 transition-colors">
      <span class="material-symbols-outlined text-[16px]">schedule</span>
      Programar ejecución
    </button>
  </div>
</div>
`;

export const SPLIT_DEPLOY_TSX = `
import { useEffect, useRef, useState } from 'react';

const ACTIONS = [
  { id: 'staging', label: 'Desplegar en Staging', dot: 'bg-blue-600', badge: 'DEF' },
  { id: 'canary', label: 'Desplegar en Canary 10%', dot: 'bg-amber-500', badge: null },
  { id: 'production', label: 'Promover a Producción', dot: 'bg-emerald-500', badge: null },
] as const;

export const SplitDeployButton = () => {
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
      <div className="inline-flex w-full rounded-lg shadow-sm">
        <button
          type="button"
          onClick={() => window.alert('Presionaste: Crear Despliegue')}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-l-lg bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
            rocket_launch
          </span>
          Crear Despliegue
        </button>
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label="Ver opciones de despliegue"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-r-lg border-l border-blue-500 bg-blue-600 px-2.5 py-2 text-white transition-colors hover:bg-blue-700"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
            arrow_drop_down
          </span>
        </button>
      </div>
      {open && (
        <div
          role="menu"
          aria-label="Opciones de despliegue"
          className="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-0.5 rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]"
        >
          {ACTIONS.map((action) => (
            <button
              key={action.id}
              type="button"
              role="menuitem"
              onClick={() => handleAction(action.label)}
              className="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className={\`h-2 w-2 rounded-full \${action.dot}\`} />
                {action.label}
              </span>
              {action.badge !== null && (
                <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-800">
                  {action.badge}
                </span>
              )}
            </button>
          ))}
          <div className="my-1 border-t border-slate-200" />
          <button
            type="button"
            role="menuitem"
            onClick={() => handleAction('Programar ejecución')}
            className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm text-slate-500 transition-colors hover:bg-slate-100"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
              schedule
            </span>
            Programar ejecución
          </button>
        </div>
      )}
    </div>
  );
};
`;
