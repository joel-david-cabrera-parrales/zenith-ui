import { ComponentDoc } from '../../../shared/components/doc';
import { LOADING_FORM_FIELD_HTML, LOADING_FORM_FIELD_TSX } from '../snippets';

export const LoadingFormFieldDoc = () => {
  return (
    <ComponentDoc
      title="Loading — Campo de formulario"
      description="Spinner dentro de un input deshabilitado mientras se buscan resultados. El icono no captura eventos y respeta el padding del campo."
      preview={
        <div className="max-w-sm">
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            Buscando resultados
          </label>
          <div className="relative">
            <input
              type="text"
              defaultValue=" zenith"
              disabled
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 pr-10 text-sm text-slate-500"
              aria-busy="true"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin"
              aria-hidden="true"
            />
          </div>
        </div>
      }
      htmlCode={LOADING_FORM_FIELD_HTML}
      jsxCode={LOADING_FORM_FIELD_TSX}
    />
  );
};
