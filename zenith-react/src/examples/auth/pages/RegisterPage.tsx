import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useTranslation } from "@/shared/hooks/useTranslation";
import { Button } from "@/features/botones/components/Button";
import { Heading } from "@/features/headings/components/Heading";
import { TextInput } from "@/features/forms/components/TextInput";
import { PasswordInput } from "@/features/forms/components/PasswordInput";
import { Switch } from "@/features/forms/components/Switch";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.trim().length < 2) {
      setError("Cuéntanos tu nombre (mínimo 2 caracteres).");
      return;
    }
    setError(undefined);
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 900);
  };

  return (
    <div>
      <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase">
        {t('pages.auth.register.badge')}
      </p>
      <Heading variant="h2" as="h1" className="mt-1">
        {t('pages.auth.register.title')}
      </Heading>
      <p className="mt-1.5 text-sm text-slate-500">
        {t('pages.auth.register.subtitle')}
      </p>

      <form onSubmit={submit} noValidate className="mt-6 space-y-4">
        <TextInput
          label={t('pages.auth.register.nameLabel')}
          placeholder={t('pages.auth.register.namePlaceholder')}
          autoComplete="name"
          value={name}
          state={error !== undefined ? "error" : "default"}
          message={error}
          onChange={(event) => setName(event.target.value)}
        />
        <TextInput label={t('pages.auth.register.emailLabel')} type="email" placeholder={t('pages.auth.register.emailPlaceholder')} autoComplete="email" />
        <div className="grid gap-4 sm:grid-cols-2">
          <PasswordInput label={t('pages.auth.register.passwordLabel')} placeholder={t('pages.auth.register.passwordPlaceholder')} autoComplete="new-password" />
          <PasswordInput label={t('pages.auth.register.confirmLabel')} placeholder={t('pages.auth.register.confirmPlaceholder')} autoComplete="new-password" />
        </div>
        <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
          <Switch label={t('pages.auth.register.termsText')} description={t('pages.auth.register.termsDesc')} />
        </div>
        <Button type="submit" loading={loading} className="auth-primary-button w-full">
          {loading ? t('pages.auth.register.loadingButton') : t('pages.auth.register.submitButton')}
        </Button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-500">
        {t('pages.auth.register.hasAccount')}{" "}
        <Link to="/auth/login" className="font-semibold text-blue-600 hover:text-blue-700">
          {t('pages.auth.register.loginLink')}
        </Link>
      </p>
    </div>
  );
};
