export const EVENT_BANNER_HTML = `
<div
  class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 rounded-2xl border border-blue-200 bg-white p-8 shadow-sm"
>
  <div class="max-w-2xl space-y-4">
    <span
      class="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold uppercase text-white"
      >Zenith Global Summit 2025</span
    >
    <h2 class="text-3xl font-extrabold text-slate-900">El futuro de la orquestación distribuida y baja latencia.</h2>
    <p class="text-sm text-slate-500">2 días de keynotes, lanzamientos y workshops prácticos.</p>
  </div>
  <div class="flex flex-col items-start gap-5 lg:items-end">
    <div class="flex gap-2">
      <div class="flex h-16 w-16 flex-col items-center justify-center rounded-xl border bg-white shadow-sm">
        <span class="font-bold">14</span><span class="text-[10px]">DÍAS</span>
      </div>
      <div class="flex h-16 w-16 flex-col items-center justify-center rounded-xl border bg-white shadow-sm">
        <span class="font-bold">08</span><span class="text-[10px]">HORAS</span>
      </div>
      <div class="flex h-16 w-16 flex-col items-center justify-center rounded-xl border bg-white shadow-sm">
        <span class="font-bold">22</span><span class="text-[10px]">MIN</span>
      </div>
      <div class="flex h-16 w-16 flex-col items-center justify-center rounded-xl border bg-white shadow-sm">
        <span class="font-bold">45</span><span class="text-[10px]">SEG</span>
      </div>
    </div>
    <div class="flex gap-2">
      <button class="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white">Reservar plaza</button
      ><button class="rounded-lg border px-5 py-2.5 text-xs font-semibold">Ver agenda</button>
    </div>
  </div>
</div>
`;

export const EVENT_BANNER_TSX = `
export const EventBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 rounded-2xl border border-blue-200 bg-white p-8 shadow-sm">
      <div className="max-w-2xl space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold uppercase text-white">
          Zenith Global Summit 2025
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900">
          El futuro de la orquestación distribuida y baja latencia.
        </h2>
        <p className="text-sm text-slate-500">2 días de keynotes, lanzamientos y workshops prácticos.</p>
      </div>
      <div className="flex flex-col items-start gap-5 lg:items-end">
        <div className="flex gap-2">
          <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl border bg-white shadow-sm">
            <span className="font-bold">14</span>
            <span className="text-[10px]">DÍAS</span>
          </div>
          <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl border bg-white shadow-sm">
            <span className="font-bold">08</span>
            <span className="text-[10px]">HORAS</span>
          </div>
          <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl border bg-white shadow-sm">
            <span className="font-bold">22</span>
            <span className="text-[10px]">MIN</span>
          </div>
          <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl border bg-white shadow-sm">
            <span className="font-bold">45</span>
            <span className="text-[10px]">SEG</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white">
            Reservar plaza
          </button>
          <button className="rounded-lg border px-5 py-2.5 text-xs font-semibold">Ver agenda</button>
        </div>
      </div>
    </div>
  );
};
`;
