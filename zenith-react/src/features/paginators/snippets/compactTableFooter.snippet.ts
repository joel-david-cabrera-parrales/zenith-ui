export const COMPACT_TABLE_FOOTER_HTML = `<div class="flex flex-wrap items-center justify-between gap-3 p-4">
  <div class="text-sm text-slate-600">Pagina <span class="font-mono font-semibold">3</span> de <span class="font-mono">8</span></div>
  <div class="inline-flex rounded-lg border border-slate-300 bg-slate-100 p-0.5">
    <button class="px-3 py-1 text-sm text-slate-600">Anterior</button>
    <button class="px-3 py-1 text-sm text-slate-600">Siguiente</button>
  </div>
</div>`;

export const COMPACT_TABLE_FOOTER_TSX = `export const CompactTableFooter = () => {
  const [page, setPage] = useState(3);
  const total = 8;
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-4">
      <span className="text-sm text-slate-600">Pagina {page} de {total}</span>
      <div className="inline-flex rounded-lg border border-slate-300 bg-slate-100 p-0.5">
        <button onClick={() => setPage((v) => Math.max(1, v - 1))} className="px-3 py-1 text-sm">Anterior</button>
        <button onClick={() => setPage((v) => Math.min(total, v + 1))} className="px-3 py-1 text-sm">Siguiente</button>
      </div>
    </div>
  );
};`;
