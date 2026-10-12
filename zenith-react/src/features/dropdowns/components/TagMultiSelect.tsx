import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface TagOption {
  id: string;
  pods: string;
}

export interface TagMultiSelectProps extends HTMLAttributes<HTMLDivElement> {
  defaultSelected?: string[];
  defaultOpen?: boolean;
  onApply?: (ids: string[]) => void;
}

const TAG_OPTIONS: TagOption[] = [
  { id: 'production-v2', pods: '8 pods' },
  { id: 'security-core', pods: '12 pods' },
  { id: 'billing-gateway', pods: '4 pods' },
  { id: 'sandbox-dev', pods: '19 pods' },
];

const shortLabel = (id: string) => id.replace(/-v2$/, '');

export const TagMultiSelect = ({
  defaultSelected = ['production-v2', 'security-core', 'billing-gateway'],
  defaultOpen = true,
  onApply,
  className = '',
  ...rest
}: TagMultiSelectProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [exiting, setExiting] = useState(false);
  const [selected, setSelected] = useState<string[]>(defaultSelected);
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

  const toggleTag = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((tag) => tag !== id) : [...prev, id]));
  };

  const selectAll = () => {
    setSelected(TAG_OPTIONS.map((option) => option.id));
  };

  const clearAll = () => {
    setSelected([]);
  };

  const handleApply = () => {
    onApply?.(selected);
    close();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  const visible = open || exiting;
  const visibleChips = selected.slice(0, 2);
  const extraCount = selected.length - visibleChips.length;

  return (
    <div ref={rootRef} className={`relative w-full ${className}`} {...rest} onKeyDown={handleKeyDown}>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open && !exiting}
        onClick={toggle}
        className="flex w-full flex-wrap items-center justify-between gap-1 rounded-lg border border-slate-300 bg-white p-2 shadow-sm transition-colors hover:bg-slate-50"
      >
        <span className="flex flex-wrap items-center gap-1">
          {visibleChips.map((id) => (
            <span
              key={id}
              className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-900"
            >
              {shortLabel(id)}
              <span
                role="button"
                tabIndex={0}
                aria-label={`Quitar ${shortLabel(id)}`}
                onClick={(event) => {
                  event.stopPropagation();
                  toggleTag(id);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    event.stopPropagation();
                    toggleTag(id);
                  }
                }}
                className="material-symbols-outlined cursor-pointer text-[12px]"
              >
                close
              </span>
            </span>
          ))}
          {extraCount > 0 && (
            <span className="px-1 text-[10px] font-semibold text-slate-500">+{extraCount} más</span>
          )}
          {selected.length === 0 && <span className="text-sm text-slate-500">Filtrar por tags…</span>}
        </span>
        <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
          arrow_drop_down
        </span>
      </button>

      {visible && (
        <div
          role="dialog"
          aria-label="Filtro de tags y entornos"
          className={
            exiting
              ? 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-out space-y-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
              : 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-in space-y-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
          }
        >
          <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
            <span className="text-xs text-slate-500">{selected.length} seleccionados</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={selectAll}
                className="text-[10px] font-bold tracking-wider text-blue-600 uppercase hover:underline"
              >
                Seleccionar todos
              </button>
              <span className="text-slate-300">|</span>
              <button
                type="button"
                onClick={clearAll}
                className="text-[10px] font-bold tracking-wider text-slate-500 uppercase hover:text-rose-600"
              >
                Limpiar
              </button>
            </div>
          </div>

          <div className="space-y-1">
            {TAG_OPTIONS.map((option) => (
              <label
                key={option.id}
                className="flex cursor-pointer items-center justify-between rounded-lg p-1.5 hover:bg-slate-100"
              >
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(option.id)}
                    onChange={() => toggleTag(option.id)}
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                  />
                  <span className="text-sm text-slate-700">{option.id}</span>
                </span>
                <span className="rounded bg-slate-100 px-1 font-mono text-[10px] text-slate-500">
                  {option.pods}
                </span>
              </label>
            ))}
          </div>

          <button
            type="button"
            onClick={handleApply}
            className="w-full rounded-lg bg-slate-200 py-1.5 text-[10px] font-bold tracking-wider text-slate-700 uppercase transition-colors hover:bg-slate-300"
          >
            Aplicar Filtros Seleccionados
          </button>
        </div>
      )}
    </div>
  );
};
