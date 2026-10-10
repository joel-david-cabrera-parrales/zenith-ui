import { ComponentDoc } from '../../../shared/components/doc';
import { PageJumpControl } from '../components';
import { PAGE_JUMP_HTML, PAGE_JUMP_TSX } from '../snippets';

export const PageJumpControlDoc = () => {
  return (
    <ComponentDoc
      title="Salto directo a página"
      description="Acceso a índice arbitrario para datasets de más de 1.000 particiones, con validación de rango."
      preview={
        <div className="w-full">
          <PageJumpControl />
        </div>
      }
      htmlCode={PAGE_JUMP_HTML}
      jsxCode={PAGE_JUMP_TSX}
    />
  );
}
