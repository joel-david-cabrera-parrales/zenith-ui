import { ComponentDoc } from '../../../shared/components/doc';
import { SkeletonForm } from '../components';
import { SKELETON_FORM_HTML, SKELETON_FORM_TSX } from '../snippets';

export const SkeletonFormDoc = () => {
  return (
    <ComponentDoc
      title="Skeleton Formulario"
      description="SEC_07: labels, inputs, textarea y CTAs para crear/editar y settings."
      preview={
        <div className="mx-auto w-full max-w-xl">
          <SkeletonForm />
        </div>
      }
      htmlCode={SKELETON_FORM_HTML}
      jsxCode={SKELETON_FORM_TSX}
    />
  );
};
