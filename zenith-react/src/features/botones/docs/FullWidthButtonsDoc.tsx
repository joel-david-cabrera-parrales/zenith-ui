import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../components';
import {
  FULL_WIDTH_BUTTONS_HTML,
  FULL_WIDTH_BUTTONS_TSX,
} from '../snippets';

export const FullWidthButtonsDoc = () => {
  return (
    <ComponentDoc
      title="Ancho completo (full width)"
      description="Botones fluidos que ocupan todo el ancho disponible."
      preview={
        <div className="grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
          <Button leadingIcon="login" className="w-full justify-center py-2.5">
            Iniciar Sesión
          </Button>
          <Button variant="outline" className="w-full justify-center py-2.5">
            Cancelar
          </Button>
        </div>
      }
      htmlCode={FULL_WIDTH_BUTTONS_HTML}
      jsxCode={FULL_WIDTH_BUTTONS_TSX}
    />
  );
}
