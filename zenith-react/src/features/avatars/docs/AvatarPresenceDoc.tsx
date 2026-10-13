import { ComponentDoc } from '../../../shared/components/doc';
import { PresenceAvatar } from '../components';
import type { PresenceStatus } from '../components';
import { AVATAR_PRESENCE_HTML, AVATAR_PRESENCE_TSX } from '../snippets';

const STATES: { status: PresenceStatus; token: string; meta: string; initials: string }[] = [
  { status: 'online', token: 'ONLINE', meta: 'ping-pulse active', initials: 'JD' },
  { status: 'busy', token: 'DND / BUSY', meta: 'solid red + minus', initials: 'AR' },
  { status: 'away', token: 'AWAY / IDLE', meta: 'amber clock beacon', initials: 'SC' },
  { status: 'call', token: 'IN CALL', meta: 'call micro-badge', initials: 'EV' },
  { status: 'offline', token: 'OFFLINE', meta: 'grayscale hollow', initials: 'MS' },
];

export const AvatarPresenceDoc = () => {
  return (
    <ComponentDoc
      title="Indicadores de presencia & beacons"
      description="Estados en tiempo real con posicionamiento polar y balizas animadas, cada uno con role=status y etiqueta textual."
      preview={
        <div className="flex flex-wrap items-end gap-4">
          {STATES.map((item) => (
            <div key={item.token} className="flex flex-col items-center gap-1.5">
              <PresenceAvatar status={item.status} initials={item.initials} alt={`Avatar ${item.token}`} />
              <span className="font-mono text-[10px] font-semibold text-blue-700">{item.token}</span>
              <span className="font-mono text-[9px] text-slate-500">{item.meta}</span>
            </div>
          ))}
        </div>
      }
      htmlCode={AVATAR_PRESENCE_HTML}
      jsxCode={AVATAR_PRESENCE_TSX}
    />
  );
};
