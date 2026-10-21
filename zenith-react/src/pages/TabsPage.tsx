import { useTranslation } from "@/shared/hooks/useTranslation";
import {
  BasicTabsDoc,
  SizesTabsDoc,
  IconTabsDoc,
  VariantsTabsDoc,
  VerticalTabsDoc,
  StatesTabsDoc,
  BadgedTabsDoc,
  SettingsTabsDoc,
} from '@/features/tabs/docs';

export const TabsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('pages.tabs.title')}</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('pages.tabs.subtitle')}</p>
        </header>
        <BasicTabsDoc />
        <SizesTabsDoc />
        <IconTabsDoc />
        <VariantsTabsDoc />
        <VerticalTabsDoc />
        <StatesTabsDoc />
        <BadgedTabsDoc />
        <SettingsTabsDoc />
      </div>
    </div>
  );
};
