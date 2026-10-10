import {
  InfraResourcesDoc,
  ReplicaNodesDoc,
  ProductCatalogDoc,
  PodsTelemetryDoc,
  IamAuditDoc,
  TeamMembersDoc,
  BillingInvoicesDoc,
} from '@/features/tables/docs';

export const TablesPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Tablas</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">7 tablas de datos</p>
      </header>
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