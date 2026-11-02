import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { Link, useParams } from 'react-router';
import { ShopCheckoutProgress } from '../components/ShopCheckoutProgress';
import { ShopOrderSummary } from '../components/ShopOrderSummary';
import type { ShopCartItem } from '../context/ShopCartContext';
import { useShopCart } from '../hooks/useShopCart';
import { products } from '../mocks/products';
import './checkout.css';

type DeliveryMethod = 'standard' | 'express';
type PaymentMethod = 'card' | 'paypal';
type DeliveryData = { name: string; email: string; phone: string; address: string; city: string; postalCode: string };

const inputClass = 'mt-1.5 h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100';
const formatPrice = (amount: number) => `${amount.toFixed(2).replace('.', ',')} €`;

const CheckoutField = ({ label, name, value, onChange, type = 'text', autoComplete, placeholder, required = true }: {
  label: string; name: string; value: string; onChange: (value: string) => void; type?: string; autoComplete?: string; placeholder?: string; required?: boolean;
}) => (
  <label className="block text-xs font-semibold text-slate-700">
    {label}
    <input className={inputClass} name={name} type={type} value={value} onChange={event => onChange(event.target.value)} autoComplete={autoComplete} placeholder={placeholder} required={required} />
  </label>
);

const PanelHeading = ({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) => (
  <div className="mb-6">
    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">{eyebrow}</p>
    <h1 className="mt-2 font-serif text-2xl tracking-tight text-slate-950 sm:text-[1.8rem]">{title}</h1>
    <p className="mt-1.5 text-sm leading-6 text-slate-500">{description}</p>
  </div>
);

const StepPanel = ({ children }: { children: ReactNode }) => <div className="checkout-step-enter">{children}</div>;

export const CheckoutPage = () => {
  const { orderId } = useParams();
  const { items: cartItems, clearCart } = useShopCart();
  const directProduct = products.find(product => product.id === orderId);
  const fromCart = orderId === 'cart' || !directProduct;
  const items: ShopCartItem[] = useMemo(
    () => directProduct ? [{ product: directProduct, quantity: 1 }] : cartItems,
    [directProduct, cartItems]
  );
  const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const checkoutItemCount = items.reduce((count, item) => count + item.quantity, 0);
  const [step, setStep] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('standard');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [confirmedTotal, setConfirmedTotal] = useState(0);
  const processTimer = useRef<number | null>(null);
  const [delivery, setDelivery] = useState<DeliveryData>({ name: '', email: '', phone: '', address: '', city: '', postalCode: '' });
  const [card, setCard] = useState({ number: '', expiry: '', cvc: '' });

  const standardShipping = subtotal >= 50 ? 0 : 4.9;
  const shippingCost = deliveryMethod === 'express' ? 9.9 : standardShipping;
  const estimatedDate = deliveryMethod === 'express' ? 'en 1–2 días laborables' : 'en 3–5 días laborables';

  useEffect(() => () => {
    if (processTimer.current !== null) window.clearTimeout(processTimer.current);
  }, []);

  const updateDelivery = (field: keyof DeliveryData, value: string) => setDelivery(current => ({ ...current, [field]: value }));
  const scrollToTop = () => window.scrollTo({
    top: 0,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
  });

  const advanceStep = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep(current => Math.min(current + 1, 3));
    scrollToTop();
  };

  const placeOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessing(true);
    processTimer.current = window.setTimeout(() => {
      setOrderNumber(`CC-${Math.floor(100000 + Math.random() * 900000)}`);
      setConfirmedTotal(subtotal + shippingCost);
      setIsProcessing(false);
      if (fromCart) clearCart();
    }, 1500);
  };

  const backToStep = (previousStep: number) => {
    setStep(previousStep);
    scrollToTop();
  };

  if (orderNumber) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
        <section className="checkout-success-enter w-full max-w-xl rounded-3xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm sm:px-12 sm:py-14">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-100 text-sky-700"><span aria-hidden="true" className="material-symbols-outlined text-[42px]">check</span></div>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700">Pedido confirmado</p>
          <h1 className="mt-2 font-serif text-3xl tracking-tight text-slate-950">Gracias por elegir Casa Clara</h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">Tu pedido está preparado para empezar su camino. Te enviaremos los detalles a <span className="font-semibold text-slate-700">{delivery.email}</span>.</p>
          <div className="mt-7 rounded-2xl bg-slate-50 px-5 py-4 text-left">
            <div className="flex items-center justify-between gap-4 text-sm"><span className="text-slate-500">Número de pedido</span><span className="font-semibold text-slate-900">{orderNumber}</span></div>
            <div className="mt-3 flex items-center justify-between gap-4 border-t border-slate-200 pt-3 text-sm"><span className="text-slate-500">Entrega estimada</span><span className="font-medium text-slate-800">{estimatedDate}</span></div>
            <div className="mt-3 flex items-center justify-between gap-4 border-t border-slate-200 pt-3 text-sm"><span className="text-slate-500">Total pagado · simulado</span><span className="font-semibold text-slate-900">{formatPrice(confirmedTotal)}</span></div>
          </div>
          <p className="mt-4 text-xs text-slate-400">Esta es una demostración: no se realizó ningún cobro real.</p>
          <Link to="/examples/shop" className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-700 px-6 text-sm font-semibold text-white transition hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200">Volver a la tienda <span aria-hidden="true" className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
        </section>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
        <section className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center">
          <span aria-hidden="true" className="material-symbols-outlined text-5xl text-sky-700">shopping_bag</span>
          <h1 className="mt-4 font-serif text-2xl text-slate-900">Tu cesta está vacía</h1>
          <p className="mt-2 text-sm text-slate-500">Añade algo especial para continuar con tu compra.</p>
          <Link to="/examples/shop" className="mt-6 inline-flex h-11 items-center rounded-xl bg-sky-700 px-5 text-sm font-semibold text-white transition hover:bg-sky-800">Explorar la tienda</Link>
        </section>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/examples/shop" className="flex items-center gap-2.5" aria-label="Casa Clara, volver a la tienda">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700"><span aria-hidden="true" className="material-symbols-outlined text-[22px]">storefront</span></span>
            <span className="leading-tight"><span className="block text-sm font-bold tracking-tight text-slate-900">casa clara</span><span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">objetos cotidianos</span></span>
          </Link>
          <Link to={fromCart ? '/examples/shop/shopping-cart' : `/examples/shop/product/${directProduct?.id}`} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 transition hover:text-sky-700 sm:text-sm"><span aria-hidden="true" className="material-symbols-outlined text-[17px]">arrow_back</span><span className="hidden sm:inline">Volver</span></Link>
          <span className="hidden items-center gap-1.5 text-xs font-medium text-slate-400 sm:flex"><span aria-hidden="true" className="material-symbols-outlined text-[17px] text-sky-700">lock</span>Pago seguro</span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-7 sm:px-6 sm:pt-10 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-700">Un último paso para sentirte en casa</p>
            <h1 className="mt-2 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">Finaliza tu compra</h1>
          </div>
          <ShopCheckoutProgress currentStep={step} />
        </div>

        <div className="mx-auto mt-9 grid max-w-6xl items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">
          <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8" aria-live="polite">
            <StepPanel key={step}>
              {step === 1 && (
                <form onSubmit={advanceStep}>
                  <PanelHeading eyebrow="Paso 1 de 3 · Entrega" title="¿A dónde lo enviamos?" description="Cuéntanos cómo podemos hacerte llegar tu pedido." />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2"><CheckoutField label="Nombre y apellidos" name="name" value={delivery.name} onChange={value => updateDelivery('name', value)} autoComplete="name" placeholder="Tu nombre completo" /></div>
                    <CheckoutField label="Correo electrónico" name="email" type="email" value={delivery.email} onChange={value => updateDelivery('email', value)} autoComplete="email" placeholder="nombre@correo.com" />
                    <CheckoutField label="Teléfono" name="phone" type="tel" value={delivery.phone} onChange={value => updateDelivery('phone', value)} autoComplete="tel" placeholder="+34 600 000 000" />
                    <div className="sm:col-span-2"><CheckoutField label="Dirección" name="address" value={delivery.address} onChange={value => updateDelivery('address', value)} autoComplete="street-address" placeholder="Calle, número, piso..." /></div>
                    <CheckoutField label="Ciudad" name="city" value={delivery.city} onChange={value => updateDelivery('city', value)} autoComplete="address-level2" placeholder="Tu ciudad" />
                    <CheckoutField label="Código postal" name="postalCode" value={delivery.postalCode} onChange={value => updateDelivery('postalCode', value)} autoComplete="postal-code" placeholder="28001" />
                  </div>
                  <div className="mt-7 flex justify-end"><button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 text-sm font-semibold text-white transition hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 sm:w-auto">Continuar al envío <span aria-hidden="true" className="material-symbols-outlined text-[18px]">arrow_forward</span></button></div>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={advanceStep}>
                  <PanelHeading eyebrow="Paso 2 de 3 · Envío" title="Elige cómo recibirlo" description="Preparamos cada pedido con cuidado para que llegue perfecto." />
                  <div className="space-y-3">
                    <label className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${deliveryMethod === 'standard' ? 'border-sky-500 bg-sky-50/60 ring-2 ring-sky-100' : 'border-slate-200 hover:border-slate-300'}`}>
                      <input type="radio" name="delivery" value="standard" checked={deliveryMethod === 'standard'} onChange={() => setDeliveryMethod('standard')} className="mt-1 h-4 w-4 accent-sky-700" />
                      <span className="flex-1"><span className="flex items-center justify-between gap-3 text-sm font-semibold text-slate-800"><span>Envío estándar</span><span>{standardShipping === 0 ? 'Gratis' : formatPrice(standardShipping)}</span></span><span className="mt-1 block text-xs leading-5 text-slate-500">Entrega en 3–5 días laborables · cuidado en cada paquete</span></span>
                      <span aria-hidden="true" className="material-symbols-outlined mt-0.5 text-[20px] text-sky-700">local_shipping</span>
                    </label>
                    <label className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${deliveryMethod === 'express' ? 'border-sky-500 bg-sky-50/60 ring-2 ring-sky-100' : 'border-slate-200 hover:border-slate-300'}`}>
                      <input type="radio" name="delivery" value="express" checked={deliveryMethod === 'express'} onChange={() => setDeliveryMethod('express')} className="mt-1 h-4 w-4 accent-sky-700" />
                      <span className="flex-1"><span className="flex items-center justify-between gap-3 text-sm font-semibold text-slate-800"><span>Envío exprés</span><span>{formatPrice(9.9)}</span></span><span className="mt-1 block text-xs leading-5 text-slate-500">Entrega en 1–2 días laborables</span></span>
                      <span aria-hidden="true" className="material-symbols-outlined mt-0.5 text-[20px] text-sky-700">bolt</span>
                    </label>
                  </div>
                  {standardShipping === 0 && <p className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-3.5 py-3 text-xs text-emerald-800"><span aria-hidden="true" className="material-symbols-outlined text-[17px]">redeem</span>Tu pedido tiene envío estándar gratis.</p>}
                  <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between"><button type="button" onClick={() => backToStep(1)} className="flex h-11 items-center justify-center gap-1 rounded-xl px-4 text-sm font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-slate-800"><span aria-hidden="true" className="material-symbols-outlined text-[18px]">arrow_back</span>Volver a entrega</button><button type="submit" className="flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 text-sm font-semibold text-white transition hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200">Continuar al pago <span aria-hidden="true" className="material-symbols-outlined text-[18px]">arrow_forward</span></button></div>
                </form>
              )}

              {step === 3 && (
                <form onSubmit={placeOrder}>
                  <PanelHeading eyebrow="Paso 3 de 3 · Pago" title="Todo listo para tu hogar" description="Selecciona un método de pago. Esta experiencia es una demostración y no realizará ningún cargo." />
                  <div className="space-y-3">
                    <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 transition ${paymentMethod === 'card' ? 'border-sky-500 bg-sky-50/60 ring-2 ring-sky-100' : 'border-slate-200 hover:border-slate-300'}`}><input type="radio" name="payment" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="h-4 w-4 accent-sky-700" /><span className="flex-1 text-sm font-semibold text-slate-800">Tarjeta de crédito o débito</span><span aria-hidden="true" className="material-symbols-outlined text-[20px] text-slate-500">credit_card</span></label>
                    <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 transition ${paymentMethod === 'paypal' ? 'border-sky-500 bg-sky-50/60 ring-2 ring-sky-100' : 'border-slate-200 hover:border-slate-300'}`}><input type="radio" name="payment" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="h-4 w-4 accent-sky-700" /><span className="flex-1 text-sm font-semibold text-slate-800">PayPal</span><span className="text-sm font-bold italic text-sky-800">PayPal</span></label>
                  </div>
                  {paymentMethod === 'card' ? (
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2"><CheckoutField label="Número de tarjeta (de prueba)" name="card-number" value={card.number} onChange={value => setCard(current => ({ ...current, number: value }))} autoComplete="cc-number" placeholder="4242 4242 4242 4242" /></div>
                      <CheckoutField label="Caducidad" name="card-expiry" value={card.expiry} onChange={value => setCard(current => ({ ...current, expiry: value }))} autoComplete="cc-exp" placeholder="MM / AA" />
                      <CheckoutField label="CVC" name="card-cvc" value={card.cvc} onChange={value => setCard(current => ({ ...current, cvc: value }))} autoComplete="cc-csc" placeholder="123" />
                    </div>
                  ) : <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">Al continuar simularemos una autorización de PayPal. No se abrirá ninguna cuenta ni se procesará un pago real.</div>}
                  <label className="mt-5 flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 text-xs leading-5 text-slate-600"><input type="checkbox" required className="mt-0.5 h-4 w-4 accent-sky-700" /><span>Acepto las condiciones de compra. Entiendo que este pago es una simulación.</span></label>
                  <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between"><button type="button" onClick={() => backToStep(2)} disabled={isProcessing} className="flex h-11 items-center justify-center gap-1 rounded-xl px-4 text-sm font-semibold text-slate-500 transition hover:bg-slate-50 hover:text-slate-800 disabled:opacity-50"><span aria-hidden="true" className="material-symbols-outlined text-[18px]">arrow_back</span>Volver a envío</button><button type="submit" disabled={isProcessing} className="flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 text-sm font-semibold text-white transition hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 disabled:cursor-wait disabled:opacity-80"><span aria-hidden="true" className={`material-symbols-outlined text-[18px] ${isProcessing ? 'animate-spin' : ''}`}>{isProcessing ? 'progress_activity' : 'lock'}</span>{isProcessing ? 'Preparando tu pedido…' : `Confirmar pedido · ${formatPrice(subtotal + shippingCost)}`}</button></div>
                </form>
              )}
            </StepPanel>
            <div className="mt-6 flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-[11px] text-slate-400"><span aria-hidden="true" className="material-symbols-outlined text-[16px] text-sky-700">verified_user</span>Tus datos están protegidos · Cambios y devoluciones sencillos</div>
          </section>

          <aside className="space-y-4 lg:sticky lg:top-6">
            <div className="hidden lg:block"><ShopOrderSummary items={items} shippingCost={shippingCost} /></div>
            <details className="group rounded-2xl border border-slate-200 bg-white lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-sm font-semibold text-slate-800"><span>Resumen del pedido · {checkoutItemCount} artículos</span><span aria-hidden="true" className="material-symbols-outlined text-[19px] transition-transform group-open:rotate-180">expand_more</span></summary>
              <div className="border-t border-slate-100 p-4"><ShopOrderSummary items={items} shippingCost={shippingCost} /></div>
            </details>
            <div className="hidden rounded-2xl bg-sky-50/70 p-4 lg:block"><p className="flex items-center gap-2 text-xs font-semibold text-slate-800"><span aria-hidden="true" className="material-symbols-outlined text-[18px] text-sky-700">volunteer_activism</span>Preparado con cuidado</p><p className="mt-1.5 pl-[26px] text-xs leading-5 text-slate-500">Cada pieza viaja protegida y lista para encontrar su lugar en casa.</p></div>
          </aside>
        </div>
      </main>
    </div>
  );
};
