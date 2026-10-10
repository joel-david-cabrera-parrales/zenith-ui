import { BillingInvoicesDoc } from './features/tables/docs/BillingInvoicesDoc';
import { MainLayout } from './layouts/MainLayout';

export const App = () => {
  return (
    <MainLayout>
      {/* <div className="flex h-full flex-col items-start justify-center gap-3">
        <span className="inline-flex items-center rounded-full bg-blue-600/10 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
          Zenith Shell
        </span>
        <h1 className="text-2xl font-bold tracking-tight">
          Contenido organizado por el shell
        </h1>
        <p className="max-w-lg text-sm text-slate-500">
          El Sidebar (multinivel, expandido/colapsado, light/dark) y el Topbar
          (búsqueda con resultados, notificaciones y perfil) ya son el core de
          la app. Aquí dentro se montará el contenido de cada sección.
        </p>
      </div> */}
      <BillingInvoicesDoc />
    </MainLayout>
  );
};

export default App;
