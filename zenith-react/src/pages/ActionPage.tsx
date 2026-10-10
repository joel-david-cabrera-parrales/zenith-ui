import {
  ButtonVariantsDoc,
  SemanticButtonsDoc,
  ButtonIconsDoc,
  IconButtonsDoc,
  ButtonGroupsDoc,
  ButtonStatesDoc,
  ButtonSizesDoc,
  FullWidthButtonsDoc,
} from '@/features/botones/docs';

export const ActionPage = () => (
  <div className="bg-slate-950 min-h-screen dark:bg-slate-950">
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Action</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Botones, Icon Buttons y Segmented Control</p>
      </header>
      <ButtonVariantsDoc />
      <SemanticButtonsDoc />
      <ButtonIconsDoc />
      <IconButtonsDoc />
      <ButtonGroupsDoc />
      <ButtonStatesDoc />
      <ButtonSizesDoc />
      <FullWidthButtonsDoc />
    </div>
  </div>
);