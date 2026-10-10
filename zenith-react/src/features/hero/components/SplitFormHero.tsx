import { useId, useState } from 'react';
import type { FormEvent } from 'react';

const CHECKS = [
  'Rate limiting dinámico sin bloqueos forzados de cola',
  'Cifrado de extremo a extremo con cumplimiento SOC2 Tipo II',
  'Soporte nativo para gRPC, WebSockets y GraphQL federado',
];

const STACK = ['KUBERNETES', 'TERRAFORM', 'DOCKER', 'AWS LAMBDA'];

export function SplitFormHero() {
  const emailId = useId();
  const envId = useId();
  const volId = useId();
  const termsId = useId();
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() !== '' && accepted) setSent(true);
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 md:p-12">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 md:gap-10">
        <div className="space-y-6 lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-md bg-blue-100 px-3 py-1 text-[10px] font-semibold text-blue-800 uppercase">
            <span aria-hidden="true" className="material-symbols-outlined text-sm">
              lock_open
            </span>
            Acceso Temprano para Equipos de Ingeniería
          </span>
          <h2 className="text-2xl leading-snug font-extrabold text-slate-900 sm:text-3xl md:text-4xl">
            Desarrolla sin fricciones. Solicita credenciales de API para alta
            concurrencia.
          </h2>
          <p className="max-w-xl text-sm text-slate-500">
            Obtén acceso sandbox inmediato a la infraestructura tolerante a
            fallos de Zenith Dash. Construido para arquitecturas serverless y
            pipelines CI/CD modernos.
          </p>
          <ul className="space-y-3.5 pt-2">
            {CHECKS.map((c) => (
              <li key={c} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <span aria-hidden="true" className="material-symbols-outlined text-sm">
                    check
                  </span>
                </span>
                <span className="text-sm text-slate-900">{c}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-slate-200 pt-6">
            <p className="mb-3 text-[10px] font-semibold text-slate-500 uppercase">
              Compatible con tu stack actual
            </p>
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs font-semibold text-slate-500 sm:gap-6">
              {STACK.map((s) => (
                <span key={s} className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:col-span-5">
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 shadow-sm sm:p-6 md:p-8">
            <div className="mb-5">
              <h3 className="text-lg font-bold text-slate-900">Solicitar API Key</h3>
              <p className="text-xs text-slate-500">
                Sin tarjeta de crédito requerida. Activación en 60 segundos.
              </p>
            </div>
            {sent ? (
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                <p className="font-semibold">Solicitud recibida</p>
                <p className="mt-1 text-xs">
                  Enviamos tu sandbox a {email}. Revisa tu bandeja corporativa.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={submit}>
                <div>
                  <label
                    htmlFor={emailId}
                    className="mb-1.5 block text-xs font-semibold text-slate-900"
                  >
                    Correo Corporativo
                  </label>
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined absolute top-2.5 left-3 text-lg text-slate-500"
                    >
                      mail
                    </span>
                    <input
                      id={emailId}
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="dev.lead@empresa.com"
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 pr-3 pl-9 text-sm text-slate-900 transition-all outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor={envId}
                    className="mb-1.5 block text-xs font-semibold text-slate-900"
                  >
                    Entorno Objetivo
                  </label>
                  <select
                    id={envId}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    defaultValue="Desarrollo / Sandbox Local"
                  >
                    <option>Desarrollo / Sandbox Local</option>
                    <option>Staging Pre-Producción</option>
                    <option>Producción Multi-Región</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor={volId}
                    className="mb-1.5 block text-xs font-semibold text-slate-900"
                  >
                    Volumen Estimado de Eventos / mes
                  </label>
                  <select
                    id={volId}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    defaultValue="< 1M"
                  >
                    <option value="< 1M">&lt; 1M eventos (Tier Gratuito)</option>
                    <option value="scale">1M - 20M eventos (Scale)</option>
                    <option value="ent">&gt; 20M eventos (Enterprise)</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <input
                    id={termsId}
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                  />
                  <label htmlFor={termsId} className="text-[11px] text-slate-500">
                    Acepto los términos de servicio para desarrolladores
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
                >
                  Generar credenciales sandbox
                  <span aria-hidden="true" className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
