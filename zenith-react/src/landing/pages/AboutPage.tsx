import { useState } from "react";
import type { FormEvent } from "react";
import { useTranslation } from "@/shared/hooks/useTranslation";
import { Button } from "@/features/botones/components/Button";
import { Heading } from "@/features/headings/components/Heading";
import { BodyText } from "@/features/headings/components/BodyText";
import { TextInput } from "@/features/forms/components/TextInput";
import { TextareaWithCounter } from "@/features/forms/components/TextareaWithCounter";
import { MemberCard } from "@/features/cards/components/MemberCard";
import { LANDING_STATS, LANDING_TEAM } from "../mocks/landing.mock";

const VALUES = [
  { icon: "speed", title: "Rendimiento primero", text: "Cada milisegundo cuenta. Medimos P99 en cada release." },
  { icon: "group", title: "Equipos antes que tools", text: "Un solo panel que todo el equipo entiende." },
  { icon: "verified", title: "Confianza operativa", text: "SLOs públicos, postmortems abiertos y rollback simple." },
] as const;

export const AboutPage = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.trim() === "" || email.trim() === "") {
      setError("Cuéntanos tu nombre y un email válido para responderte.");
      return;
    }
    setError(undefined);
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 800);
  };

  return (
    <div>
      <section className="border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase">
            {t('pages.landing.about.badge')}
          </p>
          <Heading variant="display-xl" as="h1" className="mt-2 max-w-3xl">
            {t('pages.landing.about.title')}
          </Heading>
          <BodyText size="lead" className="mt-4 max-w-2xl">
            {t('pages.landing.about.subtitle')}
          </BodyText>
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {LANDING_STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <dd className="text-2xl font-bold tracking-tight text-slate-900">{stat.value}</dd>
                <dt className="mt-1 text-xs text-slate-500">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Heading variant="h2">{t('pages.landing.about.valuesTitle')}</Heading>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {VALUES.map((value) => (
            <div key={value.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <span aria-hidden="true" className="material-symbols-outlined text-2xl">
                  {value.icon}
                </span>
              </span>
              <h3 className="mt-4 text-base font-bold text-slate-900">{value.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <Heading variant="h2">{t('pages.landing.about.teamTitle')}</Heading>
          <BodyText className="mt-2 max-w-2xl">
            {t('pages.landing.about.teamDesc')}
          </BodyText>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LANDING_TEAM.map((member) => (
              <MemberCard
                key={member.initials}
                name={member.name}
                role={member.role}
                initials={member.initials}
                online={member.online}
                excerpt={member.excerpt}
                meta={member.meta}
                action={member.action}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div>
            <Heading variant="h2">{t('pages.landing.about.ctaTitle')}</Heading>
            <BodyText className="mt-2 max-w-md">
              {t('pages.landing.about.ctaDesc')}
            </BodyText>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {[
                { icon: "mail", text: "hola@zenith.example" },
                { icon: "call", text: "+34 910 000 000" },
                { icon: "location_on", text: "Madrid · remoto global" },
              ].map((row) => (
                <li key={row.text} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-700 ring-1 ring-slate-200">
                    <span aria-hidden="true" className="material-symbols-outlined text-lg">
                      {row.icon}
                    </span>
                  </span>
                  {row.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
            {sent ? (
              <div role="status" className="py-8 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                  <span aria-hidden="true" className="material-symbols-outlined text-3xl">
                    check_circle
                  </span>
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{t('pages.landing.contact.successTitle')}</h3>
                <p className="mx-auto mt-1 max-w-xs text-sm text-slate-500">
                  {t('pages.landing.contact.successDesc', { name: name.trim() === "" ? "por escribirnos" : name.trim() })}
                </p>
                <Button variant="outline" className="mt-5" onClick={() => setSent(false)}>
                  {t('pages.landing.contact.sendAnother')}
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="space-y-4">
                  <TextInput
                    label={t('pages.landing.contact.nameLabel')}
                    placeholder="Ada Lovelace"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <TextInput
                    label={t('pages.landing.contact.emailLabel')}
                    type="email"
                    placeholder="ada@ejemplo.com"
                    autoComplete="email"
                    value={email}
                    state={error !== undefined ? "error" : "default"}
                    message={error}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <TextareaWithCounter
                    label={t('pages.landing.contact.messageLabel')}
                    maxLength={250}
                    rows={4}
                    placeholder="Cuéntanos qué quieres construir…"
                  />
                  <Button type="submit" loading={sending} className="w-full" trailingIcon="send">
                    {sending ? t('pages.landing.contact.sendingButton') : t('pages.landing.contact.submitButton')}
                  </Button>
                  <p className="text-center text-xs text-slate-400">
                    Demo sin backend: nada sale de tu navegador.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
