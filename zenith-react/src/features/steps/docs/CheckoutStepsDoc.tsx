import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Steps } from '../components';
import { CHECKOUT_STEPS_HTML, CHECKOUT_STEPS_TSX } from '../snippets';

const CHECKOUT_STEPS = [
  { label: 'Carrito', description: '2 artículos · 80 €', icon: 'shopping_cart' },
  { label: 'Envío', description: '24-48h · 4,99 €', icon: 'local_shipping' },
  { label: 'Pago', description: 'Tarjeta o PayPal', icon: 'credit_card' },
  { label: 'Revisión', description: 'Confirma el pedido', icon: 'receipt_long' },
];

export const CheckoutStepsDoc = () => {
  const [current, setCurrent] = useState(1);

  return (
    <ComponentDoc
      title="Checkout de compra"
      description="Caso real de e-commerce: carrito, envío, pago y revisión, con total y botón Continuar que avanza el flujo."
      preview={
        <div className="w-full space-y-3 rounded-lg border border-slate-200 p-4">
          <Steps steps={CHECKOUT_STEPS} current={current} onStepChange={setCurrent} />
          <div className="flex items-center justify-between border-t border-slate-100 pt-3">
            <p className="text-sm text-slate-500">
              Total: <span className="font-semibold text-slate-900">84,99 €</span>
            </p>
            <button
              type="button"
              onClick={() => setCurrent((c) => Math.min(CHECKOUT_STEPS.length - 1, c + 1))}
              disabled={current === CHECKOUT_STEPS.length - 1}
              className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-40"
            >
              Continuar
            </button>
          </div>
        </div>
      }
      htmlCode={CHECKOUT_STEPS_HTML}
      jsxCode={CHECKOUT_STEPS_TSX}
      maxWidth="4xl"
    />
  );
};
