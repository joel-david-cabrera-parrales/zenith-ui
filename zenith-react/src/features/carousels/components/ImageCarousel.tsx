import { useEffect, useId, useState } from 'react';

export interface CarouselImage {
  src: string;
  alt: string;
}

export interface ImageCarouselProps {
  images?: CarouselImage[];
  defaultIndex?: number;
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  onIndexChange?: (index: number) => void;
  className?: string;
}

const DEFAULT_IMAGES: CarouselImage[] = [
  { src: 'https://picsum.photos/seed/carousel-1/900/500', alt: 'Paisaje de montaña al amanecer' },
  { src: 'https://picsum.photos/seed/carousel-2/900/500', alt: 'Ciudad moderna de noche' },
  { src: 'https://picsum.photos/seed/carousel-3/900/500', alt: 'Playa con palmeras' },
  { src: 'https://picsum.photos/seed/carousel-4/900/500', alt: 'Bosque con niebla' },
];

const clampIndex = (index: number, length: number): number => {
  if (length === 0) return 0;
  return ((index % length) + length) % length;
};

export const ImageCarousel = ({
  images = DEFAULT_IMAGES,
  defaultIndex = 0,
  autoPlay = true,
  interval = 4000,
  showArrows = true,
  showDots = true,
  onIndexChange,
  className = '',
}: ImageCarouselProps) => {
  const [index, setIndex] = useState(() => clampIndex(defaultIndex, images.length));
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const regionId = useId();
  const count = images.length;
  const activeIndex = clampIndex(index, count);
  const current = images[activeIndex] ?? DEFAULT_IMAGES[0];

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
      setIndex((prev) => {
        const next = clampIndex(prev + 1, count);
        return next;
      });
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
        aria-label="Galería de imágenes"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-slate-100 ring-1 ring-slate-200"
      >
        <div
          className="flex h-full w-full transition-transform duration-300 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, position) => (
            <img
              key={image.src}
              src={image.src}
              alt={position === activeIndex ? image.alt : ''}
              aria-hidden={position !== activeIndex}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-full w-full min-w-full object-cover"
            />
          ))}
        </div>
        <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-slate-900/70 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-white">
          {activeIndex + 1} / {count}
        </span>
        <button
          type="button"
          onClick={togglePaused}
          aria-pressed={paused}
          aria-label={paused ? 'Reanudar autoplay' : 'Pausar autoplay'}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 text-white transition-colors hover:bg-slate-900"
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
              aria-label="Imagen anterior"
              className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10 transition-colors hover:bg-slate-50"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                chevron_left
              </span>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Imagen siguiente"
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
        <div role="tablist" aria-label="Elegir imagen" className="mt-3 flex items-center justify-center gap-2">
          {images.map((image, position) => {
            const selected = position === activeIndex;
            return (
              <button
                key={image.src}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={`Ir a la imagen ${position + 1}: ${image.alt}`}
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
        {current.alt}
      </p>
    </div>
  );
};
