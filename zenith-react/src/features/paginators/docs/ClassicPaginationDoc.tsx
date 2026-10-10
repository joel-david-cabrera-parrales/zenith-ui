import { ComponentDoc } from '../../../shared/components/doc';
import { ClassicPagination } from '../components';
import { CLASSIC_PAGINATION_HTML, CLASSIC_PAGINATION_TSX } from '../snippets';

export function ClassicPaginationDoc() {
  return (
    <ComponentDoc
      title="Paginador clásico segmentado"
      description="Botones numéricos simétricos con elipsis en saltos largos y navegadores Anterior / Siguiente."
      preview={
        <div className="w-full">
          <ClassicPagination />
        </div>
      }
      htmlCode={CLASSIC_PAGINATION_HTML}
      jsxCode={CLASSIC_PAGINATION_TSX}
    />
  );
}
