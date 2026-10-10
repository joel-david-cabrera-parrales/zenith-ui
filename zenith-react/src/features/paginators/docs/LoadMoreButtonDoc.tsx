import { ComponentDoc } from '../../../shared/components/doc';
import { LoadMoreButton } from '../components';
import { LOAD_MORE_HTML, LOAD_MORE_TSX } from '../snippets';

export function LoadMoreButtonDoc() {
  return (
    <ComponentDoc
      title="Botón cargar más con progreso"
      description="Trigger explícito con barra porcentual de registros consolidados y estado de carga."
      preview={
        <div className="w-full rounded-xl border border-slate-200 bg-white p-6">
          <LoadMoreButton />
        </div>
      }
      htmlCode={LOAD_MORE_HTML}
      jsxCode={LOAD_MORE_TSX}
    />
  );
}
