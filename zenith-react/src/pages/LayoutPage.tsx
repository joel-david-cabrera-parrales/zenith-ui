import {
  ClassicPaginationDoc,
  CompactPaginationDoc,
  PageJumpControlDoc,
  PageSizeSelectorDoc,
  StandardTableFooterDoc,
  CompactTableFooterDoc,
  BatchTableFooterDoc,
  LoadMoreButtonDoc,
  InfiniteFeedStatusDoc,
  WizardStepperDoc,
  StepDotsDoc,
  AuditLogTableDoc,
} from '@/features/paginators/docs';
import {
  InfraResourcesDoc,
  ReplicaNodesDoc,
  ProductCatalogDoc,
  PodsTelemetryDoc,
  IamAuditDoc,
  TeamMembersDoc,
  BillingInvoicesDoc,
} from '@/features/tables/docs';

export const LayoutPage = () => (
  <div className="bg-slate-950 min-h-screen dark:bg-slate-950">
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Layout</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Paginadores y Tablas de datos</p>
      </header>
      <ClassicPaginationDoc />
      <CompactPaginationDoc />
      <PageJumpControlDoc />
      <PageSizeSelectorDoc />
      <StandardTableFooterDoc />
      <CompactTableFooterDoc />
      <BatchTableFooterDoc />
      <LoadMoreButtonDoc />
      <InfiniteFeedStatusDoc />
      <WizardStepperDoc />
      <StepDotsDoc />
      <AuditLogTableDoc />
      <InfraResourcesDoc />
      <ReplicaNodesDoc />
      <ProductCatalogDoc />
      <PodsTelemetryDoc />
      <IamAuditDoc />
      <TeamMembersDoc />
      <BillingInvoicesDoc />
    </div>
  </div>
);