import { ComponentDoc } from '../../../shared/components/doc';
import { LabeledField } from '../components';
import { MICROCOPY_HTML, MICROCOPY_TSX } from '../snippets';

export function MicrocopyDoc() {
  return (
    <ComponentDoc
      title="Microcopy, formularios y estados"
      description="Labels, helpers y estados default/error/success/disabled del diseño headings (04). La entrada es el foco del microcopy, no del catálogo forms."
      preview={
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LabeledField
              label="Dominio Canónico del Clúster"
              defaultValue="prod-api-edge.zenith.internal"
              badge="DEFAULT"
              helper="Debe coincidir exactamente con el certificado TLS cargado."
            />
            <LabeledField
              label="Puerto de Telemetría UDP"
              defaultValue="99999"
              state="error"
              badge="INVALID"
              helper="Rango no permitido: el puerto debe estar entre 1024 y 65535."
            />
            <LabeledField
              label="Token de Autorización Webhook"
              defaultValue="zth_live_sec_892301fa38"
              state="success"
              badge="VERIFIED"
              helper="Firma RSA-4096 verificada correctamente en el proveedor."
            />
            <LabeledField
              label="Expresión Cron de Respaldo"
              placeholder="ej. 0 */4 * * * (Cada cuatro horas)"
              badge="PLACEHOLDER"
              helper="Placeholder estándar estilizado en cursiva suave."
            />
            <LabeledField
              label="ID de Inquilino Primario (Bloqueado)"
              defaultValue="tenant_enterprise_9481940"
              state="disabled"
              badge="READONLY"
              helper="Modificable únicamente por administradores de organización."
            />
          </div>
        </div>
      }
      htmlCode={MICROCOPY_HTML}
      jsxCode={MICROCOPY_TSX}
    />
  );
}
