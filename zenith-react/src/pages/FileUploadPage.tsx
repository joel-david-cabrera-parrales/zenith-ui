import { useTranslation } from '@/shared/hooks/useTranslation';
import {
  FileUploadMultipleDoc,
  FileUploadPreviewDoc,
  FileUploadSimpleDoc,
  FileUploadStatesDoc,
  FileUploadUseCasesDoc,
} from '@/features/file-upload';

export const FileUploadPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl space-y-8 p-4 sm:p-6">
        <header>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            {t('pages.fileUpload.title')}
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {t('pages.fileUpload.subtitle')}
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            {t('pages.fileUpload.description')}
          </p>
        </header>
        <FileUploadSimpleDoc />
        <FileUploadMultipleDoc />
        <FileUploadPreviewDoc />
        <FileUploadStatesDoc />
        <FileUploadUseCasesDoc />
      </div>
    </div>
  );
};
