import { ComponentDoc } from '../../../shared/components/doc';
import { ClusterMaintenanceBanner } from '../components';
import { CLUSTER_BANNER_HTML, CLUSTER_BANNER_TSX } from '../snippets';

export const ClusterBannerDoc = () => (
  <ComponentDoc
    title="Banner de mantenimiento de clúster"
    description="CASO_B infraestructura (SEC_04.2): banner oscuro persistente con ventana restante viva, barra de progreso y badge DRAINING que pasa a COMPLETE."
    preview={
      <div className="w-full max-w-md">
        <ClusterMaintenanceBanner />
      </div>
    }
    htmlCode={CLUSTER_BANNER_HTML}
    jsxCode={CLUSTER_BANNER_TSX}
  />
);
