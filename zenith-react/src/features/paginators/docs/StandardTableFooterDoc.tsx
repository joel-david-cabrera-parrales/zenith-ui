import { ComponentDoc } from '../../../shared/components/doc';
import { StandardTableFooter } from '../components';
import { STANDARD_TABLE_FOOTER_HTML, STANDARD_TABLE_FOOTER_TSX } from '../snippets';

export function StandardTableFooterDoc() {
  return (
    <ComponentDoc
      title="Footer de tabla estándar SaaS"
      description="Info de registros, selector segmentado de filas y navegación primera / anterior / siguiente / última."
      preview={
        <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
          <StandardTableFooter />
        </div>
      }
      htmlCode={STANDARD_TABLE_FOOTER_HTML}
      jsxCode={STANDARD_TABLE_FOOTER_TSX}
    />
  );
}
