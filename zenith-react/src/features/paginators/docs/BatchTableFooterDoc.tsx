import { ComponentDoc } from '../../../shared/components/doc';
import { BatchTableFooter } from '../components';
import { BATCH_TABLE_FOOTER_HTML, BATCH_TABLE_FOOTER_TSX } from '../snippets';

export function BatchTableFooterDoc() {
  return (
    <ComponentDoc
      title="Footer de tabla con acciones batch"
      description="Contador de seleccionados con Eliminar / Exportar y paginación numérica rica."
      preview={
        <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
          <BatchTableFooter />
        </div>
      }
      htmlCode={BATCH_TABLE_FOOTER_HTML}
      jsxCode={BATCH_TABLE_FOOTER_TSX}
    />
  );
}
