import { useState } from 'react';

type PayState = 'pagada' | 'pendiente' | 'vencida';

interface Invoice {
  id: string;
  plan: string;
  customer: string;
  amount: number;
  date: string;
  state: PayState;
  method: string;
}

const ROWS: Invoice[] = [
  { id: 'INV-2025-184', plan: 'Scale · 20M eventos', customer: 'Acme Corp', amount: 489.0, date: '01 may 2025', state: 'pagada', method: 'Visa •• 4242' },
  { id: 'INV-2025-183', plan: 'Enterprise dedicado', customer: 'Globex', amount: 2490.0, date: '28 abr 2025', state: 'pendiente', method: 'SEPA •• 8901' },
  { id: 'INV-2025-182', plan: 'Scale · 8M eventos', customer: 'Initech', amount: 196.0, date: '21 abr 2025', state: 'pagada', method: 'Mastercard •• 1198' },
  { id: 'INV-2025-181', plan: 'Scale · 12M eventos', customer: 'Umbrella', amount: 294.0, date: '14 abr 2025', state: 'vencida', method: 'Visa •• 7710' },
  { id: 'INV-2025-180', plan: 'Tier gratuito', customer: 'Hooli', amount: 0.0, date: '07 abr 2025', state: 'pagada', method: '—' },
];

const stateClasses = (s: PayState) =>
  s === 'pagada'
    ? 'bg-emerald-100 text-emerald-700'
    : s === 'pendiente'
      ? 'bg-amber-100 text-amber-800'
      : 'bg-rose-100 text-rose-800';

export function BillingInvoicesTable() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 4;

  const filtered = ROWS.filter(
    (r) =>
      query.trim() === '' ||
      r.id.toLowerCase().includes(query.toLowerCase()) ||
      r.customer.toLowerCase().includes(query.toLowerCase()) ||
      r.plan.toLowerCase().includes(query.toLowerCase()),
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * pageSize, current * pageSize);
  const total = filtered.reduce((acc, r) => acc + r.amount, 0);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-200 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-900">FACTURACIÓN // SUSCRIPCIONES</h3>
          <p className="font-mono text-xs text-slate-500">
            {filtered.length} facturas · total <span className="font-semibold text-slate-900">€{total.toFixed(2)}</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-56">
            <span aria-hidden="true" className="material-symbols-outlined absolute top-2 left-2.5 text-base text-slate-400">
              search
            </span>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Buscar factura o cliente..."
              aria-label="Buscar factura"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 py-1.5 pr-3 pl-8 text-sm outline-none placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <button type="button" className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-50">
            <span aria-hidden="true" className="material-symbols-outlined text-base text-slate-500">file_download</span>
            Exportar CSV
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 font-mono text-[11px] tracking-wider text-slate-500 uppercase">
              <th className="px-4 py-3 font-semibold sm:pl-5">ID Factura</th>
              <th className="px-4 py-3 font-semibold">Plan / Concepto</th>
              <th className="px-4 py-3 text-right font-semibold">Monto</th>
              <th className="hidden px-4 py-3 font-semibold md:table-cell">Emisión</th>
              <th className="px-4 py-3 font-semibold">Estado</th>
              <th className="hidden px-4 py-3 font-semibold lg:table-cell">Método</th>
              <th className="px-4 py-3 text-right font-semibold sm:pr-5">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {visible.map((row) => (
              <tr key={row.id} className="transition-colors hover:bg-slate-50">
                <td className="px-4 py-3 font-mono text-xs font-semibold text-blue-700 sm:pl-5">{row.id}</td>
                <td className="px-4 py-3">
                  <p className="text-xs font-semibold text-slate-900">{row.plan}</p>
                  <p className="font-mono text-[11px] text-slate-500">{row.customer}</p>
                </td>
                <td className="px-4 py-3 text-right font-mono text-xs font-semibold text-slate-900">
                  {row.amount === 0 ? '€0.00' : `€${row.amount.toFixed(2)}`}
                </td>
                <td className="hidden px-4 py-3 font-mono text-xs text-slate-500 md:table-cell">{row.date}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${stateClasses(row.state)}`}>
                    {row.state}
                  </span>
                </td>
                <td className="hidden px-4 py-3 font-mono text-xs text-slate-500 lg:table-cell">{row.method}</td>
                <td className="px-4 py-3 text-right sm:pr-5">
                  <div className="inline-flex items-center gap-1">
                    <button type="button" title="Descargar PDF" className="rounded-lg border border-slate-200 p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900">
                      <span aria-hidden="true" className="material-symbols-outlined text-base">picture_as_pdf</span>
                    </button>
                    <button type="button" title="Ver detalle" className="rounded-lg border border-slate-200 p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900">
                      <span aria-hidden="true" className="material-symbols-outlined text-base">visibility</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-sm text-slate-500">
                  Sin facturas para “{query}”.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 bg-slate-50/60 px-4 py-3 sm:flex-row sm:px-5">
        <p className="font-mono text-xs text-slate-500">pág. {current}/{totalPages}</p>
        <div className="flex items-center gap-1">
          <button type="button" disabled={current === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="rounded-lg border border-slate-300 bg-white p-1.5 text-slate-500 hover:bg-slate-100 disabled:opacity-40">
            <span aria-hidden="true" className="material-symbols-outlined text-base">chevron_left</span>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button key={p} type="button" onClick={() => setPage(p)} className={p === current ? 'h-8 w-8 rounded-lg bg-blue-600 text-xs font-bold text-white' : 'h-8 w-8 rounded-lg text-xs text-slate-600 hover:bg-white'}>
              {p}
            </button>
          ))}
          <button type="button" disabled={current === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="rounded-lg border border-slate-300 bg-white p-1.5 text-slate-500 hover:bg-slate-100 disabled:opacity-40">
            <span aria-hidden="true" className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
