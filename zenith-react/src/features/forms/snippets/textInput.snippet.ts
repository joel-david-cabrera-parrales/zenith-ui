export const TEXT_INPUT_HTML = `
<div class="space-y-4">
  <div>
    <div class="mb-1 flex items-center justify-between">
      <label class="text-xs font-medium text-slate-600">Input Small (32px)</label>
      <span class="font-mono text-[10px] font-semibold text-slate-500">h-8 / py-1</span>
    </div>
    <input
      class="w-full h-8 px-2.5 text-xs rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all"
      placeholder="Entrada compacta..."
      type="text"
    />
  </div>
  <div>
    <div class="mb-1 flex items-center justify-between">
      <label class="text-xs font-medium text-slate-600">Input Default (40px)</label>
      <span class="font-mono text-[10px] font-semibold text-slate-500">h-10 / py-2</span>
    </div>
    <input
      class="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all"
      placeholder="Entrada estándar de formulario..."
      type="text"
    />
  </div>
  <div>
    <div class="mb-1 flex items-center justify-between">
      <label class="text-xs font-medium text-slate-600">Input Large (48px)</label>
      <span class="font-mono text-[10px] font-semibold text-slate-500">h-12 / py-3</span>
    </div>
    <input
      class="w-full h-12 px-4 text-base rounded-xl border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all"
      placeholder="Entrada destacada o de búsqueda principal..."
      type="text"
    />
  </div>
</div>
`;

export const TEXT_INPUT_TSX = `
export const TextInputSizes = () => {
  return (
    <div className="space-y-4">
      <div>
        <div className="mb-1 flex items-center justify-between">
          <label className="text-xs font-medium text-slate-600">Input Small (32px)</label>
          <span className="font-mono text-[10px] font-semibold text-slate-500">h-8 / py-1</span>
        </div>
        <input
          className="w-full h-8 px-2.5 text-xs rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all"
          placeholder="Entrada compacta..."
          type="text"
        />
      </div>
      <div>
        <div className="mb-1 flex items-center justify-between">
          <label className="text-xs font-medium text-slate-600">Input Default (40px)</label>
          <span className="font-mono text-[10px] font-semibold text-slate-500">h-10 / py-2</span>
        </div>
        <input
          className="w-full h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all"
          placeholder="Entrada estándar de formulario..."
          type="text"
        />
      </div>
      <div>
        <div className="mb-1 flex items-center justify-between">
          <label className="text-xs font-medium text-slate-600">Input Large (48px)</label>
          <span className="font-mono text-[10px] font-semibold text-slate-500">h-12 / py-3</span>
        </div>
        <input
          className="w-full h-12 px-4 text-base rounded-xl border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all"
          placeholder="Entrada destacada o de búsqueda principal..."
          type="text"
        />
      </div>
    </div>
  );
};
`;
