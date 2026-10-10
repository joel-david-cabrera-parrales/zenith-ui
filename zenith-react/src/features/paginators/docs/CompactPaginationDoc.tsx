import { ComponentDoc } from '../../../shared/components/doc';
import { CompactPagination } from '../components';
import { COMPACT_PAGINATION_HTML, COMPACT_PAGINATION_TSX } from '../snippets';

export const CompactPaginationDoc = () => {
  return (
    <ComponentDoc
      title="Paginador compacto pill"
      description="Variante redondeada de baja superficie para tarjetas flotantes, drawers y modales densos."
      preview={
        <div className="w-full">
          <CompactPagination />
        </div>
      }
      htmlCode={COMPACT_PAGINATION_HTML}
      jsxCode={COMPACT_PAGINATION_TSX}
    />
  );
}
