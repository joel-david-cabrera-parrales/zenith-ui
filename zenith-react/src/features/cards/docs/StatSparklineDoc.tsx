import { ComponentDoc } from '../../../shared/components/doc';
import { StatSparkline } from '../components';
import { STAT_SPARKLINE_HTML, STAT_SPARKLINE_TSX } from '../snippets';
import type { MaxWidth } from '@/shared/components/doc';

interface StatSparklineDocProps {
  maxWidth?: MaxWidth;
}

export const StatSparklineDoc = ({ maxWidth = '4xl' }: StatSparklineDocProps) => {
  return (
    <ComponentDoc
      title="Stat con sparkline y tendencia"
      description="Card 1.1 de stats/KPI: icono, badge de tendencia, valor principal y sparkline SVG de 24h."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <StatSparkline />
          </div>
        </div>
      }
      htmlCode={STAT_SPARKLINE_HTML}
      jsxCode={STAT_SPARKLINE_TSX}
      maxWidth={maxWidth}
    />
  );
};