import { ComponentDoc } from '../../../shared/components/doc';
import { AffixInput, CopyInput, PasswordInput } from '../components';
import {
  INPUT_ACCESSORIES_HTML,
  INPUT_ACCESSORIES_TSX,
} from '../snippets';

export const InputAccessoriesDoc = () => {
  return (
    <ComponentDoc
      title="Inputs con iconos y prefijos"
      description="Icono leading, contraseña con toggle, prefijo, sufijo y botón de copiar integrado."
      preview={
        <div className="w-full space-y-4">
          <div>
            <span className="mb-1 block text-xs font-medium text-slate-600">
              Con Icono Leading (Correo)
            </span>
            <div className="relative">
              <span
                aria-hidden="true"
                className="material-symbols-outlined pointer-events-none absolute top-2.5 left-3 text-lg text-slate-400"
              >
                mail
              </span>
              <input
                type="email"
                placeholder="usuario@zenithdash.io"
                aria-label="Con Icono Leading (Correo)"
                className="h-10 w-full rounded-lg border border-slate-300 bg-white pr-3 pl-10 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>
          <PasswordInput
            label="Con Icono Trailing Interactivo (Ver Contraseña)"
            defaultValue="ClaveUltraSegura123!"
          />
          <AffixInput
            label="Con Prefijo de Protocolo"
            prefix="https://"
            placeholder="portal.evento.com"
          />
          <AffixInput
            label="Con Sufijo de Moneda"
            suffix="USD"
            type="number"
            placeholder="250.00"
          />
          <CopyInput
            label="Con Botón de Acción Integrado (Copiar y ⌘K)"
            value="zenith_live_pk_8849b29e01"
          />
        </div>
      }
      htmlCode={INPUT_ACCESSORIES_HTML}
      jsxCode={INPUT_ACCESSORIES_TSX}
    />
  );
}
