import { ComponentDoc } from '../../../shared/components/doc';
import { ThumbnailTags } from '../components';
import { THUMBNAIL_TAGS_HTML, THUMBNAIL_TAGS_TSX } from '../snippets';

export function ThumbnailTagsDoc() {
  return (
    <ComponentDoc
      title="Thumbnail 16:9 con tags"
      description="Card 2.3 de media: miniatura con badge, pills de tags, autor y marcador con estado (clic para guardar)."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <ThumbnailTags />
          </div>
        </div>
      }
      htmlCode={THUMBNAIL_TAGS_HTML}
      jsxCode={THUMBNAIL_TAGS_TSX}
    />
  );
}
