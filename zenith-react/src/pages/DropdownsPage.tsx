import { useTranslation } from "@/shared/hooks/useTranslation";
import {
  AccountSwitcherDoc,
  AlignMenusDoc,
  BranchSwitcherDoc,
  GroupedResourcesDoc,
  KebabMenuDoc,
  ModeSelectDoc,
  NotificationsFlyoutDoc,
  RegionSelectDoc,
  RowActionsMenuDoc,
  SplitDeployDoc,
  TagMultiSelectDoc,
} from '@/features/dropdowns/docs';

export const DropdownsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('pages.dropdowns.title')}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('pages.dropdowns.subtitle')}</p>
        </header>
        <RowActionsMenuDoc />
        <KebabMenuDoc />
        <SplitDeployDoc />
        <ModeSelectDoc />
        <RegionSelectDoc />
        <TagMultiSelectDoc />
        <GroupedResourcesDoc />
        <AccountSwitcherDoc />
        <NotificationsFlyoutDoc />
        <BranchSwitcherDoc />
        <AlignMenusDoc />
      </div>
    </div>
  );
};
