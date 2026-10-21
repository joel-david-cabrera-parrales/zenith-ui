import { useTranslation } from "@/shared/hooks/useTranslation";
import {
  BottomSheetDoc,
  ConnectionDrawerDoc,
  ClusterDrawerDoc,
  NavDrawerDoc,
  FiltersDrawerDoc,
} from '@/features/modals/docs';

export const DrawersPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('pages.drawers.title')}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('pages.drawers.subtitle')}</p>
        </header>
        <BottomSheetDoc />
        <ConnectionDrawerDoc />
        <ClusterDrawerDoc />
        <NavDrawerDoc />
        <FiltersDrawerDoc />
      </div>
    </div>
  );
};