import { ComponentDoc } from '../../../shared/components/doc';
import { MaskedAvatar } from '../components';
import type { AvatarMask } from '../components';
import { AVATAR_MASKS_HTML, AVATAR_MASKS_TSX } from '../snippets';

const MASKS: { mask: AvatarMask; token: string; meta: string; initials: string }[] = [
  { mask: 'hex', token: 'HEXAGON', meta: 'clip: 6-pt', initials: 'JD' },
  { mask: 'oct', token: 'OCTAGON', meta: 'clip: 8-pt', initials: 'AR' },
  { mask: 'shield', token: 'SHIELD', meta: 'security', initials: 'SC' },
  { mask: 'star', token: 'STARBURST', meta: 'clip: star-16', initials: 'EV' },
  { mask: 'diamond', token: 'DIAMOND', meta: 'clip: 4-diag', initials: 'MS' },
  { mask: 'notch', token: 'CUTOUT NOTCH', meta: 'zero overlap', initials: 'TR' },
];

export const AvatarMasksDoc = () => {
  return (
    <ComponentDoc
      title="Máscaras vectoriales & mask cutouts"
      description="Recortes geométricos con clip-path CSS y recorte con beacon anidado sin solape."
      preview={
        <div className="flex flex-wrap items-end gap-4">
          {MASKS.map((item) => (
            <div key={item.token} className="flex flex-col items-center gap-1.5">
              <MaskedAvatar mask={item.mask} initials={item.initials} alt={`Avatar ${item.token}`} />
              <span className="font-mono text-[10px] font-semibold text-blue-700">{item.token}</span>
              <span className="font-mono text-[9px] text-slate-500">{item.meta}</span>
            </div>
          ))}
        </div>
      }
      htmlCode={AVATAR_MASKS_HTML}
      jsxCode={AVATAR_MASKS_TSX}
    />
  );
};
