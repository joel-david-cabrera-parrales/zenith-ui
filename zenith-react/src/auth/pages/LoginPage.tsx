import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/features/botones/components/Button";
import { Heading } from "@/features/headings/components/Heading";
import { TextInput } from "@/features/forms/components/TextInput";
import { PasswordInput } from "@/features/forms/components/PasswordInput";
import { Switch } from "@/features/forms/components/Switch";

export const LoginPage = () => {
  const navigate = useNavigate();
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
        Bienvenido de nuevo
      </p>
      <Heading variant="h2" as="h1" className="mt-1">
        Inicia sesión
      </Heading>
      <p className="mt-1.5 text-sm text-slate-500">
        Usa cualquier email de demo. Te llevaremos al catálogo.
      </p>

      <form onSubmit={submit} noValidate className="mt-6 space-y-4">
        <TextInput
          label="Email"
          type="email"
          placeholder="ada@ejemplo.com"
          autoComplete="email"
          value={email}
          state={error !== undefined ? "error" : "default"}
          message={error}
          onChange={(event) => setEmail(event.target.value)}
        />
        <PasswordInput label="Contraseña" placeholder="••••••••" autoComplete="current-password" />
        <div className="flex items-center justify-between gap-4">
          <Switch label="Recuérdame" />
          <Link to="/auth/forgot" className="shrink-0 text-sm font-semibold text-blue-600 hover:text-blue-700">
            ¿Olvidaste tu acceso?
          </Link>
        </div>
        <Button type="submit" loading={loading} trailingIcon="arrow_forward" className="w-full">
          {loading ? "Entrando…" : "Entrar"}
        </Button>
      </form>

      <div className="my-5 flex items-center gap-3" aria-hidden="true">
        <span className="h-px flex-1 bg-slate-200" />
        <span className="font-mono text-[10px] font-bold text-slate-400 uppercase">o continúa con</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" leadingIcon="public">Google</Button>
        <Button variant="outline" leadingIcon="code">GitHub</Button>
      </div>

      <p className="mt-5 text-center text-sm text-slate-500">
        ¿Sin cuenta?{" "}
        <Link to="/auth/register" className="font-semibold text-blue-600 hover:text-blue-700">
          Crea una gratis
        </Link>
      </p>
    </div>
  );
};
