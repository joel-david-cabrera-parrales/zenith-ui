import { ComponentDoc } from '../../../shared/components/doc';
import { ImageCompare } from '../components';
import { VERTICAL_COMPARE_HTML, VERTICAL_COMPARE_TSX } from '../snippets';

export const VerticalCompareDoc = () => {
  return (
    <ComponentDoc
      title="Vertical"
      description="Comparador vertical: la capa superior se recorta de arriba hacia abajo. Se maneja con arrastre vertical o teclas ↑/↓."
      preview={<ImageCompare orientation="vertical" beforeLabel="ARRIBA" />}
      htmlCode={VERTICAL_COMPARE_HTML}
      jsxCode={VERTICAL_COMPARE_TSX}
      maxWidth="4xl"
    />
  );
};
