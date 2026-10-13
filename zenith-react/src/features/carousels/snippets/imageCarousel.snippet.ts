export const IMAGE_CAROUSEL_HTML = `
<div class="w-full">
  <div class="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-slate-100 ring-1 ring-slate-200">
    <div class="flex h-full w-full transition-transform duration-300 ease-in-out" style="transform: translateX(-0%);">
      <img src="https://picsum.photos/seed/carousel-1/900/500" alt="Paisaje de montaña al amanecer" loading="lazy" decoding="async" draggable="false" class="h-full w-full min-w-full object-cover" />
      <img src="https://picsum.photos/seed/carousel-2/900/500" alt="" aria-hidden="true" loading="lazy" decoding="async" draggable="false" class="h-full w-full min-w-full object-cover" />
      <img src="https://picsum.photos/seed/carousel-3/900/500" alt="" aria-hidden="true" loading="lazy" decoding="async" draggable="false" class="h-full w-full min-w-full object-cover" />
      <img src="https://picsum.photos/seed/carousel-4/900/500" alt="" aria-hidden="true" loading="lazy" decoding="async" draggable="false" class="h-full w-full min-w-full object-cover" />
    </div>
    <span class="pointer-events-none absolute top-3 left-3 rounded-full bg-slate-900/70 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-white">1 / 4</span>
    <button type="button" aria-label="Pausar autoplay" class="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 text-white">
      <span aria-hidden="true" class="material-symbols-outlined text-[18px]">pause</span>
    </button>
    <button type="button" aria-label="Imagen anterior" class="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10">
      <span aria-hidden="true" class="material-symbols-outlined text-[20px]">chevron_left</span>
    </button>
    <button type="button" aria-label="Imagen siguiente" class="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10">
      <span aria-hidden="true" class="material-symbols-outlined text-[20px]">chevron_right</span>
    </button>
  </div>
  <div class="mt-3 flex items-center justify-center gap-2">
    <button type="button" aria-label="Ir a la imagen 1" class="h-2 w-6 rounded-full bg-blue-600"></button>
    <button type="button" aria-label="Ir a la imagen 2" class="h-2 w-2 rounded-full bg-slate-300"></button>
    <button type="button" aria-label="Ir a la imagen 3" class="h-2 w-2 rounded-full bg-slate-300"></button>
    <button type="button" aria-label="Ir a la imagen 4" class="h-2 w-2 rounded-full bg-slate-300"></button>
  </div>
  <p class="mt-2 text-center text-sm text-slate-500">Paisaje de montaña al amanecer</p>
</div>
`;

export const IMAGE_CAROUSEL_TSX = `
import { useEffect, useState } from 'react';

export const ImageCarousel = () => {
  const images = [
    { src: 'https://picsum.photos/seed/carousel-1/900/500', alt: 'Paisaje de montaña al amanecer' },
    { src: 'https://picsum.photos/seed/carousel-2/900/500', alt: 'Ciudad moderna de noche' },
    { src: 'https://picsum.photos/seed/carousel-3/900/500', alt: 'Playa con palmeras' },
    { src: 'https://picsum.photos/seed/carousel-4/900/500', alt: 'Bosque con niebla' },
  ];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const count = images.length;
  const current = images[index] ?? images[0];

  const goTo = (next: number) => {
    setIndex(((next % count) + count) % count);
  };

  useEffect(() => {
    if (paused || hovering || count <= 1) return;
    const id = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % count);
    }, 4000);
    return () => window.clearTimeout(id);
  }, [paused, hovering, count, index]);

  return (
    <div className="w-full">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Galería de imágenes"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-slate-100 ring-1 ring-slate-200"
      >
        <div
          className="flex h-full w-full transition-transform duration-300 ease-in-out motion-reduce:transition-none"
          style={{ transform: 'translateX(-' + index * 100 + '%)' }}
        >
          {images.map((image, position) => (
            <img
              key={image.src}
              src={image.src}
              alt={position === index ? image.alt : ''}
              aria-hidden={position !== index}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-full w-full min-w-full object-cover"
            />
          ))}
        </div>
        <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-slate-900/70 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-white">
          {index + 1} / {count}
        </span>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? 'Reanudar autoplay' : 'Pausar autoplay'}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 text-white"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
            {paused ? 'play_arrow' : 'pause'}
          </span>
        </button>
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Imagen anterior"
          className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">chevron_left</span>
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Imagen siguiente"
          className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">chevron_right</span>
        </button>
      </div>
      <div role="tablist" aria-label="Elegir imagen" className="mt-3 flex items-center justify-center gap-2">
        {images.map((image, position) => (
          <button
            key={image.src}
            type="button"
            role="tab"
            aria-selected={position === index}
            aria-label={'Ir a la imagen ' + (position + 1) + ': ' + image.alt}
            onClick={() => goTo(position)}
            className={position === index ? 'h-2 w-6 rounded-full bg-blue-600' : 'h-2 w-2 rounded-full bg-slate-300'}
          />
        ))}
      </div>
      <p aria-live="polite" className="mt-2 text-center text-sm text-slate-500">
        {current.alt}
      </p>
    </div>
  );
};
`;
