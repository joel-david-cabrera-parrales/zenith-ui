import { ComponentDoc } from '../../../shared/components/doc';
import { Avatar } from '../components';
import { AVATAR_SIZES_HTML, AVATAR_SIZES_TSX } from '../snippets';

const SIZES = [
  { size: '2xs' as const, token: '2XS', px: '16px', initials: 'JD' },
  { size: 'xs' as const, token: 'XS', px: '20px', initials: 'AR' },
  { size: 'sm' as const, token: 'SM', px: '28px', initials: 'SC' },
  { size: 'md' as const, token: 'MD', px: '36px', initials: 'EV', highlight: true },
  { size: 'lg' as const, token: 'LG', px: '48px', initials: 'MS' },
  { size: 'xl' as const, token: 'XL', px: '64px', initials: 'TR' },
  { size: '2xl' as const, token: '2XL', px: '80px', initials: 'JM' },
  { size: '3xl' as const, token: '3XL', px: '96px', initials: 'ZF' },
];

export const AvatarSizesDoc = () => {
  return (
    <ComponentDoc
      title="Escala de tamaños & size tokens"
      description="8 escalones normalizados (16px — 96px) para micro-badges, tablas densas, nav, cards y perfiles hero. Paleta slate/blue con iniciales (sin fotos externas)."
      preview={
        <div className="flex flex-wrap items-end gap-4">
          {SIZES.map((item) => (
            <div key={item.token} className="flex flex-col items-center gap-1.5">
              <Avatar
                size={item.size}
                initials={item.initials}
                alt={`Avatar ${item.token}`}
                className={item.highlight === true ? 'bg-blue-600 text-white ring-2 ring-blue-600/40' : ''}
              />
              <span className="font-mono text-[10px] font-semibold text-blue-700">
                {item.token}
                {item.highlight === true ? ' · DEFAULT' : ''}
              </span>
              <span className="font-mono text-[9px] text-slate-500">{item.px}</span>
            </div>
          ))}
        </div>
      }
      htmlCode={AVATAR_SIZES_HTML}
      jsxCode={AVATAR_SIZES_TSX}
    />
  );
};
