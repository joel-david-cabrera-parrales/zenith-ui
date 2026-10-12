import { ComponentDoc } from '../../../shared/components/doc';
import { ModeSelectMenu } from '../components/ModeSelectMenu';
import { MODE_SELECT_HTML, MODE_SELECT_TSX } from '../snippets/modeSelect.snippet';

export const ModeSelectDoc = () => {
  const handleAction = (id: string) => {
    const labels: Record<string, string> = {
      audit: 'Modo Auditoría Strict (check)',
      readonly: 'Modo Solo Lectura (visibility)',
      turbo: 'Modo Turbo (bolt)',
      zerotrust: 'Zero-Trust (lock)',
    };
    window.alert(`Presionaste: ${labels[id] ?? id}`);
  };

  return (
    <ComponentDoc
      title="Selector de modo operativo"
      description="Dropdown con estados de selección y opción deshabilitada (VAR_01.4): trigger con modo activo y panel flotante con 3 modos seleccionables + Zero-Trust PRO no clicable. Flota sobre el contenido (absolute, no empuja el layout). Cierra con Escape, clic fuera o al elegir opción, con animación de 200ms. Cada opción lanza un alert nativo."
      preview={
        <div className="min-h-72 w-full max-w-xs">
          <ModeSelectMenu onAction={handleAction} />
        </div>
      }
      htmlCode={MODE_SELECT_HTML}
      jsxCode={MODE_SELECT_TSX}
    />
  );
};
