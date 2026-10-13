export const CARDS_CAROUSEL_HTML = `
<div class="w-full">
  <div class="relative w-full overflow-hidden rounded-md bg-slate-100 ring-1 ring-slate-200">
    <div class="flex w-full transition-transform duration-300 ease-in-out" style="transform: translateX(-0%);">
      <div class="flex w-full min-w-full justify-center p-6">
        <article class="w-full max-w-sm rounded-md border border-slate-200 bg-white p-6 shadow-sm">
          <span class="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600/10 text-blue-700">
            <span aria-hidden="true" class="material-symbols-outlined text-[22px]">rocket_launch</span>
          </span>
          <h3 class="mt-4 text-base font-semibold text-slate-900">Despliegue continuo</h3>
          <p class="mt-1 text-sm text-slate-500">Pipeline con previews por rama y rollback en un clic.</p>
          <p class="mt-4 flex items-baseline gap-2">
            <span class="text-2xl font-bold text-slate-900">99.9%</span>
            <span class="text-xs text-slate-500">uptime mensual</span>
          </p>
        </article>
      </div>
    </div>
    <span class="pointer-events-none absolute top-3 left-3 rounded-full bg-slate-900/70 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide text-white">1 / 4</span>
  </div>
  <div class="mt-3 flex items-center justify-center gap-2">
    <button type="button" aria-label="Ir a la card 1" class="h-2 w-6 rounded-full bg-blue-600"></button>
    <button type="button" aria-label="Ir a la card 2" class="h-2 w-2 rounded-full bg-slate-300"></button>
    <button type="button" aria-label="Ir a la card 3" class="h-2 w-2 rounded-full bg-slate-300"></button>
    <button type="button" aria-label="Ir a la card 4" class="h-2 w-2 rounded-full bg-slate-300"></button>
  </div>
</div>
`;

export const CARDS_CAROUSEL_TSX = `
import { useEffect, useState } from 'react';

export const CardsCarousel = () => {
  const cards = [
    { icon: 'rocket_launch', title: 'Despliegue continuo', description: 'Pipeline con previews por rama y rollback en un clic.', stat: '99.9%', statLabel: 'uptime mensual' },
    { icon: 'bolt', title: 'Rendimiento extremo', description: 'Edge cache y chunks diferidos para un TTI menor a 1s.', stat: '0.8s', statLabel: 'tiempo interactivo' },
    { icon: 'shield', title: 'Seguridad SSO', description: 'SAML, OIDC y auditoría completa por workspace.', stat: 'SOC2', statLabel: 'certificación vigente' },
    { icon: 'insights', title: 'Analítica en vivo', description: 'Funnels, retención y alertas programables.', stat: '+32%', statLabel: 'conversión media' },
  ];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const count = cards.length;
  const current = cards[index] ?? cards[0];

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
        aria-label="Carousel de cards"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative w-full overflow-hidden rounded-md bg-slate-100 ring-1 ring-slate-200"
      >
        <div
          className="flex w-full transition-transform duration-300 ease-in-out motion-reduce:transition-none"
          style={{ transform: 'translateX(-' + index * 100 + '%)' }}
        >
          {cards.map((card) => (
            <div key={card.title} className="flex w-full min-w-full justify-center p-6">
              <article className="w-full max-w-sm rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600/10 text-blue-700">
                  <span aria-hidden="true" className="material-symbols-outlined text-[22px]">{card.icon}</span>
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{card.description}</p>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900">{card.stat}</span>
                  <span className="text-xs text-slate-500">{card.statLabel}</span>
                </p>
              </article>
            </div>
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
          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">{paused ? 'play_arrow' : 'pause'}</span>
        </button>
        <button type="button" onClick={() => goTo(index - 1)} aria-label="Card anterior" className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10">
          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">chevron_left</span>
        </button>
        <button type="button" onClick={() => goTo(index + 1)} aria-label="Card siguiente" className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10">
          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">chevron_right</span>
        </button>
      </div>
      <div role="tablist" aria-label="Elegir card" className="mt-3 flex items-center justify-center gap-2">
        {cards.map((card, position) => (
          <button
            key={card.title}
            type="button"
            role="tab"
            aria-selected={position === index}
            aria-label={'Ir a la card ' + (position + 1) + ': ' + card.title}
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
