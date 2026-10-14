import { ComponentDoc } from '../../../shared/components/doc';
import { Loading } from '../components';
import { LOADING_SPINNER_HTML, LOADING_SPINNER_TSX } from '../snippets';

export const LoadingSpinnerDoc = () => {
  return (
    <ComponentDoc
      title="Loading — Spinner"
      description="Indicador circular clásico con rotación continua. Uso general para esperas cortas en cualquier superficie."
      preview={<Loading variant="spinner" label="Cargando contenido" showLabel />}
      htmlCode={LOADING_SPINNER_HTML}
      jsxCode={LOADING_SPINNER_TSX}
    />
  );
};
