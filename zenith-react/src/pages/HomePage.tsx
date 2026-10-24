import { useNavigate } from "react-router";
import { Button } from "@/features/botones/components/Button";
import { TextInput } from "@/features/forms/components/TextInput";
import { BodyText } from "@/features/headings/components/BodyText";
import { Heading } from "@/features/headings/components/Heading";
import { useTranslation } from "@/shared/hooks/useTranslation";

const CATEGORIES = [
  {
    icon: "crop_16_9",
    title: "pages.home.displayTitle",
    description: "pages.home.displayDescription",
    route: "/display/hero",
  },
  {
    icon: "input",
    title: "pages.home.formsTitle",
    description: "pages.home.formsDescription",
    route: "/forms/forms",
  },
  {
    icon: "smart_button",
    title: "pages.home.actionsTitle",
    description: "pages.home.actionsDescription",
    route: "/action/buttons",
  },
  {
    icon: "notifications",
    title: "pages.home.feedbackTitle",
    description: "pages.home.feedbackDescription",
    route: "/feedback/modals",
  },
] as const;

export const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-7xl space-y-10 pb-8 sm:space-y-14">
      <section className="relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 -z-10 h-96 w-96 rounded-full bg-blue-200/60 blur-3xl dark:bg-blue-500/10"
        />
        <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:p-14">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 font-mono text-[10px] font-bold tracking-widest text-blue-700 uppercase dark:border-blue-900/70 dark:bg-blue-950/60 dark:text-blue-300">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              {t("pages.home.eyebrow")}
            </p>
            <Heading variant="display-xl" as="h1" className="max-w-xl !text-slate-950 dark:!text-white">
              {t("pages.home.title")}
            </Heading>
            <BodyText size="lead" className="mt-5 max-w-xl !text-slate-600 dark:!text-slate-300">
              {t("pages.home.description")}
            </BodyText>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                trailingIcon="arrow_forward"
                onClick={() => navigate("/display/cards")}
              >
                {t("pages.home.exploreAction")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                leadingIcon="crop_16_9"
                onClick={() => navigate("/display/hero")}
              >
                {t("pages.home.heroAction")}
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true" className="material-symbols-outlined text-sm text-emerald-600 dark:text-emerald-400">check_circle</span>
                React
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true" className="material-symbols-outlined text-sm text-emerald-600 dark:text-emerald-400">check_circle</span>
                TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true" className="material-symbols-outlined text-sm text-emerald-600 dark:text-emerald-400">check_circle</span>
                Tailwind CSS
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -top-4 right-4 z-10 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 sm:right-8">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {t("pages.home.previewBadge")}
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/20 sm:p-4">
              <div data-theme="light" className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono text-[10px] font-semibold text-slate-400">zenith-ui / preview</span>
                </div>
                <div className="space-y-5 p-5 sm:p-6">
                  <div>
                    <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase dark:text-blue-400">
                      {t("pages.home.previewEyebrow")}
                    </p>
                    <Heading variant="h3" className="mt-1 !text-slate-900">
                      {t("pages.home.previewTitle")}
                    </Heading>
                    <BodyText size="sm" className="mt-1 !text-slate-500">
                      {t("pages.home.previewDescription")}
                    </BodyText>
                  </div>
                  <TextInput
                    label={t("pages.home.projectLabel")}
                    defaultValue={t("pages.home.projectValue")}
                    readOnly
                  />
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" onClick={() => navigate("/action/buttons")}>
                      {t("pages.home.previewPrimary")}
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => navigate("/action/buttons")}>
                      {t("pages.home.previewSecondary")}
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                    {CATEGORIES.map((category) => (
                      <span
                        key={category.title}
                        className="rounded-md bg-slate-100 px-2 py-1 font-mono text-[9px] font-semibold text-slate-500"
                      >
                        {t(category.title)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="home-categories-title">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase dark:text-blue-400">
              {t("pages.home.categoriesEyebrow")}
            </p>
            <Heading id="home-categories-title" variant="h2" className="mt-1 dark:!text-white">
              {t("pages.home.categoriesTitle")}
            </Heading>
          </div>
          <BodyText size="sm" className="max-w-xl dark:!text-slate-400">
            {t("pages.home.categoriesDescription")}
          </BodyText>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {CATEGORIES.map((category) => (
            <button
              key={category.title}
              type="button"
              onClick={() => navigate(category.route)}
              className="group rounded-2xl border border-slate-200 bg-white p-5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-slate-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/50 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-700 dark:hover:shadow-black/20"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:border-blue-900/70 dark:bg-blue-950/50 dark:text-blue-300 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                <span aria-hidden="true" className="material-symbols-outlined text-xl">
                  {category.icon}
                </span>
              </span>
              <Heading variant="h4" className="mt-4 !text-slate-900 group-hover:!text-blue-700 dark:!text-white dark:group-hover:!text-blue-300">
                {t(category.title)}
              </Heading>
              <BodyText size="sm" className="mt-2 min-h-12 dark:!text-slate-400">
                {t(category.description)}
              </BodyText>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-300">
                {t("pages.home.categoryAction")}
                <span aria-hidden="true" className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section aria-labelledby="home-examples-title">
        <div className="mb-6">
          <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase dark:text-blue-400">
            {t("pages.home.examplesEyebrow")}
          </p>
          <Heading id="home-examples-title" variant="h2" className="mt-1 dark:!text-white">
            {t("pages.home.examplesTitle")}
          </Heading>
          <BodyText size="sm" className="mt-2 max-w-2xl dark:!text-slate-400">
            {t("pages.home.examplesDescription")}
          </BodyText>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div data-theme="light" className="rounded-t-2xl bg-slate-100 p-3 sm:p-5">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-1.5 border-b border-slate-200 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-rose-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="ml-auto font-mono text-[9px] text-slate-400">zenith-ui / landing</span>
                </div>
                <div className="bg-slate-950 p-5 text-white sm:p-6">
                  <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[9px] font-bold tracking-wider text-blue-300 uppercase">
                    {t("pages.landing.home.badge")}
                  </span>
                  <Heading variant="h3" className="mt-3 max-w-md !text-white">
                    {t("pages.landing.home.heroTitle")}
                  </Heading>
                  <BodyText size="sm" className="mt-2 max-w-md !text-slate-300">
                    {t("pages.landing.home.heroDesc")}
                  </BodyText>
                  <Button size="sm" className="mt-4" onClick={() => navigate("/landing/home")}>
                    {t("pages.landing.home.ctaPrimary")}
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <Heading variant="h3" className="dark:!text-white">
                {t("pages.home.exampleLandingTitle")}
              </Heading>
              <BodyText size="sm" className="mt-2 dark:!text-slate-400">
                {t("pages.home.exampleLandingDescription")}
              </BodyText>
              <Button
                variant="link"
                trailingIcon="arrow_forward"
                className="mt-4 px-0 py-0"
                onClick={() => navigate("/landing/home")}
              >
                {t("pages.home.exampleLandingAction")}
              </Button>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div data-theme="light" className="rounded-t-2xl bg-slate-100 p-3 sm:p-5">
              <div className="grid min-h-72 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:grid-cols-[0.7fr_1fr]">
                <div className="hidden flex-col justify-between bg-slate-950 p-4 text-white sm:flex">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-slate-900">
                    <span aria-hidden="true" className="material-symbols-outlined text-base">star</span>
                  </span>
                  <div>
                    <p className="font-mono text-[9px] font-bold tracking-wider text-blue-300 uppercase">ZENITH UI</p>
                    <p className="mt-1 text-xs font-semibold">{t("pages.home.exampleAuthBrand")}</p>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="font-mono text-[9px] font-bold tracking-wider text-blue-600 uppercase">
                    {t("pages.auth.login.badge")}
                  </p>
                  <Heading variant="h4" className="mt-1 !text-slate-900">
                    {t("pages.auth.login.title")}
                  </Heading>
                  <BodyText size="sm" className="mt-1 !text-slate-500">
                    {t("pages.auth.login.subtitle")}
                  </BodyText>
                  <div className="mt-4 space-y-3">
                    <TextInput
                      size="sm"
                      label={t("pages.auth.login.emailLabel")}
                      defaultValue={t("pages.auth.login.emailPlaceholder")}
                      readOnly
                    />
                    <div>
                      <p className="mb-1 text-xs font-medium text-slate-600">
                        {t("pages.auth.login.passwordLabel")}
                      </p>
                      <div className="flex h-8 items-center rounded-lg border border-slate-300 px-2.5 text-xs tracking-widest text-slate-400">
                        ••••••••
                      </div>
                    </div>
                    <Button size="sm" className="auth-primary-button w-full" onClick={() => navigate("/auth/login")}>
                      {t("pages.auth.login.submitButton")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <Heading variant="h3" className="dark:!text-white">
                {t("pages.home.exampleAuthTitle")}
              </Heading>
              <BodyText size="sm" className="mt-2 dark:!text-slate-400">
                {t("pages.home.exampleAuthDescription")}
              </BodyText>
              <Button
                variant="link"
                trailingIcon="arrow_forward"
                className="mt-4 px-0 py-0"
                onClick={() => navigate("/auth/login")}
              >
                {t("pages.home.exampleAuthAction")}
              </Button>
            </div>
          </article>
        </div>
      </section>

      <section className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase dark:text-blue-400">
            {t("pages.home.closingEyebrow")}
          </p>
          <Heading variant="h3" className="mt-1 dark:!text-white">
            {t("pages.home.closingTitle")}
          </Heading>
          <BodyText size="sm" className="mt-2 dark:!text-slate-400">
            {t("pages.home.closingDescription")}
          </BodyText>
        </div>
        <Button
          size="lg"
          trailingIcon="arrow_forward"
          className="shrink-0"
          onClick={() => navigate("/display/hero")}
        >
          {t("pages.home.closingAction")}
        </Button>
      </section>
    </div>
  );
};
