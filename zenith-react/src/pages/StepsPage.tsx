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

export const StepsPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Steps</h1>
        <p className="mt-1 text-sm text-slate-500">
          Flujo de pasos con estados completado, activo y pendiente, en horizontal y vertical.
        </p>
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
