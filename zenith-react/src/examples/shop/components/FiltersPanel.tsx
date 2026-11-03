import { categories } from '../mocks/categories';

interface FiltersPanelProps {
  category: string;
  onCategoryChange: (category: string) => void;
  inStockOnly: boolean;
  onInStockChange: (value: boolean) => void;
  freeShippingOnly: boolean;
  onFreeShippingChange: (value: boolean) => void;
  minPrice: string;
  onMinPriceChange: (value: string) => void;
  maxPrice: string;
  onMaxPriceChange: (value: string) => void;
  minRating: number;
  onMinRatingChange: (value: number) => void;
  onClear: () => void;
}

export const FiltersPanel = (props: FiltersPanelProps) => {
  const {
    category,
    onCategoryChange,
    inStockOnly,
    onInStockChange,
    freeShippingOnly,
    onFreeShippingChange,
    minPrice,
    onMinPriceChange,
    maxPrice,
    onMaxPriceChange,
    minRating,
    onMinRatingChange,
    onClear,
  } = props;
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-900">Filtros</h2>
        <button type="button" onClick={onClear} className="text-xs font-medium text-sky-700 hover:text-sky-900">
          Limpiar
        </button>
      </div>
      <section className="border-b border-slate-100 pb-5">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Categorías</h3>
        <ul className="space-y-1">
          {categories.map(item => (
            <li key={item.name}>
              <button
                type="button"
                aria-pressed={category === item.name}
                onClick={() => onCategoryChange(item.name)}
                className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-sm transition ${
                  category === item.name
                    ? 'bg-sky-50 font-semibold text-sky-800'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span>{item.name}</span>
                <span className={`text-xs ${category === item.name ? 'text-sky-700' : 'text-slate-400'}`}>
                  {item.count}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className="border-b border-slate-100 py-5">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Disponibilidad</h3>
        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={event => onInStockChange(event.target.checked)}
            className="h-4 w-4 rounded border-slate-300 accent-sky-600 focus:ring-sky-500"
          />
          En stock
        </label>
        <label className="mt-3 flex cursor-pointer items-center gap-2.5 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={freeShippingOnly}
            onChange={event => onFreeShippingChange(event.target.checked)}
            className="h-4 w-4 rounded border-slate-300 accent-sky-600 focus:ring-sky-500"
          />
          Envío gratuito
        </label>
      </section>
      <section className="border-b border-slate-100 py-5">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Precio</h3>
        <div className="grid grid-cols-2 gap-2">
          <label className="text-xs text-slate-500">
            Mínimo
            <span className="mt-1 flex h-10 items-center rounded-lg border border-slate-200 px-2 text-sm text-slate-700 focus-within:border-sky-400 focus-within:ring-2 focus-within:ring-sky-100">
              <span aria-hidden="true">€</span>
              <input aria-label="Precio mínimo" type="number" min="0" value={minPrice} onChange={event => onMinPriceChange(event.target.value)} className="w-full bg-transparent pl-1 outline-none" placeholder="0" />
            </span>
          </label>
          <label className="text-xs text-slate-500">
            Máximo
            <span className="mt-1 flex h-10 items-center rounded-lg border border-slate-200 px-2 text-sm text-slate-700 focus-within:border-sky-400 focus-within:ring-2 focus-within:ring-sky-100">
              <span aria-hidden="true">€</span>
              <input aria-label="Precio máximo" type="number" min="0" value={maxPrice} onChange={event => onMaxPriceChange(event.target.value)} className="w-full bg-transparent pl-1 outline-none" placeholder="Sin límite" />
            </span>
          </label>
        </div>
      </section>
      <section className="py-5">
        <label htmlFor="minimum-rating" className="mb-3 block text-xs font-semibold uppercase tracking-wide text-slate-500">Valoración mínima</label>
        <select id="minimum-rating" value={minRating} onChange={event => onMinRatingChange(Number(event.target.value))} className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100">
          <option value={0}>Cualquier valoración</option>
          <option value={4}>4 estrellas o más</option>
          <option value={4.5}>4,5 estrellas o más</option>
          <option value={5}>5 estrellas</option>
        </select>
      </section>
      <div className="mt-5 rounded-xl bg-sky-50 p-3.5">
        <div className="flex items-start gap-2.5">
          <span aria-hidden="true" className="material-symbols-outlined text-[19px] text-sky-700">
            local_shipping
          </span>
          <p className="text-xs leading-relaxed text-slate-600">
            <span className="font-semibold text-slate-800">Envío gratis</span> en pedidos superiores a 60 €.
          </p>
        </div>
      </div>
    </aside>
  );
};
