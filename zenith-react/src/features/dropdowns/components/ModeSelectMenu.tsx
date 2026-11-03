import { useEffect, useId, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface ModeOption {
  id: string;
  label: string;
  icon: string;
  badge?: string;
  disabled?: boolean;
}

export interface ModeSelectMenuProps extends HTMLAttributes<HTMLDivElement> {
  options?: ModeOption[];
  label?: string;
  defaultSelected?: string;
  selectedId?: string;
  defaultOpen?: boolean;
  palette?: 'blue' | 'sky';
  onAction?: (id: string) => void;
}

const MODE_OPTIONS: ModeOption[] = [
  { id: 'audit', label: 'Modo Auditoría Strict', icon: 'check', badge: 'Activo' },
  { id: 'readonly', label: 'Modo Solo Lectura', icon: 'visibility' },
  { id: 'turbo', label: 'Modo Turbo', icon: 'bolt' },
  { id: 'zerotrust', label: 'Zero-Trust', icon: 'lock', badge: 'PRO', disabled: true },
];

export const ModeSelectMenu = ({
  options = MODE_OPTIONS,
  label = 'Modo Operativo',
  defaultSelected = 'audit',
  selectedId: controlledSelectedId,
  defaultOpen = true,
  palette = 'blue',
  onAction,
  className = '',
  ...rest
}: ModeSelectMenuProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [exiting, setExiting] = useState(false);
  const [internalSelectedId, setInternalSelectedId] = useState(defaultSelected);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);

  const selectedId = controlledSelectedId ?? internalSelectedId;
  const selected = options.find((option) => option.id === selectedId) ?? options[0];
  const isSky = palette === 'sky';

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
    if (controlledSelectedId === undefined) setInternalSelectedId(id);
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
        className={`flex w-full items-center justify-between rounded-lg border bg-white px-3 py-2 text-left text-sm font-medium shadow-sm outline-none focus-visible:ring-2 ${isSky ? 'border-sky-600 text-sky-800 focus-visible:ring-sky-600/20' : 'border-blue-600 text-blue-700 ring-2 ring-blue-600/20 focus-visible:ring-blue-600/20'}`}
      >
        {label}: {selected?.label.replace(/^Modo\s+/, '') ?? 'Seleccionar'}
        <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
          {open && !exiting ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
        </span>
      </button>

      {visible && (
        <div
          id={menuId}
          role="menu"
          aria-label={label}
          className={
            exiting
              ? 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-out space-y-1 rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
              : 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-in space-y-1 rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
          }
        >
          {options.map((option) => {
            if (option.disabled === true) {
              return (
                <div
                  key={option.id}
                  aria-disabled="true"
                  className="flex cursor-not-allowed items-center justify-between rounded-lg bg-slate-100/60 px-2.5 py-1.5 text-sm text-slate-400"
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                      {option.icon}
                    </span>
                    {option.label}
                  </span>
                  {option.badge !== undefined && (
                    <span className="rounded bg-slate-200 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">
                      {option.badge}
                    </span>
                  )}
                </div>
              );
            }
            const isSelected = option.id === selectedId;
            return (
              <button
                key={option.id}
                type="button"
                role="menuitem"
                aria-current={isSelected}
                onClick={() => handleAction(option.id)}
                className={
                  isSelected
                    ? `flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-semibold ${isSky ? 'bg-sky-100 text-sky-900' : 'bg-blue-100 text-blue-900'}`
                    : 'flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-100'
                }
              >
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={`material-symbols-outlined text-[16px] ${isSelected ? (isSky ? 'text-sky-700' : 'text-blue-700') : 'text-slate-500'}`}
                  >
                    {option.icon}
                  </span>
                  {option.label}
                </span>
                {isSelected && (
                  <span className={`text-[10px] font-bold tracking-wider uppercase ${isSky ? 'text-sky-700' : 'text-blue-700'}`}>Activo</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
