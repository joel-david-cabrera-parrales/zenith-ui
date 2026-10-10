export const BATCH_TABLE_FOOTER_HTML = `
<div class="flex flex-col lg:flex-row items-center justify-between gap-4 p-5 bg-white">
  <div class="flex items-center gap-3">
    <span class="px-2.5 py-1 rounded-md bg-blue-100/70 font-mono text-xs font-semibold text-blue-900"
      >3 seleccionados</span
    >
    <button class="px-2.5 py-1 text-xs text-rose-600">Eliminar</button>
    <button class="px-2.5 py-1 text-xs text-slate-600">Exportar</button>
  </div>
  <div class="flex items-center gap-4">
    <span class="text-sm text-slate-600">Filas 21-30 de 184</span>
    <div class="flex items-center gap-1">
      <button class="px-2 py-1 text-sm border border-slate-300 rounded">1</button>
      <button class="px-2 py-1 text-sm border border-slate-300 rounded">2</button>
      <button class="px-2 py-1 text-sm rounded bg-blue-600 text-white font-bold">3</button>
      <button class="px-2 py-1 text-sm border border-slate-300 rounded">4</button>
    </div>
  </div>
</div>
`;

export const BATCH_TABLE_FOOTER_TSX = `
export const BatchTableFooter = () => {
  const [page, setPage] = useState(3);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4].map(p => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={
            p === page
              ? 'px-2 py-1 text-sm rounded bg-blue-600 text-white font-bold'
              : 'px-2 py-1 text-sm border border-slate-300 rounded'
          }
        >
          {p}
        </button>
      ))}
    </div>
  );
};
`;
