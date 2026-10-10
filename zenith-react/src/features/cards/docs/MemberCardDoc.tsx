import { ComponentDoc } from '../../../shared/components/doc';
import { MemberCard } from '../components';
import { MEMBER_CARD_HTML, MEMBER_CARD_TSX } from '../snippets';
import type { MaxWidth } from '@/shared/components/doc';

interface MemberCardDocProps {
  maxWidth?: MaxWidth;
}

export const MemberCardDoc = ({ maxWidth = '4xl' }: MemberCardDocProps) => {
  return (
    <ComponentDoc
      title="Miembro con rol"
      description="Card 6.4 mínima: iniciales, nombre/rol, indicador en línea y acción secundaria."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <MemberCard />
          </div>
        </div>
      }
      htmlCode={MEMBER_CARD_HTML}
      jsxCode={MEMBER_CARD_TSX}
      maxWidth={maxWidth}
    />
  );
};