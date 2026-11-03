import { useId } from 'react';
import type { ShopCartItem } from '../context/ShopCartContext';

interface ShopOrderSummaryProps {
  items: ShopCartItem[];
  shippingCost?: number;
  editable?: boolean;
  showTotals?: boolean;
  onQuantityChange?: (productId: string, quantity: number) => void;
  onRemove?: (productId: string) => void;
}

const formatPrice = (amount: number) => `${amount.toFixed(2).replace('.', ',')} €`;

export const ShopOrderSummary = ({
  items,
  shippingCost = 0,
  editable = false,
  showTotals = true,
  onQuantityChange,
  onRemove,
}: ShopOrderSummaryProps) => {
  const headingId = useId();
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const total = subtotal + shippingCost;

  return (
    <section aria-labelledby={headingId} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <h2 id={headingId} className="font-serif text-xl text-slate-900">Resumen del pedido</h2>
        <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-800">{items.reduce((count, item) => count + item.quantity, 0)} artículos</span>
      </div>

      <ul className="mt-5 divide-y divide-slate-100">
        {items.map(({ product, quantity }) => (
          <li key={product.id} className="flex gap-3 py-4 first:pt-0 last:pb-0">
            <img src={product.image} alt={product.imageAlt} className="h-[68px] w-[68px] shrink-0 rounded-xl bg-slate-100 object-cover" />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-800">{product.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{product.category}</p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-slate-800">{formatPrice(product.price * quantity)}</span>
              </div>
              {editable ? (
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex h-8 items-center rounded-lg border border-slate-200">
                    <button type="button" onClick={() => onQuantityChange?.(product.id, quantity - 1)} aria-label={`Quitar una unidad de ${product.name}`} className="flex h-8 w-8 items-center justify-center text-slate-500 transition hover:text-slate-900"><span aria-hidden="true" className="material-symbols-outlined text-[17px]">remove</span></button>
                    <span className="w-7 text-center text-xs font-medium tabular-nums">{quantity}</span>
                    <button type="button" onClick={() => onQuantityChange?.(product.id, quantity + 1)} aria-label={`Añadir una unidad de ${product.name}`} className="flex h-8 w-8 items-center justify-center text-slate-500 transition hover:text-slate-900"><span aria-hidden="true" className="material-symbols-outlined text-[17px]">add</span></button>
                  </div>
                  <button type="button" onClick={() => onRemove?.(product.id)} className="text-xs font-medium text-slate-400 underline decoration-slate-300 underline-offset-4 transition hover:text-rose-600">Quitar</button>
                </div>
              ) : (
                <p className="mt-1 text-xs text-slate-500">Cantidad: {quantity}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      {showTotals && <div className="mt-5 space-y-3 border-t border-slate-200 pt-4 text-sm">
        <div className="flex justify-between text-slate-500"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
        <div className="flex justify-between text-slate-500"><span>Envío</span><span>{shippingCost === 0 ? <span className="font-medium text-emerald-700">Gratis</span> : formatPrice(shippingCost)}</span></div>
        <div className="flex items-baseline justify-between border-t border-slate-100 pt-3 text-slate-900"><span className="font-semibold">Total</span><span className="text-xl font-semibold tracking-tight">{formatPrice(total)}</span></div>
        <p className="text-right text-[11px] text-slate-400">Impuestos incluidos</p>
      </div>}
    </section>
  );
};
