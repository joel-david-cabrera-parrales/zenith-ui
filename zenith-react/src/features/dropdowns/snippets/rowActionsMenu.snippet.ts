export const ROW_ACTIONS_MENU_HTML = `
<div class="relative w-full">
  <button
    type="button"
    aria-haspopup="menu"
    aria-expanded="true"
    class="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
  >
    <span class="flex items-center gap-2">
      <span class="material-symbols-outlined text-[18px] text-blue-600">tune</span>
      Opciones de registro
    </span>
    <span class="material-symbols-outlined text-[16px] text-slate-500">expand_more</span>
  </button>
  <div role="menu" aria-label="Opciones de registro" class="absolute top-full right-0 left-0 z-50 mt-2 w-full rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
    <div class="space-y-0.5">
      <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
        <span class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[16px] text-slate-500">edit</span>
          Editar recurso
        </span>
        <kbd class="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-500">⌘E</kbd>
      </button>
      <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
        <span class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[16px] text-slate-500">content_copy</span>
          Duplicar elemento
        </span>
        <kbd class="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-500">⌘D</kbd>
      </button>
      <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
        <span class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[16px] text-slate-500">archive</span>
          Archivar en cloud
        </span>
        <kbd class="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-500">⌘A</kbd>
      </button>
    </div>
    <div class="my-1 border-t border-slate-200"></div>
    <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors">
      <span class="flex items-center gap-2">
        <span class="material-symbols-outlined text-[16px] text-rose-600">delete</span>
        Eliminar recurso
      </span>
      <kbd class="rounded border border-rose-200 bg-rose-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-rose-600">⌫</kbd>
    </button>
  </div>
</div>
`;

export const ROW_ACTIONS_MENU_TSX = `
import { useEffect, useRef, useState } from 'react';

export const RowActionsMenu = () => {
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

  const close = () => setOpen(false);

  const handleAction = (label: string) => {
    window.alert('Presionaste: ' + label);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative w-full">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
      >
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-blue-600">
            tune
          </span>
          Opciones de registro
        </span>
        <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
          expand_more
        </span>
      </button>
      {open && (
        <div
          role="menu"
          aria-label="Opciones de registro"
          className="absolute top-full right-0 left-0 z-50 mt-2 w-full rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]"
        >
          <div className="space-y-0.5">
            <button
              type="button"
              role="menuitem"
              onClick={() => handleAction('Editar recurso (⌘E)')}
              className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
                  edit
                </span>
                Editar recurso
              </span>
              <kbd className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-500">
                ⌘E
              </kbd>
            </button>
            <button
              type="button"
              role="menuitem"
              onClick={() => handleAction('Duplicar elemento (⌘D)')}
              className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
                  content_copy
                </span>
                Duplicar elemento
              </span>
              <kbd className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-500">
                ⌘D
              </kbd>
            </button>
            <button
              type="button"
              role="menuitem"
              onClick={() => handleAction('Archivar en cloud (⌘A)')}
              className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
                  archive
                </span>
                Archivar en cloud
              </span>
              <kbd className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-500">
                ⌘A
              </kbd>
            </button>
          </div>
          <div className="my-1 border-t border-slate-200" />
          <button
            type="button"
            role="menuitem"
            onClick={() => handleAction('Eliminar recurso (⌫)')}
            className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-rose-600 transition-colors hover:bg-rose-50"
          >
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-rose-600">
                delete
              </span>
              Eliminar recurso
            </span>
            <kbd className="rounded border border-rose-200 bg-rose-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-rose-600">
              ⌫
            </kbd>
          </button>
        </div>
      )}
    </div>
  );
};
`;
