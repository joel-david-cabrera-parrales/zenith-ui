import { ComponentDoc } from '../../../shared/components/doc';
import { Loading } from '../components';
import { LOADING_DOTS_HTML, LOADING_DOTS_TSX } from '../snippets';

export const LoadingDotsDoc = () => {
  return (
    <ComponentDoc
      title="Loading — Dots"
      description="Tres puntos con rebote escalonado. Tono conversacional para búsquedas, chats y respuestas en curso."
      preview={<Loading variant="dots" label="Cargando contenido" showLabel />}
      htmlCode={LOADING_DOTS_HTML}
      jsxCode={LOADING_DOTS_TSX}
    />
  );
};
