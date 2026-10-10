import { ComponentDoc } from '../../../shared/components/doc';
import { CompactTableFooter } from '../components';
import { COMPACT_TABLE_FOOTER_HTML, COMPACT_TABLE_FOOTER_TSX } from '../snippets';

export function CompactTableFooterDoc() {
  return (
    <ComponentDoc
      title="Footer de tabla compacto"
      description="Contador Página X de Y con segmento Anterior / Siguiente para widgets y modales densos."
      preview={
        <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
          <CompactTableFooter />
        </div>
      }
      htmlCode={COMPACT_TABLE_FOOTER_HTML}
      jsxCode={COMPACT_TABLE_FOOTER_TSX}
    />
  );
}
