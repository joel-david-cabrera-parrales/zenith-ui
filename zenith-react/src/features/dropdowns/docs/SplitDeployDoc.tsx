import { ComponentDoc } from '../../../shared/components/doc';
import { SplitDeployButton } from '../components/SplitDeployButton';
import { SPLIT_DEPLOY_HTML, SPLIT_DEPLOY_TSX } from '../snippets/splitDeploy.snippet';

export const SplitDeployDoc = () => {
  const handleAction = (id: string) => {
    const labels: Record<string, string> = {
      staging: 'Desplegar en Staging (DEF)',
      canary: 'Desplegar en Canary 10%',
      production: 'Promover a Producción',
      schedule: 'Programar ejecución (schedule)',
    };
    window.alert(`Presionaste: ${labels[id] ?? id}`);
  };

  return (
    <ComponentDoc
      title="Botón dual de despliegue"
      description="Botón partido con acción principal y chevron (VAR_01.3): Crear Despliegue + panel flotante con Staging, Canary 10%, Producción y acción de programar. Flota sobre el contenido (absolute, no empuja el layout). Cierra con Escape, clic fuera o al elegir opción, con animación de 200ms. Cada opción lanza un alert nativo."
      preview={
        <div className="min-h-72 w-full max-w-xs">
          <SplitDeployButton onAction={handleAction} onMain={() => window.alert('Presionaste: Crear Despliegue')} />
        </div>
      }
      htmlCode={SPLIT_DEPLOY_HTML}
      jsxCode={SPLIT_DEPLOY_TSX}
    />
  );
};
