import { ComponentDoc } from '../../../shared/components/doc';
import { ProductCatalogTable } from '../components';
import { PRODUCT_CATALOG_HTML, PRODUCT_CATALOG_TSX } from '../snippets';

export const ProductCatalogDoc = () => {
  return (
    <ComponentDoc
      title="Catálogo multicanal con stock editable"
      description="Tabla de productos: miniaturas, canales, stepper de stock con semáforo, precio/margen y switch de publicación. Canales y precio colapsan en móvil."
      preview={
        <div className="w-full">
          <ProductCatalogTable />
        </div>
      }
      htmlCode={PRODUCT_CATALOG_HTML}
      jsxCode={PRODUCT_CATALOG_TSX}
    />
  );
}
