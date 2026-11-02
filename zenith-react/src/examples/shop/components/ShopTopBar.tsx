import { Link, NavLink } from 'react-router';

interface ShopTopBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  cartCount: number;
}

export const ShopTopBar = ({ query, onQueryChange, cartCount }: ShopTopBarProps) => (
  <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
      <Link to="/examples/shop" className="flex shrink-0 items-center gap-2.5" aria-label="Casa Clara, inicio">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
          <span aria-hidden="true" className="material-symbols-outlined text-[22px]">
            storefront
          </span>
        </span>
        <span className="hidden leading-tight sm:block">
          <span className="block text-sm font-bold tracking-tight text-slate-900">casa clara</span>
          <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
            objetos cotidianos
          </span>
        </span>
      </Link>

      <nav aria-label="Navegación de tienda" className="hidden items-center gap-6 pl-6 md:flex">
        <NavLink
          to="/examples/shop"
          end
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${isActive ? 'text-sky-700' : 'text-slate-600 hover:text-slate-900'}`
          }
        >
          Catálogo
        </NavLink>
        {/* <a href="#colecciones" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">Colecciones</a> */}
        {/* <a href="#nosotros" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">Nuestra historia</a> */}
      </nav>

      <label className="relative ml-auto hidden min-w-40 max-w-sm flex-1 sm:block">
        <span className="material-symbols-outlined pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[19px] text-slate-400">
          search
        </span>
        <input
          value={query}
          onChange={event => onQueryChange(event.target.value)}
          type="search"
          placeholder="Busca algo especial..."
          aria-label="Buscar productos"
          className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
        />
      </label>

      <Link
        to="/examples/shop/shopping-cart"
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
        aria-label={`Carrito, ${cartCount} artículos`}
      >
        <span aria-hidden="true" className="material-symbols-outlined text-[22px]">
          shopping_bag
        </span>
        {cartCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-sky-600 px-1 text-[10px] font-bold text-white">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
    <div className="px-4 pb-3 sm:hidden">
      <label className="relative block">
        <span className="material-symbols-outlined pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[19px] text-slate-400">
          search
        </span>
        <input
          value={query}
          onChange={event => onQueryChange(event.target.value)}
          type="search"
          placeholder="Busca algo especial..."
          aria-label="Buscar productos"
          className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
        />
      </label>
    </div>
  </header>
);
