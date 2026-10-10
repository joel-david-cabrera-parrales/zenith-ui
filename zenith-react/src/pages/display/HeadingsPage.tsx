import {
  HeadingsScaleDoc,
  MonoDataDoc,
  MicrocopyDoc,
  EditorialDoc,
  BodyTextDoc,
} from '@/features/headings/docs';

export const HeadingsPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Tipografía</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Escalas tipográficas y estilos editoriales</p>
      </header>
      <HeadingsScaleDoc />
      <MonoDataDoc />
      <MicrocopyDoc />
      <EditorialDoc />
      <BodyTextDoc />
    </div>
  </div>
);