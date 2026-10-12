import {
  AnchorToastsDoc,
  OutlineToastsDoc,
  PlaygroundDoc,
  RichToastsDoc,
  SoftToastsDoc,
  SolidToastsDoc,
  TimedToastsDoc,
} from '@/features/toasts/docs';

export const ToastsPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Toasts</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Variantes Solid / Soft / Outline · temporizados · ricos · anclajes · playground
        </p>
      </header>
      <SolidToastsDoc />
      <SoftToastsDoc />
      <OutlineToastsDoc />
      <TimedToastsDoc />
      <RichToastsDoc />
      <AnchorToastsDoc />
      <PlaygroundDoc />
    </div>
  </div>
);
