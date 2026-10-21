import { useTranslation } from "@/shared/hooks/useTranslation";
import {
  StatSparklineDoc,
  QuotaProgressDoc,
  GatewaySplitDoc,
  HeroCoverDoc,
  HorizontalSplitDoc,
  ThumbnailTagsDoc,
  ProductResourceDoc,
  ApiEndpointDoc,
  FeatureServiceDoc,
  TestimonialDoc,
  PricingTierDoc,
  SelectableOptionsDoc,
  TaskKanbanDoc,
  AlertNoticeDoc,
  RepoCardDoc,
  ShowcaseGridListDoc,
  DocLinkDoc,
  MetricMiniDoc,
  StatusDraftDoc,
  MemberCardDoc,
  QuickActionsDoc,
  AccentNoticeDoc,
} from '@/features/cards/docs';

export const CardsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('pages.display.cards.title')}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('pages.display.cards.subtitle')}</p>
        </header>
        <StatSparklineDoc maxWidth="full" />
        <QuotaProgressDoc maxWidth="full" />
        <GatewaySplitDoc maxWidth="full" />
        <HeroCoverDoc maxWidth="full" />
        <HorizontalSplitDoc maxWidth="full" />
        <ThumbnailTagsDoc maxWidth="full" />
        <ProductResourceDoc maxWidth="full" />
        <ApiEndpointDoc maxWidth="full" />
        <FeatureServiceDoc maxWidth="full" />
        <TestimonialDoc maxWidth="full" />
        <PricingTierDoc maxWidth="full" />
        <SelectableOptionsDoc maxWidth="full" />
        <TaskKanbanDoc maxWidth="full" />
        <AlertNoticeDoc maxWidth="full" />
        <RepoCardDoc maxWidth="full" />
        <ShowcaseGridListDoc maxWidth="full" />
        <DocLinkDoc maxWidth="full" />
        <MetricMiniDoc maxWidth="full" />
        <StatusDraftDoc maxWidth="full" />
        <MemberCardDoc maxWidth="full" />
        <QuickActionsDoc maxWidth="full" />
        <AccentNoticeDoc maxWidth="full" />
      </div>
    </div>
  );
};