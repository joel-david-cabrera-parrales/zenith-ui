import { useEffect, useId, useState } from 'react';

export interface CarouselTestimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface TestimonialsCarouselProps {
  testimonials?: CarouselTestimonial[];
  defaultIndex?: number;
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  onIndexChange?: (index: number) => void;
  className?: string;
}

const DEFAULT_TESTIMONIALS: CarouselTestimonial[] = [
  {
    quote: 'Migramos el catálogo en dos semanas y el tiempo de carga bajó a la mitad.',
    name: 'Mariana Silva',
    role: 'Coordinadora VIP',
    initials: 'MS',
  },
  {
    quote: 'Los snippets copiables nos ahorran horas en cada entrega con cliente.',
    name: 'Jonathan J.',
    role: 'Administrador General',
    initials: 'JJ',
  },
  {
    quote: 'El autoplay con pausa en hover es justo lo que pedía accesibilidad.',
    name: 'Elena Ruiz',
    role: 'Diseñadora de producto',
    initials: 'ER',
  },
];

const clampIndex = (index: number, length: number): number => {
  if (length === 0) return 0;
  return ((index % length) + length) % length;
};

export const TestimonialsCarousel = ({
  testimonials = DEFAULT_TESTIMONIALS,
  defaultIndex = 0,
  autoPlay = true,
  interval = 6000,
  showArrows = true,
  showDots = true,
  onIndexChange,
  className = '',
}: TestimonialsCarouselProps) => {
  const [index, setIndex] = useState(() => clampIndex(defaultIndex, testimonials.length));
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const regionId = useId();
  const count = testimonials.length;
  const activeIndex = clampIndex(index, count);
  const current = testimonials[activeIndex] ?? DEFAULT_TESTIMONIALS[0];

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
        aria-label="Carousel de testimonios"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative w-full overflow-hidden rounded-md bg-slate-900 ring-1 ring-slate-800"
      >
        <div
          className="flex w-full transition-transform duration-300 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((item, position) => (
            <figure key={item.name} aria-hidden={position !== activeIndex} className="w-full min-w-full p-6 text-center sm:p-8">
              <div aria-hidden="true" className="flex items-center justify-center gap-1 text-blue-400">
                {['1', '2', '3', '4', '5'].map((star) => (
                  <span key={star} className="material-symbols-outlined text-[18px]">
                    star
                  </span>
                ))}
              </div>
              <blockquote className="mx-auto mt-3 max-w-xl text-base text-slate-100 sm:text-lg">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-center gap-3">
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {item.initials}
                </span>
                <span className="text-left">
                  <span className="block text-sm font-semibold text-white">{item.name}</span>
                  <span className="block text-xs text-slate-400">{item.role}</span>
                </span>
              </figcaption>
            </figure>
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
              aria-label="Testimonio anterior"
              className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10 transition-colors hover:bg-slate-50"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                chevron_left
              </span>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Testimonio siguiente"
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
        <div role="tablist" aria-label="Elegir testimonio" className="mt-3 flex items-center justify-center gap-2">
          {testimonials.map((item, position) => {
            const selected = position === activeIndex;
            return (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={`Ir al testimonio ${position + 1}: ${item.name}`}
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
        {current.name} — {current.role}
      </p>
    </div>
  );
};
