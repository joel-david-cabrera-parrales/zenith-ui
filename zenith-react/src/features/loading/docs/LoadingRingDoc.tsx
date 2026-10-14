import { ComponentDoc } from '../../../shared/components/doc';
import { Loading } from '../components';
import { LOADING_RING_HTML, LOADING_RING_TSX } from '../snippets';

export const LoadingRingDoc = () => {
  return (
    <ComponentDoc
      title="Loading — Anillo"
      description="Anillo tenue con núcleo pulsante. Doble señal de progreso para pantallas de espera destacadas."
      preview={<Loading variant="ring" label="Cargando contenido" showLabel />}
      htmlCode={LOADING_RING_HTML}
      jsxCode={LOADING_RING_TSX}
    />
  );
};
