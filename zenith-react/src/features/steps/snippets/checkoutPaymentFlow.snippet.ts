export const CHECKOUT_PAYMENT_FLOW_HTML = `
<div class="w-full space-y-4 rounded-lg border border-slate-200 bg-white p-4">
  <ol aria-label="Progreso de pasos" class="flex w-full items-start">
    <li class="flex flex-1 items-start">
      <span class="flex flex-col items-center gap-2 p-1 text-center">
        <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-600 text-white">
          <span aria-hidden="true" class="material-symbols-outlined text-[18px]">check</span>
        </span>
        <span class="block text-sm font-medium text-slate-900">Carrito</span>
      </span>
      <span aria-hidden="true" class="mx-2 mt-4 h-0.5 min-w-6 flex-1"><span class="block h-0.5 w-full bg-blue-600"></span></span>
    </li>
    <li class="flex flex-1 items-start" aria-current="step">
      <span class="flex flex-col items-center gap-2 p-1 text-center">
        <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100">
          <span aria-hidden="true" class="material-symbols-outlined text-[18px]">local_shipping</span>
        </span>
        <span class="block text-sm font-semibold text-blue-700">Envío</span>
      </span>
      <span aria-hidden="true" class="mx-2 mt-4 h-0.5 min-w-6 flex-1"><span class="block h-0.5 w-full bg-slate-200"></span></span>
    </li>
    <li class="flex flex-1 items-start">
      <span class="flex flex-col items-center gap-2 p-1 text-center">
        <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-400">03</span>
        <span class="block text-sm text-slate-400">Pago</span>
      </span>
      <span aria-hidden="true" class="mx-2 mt-4 h-0.5 min-w-6 flex-1"><span class="block h-0.5 w-full bg-slate-200"></span></span>
    </li>
    <li class="flex flex-none items-start">
      <span class="flex flex-col items-center gap-2 p-1 text-center">
        <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-400">04</span>
        <span class="block text-sm text-slate-400">Confirmación</span>
      </span>
    </li>
  </ol>
  <ul class="divide-y divide-slate-100 rounded-md border border-slate-200">
    <li class="flex items-center justify-between gap-3 p-3">
      <div><p class="text-sm font-medium text-slate-900">Auriculares Zenith Pro</p><p class="text-xs text-slate-500">Negro · Bluetooth 5.3</p></div>
      <p class="text-sm font-semibold text-slate-900">59,99 €</p>
    </li>
    <li class="flex items-center justify-between gap-3 p-3">
      <div><p class="text-sm font-medium text-slate-900">Funda de viaje</p><p class="text-xs text-slate-500">Nylon · Azul noche</p></div>
      <p class="text-sm font-semibold text-slate-900">19,99 €</p>
    </li>
  </ul>
  <div class="flex items-center justify-between border-t border-slate-100 pt-3">
    <p class="text-xs text-slate-500">Subtotal 79,98 € · Total 84,97 €</p>
    <button type="button" class="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">Siguiente</button>
  </div>
</div>
`;

