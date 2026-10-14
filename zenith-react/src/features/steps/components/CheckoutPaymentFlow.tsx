import { useId, useState } from 'react';
import { Steps } from './Steps';

export interface CheckoutCartItem {
  id: string;
  name: string;
  detail: string;
  price: number;
  qty: number;
}

const INITIAL_CART: CheckoutCartItem[] = [
  { id: 'p1', name: 'Auriculares Zenith Pro', detail: 'Negro · Bluetooth 5.3', price: 59.99, qty: 1 },
  { id: 'p2', name: 'Funda de viaje', detail: 'Nylon · Azul noche', price: 19.99, qty: 1 },
];

const CHECKOUT_STEPS = [
  { label: 'Carrito', description: 'Revisa artículos', icon: 'shopping_cart' },
  { label: 'Envío', description: 'Dirección y método', icon: 'local_shipping' },
  { label: 'Pago', description: 'Tarjeta o PayPal', icon: 'credit_card' },
  { label: 'Confirmación', description: 'Confirma el pedido', icon: 'receipt_long' },
];

const SHIPPING_COST: Record<string, number> = {
  standard: 4.99,
  express: 9.99,
};

export const CheckoutPaymentFlow = () => {
  const [current, setCurrent] = useState(0);
  const [cart, setCart] = useState<CheckoutCartItem[]>(INITIAL_CART);
  const [name, setName] = useState('Ada Lovelace');
  const [address, setAddress] = useState('Calle Mayor 12, 3B');
  const [city, setCity] = useState('Madrid 28013');
  const [method, setMethod] = useState('standard');
  const [card, setCard] = useState('4242 4242 4242 4242');
  const [expiry, setExpiry] = useState('08/27');
  const [cvc, setCvc] = useState('123');
  const [payMethod, setPayMethod] = useState('card');
  const [placed, setPlaced] = useState(false);
  const formId = useId();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = SHIPPING_COST[method] ?? 4.99;
  const total = subtotal + shipping;

  const changeQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item)),
    );
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const canGoNext = () => {
    if (current === 0) return cart.length > 0;
    if (current === 1) return name.trim() !== '' && address.trim() !== '' && city.trim() !== '';
    if (current === 2) return payMethod === 'paypal' || (card.trim() !== '' && expiry.trim() !== '' && cvc.trim() !== '');
    return true;
  };

  const next = () => {
    if (!canGoNext()) return;
    if (current === 3) {
      setPlaced(true);
      return;
    }
    setCurrent((c) => Math.min(CHECKOUT_STEPS.length - 1, c + 1));
  };

  const prev = () => {
    setPlaced(false);
    setCurrent((c) => Math.max(0, c - 1));
  };

  return (
    <div className="w-full space-y-4 rounded-lg border border-slate-200 bg-white p-4">
      <Steps steps={CHECKOUT_STEPS} current={current} onStepChange={(i) => { setPlaced(false); setCurrent(i); }} />
      {placed ? (
        <div className="rounded-md border border-blue-200 bg-blue-50 p-4 text-center">
          <span aria-hidden="true" className="material-symbols-outlined text-[28px] text-blue-600">check_circle</span>
          <h3 className="mt-1 text-sm font-semibold text-slate-900">Pedido #8492 confirmado</h3>
          <p className="mt-1 text-sm text-slate-500">
            {name} · {address} · {city} · Total {total.toFixed(2)} €
          </p>
          <button
            type="button"
            onClick={() => { setPlaced(false); setCurrent(0); setCart(INITIAL_CART); }}
            className="mt-3 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Empezar otro pedido
          </button>
        </div>
      ) : (
        <>
          {current === 0 && (
            <ul className="animate-step-panel-in divide-y divide-slate-100 rounded-md border border-slate-200">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-3 p-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-900">{item.name}</p>
                    <p className="truncate text-xs text-slate-500">{item.detail}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button type="button" onClick={() => changeQty(item.id, -1)} aria-label={`Quitar uno de ${item.name}`} className="flex h-6 w-6 items-center justify-center rounded border border-slate-300 text-slate-600 hover:bg-slate-50">−</button>
                      <span className="text-xs tabular-nums text-slate-700">{item.qty}</span>
                      <button type="button" onClick={() => changeQty(item.id, 1)} aria-label={`Añadir uno de ${item.name}`} className="flex h-6 w-6 items-center justify-center rounded border border-slate-300 text-slate-600 hover:bg-slate-50">+</button>
                      <button type="button" onClick={() => removeItem(item.id)} className="ml-2 text-xs font-medium text-red-600 hover:underline">Quitar</button>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-slate-900 tabular-nums">{(item.price * item.qty).toFixed(2)} €</p>
                </li>
              ))}
              {cart.length === 0 && <li className="p-4 text-sm text-slate-500">Carrito vacío (simulado). Recarga para seguir probando.</li>}
            </ul>
          )}
          {current === 1 && (
            <div className="grid animate-step-panel-in gap-3 rounded-md border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2">
              <div>
                <label htmlFor={`${formId}-name`} className="text-xs font-medium text-slate-700">Nombre</label>
                <input id={`${formId}-name`} value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm" />
              </div>
              <div>
                <label htmlFor={`${formId}-city`} className="text-xs font-medium text-slate-700">Ciudad y CP</label>
                <input id={`${formId}-city`} value={city} onChange={(e) => setCity(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor={`${formId}-address`} className="text-xs font-medium text-slate-700">Dirección</label>
                <input id={`${formId}-address`} value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm" />
              </div>
              <div className="flex gap-2 sm:col-span-2">
                {[
                  { id: 'standard', label: 'Estándar 24-48h · 4,99 €' },
                  { id: 'express', label: 'Exprés 12h · 9,99 €' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setMethod(opt.id)}
                    aria-pressed={method === opt.id}
                    className={method === opt.id ? 'flex-1 rounded-md border-2 border-blue-600 bg-white px-2 py-2 text-xs font-medium text-blue-700' : 'flex-1 rounded-md border border-slate-300 bg-white px-2 py-2 text-xs text-slate-600 hover:bg-slate-50'}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          {current === 2 && (
            <div className="animate-step-panel-in space-y-3 rounded-md border border-slate-200 bg-slate-50 p-4">
              <div className="flex gap-2">
                {[
                  { id: 'card', label: 'Tarjeta' },
                  { id: 'paypal', label: 'PayPal' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPayMethod(opt.id)}
                    aria-pressed={payMethod === opt.id}
                    className={payMethod === opt.id ? 'rounded-md border-2 border-blue-600 bg-white px-3 py-1.5 text-xs font-medium text-blue-700' : 'rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50'}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {payMethod === 'card' ? (
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label htmlFor={`${formId}-card`} className="text-xs font-medium text-slate-700">Número (simulado)</label>
                    <input id={`${formId}-card`} value={card} onChange={(e) => setCard(e.target.value)} inputMode="numeric" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-2.5 py-1.5 font-mono text-sm" />
                  </div>
                  <div>
                    <label htmlFor={`${formId}-exp`} className="text-xs font-medium text-slate-700">Caducidad</label>
                    <input id={`${formId}-exp`} value={expiry} onChange={(e) => setExpiry(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-2.5 py-1.5 font-mono text-sm" />
                  </div>
                  <div>
                    <label htmlFor={`${formId}-cvc`} className="text-xs font-medium text-slate-700">CVC</label>
                    <input id={`${formId}-cvc`} value={cvc} onChange={(e) => setCvc(e.target.value)} inputMode="numeric" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-2.5 py-1.5 font-mono text-sm" />
                  </div>
                  <p className="text-xs text-slate-500">Pago simulado, no se cobra nada.</p>
                </div>
              ) : (
                <p className="text-sm text-slate-500">Serás redirigido a PayPal (simulado) para autorizar {total.toFixed(2)} €.</p>
              )}
            </div>
          )}
          {current === 3 && (
            <div className="animate-step-panel-in rounded-md border border-slate-200 p-4 text-sm">
              <p className="font-semibold text-slate-900">Revisa tu pedido</p>
              <ul className="mt-2 space-y-1 text-slate-600">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between"><span>{item.name} × {item.qty}</span><span className="tabular-nums">{(item.price * item.qty).toFixed(2)} €</span></li>
                ))}
              </ul>
              <p className="mt-2 flex justify-between text-slate-600"><span>Envío ({method === 'express' ? 'exprés' : 'estándar'})</span><span className="tabular-nums">{shipping.toFixed(2)} €</span></p>
              <p className="mt-1 flex justify-between font-semibold text-slate-900"><span>Total</span><span className="tabular-nums">{total.toFixed(2)} €</span></p>
              <p className="mt-2 text-xs text-slate-500">{name} · {address} · {city} · {payMethod === 'card' ? `Tarjeta ···· ${card.slice(-4)}` : 'PayPal'}</p>
            </div>
          )}
          <div className="flex items-center justify-between border-t border-slate-100 pt-3">
            <button type="button" onClick={prev} disabled={current === 0} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40">Anterior</button>
            <p className="text-xs tabular-nums text-slate-500">Subtotal {subtotal.toFixed(2)} € · Total {total.toFixed(2)} €</p>
            <button type="button" onClick={next} disabled={!canGoNext()} className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-40">
              {current === 3 ? 'Confirmar pedido' : 'Siguiente'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
