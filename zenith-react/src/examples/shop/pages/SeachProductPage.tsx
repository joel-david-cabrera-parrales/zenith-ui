import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { FiltersPanel } from '../components/FiltersPanel';
import { ShopFooter } from '../components/ShopFooter';
import { ShopProductCard } from '../components/ShopProductCard';
import { ShopTopBar } from '../components/ShopTopBar';
import { useShopCart } from '../hooks/useShopCart';
import { products } from '../mocks/products';

type ViewMode = 'grid' | 'list';

export const SeachProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('q') ?? '';
  const [category, setCategory] = useState('Todo el catálogo');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [freeShippingOnly, setFreeShippingOnly] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [view, setView] = useState<ViewMode>('grid');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const { itemCount, addToCart } = useShopCart();

  const updateSearch = (value: string) => {
    setSearchParams(params => {
      const nextParams = new URLSearchParams(params);
      if (value.trim()) nextParams.set('q', value);
      else nextParams.delete('q');
      return nextParams;
    }, { replace: true });
  };

  const visibleProducts = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLocaleLowerCase('es');
    return products
      .filter(product => category === 'Todo el catálogo' || product.category === category)
      .filter(product => !inStockOnly || product.inStock)
      .filter(product => !freeShippingOnly || product.freeShipping)
      .filter(product => minPrice === '' || product.price >= Number(minPrice))
      .filter(product => maxPrice === '' || product.price <= Number(maxPrice))
      .filter(product => product.rating >= minRating)
      .filter(product => !normalizedQuery || `${product.name} ${product.category}`.toLocaleLowerCase('es').includes(normalizedQuery))
      .sort((a, b) =>
        sort === 'price-asc' ? a.price - b.price
          : sort === 'price-desc' ? b.price - a.price
          : sort === 'rating' ? b.rating - a.rating
          : 0
      );
  }, [category, freeShippingOnly, inStockOnly, maxPrice, minPrice, minRating, searchTerm, sort]);

  const clearFilters = () => {
    setCategory('Todo el catálogo');
    setInStockOnly(false);
    setFreeShippingOnly(false);
    setMinPrice('');
    setMaxPrice('');
    setMinRating(0);
  };

  const activeFilterCount = Number(category !== 'Todo el catálogo') + Number(inStockOnly) + Number(freeShippingOnly)
    + Number(minPrice !== '') + Number(maxPrice !== '') + Number(minRating > 0);

  const filterPanel = (
    <FiltersPanel
      category={category}
      onCategoryChange={setCategory}
      inStockOnly={inStockOnly}
      onInStockChange={setInStockOnly}
      freeShippingOnly={freeShippingOnly}
      onFreeShippingChange={setFreeShippingOnly}
      minPrice={minPrice}
      onMinPriceChange={setMinPrice}
      maxPrice={maxPrice}
      onMaxPriceChange={setMaxPrice}
      minRating={minRating}
      onMinRatingChange={setMinRating}
      onClear={clearFilters}
    />
  );

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <ShopTopBar query={searchTerm} onQueryChange={updateSearch} cartCount={itemCount} />
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pt-11 lg:px-8">
        <nav aria-label="Ruta de navegación" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <a href="/examples/shop" className="transition hover:text-sky-700">Inicio</a>
          <span aria-hidden="true" className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="font-medium text-slate-700">Resultados de búsqueda</span>
        </nav>

        <header className="mb-7 border-b border-slate-100 pb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Explora Casa Clara</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {searchTerm ? <>Resultados para <span className="text-sky-800">“{searchTerm}”</span></> : 'Busca algo especial'}
          </h1>
          <p className="mt-2 text-sm text-slate-500">Encuentra piezas bonitas y útiles para cada rincón de tu hogar.</p>
        </header>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(open => !open)}
            aria-expanded={mobileFiltersOpen}
            className="inline-flex h-10 w-fit items-center gap-2 rounded-xl border border-slate-200 px-3 text-sm font-medium text-slate-700 hover:border-sky-300 hover:text-sky-800 lg:hidden"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[18px]">tune</span>
            Filtros
            {activeFilterCount > 0 && <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-sky-100 px-1 text-[11px] font-semibold text-sky-800">{activeFilterCount}</span>}
          </button>
          <div className="flex flex-wrap items-center gap-3 sm:ml-auto">
            <label className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-3 text-sm text-slate-600">
              <span className="hidden text-xs text-slate-500 sm:inline">Ordenar:</span>
              <select aria-label="Ordenar resultados" value={sort} onChange={event => setSort(event.target.value)} className="max-w-[165px] cursor-pointer bg-transparent text-sm font-medium text-slate-800 outline-none">
                <option value="featured">Recomendados</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
                <option value="rating">Mejor valorados</option>
              </select>
            </label>
            <div className="flex items-center rounded-xl border border-slate-200 p-1" role="group" aria-label="Vista de resultados">
              {(['grid', 'list'] as const).map(mode => (
                <button key={mode} type="button" onClick={() => setView(mode)} aria-label={mode === 'grid' ? 'Vista en cuadrícula' : 'Vista en lista'} aria-pressed={view === mode}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${view === mode ? 'bg-sky-100 text-sky-800' : 'text-slate-400 hover:text-slate-700'}`}>
                  <span aria-hidden="true" className="material-symbols-outlined text-[19px]">{mode === 'grid' ? 'grid_view' : 'view_list'}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {mobileFiltersOpen && <div className="mb-5 lg:hidden">{filterPanel}</div>}

        <div className="grid items-start gap-7 lg:grid-cols-[250px_minmax(0,1fr)]">
          <div className="hidden lg:block">{filterPanel}</div>
          <section aria-label="Resultados de productos" aria-live="polite">
            <div className="mb-4 flex min-h-6 items-center justify-between gap-3">
              <p className="text-sm text-slate-500"><span className="font-semibold text-slate-800">{visibleProducts.length}</span> {visibleProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}</p>
              {activeFilterCount > 0 && <button type="button" onClick={clearFilters} className="text-xs font-semibold text-sky-700 hover:text-sky-900">Quitar filtros</button>}
            </div>
            {visibleProducts.length > 0 ? (
              <div className={view === 'grid' ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-col gap-4'}>
                {visibleProducts.map(product => (
                  <ShopProductCard key={product.id} product={product} view={view} onAddToCart={addedProduct => {
                    addToCart(addedProduct);
                    setNotice(`${addedProduct.name} añadido a tu cesta`);
                  }} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center">
                <span aria-hidden="true" className="material-symbols-outlined text-4xl text-slate-300">search_off</span>
                <h2 className="mt-3 text-base font-semibold text-slate-800">No encontramos coincidencias</h2>
                <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500">Prueba con otras palabras o ajusta los filtros para descubrir más productos.</p>
                {activeFilterCount > 0 && <button type="button" onClick={clearFilters} className="mt-4 text-sm font-semibold text-sky-700 hover:text-sky-900">Limpiar filtros</button>}
              </div>
            )}
          </section>
        </div>

        {notice && <div role="status" className="fixed bottom-4 right-4 z-40 flex max-w-sm items-center gap-2 rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-lg">
          <span aria-hidden="true" className="material-symbols-outlined text-[19px] text-emerald-600">check_circle</span>
          {notice}
          <button type="button" onClick={() => setNotice('')} aria-label="Cerrar mensaje" className="ml-2 text-slate-400 hover:text-slate-700"><span className="material-symbols-outlined text-[18px]">close</span></button>
        </div>}
      </main>
      <ShopFooter />
    </div>
  );
};
