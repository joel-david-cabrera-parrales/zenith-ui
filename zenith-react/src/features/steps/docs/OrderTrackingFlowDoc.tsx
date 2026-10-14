import { ComponentDoc } from '../../../shared/components/doc';
import { OrderTrackingFlow } from '../components';
import { ORDER_TRACKING_FLOW_HTML, ORDER_TRACKING_FLOW_TSX } from '../snippets';

export const OrderTrackingFlowDoc = () => {
  return (
    <ComponentDoc
      title="Seguimiento de pedido elaborado"
      description="Tracking vertical simulado con panel de detalle: progreso %, detalle del bulto expandible, simular avance y aviso de entrega."
      preview={<OrderTrackingFlow />}
      htmlCode={ORDER_TRACKING_FLOW_HTML}
      jsxCode={ORDER_TRACKING_FLOW_TSX}
      maxWidth="4xl"
    />
  );
};
