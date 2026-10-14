import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router";
import { Button } from "@/features/botones/components/Button";
import { Heading } from "@/features/headings/components/Heading";
import { TextInput } from "@/features/forms/components/TextInput";

export const ForgotPasswordPage = () => {
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
          Revisa tu bandeja
        </Heading>
        <p className="mx-auto mt-1.5 max-w-xs text-sm text-slate-500">
          Si existe una cuenta para {email}, te enviamos un enlace para recuperar el acceso.
        </p>
        <div className="mt-5 grid gap-2">
          <Link to="/auth/login">
            <Button variant="primary" className="w-full" leadingIcon="arrow_back">
              Volver al login
            </Button>
          </Link>
          <Button variant="ghost" onClick={() => setSent(false)}>
            Usar otro email
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase">
        Recuperar acceso
      </p>
      <Heading variant="h2" as="h1" className="mt-1">
        ¿Olvidaste tu contraseña?
      </Heading>
      <p className="mt-1.5 text-sm text-slate-500">
        Te enviamos un enlace mágico para volver a entrar.
      </p>
      <form onSubmit={submit} noValidate className="mt-6 space-y-4">
        <TextInput
          label="Email de tu cuenta"
          type="email"
          placeholder="ada@ejemplo.com"
          autoComplete="email"
          value={email}
          state={error !== undefined ? "error" : "default"}
          message={error}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button type="submit" loading={loading} trailingIcon="send" className="w-full">
          {loading ? "Enviando…" : "Enviar enlace"}
        </Button>
      </form>
      <p className="mt-5 text-center text-sm text-slate-500">
        ¿La recordaste?{" "}
        <Link to="/auth/login" className="font-semibold text-blue-600 hover:text-blue-700">
          Volver al login
        </Link>
      </p>
    </div>
  );
};
