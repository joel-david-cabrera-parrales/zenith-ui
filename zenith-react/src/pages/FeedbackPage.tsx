import { useTranslation } from "@/shared/hooks/useTranslation";
import {
  SmallModalDoc,
  MediumModalDoc,
  LargeModalDoc,
  FullscreenModalDoc,
  InfoModalDoc,
  SuccessModalDoc,
  WarningModalDoc,
  DangerModalDoc,
  FormModalDoc,
  SettingsPanelDoc,
  ApiKeyModalDoc,
  BottomSheetDoc,
  ConnectionDrawerDoc,
  ClusterDrawerDoc,
  NavDrawerDoc,
  FiltersDrawerDoc,
} from '@/features/modals/docs';

export const FeedbackPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-950 min-h-screen dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('pages.feedback.title')}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('pages.feedback.subtitle')}</p>
        </header>
        <SmallModalDoc />
        <MediumModalDoc />
        <LargeModalDoc />
        <FullscreenModalDoc />
        <InfoModalDoc />
        <SuccessModalDoc />
        <WarningModalDoc />
        <DangerModalDoc />
        <FormModalDoc />
        <SettingsPanelDoc />
        <ApiKeyModalDoc />
        <BottomSheetDoc />
        <ConnectionDrawerDoc />
        <ClusterDrawerDoc />
        <NavDrawerDoc />
        <FiltersDrawerDoc />
      </div>
    </div>
  );
};