import { useNavigate } from "react-router";
import { useTranslation } from "@/shared/hooks/useTranslation";
import { Button } from "@/features/botones/components/Button";
import { Heading } from "@/features/headings/components/Heading";
import { BodyText } from "@/features/headings/components/BodyText";
import { FeatureService } from "@/features/cards/components/FeatureService";
import { PricingTier } from "@/features/cards/components/PricingTier";
import { Testimonial } from "@/features/cards/components/Testimonial";
import {
  LANDING_LOGOS,
  LANDING_PRICING,
  LANDING_SERVICES,
  LANDING_STATS,
  LANDING_TESTIMONIALS,
} from "../mocks/landing.mock";

export const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div>
      {/* HERO premium oscuro */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-blue-300 uppercase">
              <span aria-hidden="true" className="material-symbols-outlined text-sm">
                rocket_launch
              </span>
              {t('pages.landing.home.badge')}
            </p>
            <Heading variant="display-xl" as="h1" className="mt-4 text-white">
              {t('pages.landing.home.heroTitle')}
            </Heading>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
              {t('pages.landing.home.heroDesc')}
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Button size="lg" trailingIcon="arrow_forward" onClick={() => navigate("/auth/register")}>
                {t('pages.landing.home.ctaPrimary')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/10"
                leadingIcon="play_circle"
                onClick={() => navigate("/landing/services")}
              >
                {t('pages.landing.home.ctaSecondary')}
              </Button>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {LANDING_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="order-2 mt-1 block text-xs text-slate-400">{stat.label}</dt>
                  <dd className="text-xl font-bold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual: mini consola construida con utilidades */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-300">
                LIVE · EU-1
              </span>
            </div>
            <div className="mt-4 rounded-xl bg-slate-950 p-4 font-mono text-xs leading-relaxed">
              <p className="text-slate-500">$ zenith deploy --cluster eu-1</p>
              <p className="text-emerald-300">✓ 48 réplicas programadas en 2.1s</p>
              <p className="text-emerald-300">✓ canary 5% → 50% → 100% sin errores</p>
              <p className="text-blue-300">→ P99: 140ms → 18ms</p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { icon: "bolt", value: "2.4M/s", label: "eventos" },
                { icon: "database", value: "48", label: "réplicas" },
                { icon: "shield", value: "0", label: "incidentes" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                  <span aria-hidden="true" className="material-symbols-outlined text-lg text-blue-300">
                    {item.icon}
                  </span>
                  <p className="mt-1 text-sm font-bold text-white">{item.value}</p>
                  <p className="text-[11px] text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-5 sm:px-6">
            {LANDING_LOGOS.map((logo) => (
              <span key={logo} className="text-sm font-bold tracking-wide text-slate-500">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase">
          {t('pages.landing.home.featuresBadge')}
        </p>
        <Heading variant="h1" className="mt-2 max-w-2xl">
          {t('pages.landing.home.featuresTitle')}
        </Heading>
        <BodyText size="lead" className="mt-3 max-w-2xl">
          {t('pages.landing.home.featuresDesc')}
        </BodyText>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Pricing */}
      <section className="border-y border-slate-200/70 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase">
            {t('pages.landing.home.pricingBadge')}
          </p>
          <Heading variant="h1" className="mt-2">
            {t('pages.landing.home.pricingTitle')}
          </Heading>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
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
        </div>
      </section>

      {/* Testimonios */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="font-mono text-[10px] font-bold tracking-widest text-blue-600 uppercase">
          {t('pages.landing.home.testimonialsBadge')}
        </p>
        <Heading variant="h1" className="mt-2">
          {t('pages.landing.home.testimonialsTitle')}
        </Heading>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
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

        <div className="mt-10 overflow-hidden rounded-3xl bg-blue-600 px-6 py-10 text-center text-white shadow-xl sm:px-12">
          <Heading variant="h1" as="h2" className="text-white">
            {t('pages.landing.home.ctaBannerTitle')}
          </Heading>
          <p className="mx-auto mt-3 max-w-xl text-blue-100">
            {t('pages.landing.home.ctaBannerDesc')}
          </p>
          <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              trailingIcon="arrow_forward"
              onClick={() => navigate("/auth/register")}
            >
              {t('pages.landing.home.ctaBannerPrimary')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10"
              onClick={() => navigate("/landing/about")}
            >
              {t('pages.landing.home.ctaBannerSecondary')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
