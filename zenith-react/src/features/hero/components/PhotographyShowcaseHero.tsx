import { useState } from 'react';

const DISCIPLINES = [
  'Moda & Editorial',
  'Arquitectura & Espacios',
  'Producto E-commerce',
  'Documental & Viajes',
] as const;

type Discipline = (typeof DISCIPLINES)[number];

const SHOTS: { series: string; title: string; exif: string; seed: string }[] = [
  { series: 'SERIES #084', title: 'Editorial Vanguardia // Milán', exif: 'ISO 100 • 85mm f/1.4 • 1/250s', seed: 'zenith-fashion' },
  { series: 'SERIES #112', title: 'Espacio Brutalista // Lisboa', exif: 'ISO 200 • 35mm f/8 • 1/125s', seed: 'zenith-arch' },
  { series: 'SERIES #067', title: 'Producto Premium // Estudio', exif: 'ISO 64 • 100mm f/11 • 1/60s', seed: 'zenith-product' },
];

export const PhotographyShowcaseHero = () => {
  const [discipline, setDiscipline] = useState<Discipline>('Moda & Editorial');

  return (
    <div className="w-full space-y-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
      <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
        <div className="space-y-2 lg:col-span-8">
          <p className="flex items-center gap-2 font-mono text-[10px] text-blue-700">
            <span aria-hidden="true" className="material-symbols-outlined text-base">
              photo_camera
            </span>
            PRODUCTION STUDIO // WORLDWIDE LICENSING
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-4xl md:leading-tight">
            Capturando la esencia visual: Fotografía editorial, producto y
            dirección de arte cinematográfica
          </h2>
        </div>
        <div className="space-y-3 lg:col-span-4">
          <p className="text-sm text-slate-500">
            Sesiones en estudio y exteriores con respaldo de formato medio,
            etalonaje cinematográfico y cesión internacional.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-slate-700 sm:w-auto"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-base">
                calendar_today
              </span>
              Agendar Sesión
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50 sm:w-auto"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-base">
                download
              </span>
              Portafolio PDF
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 border-y border-slate-200 py-2.5">
        <span className="mr-2 font-mono text-[10px] text-slate-500 uppercase">
          Disciplina:
        </span>
        {DISCIPLINES.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setDiscipline(d)}
            className={`rounded-full px-3 py-1 font-mono text-xs ${
              discipline === d
                ? 'bg-blue-600 font-semibold text-white'
                : 'bg-slate-100 text-slate-900 transition-colors hover:bg-slate-200'
            }`}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SHOTS.map((s) => (
          <article
            key={s.series}
            className="group relative aspect-[3/4] h-64 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 sm:h-80 md:h-full md:min-h-80"
          >
            <img
              src={`https://picsum.photos/seed/${s.seed}/600/800`}
              alt={`${s.title} — ${discipline}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-slate-900/80 via-transparent to-black/20 p-3 text-white">
              <div className="flex items-start justify-between">
                <span className="rounded bg-white/80 px-2 py-0.5 font-mono text-[10px] text-slate-900 backdrop-blur-sm">
                  {s.series}
                </span>
                <span aria-hidden="true" className="material-symbols-outlined text-lg text-white/90">
                  center_focus_strong
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold">{s.title}</p>
                <p className="rounded bg-slate-900/50 p-1.5 font-mono text-[10px] text-white/90 backdrop-blur-sm">
                  {s.exif} • {discipline}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 sm:flex-row">
        <p className="flex items-center gap-2 font-mono text-xs text-slate-500">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          100MP SENSOR · 16-BIT COLOR · LICENSING READY
        </p>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded border border-slate-300 bg-white px-4 py-1.5 font-mono text-xs font-semibold text-blue-700 hover:bg-slate-100"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-base">
            fullscreen
          </span>
          Ver Galería Completa [4K]
        </button>
      </div>
    </div>
  );
}
