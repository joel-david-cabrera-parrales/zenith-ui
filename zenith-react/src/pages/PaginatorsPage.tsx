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

export const PaginatorsPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Paginadores</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">12 componentes de paginación</p>
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
    </div>
  </div>
);