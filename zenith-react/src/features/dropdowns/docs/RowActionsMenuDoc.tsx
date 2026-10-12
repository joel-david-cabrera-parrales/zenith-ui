import { ComponentDoc } from '../../../shared/components/doc';
import { RowActionsMenu } from '../components';
import { ROW_ACTIONS_MENU_HTML, ROW_ACTIONS_MENU_TSX } from '../snippets';

export const RowActionsMenuDoc = () => {
  const handleAction = (id: string) => {
    const labels: Record<string, string> = {
      edit: 'Editar recurso (⌘E)',
      duplicate: 'Duplicar elemento (⌘D)',
      archive: 'Archivar en cloud (⌘A)',
      delete: 'Eliminar recurso (⌫)',
    };
    window.alert(`Presionaste: ${labels[id] ?? id}`);
  };

  return (
    <ComponentDoc
      title="Menú de acciones de fila"
      description="Dropdown clásico con atajos (VAR_01.1): trigger con icono tune y flyout flotante con 3 acciones + separador + acción destructiva. Flota sobre el contenido (absolute, no empuja el layout). Cierra con Escape, clic fuera o al elegir opción, con animación de entrada y salida de 200ms. Cada opción lanza un alert nativo."
      preview={
        <div className="min-h-72 w-full max-w-xs">
          <RowActionsMenu onAction={handleAction} />
        </div>
      }
      htmlCode={ROW_ACTIONS_MENU_HTML}
      jsxCode={ROW_ACTIONS_MENU_TSX}
    />
  );
};
