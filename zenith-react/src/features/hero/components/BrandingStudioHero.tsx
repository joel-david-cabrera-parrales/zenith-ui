const SWATCHES = [
  { name: 'PRIMARY BLUE', hex: 'HEX #1D4ED8', cls: 'bg-blue-700 text-white' },
  { name: 'DEEP ONYX', hex: 'HEX #0F172A', cls: 'bg-slate-900 text-white' },
  { name: 'TINT FIXED', hex: 'HEX #DBEAFE', cls: 'border border-slate-200 bg-blue-100 text-blue-800' },
  { name: 'CANVAS ICE', hex: 'HEX #F1F5F9', cls: 'border border-slate-200 bg-slate-100 text-slate-600' },
];

export function BrandingStudioHero() {
  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          <p className="flex items-center gap-2 font-mono text-xs">
            <span className="font-semibold text-blue-700">ATELIER // IDENTITY_SYSTEMS</span>
            <span className="text-slate-300">/</span>
            <span className="text-[10px] text-slate-500">GOLDEN RATIO GUIDES</span>
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-4xl md:leading-tight">
            Diseñamos identidades visuales que definen el estándar de tu
            industria
          </h2>
          <p className="text-sm text-slate-500">
            Tipografía a medida, sistemas modulares y empaques sustentables con
            rigor suizo para marcas corporativas y productos premium.
          </p>
          <div className="grid grid-cols-2 gap-2 py-1">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-sm font-bold text-slate-900">85+</p>
              <p className="text-[11px] text-slate-500">Identidades creadas</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-sm font-bold text-blue-700">14</p>
              <p className="text-[11px] text-slate-500">Premios Red Dot / D&amp;AD</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-1 sm:flex-row">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:w-auto"
            >
              Explorar Brand Kits
              <span aria-hidden="true" className="material-symbols-outlined text-lg">
                palette
              </span>
            </button>
            <button
              type="button"
              className="w-full rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 sm:w-auto"
            >
              Solicitar Propuesta
            </button>
          </div>
          <p className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
            <span aria-hidden="true" className="material-symbols-outlined text-base text-emerald-600">
              check_circle
            </span>
            Manual + vectores (.SVG/.EPS) + tokens CSS/Tailwind
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <p className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
                <span className="flex gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                </span>
                SPECIMEN // AURORA_BOTANICS_SYSTEM.ai
              </p>
              <span className="font-mono text-[10px] text-slate-500">GRID: 8PT</span>
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
              <div className="space-y-2 rounded-lg border border-slate-200 bg-white p-3 md:col-span-6">
                <p className="flex items-center justify-between font-mono text-[10px] font-semibold text-slate-500">
                  ISOTIPO &amp; RETÍCULA
                  <span aria-hidden="true" className="material-symbols-outlined text-base">
                    grid_4x4
                  </span>
                </p>
                <div className="flex h-32 items-center justify-center rounded border border-slate-200 bg-slate-50">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-blue-300">
                    <div className="h-14 w-14 rounded-full border border-dashed border-blue-600" />
                    <div className="absolute h-px w-full bg-blue-600/40" />
                    <div className="absolute h-full w-px bg-blue-600/40" />
                    <div className="flex h-8 w-8 rotate-45 items-center justify-center border-2 border-blue-600 bg-blue-100">
                      <span className="-rotate-45 font-mono text-[10px] font-bold text-blue-700">
                        Φ
                      </span>
                    </div>
                  </div>
                </div>
                <p className="flex justify-between font-mono text-[10px] text-slate-500">
                  <span>ÁNGULO: 45.00°</span>
                  <span>BÉZIER CONTINUA</span>
                </p>
              </div>
              <div className="space-y-2 rounded-lg border border-slate-200 bg-white p-3 md:col-span-6">
                <p className="flex items-center justify-between font-mono text-[10px] font-semibold text-slate-500">
                  SWATCHES PANTONE
                  <span aria-hidden="true" className="material-symbols-outlined text-base">
                    colorize
                  </span>
                </p>
                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  {SWATCHES.map((s) => (
                    <div key={s.name} className={`space-y-1 rounded p-2 ${s.cls}`}>
                      <p className="font-mono text-[10px] font-bold">{s.name}</p>
                      <p className="font-mono text-[9px] opacity-80">{s.hex}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2 rounded-lg border border-slate-200 bg-white p-3 md:col-span-7">
                <p className="font-mono text-[10px] font-semibold text-slate-500">
                  ESPÉCIMEN TIPOGRÁFICO
                </p>
                <div className="rounded border border-slate-200 bg-slate-50 p-2">
                  <p className="text-[28px] leading-none font-bold tracking-tight text-slate-900">
                    Aa Bb Gg &amp; 9
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-slate-500">
                    Display Serif // Tracking -0.02em
                  </p>
                </div>
                <div className="rounded border border-slate-200 bg-slate-50 p-2">
                  <p className="text-sm font-semibold text-slate-900">
                    Inter Grotesk Medium (Latin Extended)
                  </p>
                  <p className="font-mono text-[10px] text-slate-500">
                    UI Micro-Copy &amp; Body
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-2 rounded-lg border border-slate-200 bg-white p-3 md:col-span-5">
                <p className="flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <span className="font-semibold">PACKAGING MOCKUP</span>
                  <span className="text-emerald-600">300 DPI</span>
                </p>
                <div className="relative h-28 overflow-hidden rounded border border-slate-200 bg-gradient-to-br from-slate-100 to-blue-100">
                  <img
                    src="https://picsum.photos/seed/zenith-pack/400/200"
                    alt="Mockup de empaque minimalista premium"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute right-1 bottom-1 rounded bg-white/90 px-1.5 py-0.5 font-mono text-[10px] text-slate-900">
                    SERIES NO. 04
                  </span>
                </div>
                <p className="flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <span>FSC PAPER</span>
                  <span className="font-semibold text-blue-700">APROBADO</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
