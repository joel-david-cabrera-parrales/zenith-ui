export const DashboardPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-8 space-y-8">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Zenith UI</h1>
        <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">Component Library</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
          <h3 className="font-semibold text-slate-900 dark:text-white">Layout</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">12 Paginadores + 7 Tablas</p>
        </div>
        <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
          <h3 className="font-semibold text-slate-900 dark:text-white">Data Inputs</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">8 Formularios</p>
        </div>
        <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
          <h3 className="font-semibold text-slate-900 dark:text-white">Feedback</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">11 Modales + 5 Drawers</p>
        </div>
        <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
          <h3 className="font-semibold text-slate-900 dark:text-white">Display</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">22 Cards + 9 Heroes + 5 Tipografía</p>
        </div>
        <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
          <h3 className="font-semibold text-slate-900 dark:text-white">Action</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">8 Botones</p>
        </div>
      </div>
    </div>
  </div>
);