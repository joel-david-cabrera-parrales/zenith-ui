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

export const ButtonsPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Botones</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">8 variantes de botones</p>
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