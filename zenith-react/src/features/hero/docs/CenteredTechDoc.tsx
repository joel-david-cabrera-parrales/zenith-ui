import { ComponentDoc } from '../../../shared/components/doc';
import { CenteredTechHero } from '../components';
import { CENTERED_TECH_HTML, CENTERED_TECH_TSX } from '../snippets';

export const CenteredTechDoc = () => {
  return (
    <ComponentDoc
      title="Hero SaaS centrado con terminal"
      description="Hero_01 catálogo secciones: badge de versión, titular con gradiente, doble CTA y consola CLI/REST/SDK con copiar."
      preview={
        <div className="w-full">
          <CenteredTechHero />
        </div>
      }
      htmlCode={CENTERED_TECH_HTML}
      jsxCode={CENTERED_TECH_TSX}
    />
  );
}
