export const MICROCOPY_HTML = `
<div class="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="space-y-2">
      <label class="text-sm font-semibold text-slate-900">Dominio Canónico del Clúster</label>
      <input
        type="text"
        defaultValue="prod-api-edge.zenith.internal"
        class="w-full text-sm px-3.5 py-2 rounded-lg border border-slate-300 bg-white outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
      />
      <p class="text-xs text-slate-400">Debe coincidir con el certificado TLS cargado.</p>
    </div>
    <div class="space-y-2">
      <label class="text-sm font-semibold text-slate-900">Puerto de Telemetría UDP</label>
      <input
        type="text"
        defaultValue="99999"
        aria-invalid="true"
        class="w-full text-sm px-3.5 py-2 rounded-lg border border-rose-600 bg-rose-50/40 outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600"
      />
      <p class="text-xs text-rose-600 font-medium">Rango no permitido: entre 1024 y 65535.</p>
    </div>
    <div class="space-y-2">
      <label class="text-sm font-semibold text-slate-900">Token de Autorización Webhook</label>
      <input
        type="text"
        defaultValue="zth_live_sec_892301fa38"
        class="w-full text-sm px-3.5 py-2 rounded-lg border border-emerald-600 bg-emerald-50/30 outline-none focus:ring-1 focus:ring-emerald-600"
      />
      <p class="text-xs text-emerald-700 font-medium">Firma RSA-4096 verificada correctamente.</p>
    </div>
    <div class="space-y-2">
      <label class="text-sm font-semibold text-slate-900">Expresión Cron de Respaldo</label>
      <input
        type="text"
        placeholder="ej. 0 */4 * * * (Cada cuatro horas)"
        class="w-full text-sm px-3.5 py-2 rounded-lg border border-slate-300 placeholder:text-slate-300 placeholder:italic bg-white outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
      />
      <p class="text-xs text-slate-400">Placeholder en cursiva suave para sugerencias.</p>
    </div>
    <div class="space-y-2 opacity-65">
      <label class="text-sm font-semibold text-slate-500">ID de Inquilino Primario (Bloqueado)</label>
      <input
        type="text"
        defaultValue="tenant_enterprise_9481940"
        disabled
        class="w-full text-sm px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-100 text-slate-500 cursor-not-allowed select-none"
      />
      <p class="text-xs text-slate-500">Modificable solo por administradores.</p>
    </div>
  </div>
</div>
`;

export const MICROCOPY_TSX = `
export const MicrocopySpecimen = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-900">Dominio Canónico del Clúster</label>
          <input
            type="text"
            defaultValue="prod-api-edge.zenith.internal"
            className="w-full text-sm px-3.5 py-2 rounded-lg border border-slate-300 bg-white outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
          <p className="text-xs text-slate-400">Debe coincidir con el certificado TLS cargado.</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-900">Puerto de Telemetría UDP</label>
          <input
            type="text"
            defaultValue="99999"
            aria-invalid="true"
            className="w-full text-sm px-3.5 py-2 rounded-lg border border-rose-600 bg-rose-50/40 outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600"
          />
          <p className="text-xs text-rose-600 font-medium">Rango no permitido: entre 1024 y 65535.</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-900">Token de Autorización Webhook</label>
          <input
            type="text"
            defaultValue="zth_live_sec_892301fa38"
            className="w-full text-sm px-3.5 py-2 rounded-lg border border-emerald-600 bg-emerald-50/30 outline-none focus:ring-1 focus:ring-emerald-600"
          />
          <p className="text-xs text-emerald-700 font-medium">Firma RSA-4096 verificada correctamente.</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-900">Expresión Cron de Respaldo</label>
          <input
            type="text"
            placeholder="ej. 0 */4 * * * (Cada cuatro horas)"
            className="w-full text-sm px-3.5 py-2 rounded-lg border border-slate-300 placeholder:text-slate-300 placeholder:italic bg-white outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
          <p className="text-xs text-slate-400">Placeholder en cursiva suave para sugerencias.</p>
        </div>
        <div className="space-y-2 opacity-65">
          <label className="text-sm font-semibold text-slate-500">ID de Inquilino Primario (Bloqueado)</label>
          <input
            type="text"
            defaultValue="tenant_enterprise_9481940"
            disabled
            className="w-full text-sm px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-100 text-slate-500 cursor-not-allowed select-none"
          />
          <p className="text-xs text-slate-500">Modificable solo por administradores.</p>
        </div>
      </div>
    </div>
  );
};
`;
