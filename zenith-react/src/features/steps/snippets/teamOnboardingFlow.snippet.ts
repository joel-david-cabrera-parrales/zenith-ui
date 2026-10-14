export const TEAM_ONBOARDING_FLOW_HTML = `
<div class="w-full space-y-4 rounded-lg border border-slate-200 bg-white p-4">
  <ol aria-label="Progreso de pasos" class="flex w-full items-start">
    <li class="flex flex-1 items-start">
      <span class="flex flex-col items-center gap-2 p-1 text-center">
        <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-600 text-white">
          <span aria-hidden="true" class="material-symbols-outlined text-[18px]">check</span>
        </span>
        <span class="block text-sm font-medium text-slate-900">Empresa</span>
      </span>
      <span aria-hidden="true" class="mx-2 mt-4 h-0.5 min-w-6 flex-1"><span class="block h-0.5 w-full bg-blue-600"></span></span>
    </li>
    <li class="flex flex-1 items-start" aria-current="step">
      <span class="flex flex-col items-center gap-2 p-1 text-center">
        <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100">
          <span aria-hidden="true" class="material-symbols-outlined text-[18px]">group</span>
        </span>
        <span class="block text-sm font-semibold text-blue-700">Equipo</span>
      </span>
      <span aria-hidden="true" class="mx-2 mt-4 h-0.5 min-w-6 flex-1"><span class="block h-0.5 w-full bg-slate-200"></span></span>
    </li>
    <li class="flex flex-none items-start">
      <span class="flex flex-col items-center gap-2 p-1 text-center">
        <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-400">03</span>
        <span class="block text-sm text-slate-400">Plan</span>
      </span>
    </li>
  </ol>
  <div class="rounded-md border border-slate-200 bg-slate-50 p-4">
    <p class="text-xs font-medium text-slate-700">Invitar por correo (simulado)</p>
    <p class="mt-2 text-sm text-slate-500">jonathan.j@email.com · Admin invitado</p>
  </div>
</div>
`;

export const TEAM_ONBOARDING_FLOW_TSX = `
import { useState } from 'react';

export const TeamOnboardingFlow = () => {
  const steps = [
    { label: 'Empresa', description: 'Datos básicos', icon: 'domain' },
    { label: 'Equipo', description: 'Invita miembros', icon: 'group' },
    { label: 'Plan', description: 'Elige suscripción', icon: 'credit_card' },
    { label: 'Listo', description: 'Confirma alta', icon: 'rocket_launch' },
  ];
  const [current, setCurrent] = useState(1);
  const [company, setCompany] = useState('Acme Central');
  const [email, setEmail] = useState('');
  const [members, setMembers] = useState(['jonathan.j@email.com']);
  const [plan, setPlan] = useState('growth');

  const addMember = () => {
    if (email.trim() === '') return;
    setMembers((prev) => [...prev, email.trim()]);
    setEmail('');
  };

  return (
    <div className="w-full space-y-4 rounded-lg border border-slate-200 bg-white p-4">
      <ol aria-label="Progreso de pasos" className="flex w-full items-start">
        {steps.map((step, index) => {
          const status = index < current ? 'completed' : index === current ? 'active' : 'pending';
          const isLast = index === steps.length - 1;
          const circle =
            status === 'completed'
              ? 'border-blue-600 bg-blue-600 text-white'
              : status === 'active'
                ? 'border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100'
                : 'border-slate-300 bg-white text-slate-400';
          return (
            <li key={step.label} aria-current={status === 'active' ? 'step' : undefined} className="flex flex-1 items-start last:flex-none">
              <button type="button" onClick={() => setCurrent(index)} className="flex flex-col items-center gap-2 p-1 text-center">
                <span aria-hidden="true" className={'flex h-8 w-8 items-center justify-center rounded-full border-2 ' + circle}>
                  {status === 'completed' ? (
                    <span className="material-symbols-outlined text-[18px]">check</span>
                  ) : status === 'active' ? (
                    <span className="material-symbols-outlined text-[18px]">{step.icon}</span>
                  ) : (
                    <span className="text-[13px] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                  )}
                </span>
                <span className="block text-sm font-medium text-slate-900">{step.label}</span>
              </button>
              {!isLast && (
                <span aria-hidden="true" className="mx-2 mt-4 h-0.5 min-w-6 flex-1">
                  <span className={'block h-0.5 w-full ' + (index < current ? 'bg-blue-600' : 'bg-slate-200')} />
                </span>
              )}
            </li>
          );
        })}
      </ol>
      {current === 0 && (
        <input value={company} onChange={(e) => setCompany(e.target.value)} aria-label="Empresa" className="w-full animate-step-panel-in rounded-md border px-2.5 py-1.5 text-sm" />
      )}
      {current === 1 && (
        <div className="flex animate-step-panel-in gap-2">
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nombre@empresa.io" aria-label="Correo" className="flex-1 rounded-md border px-2.5 py-1.5 text-sm" />
          <button type="button" onClick={addMember} className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white">
            Añadir
          </button>
        </div>
      )}
      {current === 2 && (
        <div className="flex animate-step-panel-in gap-2">
          {['starter', 'growth', 'scale'].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPlan(p)}
              className={plan === p ? 'flex-1 rounded-md border-2 border-blue-600 p-3 text-sm' : 'flex-1 rounded-md border p-3 text-sm'}
            >
              {p}
            </button>
          ))}
        </div>
      )}
      <ul className="text-sm text-slate-600">
        {members.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
      <div className="flex justify-between border-t border-slate-100 pt-3">
        <button type="button" onClick={() => setCurrent((c) => Math.max(0, c - 1))} className="rounded-md border px-3 py-1.5 text-sm">
          Anterior
        </button>
        <button type="button" onClick={() => setCurrent((c) => Math.min(steps.length - 1, c + 1))} className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white">
          Siguiente
        </button>
      </div>
    </div>
  );
};
`;
