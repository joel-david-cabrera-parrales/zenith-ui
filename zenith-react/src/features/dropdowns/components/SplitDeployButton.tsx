import { useEffect, useId, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface SplitDeployButtonProps extends HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
  onAction?: (id: string) => void;
  onMain?: () => void;
}

const SPLIT_ACTIONS = [
  { id: 'staging', label: 'Desplegar en Staging', dot: 'bg-blue-600', badge: 'DEF' },
  { id: 'canary', label: 'Desplegar en Canary 10%', dot: 'bg-amber-500', badge: null },
  { id: 'production', label: 'Promover a Producción', dot: 'bg-emerald-500', badge: null },
] as const;

export const SplitDeployButton = ({
  defaultOpen = true,
  onAction,
  onMain,
  className = '',
  ...rest
}: SplitDeployButtonProps) => {
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
      <div className="inline-flex w-full rounded-lg shadow-sm">
        <button
          type="button"
          onClick={() => onMain?.()}
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
          aria-expanded={open && !exiting}
          aria-controls={menuId}
          aria-label="Ver opciones de despliegue"
          onClick={toggle}
          className="inline-flex items-center justify-center rounded-r-lg border-l border-blue-500 bg-blue-600 px-2.5 py-2 text-white transition-colors hover:bg-blue-700"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
            arrow_drop_down
          </span>
        </button>
      </div>

      {visible && (
        <div
          id={menuId}
          role="menu"
          aria-label="Opciones de despliegue"
          className={
            exiting
              ? 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-out space-y-0.5 rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
              : 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-in space-y-0.5 rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
          }
        >
          {SPLIT_ACTIONS.map((action) => (
            <button
              key={action.id}
              type="button"
              role="menuitem"
              onClick={() => handleAction(action.id)}
              className="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className={`h-2 w-2 rounded-full ${action.dot}`} />
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
            onClick={() => handleAction('schedule')}
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
