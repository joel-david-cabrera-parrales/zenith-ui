import { ComponentDoc } from '../../../shared/components/doc';
import { RepoCard } from '../components';
import { REPO_CARD_HTML, REPO_CARD_TSX } from '../snippets';
import type { MaxWidth } from '@/shared/components/doc';

interface RepoCardDocProps {
  maxWidth?: MaxWidth;
}

export const RepoCardDoc = ({ maxWidth = '4xl' }: RepoCardDocProps) => {
  return (
    <ComponentDoc
      title="Repo card individual"
      description="Unidad base del showcase (05): icono, rama, badge de estado, lenguaje y acción de apertura."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <RepoCard />
          </div>
        </div>
      }
      htmlCode={REPO_CARD_HTML}
      jsxCode={REPO_CARD_TSX}
      maxWidth={maxWidth}
    />
  );
};