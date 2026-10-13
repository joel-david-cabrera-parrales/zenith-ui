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

export const AccordionsPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Acordeones</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Base + 6 variantes + sidebars de 2, 3 y 4 niveles
        </p>
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
