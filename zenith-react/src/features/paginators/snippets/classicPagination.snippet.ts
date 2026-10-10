export const CLASSIC_PAGINATION_HTML = `<nav class="flex flex-wrap items-center justify-center gap-2" aria-label="Paginacion clasica">
  <button class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg">
    <span class="material-symbols-outlined text-base">chevron_left</span><span>Anterior</span>
  </button>
  <div class="flex items-center gap-1">
    <button class="w-9 h-9 rounded-lg text-xs text-slate-600 hover:bg-slate-100">1</button>
    <button class="w-9 h-9 rounded-lg text-xs font-semibold bg-blue-600 text-white">2</button>
    <button class="w-9 h-9 rounded-lg text-xs text-slate-600 hover:bg-slate-100">3</button>
    <button class="w-9 h-9 rounded-lg text-xs text-slate-600 hover:bg-slate-100">4</button>
    <span class="w-9 h-9 flex items-center justify-center font-mono text-xs text-slate-400">...</span>
    <button class="w-9 h-9 rounded-lg text-xs text-slate-600 hover:bg-slate-100">18</button>
    <button class="w-9 h-9 rounded-lg text-xs text-slate-600 hover:bg-slate-100">19</button>
  </div>
  <button class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg">
    <span>Siguiente</span><span class="material-symbols-outlined text-base">chevron_right</span>
  </button>
</nav>`;

export const CLASSIC_PAGINATION_TSX = `export const ClassicPagination = () => {
  const [page, setPage] = useState(2);
  const total = 19;
  const pages: (number | "ellipsis")[] = [1, 2, 3, 4, "ellipsis", 18, 19];
  return (
    <nav className="flex flex-wrap items-center justify-center gap-2" aria-label="Paginacion clasica">
      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-300 rounded-lg" onClick={() => setPage((v) => Math.max(1, v - 1))}>
        <span className="material-symbols-outlined text-base">chevron_left</span><span>Anterior</span>
      </button>
      <div className="flex items-center gap-1">
        {pages.map((p, i) => p === "ellipsis"
          ? <span key={i} className="w-9 h-9 flex items-center justify-center font-mono text-xs text-slate-400">...</span>
          : <button key={p} onClick={() => setPage(p)} className={p === page ? "w-9 h-9 rounded-lg text-xs font-semibold bg-blue-600 text-white" : "w-9 h-9 rounded-lg text-xs text-slate-600 hover:bg-slate-100"}>{p}</button>)}
      </div>
      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-300 rounded-lg" onClick={() => setPage((v) => Math.min(total, v + 1))}>
        <span>Siguiente</span><span className="material-symbols-outlined text-base">chevron_right</span>
      </button>
    </nav>
  );
};`;
