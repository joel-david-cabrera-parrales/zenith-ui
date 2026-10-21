import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router";
import { useTranslation } from "@/shared/hooks/useTranslation";
import { Button } from "@/features/botones/components/Button";
import { Heading } from "@/features/headings/components/Heading";
import { TextInput } from "@/features/forms/components/TextInput";

export const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setError("Escribe el email de tu cuenta.");
      return;
    }
    setError(undefined);
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 800);
  };

  if (sent) {
    return (
      <div role="status" className="py-6 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
          <span aria-hidden="true" className="material-symbols-outlined text-3xl">
            mark_email_read
          </span>
        </span>
        <Heading variant="h3" as="h1" className="mt-4">
          {t('pages.auth.forgot.successTitle')}
        </Heading>
        <p className="mx-auto mt-1.5 max-w-xs text-sm text-slate-500">
          {t('pages.auth.forgot.successDesc', { email })}
        </p>
        <div className="mt-5 grid gap-2">
          <Link to="/auth/login">
            <Button variant="primary" className="w-full" leadingIcon="arrow_back">
              {t('pages.auth.forgot.backLink')}
            </Button>
          </Link>
          <Button variant="ghost" onClick={() => setSent(false)}>
            {t('pages.auth.forgot.useOtherEmail')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase">
        {t('pages.auth.forgot.badge')}
      </p>
      <Heading variant="h2" as="h1" className="mt-1">
        {t('pages.auth.forgot.title')}
      </Heading>
      <p className="mt-1.5 text-sm text-slate-500">
        {t('pages.auth.forgot.subtitle')}
      </p>
      <form onSubmit={submit} noValidate className="mt-6 space-y-4">
        <TextInput
          label={t('pages.auth.forgot.emailLabel')}
          type="email"
          placeholder={t('pages.auth.forgot.emailPlaceholder')}
          autoComplete="email"
          value={email}
          state={error !== undefined ? "error" : "default"}
          message={error}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button type="submit" loading={loading} trailingIcon="send" className="w-full">
          {loading ? t('pages.auth.forgot.loadingButton') : t('pages.auth.forgot.submitButton')}
        </Button>
      </form>
      <p className="mt-5 text-center text-sm text-slate-500">
        {t('pages.auth.forgot.remembered')}{" "}
        <Link to="/auth/login" className="font-semibold text-blue-600 hover:text-blue-700">
          {t('pages.auth.forgot.backLink')}
        </Link>
      </p>
    </div>
  );
};
