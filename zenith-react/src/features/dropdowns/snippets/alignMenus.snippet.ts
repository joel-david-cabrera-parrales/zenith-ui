export const ALIGN_MENUS_HTML = `
<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
  <div class="relative w-full">
    <button type="button" aria-haspopup="menu" aria-expanded="true" class="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3.5 py-2 text-sm text-slate-700">
      <span>Trigger Anclado</span>
      <span class="material-symbols-outlined text-[16px]">south_east</span>
    </button>
    <div role="menu" aria-label="Menú alineado a la izquierda" class="absolute top-full left-0 z-50 mt-2 w-56 space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
      <div class="px-2 py-1 text-xs font-semibold text-slate-500">START_ALIGNED_BOX</div>
      <button type="button" role="menuitem" class="flex w-full items-center gap-2 rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-100">
        <span class="material-symbols-outlined text-[16px] text-slate-500">file_download</span>
        Exportar CSV
      </button>
      <button type="button" role="menuitem" class="flex w-full items-center gap-2 rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-100">
        <span class="material-symbols-outlined text-[16px] text-slate-500">print</span>
        Imprimir reporte
      </button>
    </div>
  </div>
  <div class="relative w-full">
    <div class="flex justify-end">
      <button type="button" aria-haspopup="menu" aria-expanded="true" class="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3.5 py-2 text-sm text-slate-700">
        <span class="material-symbols-outlined text-[16px]">south_west</span>
        <span>Trigger Extremo</span>
      </button>
    </div>
    <div role="menu" aria-label="Menú alineado a la derecha" class="absolute top-full right-0 z-50 mt-2 w-56 space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
      <div class="px-2 py-1 text-right text-xs font-semibold text-slate-500">END_ALIGNED_BOX</div>
      <button type="button" role="menuitem" class="flex w-full items-center justify-end gap-2 rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-100">
        Descargar JSON
        <span class="material-symbols-outlined text-[16px] text-slate-500">code</span>
      </button>
      <button type="button" role="menuitem" class="flex w-full items-center justify-end gap-2 rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-100">
        Compartir enlace
        <span class="material-symbols-outlined text-[16px] text-slate-500">share</span>
      </button>
    </div>
  </div>
  <div class="relative w-full">
    <div role="menu" aria-label="Menú dropup" class="absolute right-0 bottom-full left-0 z-50 mb-2 w-full space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
      <div class="flex items-center justify-between px-2 py-1 text-xs font-semibold text-slate-500">
        <span>DROPUP_POPUP</span>
        <span class="material-symbols-outlined text-[14px]">arrow_upward</span>
      </div>
      <button type="button" role="menuitem" class="flex w-full items-center gap-2 rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-100">
        <span class="material-symbols-outlined text-[16px] text-slate-500">keyboard</span>
        Configurar atajos
      </button>
      <button type="button" role="menuitem" class="flex w-full items-center gap-2 rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-100">
        <span class="material-symbols-outlined text-[16px] text-slate-500">contrast</span>
        Alternar tema visual
      </button>
    </div>
    <button type="button" aria-haspopup="menu" aria-expanded="true" class="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-slate-100 px-3.5 py-2 text-sm text-slate-700">
      <span>Barra de Estado Footer</span>
      <span class="material-symbols-outlined text-[16px]">expand_less</span>
    </button>
  </div>
  <div class="relative w-full">
    <button type="button" aria-haspopup="menu" aria-expanded="true" class="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3.5 py-2 text-sm text-slate-700">
      <span>Abrir cascada</span>
      <span class="material-symbols-outlined text-[16px]">chevron_right</span>
    </button>
    <div role="menu" aria-label="Menú en cascada nivel 1" class="absolute top-full left-0 z-50 mt-2 w-full space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
      <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100">
        <span>Crear nuevo...</span>
        <span class="material-symbols-outlined text-[14px] text-slate-500">add</span>
      </button>
      <button type="button" aria-haspopup="menu" aria-expanded="true" class="flex w-full items-center justify-between rounded border border-blue-200 bg-blue-50 px-2.5 py-1.5 text-sm font-semibold text-blue-700">
        <span class="flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px] text-blue-600">share</span>
          Compartir en...
        </span>
        <span class="material-symbols-outlined text-[16px] text-blue-600">chevron_right</span>
      </button>
      <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100">
        <span>Exportar binarios</span>
        <span class="material-symbols-outlined text-[14px] text-slate-500">download</span>
      </button>
      <div role="menu" aria-label="Submenú nivel 2" class="mt-1 space-y-1 rounded-lg border border-blue-200 bg-slate-50 p-2">
        <div class="px-1 text-[11px] font-bold uppercase tracking-wider text-blue-600">Submenú nivel 2 // Targets</div>
        <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-200">
          <span class="flex items-center gap-1.5">
            <span class="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            Slack Channel #dev-ops
          </span>
          <kbd class="font-mono text-[10px] text-slate-500">⌘1</kbd>
        </button>
        <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-200">
          <span class="flex items-center gap-1.5">
            <span class="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            Webhook de Teams
          </span>
          <kbd class="font-mono text-[10px] text-slate-500">⌘2</kbd>
        </button>
        <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-200">
          <span class="flex items-center gap-1.5">
            <span class="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            Email a Administradores
          </span>
          <kbd class="font-mono text-[10px] text-slate-500">⌘3</kbd>
        </button>
      </div>
    </div>
  </div>
</div>
`;

