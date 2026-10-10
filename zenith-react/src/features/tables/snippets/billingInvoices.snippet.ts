export const BILLING_INVOICES_HTML = `
<div class="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
  <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 border-b p-4">
    <div>
      <h3 class="text-sm font-bold">FACTURACIÓN // SUSCRIPCIONES</h3>
      <p class="font-mono text-xs">5 facturas · total €3469.00</p>
    </div>
    <div class="flex flex-col sm:flex-row gap-2">
      <input
        placeholder="Buscar factura o cliente..."
        class="w-full sm:w-56 rounded-lg border bg-slate-50 px-3 py-1.5 text-sm"
      /><button class="rounded-lg border px-3 py-1.5 text-xs">Exportar CSV</button>
    </div>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full min-w-[720px] text-left text-sm">
      <thead>
        <tr class="border-b bg-slate-50 font-mono text-[11px] uppercase text-slate-500">
          <th class="px-4 py-3">ID Factura</th>
          <th class="px-4 py-3">Plan</th>
          <th class="px-4 py-3 text-right">Monto</th>
          <th class="hidden md:table-cell px-4 py-3">Emisión</th>
          <th class="px-4 py-3">Estado</th>
          <th class="hidden lg:table-cell px-4 py-3">Método</th>
          <th class="px-4 py-3 text-right">Acciones</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr class="hover:bg-slate-50">
          <td class="px-4 py-3 font-mono text-xs text-blue-700">INV-2025-184</td>
          <td class="px-4 py-3 text-xs font-semibold">Scale · 20M eventos</td>
          <td class="px-4 py-3 text-right font-mono text-xs font-semibold">€489.00</td>
          <td class="hidden md:table-cell px-4 py-3 font-mono text-xs">01 may 2025</td>
          <td class="px-4 py-3">
            <span class="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase">pagada</span>
          </td>
          <td class="hidden lg:table-cell px-4 py-3 font-mono text-xs">Visa •• 4242</td>
          <td class="px-4 py-3 text-right">···</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="px-4 py-3 font-mono text-xs text-blue-700">INV-2025-181</td>
          <td class="px-4 py-3 text-xs font-semibold">Scale · 12M eventos</td>
          <td class="px-4 py-3 text-right font-mono text-xs font-semibold">€294.00</td>
          <td class="hidden md:table-cell px-4 py-3 font-mono text-xs">14 abr 2025</td>
          <td class="px-4 py-3">
            <span class="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-bold uppercase">vencida</span>
          </td>
          <td class="hidden lg:table-cell px-4 py-3 font-mono text-xs">Visa •• 7710</td>
          <td class="px-4 py-3 text-right">···</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`;

export const BILLING_INVOICES_TSX = `
import { useState } from 'react';

const ROWS = [
  { id: 'INV-2025-184', plan: 'Scale · 20M eventos', amount: 489.0, state: 'pagada' },
  { id: 'INV-2025-183', plan: 'Enterprise dedicado', amount: 2490.0, state: 'pendiente' },
  { id: 'INV-2025-182', plan: 'Scale · 8M eventos', amount: 196.0, state: 'pagada' },
  { id: 'INV-2025-181', plan: 'Scale · 12M eventos', amount: 294.0, state: 'vencida' },
];

export const BillingInvoices = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 3;

  const filtered = ROWS.filter(
    r =>
      query.trim() === '' ||
      r.id.toLowerCase().includes(query.toLowerCase()) ||
      r.plan.toLowerCase().includes(query.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);
  const total = filtered.reduce((acc, r) => acc + r.amount, 0);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 border-b p-4">
        <div>
          <h3 className="text-sm font-bold">FACTURACIÓN // SUSCRIPCIONES</h3>
          <p className="font-mono text-xs">
            {filtered.length} facturas · total €{total.toFixed(2)}
          </p>
        </div>
        <input
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Buscar factura o cliente..."
          className="w-full sm:w-56 rounded-lg border bg-slate-50 px-3 py-1.5 text-sm"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b bg-slate-50 font-mono text-[11px] uppercase text-slate-500">
              <th className="px-4 py-3">ID Factura</th>
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3 text-right">Monto</th>
              <th className="px-4 py-3">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {visible.map(row => (
              <tr key={row.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-mono text-xs text-blue-700">{row.id}</td>
                <td className="px-4 py-3 text-xs font-semibold">{row.plan}</td>
                <td className="px-4 py-3 text-right font-mono text-xs font-semibold">€{row.amount.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase">
                    {row.state}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t bg-slate-50/60 px-4 py-3">
        <span className="font-mono text-xs">
          pág. {page}/{totalPages}
        </span>
        <div className="flex gap-1">
          <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
            ‹
          </button>
          <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};
`;
