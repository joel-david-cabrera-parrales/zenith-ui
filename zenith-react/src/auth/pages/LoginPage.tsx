import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useTranslation } from "@/shared/hooks/useTranslation";
import { Button } from "@/features/botones/components/Button";
import { Heading } from "@/features/headings/components/Heading";
import { TextInput } from "@/features/forms/components/TextInput";
import { PasswordInput } from "@/features/forms/components/PasswordInput";
import { Switch } from "@/features/forms/components/Switch";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setError("Escribe un email válido para continuar.");
      return;
    }
    setError(undefined);
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 800);
  };

  return (
    <div>
      <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase">
        {t('pages.auth.login.badge')}
      </p>
      <Heading variant="h2" as="h1" className="mt-1">
        {t('pages.auth.login.title')}
      </Heading>
      <p className="mt-1.5 text-sm text-slate-500">
        {t('pages.auth.login.subtitle')}
      </p>

      <form onSubmit={submit} noValidate className="mt-6 space-y-4">
        <TextInput
          label={t('pages.auth.login.emailLabel')}
          type="email"
          placeholder={t('pages.auth.login.emailPlaceholder')}
          autoComplete="email"
          value={email}
          state={error !== undefined ? "error" : "default"}
          message={error}
          onChange={(event) => setEmail(event.target.value)}
        />
        <PasswordInput label={t('pages.auth.login.passwordLabel')} placeholder={t('pages.auth.login.passwordPlaceholder')} autoComplete="current-password" />
        <div className="flex items-center justify-between gap-4">
          <Switch label={t('pages.auth.login.rememberMe')} />
          <Link to="/auth/forgot" className="shrink-0 text-sm font-semibold text-blue-600 hover:text-blue-700">
            {t('pages.auth.login.forgotLink')}
          </Link>
        </div>
        <Button type="submit" loading={loading} className="auth-primary-button w-full">
          {loading ? t('pages.auth.login.loadingButton') : t('pages.auth.login.submitButton')}
        </Button>
      </form>

      <div className="my-5 flex items-center gap-3" aria-hidden="true">
        <span className="h-px flex-1 bg-slate-200" />
        <span className="font-mono text-[10px] font-bold text-slate-400 uppercase">{t('pages.auth.login.divider')}</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="grid grid-cols-2 gap-2">
         <Button variant="outline" leadingIcon="public" className="rounded-xl shadow-none">{t('pages.auth.login.googleButton')}</Button>
         <Button variant="outline" leadingIcon="code" className="rounded-xl shadow-none">{t('pages.auth.login.githubButton')}</Button>
      </div>

      <p className="mt-5 text-center text-sm text-slate-500">
        {t('pages.auth.login.noAccount')}{" "}
        <Link to="/auth/register" className="font-semibold text-blue-600 hover:text-blue-700">
          {t('pages.auth.login.signupLink')}
        </Link>
      </p>
    </div>
  );
};
