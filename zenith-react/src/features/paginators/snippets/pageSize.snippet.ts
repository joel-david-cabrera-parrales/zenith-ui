export const PAGE_SIZE_HTML = `
<div class="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-100/60 border border-slate-200 rounded-lg">
  <p class="text-sm text-slate-900">
    Mostrando <span class="font-mono font-semibold text-blue-600">1 - 25</span> de
    <span class="font-mono font-semibold">1,248</span> resultados
  </p>
  <div class="flex items-center gap-3">
    <label class="text-sm text-slate-600">Mostrar:</label>
    <select class="bg-white border border-slate-300 rounded-lg py-1.5 pl-3 pr-8 font-mono text-sm"
      ><option>10 por pagina</option
      ><option selected>25 por pagina</option
      ><option>50 por pagina</option
      ><option>100 por pagina</option></select
    >
  </div>
</div>
`;

export const PAGE_SIZE_TSX = `
export const PageSize = () => {
  const [size, setSize] = useState(25);
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-100/60 border border-slate-200 rounded-lg">
      <p className="text-sm">
        Mostrando <span className="font-mono font-semibold text-blue-600">1 - {size}</span> de 1,248 resultados
      </p>
      <select
        className="bg-white border border-slate-300 rounded-lg py-1.5 pl-3 pr-8 font-mono text-sm"
        value={size}
        onChange={e => setSize(Number(e.target.value))}
      >
        {[10, 25, 50, 100].map(o => (
          <option key={o} value={o}>
            {o} por pagina
          </option>
        ))}
      </select>
    </div>
  );
};
`;
