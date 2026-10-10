import { AffixInput } from './AffixInput';
import { FileDropzone } from './FileDropzone';
import { Select } from './Select';
import { Switch } from './Switch';
import { TextInput } from './TextInput';
import { TextareaWithCounter } from './TextareaWithCounter';

export const EventForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="space-y-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
    >
      <TextInput
        label="Título / Nombre del Evento *"
        placeholder="p. ej. Zenith Global Dev Summit 2025"
        required
        className="h-11"
      />
      <Select
        label="Categoría del Evento *"
        defaultValue="tech"
        options={[
          { value: '', label: 'Selecciona una categoría...' },
          { value: 'tech', label: 'Conferencia de Tecnología & Cloud' },
          { value: 'corp', label: 'Reunión de Accionistas / Corporativa' },
          { value: 'workshop', label: 'Taller Técnico Avanzado' },
          { value: 'networking', label: 'Sesión de Networking' },
        ]}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextInput
          label="Precio del Ticket"
          type="number"
          min={0}
          step="0.01"
          placeholder="0.00"
          defaultValue="149.00"
        />
        <TextInput
          label="Capacidad Máxima"
          type="number"
          min={1}
          placeholder="Ej. 500"
          defaultValue="450"
        />
      </div>
      <AffixInput
        label="Enlace / URL Personalizada"
        prefix="https://zenithdash.io/events/"
        defaultValue="summit-2025"
      />
      <TextareaWithCounter
        label="Descripción Detallada"
        maxLength={500}
        rows={4}
        defaultValue="Punto de encuentro internacional para ingenieros de sistemas, arquitectos de nube y desarrolladores de software."
      />
      <FileDropzone
        label="Banner o Logotipo del Evento"
        title="Subir imagen principal de portada"
        hint="Relación recomendada 16:9 • Hasta 10 MB"
        icon="add_photo_alternate"
      />
      <div className="space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <Switch
          label="Evento Privado"
          description="Solo visible para miembros con invitación directa"
        />
        <div className="h-px bg-slate-200" />
        <Switch
          label="Notificar Asistentes por Correo"
          description="Enviar confirmación y boleto digital automáticamente"
          defaultChecked
        />
      </div>
      <div className="flex flex-col gap-3 pt-4 sm:flex-row-reverse">
        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-[0.99] sm:h-11 sm:w-auto"
        >
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-base"
          >
            publish
          </span>
          <span>Guardar y Publicar</span>
        </button>
        <button
          type="button"
          className="flex h-12 w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-sm text-slate-900 transition-colors hover:bg-slate-50 sm:h-11 sm:w-auto"
        >
          <span>Cancelar</span>
        </button>
      </div>
    </form>
  );
}
