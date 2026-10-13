import { ComponentDoc } from '../../../shared/components/doc';
import { ImageCompare } from '../components';
import { IMAGE_COMPARE_HTML, IMAGE_COMPARE_TSX } from '../snippets';

export const ImageCompareDoc = () => {
  return (
    <ComponentDoc
      title="Diff"
      description="Comparador nítido vs blur con manejador arrastrable. Al mover el manejador se actualiza la posición y la intensidad del blur."
      preview={<ImageCompare />}
      htmlCode={IMAGE_COMPARE_HTML}
      jsxCode={IMAGE_COMPARE_TSX}
      maxWidth="4xl"
    />
  );
};
