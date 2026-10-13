import { useEffect, useId, useState } from 'react';

export interface CarouselCard {
  icon: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface CardsCarouselProps {
  cards?: CarouselCard[];
  defaultIndex?: number;
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  onIndexChange?: (index: number) => void;
  className?: string;
}

const DEFAULT_CARDS: CarouselCard[] = [
  {
    icon: 'rocket_launch',
    title: 'Despliegue continuo',
    description: 'Pipeline con previews por rama y rollback en un clic.',
    stat: '99.9%',
    statLabel: 'uptime mensual',
  },
  {
    icon: 'bolt',
    title: 'Rendimiento extremo',
    description: 'Edge cache y chunks diferidos para un TTI menor a 1s.',
    stat: '0.8s',
    statLabel: 'tiempo interactivo',
  },
  {
    icon: 'shield',
    title: 'Seguridad SSO',
    description: 'SAML, OIDC y auditoría completa por workspace.',
    stat: 'SOC2',
    statLabel: 'certificación vigente',
  },
  {
    icon: 'insights',
    title: 'Analítica en vivo',
    description: 'Funnels, retención y alertas programables.',
    stat: '+32%',
    statLabel: 'conversión media',
  },
];

const clampIndex = (index: number, length: number): number => {
  if (length === 0) return 0;
  return ((index % length) + length) % length;
};

export const CardsCarousel = ({
  cards = DEFAULT_CARDS,
  defaultIndex = 0,
  autoPlay = true,
  interval = 4000,
  showArrows = true,
  showDots = true,
  onIndexChange,
  className = '',
}: CardsCarouselProps) => {
  const [index, setIndex] = useState(() => clampIndex(defaultIndex, cards.length));
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const regionId = useId();
  const count = cards.length;
  const activeIndex = clampIndex(index, count);
  const current = cards[activeIndex] ?? DEFAULT_CARDS[0];

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
        aria-label="Carousel de cards"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative w-full overflow-hidden rounded-md bg-slate-100 ring-1 ring-slate-200"
      >
        <div
          className="flex w-full transition-transform duration-300 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {cards.map((card, position) => (
            <div key={card.title} aria-hidden={position !== activeIndex} className="flex w-full min-w-full justify-center p-6">
              <article className="w-full max-w-sm rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600/10 text-blue-700">
                  <span aria-hidden="true" className="material-symbols-outlined text-[22px]">
                    {card.icon}
                  </span>
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{card.description}</p>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900 tabular-nums">{card.stat}</span>
                  <span className="text-xs text-slate-500">{card.statLabel}</span>
                </p>
              </article>
            </div>
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
              aria-label="Card anterior"
              className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10 transition-colors hover:bg-slate-50"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                chevron_left
              </span>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Card siguiente"
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
        <div role="tablist" aria-label="Elegir card" className="mt-3 flex items-center justify-center gap-2">
          {cards.map((card, position) => {
            const selected = position === activeIndex;
            return (
              <button
                key={card.title}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={`Ir a la card ${position + 1}: ${card.title}`}
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
