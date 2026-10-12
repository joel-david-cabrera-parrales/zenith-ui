import { useEffect, useId, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface KebabAction {
  id: string;
  label: string;
  icon: string;
  tone?: 'default' | 'danger';
}

export interface KebabMenuProps extends HTMLAttributes<HTMLDivElement> {
  resourceId?: string;
  defaultOpen?: boolean;
  onAction?: (id: string) => void;
}

const KEBAB_ACTIONS: KebabAction[] = [
  { id: 'telemetry', label: 'Ver telemetría viva', icon: 'open_in_new' },
  { id: 'restart', label: 'Reiniciar pod k8s', icon: 'replay' },
  { id: 'rotate', label: 'Rotar API secret', icon: 'key' },
  { id: 'terminate', label: 'Forzar terminación', icon: 'stop_circle', tone: 'danger' },
];

export const KebabMenu = ({
  resourceId = 'svc-auth-eu-west',
  defaultOpen = true,
  onAction,
  className = '',
  ...rest
}: KebabMenuProps) => {
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
      <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-100 p-2">
        <span className="font-mono text-xs text-slate-500">id: {resourceId}</span>
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open && !exiting}
          aria-controls={menuId}
          aria-label="Abrir menú contextual"
          onClick={toggle}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition-colors hover:bg-slate-50"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
            more_vert
          </span>
        </button>
      </div>

      {visible && (
        <div
          id={menuId}
          role="menu"
          aria-label="Menú contextual kebab"
          className={
            exiting
              ? 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-out space-y-0.5 rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
              : 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-in space-y-0.5 rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
          }
        >
          <div className="space-y-0.5">
            {KEBAB_ACTIONS.slice(0, 3).map((action) => (
              <button
                key={action.id}
                type="button"
                role="menuitem"
                onClick={() => handleAction(action.id)}
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
            onClick={() => handleAction('terminate')}
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
