import {
  ActionLinksDoc,
  BadgeSizesDoc,
  CountBadgesDoc,
  DismissibleChipsDoc,
  IconBadgesDoc,
  OutlineBadgesDoc,
  SelectableChipsDoc,
  SoftBadgesDoc,
  SolidBadgesDoc,
  SplitBadgesDoc,
  StatusPillsDoc,
  UserPillsDoc,
} from '@/features/badges/docs';

export const BadgesPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Badges</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Catálogo SEC_01–SEC_05 — variantes, estados, ricos, interactivos y tamaños (SEC_06 omitida)
        </p>
      </header>
      <SolidBadgesDoc />
      <SoftBadgesDoc />
      <OutlineBadgesDoc />
      <StatusPillsDoc />
      <IconBadgesDoc />
      <CountBadgesDoc />
      <UserPillsDoc />
      <SplitBadgesDoc />
      <DismissibleChipsDoc />
      <SelectableChipsDoc />
      <ActionLinksDoc />
      <BadgeSizesDoc />
    </div>
  </div>
);
