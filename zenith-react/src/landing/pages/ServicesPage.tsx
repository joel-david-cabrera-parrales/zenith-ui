import { useNavigate } from "react-router";
import { Button } from "@/features/botones/components/Button";
import { Heading } from "@/features/headings/components/Heading";
import { BodyText } from "@/features/headings/components/BodyText";
import { FeatureService } from "@/features/cards/components/FeatureService";
import { PricingTier } from "@/features/cards/components/PricingTier";
import { Testimonial } from "@/features/cards/components/Testimonial";
import {
  LANDING_PRICING,
  LANDING_SERVICES,
  LANDING_TESTIMONIALS,
} from "../mocks/landing.mock";

const PROCESS = [
  { icon: "search", step: "01", title: "Descubre", text: "Conectas tu primera fuente en minutos con API keys de prueba." },
  { icon: "tune", step: "02", title: "Configura", text: "Defines workspaces, roles y retención con valores sensatos." },
  { icon: "rocket_launch", step: "03", title: "Despliega", text: "Lanzas a producción con canary y rollback en un clic." },
] as const;

export const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase">
            Services
          </p>
          <Heading variant="display-xl" as="h1" className="mt-2 max-w-3xl">
            Todo lo que tu plataforma necesita
          </Heading>
          <BodyText size="lead" className="mt-4 max-w-2xl">
            Seis servicios ficticios de ejemplo, cada uno un `FeatureService` del catálogo.
          </BodyText>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <Button trailingIcon="arrow_forward" onClick={() => navigate("/auth/register")}>
              Probar 14 días gratis
            </Button>
            <Button variant="outline" leadingIcon="groups" onClick={() => navigate("/landing/about")}>
              Conocer al equipo
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {LANDING_SERVICES.map((service) => (
            <FeatureService
              key={service.title}
              icon={service.icon}
              title={service.title}
              excerpt={service.excerpt}
              items={service.items}
              link={service.link}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="font-mono text-[10px] font-bold tracking-widest text-blue-300 uppercase">
            Cómo trabajamos
          </p>
          <Heading variant="h1" as="h2" className="mt-2 text-white">
            De cero a producción en tres pasos
          </Heading>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {PROCESS.map((item) => (
              <div key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <span aria-hidden="true" className="material-symbols-outlined text-2xl">
                      {item.icon}
                    </span>
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-500">{item.step}</span>
                </div>
                <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Heading variant="h2">Planes que escalan contigo</Heading>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {LANDING_PRICING.map((tier) => (
            <PricingTier
              key={tier.name}
              ribbon={tier.ribbon}
              eyebrow={tier.eyebrow}
              name={tier.name}
              price={tier.price}
              per={tier.per}
              features={tier.features}
              action={tier.action}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200/70 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <Heading variant="h2">Lo que dicen</Heading>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {LANDING_TESTIMONIALS.map((item) => (
              <Testimonial
                key={item.author}
                quote={item.quote}
                author={item.author}
                role={item.role}
                initials={item.initials}
                stars={item.stars}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
