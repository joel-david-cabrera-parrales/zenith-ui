export const INPUT_ACCESSORIES_HTML = `
<div class="space-y-4">
  <div>
    <label class="mb-1 block text-xs font-medium text-slate-600">Con Icono Leading (Correo)</label>
    <div class="relative">
      <span class="material-symbols-outlined text-slate-400 absolute left-3 top-2.5 text-lg pointer-events-none"
        >mail</span
      >
      <input
        class="w-full h-10 pl-10 pr-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
        placeholder="usuario@zenithdash.io"
        type="email"
      />
    </div>
  </div>
  <div>
    <label class="mb-1 block text-xs font-medium text-slate-600">Con Prefijo de Protocolo</label>
    <div
      class="flex rounded-lg border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 overflow-hidden"
    >
      <span
        class="inline-flex items-center px-3 bg-slate-100 font-mono text-xs text-slate-500 border-r border-slate-300 select-none"
        >https://</span
      >
      <input
        class="w-full h-10 px-3 text-sm bg-transparent placeholder:text-slate-400 outline-none border-none"
        placeholder="portal.evento.com"
        type="text"
      />
    </div>
  </div>
  <div>
    <label class="mb-1 block text-xs font-medium text-slate-600">Con Sufijo de Moneda</label>
    <div
      class="flex rounded-lg border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 overflow-hidden"
    >
      <input
        class="w-full h-10 px-3 text-sm bg-transparent placeholder:text-slate-400 outline-none border-none"
        placeholder="250.00"
        type="number"
      />
      <span
        class="inline-flex items-center px-3 bg-slate-100 font-mono text-xs text-slate-600 border-l border-slate-300 select-none"
        >USD</span
      >
    </div>
  </div>
  <div>
    <label class="mb-1 block text-xs font-medium text-slate-600">Con Botón de Acción Integrado (Copiar)</label>
    <div class="relative flex items-center">
      <input
        class="w-full h-10 pl-3 pr-24 font-mono text-xs rounded-lg border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none"
        readonly
        type="text"
        value="zenith_live_pk_8849b29e01"
      />
      <div class="absolute right-1.5 flex items-center gap-1.5">
        <span
          class="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded bg-white border border-slate-300 text-[9px] font-mono text-slate-500"
          >⌘K</span
        >
        <button
          class="h-7 px-2 bg-blue-600 text-white rounded-md text-xs font-medium flex items-center gap-1 hover:bg-blue-700 transition-colors"
          type="button"
        >
          <span class="material-symbols-outlined text-sm">content_copy</span>
          <span class="text-[11px]">Copiar</span>
        </button>
      </div>
    </div>
  </div>
</div>
`;

export const INPUT_ACCESSORIES_TSX = `
export const InputAccessories = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="space-y-4">
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">Con Icono Leading (Correo)</label>
        <div className="relative">
          <span className="material-symbols-outlined text-slate-400 absolute left-3 top-2.5 text-lg pointer-events-none">
            mail
          </span>
          <input
            className="w-full h-10 pl-10 pr-3 text-sm rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
            placeholder="usuario@zenithdash.io"
            type="email"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">
          Con Icono Trailing Interactivo (Ver Contraseña)
        </label>
        <div className="relative">
          <span className="material-symbols-outlined text-slate-400 absolute left-3 top-2.5 text-lg pointer-events-none">
            lock
          </span>
          <input
            className="w-full h-10 pl-10 pr-10 text-sm rounded-lg border border-slate-300 bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
            type={visible ? 'text' : 'password'}
            defaultValue="ClaveUltraSegura123!"
          />
          <button
            className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-900 flex items-center justify-center p-0.5 rounded transition-colors"
            onClick={() => setVisible(v => !v)}
            type="button"
            aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            <span className="material-symbols-outlined text-lg">{visible ? 'visibility_off' : 'visibility'}</span>
          </button>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">Con Prefijo de Protocolo</label>
        <div className="flex rounded-lg border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 overflow-hidden">
          <span className="inline-flex items-center px-3 bg-slate-100 font-mono text-xs text-slate-500 border-r border-slate-300 select-none">
            https://
          </span>
          <input
            className="w-full h-10 px-3 text-sm bg-transparent placeholder:text-slate-400 outline-none border-none"
            placeholder="portal.evento.com"
            type="text"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">Con Sufijo de Moneda</label>
        <div className="flex rounded-lg border border-slate-300 bg-white focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 overflow-hidden">
          <input
            className="w-full h-10 px-3 text-sm bg-transparent placeholder:text-slate-400 outline-none border-none"
            placeholder="250.00"
            type="number"
          />
          <span className="inline-flex items-center px-3 bg-slate-100 font-mono text-xs text-slate-600 border-l border-slate-300 select-none">
            USD
          </span>
        </div>
      </div>
    </div>
  );
};
`;
