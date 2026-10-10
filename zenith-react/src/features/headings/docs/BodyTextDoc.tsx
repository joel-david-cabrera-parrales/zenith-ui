import { ComponentDoc } from '../../../shared/components/doc';
import { BodyText } from '../components';
import { BODY_TEXT_HTML, BODY_TEXT_TSX } from '../snippets';

export const BodyTextDoc = () => {
  return (
    <ComponentDoc
      title="Párrafos, legibilidad y formato en línea"
      description="Lead, body editorial/dashboard y captions del diseño headings (02), con espécimen semántico inline."
      preview={
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-blue-600 font-bold">
                LEAD / HERO PARAGRAPH
              </span>
              <BodyText size="lead">
                La plataforma Zenith Dash acelera el ciclo de ingeniería
                distribuyendo telemetría en tiempo real con cero sobrecarga en
                nodos perimetrales.
              </BodyText>
            </div>
            <hr className="border-slate-200" />
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-blue-600 font-bold">
                BODY REGULAR / LARGE (EDITORIAL)
              </span>
              <BodyText size="base">
                El motor reactivo procesa millones de transacciones por segundo.
                La visualización tabular desacopla las mutaciones del render
                principal garantizando 60 FPS.
              </BodyText>
            </div>
            <hr className="border-slate-200" />
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-blue-600 font-bold">
                BODY MEDIUM / STANDARD (DASHBOARD)
              </span>
              <BodyText size="sm">
                Estado de sincronización completado para la región us-east-1.
                Todas las réplicas reportan latencia menor a 14ms.
              </BodyText>
            </div>
            <hr className="border-slate-200" />
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-blue-600 font-bold">
                BODY SMALL / CAPTIONS
              </span>
              <BodyText size="caption">
                Última actualización: 2025-05-18 14:32:09 UTC • Commit SHA:
                8a4f91e • Certificado DigiCert Global Root G2.
              </BodyText>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between shadow-sm space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-blue-600 font-bold">
                INLINE TEXT FORMATTING SPECIMEN
              </span>
              <BodyText size="base">
                Dentro de Zenith Dash podemos combinar{' '}
                <strong className="font-bold text-slate-900">
                  texto en negrita con peso 700
                </strong>{' '}
                para conceptos críticos, <em className="italic text-slate-900">énfasis cursivo sutil</em> y
                comandos como{' '}
                <code className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-xs text-blue-600 font-medium">
                  kubectl rollout status
                </code>
                .
              </BodyText>
              <BodyText size="base">
                Los enlaces integran{' '}
                <a
                  href="#doc-link"
                  className="text-blue-600 font-medium underline underline-offset-4 decoration-blue-600/40 hover:decoration-blue-600 transition"
                >
                  documentación interactiva de APIs
                </a>
                , versiones deprecadas{' '}
                <del className="line-through text-slate-400">
                  v1.12 legacy endpoints
                </del>{' '}
                y <mark className="bg-blue-100 text-blue-900 px-1 rounded">resaltado institucional</mark>.
              </BodyText>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-2">
              <span className="font-mono text-[10px] text-slate-500 uppercase font-bold block">
                Paleta de inline elements
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <div className="bg-white p-2 rounded border border-slate-200 text-center">
                  <span className="font-bold">Bold:</span> 700 weight
                </div>
                <div className="bg-white p-2 rounded border border-slate-200 text-center">
                  <span className="italic">Italic:</span> oblique 10°
                </div>
                <div className="bg-white p-2 rounded border border-slate-200 text-center font-mono text-blue-600 text-xs">
                  Code: JetBrains
                </div>
                <div className="bg-white p-2 rounded border border-slate-200 text-center underline text-blue-600">
                  Links: offset-4
                </div>
                <div className="bg-white p-2 rounded border border-slate-200 text-center line-through text-slate-400">
                  Strikethrough
                </div>
                <div className="bg-blue-100 text-blue-900 p-2 rounded text-center font-medium">
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
}
