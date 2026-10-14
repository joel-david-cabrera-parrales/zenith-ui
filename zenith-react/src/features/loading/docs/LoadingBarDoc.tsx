import { ComponentDoc } from '../../../shared/components/doc';
import { Loading } from '../components';
import { LOADING_BAR_HTML, LOADING_BAR_TSX } from '../snippets';

export const LoadingBarDoc = () => {
  return (
    <ComponentDoc
      title="Loading — Barra"
      description="Barra indeterminada con desplazamiento continuo. Ideal para cargas de archivo y procesos con avance desconocido."
      preview={<Loading variant="bar" label="Cargando contenido" showLabel />}
      htmlCode={LOADING_BAR_HTML}
      jsxCode={LOADING_BAR_TSX}
    />
  );
};
