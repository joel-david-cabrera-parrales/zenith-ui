import { ComponentDoc } from '../../../shared/components/doc';
import { MediaAccordion } from '../components';
import { MEDIA_HTML, MEDIA_TSX } from '../snippets';

export const MediaAccordionDoc = () => {
  return (
    <ComponentDoc
      title="Portada + specs + CTAs"
      description="Ficha de evento con header oscuro, cover en gradiente, metadatos mono y dos acciones."
      preview={
        <div className="mx-auto w-full max-w-2xl">
          <MediaAccordion />
        </div>
      }
      htmlCode={MEDIA_HTML}
      jsxCode={MEDIA_TSX}
    />
  );
};
