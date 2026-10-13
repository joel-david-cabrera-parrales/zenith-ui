export const HERO_CAROUSEL_HTML = `
<div class="w-full">
  <div class="relative w-full overflow-hidden rounded-md bg-slate-900 ring-1 ring-slate-800">
    <div class="flex w-full transition-transform duration-300 ease-in-out" style="transform: translateX(-0%);">
      <div class="w-full min-w-full">
        <div class="grid items-center gap-6 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 p-6">
          <div>
            <p class="font-mono text-[11px] font-semibold tracking-wide text-blue-300">Nuevo · Star Summit 2026</p>
            <h3 class="mt-2 text-xl font-bold text-white">El evento que reúne al ecosistema</h3>
            <p class="mt-2 text-sm text-slate-300">Keynotes, workshops y networking con 1,200 asistentes.</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Comprar entradas</span>
              <span class="rounded-md px-4 py-2 text-sm font-semibold text-slate-200 ring-1 ring-white/20">Ver agenda</span>
            </div>
          </div>
          <img src="https://picsum.photos/seed/hero-1/640/420" alt="Auditorio lleno durante la keynote" loading="lazy" decoding="async" class="hidden aspect-[3/2] w-full rounded-md object-cover ring-1 ring-white/10" />
        </div>
      </div>
    </div>
    <span class="pointer-events-none absolute top-3 left-3 rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-white">1 / 3</span>
  </div>
  <div class="mt-3 flex items-center justify-center gap-2">
    <button type="button" aria-label="Ir al hero 1" class="h-2 w-6 rounded-full bg-blue-600"></button>
    <button type="button" aria-label="Ir al hero 2" class="h-2 w-2 rounded-full bg-slate-300"></button>
    <button type="button" aria-label="Ir al hero 3" class="h-2 w-2 rounded-full bg-slate-300"></button>
  </div>
</div>
`;

export const HERO_CAROUSEL_TSX = `
import { useEffect, useState } from 'react';

export const HeroCarousel = () => {
  const slides = [
    { eyebrow: 'Nuevo · Star Summit 2026', title: 'El evento que reúne al ecosistema', description: 'Keynotes, workshops y networking con 1,200 asistentes.', primaryLabel: 'Comprar entradas', secondaryLabel: 'Ver agenda', image: 'https://picsum.photos/seed/hero-1/640/420', imageAlt: 'Auditorio lleno durante la keynote' },
    { eyebrow: 'Developers · SDK v2', title: 'Integra pagos en minutos', description: 'CLI, REST y SDK con snippets copiables y sandbox inmediato.', primaryLabel: 'Probar sandbox', secondaryLabel: 'Leer docs', image: 'https://picsum.photos/seed/hero-2/640/420', imageAlt: 'Consola de desarrollador con código' },
    { eyebrow: 'Ops · Cluster EU1', title: 'Observabilidad sin fricción', description: 'Métricas p99, trazas y alertas programables por workspace.', primaryLabel: 'Ver métricas', secondaryLabel: 'Configurar alertas', image: 'https://picsum.photos/seed/hero-3/640/420', imageAlt: 'Dashboard de métricas en oscuro' },
  ];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const count = slides.length;
  const current = slides[index] ?? slides[0];

  const goTo = (next: number) => {
    setIndex(((next % count) + count) % count);
  };

  useEffect(() => {
    if (paused || hovering || count <= 1) return;
    const id = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % count);
    }, 5000);
    return () => window.clearTimeout(id);
  }, [paused, hovering, count, index]);

  return (
    <div className="w-full">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Carousel hero"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative w-full overflow-hidden rounded-md bg-slate-900 ring-1 ring-slate-800"
      >
        <div
          className="flex w-full transition-transform duration-300 ease-in-out motion-reduce:transition-none"
          style={{ transform: 'translateX(-' + index * 100 + '%)' }}
        >
          {slides.map((slide) => (
            <div key={slide.title} className="w-full min-w-full">
              <div className="grid items-center gap-6 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 p-6 sm:grid-cols-2 sm:p-8">
                <div>
                  <p className="font-mono text-[11px] font-semibold tracking-wide text-blue-300">{slide.eyebrow}</p>
                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{slide.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{slide.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white">{slide.primaryLabel}</span>
                    <span className="rounded-md px-4 py-2 text-sm font-semibold text-slate-200 ring-1 ring-white/20">{slide.secondaryLabel}</span>
                  </div>
                </div>
                <img src={slide.image} alt={slide.imageAlt} loading="lazy" decoding="async" draggable={false} className="hidden aspect-[3/2] w-full rounded-md object-cover ring-1 ring-white/10 sm:block" />
              </div>
            </div>
          ))}
        </div>
        <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-white">
          {index + 1} / {count}
        </span>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? 'Reanudar autoplay' : 'Pausar autoplay'}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">{paused ? 'play_arrow' : 'pause'}</span>
        </button>
        <button type="button" onClick={() => goTo(index - 1)} aria-label="Hero anterior" className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10">
          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">chevron_left</span>
        </button>
        <button type="button" onClick={() => goTo(index + 1)} aria-label="Hero siguiente" className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10">
          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">chevron_right</span>
        </button>
      </div>
      <div role="tablist" aria-label="Elegir hero" className="mt-3 flex items-center justify-center gap-2">
        {slides.map((slide, position) => (
          <button
            key={slide.title}
            type="button"
            role="tab"
            aria-selected={position === index}
            aria-label={'Ir al hero ' + (position + 1) + ': ' + slide.title}
            onClick={() => goTo(position)}
            className={position === index ? 'h-2 w-6 rounded-full bg-blue-600' : 'h-2 w-2 rounded-full bg-slate-300'}
          />
        ))}
      </div>
      <p aria-live="polite" className="mt-2 text-center text-sm text-slate-500">{current.title}</p>
    </div>
  );
};
`;
