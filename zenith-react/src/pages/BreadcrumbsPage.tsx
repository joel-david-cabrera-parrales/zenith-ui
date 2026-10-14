import { BasicBreadcrumbDoc, CollapsedBreadcrumbDoc, DynamicBreadcrumbDoc, IconBreadcrumbDoc } from '@/features/breadcrumbs/docs';

export const BreadcrumbsPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Breadcrumbs</h1>
      </header>
      <BasicBreadcrumbDoc />
      <IconBreadcrumbDoc />
      <CollapsedBreadcrumbDoc />
      <DynamicBreadcrumbDoc />
    </div>
  </div>
);
