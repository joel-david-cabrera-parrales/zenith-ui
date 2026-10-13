import { ComponentDoc } from '../../../shared/components/doc';
import { SkeletonProfile } from '../components';
import { SKELETON_PROFILE_HTML, SKELETON_PROFILE_TSX } from '../snippets';

export const SkeletonProfileDoc = () => {
  return (
    <ComponentDoc
      title="Skeleton Perfil"
      description="SEC_04: portada, avatar con anillo, nombre y acciones para usuarios y workspaces."
      preview={
        <div className="mx-auto w-full max-w-xl">
          <SkeletonProfile />
        </div>
      }
      htmlCode={SKELETON_PROFILE_HTML}
      jsxCode={SKELETON_PROFILE_TSX}
    />
  );
};
