import { ComponentDoc } from '../../../shared/components/doc';
import { StatusDraft } from '../components';
import { STATUS_DRAFT_HTML, STATUS_DRAFT_TSX } from '../snippets';

export function StatusDraftDoc() {
  return (
    <ComponentDoc
      title="Borrador con estado sutil"
      description="Card 6.3 mínima: badge draft, revisión, titular y metadata de autoría."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <StatusDraft />
          </div>
        </div>
      }
      htmlCode={STATUS_DRAFT_HTML}
      jsxCode={STATUS_DRAFT_TSX}
    />
  );
}
