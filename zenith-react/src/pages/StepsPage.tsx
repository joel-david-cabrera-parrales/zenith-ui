import { useTranslation } from "@/shared/hooks/useTranslation";
import {
  BasicStepsDoc,
  VerticalStepsDoc,
  IconStepsDoc,
  ErrorStepsDoc,
  WizardStepsDoc,
  CheckoutStepsDoc,
  TrackingStepsDoc,
  CheckoutPaymentFlowDoc,
  TeamOnboardingFlowDoc,
  OrderTrackingFlowDoc,
} from '@/features/steps/docs';

export const StepsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('pages.steps.title')}</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('pages.steps.subtitle')}</p>
        </header>
        <BasicStepsDoc />
        <VerticalStepsDoc />
        <IconStepsDoc />
        <ErrorStepsDoc />
        <WizardStepsDoc />
        <CheckoutStepsDoc />
        <TrackingStepsDoc />
        <CheckoutPaymentFlowDoc />
        <TeamOnboardingFlowDoc />
        <OrderTrackingFlowDoc />
      </div>
    </div>
  );
};
