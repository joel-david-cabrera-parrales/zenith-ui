import { ComponentDoc } from '../../../shared/components/doc';
import { ApiEndpoint } from '../components';
import { API_ENDPOINT_HTML, API_ENDPOINT_TSX } from '../snippets';
import type { MaxWidth } from '@/shared/components/doc';

interface ApiEndpointDocProps {
  maxWidth?: MaxWidth;
}

export const ApiEndpointDoc = ({ maxWidth = '4xl' }: ApiEndpointDocProps) => {
  return (
    <ComponentDoc
      title="Endpoint API con snippet"
      description="Card 3.1 técnica: método, ruta, estado, bloque de código oscuro con botón copiar y pie de latencia."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <ApiEndpoint />
          </div>
        </div>
      }
      htmlCode={API_ENDPOINT_HTML}
      jsxCode={API_ENDPOINT_TSX}
      maxWidth={maxWidth}
    />
  );
};