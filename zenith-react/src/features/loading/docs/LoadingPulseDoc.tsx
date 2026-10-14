import { ComponentDoc } from '../../../shared/components/doc';
import { Loading } from '../components';
import { LOADING_PULSE_HTML, LOADING_PULSE_TSX } from '../snippets';

export const LoadingPulseDoc = () => {
  return (
    <ComponentDoc
      title="Loading — Pulso"
      description="Punto sólido que respira con escala y opacidad. Señal ambiental para actividad en segundo plano."
      preview={<Loading variant="pulse" label="Cargando contenido" showLabel />}
      htmlCode={LOADING_PULSE_HTML}
      jsxCode={LOADING_PULSE_TSX}
    />
  );
};
