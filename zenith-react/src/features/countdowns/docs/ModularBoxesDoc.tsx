import { ComponentDoc } from '../../../shared/components/doc';
import { ModularBoxesCountdown } from '../components';
import { MODULAR_BOXES_HTML, MODULAR_BOXES_TSX } from '../snippets';

export const ModularBoxesDoc = () => (
  <ComponentDoc
    title="Cajas modulares monospace"
    description="VAR_03 SaaS minimal (SEC_02.3): contenedor único de alta densidad con dos puntos pulsantes y segundos en azul."
    preview={
      <div className="w-full max-w-md">
        <ModularBoxesCountdown />
      </div>
    }
    htmlCode={MODULAR_BOXES_HTML}
    jsxCode={MODULAR_BOXES_TSX}
  />
);
