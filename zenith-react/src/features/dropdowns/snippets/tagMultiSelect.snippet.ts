export const TAG_MULTI_SELECT_HTML = `
<div class="relative w-full">
  <button
    type="button"
    aria-haspopup="dialog"
    aria-expanded="true"
    class="flex w-full flex-wrap items-center justify-between gap-1 rounded-lg border border-slate-300 bg-white p-2 shadow-sm hover:bg-slate-50 transition-colors"
  >
    <span class="flex flex-wrap items-center gap-1">
      <span class="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-900">
        production
        <span class="material-symbols-outlined text-[12px] cursor-pointer">close</span>
      </span>
      <span class="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-900">
        security-core
        <span class="material-symbols-outlined text-[12px] cursor-pointer">close</span>
      </span>
      <span class="px-1 text-[10px] font-semibold text-slate-500">+1 más</span>
    </span>
    <span class="material-symbols-outlined text-[16px] text-slate-500">arrow_drop_down</span>
  </button>
  <div role="dialog" aria-label="Filtro de tags y entornos" class="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
    <div class="flex items-center justify-between border-b border-slate-200 pb-1.5">
      <span class="text-xs text-slate-500">3 seleccionados</span>
      <div class="flex items-center gap-2">
        <button type="button" class="text-[10px] font-bold uppercase tracking-wider text-blue-600 hover:underline">Seleccionar todos</button>
        <span class="text-slate-300">|</span>
        <button type="button" class="text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-rose-600">Limpiar</button>
      </div>
    </div>
    <div class="space-y-1">
      <label class="flex cursor-pointer items-center justify-between rounded-lg p-1.5 hover:bg-slate-100">
        <span class="flex items-center gap-2">
          <input type="checkbox" checked class="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
          <span class="text-sm text-slate-700">production-v2</span>
        </span>
        <span class="rounded bg-slate-100 px-1 font-mono text-[10px] text-slate-500">8 pods</span>
      </label>
      <label class="flex cursor-pointer items-center justify-between rounded-lg p-1.5 hover:bg-slate-100">
        <span class="flex items-center gap-2">
          <input type="checkbox" checked class="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
          <span class="text-sm text-slate-700">security-core</span>
        </span>
        <span class="rounded bg-slate-100 px-1 font-mono text-[10px] text-slate-500">12 pods</span>
      </label>
      <label class="flex cursor-pointer items-center justify-between rounded-lg p-1.5 hover:bg-slate-100">
        <span class="flex items-center gap-2">
          <input type="checkbox" checked class="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
          <span class="text-sm text-slate-700">billing-gateway</span>
        </span>
        <span class="rounded bg-slate-100 px-1 font-mono text-[10px] text-slate-500">4 pods</span>
      </label>
      <label class="flex cursor-pointer items-center justify-between rounded-lg p-1.5 hover:bg-slate-100">
        <span class="flex items-center gap-2">
          <input type="checkbox" class="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
          <span class="text-sm text-slate-700">sandbox-dev</span>
        </span>
        <span class="rounded bg-slate-100 px-1 font-mono text-[10px] text-slate-500">19 pods</span>
      </label>
    </div>
    <button type="button" class="w-full rounded-lg bg-slate-200 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-300 transition-colors">Aplicar Filtros Seleccionados</button>
  </div>
</div>
`;

export const TAG_MULTI_SELECT_TSX = `
import { useState } from 'react';

const TAG_OPTIONS = [
  { id: 'production-v2', pods: '8 pods' },
  { id: 'security-core', pods: '12 pods' },
  { id: 'billing-gateway', pods: '4 pods' },
  { id: 'sandbox-dev', pods: '19 pods' },
];

export const TagMultiSelect = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState<string[]>(['production-v2', 'security-core', 'billing-gateway']);

  const toggleTag = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((tag) => tag !== id) : [...prev, id]));
  };

  const handleApply = () => {
    window.alert(\`Presionaste: Aplicar filtros (\${selected.join(', ') || 'sin tags'})\`);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full flex-wrap items-center justify-between gap-1 rounded-lg border border-slate-300 bg-white p-2 shadow-sm transition-colors hover:bg-slate-50"
      >
        <span className="flex flex-wrap items-center gap-1">
          {selected.slice(0, 2).map((id) => (
            <span key={id} className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-900">
              {id.replace(/-v2$/, '')}
              <span
                role="button"
                tabIndex={0}
                aria-label={\`Quitar \${id}\`}
                onClick={(event) => {
                  event.stopPropagation();
                  toggleTag(id);
                }}
                className="material-symbols-outlined cursor-pointer text-[12px]"
              >
                close
              </span>
            </span>
          ))}
          {selected.length > 2 && (
            <span className="px-1 text-[10px] font-semibold text-slate-500">+{selected.length - 2} más</span>
          )}
          {selected.length === 0 && <span className="text-sm text-slate-500">Filtrar por tags…</span>}
        </span>
        <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
          arrow_drop_down
        </span>
      </button>
      {open && (
        <div
          role="dialog"
          aria-label="Filtro de tags y entornos"
          className="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-2.5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]"
        >
          <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
            <span className="text-xs text-slate-500">{selected.length} seleccionados</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelected(TAG_OPTIONS.map((option) => option.id))}
                className="text-[10px] font-bold uppercase tracking-wider text-blue-600 hover:underline"
              >
                Seleccionar todos
              </button>
              <span className="text-slate-300">|</span>
              <button
                type="button"
                onClick={() => setSelected([])}
                className="text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-rose-600"
              >
                Limpiar
              </button>
            </div>
          </div>
          <div className="space-y-1">
            {TAG_OPTIONS.map((option) => (
              <label key={option.id} className="flex cursor-pointer items-center justify-between rounded-lg p-1.5 hover:bg-slate-100">
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(option.id)}
                    onChange={() => toggleTag(option.id)}
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                  />
                  <span className="text-sm text-slate-700">{option.id}</span>
                </span>
                <span className="rounded bg-slate-100 px-1 font-mono text-[10px] text-slate-500">{option.pods}</span>
              </label>
            ))}
          </div>
          <button
            type="button"
            onClick={handleApply}
            className="w-full rounded-lg bg-slate-200 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 transition-colors hover:bg-slate-300"
          >
            Aplicar Filtros Seleccionados
          </button>
        </div>
      )}
    </div>
  );
};
`;
