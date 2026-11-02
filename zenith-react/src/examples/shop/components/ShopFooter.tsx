import { Link } from 'react-router';

export const ShopFooter = () => (
  <footer className="border-t border-slate-200 bg-white">
    <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <Link to="/examples/shop" className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700"><span aria-hidden="true" className="material-symbols-outlined text-[20px]">storefront</span></span>
        <span className="text-sm font-bold tracking-tight text-slate-900">casa clara</span>
      </Link>
      <p className="text-xs text-slate-500">Objetos para vivir mejor, todos los días.</p>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
        <a href="#envios" className="transition hover:text-sky-700">Envíos y devoluciones</a>
        <a href="#contacto" className="transition hover:text-sky-700">Contacto</a>
        <span>© 2026 Casa Clara</span>
      </div>
    </div>
  </footer>
);
