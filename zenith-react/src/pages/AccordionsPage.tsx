import { useTranslation } from "@/shared/hooks/useTranslation";
import {
  AccordionDoc,
  MultiOpenAccordionDoc,
  BadgedAccordionDoc,
  ChecklistAccordionDoc,
  MediaAccordionDoc,
  TonedAccordionDoc,
  ActionsAccordionDoc,
  SidebarAccordionDoc,
  NestedSidebarAccordionDoc,
  DeepSidebarAccordionDoc,
} from '@/features/accordions/docs';

export const AccordionsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('pages.accordions.title')}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('pages.accordions.subtitle')}</p>
        </header>
        <AccordionDoc />
        <MultiOpenAccordionDoc />
        <BadgedAccordionDoc />
        <ChecklistAccordionDoc />
        <MediaAccordionDoc />
        <TonedAccordionDoc />
        <ActionsAccordionDoc />
        <SidebarAccordionDoc />
        <NestedSidebarAccordionDoc />
        <DeepSidebarAccordionDoc />
      </div>
    </div>
  );
};
