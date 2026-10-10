import { ComponentDoc } from '../../../shared/components/doc';
import { TextInput } from '../components';
import { INPUT_STATES_HTML, INPUT_STATES_TSX } from '../snippets';

export function InputStatesDoc() {
  return (
    <ComponentDoc
      title="Estados"
      description="Normal, placeholder, con valor, focused, disabled, error y éxito."
      preview={
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <TextInput label="Normal / Default" defaultValue="" />
          <TextInput
            label="Placeholder Visible"
            placeholder="nombre.apellido@dominio.com"
          />
          <TextInput
            label="Con Valor Asignado"
            defaultValue="Zenith Key Alpha 092"
            className="bg-slate-50 font-medium"
          />
          <div>
            <span className="mb-1 block text-xs font-semibold text-blue-600">
              Focused (Activo)
            </span>
            <input
              type="text"
              defaultValue="Enfoque de usuario actual"
              aria-label="Focused (Activo)"
              className="h-10 w-full rounded-lg border-2 border-blue-600 bg-slate-50 px-3 text-sm text-slate-900 ring-2 ring-blue-600/20 outline-none"
            />
          </div>
          <TextInput
            label="Disabled / Inactivo"
            defaultValue="Parámetro bloqueado por sistema"
            disabled
          />
          <TextInput
            label="Error / Inválido"
            state="error"
            defaultValue="token_invalido_formato"
            message="Formato de token incorrecto"
          />
          <div className="sm:col-span-2">
            <TextInput
              label="Éxito / Válido"
              state="success"
              defaultValue="identificador-evento-confirmado"
              message="Identificador disponible para su uso"
            />
          </div>
        </div>
      }
      htmlCode={INPUT_STATES_HTML}
      jsxCode={INPUT_STATES_TSX}
    />
  );
}
