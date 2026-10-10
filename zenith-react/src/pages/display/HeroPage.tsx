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

export const HeroPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Hero Sections</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">9 secciones hero</p>
      </header>
      <CenteredTechDoc />
      <SplitFormDoc />
      <DashboardMetricsDoc />
      <DeveloperConsoleDoc />
      <EventBannerDoc />
      <MarketingGrowthDoc />
      <PhotographyShowcaseDoc />
      <BrandingStudioDoc />
      <CreatorStudioDoc />
    </div>
  </div>
);