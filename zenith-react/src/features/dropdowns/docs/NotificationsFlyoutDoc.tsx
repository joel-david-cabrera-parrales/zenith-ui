import { ComponentDoc } from '../../../shared/components/doc';
import { NotificationsFlyout } from '../components/NotificationsFlyout';
import { NOTIFICATIONS_FLYOUT_HTML, NOTIFICATIONS_FLYOUT_TSX } from '../snippets/notificationsFlyout.snippet';

export const NotificationsFlyoutDoc = () => {
  const handleAction = (id: string) => {
    const labels: Record<string, string> = {
      pipeline: 'Fallo de Pipeline #4901 (2m atrás)',
      deploy: 'Despliegue a Staging OK (14m atrás)',
      'api-key': 'Llave API por expirar (1h atrás)',
      'mark-all-read': 'Marcar todo como leído',
      'audit-center': 'Centro de Auditoría',
    };
    window.alert(`Presionaste: ${labels[id] ?? id}`);
  };

  return (
    <ComponentDoc
      title="Flyout de notificaciones"
      description="Flyout de telemetría y alertas (VAR_03.2): trigger de barra con badge 3 y panel flotante con header, tabs Todas/No leídas con filtro por estado y 3 notificaciones + footer. Flota sobre el contenido (absolute, no empuja el layout). Cierra con Escape, clic fuera o al elegir opción, con animación de 200ms. Cada botón lanza un alert nativo."
      preview={
        <div className="min-h-[560px] w-full max-w-sm">
          <NotificationsFlyout onAction={handleAction} />
        </div>
      }
      htmlCode={NOTIFICATIONS_FLYOUT_HTML}
      jsxCode={NOTIFICATIONS_FLYOUT_TSX}
    />
  );
};
