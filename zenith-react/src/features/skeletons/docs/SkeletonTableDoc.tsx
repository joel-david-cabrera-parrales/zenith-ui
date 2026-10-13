import { ComponentDoc } from '../../../shared/components/doc';
import { SkeletonTable } from '../components';
import { SKELETON_TABLE_HTML, SKELETON_TABLE_TSX } from '../snippets';

export const SkeletonTableDoc = () => {
  return (
    <ComponentDoc
      title="Skeleton Tabla"
      description="SEC_05: toolbar, filas con avatar y badge, y footer de paginación. Responsive con columna oculta en móvil."
      preview={
        <div className="mx-auto w-full max-w-xl">
          <SkeletonTable rows={4} />
        </div>
      }
      htmlCode={SKELETON_TABLE_HTML}
      jsxCode={SKELETON_TABLE_TSX}
    />
  );
};
