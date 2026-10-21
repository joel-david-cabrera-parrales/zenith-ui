import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router";
import { useTranslation } from "@/shared/hooks/useTranslation";
import { Button } from "@/features/botones/components/Button";
import { Heading } from "@/features/headings/components/Heading";
import { PasswordInput } from "@/features/forms/components/PasswordInput";

export const ResetPasswordPage = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 800);
  };

  if (done) {
    return (
      <div role="status" className="py-6 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
          <span aria-hidden="true" className="material-symbols-outlined text-3xl">
            lock_reset
          </span>
        </span>
        <Heading variant="h3" as="h1" className="mt-4">
          {t('pages.auth.reset.successTitle')}
        </Heading>
        <p className="mx-auto mt-1.5 max-w-xs text-sm text-slate-500">
          {t('pages.auth.reset.successDesc')}
        </p>
        <Link to="/auth/login" className="mt-5 block">
          <Button variant="primary" className="w-full" trailingIcon="arrow_forward">
            {t('pages.auth.reset.loginButton')}
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase">
        {t('pages.auth.reset.badge')}
      </p>
      <Heading variant="h2" as="h1" className="mt-1">
        {t('pages.auth.reset.title')}
      </Heading>
      <p className="mt-1.5 text-sm text-slate-500">
        {t('pages.auth.reset.subtitle')}
      </p>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <PasswordInput label={t('pages.auth.reset.passwordLabel')} placeholder={t('pages.auth.reset.passwordPlaceholder')} autoComplete="new-password" />
        <PasswordInput label={t('pages.auth.reset.confirmLabel')} placeholder={t('pages.auth.reset.confirmPlaceholder')} autoComplete="new-password" />
        <Button type="submit" loading={loading} trailingIcon="check" className="w-full">
          {loading ? t('pages.auth.reset.loadingButton') : t('pages.auth.reset.submitButton')}
        </Button>
      </form>
      <p className="mt-5 text-center text-sm text-slate-500">
        {t('pages.auth.reset.notRequested')}{" "}
        <Link to="/auth/login" className="font-semibold text-blue-600 hover:text-blue-700">
          {t('pages.auth.reset.backLink')}
        </Link>
      </p>
    </div>
  );
};
