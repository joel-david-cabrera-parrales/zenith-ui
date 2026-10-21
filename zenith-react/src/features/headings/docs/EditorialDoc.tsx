import { ComponentDoc } from '../../../shared/components/doc';
import {
  Blockquote,
  Callout,
  CheckList,
  KeyValueList,
  StepsList,
} from '../components';
import { EDITORIAL_HTML, EDITORIAL_TSX } from '../snippets';
import { useTheme } from '@/shared/hooks/useTheme';

export const EditorialDoc = () => {
  const { dark } = useTheme();
  return (
    <ComponentDoc
      title="Contenido editorial, citas y listas"
      description="Blockquote, callouts y patrones de lista del diseño headings (03)."
      preview={
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          <div className={`bg-white border border-slate-200 rounded-xl p-6 shadow-sm ${dark ? "dark:bg-dark-raised dark:border-dark-border dark:shadow-none" : ""}`}>
            <span className={`font-mono text-[10px] ${dark ? "text-slate-400" : "text-slate-500"} uppercase font-bold block mb-4`}>
              BLOCKQUOTE // CITATION
            </span>
            <Blockquote
              author="Dra. Valeria Rostova"
              role="VP of Systems Architecture • Zenith Cloud Corp"
              initials="DR"
            >
              &quot;La consistencia tipográfica no es un detalle decorativo; es
              la estructura cognitiva mediante la cual los ingenieros toman
              decisiones de alta presión en segundos.&quot;
            </Blockquote>
          </div>
          <div className={`bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4 ${dark ? "dark:bg-dark-raised dark:border-dark-border dark:shadow-none" : ""}`}>
            <span className={`font-mono text-[10px] ${dark ? "text-slate-400" : "text-slate-500"} uppercase font-bold block`}>
              CALLOUTS // NOTIFICATION CONTAINERS
            </span>
            <Callout tone="info" title="Nota de configuración de telemetría">
              Las rutas de depuración TCP se deshabilitan por omisión en
              instancias de producción sin mTLS.
            </Callout>
            <Callout tone="success" title="Despliegue verificado en nodo edge">
              Compilación validada contra SHA-256 e implementada en 12
              clústeres satélites.
            </Callout>
            <Callout tone="warning" title="Límite de memoria cercano al umbral">
              El contenedor worker-04 alcanzó 88% de RAM asignada. Considere
              autoescalar.
            </Callout>
          </div>
          <div className={`bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6 ${dark ? "dark:bg-dark-raised dark:border-dark-border dark:shadow-none" : ""}`}>
            <span className={`font-mono text-[10px] ${dark ? "text-slate-400" : "text-slate-500"} uppercase font-bold block`}>
              LIST PATTERNS // MULTI-STYLE
            </span>
            <div className="space-y-2">
              <span className={`text-xs font-semibold ${dark ? "text-slate-400" : "text-slate-500"} uppercase tracking-wider block`}>
                Lista de verificación técnica
              </span>
              <CheckList
                items={[
                  'Aislamiento de VPC verificado',
                  'Rotación de tokens cada 24 horas',
                  'Registro inmutable en S3 Vault',
                ]}
              />
            </div>
            <hr className={`border-slate-200 ${dark ? "dark:border-dark-border" : ""}`} />
            <div className="space-y-2">
              <span className={`text-xs font-semibold ${dark ? "text-slate-400" : "text-slate-500"} uppercase tracking-wider block`}>
                Pipeline secuencial
              </span>
              <StepsList
                items={[
                  'Ingesta y normalización de paquetes UDP',
                  'Validación con modelo heurístico Zenith',
                  'Persistencia particionada en SSD distribuido',
                ]}
              />
            </div>
            <hr className={`border-slate-200 ${dark ? "dark:border-dark-border" : ""}`} />
            <div className="space-y-2">
              <span className={`text-xs font-semibold ${dark ? "text-slate-400" : "text-slate-500"} uppercase tracking-wider block`}>
                Pares clave-valor
              </span>
              <KeyValueList
                items={[
                  { term: 'RUNTIME_ENGINE', value: 'Node.js 20.x Alpine' },
                  {
                    term: 'CONCURRENCY_CAP',
                    value: '25,000 req/sec',
                    accent: true,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      }
      htmlCode={EDITORIAL_HTML}
      jsxCode={EDITORIAL_TSX}
    />
  );
};
