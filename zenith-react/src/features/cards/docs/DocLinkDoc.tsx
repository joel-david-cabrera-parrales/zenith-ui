import { ComponentDoc } from '../../../shared/components/doc';
import { DocLink } from '../components';
import { DOC_LINK_HTML, DOC_LINK_TSX } from '../snippets';

export const DocLinkDoc = () => {
  return (
    <ComponentDoc
      title="Enlace a documentación"
      description="Card 6.1 mínima: eyebrow, titular, descripción, tiempo de lectura y acción de configurar."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <DocLink />
          </div>
        </div>
      }
      htmlCode={DOC_LINK_HTML}
      jsxCode={DOC_LINK_TSX}
    />
  );
}
