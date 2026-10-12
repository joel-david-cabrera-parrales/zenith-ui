import { ComponentDoc } from '../../../shared/components/doc';
import { GroupedResourcesMenu } from '../components/GroupedResourcesMenu';
import { GROUPED_RESOURCES_HTML, GROUPED_RESOURCES_TSX } from '../snippets/groupedResources.snippet';

export const GroupedResourcesDoc = () => {
  const handleAction = (id: string) => {
    window.alert(`Presionaste: ${id}`);
  };

  return (
    <ComponentDoc
      title="Catálogo de herramientas"
      description="Dropdown con secciones agrupadas (VAR_02.3): trigger con icono category y flyout flotante con 2 grupos (entornos cloud con punto de estado y herramientas locales con meta). Cada recurso lanza un alert nativo."
      preview={
        <div className="min-h-80 w-full max-w-xs">
          <GroupedResourcesMenu onAction={handleAction} />
        </div>
      }
      htmlCode={GROUPED_RESOURCES_HTML}
      jsxCode={GROUPED_RESOURCES_TSX}
    />
  );
};
