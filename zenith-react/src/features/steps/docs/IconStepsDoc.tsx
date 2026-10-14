import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Steps } from '../components';
import { ICON_STEPS_HTML, ICON_STEPS_TSX } from '../snippets';

const ICON_DEMO_STEPS = [
  { label: 'Carrito', description: '2 artículos', icon: 'shopping_cart' },
  { label: 'Envío', description: 'Dirección de entrega', icon: 'local_shipping' },
  { label: 'Pago', description: 'Tarjeta o PayPal', icon: 'credit_card' },
];

export const IconStepsDoc = () => {
  const [current, setCurrent] = useState(0);

  return (
    <ComponentDoc
      title="Steps con iconos"
      description="Cada paso muestra su icono material-symbols cuando está activo; al completarse cambia a check. Los pendientes muestran número."
      preview={<Steps steps={ICON_DEMO_STEPS} current={current} onStepChange={setCurrent} />}
      htmlCode={ICON_STEPS_HTML}
      jsxCode={ICON_STEPS_TSX}
      maxWidth="4xl"
    />
  );
};
