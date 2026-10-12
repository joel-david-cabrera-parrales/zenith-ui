import { ComponentDoc } from '../../../shared/components/doc';
import { CascadeMenu, DropupMenu, EndAlignMenu, StartAlignMenu } from '../components/AlignMenus';
import { ALIGN_MENUS_HTML, ALIGN_MENUS_TSX } from '../snippets/alignMenus.snippet';

export const AlignMenusDoc = () => {
  const handleAction = (id: string) => {
    const labels: Record<string, string> = {
      'export-csv': 'Exportar CSV',
      print: 'Imprimir reporte',
      'download-json': 'Descargar JSON',
      'share-link': 'Compartir enlace',
      shortcuts: 'Configurar atajos',
      theme: 'Alternar tema visual',
      'create-new': 'Crear nuevo',
      'export-binaries': 'Exportar binarios',
      'share-slack': 'Slack Channel #dev-ops (⌘1)',
      'share-teams': 'Webhook de Teams (⌘2)',
      'share-email': 'Email a Administradores (⌘3)',
    };
    window.alert(`Presionaste: ${labels[id] ?? id}`);
  };

  return (
    <ComponentDoc
      title="Posicionamientos y variantes anatómicas"
      description="Motores de alineación del overlay (SEC_04): 4 menús flotantes simples con estado — Start (bottom-start, panel a la izquierda), End (bottom-end, panel a la derecha), Dropup (panel arriba con bottom-full) y Cascada (nivel 1 + submenú nivel 2 expansible). Cada uno flota sobre el contenido (absolute, no empuja el layout), cierra con Escape, clic fuera o al elegir opción, con animación de 200ms. Cada item lanza un alert nativo."
      preview={
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <div className="min-h-64 w-full">
            <StartAlignMenu onAction={handleAction} />
          </div>
          <div className="min-h-64 w-full">
            <EndAlignMenu onAction={handleAction} />
          </div>
          <div className="flex min-h-64 w-full items-end">
            <DropupMenu onAction={handleAction} />
          </div>
          <div className="min-h-80 w-full">
            <CascadeMenu onAction={handleAction} />
          </div>
        </div>
      }
      htmlCode={ALIGN_MENUS_HTML}
      jsxCode={ALIGN_MENUS_TSX}
    />
  );
};
