import { ComponentDoc } from '../../../shared/components/doc';
import { SplitFormHero } from '../components';
import { SPLIT_FORM_HTML, SPLIT_FORM_TSX } from '../snippets';
import type { MaxWidth } from '@/shared/components/doc';



interface SplitFormDocProps {
  maxWidth?: MaxWidth;
}

export const SplitFormDoc = ({ maxWidth = '4xl' }: SplitFormDocProps) => {
  return (
    <ComponentDoc
      title="Hero split 50/50 con formulario"
      description="Hero_02 catálogo secciones: captación de leads con checklist, stack compatible y formulario de API key con validación."
      preview={
        <div className="w-full">
          <SplitFormHero />
        </div>
      }
      htmlCode={SPLIT_FORM_HTML}
      jsxCode={SPLIT_FORM_TSX}
    />
  );
}
