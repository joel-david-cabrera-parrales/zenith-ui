import { useTranslation } from "@/shared/hooks/useTranslation";
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

export const ActionPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-950 min-h-screen dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('pages.action.title')}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('pages.action.subtitle')}</p>
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
};