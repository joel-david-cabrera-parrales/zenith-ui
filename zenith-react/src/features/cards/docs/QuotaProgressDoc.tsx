import { ComponentDoc } from '../../../shared/components/doc';
import { QuotaProgress } from '../components';
import { QUOTA_PROGRESS_HTML, QUOTA_PROGRESS_TSX } from '../snippets';
import type { MaxWidth } from '@/shared/components/doc';

interface QuotaProgressDocProps {
  maxWidth?: MaxWidth;
}

export const QuotaProgressDoc = ({ maxWidth = '4xl' }: QuotaProgressDocProps) => {
  return (
    <ComponentDoc
      title="Stat de cuota con progreso"
      description="Card 1.2 de stats/KPI: valor porcentual, barra segmentada multi-parte y pie con estado y ETA."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <QuotaProgress />
          </div>
        </div>
      }
      htmlCode={QUOTA_PROGRESS_HTML}
      jsxCode={QUOTA_PROGRESS_TSX}
      maxWidth={maxWidth}
    />
  );
};