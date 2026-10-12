import { ComponentDoc } from '../../../shared/components/doc';
import { EventCountdown } from '../components';
import { EVENT_COUNTDOWN_HTML, EVENT_COUNTDOWN_TSX } from '../snippets';

export const EventCountdownDoc = () => (
  <ComponentDoc
    title="Countdown de banner de evento"
    description="Contador del hero EventBanner (Hero_05): 4 cajas DÍAS/HORAS/MIN/SEG con cuenta viva. El hero lo reutiliza como fuente única."
    preview={
      <div className="flex w-full justify-center">
        <EventCountdown />
      </div>
    }
    htmlCode={EVENT_COUNTDOWN_HTML}
    jsxCode={EVENT_COUNTDOWN_TSX}
  />
);
