import { useTranslation } from "@/shared/hooks/useTranslation";
import { BeforeAfterDoc, ImageCompareDoc, StaticBlurDoc, VerticalCompareDoc } from '@/features/diffs/docs';

export const DiffsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('pages.diffs.title')}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('pages.diffs.subtitle')}</p>
        </header>
        <ImageCompareDoc />
        <StaticBlurDoc />
        <VerticalCompareDoc />
        <BeforeAfterDoc />
      </div>
    </div>
  );
};
