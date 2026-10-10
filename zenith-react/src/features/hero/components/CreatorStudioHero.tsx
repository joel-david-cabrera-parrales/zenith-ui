import { useState } from 'react';

const RETENTION = [100, 92, 88, 84, 81, 79, 82, 86];

export const CreatorStudioHero = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-semibold text-slate-900">
            <span className="h-2 w-2 rounded-full bg-rose-500" />
            REELS // TIKTOK // YOUTUBE SHORTS UGC
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-4xl md:leading-tight">
            Storytelling dinámico que conecta con audiencias globales y genera
            engagement real
          </h2>
          <p className="text-sm text-slate-500">
            Lotes mensuales de vídeo vertical de alto impacto: del gancho de 3
            segundos a la retención del 80% y CTAs que convierten seguidores en
            compradores.
          </p>
          <div className="grid grid-cols-2 gap-2 py-1 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-sm font-bold text-slate-900">82%</p>
              <p className="text-[11px] text-slate-500">Retención Promedio</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-sm font-bold text-blue-700">4.8M+</p>
              <p className="text-[11px] text-slate-500">Reproducciones</p>
            </div>
            <div className="col-span-2 rounded-lg border border-slate-200 bg-slate-50 p-3 sm:col-span-1">
              <p className="text-sm font-bold text-emerald-700">+180K</p>
              <p className="text-[11px] text-slate-500">Seguidores Orgánicos</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-1 sm:flex-row">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:w-auto"
            >
              Planificar Estrategia
              <span aria-hidden="true" className="material-symbols-outlined text-lg">
                videocam
              </span>
            </button>
            <button
              type="button"
              onClick={() => setPlaying((v) => !v)}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 sm:w-auto"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-lg">
                {playing ? 'pause_circle' : 'play_circle'}
              </span>
              {playing ? 'Pausar Reel' : 'Ver Reel de Proyectos'}
            </button>
          </div>
          <p className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Guionizado IA + Rodaje 4K + Edición viral en 72h
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <p className="flex items-center gap-2 font-mono text-xs font-semibold text-slate-900">
                <span aria-hidden="true" className="material-symbols-outlined text-lg text-blue-600">
                  movie_filter
                </span>
                NLE_TIMELINE // REEL_MASTER_09
              </p>
              <span className="font-mono text-[10px] text-slate-500">4K • 9:16 • 60FPS</span>
            </div>
            <div className="grid grid-cols-12 items-center gap-3">
              <div className="relative col-span-4 aspect-[9/16] overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                <img
                  src="https://picsum.photos/seed/zenith-reel/300/500"
                  alt="Directora grabando vídeo vertical en estudio"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900/80 via-transparent to-transparent p-2 text-white">
                  <span className="w-max rounded bg-blue-600 px-1 font-mono text-[9px]">
                    HOOK 0:02
                  </span>
                  <span className="truncate text-[10px] font-bold">
                    3 Reglas del Branding
                  </span>
                </div>
              </div>
              <div className="col-span-8 space-y-2">
                <div className="rounded border border-slate-200 bg-slate-50 p-2">
                  <p className="mb-1 flex justify-between font-mono text-[10px] text-slate-500">
                    <span>RETENCIÓN DEL HOOK</span>
                    <span className="font-bold text-emerald-600">89% A LOS 5s</span>
                  </p>
                  <div className="flex h-10 items-end gap-1 px-1">
                    {RETENTION.map((h, i) => (
                      <div
                        key={`${h}-${i}`}
                        className={`w-full rounded-t ${i < 3 ? 'bg-blue-600' : i === RETENTION.length - 1 ? 'bg-emerald-500' : 'bg-blue-300'}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                  <div className="rounded border border-slate-200 bg-slate-50 p-2">
                    <p className="text-slate-500">Subtítulos</p>
                    <p className="text-xs font-bold text-slate-900">Animados 100%</p>
                  </div>
                  <div className="rounded border border-slate-200 bg-slate-50 p-2">
                    <p className="text-slate-500">Sound Design</p>
                    <p className="text-xs font-bold text-emerald-600">Trending Audio</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-1 rounded border border-slate-200 bg-slate-50 p-2 font-mono text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="w-8 font-bold text-slate-500">TXT</span>
                <div className="flex h-5 flex-1 gap-1">
                  <span className="flex w-1/4 items-center truncate rounded bg-blue-600 px-1 font-semibold text-white">
                    [HOOK] ¿SABÍAS ESTO?
                  </span>
                  <span className="flex w-1/2 items-center truncate rounded bg-blue-600/80 px-1 text-white">
                    [VALOR] SISTEMA MODULAR
                  </span>
                  <span className="flex w-1/4 items-center truncate rounded bg-emerald-600 px-1 font-semibold text-white">
                    [CTA] GUARDAR
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-8 font-bold text-slate-500">V1</span>
                <div className="flex h-5 flex-1 gap-1">
                  {['CLIP_A', 'B-ROLL_04', 'MOCKUP', 'OUTRO'].map((c) => (
                    <span
                      key={c}
                      className="flex flex-1 items-center truncate rounded border border-blue-300 bg-blue-50 px-1 text-blue-800"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-8 font-bold text-slate-500">A1</span>
                <div className="flex h-5 flex-1">
                  <span className="flex w-full items-center justify-between truncate rounded border border-slate-300 bg-slate-200 px-2 text-slate-700">
                    <span>VOZ EN OFF (EQ)</span>
                    <span>-14 LUFS</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 font-mono text-[10px] text-slate-500">
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-base text-blue-600">
                  play_arrow
                </span>
                00:00:18:24 / 00:00:45:00
              </span>
              <span className="font-semibold text-emerald-600">
                ● LISTO PARA PUBLICAR
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
