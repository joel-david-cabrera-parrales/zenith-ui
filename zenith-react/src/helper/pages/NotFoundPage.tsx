import { useNavigate } from "react-router";
import { useTranslation } from "@/shared/hooks/useTranslation";
import { Button } from "@/features/botones/components/Button";
import { Heading } from "@/features/headings/components/Heading";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl sm:p-10">
      <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase">
        {t('pages.helper.notFound.title')}
      </p>
      <p aria-hidden="true" className="mt-2 text-7xl font-extrabold tracking-tight text-slate-900">
        404
      </p>
      <Heading variant="h2" as="h1" className="mt-3">
        {t('pages.helper.notFound.subtitle')}
      </Heading>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
        {t('pages.helper.notFound.desc')}
      </p>
      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
        <Button leadingIcon="home" onClick={() => navigate("/landing/home")}>
          {t('pages.helper.notFound.homeButton')}
        </Button>
        <Button variant="outline" leadingIcon="arrow_back" onClick={() => navigate("/")}>
          {t('pages.helper.notFound.catalogButton')}
        </Button>
      </div>
      <p className="mt-5 font-mono text-[10px] text-slate-400">
        DEMO · HELPER LAYOUT SIN SIDEBAR
      </p>
    </div>
  );
};