export const ALIGN_MENUS_TSX = `
import { useEffect, useRef, useState } from 'react';

const useFloatingMenu = (defaultOpen: boolean) => {
  const [open, setOpen] = useState(defaultOpen);
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

  return { open, rootRef, setOpen };
};

const handleAction = (label: string, close: () => void) => {
  window.alert(\`Presionaste: \${label}\`);
  close();
};

export const StartAlignMenu = () => {
  const { open, rootRef, setOpen } = useFloatingMenu(true);
  return (
    <div ref={rootRef} className="relative w-full">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3.5 py-2 text-sm text-slate-700 hover:bg-slate-200"
      >
        <span>Trigger Anclado</span>
        <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
          south_east
        </span>
      </button>
      {open && (
        <div role="menu" aria-label="Menú alineado a la izquierda" className="absolute top-full left-0 z-50 mt-2 w-56 space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
          <div className="px-2 py-1 text-xs font-semibold text-slate-500">START_ALIGNED_BOX</div>
          <button type="button" role="menuitem" onClick={() => handleAction('Exportar CSV', () => setOpen(false))} className="flex w-full items-center gap-2 rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-100">
            <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
              file_download
            </span>
            Exportar CSV
          </button>
          <button type="button" role="menuitem" onClick={() => handleAction('Imprimir reporte', () => setOpen(false))} className="flex w-full items-center gap-2 rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-100">
            <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
              print
            </span>
            Imprimir reporte
          </button>
        </div>
      )}
    </div>
  );
};

export const EndAlignMenu = () => {
  const { open, rootRef, setOpen } = useFloatingMenu(true);
  return (
    <div ref={rootRef} className="relative w-full">
      <div className="flex justify-end">
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3.5 py-2 text-sm text-slate-700 hover:bg-slate-200"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
            south_west
          </span>
          <span>Trigger Extremo</span>
        </button>
      </div>
      {open && (
        <div role="menu" aria-label="Menú alineado a la derecha" className="absolute top-full right-0 z-50 mt-2 w-56 space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
          <div className="px-2 py-1 text-right text-xs font-semibold text-slate-500">END_ALIGNED_BOX</div>
          <button type="button" role="menuitem" onClick={() => handleAction('Descargar JSON', () => setOpen(false))} className="flex w-full items-center justify-end gap-2 rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-100">
            Descargar JSON
            <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
              code
            </span>
          </button>
          <button type="button" role="menuitem" onClick={() => handleAction('Compartir enlace', () => setOpen(false))} className="flex w-full items-center justify-end gap-2 rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-100">
            Compartir enlace
            <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
              share
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export const DropupMenu = () => {
  const { open, rootRef, setOpen } = useFloatingMenu(true);
  return (
    <div ref={rootRef} className="relative w-full">
      {open && (
        <div role="menu" aria-label="Menú dropup" className="absolute right-0 bottom-full left-0 z-50 mb-2 w-full space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
          <div className="flex items-center justify-between px-2 py-1 text-xs font-semibold text-slate-500">
            <span>DROPUP_POPUP</span>
            <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
              arrow_upward
            </span>
          </div>
          <button type="button" role="menuitem" onClick={() => handleAction('Configurar atajos', () => setOpen(false))} className="flex w-full items-center gap-2 rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-100">
            <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
              keyboard
            </span>
            Configurar atajos
          </button>
          <button type="button" role="menuitem" onClick={() => handleAction('Alternar tema visual', () => setOpen(false))} className="flex w-full items-center gap-2 rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-100">
            <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
              contrast
            </span>
            Alternar tema visual
          </button>
        </div>
      )}
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-slate-100 px-3.5 py-2 text-sm text-slate-700 hover:bg-slate-200"
      >
        <span>Barra de Estado Footer</span>
        <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
          expand_less
        </span>
      </button>
    </div>
  );
};

export const CascadeMenu = () => {
  const { open, rootRef, setOpen } = useFloatingMenu(true);
  const [openSub, setOpenSub] = useState(true);
  return (
    <div ref={rootRef} className="relative w-full">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3.5 py-2 text-sm text-slate-700 hover:bg-slate-200"
      >
        <span>Abrir cascada</span>
        <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
          chevron_right
        </span>
      </button>
      {open && (
        <div role="menu" aria-label="Menú en cascada nivel 1" className="absolute top-full left-0 z-50 mt-2 w-full space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
          <button type="button" role="menuitem" onClick={() => handleAction('Crear nuevo', () => setOpen(false))} className="flex w-full items-center justify-between rounded px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100">
            <span>Crear nuevo...</span>
            <span aria-hidden="true" className="material-symbols-outlined text-[14px] text-slate-500">
              add
            </span>
          </button>
          <button type="button" aria-haspopup="menu" aria-expanded={openSub} onClick={() => setOpenSub((prev) => !prev)} className="flex w-full items-center justify-between rounded border border-blue-200 bg-blue-50 px-2.5 py-1.5 text-sm font-semibold text-blue-700">
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-blue-600">
                share
              </span>
              Compartir en...
            </span>
            <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-blue-600">
              chevron_right
            </span>
          </button>
          <button type="button" role="menuitem" onClick={() => handleAction('Exportar binarios', () => setOpen(false))} className="flex w-full items-center justify-between rounded px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100">
            <span>Exportar binarios</span>
            <span aria-hidden="true" className="material-symbols-outlined text-[14px] text-slate-500">
              download
            </span>
          </button>
          {openSub && (
            <div role="menu" aria-label="Submenú nivel 2" className="mt-1 space-y-1 rounded-lg border border-blue-200 bg-slate-50 p-2">
              <div className="px-1 text-[11px] font-bold uppercase tracking-wider text-blue-600">
                Submenú nivel 2 // Targets
              </div>
              {[
                { id: 'Slack Channel #dev-ops', shortcut: '⌘1' },
                { id: 'Webhook de Teams', shortcut: '⌘2' },
                { id: 'Email a Administradores', shortcut: '⌘3' },
              ].map((target) => (
                <button
                  key={target.id}
                  type="button"
                  role="menuitem"
                  onClick={() => handleAction(target.id + ' (' + target.shortcut + ')', () => setOpen(false))}
                  className="flex w-full items-center justify-between rounded px-2 py-1 text-sm text-slate-700 hover:bg-slate-200"
                >
                  <span className="flex items-center gap-1.5">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {target.id}
                  </span>
                  <kbd className="font-mono text-[10px] text-slate-500">{target.shortcut}</kbd>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
`;
