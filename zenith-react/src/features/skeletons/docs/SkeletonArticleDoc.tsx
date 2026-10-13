import { ComponentDoc } from '../../../shared/components/doc';
import { SkeletonArticle } from '../components';
import { SKELETON_ARTICLE_HTML, SKELETON_ARTICLE_TSX } from '../snippets';

export const SkeletonArticleDoc = () => {
  return (
    <ComponentDoc
      title="Skeleton Artículo"
      description="SEC_03: titular, meta y párrafos para posts y docs. Anchos decrecientes y avatar de autor."
      preview={
        <div className="mx-auto w-full max-w-xl">
          <SkeletonArticle />
        </div>
      }
      htmlCode={SKELETON_ARTICLE_HTML}
      jsxCode={SKELETON_ARTICLE_TSX}
    />
  );
};
