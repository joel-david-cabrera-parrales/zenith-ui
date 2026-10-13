import { ComponentDoc } from '../../../shared/components/doc';
import { RingedAvatar } from '../components';
import type { AvatarRing } from '../components';
import { AVATAR_RINGS_HTML, AVATAR_RINGS_TSX } from '../snippets';

const RINGS: { ring: AvatarRing; token: string; meta: string; initials: string }[] = [
  { ring: 'offset', token: 'OFFSET RING', meta: 'ring-offset-2', initials: 'JD' },
  { ring: 'focus', token: 'FOCUS GLOW', meta: 'ring-4 ring-blue-600/40', initials: 'AR' },
  { ring: 'success', token: 'SUCCESS RING', meta: 'ring-emerald-600', initials: 'SC' },
  { ring: 'critical', token: 'CRITICAL RING', meta: 'ring-red-600', initials: 'KL' },
  { ring: 'gradient', token: 'VIP GRADIENT', meta: 'linear-gradient', initials: 'EV' },
  { ring: 'double', token: 'DOUBLE RIM', meta: 'double-rim-spec', initials: 'MS' },
];

export const AvatarRingsDoc = () => {
  return (
    <ComponentDoc
      title="Anillos de estado & ring variants"
      description="Sistema perimetral de anillo semántico con foco, offset, gradiente VIP y doble aro."
      preview={
        <div className="flex flex-wrap items-end gap-4">
          {RINGS.map((item) => (
            <div key={item.token} className="flex flex-col items-center gap-1.5">
              <RingedAvatar ring={item.ring} initials={item.initials} alt={`Avatar ${item.token}`} />
              <span className="font-mono text-[10px] font-semibold text-blue-700">{item.token}</span>
              <span className="font-mono text-[9px] text-slate-500">{item.meta}</span>
            </div>
          ))}
        </div>
      }
      htmlCode={AVATAR_RINGS_HTML}
      jsxCode={AVATAR_RINGS_TSX}
    />
  );
};
