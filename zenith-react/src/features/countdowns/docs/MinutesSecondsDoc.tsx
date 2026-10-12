import { ComponentDoc } from '../../../shared/components/doc';
import { MinutesSecondsTimer } from '../components';
import { MINUTES_SECONDS_HTML, MINUTES_SECONDS_TSX } from '../snippets';

export const MinutesSecondsDoc = () => (
  <ComponentDoc
    title="Minutos + segundos"
    description="T-SCALE MM:SS para reserva de slots y checkout (SEC_01.2): cajas MIN/SEG con dos puntos pulsante y badge de slot activo que cambia a expirado al llegar a cero."
    preview={
      <div className="w-full max-w-xs">
        <MinutesSecondsTimer />
      </div>
    }
    htmlCode={MINUTES_SECONDS_HTML}
    jsxCode={MINUTES_SECONDS_TSX}
  />
);
