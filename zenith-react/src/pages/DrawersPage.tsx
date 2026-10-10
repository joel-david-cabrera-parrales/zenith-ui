import {
  BottomSheetDoc,
  ConnectionDrawerDoc,
  ClusterDrawerDoc,
  NavDrawerDoc,
  FiltersDrawerDoc,
} from '@/features/modals/docs';

export const DrawersPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Drawers</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">5 drawers</p>
      </header>
      <BottomSheetDoc />
      <ConnectionDrawerDoc />
      <ClusterDrawerDoc />
      <NavDrawerDoc />
      <FiltersDrawerDoc />
    </div>
  </div>
);