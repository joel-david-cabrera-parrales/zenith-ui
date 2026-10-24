import { useTranslation } from '@/shared/hooks/useTranslation';
import { AdvancedAnalyticsDoc, AdvancedDashboardDoc, ChartDashboardDoc, ChartStatesDoc, ChartTypesDoc } from '@/features/charts';
import { TerminalCommand } from '@/shared/components/doc';

const RECHARTS_INSTALL_COMMAND = 'npm install recharts';

export const ChartsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl space-y-8 p-4 sm:p-6">
        <header>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            {t('pages.charts.title')}
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {t('pages.charts.subtitle')}
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            {t('pages.charts.description')}
          </p>
        </header>
        <TerminalCommand
          command={RECHARTS_INSTALL_COMMAND}
          accentPrefix="npm install"
          label={t('pages.charts.terminal')}
          copyLabel={t('pages.charts.copyCommand')}
          copiedLabel={t('pages.charts.copied')}
          className="max-w-4xl"
        />
        <ChartTypesDoc />
        <ChartStatesDoc />
        <ChartDashboardDoc />
        <AdvancedAnalyticsDoc />
        <AdvancedDashboardDoc />
      </div>
    </div>
  );
};
