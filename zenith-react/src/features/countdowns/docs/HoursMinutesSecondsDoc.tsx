import { ComponentDoc } from '../../../shared/components/doc';
import { HoursMinutesSecondsTimer } from '../components';
import { HOURS_MINUTES_SECONDS_HTML, HOURS_MINUTES_SECONDS_TSX } from '../snippets';

export const HoursMinutesSecondsDoc = () => (
  <ComponentDoc
    title="Horas + minutos + segundos"
    description="T-SCALE HH:MM:SS para ventanas de mantenimiento y sync de réplicas (SEC_01.3): tres cajas H/M/S con etiqueta DB_REPLICA_SYNC_WINDOW y estado EN CURSO que pasa a COMPLETADO."
    preview={
      <div className="w-full max-w-xs">
        <HoursMinutesSecondsTimer />
      </div>
    }
    htmlCode={HOURS_MINUTES_SECONDS_HTML}
    jsxCode={HOURS_MINUTES_SECONDS_TSX}
  />
);
