import { useState } from 'react';
import { Link } from 'react-router';
import { ShopFooter } from '../components/ShopFooter';
import { ShopOrderSummary } from '../components/ShopOrderSummary';
import { ShopTopBar } from '../components/ShopTopBar';
import { useShopCart } from '../hooks/useShopCart';

export const ShoppingCartPage = () => {
  const [query, setQuery] = useState('');
  const { items, itemCount, subtotal, updateQuantity, removeFromCart } = useShopCart();
  const shippingCost = subtotal >= 50 || subtotal === 0 ? 0 : 4.9;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <ShopTopBar query={query} onQueryChange={setQuery} cartCount={itemCount} />
      <main className="mx-auto min-h-[65vh] max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700">Tu selección</p>
          <h1 className="mt-2 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">La cesta</h1>
          <p className="mt-2 text-sm text-slate-500">Revisa tus piezas antes de preparar el envío.</p>
        </div>

        {items.length ? (
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.75fr)] lg:gap-10">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <div className="mb-2 flex items-center justify-between border-b border-slate-100 pb-4">
                <h2 className="text-sm font-semibold text-slate-800">Tus artículos</h2>
                <span className="text-xs text-slate-500">{itemCount} {itemCount === 1 ? 'artículo' : 'artículos'}</span>
              </div>
              <ShopOrderSummary
                items={items}
                editable
                showTotals={false}
                onQuantityChange={updateQuantity}
                onRemove={removeFromCart}
              />
            </section>
            <aside className="space-y-4 lg:sticky lg:top-6">
              <ShopOrderSummary items={items} shippingCost={shippingCost} />
              <Link to="/examples/shop/checkout/cart" className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 text-sm font-semibold text-white transition hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200">
                Continuar al pago
                <span aria-hidden="true" className="material-symbols-outlined text-[19px]">arrow_forward</span>
              </Link>
              <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400"><span aria-hidden="true" className="material-symbols-outlined text-[16px]">verified_user</span>Pago seguro · Devoluciones en 30 días</p>
              <Link to="/examples/shop" className="block text-center text-sm font-medium text-slate-500 transition hover:text-sky-700">Seguir explorando</Link>
            </aside>
          </div>
        ) : (
          <section className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/60 px-6 py-16 text-center">
            <span aria-hidden="true" className="material-symbols-outlined text-5xl text-sky-700">shopping_bag</span>
            <h2 className="mt-4 font-serif text-2xl text-slate-900">Tu cesta está esperando algo especial</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">Descubre piezas cuidadas para hacer de cada rincón un lugar más tuyo.</p>
            <Link to="/examples/shop" className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 text-sm font-semibold text-white transition hover:bg-sky-800">
              Explorar la tienda <span aria-hidden="true" className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </section>
        )}
      </main>
      <ShopFooter />
    </div>
  );
};
