import { ComponentDoc } from '../../../shared/components/doc';
import { EventBannerHero } from '../components';
import { EVENT_BANNER_HTML, EVENT_BANNER_TSX } from '../snippets';

export function EventBannerDoc() {
  return (
    <ComponentDoc
      title="Hero banner de evento con countdown"
      description="Hero_05 catálogo secciones: anuncio Summit con fecha, transmisión 4K, cuenta regresiva y doble CTA."
      preview={
        <div className="w-full">
          <EventBannerHero />
        </div>
      }
      htmlCode={EVENT_BANNER_HTML}
      jsxCode={EVENT_BANNER_TSX}
    />
  );
}
