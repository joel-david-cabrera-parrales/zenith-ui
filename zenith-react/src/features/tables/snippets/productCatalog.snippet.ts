export const PRODUCT_CATALOG_HTML = `<div class="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b p-4"><div><h3 class="text-sm font-bold">CATÁLOGO // PRODUCTOS MULTICANAL</h3><p class="font-mono text-xs">6 SKUs · stock y publicación editables</p></div><input placeholder="Buscar SKU o producto..." class="w-full sm:w-56 rounded-lg border bg-slate-50 px-3 py-1.5 text-sm" /></div>
  <div class="overflow-x-auto">
    <table class="w-full min-w-[820px] text-left">
      <thead><tr class="border-b bg-slate-100/70 font-mono text-[11px] uppercase text-slate-500"><th class="px-4 py-3">SKU</th><th class="px-4 py-3">Producto</th><th class="hidden md:table-cell px-4 py-3">Canales</th><th class="px-4 py-3">Stock</th><th class="hidden lg:table-cell px-4 py-3">Precio</th><th class="px-4 py-3">Publicado</th><th class="px-4 py-3 text-right">Acciones</th></tr></thead>
      <tbody class="divide-y text-sm">
        <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-mono text-xs text-blue-700">SKU-88410</td><td class="px-4 py-3 text-xs font-semibold">Aurora Botanic Serum 50ml</td><td class="hidden md:table-cell px-4 py-3"><span class="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px]">Shopify</span> <span class="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px]">Amazon</span></td><td class="px-4 py-3"><span class="rounded-full bg-emerald-100 px-2 py-0.5 font-mono text-[11px] font-bold">142</span></td><td class="hidden lg:table-cell px-4 py-3 font-mono text-xs">€48.90</td><td class="px-4 py-3">ON</td><td class="px-4 py-3 text-right">···</td></tr>
        <tr class="hover:bg-slate-50"><td class="px-4 py-3 font-mono text-xs text-blue-700">SKU-88277</td><td class="px-4 py-3 text-xs font-semibold">Edge Sensor Kit v3</td><td class="hidden md:table-cell px-4 py-3"><span class="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px]">Amazon</span></td><td class="px-4 py-3"><span class="rounded-full bg-rose-100 px-2 py-0.5 font-mono text-[11px] font-bold">0</span></td><td class="hidden lg:table-cell px-4 py-3 font-mono text-xs">€129.00</td><td class="px-4 py-3">OFF</td><td class="px-4 py-3 text-right">···</td></tr>
      </tbody>
    </table>
  </div>
</div>`;

export const PRODUCT_CATALOG_TSX = `import { useState } from 'react';

const ROWS = [
  { sku: 'SKU-88410', name: 'Aurora Botanic Serum 50ml', price: '€48.90' },
  { sku: 'SKU-88277', name: 'Edge Sensor Kit v3', price: '€129.00' },
  { sku: 'SKU-88302', name: 'Stone Paper Notebook A5', price: '€18.50' },
];

export const ProductCatalog = () => {
  const [query, setQuery] = useState('');
  const [stock, setStock] = useState<Record<string, number>>({ 'SKU-88410': 142, 'SKU-88277': 0, 'SKU-88302': 8 });
  const [published, setPublished] = useState<Record<string, boolean>>({ 'SKU-88410': true, 'SKU-88277': false, 'SKU-88302': true });

  const filtered = ROWS.filter((r) => query.trim() === '' || r.name.toLowerCase().includes(query.toLowerCase()) || r.sku.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b p-4"><div><h3 className="text-sm font-bold">CATÁLOGO // PRODUCTOS MULTICANAL</h3><p className="font-mono text-xs">{filtered.length} SKUs · stock y publicación editables</p></div><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar SKU o producto..." className="w-full sm:w-56 rounded-lg border bg-slate-50 px-3 py-1.5 text-sm" /></div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] text-left">
          <thead><tr className="border-b bg-slate-100/70 font-mono text-[11px] uppercase text-slate-500"><th className="px-4 py-3">SKU</th><th className="px-4 py-3">Producto</th><th className="px-4 py-3">Stock</th><th className="hidden lg:table-cell px-4 py-3">Precio</th><th className="px-4 py-3">Publicado</th></tr></thead>
          <tbody className="divide-y text-sm">
            {filtered.map((row) => (
              <tr key={row.sku} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-mono text-xs text-blue-700">{row.sku}</td>
                <td className="px-4 py-3 text-xs font-semibold">{row.name}</td>
                <td className="px-4 py-3"><div className="flex items-center gap-1.5"><button onClick={() => setStock((s) => ({ ...s, [row.sku]: Math.max(0, (s[row.sku] ?? 0) - 1) }))}>−</button><span className="min-w-14 rounded-full bg-slate-100 px-2 py-0.5 text-center font-mono text-[11px] font-bold">{stock[row.sku]}</span><button onClick={() => setStock((s) => ({ ...s, [row.sku]: (s[row.sku] ?? 0) + 1 }))}>+</button></div></td>
                <td className="hidden lg:table-cell px-4 py-3 font-mono text-xs">{row.price}</td>
                <td className="px-4 py-3"><button role="switch" aria-checked={published[row.sku] ?? false} onClick={() => setPublished((p) => ({ ...p, [row.sku]: !(p[row.sku] ?? false) }))} className={'relative h-5 w-9 rounded-full ' + ((published[row.sku] ?? false) ? 'bg-blue-600' : 'bg-slate-300')}><span className="absolute top-0.5 h-4 w-4 rounded-full bg-white" style={(published[row.sku] ?? false) ? { left: '18px' } : { left: '2px' }} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};`;
