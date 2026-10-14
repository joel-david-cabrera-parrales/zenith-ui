import {
  BasicTabsDoc,
  SizesTabsDoc,
  IconTabsDoc,
  VariantsTabsDoc,
  VerticalTabsDoc,
  StatesTabsDoc,
  BadgedTabsDoc,
  SettingsTabsDoc,
} from '@/features/tabs/docs';

export const TabsPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Tabs</h1>
        <p className="mt-1 text-sm text-slate-500">
          Navegación por pestañas con tamaños, iconos, contadores y orientación horizontal o vertical.
        </p>
      </header>
      <BasicTabsDoc />
      <SizesTabsDoc />
      <IconTabsDoc />
      <VariantsTabsDoc />
      <VerticalTabsDoc />
      <StatesTabsDoc />
      <BadgedTabsDoc />
      <SettingsTabsDoc />
    </div>
  </div>
);
