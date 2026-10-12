import { ComponentDoc } from '../../../shared/components/doc';
import { KebabMenu } from '../components/KebabMenu';
import { KEBAB_MENU_HTML, KEBAB_MENU_TSX } from '../snippets/kebabMenu.snippet';

export const KebabMenuDoc = () => {
  const handleAction = (id: string) => {
    const labels: Record<string, string> = {
      telemetry: 'Ver telemetría viva (open_in_new)',
      restart: 'Reiniciar pod k8s (replay)',
      rotate: 'Rotar API secret (key)',
      terminate: 'Forzar terminación (stop_circle)',
    };
    window.alert(`Presionaste: ${labels[id] ?? id}`);
  };

  return (
    <ComponentDoc
      title="Menú contextual kebab"
      description="Menú contextual con trigger de icono more_vert (VAR_01.2): fila con id de recurso y panel flotante con 3 acciones + separador + terminación destructiva. Flota sobre el contenido (absolute, no empuja el layout). Cierra con Escape, clic fuera o al elegir opción, con animación de 200ms. Cada opción lanza un alert nativo."
      preview={
        <div className="min-h-72 w-full max-w-xs">
          <KebabMenu onAction={handleAction} />
        </div>
      }
      htmlCode={KEBAB_MENU_HTML}
      jsxCode={KEBAB_MENU_TSX}
    />
  );
};
