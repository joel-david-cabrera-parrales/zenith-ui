import { useEffect, useId, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface BranchSwitcherProps extends HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
  onAction?: (id: string) => void;
}

type BranchTab = 'branches' | 'tags';

interface Branch {
  id: string;
  name: string;
  meta: string;
  status: string;
  isDefault: boolean;
}

const BRANCHES: Branch[] = [
  {
    id: 'main',
    name: 'main',
    meta: 'Updated 10m ago by @alex',
    status: 'lock',
    isDefault: true,
  },
  {
    id: 'feat-dropdown',
    name: 'feat/dropdown-popover-matrix',
    meta: 'Updated 1h ago by @carla_ui',
    status: '2 ahead',
    isDefault: false,
  },
  {
    id: 'fix-zindex',
    name: 'fix/zindex-elevation-stack',
    meta: 'Updated 5h ago by @diego_ops',
    status: '1 behind',
    isDefault: false,
  },
];

export const BranchSwitcher = ({
  defaultOpen = true,
  onAction,
  className = '',
  ...rest
}: BranchSwitcherProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [exiting, setExiting] = useState(false);
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState<BranchTab>('branches');
  const [selectedId, setSelectedId] = useState('main');
  const searchId = useId();
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

  const handleSelect = (id: string) => {
    setSelectedId(id);
    onAction?.(id);
  };

  const handleAction = (id: string) => {
    onAction?.(id);
    close();
  };

  const visible = open || exiting;
  const filtered = BRANCHES.filter((branch) =>
    branch.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div ref={rootRef} className={`relative w-full ${className}`} {...rest} onKeyDown={handleKeyDown}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open && !exiting}
        onClick={toggle}
        className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
      >
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-blue-600">
            fork_right
          </span>
          <span className="font-mono font-bold">main</span>
          <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-500">
            e4b7c19
          </span>
        </span>
        <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
          expand_more
        </span>
      </button>

      {visible && (
        <div
          role="menu"
          aria-label="Selector de rama y workspace"
          className={
            exiting
              ? 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-out space-y-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
              : 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-in space-y-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
          }
        >
          <div className="relative">
            <span
              aria-hidden="true"
              className="material-symbols-outlined absolute top-2 left-2.5 text-[16px] text-slate-500"
            >
              search
            </span>
            <label htmlFor={searchId} className="sr-only">
              Filtrar ramas o tags
            </label>
            <input
              id={searchId}
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filtrar ramas o tags..."
              className="w-full rounded-lg border border-slate-300 bg-white py-1.5 pr-3 pl-8 text-sm text-slate-700 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-slate-200 text-[11px] font-semibold tracking-wide uppercase">
            <button
              type="button"
              onClick={() => setTab('branches')}
              className={
                tab === 'branches'
                  ? 'border-b-2 border-blue-600 px-3 pb-1.5 font-bold text-blue-600'
                  : 'px-3 pb-1.5 text-slate-500 hover:text-slate-900'
              }
            >
              Branches (12)
            </button>
            <button
              type="button"
              onClick={() => setTab('tags')}
              className={
                tab === 'tags'
                  ? 'border-b-2 border-blue-600 px-3 pb-1.5 font-bold text-blue-600'
                  : 'px-3 pb-1.5 text-slate-500 hover:text-slate-900'
              }
            >
              Tags (48)
            </button>
          </div>

          {tab === 'branches' ? (
            <div className="space-y-1">
              {filtered.map((branch) => {
                const selected = selectedId === branch.id;
                return (
                  <button
                    key={branch.id}
                    type="button"
                    role="menuitemradio"
                    aria-checked={selected}
                    onClick={() => handleSelect(branch.id)}
                    className={
                      selected
                        ? 'flex w-full items-center justify-between rounded-lg border border-blue-200 bg-blue-50 p-2 transition-colors'
                        : 'flex w-full items-center justify-between rounded-lg border border-transparent p-2 transition-colors hover:bg-slate-100'
                    }
                  >
                    <span>
                      <span className="flex items-center gap-1.5">
                        {selected ? (
                          <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-blue-600">
                            check
                          </span>
                        ) : (
                          <span aria-hidden="true" className="w-4" />
                        )}
                        <span
                          className={
                            selected
                              ? 'font-mono text-sm font-bold text-blue-700'
                              : 'font-mono text-sm font-medium text-slate-700'
                          }
                        >
                          {branch.name}
                        </span>
                        {branch.isDefault && (
                          <span className="rounded bg-blue-600 px-1 text-[10px] font-bold text-white">
                            DEFAULT
                          </span>
                        )}
                      </span>
                      <span className="block pl-5 font-mono text-xs text-slate-500">{branch.meta}</span>
                    </span>
                    {branch.status === 'lock' ? (
                      <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
                        lock
                      </span>
                    ) : (
                      <span className="font-mono text-xs text-slate-500">{branch.status}</span>
                    )}
                  </button>
                );
              })}
              {filtered.length === 0 && (
                <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500">
                  Sin coincidencias para “{query}”.
                </p>
              )}
            </div>
          ) : (
            <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500">
              48 tags disponibles — usa el filtro para buscar por nombre.
            </p>
          )}

          <div className="border-t border-slate-200 pt-2">
            <button
              type="button"
              role="menuitem"
              onClick={() => handleAction('create-branch')}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 bg-slate-50 py-1.5 text-sm font-semibold text-blue-600 transition-colors hover:border-blue-600"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                add_circle
              </span>
              Crear Nueva Rama desde Main
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
