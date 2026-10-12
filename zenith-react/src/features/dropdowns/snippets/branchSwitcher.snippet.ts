export const BRANCH_SWITCHER_HTML = `
<div class="relative w-full">
  <button
    type="button"
    aria-haspopup="menu"
    aria-expanded="true"
    class="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50"
  >
    <span class="flex items-center gap-2">
      <span class="material-symbols-outlined text-[18px] text-blue-600">fork_right</span>
      <span class="font-mono font-bold">main</span>
      <span class="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-500">e4b7c19</span>
    </span>
    <span class="material-symbols-outlined text-[16px] text-slate-500">expand_more</span>
  </button>
  <div role="menu" aria-label="Selector de rama y workspace" class="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
    <div class="relative">
      <span class="material-symbols-outlined absolute top-2 left-2.5 text-[16px] text-slate-500">search</span>
      <input type="text" placeholder="Filtrar ramas o tags..." class="w-full rounded-lg border border-slate-300 bg-white py-1.5 pr-3 pl-8 text-sm text-slate-700" />
    </div>
    <div class="flex items-center border-b border-slate-200 text-[11px] font-semibold uppercase tracking-wide">
      <button type="button" class="border-b-2 border-blue-600 px-3 pb-1.5 font-bold text-blue-600">Branches (12)</button>
      <button type="button" class="px-3 pb-1.5 text-slate-500">Tags (48)</button>
    </div>
    <div class="space-y-1">
      <button type="button" role="menuitemradio" aria-checked="true" class="flex w-full items-center justify-between rounded-lg border border-blue-200 bg-blue-50 p-2">
        <span>
          <span class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px] text-blue-600">check</span>
            <span class="font-mono text-sm font-bold text-blue-700">main</span>
            <span class="rounded bg-blue-600 px-1 text-[10px] font-bold text-white">DEFAULT</span>
          </span>
          <span class="block pl-5 font-mono text-xs text-slate-500">Updated 10m ago by @alex</span>
        </span>
        <span class="material-symbols-outlined text-[16px] text-slate-500">lock</span>
      </button>
      <button type="button" role="menuitemradio" aria-checked="false" class="flex w-full items-center justify-between rounded-lg border border-transparent p-2 hover:bg-slate-100">
        <span>
          <span class="flex items-center gap-1.5">
            <span class="w-4"></span>
            <span class="font-mono text-sm font-medium text-slate-700">feat/dropdown-popover-matrix</span>
          </span>
          <span class="block pl-5 font-mono text-xs text-slate-500">Updated 1h ago by @carla_ui</span>
        </span>
        <span class="font-mono text-xs text-slate-500">2 ahead</span>
      </button>
      <button type="button" role="menuitemradio" aria-checked="false" class="flex w-full items-center justify-between rounded-lg border border-transparent p-2 hover:bg-slate-100">
        <span>
          <span class="flex items-center gap-1.5">
            <span class="w-4"></span>
            <span class="font-mono text-sm font-medium text-slate-700">fix/zindex-elevation-stack</span>
          </span>
          <span class="block pl-5 font-mono text-xs text-slate-500">Updated 5h ago by @diego_ops</span>
        </span>
        <span class="font-mono text-xs text-slate-500">1 behind</span>
      </button>
    </div>
    <div class="border-t border-slate-200 pt-2">
      <button type="button" role="menuitem" class="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 bg-slate-50 py-1.5 text-sm font-semibold text-blue-600">
        <span class="material-symbols-outlined text-[16px]">add_circle</span>
        Crear Nueva Rama desde Main
      </button>
    </div>
  </div>
</div>
`;

export const BRANCH_SWITCHER_TSX = `
import { useEffect, useRef, useState } from 'react';

const BRANCHES = [
  { id: 'main', name: 'main', meta: 'Updated 10m ago by @alex', status: 'lock', isDefault: true },
  { id: 'feat-dropdown', name: 'feat/dropdown-popover-matrix', meta: 'Updated 1h ago by @carla_ui', status: '2 ahead', isDefault: false },
  { id: 'fix-zindex', name: 'fix/zindex-elevation-stack', meta: 'Updated 5h ago by @diego_ops', status: '1 behind', isDefault: false },
];

export const BranchSwitcher = () => {
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState<'branches' | 'tags'>('branches');
  const [selectedId, setSelectedId] = useState('main');
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

  const handleSelect = (id: string, name: string) => {
    setSelectedId(id);
    window.alert(\`Presionaste: Rama \${name}\`);
  };

  const filtered = BRANCHES.filter((branch) =>
    branch.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div ref={rootRef} className="relative w-full">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50"
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
      {open && (
        <div
          role="menu"
          aria-label="Selector de rama y workspace"
          className="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]"
        >
          <div className="relative">
            <span aria-hidden="true" className="material-symbols-outlined absolute top-2 left-2.5 text-[16px] text-slate-500">
              search
            </span>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filtrar ramas o tags..."
              className="w-full rounded-lg border border-slate-300 bg-white py-1.5 pr-3 pl-8 text-sm text-slate-700 focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex items-center border-b border-slate-200 text-[11px] font-semibold uppercase tracking-wide">
            <button
              type="button"
              onClick={() => setTab('branches')}
              className={tab === 'branches' ? 'border-b-2 border-blue-600 px-3 pb-1.5 font-bold text-blue-600' : 'px-3 pb-1.5 text-slate-500'}
            >
              Branches (12)
            </button>
            <button
              type="button"
              onClick={() => setTab('tags')}
              className={tab === 'tags' ? 'border-b-2 border-blue-600 px-3 pb-1.5 font-bold text-blue-600' : 'px-3 pb-1.5 text-slate-500'}
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
                    onClick={() => handleSelect(branch.id, branch.name)}
                    className={selected ? 'flex w-full items-center justify-between rounded-lg border border-blue-200 bg-blue-50 p-2' : 'flex w-full items-center justify-between rounded-lg border border-transparent p-2 hover:bg-slate-100'}
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
                        <span className={selected ? 'font-mono text-sm font-bold text-blue-700' : 'font-mono text-sm font-medium text-slate-700'}>
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
              onClick={() => window.alert('Presionaste: Crear Nueva Rama desde Main')}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 bg-slate-50 py-1.5 text-sm font-semibold text-blue-600 hover:border-blue-600"
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
`;
