import { ComponentDoc } from '../../../shared/components/doc';
import { PageSizeSelector } from '../components';
import { PAGE_SIZE_HTML, PAGE_SIZE_TSX } from '../snippets';

export function PageSizeSelectorDoc() {
  return (
    <ComponentDoc
      title="Selector de densidad por página"
      description="Regulación del volumen por partición con cálculo reactivo del rango de elementos."
      preview={
        <div className="w-full">
          <PageSizeSelector />
        </div>
      }
      htmlCode={PAGE_SIZE_HTML}
      jsxCode={PAGE_SIZE_TSX}
    />
  );
}
