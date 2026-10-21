import { ComponentDoc } from '../../../shared/components/doc';
import { BodyText } from '../components';
import { BODY_TEXT_HTML, BODY_TEXT_TSX } from '../snippets';
import { useTheme } from '@/shared/hooks/useTheme';

export const BodyTextDoc = () => {
  const { dark } = useTheme();
  return (
    <ComponentDoc
      title="Párrafos, legibilidad y formato en línea"
      description="Lead, body editorial/dashboard y captions del diseño headings (02), con espécimen semántico inline."
      preview={
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          <div className={`bg-white border border-slate-200 rounded-xl p-6 space-y-6 shadow-sm ${dark ? "dark:bg-dark-raised dark:border-dark-border dark:shadow-none" : ""}`}>
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400 font-bold">
                LEAD / HERO PARAGRAPH
              </span>
              <BodyText size="lead">
                La plataforma Zenith Dash acelera el ciclo de ingeniería
                distribuyendo telemetría en tiempo real con cero sobrecarga en
                nodos perimetrales.
              </BodyText>
            </div>
            <hr className={`border-slate-200 ${dark ? "dark:border-dark-border" : ""}`} />
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400 font-bold">
                BODY REGULAR / LARGE (EDITORIAL)
              </span>
              <BodyText size="base">
                El motor reactivo procesa millones de transacciones por segundo.
                La visualización tabular desacopla las mutaciones del render
                principal garantizando 60 FPS.
              </BodyText>
            </div>
            <hr className={`border-slate-200 ${dark ? "dark:border-dark-border" : ""}`} />
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400 font-bold">
                BODY MEDIUM / STANDARD (DASHBOARD)
              </span>
              <BodyText size="sm">
                Estado de sincronización completado para la región us-east-1.
                Todas las réplicas reportan latencia menor a 14ms.
              </BodyText>
            </div>
            <hr className={`border-slate-200 ${dark ? "dark:border-dark-border" : ""}`} />
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400 font-bold">
                BODY SMALL / CAPTIONS
              </span>
              <BodyText size="caption">
                Última actualización: 2025-05-18 14:32:09 UTC • Commit SHA:
                8a4f91e • Certificado DigiCert Global Root G2.
              </BodyText>
            </div>
          </div>
          <div className={`bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between shadow-sm space-y-6 ${dark ? "dark:bg-dark-raised dark:border-dark-border dark:shadow-none" : ""}`}>
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400 font-bold">
                INLINE TEXT FORMATTING SPECIMEN
              </span>
              <BodyText size="base">
                Dentro de Zenith Dash podemos combinar{' '}
                <strong className={`font-bold ${dark ? "text-white" : "text-slate-900"}`}>
                  texto en negrita con peso 700
                </strong>{' '}
                para conceptos críticos, <em className={`italic ${dark ? "text-slate-200" : "text-slate-900"}`}>énfasis cursivo sutil</em> y
                comandos como{' '}
                <code className={`px-1.5 py-0.5 rounded ${dark ? "bg-dark-overlay" : "bg-slate-100"} font-mono text-xs ${dark ? "text-slate-300" : "text-blue-600"} font-medium`}>
                  kubectl rollout status
                </code>
                .
              </BodyText>
              <BodyText size="base">
                Los enlaces integran{' '}
                <a
                  href="#doc-link"
                  className={`text-blue-600 dark:text-blue-400 font-medium underline underline-offset-4 decoration-blue-600/40 dark:decoration-blue-400/40 hover:decoration-blue-600 dark:hover:decoration-blue-400 transition`}
                >
                  documentación interactiva de APIs
                </a>
                , versiones deprecadas{' '}
                <del className="line-through text-slate-400">
                  v1.12 legacy endpoints
                </del>{' '}
                y <mark className="bg-blue-100 text-blue-900 dark:bg-blue-900/20 dark:text-blue-300 px-1 rounded">resaltado institucional</mark>.
              </BodyText>
            </div>
            <div className={`bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-2 ${dark ? "dark:bg-dark-overlay dark:border-dark-border" : ""}`}>
              <span className={`font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold block`}>
                Paleta de inline elements
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <div className={`bg-white p-2 rounded border border-slate-200 text-center ${dark ? "dark:bg-dark-overlay dark:border-dark-border" : ""}`}>
                  <span className="font-bold">Bold:</span> 700 weight
                </div>
                <div className={`bg-white p-2 rounded border border-slate-200 text-center ${dark ? "dark:bg-dark-overlay dark:border-dark-border" : ""}`}>
                  <span className="italic">Italic:</span> oblique 10°
                </div>
                <div className={`bg-white p-2 rounded border border-slate-200 text-center font-mono ${dark ? "text-blue-400" : "text-blue-600"} text-xs ${dark ? "dark:bg-dark-overlay" : ""}`}>
                  Code: JetBrains
                </div>
                <div className={`bg-white p-2 rounded border border-slate-200 text-center underline ${dark ? "text-blue-400" : "text-blue-600"} ${dark ? "dark:bg-dark-overlay" : ""}`}>
                  Links: offset-4
                </div>
                <div className={`bg-white p-2 rounded border border-slate-200 text-center line-through text-slate-400 ${dark ? "dark:bg-dark-overlay dark:border-dark-border" : ""}`}>
                  Strikethrough
                </div>
                <div className="bg-blue-100 text-blue-900 p-2 rounded text-center font-medium dark:bg-blue-900/20 dark:text-blue-300">
                  Mark Highlight
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      htmlCode={BODY_TEXT_HTML}
      jsxCode={BODY_TEXT_TSX}
    />
  );
};
