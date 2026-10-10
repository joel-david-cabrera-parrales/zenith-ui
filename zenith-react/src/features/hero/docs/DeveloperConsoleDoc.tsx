import { ComponentDoc } from '../../../shared/components/doc';
import { DeveloperConsoleHero } from '../components';
import { DEVELOPER_CONSOLE_HTML, DEVELOPER_CONSOLE_TSX } from '../snippets';

export const DeveloperConsoleDoc = () => {
  return (
    <ComponentDoc
      title="Hero developer-first con consola"
      description="Hero_04 catálogo secciones: comando SDK con copiar y visor JSON oscuro con estado HTTP 200."
      preview={
        <div className="w-full">
          <DeveloperConsoleHero />
        </div>
      }
      htmlCode={DEVELOPER_CONSOLE_HTML}
      jsxCode={DEVELOPER_CONSOLE_TSX}
    />
  );
}
