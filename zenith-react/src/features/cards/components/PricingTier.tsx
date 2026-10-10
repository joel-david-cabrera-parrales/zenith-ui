import type { HTMLAttributes } from 'react';

export interface PricingTierProps extends HTMLAttributes<HTMLDivElement> {
  ribbon?: string;
  eyebrow?: string;
  name?: string;
  price?: string;
  per?: string;
  features?: string[];
  action?: string;
}

export const PricingTier = ({
  ribbon = 'RECOMMENDED',
  eyebrow = 'PLATFORM TIER',
  name = 'Developer Scale',
  price = '$189',
  per = '/ cluster / month',
  features = [
    '50M events / month included',
    'Dedicated isolated edge gateway',
    'Custom telemetry retention (90d)',
    '24/7 SRE escalation channel',
  ],
  action = 'Provision Cluster',
  className = '',
  ...rest
}: PricingTierProps) => {
  return (
    <div
      className={`bg-white border-2 border-blue-600 rounded-xl p-5 shadow-md flex flex-col justify-between relative overflow-hidden ${className}`}
      {...rest}
    >
      <div className="absolute -right-12 top-5 rotate-45 bg-blue-600 text-white font-mono text-[9px] uppercase px-12 py-0.5 text-center shadow-sm">
        {ribbon}
      </div>
      <div>
        <div className="mb-3">
          <span className="font-mono text-[9px] text-blue-600 uppercase font-bold tracking-wider">
            {eyebrow}
          </span>
          <h3 className="text-sm font-bold text-slate-900">{name}</h3>
        </div>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-2xl font-bold text-slate-900 tracking-tight">
            {price}
          </span>
          <span className="text-xs text-slate-500">{per}</span>
        </div>
        <ul className="space-y-2.5 mb-5">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-xs text-slate-900"
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-emerald-600 text-[16px]"
              >
                check_circle
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          type="button"
          className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors text-center shadow-sm"
        >
          {action}
        </button>
      </div>
    </div>
  );
}
