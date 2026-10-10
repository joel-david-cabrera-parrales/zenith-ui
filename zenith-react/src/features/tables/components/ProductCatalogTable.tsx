import { useState } from 'react';

interface Product {
  sku: string;
  name: string;
  category: string;
  seed: string;
  channels: string[];
  price: number;
  margin: number;
}

const ROWS: Product[] = [
  { sku: 'SKU-88410', name: 'Aurora Botanic Serum 50ml', category: 'Cosmética premium', seed: 'zenith-sku1', channels: ['Shopify', 'Amazon'], price: 48.9, margin: 62 },
  { sku: 'SKU-88302', name: 'Stone Paper Notebook A5', category: 'Papelería FSC', seed: 'zenith-sku2', channels: ['Shopify'], price: 18.5, margin: 54 },
  { sku: 'SKU-88277', name: 'Edge Sensor Kit v3', category: 'Hardware IoT', seed: 'zenith-sku3', channels: ['Amazon', 'Retail'], price: 129.0, margin: 41 },
  { sku: 'SKU-88190', name: 'Linen Studio Apron', category: 'Textil', seed: 'zenith-sku4', channels: ['Shopify', 'Etsy'], price: 36.0, margin: 58 },
  { sku: 'SKU-88155', name: 'Cinematic LUT Pack Pro', category: 'Digital', seed: 'zenith-sku5', channels: ['Gumroad'], price: 59.0, margin: 91 },
  { sku: 'SKU-88012', name: 'Ceramic Pour-Over Set', category: 'Hogar', seed: 'zenith-sku6', channels: ['Shopify', 'Amazon', 'Retail'], price: 74.9, margin: 47 },
];

export function ProductCatalogTable() {
  const [query, setQuery] = useState('');
  const [stock, setStock] = useState<Record<string, number>>({
    'SKU-88410': 142,
    'SKU-88302': 8,
    'SKU-88277': 0,
    'SKU-88190': 64,
    'SKU-88155': 999,
    'SKU-88012': 23,
  });
  const [published, setPublished] = useState<Record<string, boolean>>({
    'SKU-88410': true,
    'SKU-88302': true,
    'SKU-88277': false,
    'SKU-88190': true,
    'SKU-88155': true,
    'SKU-88012': false,
  });

  const filtered = ROWS.filter(
    (r) =>
      query.trim() === '' ||
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.sku.toLowerCase().includes(query.toLowerCase()),
  );

  const bump = (sku: string, delta: number) => {
    setStock((s) => ({ ...s, [sku]: Math.max(0, (s[sku] ?? 0) + delta) }));
  };

  const stockBadge = (qty: number) =>
    qty === 0
      ? 'bg-rose-100 text-rose-800'
      : qty < 10
        ? 'bg-amber-100 text-amber-800'
        : 'bg-emerald-100 text-emerald-700';

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div>
          <h3 className="text-sm font-bold text-slate-900">CATÁLOGO // PRODUCTOS MULTICANAL</h3>
          <p className="font-mono text-xs text-slate-500">{filtered.length} SKUs · stock y publicación editables</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-56">
            <span aria-hidden="true" className="material-symbols-outlined absolute top-2 left-2.5 text-base text-slate-400">
              search
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar SKU o producto..."
              aria-label="Buscar producto"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 py-1.5 pr-3 pl-8 text-sm outline-none placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <button type="button" className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700">
            <span aria-hidden="true" className="material-symbols-outlined text-base">add</span>
            Nuevo SKU
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-100/70 font-mono text-[11px] tracking-wider text-slate-500 uppercase">
              <th className="px-4 py-3 font-semibold">SKU / Código</th>
              <th className="px-4 py-3 font-semibold">Producto</th>
              <th className="hidden px-4 py-3 font-semibold md:table-cell">Canales</th>
              <th className="px-4 py-3 font-semibold">Stock</th>
              <th className="hidden px-4 py-3 font-semibold lg:table-cell">Precio / Margen</th>
              <th className="px-4 py-3 font-semibold">Publicado</th>
              <th className="px-4 py-3 text-right font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filtered.map((row) => {
              const qty = stock[row.sku] ?? 0;
              const isPub = published[row.sku] ?? false;
              return (
                <tr key={row.sku} className="transition-colors hover:bg-slate-50">
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-blue-700">{row.sku}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <img src={`https://picsum.photos/seed/${row.seed}/80/80`} alt="" loading="lazy" className="h-9 w-9 shrink-0 rounded-lg border border-slate-200 object-cover" />
                      <div>
                        <p className="text-xs font-semibold text-slate-900">{row.name}</p>
                        <p className="font-mono text-[10px] text-slate-500">{row.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="hidden px-4 py-3 md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {row.channels.map((c) => (
                        <span key={c} className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-600">
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <button type="button" aria-label={`Quitar stock a ${row.sku}`} onClick={() => bump(row.sku, -1)} className="rounded border border-slate-300 px-1.5 py-0.5 text-slate-600 hover:bg-slate-100">
                        −
                      </button>
                      <span className={`min-w-14 rounded-full px-2 py-0.5 text-center font-mono text-[11px] font-bold ${stockBadge(qty)}`}>
                        {qty === 999 ? '∞' : qty}
                      </span>
                      <button type="button" aria-label={`Añadir stock a ${row.sku}`} onClick={() => bump(row.sku, 1)} className="rounded border border-slate-300 px-1.5 py-0.5 text-slate-600 hover:bg-slate-100">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="hidden px-4 py-3 lg:table-cell">
                    <p className="font-mono text-xs font-semibold text-slate-900">€{row.price.toFixed(2)}</p>
                    <p className="font-mono text-[10px] text-emerald-700">margen {row.margin}%</p>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={isPub}
                      aria-label={`Publicado ${row.sku}`}
                      onClick={() => setPublished((p) => ({ ...p, [row.sku]: !isPub }))}
                      className={`relative h-5 w-9 rounded-full transition-colors ${isPub ? 'bg-blue-600' : 'bg-slate-300'}`}
                    >
                      <span className="absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all" style={isPub ? { left: '18px' } : { left: '2px' }} />
                    </button>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex items-center gap-1">
                      <button type="button" title="Editar" className="rounded-lg border border-slate-200 p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900">
                        <span aria-hidden="true" className="material-symbols-outlined text-base">edit</span>
                      </button>
                      <button type="button" title="Vista previa" className="rounded-lg border border-slate-200 p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900">
                        <span aria-hidden="true" className="material-symbols-outlined text-base">visibility</span>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-sm text-slate-500">
                  Sin productos para “{query}”.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
