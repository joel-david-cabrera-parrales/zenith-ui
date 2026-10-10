import { ComponentDoc } from '../../../shared/components/doc';
import { Heading } from '../components';
import { HEADINGS_SCALE_HTML, HEADINGS_SCALE_TSX } from '../snippets';

export function HeadingsScaleDoc() {
  return (
    <ComponentDoc
      title="Escala de titulares y display hero"
      description="Display 2XL→H6 del diseño headings (01), adaptada a la paleta slate/blue."
      preview={
        <div className="w-full bg-white border border-slate-200 rounded-xl divide-y divide-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 space-y-2">
            <span className="font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-semibold">
              DISPLAY 2XL · 60px
            </span>
            <Heading variant="display-2xl">
              Orquestación analítica sin límites
            </Heading>
            <p className="text-xs text-slate-500">
              Mega hero statements para lanzamientos y welcome screens.
            </p>
          </div>
          <div className="p-6 space-y-2">
            <span className="font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-semibold">
              DISPLAY XL · 48px
            </span>
            <Heading variant="display-xl">
              Métricas predictivas en tiempo real
            </Heading>
          </div>
          <div className="p-6 space-y-2">
            <span className="font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-semibold">
              HEADING H1 · 36px
            </span>
            <Heading variant="h1">
              Consola unificada de infraestructura cloud
            </Heading>
          </div>
          <div className="p-6 space-y-2">
            <span className="font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-semibold">
              HEADING H2 · 30px
            </span>
            <Heading variant="h2">
              Rendimiento global del clúster por región
            </Heading>
          </div>
          <div className="p-6 space-y-2">
            <span className="font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-semibold">
              HEADING H3 · 24px
            </span>
            <Heading variant="h3">
              Distribución de tráfico en balanceadores
            </Heading>
          </div>
          <div className="p-6 space-y-2">
            <span className="font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-semibold">
              HEADING H4 · 20px
            </span>
            <Heading variant="h4">
              Configuración de llaves criptográficas API
            </Heading>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <span className="font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-semibold">
                HEADING H5 · 16px
              </span>
              <Heading variant="h5">
                Subsección de inventario de dependencias
              </Heading>
            </div>
            <div className="space-y-2 md:border-l md:border-slate-200 md:pl-6">
              <span className="font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-semibold">
                OVERLINE · 14px
              </span>
              <Heading variant="overline">
                Metadatos de seguridad y auditoría
              </Heading>
            </div>
          </div>
        </div>
      }
      htmlCode={HEADINGS_SCALE_HTML}
      jsxCode={HEADINGS_SCALE_TSX}
    />
  );
}
