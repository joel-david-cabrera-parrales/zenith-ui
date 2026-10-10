export const BRANDING_STUDIO_HTML = `
<div
  class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
>
  <div class="lg:col-span-5 space-y-4">
    <p class="font-mono text-xs"><span class="font-semibold text-blue-700">ATELIER // IDENTITY_SYSTEMS</span></p>
    <h2 class="text-4xl font-bold text-slate-900">Identidades visuales que definen tu industria</h2>
    <div class="grid grid-cols-2 gap-2">
      <div class="rounded-lg border bg-slate-50 p-3">
        <p class="font-bold">85+</p>
        <p class="text-[11px]">Identidades creadas</p>
      </div>
      <div class="rounded-lg border bg-slate-50 p-3">
        <p class="font-bold text-blue-700">14</p>
        <p class="text-[11px]">Premios D&AD</p>
      </div>
    </div>
    <div class="flex gap-2">
      <button class="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white">Explorar Brand Kits</button
      ><button class="rounded-lg border px-5 py-2.5 text-sm font-semibold">Solicitar Propuesta</button>
    </div>
  </div>
  <div class="lg:col-span-7">
    <div class="space-y-3 rounded-xl border bg-slate-50 p-4">
      <div class="grid grid-cols-2 gap-1.5">
        <div class="rounded bg-blue-700 p-2 text-white">
          <p class="font-mono text-[10px] font-bold">PRIMARY BLUE</p>
          <p class="font-mono text-[9px]">HEX #1D4ED8</p>
        </div>
        <div class="rounded bg-slate-900 p-2 text-white">
          <p class="font-mono text-[10px] font-bold">DEEP ONYX</p>
          <p class="font-mono text-[9px]">HEX #0F172A</p>
        </div>
      </div>
      <div class="rounded border bg-white p-2">
        <p class="text-[28px] font-bold">Aa Bb Gg & 9</p>
        <p class="font-mono text-[10px]">Display Serif // -0.02em</p>
      </div>
    </div>
  </div>
</div>
`;

export const BRANDING_STUDIO_TSX = `
export const BrandingStudio = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="lg:col-span-5 space-y-4">
        <p className="font-mono text-xs">
          <span className="font-semibold text-blue-700">ATELIER // IDENTITY_SYSTEMS</span>
        </p>
        <h2 className="text-4xl font-bold text-slate-900">Identidades visuales que definen tu industria</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border bg-slate-50 p-3">
            <p className="font-bold">85+</p>
            <p className="text-[11px]">Identidades creadas</p>
          </div>
          <div className="rounded-lg border bg-slate-50 p-3">
            <p className="font-bold text-blue-700">14</p>
            <p className="text-[11px]">Premios D&AD</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white">
            Explorar Brand Kits
          </button>
          <button className="rounded-lg border px-5 py-2.5 text-sm font-semibold">Solicitar Propuesta</button>
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="space-y-3 rounded-xl border bg-slate-50 p-4">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded bg-blue-700 p-2 text-white">
              <p className="font-mono text-[10px] font-bold">PRIMARY BLUE</p>
              <p className="font-mono text-[9px]">HEX #1D4ED8</p>
            </div>
            <div className="rounded bg-slate-900 p-2 text-white">
              <p className="font-mono text-[10px] font-bold">DEEP ONYX</p>
              <p className="font-mono text-[9px]">HEX #0F172A</p>
            </div>
          </div>
          <div className="rounded border bg-white p-2">
            <p className="text-[28px] font-bold">Aa Bb Gg & 9</p>
            <p className="font-mono text-[10px]">Display Serif // -0.02em</p>
          </div>
        </div>
      </div>
    </div>
  );
};
`;
