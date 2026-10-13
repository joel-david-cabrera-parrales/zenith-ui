export const TESTIMONIALS_CAROUSEL_HTML = `
<div class="w-full">
  <div class="relative w-full overflow-hidden rounded-md bg-slate-900 ring-1 ring-slate-800">
    <div class="flex w-full transition-transform duration-300 ease-in-out" style="transform: translateX(-0%);">
      <figure class="w-full min-w-full p-6 text-center">
        <div class="flex items-center justify-center gap-1 text-blue-400">
          <span class="material-symbols-outlined text-[18px]">star</span>
          <span class="material-symbols-outlined text-[18px]">star</span>
          <span class="material-symbols-outlined text-[18px]">star</span>
          <span class="material-symbols-outlined text-[18px]">star</span>
          <span class="material-symbols-outlined text-[18px]">star</span>
        </div>
        <blockquote class="mx-auto mt-3 max-w-xl text-base text-slate-100">“Migramos el catálogo en dos semanas y el tiempo de carga bajó a la mitad.”</blockquote>
        <figcaption class="mt-4 flex items-center justify-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">MS</span>
          <span class="text-left">
            <span class="block text-sm font-semibold text-white">Mariana Silva</span>
            <span class="block text-xs text-slate-400">Coordinadora VIP</span>
          </span>
        </figcaption>
      </figure>
    </div>
    <span class="pointer-events-none absolute top-3 left-3 rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-white">1 / 3</span>
  </div>
  <div class="mt-3 flex items-center justify-center gap-2">
    <button type="button" aria-label="Ir al testimonio 1" class="h-2 w-6 rounded-full bg-blue-600"></button>
    <button type="button" aria-label="Ir al testimonio 2" class="h-2 w-2 rounded-full bg-slate-300"></button>
    <button type="button" aria-label="Ir al testimonio 3" class="h-2 w-2 rounded-full bg-slate-300"></button>
  </div>
</div>
`;

export const TESTIMONIALS_CAROUSEL_TSX = `
import { useEffect, useState } from 'react';

export const TestimonialsCarousel = () => {
  const testimonials = [
    { quote: 'Migramos el catálogo en dos semanas y el tiempo de carga bajó a la mitad.', name: 'Mariana Silva', role: 'Coordinadora VIP', initials: 'MS' },
    { quote: 'Los snippets copiables nos ahorran horas en cada entrega con cliente.', name: 'Jonathan J.', role: 'Administrador General', initials: 'JJ' },
    { quote: 'El autoplay con pausa en hover es justo lo que pedía accesibilidad.', name: 'Elena Ruiz', role: 'Diseñadora de producto', initials: 'ER' },
  ];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const count = testimonials.length;
  const current = testimonials[index] ?? testimonials[0];

  const goTo = (next: number) => {
    setIndex(((next % count) + count) % count);
  };

  useEffect(() => {
    if (paused || hovering || count <= 1) return;
    const id = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % count);
    }, 6000);
    return () => window.clearTimeout(id);
  }, [paused, hovering, count, index]);

  return (
    <div className="w-full">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Carousel de testimonios"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative w-full overflow-hidden rounded-md bg-slate-900 ring-1 ring-slate-800"
      >
        <div
          className="flex w-full transition-transform duration-300 ease-in-out motion-reduce:transition-none"
          style={{ transform: 'translateX(-' + index * 100 + '%)' }}
        >
          {testimonials.map((item) => (
            <figure key={item.name} className="w-full min-w-full p-6 text-center sm:p-8">
              <div aria-hidden="true" className="flex items-center justify-center gap-1 text-blue-400">
                {['1', '2', '3', '4', '5'].map((star) => (
                  <span key={star} className="material-symbols-outlined text-[18px]">star</span>
                ))}
              </div>
              <blockquote className="mx-auto mt-3 max-w-xl text-base text-slate-100">“{item.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center justify-center gap-3">
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{item.initials}</span>
                <span className="text-left">
                  <span className="block text-sm font-semibold text-white">{item.name}</span>
                  <span className="block text-xs text-slate-400">{item.role}</span>
                </span>
              </figcaption>
            </figure>
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
        <button type="button" onClick={() => goTo(index - 1)} aria-label="Testimonio anterior" className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10">
          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">chevron_left</span>
        </button>
        <button type="button" onClick={() => goTo(index + 1)} aria-label="Testimonio siguiente" className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10">
          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">chevron_right</span>
        </button>
      </div>
      <div role="tablist" aria-label="Elegir testimonio" className="mt-3 flex items-center justify-center gap-2">
        {testimonials.map((item, position) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={position === index}
            aria-label={'Ir al testimonio ' + (position + 1) + ': ' + item.name}
            onClick={() => goTo(position)}
            className={position === index ? 'h-2 w-6 rounded-full bg-blue-600' : 'h-2 w-2 rounded-full bg-slate-300'}
          />
        ))}
      </div>
      <p aria-live="polite" className="mt-2 text-center text-sm text-slate-500">{current.name} — {current.role}</p>
    </div>
  );
};
`;
