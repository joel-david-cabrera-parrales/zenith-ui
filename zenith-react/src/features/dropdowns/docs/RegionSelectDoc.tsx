import { ComponentDoc } from '../../../shared/components/doc';
import { RegionSelect } from '../components/RegionSelect';
import { REGION_SELECT_HTML, REGION_SELECT_TSX } from '../snippets/regionSelect.snippet';

export const RegionSelectDoc = () => {
  const handleAction = (id: string) => {
    window.alert(`Presionaste: ${id}`);
  };

  return (
    <ComponentDoc
      title="Selección de región cloud"
      description="Selector con búsqueda en vivo (VAR_02.1): trigger con icono public y flyout flotante con input de búsqueda, contador de hits, lista filtrable de 4 regiones con latencia y descripción, y footer con total indexado. Filtra mientras escribes y cada opción lanza un alert nativo."
      preview={
        <div className="min-h-80 w-full max-w-xs">
          <RegionSelect onAction={handleAction} />
        </div>
      }
      htmlCode={REGION_SELECT_HTML}
      jsxCode={REGION_SELECT_TSX}
    />
  );
};
