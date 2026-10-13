import { ComponentDoc } from '../../../shared/components/doc';
import { SkeletonStats } from '../components';
import { SKELETON_STATS_HTML, SKELETON_STATS_TSX } from '../snippets';

export const SkeletonStatsDoc = () => {
  return (
    <ComponentDoc
      title="Skeleton Stats"
      description="SEC_06: tres KPIs con etiqueta, valor y barra para dashboards y overviews."
      preview={
        <div className="mx-auto w-full max-w-xl">
          <SkeletonStats />
        </div>
      }
      htmlCode={SKELETON_STATS_HTML}
      jsxCode={SKELETON_STATS_TSX}
    />
  );
};
