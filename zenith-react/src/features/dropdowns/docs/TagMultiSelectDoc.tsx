import { ComponentDoc } from '../../../shared/components/doc';
import { TagMultiSelect } from '../components/TagMultiSelect';
import { TAG_MULTI_SELECT_HTML, TAG_MULTI_SELECT_TSX } from '../snippets/tagMultiSelect.snippet';

export const TagMultiSelectDoc = () => {
  const handleApply = (ids: string[]) => {
    window.alert(`Presionaste: Aplicar filtros (${ids.join(', ') || 'sin tags'})`);
  };

  return (
    <ComponentDoc
      title="Filtro de tags y entornos"
      description="Multi-select con checkboxes y chips (VAR_02.2): trigger con chips de tags seleccionados y flyout flotante con barra de acción (contador, seleccionar todos, limpiar), 4 checkboxes con conteo de pods y botón para aplicar filtros. Aplicar lanza un alert nativo con los ids."
      preview={
        <div className="min-h-96 w-full max-w-xs">
          <TagMultiSelect onApply={handleApply} />
        </div>
      }
      htmlCode={TAG_MULTI_SELECT_HTML}
      jsxCode={TAG_MULTI_SELECT_TSX}
    />
  );
};
