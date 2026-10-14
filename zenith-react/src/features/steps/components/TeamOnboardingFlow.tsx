import { useId, useState } from 'react';
import { Steps } from './Steps';

const ONBOARDING_STEPS = [
  { label: 'Empresa', description: 'Datos básicos', icon: 'domain' },
  { label: 'Equipo', description: 'Invita miembros', icon: 'group' },
  { label: 'Plan', description: 'Elige suscripción', icon: 'credit_card' },
  { label: 'Listo', description: 'Confirma alta', icon: 'rocket_launch' },
];

const PLANS = [
  { id: 'starter', name: 'Starter', price: '12 €/mes', detail: 'Hasta 5 miembros · 10 GB', icon: 'rocket_launch' },
  { id: 'growth', name: 'Growth', price: '29 €/mes', detail: 'Hasta 25 miembros · 100 GB', icon: 'trending_up' },
  { id: 'scale', name: 'Scale', price: '79 €/mes', detail: 'Ilimitado · SSO · SLA', icon: 'domain' },
];

export const TeamOnboardingFlow = () => {
  const [current, setCurrent] = useState(0);
  const [company, setCompany] = useState('Acme Central');
  const [size, setSize] = useState('11-50');
  const [email, setEmail] = useState('mariana.s@zenith.io');
  const [members, setMembers] = useState<string[]>(['jonathan.j@email.com']);
  const [plan, setPlan] = useState('growth');
  const [billing, setBilling] = useState('monthly');
  const [done, setDone] = useState(false);
  const formId = useId();

  const addMember = () => {
    const value = email.trim();
    if (value === '' || members.includes(value)) return;
    setMembers((prev) => [...prev, value]);
    setEmail('');
  };

  const removeMember = (value: string) => {
    setMembers((prev) => prev.filter((m) => m !== value));
  };

  const canGoNext = () => {
    if (current === 0) return company.trim() !== '';
    if (current === 1) return members.length > 0;
    return true;
  };

  const next = () => {
    if (!canGoNext()) return;
    if (current === 3) {
      setDone(true);
      return;
    }
    setCurrent((c) => Math.min(ONBOARDING_STEPS.length - 1, c + 1));
  };

  const prev = () => {
    setDone(false);
    setCurrent((c) => Math.max(0, c - 1));
  };

  const activePlan = PLANS.find((p) => p.id === plan);

  return (
    <div className="w-full space-y-4 rounded-lg border border-slate-200 bg-white p-4">
      <Steps steps={ONBOARDING_STEPS} current={current} onStepChange={(i) => { setDone(false); setCurrent(i); }} />
      {done ? (
        <div className="rounded-md border border-blue-200 bg-blue-50 p-4 text-center">
          <span aria-hidden="true" className="material-symbols-outlined text-[28px] text-blue-600">celebration</span>
          <h3 className="mt-1 text-sm font-semibold text-slate-900">{company} listo para despegar</h3>
          <p className="mt-1 text-sm text-slate-500">
            {members.length + 1} licencias · {activePlan?.name} {billing === 'yearly' ? 'anual (-20%)' : 'mensual'}
          </p>
          <button
            type="button"
            onClick={() => { setDone(false); setCurrent(0); }}
            className="mt-3 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-white"
          >
            Crear otro workspace
          </button>
        </div>
      ) : (
        <>
          {current === 0 && (
            <div className="grid animate-step-panel-in gap-3 rounded-md border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor={`${formId}-company`} className="text-xs font-medium text-slate-700">Nombre de la empresa</label>
                <input id={`${formId}-company`} value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <span className="text-xs font-medium text-slate-700">Tamaño del equipo</span>
                <div className="mt-1 flex flex-wrap gap-2">
                  {['1-10', '11-50', '51-200', '+200'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSize(opt)}
                      aria-pressed={size === opt}
                      className={size === opt ? 'rounded-full border-2 border-blue-600 bg-white px-3 py-1 text-xs font-medium text-blue-700' : 'rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-600 hover:bg-slate-50'}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          {current === 1 && (
            <div className="animate-step-panel-in rounded-md border border-slate-200 bg-slate-50 p-4">
              <label htmlFor={`${formId}-email`} className="text-xs font-medium text-slate-700">Invitar por correo (simulado)</label>
              <div className="mt-1 flex gap-2">
                <input
                  id={`${formId}-email`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') addMember(); }}
                  placeholder="nombre@empresa.io"
                  className="flex-1 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm"
                />
                <button type="button" onClick={addMember} className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700">Añadir</button>
              </div>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[11px] font-semibold text-white">AL</span>
                  <span className="font-medium text-slate-900">Ada Lovelace</span>
                  <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[11px] text-slate-600">Admin</span>
                </li>
                {members.map((m) => (
                  <li key={m} className="flex items-center gap-2 text-sm">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-300 text-[11px] font-semibold text-slate-700">{m.slice(0, 2).toUpperCase()}</span>
                    <span className="flex-1 truncate text-slate-700">{m}</span>
                    <button type="button" onClick={() => removeMember(m)} aria-label={`Quitar ${m}`} className="text-xs font-medium text-red-600 hover:underline">Quitar</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {current === 2 && (
            <div className="animate-step-panel-in space-y-3">
              <div className="flex gap-2">
                {[
                  { id: 'monthly', label: 'Mensual' },
                  { id: 'yearly', label: 'Anual −20%' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setBilling(opt.id)}
                    aria-pressed={billing === opt.id}
                    className={billing === opt.id ? 'rounded-md border-2 border-blue-600 bg-white px-3 py-1.5 text-xs font-medium text-blue-700' : 'rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50'}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <div className="grid gap-2 sm:grid-cols-3">
                {PLANS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlan(p.id)}
                    aria-pressed={plan === p.id}
                    className={plan === p.id ? 'rounded-md border-2 border-blue-600 bg-white p-3 text-left' : 'rounded-md border border-slate-200 bg-white p-3 text-left hover:bg-slate-50'}
                  >
                    <span aria-hidden="true" className="material-symbols-outlined text-[20px] text-blue-600">{p.icon}</span>
                    <span className="mt-1 block text-sm font-semibold text-slate-900">{p.name}</span>
                    <span className="block text-sm font-medium text-blue-700">{p.price}</span>
                    <span className="mt-0.5 block text-xs text-slate-500">{p.detail}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          {current === 3 && (
            <div className="animate-step-panel-in rounded-md border border-slate-200 p-4 text-sm">
              <p className="font-semibold text-slate-900">Confirma el alta de {company || 'tu empresa'}</p>
              <p className="mt-1 text-slate-600">Equipo: {size} · {members.length + 1} licencias (tú + {members.length} invitados)</p>
              <p className="mt-1 text-slate-600">Plan {activePlan?.name} · {billing === 'yearly' ? 'facturación anual' : 'facturación mensual'} · {activePlan?.price}</p>
            </div>
          )}
          <div className="flex items-center justify-between border-t border-slate-100 pt-3">
            <button type="button" onClick={prev} disabled={current === 0} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40">Anterior</button>
            <p className="text-xs tabular-nums text-slate-500">Paso {current + 1} de {ONBOARDING_STEPS.length}</p>
            <button type="button" onClick={next} disabled={!canGoNext()} className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-40">
              {current === 3 ? 'Crear workspace' : 'Siguiente'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
