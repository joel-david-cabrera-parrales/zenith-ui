import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router";
import { Button } from "@/features/botones/components/Button";
import { Heading } from "@/features/headings/components/Heading";
import { PasswordInput } from "@/features/forms/components/PasswordInput";

export const ResetPasswordPage = () => {
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
          Contraseña actualizada
        </Heading>
        <p className="mx-auto mt-1.5 max-w-xs text-sm text-slate-500">
          Ya puedes entrar con tus nuevas credenciales de ejemplo.
        </p>
        <Link to="/auth/login" className="mt-5 block">
          <Button variant="primary" className="w-full" trailingIcon="arrow_forward">
            Ir al login
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase">
        Nueva contraseña
      </p>
      <Heading variant="h2" as="h1" className="mt-1">
        Define tu acceso
      </Heading>
      <p className="mt-1.5 text-sm text-slate-500">
        El enlace de ejemplo es válido por 30 minutos.
      </p>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <PasswordInput label="Nueva contraseña" placeholder="••••••••" autoComplete="new-password" />
        <PasswordInput label="Confirmar contraseña" placeholder="••••••••" autoComplete="new-password" />
        <Button type="submit" loading={loading} trailingIcon="check" className="w-full">
          {loading ? "Guardando…" : "Guardar contraseña"}
        </Button>
      </form>
      <p className="mt-5 text-center text-sm text-slate-500">
        ¿No pediste este cambio?{" "}
        <Link to="/auth/login" className="font-semibold text-blue-600 hover:text-blue-700">
          Volver al login
        </Link>
      </p>
    </div>
  );
};