export const CHECKOUT_PAYMENT_FLOW_TSX = `
import { useId, useState } from 'react';

export const CheckoutPaymentFlow = () => {
  const steps = [
    { label: 'Carrito', description: 'Revisa artículos', icon: 'shopping_cart' },
    { label: 'Envío', description: 'Dirección y método', icon: 'local_shipping' },
    { label: 'Pago', description: 'Tarjeta o PayPal', icon: 'credit_card' },
    { label: 'Confirmación', description: 'Confirma el pedido', icon: 'receipt_long' },
  ];
  const [current, setCurrent] = useState(0);
  const [cart, setCart] = useState([
    { id: 'p1', name: 'Auriculares Zenith Pro', detail: 'Negro · Bluetooth 5.3', price: 59.99, qty: 1 },
    { id: 'p2', name: 'Funda de viaje', detail: 'Nylon · Azul noche', price: 19.99, qty: 1 },
  ]);
  const [name, setName] = useState('Ada Lovelace');
  const [address, setAddress] = useState('Calle Mayor 12, 3B');
  const [city, setCity] = useState('Madrid 28013');
  const [method, setMethod] = useState('standard');
  const [card, setCard] = useState('4242 4242 4242 4242');
  const [placed, setPlaced] = useState(false);
  const formId = useId();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = method === 'express' ? 9.99 : 4.99;
  const total = subtotal + shipping;

  return (
    <div className="w-full space-y-4 rounded-lg border border-slate-200 bg-white p-4">
      <ol aria-label="Progreso de pasos" className="flex w-full items-start">
        {steps.map((step, index) => {
          const status = index < current ? 'completed' : index === current ? 'active' : 'pending';
          const isLast = index === steps.length - 1;
          const circle =
            status === 'completed'
              ? 'border-blue-600 bg-blue-600 text-white'
              : status === 'active'
                ? 'border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100'
                : 'border-slate-300 bg-white text-slate-400';
          return (
            <li key={step.label} aria-current={status === 'active' ? 'step' : undefined} className="flex flex-1 items-start last:flex-none">
              <button type="button" onClick={() => setCurrent(index)} className="flex flex-col items-center gap-2 p-1 text-center">
                <span aria-hidden="true" className={'flex h-8 w-8 items-center justify-center rounded-full border-2 ' + circle}>
                  {status === 'completed' ? (
                    <span className="material-symbols-outlined text-[18px]">check</span>
                  ) : status === 'active' ? (
                    <span className="material-symbols-outlined text-[18px]">{step.icon}</span>
                  ) : (
                    <span className="text-[13px] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                  )}
                </span>
                <span className="block text-sm font-medium text-slate-900">{step.label}</span>
              </button>
              {!isLast && (
                <span aria-hidden="true" className="mx-2 mt-4 h-0.5 min-w-6 flex-1">
                  <span className={'block h-0.5 w-full ' + (index < current ? 'bg-blue-600' : 'bg-slate-200')} />
                </span>
              )}
            </li>
          );
        })}
      </ol>
      {placed ? (
        <p className="rounded-md bg-blue-50 p-4 text-center text-sm font-semibold text-slate-900">Pedido confirmado · {total.toFixed(2)} €</p>
      ) : (
        <>
          {current === 0 && (
            <ul className="animate-step-panel-in divide-y divide-slate-100 rounded-md border border-slate-200">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-3 p-3">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.detail}</p>
                    <button type="button" onClick={() => setCart((prev) => prev.filter((p) => p.id !== item.id))} className="text-xs text-red-600">
                      Quitar
                    </button>
                  </div>
                  <p className="text-sm font-semibold tabular-nums">{(item.price * item.qty).toFixed(2)} €</p>
                </li>
              ))}
            </ul>
          )}
          {current === 1 && (
            <div className="grid animate-step-panel-in gap-3 sm:grid-cols-2">
              <input value={name} onChange={(e) => setName(e.target.value)} aria-label="Nombre" className="rounded-md border px-2.5 py-1.5 text-sm" />
              <input value={city} onChange={(e) => setCity(e.target.value)} aria-label="Ciudad" className="rounded-md border px-2.5 py-1.5 text-sm" />
              <input id={formId + '-addr'} value={address} onChange={(e) => setAddress(e.target.value)} aria-label="Dirección" className="rounded-md border px-2.5 py-1.5 text-sm sm:col-span-2" />
              <div className="flex gap-2 sm:col-span-2">
                <button type="button" onClick={() => setMethod('standard')} className="flex-1 rounded-md border px-2 py-2 text-xs">Estándar 4,99 €</button>
                <button type="button" onClick={() => setMethod('express')} className="flex-1 rounded-md border px-2 py-2 text-xs">Exprés 9,99 €</button>
              </div>
            </div>
          )}
          {current === 2 && (
            <input value={card} onChange={(e) => setCard(e.target.value)} aria-label="Tarjeta" className="w-full animate-step-panel-in rounded-md border px-2.5 py-1.5 font-mono text-sm" />
          )}
          {current === 3 && <p className="animate-step-panel-in text-sm">Total {total.toFixed(2)} € · {name} · {address}</p>}
          <div className="flex justify-between border-t border-slate-100 pt-3">
            <button type="button" onClick={() => setCurrent((c) => Math.max(0, c - 1))} className="rounded-md border px-3 py-1.5 text-sm">
              Anterior
            </button>
            <button
              type="button"
              onClick={() => (current === 3 ? setPlaced(true) : setCurrent((c) => c + 1))}
              className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white"
            >
              {current === 3 ? 'Confirmar pedido' : 'Siguiente'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
`;
