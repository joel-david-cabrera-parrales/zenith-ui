import { useState } from 'react';
import { Link } from 'react-router';
import type { ShopProduct } from '../interfaces/shop-products.interface';

interface ShopProductCardProps {
  product: ShopProduct;
  view: 'grid' | 'list';
  onAddToCart: (product: ShopProduct) => void;
}

export const ShopProductCard = ({ product, view, onAddToCart }: ShopProductCardProps) => {
  const [favorite, setFavorite] = useState(false);
  const isList = view === 'list';

  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg hover:shadow-slate-200/60 ${
        isList ? 'flex flex-col sm:flex-row' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden bg-slate-100 ${
          isList ? 'aspect-[4/3] sm:aspect-auto sm:w-56 sm:shrink-0' : 'aspect-[4/3]'
        }`}
      >
        <Link
          to={`/examples/shop/product/${product.id}`}
          aria-label={`Ver ${product.name}`}
          className="block h-full w-full"
        >
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        </Link>
        {product.label && (
          <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-700 shadow-sm">
            {product.label}
          </span>
        )}
        <button
          type="button"
          onClick={() => setFavorite(value => !value)}
          aria-label={favorite ? `Quitar ${product.name} de favoritos` : `Añadir ${product.name} a favoritos`}
          aria-pressed={favorite}
          className={`absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:bg-white ${
            favorite ? 'text-rose-500' : 'text-slate-600'
          }`}
        >
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-[20px]"
            style={favorite ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            favorite
          </span>
        </button>
      </div>
      <div className={`flex min-w-0 flex-1 flex-col ${isList ? 'p-4 sm:p-5' : 'p-4'}`}>
        <div className="mb-1 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
          {product.category}
        </div>
        <Link
          to={`/examples/shop/product/${product.id}`}
          className="line-clamp-2 text-sm font-semibold text-slate-900 transition hover:text-sky-700 sm:text-[15px]"
        >
          {product.name}
        </Link>
        <div className="mt-2 flex items-center gap-1.5 text-xs">
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-[15px] text-amber-400"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span className="font-semibold text-slate-700">{product.rating.toFixed(1)}</span>
          <span className="text-slate-400">({product.reviews} reseñas)</span>
        </div>
        {isList && (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
            Diseño cuidado, materiales duraderos y detalles pensados para acompañarte cada día.
          </p>
        )}
        <div className={`mt-auto flex items-end justify-between gap-3 ${isList ? 'pt-5' : 'pt-4'}`}>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-base font-bold tracking-tight text-slate-900">
                {product.price.toFixed(2).replace('.', ',')} €
              </span>
              {product.oldPrice && (
                <span className="text-xs text-slate-400 line-through">
                  {product.oldPrice.toFixed(2).replace('.', ',')} €
                </span>
              )}
            </div>
            <span className={`mt-1 block text-[11px] ${product.inStock ? 'text-emerald-700' : 'text-rose-600'}`}>
              {product.inStock ? 'En stock' : 'Agotado'}
              {product.freeShipping ? ' · Envío gratis' : ''}
            </span>
          </div>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="flex h-9 shrink-0 items-center gap-1.5 rounded-xl bg-sky-600 px-3 text-xs font-semibold text-white transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[17px]">
              add_shopping_cart
            </span>
            <span>Añadir</span>
          </button>
        </div>
      </div>
    </article>
  );
};
