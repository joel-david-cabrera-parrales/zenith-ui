export const MODE_SELECT_HTML = `
<div class="relative w-full">
  <button type="button" aria-haspopup="menu" aria-expanded="true" class="flex w-full items-center justify-between rounded-lg border border-blue-600 bg-white px-3 py-2 text-sm font-medium text-blue-700 shadow-sm ring-2 ring-blue-600/20">
    Modo Operativo: Auditoría
    <span class="material-symbols-outlined text-[16px]">keyboard_arrow_up</span>
  </button>
  <div role="menu" aria-label="Selector de modo operativo" class="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-1 rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
    <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded-lg bg-blue-100 px-2.5 py-1.5 text-sm font-semibold text-blue-900">
      <span class="flex items-center gap-2">
        <span class="material-symbols-outlined text-[16px] text-blue-700">check</span>
        Modo Auditoría Strict
      </span>
      <span class="text-[10px] font-bold uppercase tracking-wider text-blue-700">Activo</span>
    </button>
    <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors">
      <span class="flex items-center gap-2">
        <span class="material-symbols-outlined text-[16px] text-slate-500">visibility</span>
        Modo Solo Lectura
      </span>
    </button>
    <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100 transition-colors">
      <span class="flex items-center gap-2">
        <span class="material-symbols-outlined text-[16px] text-slate-500">bolt</span>
        Modo Turbo
      </span>
    </button>
    <div aria-disabled="true" class="flex cursor-not-allowed items-center justify-between rounded-lg bg-slate-100/60 px-2.5 py-1.5 text-sm text-slate-400">
      <span class="flex items-center gap-2">
        <span class="material-symbols-outlined text-[16px]">lock</span>
        Zero-Trust
      </span>
      <span class="rounded bg-slate-200 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">PRO</span>
    </div>
  </div>
</div>
`;

export const MODE_SELECT_TSX = `
import { useEffect, useRef, useState } from 'react';

const OPTIONS = [
  { id: 'audit', label: 'Modo Auditoría Strict', icon: 'check' },
  { id: 'readonly', label: 'Modo Solo Lectura', icon: 'visibility' },
  { id: 'turbo', label: 'Modo Turbo', icon: 'bolt' },
] as const;

export const ModeSelectMenu = () => {
  const [open, setOpen] = useState(true);
  const [selectedId, setSelectedId] = useState('audit');
  const rootRef = useRef<HTMLDivElement>(null);

  const selected = OPTIONS.find((option) => option.id === selectedId) ?? OPTIONS[0];

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

  const handleAction = (id: string, label: string) => {
    setSelectedId(id);
    window.alert(\`Presionaste: \${label}\`);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative w-full">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg border border-blue-600 bg-white px-3 py-2 text-sm font-medium text-blue-700 shadow-sm ring-2 ring-blue-600/20"
      >
        Modo Operativo: {selected.label.replace('Modo ', '')}
        <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
          {open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
        </span>
      </button>
      {open && (
        <div
          role="menu"
          aria-label="Selector de modo operativo"
          className="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-1 rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]"
        >
          {OPTIONS.map((option) => {
            const isSelected = option.id === selectedId;
            return (
              <button
                key={option.id}
                type="button"
                role="menuitem"
                aria-current={isSelected}
                onClick={() => handleAction(option.id, option.label)}
                className={
                  isSelected
                    ? 'flex w-full items-center justify-between rounded-lg bg-blue-100 px-2.5 py-1.5 text-sm font-semibold text-blue-900'
                    : 'flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-100'
                }
              >
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={\`material-symbols-outlined text-[16px] \${isSelected ? 'text-blue-700' : 'text-slate-500'}\`}
                  >
                    {option.icon}
                  </span>
                  {option.label}
                </span>
                {isSelected && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Activo</span>
                )}
              </button>
            );
          })}
          <div
            aria-disabled="true"
            className="flex cursor-not-allowed items-center justify-between rounded-lg bg-slate-100/60 px-2.5 py-1.5 text-sm text-slate-400"
          >
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                lock
              </span>
              Zero-Trust
            </span>
            <span className="rounded bg-slate-200 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">PRO</span>
          </div>
        </div>
      )}
    </div>
  );
};
`;
