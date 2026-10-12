import { EventCountdown } from '../../countdowns/components';

export const EventBannerHero = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-5 shadow-sm sm:p-8 md:p-12">
      <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold tracking-wider text-white uppercase">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-white" />
            Zenith Global Summit 2025 • Virtual &amp; Keynote
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            El futuro de la orquestación distribuida y arquitecturas de baja
            latencia.
          </h2>
          <p className="text-sm text-slate-500">
            Acompáñanos en 2 días de conferencias magistrales, lanzamientos en
            primicia y workshops prácticos con ingenieros líderes de la
            industria.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1 text-sm font-medium text-slate-900">
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true" className="material-symbols-outlined text-base text-blue-600">
                calendar_month
              </span>
              24 - 25 Octubre, 2025
            </span>
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true" className="material-symbols-outlined text-base text-blue-600">
                videocam
              </span>
              Transmisión 4K Gratuita
            </span>
          </div>
        </div>
        <div className="flex w-full shrink-0 flex-col items-start gap-5 lg:w-auto lg:items-end">
          <EventCountdown />
          <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
            <button
              type="button"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Reservar plaza gratuita
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-900 transition-colors hover:bg-slate-50"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-base text-slate-500">
                alarm
              </span>
              Ver agenda
            </button>
          </div>
          <p className="font-mono text-[10px] text-slate-500">
            12.480 REGISTRADOS · QUEDAN 2.300 PLAZAS
          </p>
        </div>
      </div>
    </div>
  );
}
