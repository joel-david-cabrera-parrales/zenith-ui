import { ComponentDoc } from '../../../shared/components/doc';
import { BrandingStudioHero } from '../components';
import { BRANDING_STUDIO_HTML, BRANDING_STUDIO_TSX } from '../snippets';

export const BrandingStudioDoc = () => {
  return (
    <ComponentDoc
      title="Hero branding con canvas vectorial"
      description="Hero_03 marketing/foto: espécimen tipográfico, swatches Pantone, retícula áurea y mockup de packaging."
      preview={
        <div className="w-full">
          <BrandingStudioHero />
        </div>
      }
      htmlCode={BRANDING_STUDIO_HTML}
      jsxCode={BRANDING_STUDIO_TSX}
    />
  );
}
