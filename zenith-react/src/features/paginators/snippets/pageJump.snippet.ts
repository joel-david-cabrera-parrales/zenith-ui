export const PAGE_JUMP_HTML = `<div class="flex flex-wrap items-center justify-center gap-3">
  <span class="text-sm text-slate-600">Pagina <span class="font-mono font-semibold text-slate-900">4</span> de <span class="font-mono">128</span></span>
  <input class="w-20 pl-3 pr-2 py-1.5 bg-white border border-slate-300 rounded-lg font-mono text-sm" type="number" min="1" max="128" value="4" aria-label="Numero de pagina a saltar" />
  <button class="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium">Ir</button>
</div>`;

export const PAGE_JUMP_TSX = `export const PageJump = () => {
  const [page, setPage] = useState(4);
  const [draft, setDraft] = useState("4");
  const total = 128;
  const jump = () => {
    const t = Number(draft);
    if (Number.isInteger(t) && t >= 1 && t <= total) setPage(t);
    else setDraft(String(page));
  };
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <span className="text-sm text-slate-600">Pagina <span className="font-mono font-semibold text-slate-900">{page}</span> de <span className="font-mono">128</span></span>
      <input className="w-20 pl-3 pr-2 py-1.5 bg-white border border-slate-300 rounded-lg font-mono text-sm" type="number" value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") jump(); }} />
      <button onClick={jump} className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium">Ir</button>
    </div>
  );
};`;
