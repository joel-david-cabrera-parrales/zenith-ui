import { useNavigate } from "react-router";
import { useTranslation } from "@/shared/hooks/useTranslation";
import { Button } from "@/features/botones/components/Button";
import { Heading } from "@/features/headings/components/Heading";

export const ServerErrorPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const retry = () => {
    window.location.reload();
  };

  return (
    <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl sm:p-10">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 ring-1 ring-rose-200">
        <span aria-hidden="true" className="material-symbols-outlined text-3xl">
          error
        </span>
      </span>
      <p className="mt-4 font-mono text-[10px] font-bold tracking-widest text-rose-600 uppercase">
        {t('pages.helper.serverError.title')}
      </p>
      <Heading variant="h2" as="h1" className="mt-2">
        {t('pages.helper.serverError.subtitle')}
      </Heading>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
        {t('pages.helper.serverError.desc')}
      </p>
      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
        <Button leadingIcon="refresh" onClick={retry}>
          {t('pages.helper.serverError.retryButton')}
        </Button>
        <Button variant="outline" leadingIcon="home" onClick={() => navigate("/landing/home")}>
          {t('pages.helper.serverError.homeButton')}
        </Button>
      </div>
      <p className="mt-5 font-mono text-[10px] text-slate-400">
        DEMO · HELPER LAYOUT SIN SIDEBAR
      </p>
    </div>
  );
};
