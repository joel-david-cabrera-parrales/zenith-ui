import { useEffect, useId, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface RowAction {
  id: string;
  label: string;
  icon: string;
  shortcut: string;
  tone?: 'default' | 'danger';
}

export interface RowActionsMenuProps extends HTMLAttributes<HTMLDivElement> {
  triggerLabel?: string;
  defaultOpen?: boolean;
  onAction?: (id: string) => void;
}

const DEFAULT_ACTIONS: RowAction[] = [
  { id: 'edit', label: 'Editar recurso', icon: 'edit', shortcut: '⌘E' },
  { id: 'duplicate', label: 'Duplicar elemento', icon: 'content_copy', shortcut: '⌘D' },
  { id: 'archive', label: 'Archivar en cloud', icon: 'archive', shortcut: '⌘A' },
  { id: 'delete', label: 'Eliminar recurso', icon: 'delete', shortcut: '⌫', tone: 'danger' },
];

export const RowActionsMenu = ({
  triggerLabel = 'Opciones de registro',
  defaultOpen = true,
  onAction,
  className = '',
  ...rest
}: RowActionsMenuProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [exiting, setExiting] = useState(false);
  const menuId = useId();
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

  const handleAction = (id: string) => {
    onAction?.(id);
    close();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  const visible = open || exiting;

  return (
    <div ref={rootRef} className={`relative w-full ${className}`} {...rest} onKeyDown={handleKeyDown}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open && !exiting}
        aria-controls={menuId}
        onClick={toggle}
        className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
      >
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-blue-600">
            tune
          </span>
          {triggerLabel}
        </span>
        <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
          expand_more
        </span>
      </button>

      {visible && (
        <div
          id={menuId}
          role="menu"
          aria-label={triggerLabel}
          className={
            exiting
              ? 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-out rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
              : 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-in rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
          }
        >
          <div className="space-y-0.5">
            {DEFAULT_ACTIONS.slice(0, 3).map((action) => (
              <button
                key={action.id}
                type="button"
                role="menuitem"
                onClick={() => handleAction(action.id)}
                className="group flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
              >
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[16px] text-slate-500 group-hover:text-blue-600"
                  >
                    {action.icon}
                  </span>
                  {action.label}
                </span>
                <kbd className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-500">
                  {action.shortcut}
                </kbd>
              </button>
            ))}
          </div>
          <div className="my-1 border-t border-slate-200" />
          <button
            type="button"
            role="menuitem"
            onClick={() => handleAction('delete')}
            className="group flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-rose-600 transition-colors hover:bg-rose-50"
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
