import { ComponentDoc } from '../../../shared/components/doc';
import { SkeletonProduct } from '../components';
import { SKELETON_PRODUCT_HTML, SKELETON_PRODUCT_TSX } from '../snippets';

export const SkeletonProductDoc = () => {
  return (
    <ComponentDoc
      title="Skeleton Producto"
      description="SEC_08: thumbnail, título, meta, precio y CTAs para ecommerce y catálogo."
      preview={
        <div className="mx-auto w-full max-w-xl">
          <SkeletonProduct />
        </div>
      }
      htmlCode={SKELETON_PRODUCT_HTML}
      jsxCode={SKELETON_PRODUCT_TSX}
    />
  );
};
