import { ComponentDoc } from '../../../shared/components/doc';
import { CheckoutPaymentFlow } from '../components';
import { CHECKOUT_PAYMENT_FLOW_HTML, CHECKOUT_PAYMENT_FLOW_TSX } from '../snippets';

export const CheckoutPaymentFlowDoc = () => {
  return (
    <ComponentDoc
      title="Checkout de pago elaborado"
      description="Flujo completo simulado: carrito con cantidades, envío con dirección y método, pago con tarjeta/PayPal y confirmación con total. Valida cada paso antes de avanzar."
      preview={<CheckoutPaymentFlow />}
      htmlCode={CHECKOUT_PAYMENT_FLOW_HTML}
      jsxCode={CHECKOUT_PAYMENT_FLOW_TSX}
      maxWidth="4xl"
    />
  );
};
