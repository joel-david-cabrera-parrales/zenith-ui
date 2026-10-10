export const COMPACT_PAGINATION_HTML = `<nav class="flex items-center justify-center" aria-label="Paginacion compacta">
  <div class="inline-flex items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-full">
    <button class="w-8 h-8 rounded-full text-slate-600 hover:bg-white" aria-label="Pagina anterior"><span class="material-symbols-outlined text-sm">arrow_back</span></button>
    <button class="w-8 h-8 rounded-full text-xs text-slate-600 hover:bg-white">1</button>
    <button class="w-8 h-8 rounded-full text-xs font-bold bg-blue-600 text-white">2</button>
    <button class="w-8 h-8 rounded-full text-xs text-slate-600 hover:bg-white">3</button>
    <span class="w-5 text-center font-mono text-xs text-slate-400">·</span>
    <button class="w-8 h-8 rounded-full text-xs text-slate-600 hover:bg-white">12</button>
    <button class="w-8 h-8 rounded-full text-slate-600 hover:bg-white" aria-label="Pagina siguiente"><span class="material-symbols-outlined text-sm">arrow_forward</span></button>
  </div>
</nav>`;

export const COMPACT_PAGINATION_TSX = `export const CompactPagination = () => {
  const [page, setPage] = useState(2);
  const total = 12;
  return (
    <nav className="flex items-center justify-center" aria-label="Paginacion compacta">
      <div className="inline-flex items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-full">
        <button className="w-8 h-8 rounded-full text-slate-600 hover:bg-white" aria-label="Pagina anterior" onClick={() => setPage((v) => Math.max(1, v - 1))}>
          <span className="material-symbols-outlined text-sm">arrow_back</span>
        </button>
        {[1, 2, 3].map((p) => (
          <button key={p} onClick={() => setPage(p)} className={p === page ? "w-8 h-8 rounded-full text-xs font-bold bg-blue-600 text-white" : "w-8 h-8 rounded-full text-xs text-slate-600 hover:bg-white"}>{p}</button>
        ))}
        <span className="w-5 text-center font-mono text-xs text-slate-400">·</span>
        <button onClick={() => setPage(total)} className="w-8 h-8 rounded-full text-xs text-slate-600 hover:bg-white">{total}</button>
        <button className="w-8 h-8 rounded-full text-slate-600 hover:bg-white" aria-label="Pagina siguiente" onClick={() => setPage((v) => Math.min(total, v + 1))}>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </nav>
  );
};`;
