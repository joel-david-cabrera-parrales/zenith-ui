import {
  PlacementsTooltipDoc,
  TonesTooltipDoc,
  SizesArrowsTooltipDoc,
  RichTooltipDoc,
  AnimationsTooltipDoc,
  TriggersTooltipDoc,
} from '@/features/tooltips/docs';

export const TooltipsPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Tooltips</h1>
        <p className="mt-1 text-sm text-slate-500">
          Ayudas contextuales con posiciones, tonos, tamanos, contenido enriquecido y animaciones configurables.
        </p>
      </header>
      <PlacementsTooltipDoc />
      <TonesTooltipDoc />
      <SizesArrowsTooltipDoc />
      <RichTooltipDoc />
      <AnimationsTooltipDoc />
      <TriggersTooltipDoc />
    </div>
  </div>
);
