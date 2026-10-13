import { ComponentDoc } from '../../../shared/components/doc';
import { SkeletonList } from '../components';
import { SKELETON_LIST_HTML, SKELETON_LIST_TSX } from '../snippets';

export const SkeletonListDoc = () => {
  return (
    <ComponentDoc
      title="Skeleton Lista"
      description="SEC_02: filas avatar + textos + pill para listas y tablas densas. Tres filas con pulse y aria-busy."
      preview={
        <div className="mx-auto w-full max-w-xl rounded-xl border border-slate-200 bg-white p-4">
          <SkeletonList rows={3} animation="pulse" />
        </div>
      }
      htmlCode={SKELETON_LIST_HTML}
      jsxCode={SKELETON_LIST_TSX}
    />
  );
};
