import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/features/botones/components/Button";
import { Heading } from "@/features/headings/components/Heading";
import { TextInput } from "@/features/forms/components/TextInput";
import { PasswordInput } from "@/features/forms/components/PasswordInput";
import { Switch } from "@/features/forms/components/Switch";

export const RegisterPage = () => {
  const navigate = useNavigate();
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
        14 días gratis · sin tarjeta
      </p>
      <Heading variant="h2" as="h1" className="mt-1">
        Crea tu cuenta
      </Heading>
      <p className="mt-1.5 text-sm text-slate-500">
        Demo con componentes del catálogo. Sin backend.
      </p>

      <form onSubmit={submit} noValidate className="mt-6 space-y-4">
        <TextInput
          label="Nombre"
          placeholder="Ada Lovelace"
          autoComplete="name"
          value={name}
          state={error !== undefined ? "error" : "default"}
          message={error}
          onChange={(event) => setName(event.target.value)}
        />
        <TextInput label="Email" type="email" placeholder="ada@ejemplo.com" autoComplete="email" />
        <div className="grid gap-4 sm:grid-cols-2">
          <PasswordInput label="Contraseña" placeholder="••••••••" autoComplete="new-password" />
          <PasswordInput label="Confirmar" placeholder="••••••••" autoComplete="new-password" />
        </div>
        <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
          <Switch label="Acepto los términos" description="Y la política de privacidad de ejemplo." />
        </div>
        <Button type="submit" loading={loading} trailingIcon="arrow_forward" className="w-full">
          {loading ? "Creando cuenta…" : "Crear cuenta"}
        </Button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-500">
        ¿Ya tienes cuenta?{" "}
        <Link to="/auth/login" className="font-semibold text-blue-600 hover:text-blue-700">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
};
