import { ComponentDoc } from '../../../shared/components/doc';
import { AccentNotice } from '../components';
import { ACCENT_NOTICE_HTML, ACCENT_NOTICE_TSX } from '../snippets';

export const AccentNoticeDoc = () => {
  return (
    <ComponentDoc
      title="Aviso con acento lateral"
      description="Card 6.6 mínima: borde lateral de categoría, badge de auditoría y enlace de evidencia."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <AccentNotice />
          </div>
        </div>
      }
      htmlCode={ACCENT_NOTICE_HTML}
      jsxCode={ACCENT_NOTICE_TSX}
    />
  );
}
