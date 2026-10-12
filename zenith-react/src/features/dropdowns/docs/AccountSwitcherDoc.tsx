import { ComponentDoc } from '../../../shared/components/doc';
import { AccountSwitcher } from '../components/AccountSwitcher';
import { ACCOUNT_SWITCHER_HTML, ACCOUNT_SWITCHER_TSX } from '../snippets/accountSwitcher.snippet';

export const AccountSwitcherDoc = () => {
  const handleAction = (id: string) => {
    const labels: Record<string, string> = {
      'workspace-zenith': 'Workspace Zenith Prod Infrastructure',
      'workspace-hyperion': 'Workspace Hyperion Labs R&D',
      profile: 'Configuración de Perfil',
      security: 'Seguridad y Llaves SSH',
      billing: 'Facturación y Licencias',
      logout: 'Cerrar Sesión Global (ESC)',
    };
    window.alert(`Presionaste: ${labels[id] ?? id}`);
  };

  return (
    <ComponentDoc
      title="Menú de cuenta y jerarquía"
      description="Dropdown rico de cuenta (VAR_03.1): trigger de perfil con avatar AD y flyout flotante con tarjeta de organización, cuota 78%, switch de workspace con estado, 3 links y cierre de sesión global. Flota sobre el contenido (absolute, no empuja el layout). Cierra con Escape, clic fuera o al elegir opción, con animación de 200ms. Cada acción lanza un alert nativo."
      preview={
        <div className="min-h-[560px] w-full max-w-sm">
          <AccountSwitcher onAction={handleAction} />
        </div>
      }
      htmlCode={ACCOUNT_SWITCHER_HTML}
      jsxCode={ACCOUNT_SWITCHER_TSX}
    />
  );
};
