import { useTranslation } from "@/shared/hooks/useTranslation";
import {
  CenteredTechDoc,
  SplitFormDoc,
  DashboardMetricsDoc,
  DeveloperConsoleDoc,
  EventBannerDoc,
  MarketingGrowthDoc,
  PhotographyShowcaseDoc,
  BrandingStudioDoc,
  CreatorStudioDoc,
} from '@/features/hero/docs';

export const HeroPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('pages.display.hero.title')}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('pages.display.hero.subtitle')}</p>
        </header>
        <CenteredTechDoc maxWidth="7xl" />
        <SplitFormDoc maxWidth="7xl" />
        <DashboardMetricsDoc maxWidth="7xl" />
        <DeveloperConsoleDoc maxWidth="7xl" />
        <EventBannerDoc maxWidth="7xl" />
        <MarketingGrowthDoc maxWidth="7xl" />
        <PhotographyShowcaseDoc maxWidth="7xl" />
        <BrandingStudioDoc maxWidth="7xl" />
        <CreatorStudioDoc maxWidth="7xl" />
      </div>
    </div>
  );
};