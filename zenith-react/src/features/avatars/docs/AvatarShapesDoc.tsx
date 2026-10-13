import { ComponentDoc } from '../../../shared/components/doc';
import { Avatar } from '../components';
import type { AvatarShape } from '../components';
import { AVATAR_SHAPES_HTML, AVATAR_SHAPES_TSX } from '../snippets';

const SHAPES: { shape: AvatarShape; token: string; radius: string; initials: string; solid?: boolean }[] = [
  { shape: 'circle', token: 'CIRCULAR', radius: 'rounded-full', initials: 'JD' },
  { shape: 'soft', token: 'SOFT 8PX', radius: 'rounded-lg', initials: 'AR' },
  { shape: 'smooth', token: 'SMOOTH 12PX', radius: 'rounded-xl', initials: 'SC' },
  { shape: 'squircle', token: 'SQUIRCLE 16PX', radius: 'rounded-2xl', initials: 'EV' },
  { shape: 'sharp', token: 'SHARP 0PX', radius: 'rounded-none', initials: 'KL', solid: true },
];

export const AvatarShapesDoc = () => {
  return (
    <ComponentDoc
      title="Variantes de redondeo & geometrías"
      description="Control paramétrico del radio perimetral adaptado a la paleta slate/blue con iniciales."
      preview={
        <div className="flex flex-wrap items-end gap-4">
          {SHAPES.map((item) => (
            <div key={item.token} className="flex flex-col items-center gap-1.5">
              <Avatar
                size="xl"
                shape={item.shape}
                initials={item.initials}
                alt={`Avatar ${item.token}`}
                className={item.solid === true ? 'bg-slate-800 text-white ring-slate-800' : ''}
              />
              <span className="font-mono text-[10px] font-semibold text-blue-700">{item.token}</span>
              <span className="font-mono text-[9px] text-slate-500">{item.radius}</span>
            </div>
          ))}
        </div>
      }
      htmlCode={AVATAR_SHAPES_HTML}
      jsxCode={AVATAR_SHAPES_TSX}
    />
  );
};
