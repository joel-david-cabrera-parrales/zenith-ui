export const STANDARD_TABLE_FOOTER_HTML = `
<div class="flex flex-col md:flex-row items-center justify-between gap-4 p-5">
  <div class="text-sm text-slate-600">1-10 de 240 elementos <span class="font-mono text-xs">Pagina 1 / 24</span></div>
  <div class="flex items-center gap-2">
    <span class="text-sm text-slate-600">Filas por pagina:</span>
    <div class="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-white">
      <button class="px-2.5 py-1 font-mono text-xs bg-blue-600 text-white font-semibold">10</button>
      <button class="px-2.5 py-1 font-mono text-xs text-slate-600">25</button>
      <button class="px-2.5 py-1 font-mono text-xs text-slate-600">50</button>
    </div>
  </div>
  <div class="flex items-center gap-1.5">
    <button class="p-1.5 rounded-lg border border-slate-300" title="Primera pagina">
      <span class="material-symbols-outlined text-base">first_page</span>
    </button>
    <button class="p-1.5 rounded-lg border border-slate-300" title="Pagina anterior">
      <span class="material-symbols-outlined text-base">chevron_left</span>
    </button>
    <span class="px-2 font-mono text-sm font-semibold text-blue-600">1</span>
    <button class="p-1.5 rounded-lg border border-slate-300" title="Pagina siguiente">
      <span class="material-symbols-outlined text-base">chevron_right</span>
    </button>
    <button class="p-1.5 rounded-lg border border-slate-300" title="Ultima pagina">
      <span class="material-symbols-outlined text-base">last_page</span>
    </button>
  </div>
</div>
`;

export const STANDARD_TABLE_FOOTER_TSX = `
export const StandardTableFooter = () => {
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);
  const totalPages = Math.ceil(240 / rows);
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-5">
      <span className="text-sm text-slate-600">
        Pagina {page} / {totalPages}
      </span>
      <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden">
        {[10, 25, 50].map(o => (
          <button
            key={o}
            onClick={() => {
              setRows(o);
              setPage(1);
            }}
            className={
              o === rows
                ? 'px-2.5 py-1 font-mono text-xs bg-blue-600 text-white'
                : 'px-2.5 py-1 font-mono text-xs text-slate-600'
            }
          >
            {o}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className="p-1.5 rounded-lg border disabled:opacity-40"
        >
          <span className="material-symbols-outlined text-base">first_page</span>
        </button>
        <button
          onClick={() => setPage(v => Math.max(1, v - 1))}
          disabled={page === 1}
          className="p-1.5 rounded-lg border disabled:opacity-40"
        >
          <span className="material-symbols-outlined text-base">chevron_left</span>
        </button>
        <span className="px-2 font-mono text-sm font-semibold text-blue-600">{page}</span>
        <button onClick={() => setPage(v => Math.min(totalPages, v + 1))} className="p-1.5 rounded-lg border">
          <span className="material-symbols-outlined text-base">chevron_right</span>
        </button>
        <button onClick={() => setPage(totalPages)} className="p-1.5 rounded-lg border">
          <span className="material-symbols-outlined text-base">last_page</span>
        </button>
      </div>
    </div>
  );
};
`;
