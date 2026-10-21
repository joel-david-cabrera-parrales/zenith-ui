import { useTranslation } from "@/shared/hooks/useTranslation";
import {
  ProgressBasicDoc,
  ProgressSizesDoc,
  ProgressTonesDoc,
  ProgressVariantsDoc,
  ProgressUseCasesDoc,
} from '@/features/progress/docs';

export const ProgressPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('pages.progress.title')}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('pages.progress.subtitle')}</p>
        </header>
        <ProgressBasicDoc />
        <ProgressSizesDoc />
        <ProgressTonesDoc />
        <ProgressVariantsDoc />
        <ProgressUseCasesDoc />
      </div>
    </div>
  );
};