import { useEffect, useId, useState } from 'react';

export interface HeroSlide {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
  image: string;
  imageAlt: string;
}

export interface HeroCarouselProps {
  slides?: HeroSlide[];
  defaultIndex?: number;
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  onIndexChange?: (index: number) => void;
  className?: string;
}

const DEFAULT_SLIDES: HeroSlide[] = [
  {
    eyebrow: 'Nuevo · Star Summit 2026',
    title: 'El evento que reúne al ecosistema',
    description: 'Keynotes, workshops y networking con 1,200 asistentes en el auditorio principal.',
    primaryLabel: 'Comprar entradas',
    secondaryLabel: 'Ver agenda',
    image: 'https://picsum.photos/seed/hero-1/640/420',
    imageAlt: 'Auditorio lleno durante la keynote',
  },
  {
    eyebrow: 'Developers · SDK v2',
    title: 'Integra pagos en minutos',
    description: 'CLI, REST y SDK con snippets copiables y sandbox inmediato.',
    primaryLabel: 'Probar sandbox',
    secondaryLabel: 'Leer docs',
    image: 'https://picsum.photos/seed/hero-2/640/420',
    imageAlt: 'Consola de desarrollador con código',
  },
  {
    eyebrow: 'Ops · Cluster EU1',
    title: 'Observabilidad sin fricción',
    description: 'Métricas p99, trazas y alertas programables por workspace.',
    primaryLabel: 'Ver métricas',
    secondaryLabel: 'Configurar alertas',
    image: 'https://picsum.photos/seed/hero-3/640/420',
    imageAlt: 'Dashboard de métricas en oscuro',
  },
];

const clampIndex = (index: number, length: number): number => {
  if (length === 0) return 0;
  return ((index % length) + length) % length;
};

export const HeroCarousel = ({
  slides = DEFAULT_SLIDES,
  defaultIndex = 0,
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  onIndexChange,
  className = '',
}: HeroCarouselProps) => {
  const [index, setIndex] = useState(() => clampIndex(defaultIndex, slides.length));
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const regionId = useId();
  const count = slides.length;
  const activeIndex = clampIndex(index, count);
  const current = slides[activeIndex] ?? DEFAULT_SLIDES[0];

  const goTo = (next: number) => {
    const resolved = clampIndex(next, count);
    setIndex(resolved);
    onIndexChange?.(resolved);
  };

  const goPrev = () => {
    goTo(index - 1);
  };

  const goNext = () => {
    goTo(index + 1);
  };

  useEffect(() => {
    if (!autoPlay || paused || hovering || count <= 1) return;
    const id = window.setTimeout(() => {
      setIndex((prev) => clampIndex(prev + 1, count));
    }, interval);
    return () => window.clearTimeout(id);
  }, [autoPlay, paused, hovering, count, interval, index]);

  const togglePaused = () => {
    setPaused((prev) => !prev);
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        id={regionId}
        role="region"
        aria-roledescription="carousel"
        aria-label="Carousel hero"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative w-full overflow-hidden rounded-md bg-slate-900 ring-1 ring-slate-800"
      >
        <div
          className="flex w-full transition-transform duration-300 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, position) => (
            <div key={slide.title} aria-hidden={position !== activeIndex} className="w-full min-w-full">
              <div className="grid items-center gap-6 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 p-6 sm:grid-cols-2 sm:p-8">
                <div>
                  <p className="font-mono text-[11px] font-semibold tracking-wide text-blue-300">{slide.eyebrow}</p>
                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{slide.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{slide.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                      {slide.primaryLabel}
                    </span>
                    <span className="rounded-md px-4 py-2 text-sm font-semibold text-slate-200 ring-1 ring-white/20">
                      {slide.secondaryLabel}
                    </span>
                  </div>
                </div>
                <img
                  src={slide.image}
                  alt={position === activeIndex ? slide.imageAlt : ''}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="hidden aspect-[3/2] w-full rounded-md object-cover ring-1 ring-white/10 sm:block"
                />
              </div>
            </div>
          ))}
        </div>
        <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-white">
          {activeIndex + 1} / {count}
        </span>
        <button
          type="button"
          onClick={togglePaused}
          aria-pressed={paused}
          aria-label={paused ? 'Reanudar autoplay' : 'Pausar autoplay'}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
            {paused ? 'play_arrow' : 'pause'}
          </span>
        </button>
        {showArrows && count > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Hero anterior"
              className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10 transition-colors hover:bg-slate-50"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                chevron_left
              </span>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Hero siguiente"
              className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10 transition-colors hover:bg-slate-50"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                chevron_right
              </span>
            </button>
          </>
        )}
      </div>
      {showDots && count > 1 && (
        <div role="tablist" aria-label="Elegir hero" className="mt-3 flex items-center justify-center gap-2">
          {slides.map((slide, position) => {
            const selected = position === activeIndex;
            return (
              <button
                key={slide.title}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={`Ir al hero ${position + 1}: ${slide.title}`}
                onClick={() => goTo(position)}
                className={`h-2 rounded-full transition-all ${
                  selected ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            );
          })}
        </div>
      )}
      <p aria-live="polite" className="mt-2 text-center text-sm text-slate-500">
        {current.title}
      </p>
    </div>
  );
};
