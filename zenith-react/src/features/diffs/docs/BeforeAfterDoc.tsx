import { ComponentDoc } from '../../../shared/components/doc';
import { ImageCompare } from '../components';
import { BEFORE_AFTER_HTML, BEFORE_AFTER_TSX } from '../snippets';

export const BeforeAfterDoc = () => {
  return (
    <ComponentDoc
      title="Antes / Después"
      description="Dos fotos distintas sin blur: margaritas vs ciudad. Útil para comparar estados, versiones o ediciones."
      preview={
        <ImageCompare
          blurMode="none"
          afterSrc="https://picsum.photos/seed/city/900/500"
          alt="Comparador antes y después"
          beforeLabel="ANTES"
          afterLabel="DESPUÉS"
        />
      }
      htmlCode={BEFORE_AFTER_HTML}
      jsxCode={BEFORE_AFTER_TSX}
      maxWidth="4xl"
    />
  );
};
