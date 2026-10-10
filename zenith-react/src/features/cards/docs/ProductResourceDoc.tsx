import { ComponentDoc } from '../../../shared/components/doc';
import { ProductResource } from '../components';
import { PRODUCT_RESOURCE_HTML, PRODUCT_RESOURCE_TSX } from '../snippets';
import type { MaxWidth } from '@/shared/components/doc';

interface ProductResourceDocProps {
  maxWidth?: MaxWidth;
}

export const ProductResourceDoc = ({ maxWidth = '4xl' }: ProductResourceDocProps) => {
  return (
    <ComponentDoc
      title="Producto / recurso con CTA"
      description="Card 2.4 de media: vista de producto con badge de estado, versión, licencia y botón de instalación a ancho completo."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-xs">
            <ProductResource />
          </div>
        </div>
      }
      htmlCode={PRODUCT_RESOURCE_HTML}
      jsxCode={PRODUCT_RESOURCE_TSX}
      maxWidth={maxWidth}
    />
  );
};