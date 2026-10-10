export const TEXTAREA_UPLOAD_HTML = `<div class="space-y-5">
  <div>
    <div class="flex justify-between items-center mb-1">
      <label class="text-xs font-medium text-slate-600">Área de Texto Multilínea</label>
      <span class="font-mono text-[10px] font-semibold text-slate-500">38 / 250</span>
    </div>
    <textarea class="w-full p-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none resize-none" maxlength="250" rows="3">Resumen operativo con límite estricto.</textarea>
  </div>
  <div>
    <span class="mb-1 block text-xs font-medium text-slate-600">Carga de Archivo / Drag & Drop</span>
    <div class="border-2 border-dashed border-slate-300 hover:border-blue-600 rounded-xl p-6 text-center bg-white transition-colors cursor-pointer">
      <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-2">
        <span class="material-symbols-outlined text-blue-600">cloud_upload</span>
      </div>
      <p class="text-sm text-slate-900 font-medium">Selecciona un archivo o arrástralo aquí</p>
      <p class="font-mono text-[10px] font-semibold text-slate-500 mt-1">PNG, JPG o SVG (Máximo 5MB)</p>
    </div>
  </div>
</div>`;

export const TEXTAREA_UPLOAD_TSX = `export const TextareaUpload = () => {
  const maxLength = 250;
  const [length, setLength] = useState(38);
  return (
    <div className="space-y-5">
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="text-xs font-medium text-slate-600">Área de Texto Multilínea</label>
          <span className="font-mono text-[10px] font-semibold text-slate-500">{length} / {maxLength}</span>
        </div>
        <textarea className="w-full p-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none resize-none" maxLength={maxLength} rows={3} defaultValue="Resumen operativo con límite estricto." onChange={(e) => setLength(e.target.value.length)} />
      </div>
      <div>
        <span className="mb-1 block text-xs font-medium text-slate-600">Carga de Archivo / Drag & Drop</span>
        <div className="border-2 border-dashed border-slate-300 hover:border-blue-600 rounded-xl p-6 text-center bg-white transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-2">
            <span className="material-symbols-outlined text-blue-600">cloud_upload</span>
          </div>
          <p className="text-sm text-slate-900 font-medium">Selecciona un archivo o arrástralo aquí</p>
          <p className="font-mono text-[10px] font-semibold text-slate-500 mt-1">PNG, JPG o SVG (Máximo 5MB)</p>
        </div>
      </div>
    </div>
  );
};`;
