import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../components';
import { BUTTON_ICONS_HTML, BUTTON_ICONS_TSX } from '../snippets';

export function ButtonIconsDoc() {
  return (
    <ComponentDoc
      title="Iconografía"
      description="Icono leading, trailing, dual, con badge contador y con atajo de teclado."
      preview={
        <div className="flex w-full flex-wrap items-center gap-3">
          <Button leadingIcon="add">Crear Nuevo</Button>
          <Button variant="secondary" trailingIcon="arrow_forward">
            Continuar
          </Button>
          <Button
            variant="outline"
            leadingIcon="cloud_upload"
            trailingIcon="expand_more"
          >
            Cargar Archivo
          </Button>
          <Button variant="outline" leadingIcon="notifications" badge="5">
            Notificaciones
          </Button>
          <Button variant="outline" leadingIcon="search" shortcut="⌘K">
            Buscar
          </Button>
        </div>
      }
      htmlCode={BUTTON_ICONS_HTML}
      jsxCode={BUTTON_ICONS_TSX}
    />
  );
}
