export const EVENT_FORM_HTML = `
<form class="space-y-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
  <div>
    <label class="mb-1 block text-xs font-medium text-slate-600">Título / Nombre del Evento *</label>
    <input
      class="w-full h-11 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all"
      placeholder="p. ej. Zenith Global Dev Summit 2025"
      required
      type="text"
    />
  </div>
  <div>
    <label class="mb-1 block text-xs font-medium text-slate-600">Categoría del Evento *</label>
    <div class="relative w-full">
      <select
        class="w-full h-10 pl-3 pr-10 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 appearance-none outline-none cursor-pointer focus:border-blue-600 focus:ring-1 focus:ring-blue-600 hover:bg-slate-50 transition-colors"
      >
        <option value="">Selecciona una categoría...</option>
        <option selected value="tech">Conferencia de Tecnología & Cloud</option>
        <option value="corp">Reunión de Accionistas / Corporativa</option>
        <option value="workshop">Taller Técnico Avanzado</option>
        <option value="networking">Sesión de Networking</option>
      </select>
      <span class="material-symbols-outlined text-slate-500 text-base absolute right-3 top-2.5 pointer-events-none"
        >expand_more</span
      >
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label class="mb-1 block text-xs font-medium text-slate-600">Precio del Ticket</label>
      <input
        class="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
        min="0"
        placeholder="0.00"
        step="0.01"
        type="number"
        value="149.00"
      />
    </div>
    <div>
      <label class="mb-1 block text-xs font-medium text-slate-600">Capacidad Máxima</label>
      <input
        class="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
        min="1"
        placeholder="Ej. 500"
        type="number"
        value="450"
      />
    </div>
  </div>
  <div>
    <label class="mb-1 block text-xs font-medium text-slate-600">Enlace / URL Personalizada</label>
    <div
      class="flex rounded-lg border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 overflow-hidden"
    >
      <span
        class="inline-flex items-center px-3 bg-slate-100 font-mono text-xs text-slate-500 border-r border-slate-300 select-none"
        >https://zenithdash.io/events/</span
      >
      <input class="w-full h-10 px-3 text-sm bg-transparent outline-none border-none" type="text" value="summit-2025" />
    </div>
  </div>
  <div>
    <div class="flex justify-between items-center mb-1">
      <label class="text-xs font-medium text-slate-600">Descripción Detallada</label>
      <span class="font-mono text-[10px] font-semibold text-slate-500">114 / 500</span>
    </div>
    <textarea
      class="w-full p-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none resize-none"
      maxlength="500"
      rows="4"
    >
Punto de encuentro internacional para ingenieros de sistemas.</textarea
    >
  </div>
  <div class="pt-4 flex flex-col sm:flex-row-reverse gap-3">
    <button
      class="w-full sm:w-auto h-12 sm:h-11 px-8 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-sm"
      type="submit"
    >
      <span class="material-symbols-outlined text-base">publish</span>
      <span>Guardar y Publicar</span>
    </button>
    <button
      class="w-full sm:w-auto h-12 sm:h-11 px-6 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm transition-colors flex items-center justify-center"
      type="button"
    >
      <span>Cancelar</span>
    </button>
  </div>
</form>
`;

export const EVENT_FORM_TSX = `
export const EventForm = () => {
  return (
    <form
      className="space-y-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
      onSubmit={e => e.preventDefault()}
    >
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">Título / Nombre del Evento *</label>
        <input
          className="w-full h-11 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all"
          placeholder="p. ej. Zenith Global Dev Summit 2025"
          required
          type="text"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">Categoría del Evento *</label>
        <div className="relative w-full">
          <select
            className="w-full h-10 pl-3 pr-10 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 appearance-none outline-none cursor-pointer focus:border-blue-600 focus:ring-1 focus:ring-blue-600 hover:bg-slate-50 transition-colors"
            defaultValue="tech"
          >
            <option value="">Selecciona una categoría...</option>
            <option value="tech">Conferencia de Tecnología & Cloud</option>
            <option value="corp">Reunión de Accionistas / Corporativa</option>
            <option value="workshop">Taller Técnico Avanzado</option>
            <option value="networking">Sesión de Networking</option>
          </select>
          <span className="material-symbols-outlined text-slate-500 text-base absolute right-3 top-2.5 pointer-events-none">
            expand_more
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-600">Precio del Ticket</label>
          <input
            className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
            min="0"
            placeholder="0.00"
            step="0.01"
            type="number"
            defaultValue="149.00"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-600">Capacidad Máxima</label>
          <input
            className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
            min="1"
            placeholder="Ej. 500"
            type="number"
            defaultValue="450"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">Enlace / URL Personalizada</label>
        <div className="flex rounded-lg border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 overflow-hidden">
          <span className="inline-flex items-center px-3 bg-slate-100 font-mono text-xs text-slate-500 border-r border-slate-300 select-none">
            https://zenithdash.io/events/
          </span>
          <input
            className="w-full h-10 px-3 text-sm bg-transparent outline-none border-none"
            type="text"
            defaultValue="summit-2025"
          />
        </div>
      </div>
      <div className="pt-4 flex flex-col sm:flex-row-reverse gap-3">
        <button
          className="w-full sm:w-auto h-12 sm:h-11 px-8 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-sm"
          type="submit"
        >
          <span className="material-symbols-outlined text-base">publish</span>
          <span>Guardar y Publicar</span>
        </button>
        <button
          className="w-full sm:w-auto h-12 sm:h-11 px-6 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm transition-colors flex items-center justify-center"
          type="button"
        >
          <span>Cancelar</span>
        </button>
      </div>
    </form>
  );
};
`;
