import { ComponentDoc } from '../../../shared/components/doc';
import { AvatarGroup } from '../components';
import { AVATAR_GROUPS_HTML, AVATAR_GROUPS_TSX } from '../snippets';

export const AvatarGroupsDoc = () => {
  return (
    <ComponentDoc
      title="Agrupación & avatar groups"
      description="Apilamiento LTR, contador de desborde y expansión con hover reactivo. Paleta slate/blue con iniciales."
      preview={
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-2 font-mono text-[10px] font-semibold text-slate-500">STANDARD LTR OVERLAP · -space-x-2</p>
            <AvatarGroup
              members={[{ initials: 'JD' }, { initials: 'AR' }, { initials: 'SC' }, { initials: 'EV' }]}
            />
          </div>
          <div>
            <p className="mb-2 font-mono text-[10px] font-semibold text-slate-500">GROUP WITH OVERFLOW · +12 PILL</p>
            <AvatarGroup
              members={[
                { initials: 'JD' },
                { initials: 'AR' },
                { initials: 'SC' },
                { initials: 'EV' },
                { initials: 'MS' },
                { initials: 'TR' },
                { initials: 'JM' },
                { initials: 'ZF' },
                { initials: 'KL' },
                { initials: 'NP' },
                { initials: 'QR' },
                { initials: 'ST' },
                { initials: 'UV' },
                { initials: 'WX' },
                { initials: 'YZ' },
              ]}
              max={3}
            />
          </div>
          <div>
            <p className="mb-2 font-mono text-[10px] font-semibold text-slate-500">HOVER-EXPAND DYNAMIC · PASA EL CURSOR</p>
            <AvatarGroup
              members={[
                { initials: 'JD' },
                { initials: 'SC' },
                { initials: 'BOT', icon: 'smart_toy' },
                { initials: 'AR' },
              ]}
              expandOnHover
            />
          </div>
        </div>
      }
      htmlCode={AVATAR_GROUPS_HTML}
      jsxCode={AVATAR_GROUPS_TSX}
    />
  );
};
