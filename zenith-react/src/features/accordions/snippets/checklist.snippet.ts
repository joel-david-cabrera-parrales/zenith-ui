export const CHECKLIST_HTML = `
<div class="rounded-xl border border-slate-200 bg-white">
  <button type="button" aria-expanded="true" class="flex w-full items-center justify-between gap-3 rounded-t-xl bg-blue-50/60 px-4 py-3 text-left text-sm font-semibold text-slate-900">Paso 2 de 3 — Conecta tus fuentes</button>
  <div class="space-y-3 px-4 pb-4">
    <div>
      <div class="flex justify-between font-mono text-[10px] font-semibold text-slate-500"><span>PROGRESO 67%</span><span>2/3</span></div>
      <div class="mt-1 h-2 overflow-hidden rounded-full bg-slate-100"><div class="h-full w-2/3 rounded-full bg-blue-600"></div></div>
    </div>
    <label class="flex items-center gap-2 text-sm text-slate-700"><input type="checkbox" checked class="h-4 w-4 accent-blue-600"/> Crear API key de producción</label>
    <label class="flex items-center gap-2 text-sm text-slate-700"><input type="checkbox" checked class="h-4 w-4 accent-blue-600"/> Invitar a 2 compañeros</label>
    <label class="flex items-center gap-2 text-sm text-slate-700"><input type="checkbox" class="h-4 w-4 accent-blue-600"/> Programar primer despliegue</label>
  </div>
</div>
`;

export const CHECKLIST_TSX = `
import { useId, useState } from 'react';

export const ChecklistAccordion = () => {
  const [open, setOpen] = useState(true);
  const [checks, setChecks] = useState([
    { id: 'key', label: 'Crear API key de producción', done: true },
    { id: 'invite', label: 'Invitar a 2 compañeros', done: true },
    { id: 'deploy', label: 'Programar primer despliegue', done: false },
  ]);
  const baseId = useId();
  const doneCount = checks.filter((step) => step.done).length;
  const percent = Math.round((doneCount / checks.length) * 100);
  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      <button type="button" aria-expanded={open} onClick={() => setOpen((prev) => !prev)} className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900">
        <span>Paso 2 de 3 — Conecta tus fuentes</span>
        <span aria-hidden="true" className={open ? 'material-symbols-outlined rotate-180 text-[20px] text-blue-600 transition-transform duration-300 ease-in-out' : 'material-symbols-outlined text-[20px] text-slate-400 transition-transform duration-300 ease-in-out'}>expand_more</span>
      </button>
      <div role="region" inert={!open} className={'grid transition-all duration-300 ease-in-out motion-reduce:transition-none ' + (open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
        <div className="overflow-hidden">
          <div className="space-y-3 px-4 pb-4">
          <div>
            <div className="flex justify-between font-mono text-[10px] font-semibold text-slate-500"><span>PROGRESO {percent}%</span><span>{doneCount}/{checks.length}</span></div>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-blue-600" style={{ width: percent + '%' }} />
            </div>
          </div>
          {checks.map((step) => (
            <label key={step.id} className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" checked={step.done} onChange={() => setChecks((prev) => prev.map((s) => (s.id === step.id ? { ...s, done: !s.done } : s)))} className="h-4 w-4 accent-blue-600" />
              {step.label}
            </label>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};
`;
