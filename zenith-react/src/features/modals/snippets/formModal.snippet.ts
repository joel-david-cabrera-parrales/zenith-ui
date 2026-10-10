export const FORM_MODAL_HTML = `<button type="button" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm">
  <span class="material-symbols-outlined text-base">edit_document</span>
  <span>Modal Formulario de Edición</span>
</button>
<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="absolute inset-0 animate-overlay-in bg-slate-900/55"></div>
  <div class="relative w-full max-w-md animate-modal-in rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
    <h3 class="text-base font-bold text-slate-900">Editar Usuario de Equipo</h3>
    <form class="space-y-4 mt-4">
      <div>
        <label class="block text-xs font-medium text-slate-700 mb-1">Nombre Completo</label>
        <input type="text" value="Jonathan Juárez" class="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-700 mb-1">Correo Electrónico</label>
        <input type="email" value="jonathan.j@email.com" class="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-700 mb-1">Rol de Acceso</label>
        <select class="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-blue-500">
          <option>Lead Architect (Admin)</option>
          <option>DevOps Engineer</option>
        </select>
      </div>
      <div class="flex justify-end gap-2 pt-3 border-t border-slate-100">
        <button type="button" class="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 border border-slate-200 hover:bg-slate-50">Cancelar</button>
        <button type="submit" class="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">Actualizar Miembro</button>
      </div>
    </form>
  </div>
</div>`;

export const FORM_MODAL_TSX = `export const FormModal = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm">
        <span className="material-symbols-outlined text-base">edit_document</span>
        <span>Modal Formulario de Edición</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div aria-hidden="true" onClick={close} className="absolute inset-0 animate-overlay-in bg-slate-900/55" />
          <div className="relative w-full max-w-md animate-modal-in rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            <h3 className="text-base font-bold text-slate-900">Editar Usuario de Equipo</h3>
            <form className="space-y-4 mt-4" onSubmit={(e) => { e.preventDefault(); close(); }}>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Nombre Completo</label>
                <input type="text" defaultValue="Jonathan Juárez" className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Correo Electrónico</label>
                <input type="email" defaultValue="jonathan.j@email.com" className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Rol de Acceso</label>
                <select className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-blue-500" defaultValue="Lead Architect (Admin)">
                  <option>Lead Architect (Admin)</option>
                  <option>DevOps Engineer</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button type="button" onClick={close} className="px-4 py-2 text-xs font-medium rounded-lg text-slate-600 border border-slate-200 hover:bg-slate-50">Cancelar</button>
                <button type="submit" className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">Actualizar Miembro</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};`;
