import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface AlignMenuProps extends HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
  onAction?: (id: string) => void;
}

export const StartAlignMenu = ({ defaultOpen = true, onAction, className = '', ...rest }: AlignMenuProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [exiting, setExiting] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open || exiting) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current !== null && !rootRef.current.contains(event.target as Node)) {
        setExiting(true);
        timer.current = window.setTimeout(() => {
          setOpen(false);
          setExiting(false);
        }, 200);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExiting(true);
        timer.current = window.setTimeout(() => {
          setOpen(false);
          setExiting(false);
        }, 200);
      }
    };
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, exiting]);

  const close = () => {
    if (exiting) return;
    setExiting(true);
    timer.current = window.setTimeout(() => {
      setOpen(false);
      setExiting(false);
    }, 200);
  };

  const toggle = () => {
    if (open && !exiting) {
      close();
      return;
    }
    setExiting(false);
    setOpen(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  const handleAction = (id: string) => {
    onAction?.(id);
    close();
  };

  const visible = open || exiting;

  return (
    <div ref={rootRef} className={`relative w-full ${className}`} {...rest} onKeyDown={handleKeyDown}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open && !exiting}
        onClick={toggle}
        className="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3.5 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-200"
      >
        <span>Trigger Anclado</span>
        <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
          south_east
        </span>
      </button>

      {visible && (
        <div
          role="menu"
          aria-label="Menú alineado a la izquierda"
          className={
            exiting
              ? 'absolute top-full left-0 z-50 mt-2 w-56 animate-modal-out space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
              : 'absolute top-full left-0 z-50 mt-2 w-56 animate-modal-in space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
          }
        >
          <div className="px-2 py-1 text-xs font-semibold text-slate-500">START_ALIGNED_BOX</div>
          <button
            type="button"
            role="menuitem"
            onClick={() => handleAction('export-csv')}
            className="flex w-full items-center gap-2 rounded px-2 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-100"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
              file_download
            </span>
            Exportar CSV
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => handleAction('print')}
            className="flex w-full items-center gap-2 rounded px-2 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-100"
          >
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

export const EndAlignMenu = ({ defaultOpen = true, onAction, className = '', ...rest }: AlignMenuProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [exiting, setExiting] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open || exiting) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current !== null && !rootRef.current.contains(event.target as Node)) {
        setExiting(true);
        timer.current = window.setTimeout(() => {
          setOpen(false);
          setExiting(false);
        }, 200);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExiting(true);
        timer.current = window.setTimeout(() => {
          setOpen(false);
          setExiting(false);
        }, 200);
      }
    };
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, exiting]);

  const close = () => {
    if (exiting) return;
    setExiting(true);
    timer.current = window.setTimeout(() => {
      setOpen(false);
      setExiting(false);
    }, 200);
  };

  const toggle = () => {
    if (open && !exiting) {
      close();
      return;
    }
    setExiting(false);
    setOpen(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  const handleAction = (id: string) => {
    onAction?.(id);
    close();
  };

  const visible = open || exiting;

  return (
    <div ref={rootRef} className={`relative w-full ${className}`} {...rest} onKeyDown={handleKeyDown}>
      <div className="flex justify-end">
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open && !exiting}
          onClick={toggle}
          className="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3.5 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-200"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
            south_west
          </span>
          <span>Trigger Extremo</span>
        </button>
      </div>

      {visible && (
        <div
          role="menu"
          aria-label="Menú alineado a la derecha"
          className={
            exiting
              ? 'absolute top-full right-0 z-50 mt-2 w-56 animate-modal-out space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
              : 'absolute top-full right-0 z-50 mt-2 w-56 animate-modal-in space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
          }
        >
          <div className="px-2 py-1 text-right text-xs font-semibold text-slate-500">END_ALIGNED_BOX</div>
          <button
            type="button"
            role="menuitem"
            onClick={() => handleAction('download-json')}
            className="flex w-full items-center justify-end gap-2 rounded px-2 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-100"
          >
            Descargar JSON
            <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
              code
            </span>
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => handleAction('share-link')}
            className="flex w-full items-center justify-end gap-2 rounded px-2 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-100"
          >
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

export const DropupMenu = ({ defaultOpen = true, onAction, className = '', ...rest }: AlignMenuProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [exiting, setExiting] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open || exiting) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current !== null && !rootRef.current.contains(event.target as Node)) {
        setExiting(true);
        timer.current = window.setTimeout(() => {
          setOpen(false);
          setExiting(false);
        }, 200);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExiting(true);
        timer.current = window.setTimeout(() => {
          setOpen(false);
          setExiting(false);
        }, 200);
      }
    };
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, exiting]);

  const close = () => {
    if (exiting) return;
    setExiting(true);
    timer.current = window.setTimeout(() => {
      setOpen(false);
      setExiting(false);
    }, 200);
  };

  const toggle = () => {
    if (open && !exiting) {
      close();
      return;
    }
    setExiting(false);
    setOpen(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  const handleAction = (id: string) => {
    onAction?.(id);
    close();
  };

  const visible = open || exiting;

  return (
    <div ref={rootRef} className={`relative w-full ${className}`} {...rest} onKeyDown={handleKeyDown}>
      {visible && (
        <div
          role="menu"
          aria-label="Menú dropup"
          className={
            exiting
              ? 'absolute right-0 bottom-full left-0 z-50 mb-2 w-full animate-modal-out space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
              : 'absolute right-0 bottom-full left-0 z-50 mb-2 w-full animate-modal-in space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
          }
        >
          <div className="flex items-center justify-between px-2 py-1 text-xs font-semibold text-slate-500">
            <span>DROPUP_POPUP</span>
            <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
              arrow_upward
            </span>
          </div>
          <button
            type="button"
            role="menuitem"
            onClick={() => handleAction('shortcuts')}
            className="flex w-full items-center gap-2 rounded px-2 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-100"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
              keyboard
            </span>
            Configurar atajos
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => handleAction('theme')}
            className="flex w-full items-center gap-2 rounded px-2 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-100"
          >
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
        aria-expanded={open && !exiting}
        onClick={toggle}
        className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-slate-100 px-3.5 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-200"
      >
        <span>Barra de Estado Footer</span>
        <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
          expand_less
        </span>
      </button>
    </div>
  );
};

export const CascadeMenu = ({ defaultOpen = true, onAction, className = '', ...rest }: AlignMenuProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [exiting, setExiting] = useState(false);
  const [openSub, setOpenSub] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open || exiting) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current !== null && !rootRef.current.contains(event.target as Node)) {
        setExiting(true);
        timer.current = window.setTimeout(() => {
          setOpen(false);
          setExiting(false);
        }, 200);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExiting(true);
        timer.current = window.setTimeout(() => {
          setOpen(false);
          setExiting(false);
        }, 200);
      }
    };
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, exiting]);

  const close = () => {
    if (exiting) return;
    setExiting(true);
    timer.current = window.setTimeout(() => {
      setOpen(false);
      setExiting(false);
    }, 200);
  };

  const toggle = () => {
    if (open && !exiting) {
      close();
      return;
    }
    setExiting(false);
    setOpen(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  const handleAction = (id: string) => {
    onAction?.(id);
    close();
  };

  const visible = open || exiting;

  return (
    <div ref={rootRef} className={`relative w-full ${className}`} {...rest} onKeyDown={handleKeyDown}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open && !exiting}
        onClick={toggle}
        className="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3.5 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-200"
      >
        <span>Abrir cascada</span>
        <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
          chevron_right
        </span>
      </button>

      {visible && (
        <div
          role="menu"
          aria-label="Menú en cascada nivel 1"
          className={
            exiting
              ? 'absolute top-full left-0 z-50 mt-2 w-full animate-modal-out space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
              : 'absolute top-full left-0 z-50 mt-2 w-full animate-modal-in space-y-1 rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
          }
        >
          <button
            type="button"
            role="menuitem"
            onClick={() => handleAction('create-new')}
            className="flex w-full items-center justify-between rounded px-2.5 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-100"
          >
            <span>Crear nuevo...</span>
            <span aria-hidden="true" className="material-symbols-outlined text-[14px] text-slate-500">
              add
            </span>
          </button>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={openSub}
            onClick={() => setOpenSub((prev) => !prev)}
            className="flex w-full items-center justify-between rounded border border-blue-200 bg-blue-50 px-2.5 py-1.5 text-sm font-semibold text-blue-700"
          >
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
          <button
            type="button"
            role="menuitem"
            onClick={() => handleAction('export-binaries')}
            className="flex w-full items-center justify-between rounded px-2.5 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-100"
          >
            <span>Exportar binarios</span>
            <span aria-hidden="true" className="material-symbols-outlined text-[14px] text-slate-500">
              download
            </span>
          </button>

          {openSub && (
            <div role="menu" aria-label="Submenú nivel 2" className="mt-1 space-y-1 rounded-lg border border-blue-200 bg-slate-50 p-2">
              <div className="px-1 text-[11px] font-bold tracking-wider text-blue-600 uppercase">
                Submenú nivel 2 // Targets
              </div>
              <button
                type="button"
                role="menuitem"
                onClick={() => handleAction('share-slack')}
                className="flex w-full items-center justify-between rounded px-2 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-200"
              >
                <span className="flex items-center gap-1.5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Slack Channel #dev-ops
                </span>
                <kbd className="font-mono text-[10px] text-slate-500">⌘1</kbd>
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => handleAction('share-teams')}
                className="flex w-full items-center justify-between rounded px-2 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-200"
              >
                <span className="flex items-center gap-1.5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Webhook de Teams
                </span>
                <kbd className="font-mono text-[10px] text-slate-500">⌘2</kbd>
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => handleAction('share-email')}
                className="flex w-full items-center justify-between rounded px-2 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-200"
              >
                <span className="flex items-center gap-1.5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Email a Administradores
                </span>
                <kbd className="font-mono text-[10px] text-slate-500">⌘3</kbd>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
