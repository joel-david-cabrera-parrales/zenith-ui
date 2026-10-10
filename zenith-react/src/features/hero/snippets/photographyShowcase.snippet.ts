export const PHOTOGRAPHY_SHOWCASE_HTML = `
<div class="space-y-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
  <h2 class="text-4xl font-bold text-slate-900">
    Capturando la esencia visual: Fotografía editorial y dirección cinematográfica
  </h2>
  <div class="flex gap-2 border-y py-2.5">
    <span class="font-mono text-[10px]">Disciplina:</span
    ><button class="rounded-full bg-blue-600 px-3 py-1 font-mono text-xs text-white">Moda & Editorial</button
    ><button class="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs">Arquitectura</button>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="relative aspect-[3/4] overflow-hidden rounded-xl border bg-slate-100">
      <img
        src="https://picsum.photos/seed/zenith-fashion/600/800"
        alt="Editorial Milán"
        class="h-full w-full object-cover"
      />
      <div
        class="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-slate-900/80 to-transparent p-3 text-white"
      >
        <span class="w-max rounded bg-white/80 px-2 py-0.5 font-mono text-[10px] text-slate-900">SERIES #084</span>
        <div>
          <p class="text-sm font-semibold">Editorial Vanguardia // Milán</p>
          <p class="font-mono text-[10px]">ISO 100 • 85mm f/1.4 • 1/250s</p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-between rounded-lg border bg-slate-50 p-3">
    <span class="font-mono text-xs">100MP · 16-BIT · LICENSING READY</span
    ><button class="rounded border bg-white px-4 py-1.5 font-mono text-xs font-semibold text-blue-700">
      Ver Galería [4K]
    </button>
  </div>
</div>
`;

export const PHOTOGRAPHY_SHOWCASE_TSX = `
export const PhotographyShowcase = () => {
  return (
    <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-4xl font-bold text-slate-900">
        Capturando la esencia visual: Fotografía editorial y dirección cinematográfica
      </h2>
      <div className="flex gap-2 border-y py-2.5">
        <span className="font-mono text-[10px]">Disciplina:</span>
        <button className="rounded-full bg-blue-600 px-3 py-1 font-mono text-xs text-white">Moda & Editorial</button>
        <button className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs">Arquitectura</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl border bg-slate-100">
          <img
            src="https://picsum.photos/seed/zenith-fashion/600/800"
            alt="Editorial Milán"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-slate-900/80 to-transparent p-3 text-white">
            <span className="w-max rounded bg-white/80 px-2 py-0.5 font-mono text-[10px] text-slate-900">
              SERIES #084
            </span>
            <div>
              <p className="text-sm font-semibold">Editorial Vanguardia // Milán</p>
              <p className="font-mono text-[10px]">ISO 100 • 85mm f/1.4 • 1/250s</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between rounded-lg border bg-slate-50 p-3">
        <span className="font-mono text-xs">100MP · 16-BIT · LICENSING READY</span>
        <button className="rounded border bg-white px-4 py-1.5 font-mono text-xs font-semibold text-blue-700">
          Ver Galería [4K]
        </button>
      </div>
    </div>
  );
};
`;
