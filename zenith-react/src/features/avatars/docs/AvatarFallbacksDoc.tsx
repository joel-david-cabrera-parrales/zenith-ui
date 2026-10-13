import { ComponentDoc } from '../../../shared/components/doc';
import { FallbackAvatar } from '../components';
import type { FallbackKind } from '../components';
import { AVATAR_FALLBACKS_HTML, AVATAR_FALLBACKS_TSX } from '../snippets';

const FALLBACKS: { kind: FallbackKind; token: string; meta: string; initials: string; icon: string; label: string }[] = [
  { kind: 'initials', token: 'INITIALS 2-CHAR', meta: 'soft', initials: 'JD', icon: 'person', label: 'John Doe' },
  { kind: 'solid', token: 'INITIALS 2-CHAR', meta: 'solid', initials: 'AR', icon: 'person', label: 'Ana Ramos' },
  { kind: 'silhouette', token: 'SILHOUETTE', meta: 'anon standard', initials: '', icon: 'person', label: 'Vector genérico' },
  { kind: 'bot', token: 'AUTOMATION', meta: 'svc account', initials: '', icon: 'terminal', label: 'Cron Daemon' },
  { kind: 'org', token: 'ORGANIZATION', meta: 'workspace org', initials: '', icon: 'domain', label: 'Zenith Cloud Inc' },
  { kind: 'skeleton', token: 'SKELETON SHIMMER', meta: 'animate-pulse', initials: '', icon: 'person', label: 'Cargando…' },
];

export const AvatarFallbacksDoc = () => {
  return (
    <ComponentDoc
      title="Placeholders & fallback states"
      description="Respaldos resilientes cuando el activo fotográfico falla, no existe o carga en red lenta."
      preview={
        <div className="flex flex-wrap items-end gap-4">
          {FALLBACKS.map((item) => (
            <div key={`${item.token}-${item.label}`} className="flex flex-col items-center gap-1.5">
              <FallbackAvatar kind={item.kind} initials={item.initials} icon={item.icon} alt={item.label} />
              <span className="font-mono text-[10px] font-semibold text-blue-700">{item.token}</span>
              <span className="text-[11px] font-medium text-slate-500">{item.label}</span>
              <span className="font-mono text-[9px] text-slate-400">{item.meta}</span>
            </div>
          ))}
        </div>
      }
      htmlCode={AVATAR_FALLBACKS_HTML}
      jsxCode={AVATAR_FALLBACKS_TSX}
    />
  );
};
