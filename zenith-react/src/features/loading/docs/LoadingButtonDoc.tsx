import { ComponentDoc } from '../../../shared/components/doc';
import { Loading } from '../components';
import { LOADING_BUTTON_HTML, LOADING_BUTTON_TSX } from '../snippets';

export const LoadingButtonDoc = () => {
  return (
    <ComponentDoc
      title="Loading — Botón con carga"
      description="Botón deshabilitado con spinner integrado y texto de acción en curso. Mantiene el ancho para evitar saltos de layout."
      preview={
        <button
          type="button"
          disabled
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white opacity-80"
          aria-busy="true"
        >
          <Loading size="small" tone="primary" label="Guardando" />
          Guardando...
        </button>
      }
      htmlCode={LOADING_BUTTON_HTML}
      jsxCode={LOADING_BUTTON_TSX}
    />
  );
};
