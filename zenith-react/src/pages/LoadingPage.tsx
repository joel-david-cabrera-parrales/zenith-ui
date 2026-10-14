import {
  LoadingSpinnerDoc,
  LoadingBarDoc,
  LoadingDotsDoc,
  LoadingPulseDoc,
  LoadingRingDoc,
  LoadingSizesDoc,
  LoadingTonesDoc,
  LoadingButtonDoc,
  LoadingFormFieldDoc,
  LoadingCardOverlayDoc,
} from '@/features/loading/docs';

export const LoadingPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Loading</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Indicadores de carga: spinner, barra, dots, pulso y anillo, con tamaños, tonos y casos de uso.
        </p>
      </header>
      <LoadingSpinnerDoc />
      <LoadingBarDoc />
      <LoadingDotsDoc />
      <LoadingPulseDoc />
      <LoadingRingDoc />
      <LoadingSizesDoc />
      <LoadingTonesDoc />
      <LoadingButtonDoc />
      <LoadingFormFieldDoc />
      <LoadingCardOverlayDoc />
    </div>
  </div>
);
