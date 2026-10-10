export const AUDIT_LOG_TABLE_HTML = `
<div class="border rounded-xl overflow-hidden bg-white">
  <div class="p-5 border-b flex items-center justify-between">
    <h3 class="text-sm font-bold">REGISTRO DE DESPLIEGUES // CLUSTER PROD-EU-1</h3>
    <input
      class="pl-8 pr-3 py-1 bg-slate-100 border border-slate-300 rounded-lg font-mono text-sm"
      placeholder="Filtrar eventos..."
      type="text"
    />
  </div>
  <table class="w-full text-left">
    <thead>
      <tr class="bg-slate-100/70 font-mono text-xs text-slate-500">
        <th class="py-3 px-4">EVENT_ID</th>
        <th class="py-3 px-4">SERVICIO</th>
        <th class="py-3 px-4">ESTADO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="py-3 px-4 font-mono text-blue-600">#EV-98241</td>
        <td class="py-3 px-4">auth-microservice:v2.4.1</td>
        <td class="py-3 px-4">Completado</td>
      </tr>
    </tbody>
  </table>
  <div class="p-5 bg-slate-100/60 border-t flex items-center justify-between">
    <span class="text-sm">Mostrando <span class="font-mono text-blue-600">1 - 5</span> de 1,480 registros</span>
  </div>
</div>
`;

export const AUDIT_LOG_TABLE_TSX = `
export const AuditLogTable = () => {
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(5);
  const total = 1480;
  const totalPages = Math.ceil(total / rows);
  return (
    <div className="border rounded-xl overflow-hidden bg-white">
      <table className="w-full text-left">
        <tbody>
          <tr>
            <td className="py-3 px-4 font-mono text-blue-600">#EV-98241</td>
          </tr>
        </tbody>
      </table>
      <div className="p-5 flex items-center justify-between">
        <span>
          Pagina {page} / {totalPages}
        </span>
        <button onClick={() => setPage(v => Math.min(totalPages, v + 1))}>Siguiente</button>
        <select value={rows} onChange={e => setRows(Number(e.target.value))}>
          {[5, 10, 25].map(o => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
`;
