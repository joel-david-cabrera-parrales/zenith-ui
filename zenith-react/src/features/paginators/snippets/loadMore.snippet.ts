export const LOAD_MORE_HTML = `<div class="space-y-2 mb-6">
  <div class="flex justify-between font-mono text-xs"><span>Mostrando 48 de 250 elementos cargados</span><span class="font-semibold text-blue-600">19.2%</span></div>
  <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden"><div class="bg-blue-600 h-full rounded-full" style="width: 19.2%;"></div></div>
</div>
<button class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 text-blue-600 border border-slate-300"><span>Cargar Mas Registros</span><span class="font-mono text-xs bg-blue-600/10 px-1.5 py-0.5 rounded">+25</span></button>`;

export const LOAD_MORE_TSX = `export const LoadMore = () => {
  const [loaded, setLoaded] = useState(48);
  const total = 250;
  const percent = (loaded / total) * 100;
  return (
    <div>
      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
        <div className="h-full bg-blue-600 rounded-full" style={{ width: \`\${percent}%\` }} />
      </div>
      <button onClick={() => setLoaded((v) => Math.min(total, v + 25))} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 text-blue-600 border border-slate-300">
        Cargar Mas Registros
      </button>
      <p className="font-mono text-xs">Mostrando {loaded} de {total} ({percent.toFixed(1)}%)</p>
    </div>
  );
};`;
