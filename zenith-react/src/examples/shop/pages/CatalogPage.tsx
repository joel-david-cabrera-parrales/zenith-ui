import { useMemo, useState } from 'react';
import { FiltersPanel } from '../components/FiltersPanel';
import { ShopFooter } from '../components/ShopFooter';
import { ShopTopBar } from '../components/ShopTopBar';
import { ShopProductCard } from '../components/ShopProductCard';
import { products } from '../mocks/products';
import { useShopCart } from '../hooks/useShopCart';

type ViewMode = 'grid' | 'list';

export const CatalogPage = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todo el catálogo');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [freeShippingOnly, setFreeShippingOnly] = useState(false);
  const [view, setView] = useState<ViewMode>('grid');
  const [sort, setSort] = useState('featured');
  const [notice, setNotice] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { itemCount, addToCart } = useShopCart();

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('es');
    return products
      .filter(product => category === 'Todo el catálogo' || product.category === category)
      .filter(product => !inStockOnly || product.inStock)
      .filter(product => !freeShippingOnly || product.freeShipping)
      .filter(
        product =>
          !normalizedQuery || `${product.name} ${product.category}`.toLocaleLowerCase('es').includes(normalizedQuery)
      )
      .sort((a, b) =>
        sort === 'price-asc'
          ? a.price - b.price
          : sort === 'price-desc'
          ? b.price - a.price
          : sort === 'rating'
          ? b.rating - a.rating
          : 0
      );
  }, [category, freeShippingOnly, inStockOnly, query, sort]);

  const clearFilters = () => {
    setCategory('Todo el catálogo');
    setInStockOnly(false);
    setFreeShippingOnly(false);
    setQuery('');
  };

  const filterPanel = (
    <FiltersPanel
      category={category}
      onCategoryChange={setCategory}
      inStockOnly={inStockOnly}
      onInStockChange={setInStockOnly}
      freeShippingOnly={freeShippingOnly}
      onFreeShippingChange={setFreeShippingOnly}
      onClear={clearFilters}
    />
  );

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <ShopTopBar query={query} onQueryChange={setQuery} cartCount={itemCount} />
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pt-11 lg:px-8">
        <div className="mb-8 overflow-hidden rounded-3xl bg-sky-50">
          <div className="grid min-h-[220px] items-center gap-5 px-6 py-8 sm:px-10 md:grid-cols-[1fr_auto] md:px-12">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-800">
                <span aria-hidden="true" className="material-symbols-outlined text-[15px]">
                  sunny
                </span>{' '}
                Colección de temporada
              </span>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Pequeños detalles,
                <br className="hidden sm:block" /> grandes momentos.
              </h1>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                Piezas útiles y bonitas para hacer de cada rincón un lugar más tuyo.
              </p>
            </div>
            <div className="hidden h-36 w-36 items-center justify-center rounded-full bg-white/70 text-sky-300 md:flex">
              <span aria-hidden="true" className="material-symbols-outlined text-[76px]">
                chair
              </span>
            </div>
          </div>
        </div>

        <div id="colecciones" className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Hecho para durar</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">El catálogo</h2>
            <p className="mt-1 text-sm text-slate-500">Encuentra algo que te haga sentir en casa.</p>
          </div>
          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(open => !open)}
              aria-expanded={mobileFiltersOpen}
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-3 text-sm font-medium text-slate-700 hover:border-sky-300 hover:text-sky-800 lg:hidden"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                tune
              </span>{' '}
              Filtros
              {(inStockOnly || freeShippingOnly || category !== 'Todo el catálogo') && (
                <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
              )}
            </button>
            <label className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-3 text-sm text-slate-600">
              <span className="hidden text-xs text-slate-500 sm:inline">Ordenar:</span>
              <select
                aria-label="Ordenar productos"
                value={sort}
                onChange={event => setSort(event.target.value)}
                className="max-w-[150px] cursor-pointer bg-transparent text-sm font-medium text-slate-800 outline-none"
              >
                <option value="featured">Destacados</option>
                <option value="price-asc">Precio: menor</option>
                <option value="price-desc">Precio: mayor</option>
                <option value="rating">Mejor valorados</option>
              </select>
            </label>
            <div
              className="flex items-center rounded-xl border border-slate-200 p-1"
              role="group"
              aria-label="Vista de productos"
            >
              <button
                type="button"
                onClick={() => setView('grid')}
                aria-label="Vista en cuadrícula"
                aria-pressed={view === 'grid'}
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${
                  view === 'grid' ? 'bg-sky-100 text-sky-800' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[19px]">
                  grid_view
                </span>
              </button>
              <button
                type="button"
                onClick={() => setView('list')}
                aria-label="Vista en lista"
                aria-pressed={view === 'list'}
                className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${
                  view === 'list' ? 'bg-sky-100 text-sky-800' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[19px]">
                  view_list
                </span>
              </button>
            </div>
          </div>
        </div>

        {mobileFiltersOpen && <div className="mb-5 lg:hidden">{filterPanel}</div>}

        <div className="grid items-start gap-7 lg:grid-cols-[230px_minmax(0,1fr)]">
          <div className="hidden lg:block">{filterPanel}</div>
          <section aria-label="Productos" aria-live="polite">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-slate-800">{visibleProducts.length}</span> productos
              </p>
              <p className="hidden text-xs text-slate-400 sm:block">Diseño consciente · calidad para el día a día</p>
            </div>
            {visibleProducts.length ? (
              <div
                className={
                  view === 'grid' ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-col gap-4'
                }
              >
                {visibleProducts.map(product => (
                  <ShopProductCard
                    key={product.id}
                    product={product}
                    view={view}
                    onAddToCart={addedProduct => {
                      addToCart(addedProduct);
                      setNotice(`${addedProduct.name} añadido a tu cesta`);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center">
                <span aria-hidden="true" className="material-symbols-outlined text-4xl text-slate-300">
                  search_off
                </span>
                <h3 className="mt-3 text-base font-semibold text-slate-800">No encontramos productos</h3>
                <p className="mt-1 text-sm text-slate-500">Prueba con otra búsqueda o quita algún filtro.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 text-sm font-semibold text-sky-700 hover:text-sky-900"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </section>
        </div>
        {notice && (
          <div
            role="status"
            className="fixed right-4 bottom-4 z-40 flex max-w-sm items-center gap-2 rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-lg"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[19px] text-emerald-600">
              check_circle
            </span>
            {notice}
            <button
              type="button"
              onClick={() => setNotice('')}
              aria-label="Cerrar mensaje"
              className="ml-2 text-slate-400 hover:text-slate-700"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        )}
      </main>
      <ShopFooter />
    </div>
  );
};
