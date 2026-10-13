import { CardsCarouselDoc, HeroCarouselDoc, ImageCarouselDoc, TestimonialsCarouselDoc } from '@/features/carousels/docs';

export const CarouselsPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Carousels</h1>
      </header>
      <ImageCarouselDoc />
      <CardsCarouselDoc />
      <TestimonialsCarouselDoc />
      <HeroCarouselDoc />
    </div>
  </div>
);
