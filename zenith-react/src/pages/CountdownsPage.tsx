import {
  ClusterBannerDoc,
  CompactPillsDoc,
  CriticalCountdownDoc,
  EventCountdownDoc,
  ExpiredCountdownDoc,
  FlipCountdownDoc,
  FullGranularityDoc,
  HoursMinutesSecondsDoc,
  MinutesSecondsDoc,
  ModularBoxesDoc,
  NormalCountdownDoc,
  RadialRingsDoc,
  ReleaseCardDoc,
  SecondsOnlyTimerDoc,
  SessionExpiryDoc,
  WarningCountdownDoc,
} from '@/features/countdowns/docs';

const SectionTitle = ({ children }: { children: string }) => (
  <h2 className="pt-4 text-sm font-bold tracking-wider text-slate-500 uppercase">{children}</h2>
);

export const CountdownsPage = () => (
  <div className="min-h-screen bg-white dark:bg-slate-950">
    <div className="mx-auto max-w-6xl space-y-6 p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Countdowns</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Catálogo completo — granularidad, variantes anatómicas, estados semánticos y casos de producción
        </p>
      </header>
      <SectionTitle>SEC_01 · Granularidad temporal</SectionTitle>
      <SecondsOnlyTimerDoc />
      <MinutesSecondsDoc />
      <HoursMinutesSecondsDoc />
      <FullGranularityDoc />
      <SectionTitle>Hero · Contador de banner de evento</SectionTitle>
      <EventCountdownDoc />
      <SectionTitle>SEC_02 · Variantes anatómicas</SectionTitle>
      <FlipCountdownDoc />
      <RadialRingsDoc />
      <ModularBoxesDoc />
      <CompactPillsDoc />
      <SectionTitle>SEC_03 · Estados semánticos</SectionTitle>
      <NormalCountdownDoc />
      <WarningCountdownDoc />
      <CriticalCountdownDoc />
      <ExpiredCountdownDoc />
      <SectionTitle>SEC_04 · Casos de producción</SectionTitle>
      <SessionExpiryDoc />
      <ClusterBannerDoc />
      <ReleaseCardDoc />
    </div>
  </div>
);
