import { ComponentDoc } from '../../../shared/components/doc';
import { InfiniteFeedStatus } from '../components';
import { INFINITE_FEED_HTML, INFINITE_FEED_TSX } from '../snippets';

export function InfiniteFeedStatusDoc() {
  return (
    <ComponentDoc
      title="Feed infinito con skeleton"
      description="Centinela de fin de lista con shimmer sutil y badge de dataset sincronizado."
      preview={
        <div className="w-full rounded-xl border border-slate-200 bg-white p-6">
          <InfiniteFeedStatus />
        </div>
      }
      htmlCode={INFINITE_FEED_HTML}
      jsxCode={INFINITE_FEED_TSX}
    />
  );
}
