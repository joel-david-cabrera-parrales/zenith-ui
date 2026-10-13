import { useId, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface ChecklistStep {
  id: string;
  label: string;
  done: boolean;
}

export interface ChecklistAccordionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  steps?: ChecklistStep[];
  note?: string;
}

const DEFAULT_STEPS: ChecklistStep[] = [
  { id: 'key', label: 'Crear API key de producción', done: true },
  { id: 'invite', label: 'Invitar a 2 compañeros', done: true },
  { id: 'deploy', label: 'Programar primer despliegue', done: false },
];

export const ChecklistAccordion = ({
  title = 'Paso 2 de 3 — Conecta tus fuentes',
  steps = DEFAULT_STEPS,
  note = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  className = '',
  ...rest
}: ChecklistAccordionProps) => {
  const [open, setOpen] = useState(true);
  const [checks, setChecks] = useState<ChecklistStep[]>(steps);
  const baseId = useId();
  const buttonId = `${baseId}-button`;
  const panelId = `${baseId}-panel`;

  const doneCount = checks.filter((step) => step.done).length;
  const percent = Math.round((doneCount / checks.length) * 100);

  const toggleStep = (id: string) => {
    setChecks((prev) => prev.map((step) => (step.id === id ? { ...step, done: !step.done } : step)));
  };

  return (
    <div className={`rounded-xl border border-slate-200 bg-white ${className}`} {...rest}>
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
        className={
          open
            ? 'flex w-full cursor-pointer items-center justify-between gap-3 rounded-t-xl bg-blue-50/60 px-4 py-3 text-left text-sm font-semibold text-slate-900'
            : 'flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50'
        }
      >
        <span className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={
              open
                ? 'material-symbols-outlined text-[18px] text-blue-600'
                : 'material-symbols-outlined text-[18px] text-slate-400'
            }
          >
            checklist
          </span>
          {title}
        </span>
        <span
          aria-hidden="true"
          className={
            open
              ? 'material-symbols-outlined rotate-180 text-[20px] text-blue-600 transition-transform duration-300 ease-in-out'
              : 'material-symbols-outlined text-[20px] text-slate-400 transition-transform duration-300 ease-in-out'
          }
        >
          expand_more
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!open}
        className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 px-4 pb-4">
          <div>
            <div className="flex justify-between font-mono text-[10px] font-semibold text-slate-500">
              <span>PROGRESO {percent}%</span>
              <span>
                {doneCount}/{checks.length}
              </span>
            </div>
            <div
              className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100"
              role="progressbar"
              aria-valuenow={percent}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${percent}%` }} />
            </div>
          </div>
          {checks.map((step) => (
            <label
              key={step.id}
              className="flex cursor-pointer items-center gap-2 text-sm text-slate-700"
            >
              <input
                type="checkbox"
                checked={step.done}
                onChange={() => toggleStep(step.id)}
                className="h-4 w-4 rounded border-slate-300 accent-blue-600"
              />
              {step.label}
            </label>
          ))}
          <p className="text-xs leading-relaxed text-slate-500">{note}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
