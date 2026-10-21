import { useTranslation } from "@/shared/hooks/useTranslation";
import {
  ActionLinksDoc,
  BadgeSizesDoc,
  CountBadgesDoc,
  DismissibleChipsDoc,
  IconBadgesDoc,
  OutlineBadgesDoc,
  SelectableChipsDoc,
  SoftBadgesDoc,
  SolidBadgesDoc,
  SplitBadgesDoc,
  StatusPillsDoc,
  UserPillsDoc,
} from '@/features/badges/docs';

export const BadgesPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('pages.badges.title')}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('pages.badges.subtitle')}</p>
        </header>
        <SolidBadgesDoc />
        <SoftBadgesDoc />
        <OutlineBadgesDoc />
        <StatusPillsDoc />
        <IconBadgesDoc />
        <CountBadgesDoc />
        <UserPillsDoc />
        <SplitBadgesDoc />
        <DismissibleChipsDoc />
        <SelectableChipsDoc />
        <ActionLinksDoc />
        <BadgeSizesDoc />
      </div>
    </div>
  );
};
