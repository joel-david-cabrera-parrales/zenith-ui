import { ComponentDoc } from '../../../shared/components/doc';
import { MarketingGrowthHero } from '../components';
import { MARKETING_GROWTH_HTML, MARKETING_GROWTH_TSX } from '../snippets';
import type { MaxWidth } from '@/shared/components/doc';



interface MarketingGrowthDocProps {
  maxWidth?: MaxWidth;
}

export const MarketingGrowthDoc = ({ maxWidth = '4xl' }: MarketingGrowthDocProps) => {
  return (
    <ComponentDoc
      title="Hero marketing con funnel omnicanal"
      description="Hero_01 marketing/foto: copy predictivo, métricas +340%/12M/4.2x y consola de funnel con selector de canal."
      preview={
        <div className="w-full">
          <MarketingGrowthHero />
        </div>
      }
      htmlCode={MARKETING_GROWTH_HTML}
      jsxCode={MARKETING_GROWTH_TSX}
    />
  );
}
