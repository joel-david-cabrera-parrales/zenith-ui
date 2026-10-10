import { ComponentDoc } from '../../../shared/components/doc';
import { PricingTier } from '../components';
import { PRICING_TIER_HTML, PRICING_TIER_TSX } from '../snippets';

export const PricingTierDoc = () => {
  return (
    <ComponentDoc
      title="Tier de precio destacado"
      description="Card 3.4 de precio: cinta RECOMMENDED, precio, lista de inclusiones y CTA de provisión."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <PricingTier />
          </div>
        </div>
      }
      htmlCode={PRICING_TIER_HTML}
      jsxCode={PRICING_TIER_TSX}
    />
  );
}
