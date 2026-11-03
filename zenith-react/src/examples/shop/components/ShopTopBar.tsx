import { useEffect, useId, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { products } from '../mocks/products';
import type { ShopProduct } from '../interfaces/shop-products.interface';

interface ShopTopBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  cartCount: number;
}

const formatPrice = (price: number) => `${price.toFixed(2).replace('.', ',')} €`;
const normalize = (value: string) => value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const ShopTopBar = ({ query, onQueryChange, cartCount }: ShopTopBarProps) => {
  const navigate = useNavigate();
  const rootRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxId = useId();
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const matchingProducts = useMemo(() => {
    const normalizedQuery = normalize(query.trim());
    if (!normalizedQuery) return [];
    return products
      .filter(product => normalize(`${product.name} ${product.category}`).includes(normalizedQuery));
  }, [query]);
  const suggestions = matchingProducts.slice(0, 5);

  const goToSearch = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const term = query.trim();
    setSearchOpen(false);
    setActiveIndex(-1);
    navigate(term ? `/examples/shop/search?q=${encodeURIComponent(term)}` : '/examples/shop/search');
  };

  const goToProduct = (product: ShopProduct) => {
    setSearchOpen(false);
    setProfileOpen(false);
    navigate(`/examples/shop/product/${product.id}`);
  };

  const onSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown' && suggestions.length) {
      event.preventDefault();
      setSearchOpen(true);
      setActiveIndex(index => (index + 1) % suggestions.length);
    } else if (event.key === 'ArrowUp' && suggestions.length) {
      event.preventDefault();
      setActiveIndex(index => (index <= 0 ? suggestions.length - 1 : index - 1));
    } else if (event.key === 'Escape') {
      setSearchOpen(false);
      setActiveIndex(-1);
    }
  };

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
        setProfileOpen(false);
        setActiveIndex(-1);
      }
    };
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSearchOpen(false);
        setProfileOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const renderSearch = (mobile = false) => (
    <form onSubmit={goToSearch} role="search" className={`relative ${mobile ? 'w-full sm:hidden' : 'hidden min-w-40 max-w-xl flex-1 sm:block'}`}>
      <span aria-hidden="true" className="material-symbols-outlined pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[19px] text-sky-700">search</span>
      <input
        ref={mobile ? undefined : inputRef}
        value={query}
        onChange={event => {
          onQueryChange(event.target.value);
          setSearchOpen(true);
          setProfileOpen(false);
          setActiveIndex(-1);
        }}
        onFocus={() => { setSearchOpen(true); setProfileOpen(false); }}
        onKeyDown={onSearchKeyDown}
        type="search"
        placeholder="Busca algo especial..."
        aria-label="Buscar productos"
        aria-controls={listboxId}
        aria-expanded={searchOpen && query.trim().length > 0}
        aria-autocomplete="list"
        className="h-10 w-full rounded-xl border-2 border-sky-600 bg-white pl-10 pr-20 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-sky-100"
      />
      <span className="absolute top-1/2 right-2.5 flex -translate-y-1/2 items-center gap-2">
        {query && <button type="button" aria-label="Limpiar búsqueda" onClick={() => { onQueryChange(''); setActiveIndex(-1); inputRef.current?.focus(); }} className="flex h-6 w-6 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"><span aria-hidden="true" className="material-symbols-outlined text-[17px]">close</span></button>}
        <kbd className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-500">ESC</kbd>
      </span>
    </form>
  );

  return (
    <header ref={rootRef} className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:flex-nowrap sm:gap-4 sm:px-6 lg:px-8">
        <Link to="/examples/shop" className="flex shrink-0 items-center gap-2.5" aria-label="Casa Clara, inicio">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700"><span aria-hidden="true" className="material-symbols-outlined text-[22px]">storefront</span></span>
          <span className="hidden leading-tight sm:block"><span className="block text-sm font-bold tracking-tight text-slate-900">casa clara</span><span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">objetos cotidianos</span></span>
        </Link>

        <nav aria-label="Navegación de tienda" className="hidden items-center gap-6 pl-2 md:flex">
          <NavLink to="/examples/shop" end className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-sky-700' : 'text-slate-600 hover:text-slate-900'}`}>Catálogo</NavLink>
        </nav>

        {renderSearch()}

        <div className="ml-auto flex shrink-0 items-center gap-1 sm:ml-0 sm:gap-2">
          <Link to="/examples/shop/shopping-cart" className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition hover:bg-sky-50 hover:text-sky-700" aria-label={`Carrito, ${cartCount} artículos`}>
            <span aria-hidden="true" className="material-symbols-outlined text-[22px]">shopping_bag</span>
            {cartCount > 0 && <span className="absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-sky-600 px-1 text-[10px] font-bold text-white">{cartCount}</span>}
          </Link>
          <span aria-hidden="true" className="hidden h-6 w-px bg-slate-200 sm:block" />
          <div className="relative">
            <button type="button" onClick={() => { setProfileOpen(open => !open); setSearchOpen(false); }} aria-expanded={profileOpen} aria-haspopup="menu" className="flex h-10 items-center gap-2 rounded-xl border border-transparent px-1.5 transition hover:border-slate-200 hover:bg-slate-50">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-xs font-bold text-white">CC</span>
              <span className="hidden text-left leading-tight sm:block"><span className="block text-xs font-semibold text-slate-800">Mi cuenta</span><span className="block text-[11px] text-slate-400">Casa Clara</span></span>
              <span aria-hidden="true" className={`material-symbols-outlined hidden text-lg text-slate-400 transition sm:block ${profileOpen ? 'rotate-180 text-sky-600' : ''}`}>expand_more</span>
            </button>
            {profileOpen && (
              <div role="menu" aria-label="Menú de cuenta" style={{ width: 'min(20rem, calc(100vw - 1rem))' }} className="absolute top-full right-0 z-40 mt-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                <div className="flex items-center gap-3 p-2"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sm font-bold text-sky-800">CC</span><div className="min-w-0"><p className="text-sm font-semibold text-slate-800">Te damos la bienvenida</p><p className="text-xs text-slate-500">Tu cuenta de Casa Clara</p></div></div>
                <div className="mt-1 border-t border-slate-100 pt-1">
                  <Link role="menuitem" to="/auth" onClick={() => setProfileOpen(false)} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-slate-700 transition hover:bg-slate-50"><span aria-hidden="true" className="material-symbols-outlined shrink-0 text-lg text-slate-500">account_circle</span><span className="min-w-0 flex-1">Iniciar sesión o crear cuenta</span><span aria-hidden="true" className="material-symbols-outlined shrink-0 text-base text-slate-400">arrow_forward</span></Link>
                  <Link role="menuitem" to="/examples/shop/shopping-cart" onClick={() => setProfileOpen(false)} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-slate-700 transition hover:bg-slate-50"><span aria-hidden="true" className="material-symbols-outlined shrink-0 text-lg text-slate-500">shopping_bag</span><span className="min-w-0 flex-1">Ir a mi carrito</span><span className="shrink-0 text-xs text-slate-400">{cartCount}</span></Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {renderSearch(true)}
      </div>

      {searchOpen && query.trim() && (
        <section className="absolute top-full left-1/2 z-40 mt-2 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl" aria-label="Sugerencias de productos">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
            <p className="text-xs font-semibold text-slate-800">Productos que coinciden con “{query.trim()}” <span className="font-normal text-slate-500">({matchingProducts.length})</span></p>
            <span className="hidden text-[11px] text-slate-400 sm:block">↑↓ para navegar</span>
          </div>
          <div id={listboxId} role="listbox" aria-label="Productos recomendados" className="max-h-80 overflow-y-auto p-2">
            {suggestions.map((product, index) => (
              <button key={product.id} id={`${listboxId}-${index}`} type="button" role="option" aria-selected={activeIndex === index} onMouseEnter={() => setActiveIndex(index)} onClick={() => goToProduct(product)} className={`flex w-full items-center gap-3 rounded-xl p-2 text-left transition ${activeIndex === index ? 'bg-sky-50' : 'hover:bg-slate-50'}`}>
                <img src={product.image} alt="" className="h-12 w-12 shrink-0 rounded-lg bg-slate-100 object-cover" />
                <span className="min-w-0 flex-1"><span className="block truncate text-xs font-semibold text-slate-800">{product.name}</span><span className="mt-0.5 block truncate text-[11px] text-slate-500">{product.category}{product.label ? ` · ${product.label}` : ''}</span></span>
                <span className="shrink-0 text-xs font-semibold text-slate-700">{formatPrice(product.price)}</span>
                <span aria-hidden="true" className="material-symbols-outlined text-base text-slate-400">arrow_forward</span>
              </button>
            ))}
            {suggestions.length === 0 && <p className="px-3 py-5 text-center text-sm text-slate-500">No encontramos productos. Prueba con otra búsqueda.</p>}
          </div>
          <div className="flex items-center justify-between border-t border-slate-100 px-4 py-2.5 text-[11px] text-slate-500">
            <button type="button" onClick={() => goToSearch()} className="font-semibold text-sky-700 hover:text-sky-900">Ver todos los resultados para “{query.trim()}” <span aria-hidden="true">→</span></button>
            <button type="button" onClick={() => setSearchOpen(false)} className="font-medium hover:text-slate-800">Esc para cerrar</button>
          </div>
        </section>
      )}

    </header>
  );
};
