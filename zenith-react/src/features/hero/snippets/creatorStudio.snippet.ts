export const CREATOR_STUDIO_HTML = `
<div
  class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
>
  <div class="lg:col-span-6 space-y-4">
    <span
      class="inline-flex items-center gap-2 rounded-full border bg-slate-50 px-2.5 py-1 font-mono text-xs font-semibold"
      >REELS // TIKTOK // SHORTS</span
    >
    <h2 class="text-4xl font-bold text-slate-900">Storytelling dinámico que genera engagement real</h2>
    <div class="grid grid-cols-3 gap-2">
      <div class="rounded-lg border bg-slate-50 p-3">
        <p class="font-bold">82%</p>
        <p class="text-[11px]">Retención</p>
      </div>
      <div class="rounded-lg border bg-slate-50 p-3">
        <p class="font-bold text-blue-700">4.8M+</p>
        <p class="text-[11px]">Views</p>
      </div>
      <div class="rounded-lg border bg-slate-50 p-3">
        <p class="font-bold text-emerald-700">+180K</p>
        <p class="text-[11px]">Seguidores</p>
      </div>
    </div>
    <div class="flex gap-2">
      <button class="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white">Planificar Estrategia</button
      ><button class="rounded-lg border px-5 py-2.5 text-sm font-semibold">Ver Reel</button>
    </div>
  </div>
  <div class="lg:col-span-6">
    <div class="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
      <div class="flex justify-between border-b pb-2">
        <span class="font-mono text-xs font-semibold">NLE_TIMELINE // REEL_09</span
        ><span class="font-mono text-[10px]">4K • 9:16 • 60FPS</span>
      </div>
      <div class="rounded bg-slate-50 border p-2">
        <p class="font-mono text-[10px]">RETENCIÓN 89% A LOS 5s</p>
        <div class="flex h-10 items-end gap-1">
          <div class="w-full rounded-t bg-blue-600" style="height:100%"></div>
          <div class="w-full rounded-t bg-blue-600" style="height:88%"></div>
          <div class="w-full rounded-t bg-emerald-500" style="height:86%"></div>
        </div>
      </div>
      <div class="rounded bg-slate-50 border p-2 font-mono text-[10px]">
        <p>TXT: [HOOK] ¿SABÍAS ESTO? → [VALOR] → [CTA]</p>
        <p>V1: CLIP_A / B-ROLL_04 / MOCKUP / OUTRO</p>
      </div>
    </div>
  </div>
</div>
`;

export const CREATOR_STUDIO_TSX = `
export const CreatorStudio = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="lg:col-span-6 space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full border bg-slate-50 px-2.5 py-1 font-mono text-xs font-semibold">
          REELS // TIKTOK // SHORTS
        </span>
        <h2 className="text-4xl font-bold text-slate-900">Storytelling dinámico que genera engagement real</h2>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg border bg-slate-50 p-3">
            <p className="font-bold">82%</p>
            <p className="text-[11px]">Retención</p>
          </div>
          <div className="rounded-lg border bg-slate-50 p-3">
            <p className="font-bold text-blue-700">4.8M+</p>
            <p className="text-[11px]">Views</p>
          </div>
          <div className="rounded-lg border bg-slate-50 p-3">
            <p className="font-bold text-emerald-700">+180K</p>
            <p className="text-[11px]">Seguidores</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white">
            Planificar Estrategia
          </button>
          <button className="rounded-lg border px-5 py-2.5 text-sm font-semibold">Ver Reel</button>
        </div>
      </div>
      <div className="lg:col-span-6">
        <div className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
          <div className="flex justify-between border-b pb-2">
            <span className="font-mono text-xs font-semibold">NLE_TIMELINE // REEL_09</span>
            <span className="font-mono text-[10px]">4K • 9:16 • 60FPS</span>
          </div>
          <div className="rounded bg-slate-50 border p-2">
            <p className="font-mono text-[10px]">RETENCIÓN 89% A LOS 5s</p>
            <div className="flex h-10 items-end gap-1">
              <div className="w-full rounded-t bg-blue-600" style={{ height: '100%' }}></div>
              <div className="w-full rounded-t bg-blue-600" style={{ height: '88%' }}></div>
              <div className="w-full rounded-t bg-emerald-500" style={{ height: '86%' }}></div>
            </div>
          </div>
          <div className="rounded bg-slate-50 border p-2 font-mono text-[10px]">
            <p>TXT: [HOOK] ¿SABÍAS ESTO? → [VALOR] → [CTA]</p>
            <p>V1: CLIP_A / B-ROLL_04 / MOCKUP / OUTRO</p>
          </div>
        </div>
      </div>
    </div>
  );
};
`;
