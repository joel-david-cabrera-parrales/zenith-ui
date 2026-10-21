import { useTranslation } from "@/shared/hooks/useTranslation";

export const DashboardPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto p-8 space-y-8">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{t('pages.dashboard.title')}</h1>
          <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">{t('pages.dashboard.subtitle')}</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
            <h3 className="font-semibold text-slate-900 dark:text-white">{t('pages.dashboard.layout')}</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('pages.dashboard.layoutDesc')}</p>
          </div>
          <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
            <h3 className="font-semibold text-slate-900 dark:text-white">{t('pages.dashboard.dataInputs')}</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('pages.dashboard.dataInputsDesc')}</p>
          </div>
          <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
            <h3 className="font-semibold text-slate-900 dark:text-white">{t('pages.dashboard.feedback')}</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('pages.dashboard.feedbackDesc')}</p>
          </div>
          <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
            <h3 className="font-semibold text-slate-900 dark:text-white">{t('pages.dashboard.display')}</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('pages.dashboard.displayDesc')}</p>
          </div>
          <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
            <h3 className="font-semibold text-slate-900 dark:text-white">{t('pages.dashboard.action')}</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('pages.dashboard.actionDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};