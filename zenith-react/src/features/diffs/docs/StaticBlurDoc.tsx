import { ComponentDoc } from '../../../shared/components/doc';
import { ImageCompare } from '../components';
import { STATIC_BLUR_HTML, STATIC_BLUR_TSX } from '../snippets';

export const StaticBlurDoc = () => {
  return (
    <ComponentDoc
      title="Blur fijo"
      description="El blur no cambia al mover el manejador: siempre 8px. Solo se mueve la línea de corte."
      preview={<ImageCompare blurMode="fixed" fixedBlur={8} />}
      htmlCode={STATIC_BLUR_HTML}
      jsxCode={STATIC_BLUR_TSX}
      maxWidth="4xl"
    />
  );
};
