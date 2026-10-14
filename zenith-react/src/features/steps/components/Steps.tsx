export interface StepItem {
  label: string;
  description?: string;
  icon?: string;
  status?: 'error';
}

export interface StepsProps {
  steps?: StepItem[];
  current?: number;
  orientation?: 'horizontal' | 'vertical';
  onStepChange?: (index: number) => void;
  className?: string;
}

const DEFAULT_STEPS: StepItem[] = [
  { label: 'Cuenta', description: 'Crea tu cuenta', icon: 'person' },
  { label: 'Perfil', description: 'Completa tus datos', icon: 'badge' },
  { label: 'Plan', description: 'Elige tu plan', icon: 'credit_card' },
  { label: 'Confirmar', description: 'Revisa y confirma', icon: 'check_circle' },
];

const clampCurrent = (current: number, length: number): number => {
  if (length === 0) return 0;
  if (current < 0) return 0;
  if (current > length - 1) return length - 1;
  return current;
};

type StepStatus = 'completed' | 'active' | 'pending' | 'error';

const statusOf = (index: number, current: number, step: StepItem): StepStatus => {
  if (step.status === 'error') return 'error';
  if (index < current) return 'completed';
  if (index === current) return 'active';
  return 'pending';
};

const circleClassOf = (status: StepStatus): string => {
  if (status === 'completed') return 'border-blue-600 bg-blue-600 text-white';
  if (status === 'active') return 'border-blue-600 bg-white text-blue-600 ring-4 ring-blue-100';
  if (status === 'error') return 'border-red-600 bg-red-600 text-white';
  return 'border-slate-300 bg-white text-slate-400';
};

export const Steps = ({
  steps = DEFAULT_STEPS,
  current = 1,
  orientation = 'horizontal',
  onStepChange,
  className = '',
}: StepsProps) => {
  const safeCurrent = clampCurrent(current, steps.length);
  const clickable = onStepChange !== undefined;
  const isVertical = orientation === 'vertical';

  return (
    <ol
      aria-label="Progreso de pasos"
      className={isVertical ? `flex w-full flex-col gap-0 ${className}` : `flex w-full items-start ${className}`}
    >
      {steps.map((step, index) => {
        const status = statusOf(index, safeCurrent, step);
        const isLast = index === steps.length - 1;
        const label = step.icon ?? String(index + 1).padStart(2, '0');

        const circle = (
          <span
            key={`${index}-${status}`}
            aria-hidden="true"
            className={`flex h-8 w-8 shrink-0 animate-step-panel-in items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300 ${circleClassOf(status)} ${status === 'active' ? 'scale-105' : 'scale-100'}`}
          >
            {status === 'error' ? (
              <span className="material-symbols-outlined text-[18px]">close</span>
            ) : status === 'completed' ? (
              <span className="material-symbols-outlined text-[18px]">check</span>
            ) : step.icon && status !== 'pending' ? (
              <span className="material-symbols-outlined text-[18px]">{label}</span>
            ) : (
              <span className="text-[13px] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
            )}
          </span>
        );

        const texts = (
          <span className="min-w-0">
            <span
              className={
                status === 'error'
                  ? 'block truncate text-sm font-semibold text-red-700'
                  : status === 'pending'
                    ? 'block truncate text-sm font-medium text-slate-400'
                    : status === 'active'
                      ? 'block truncate text-sm font-semibold text-blue-700'
                      : 'block truncate text-sm font-medium text-slate-900'
              }
            >
              {step.label}
            </span>
            {step.description !== undefined && (
              <span className="mt-0.5 block truncate text-xs text-slate-500">{step.description}</span>
            )}
          </span>
        );

        if (isVertical) {
          const item = (
            <>
              <span className="flex items-start gap-3">
                {circle}
                {texts}
              </span>
              {!isLast && (
                <span aria-hidden="true" className="ml-4 flex h-8 w-px flex-col">
                  <span className={`w-px flex-1 transition-all duration-300 ${index < safeCurrent ? 'bg-blue-600' : 'bg-slate-200'}`} />
                </span>
              )}
            </>
          );

          return (
            <li
              key={step.label}
              aria-current={status === 'active' ? 'step' : undefined}
              className={!isLast ? 'pb-1' : ''}
            >
              {clickable ? (
                <button
                  type="button"
                  onClick={() => onStepChange(index)}
                  aria-label={`Ir al paso ${index + 1}: ${step.label}`}
                  className="w-full rounded-md p-1 text-left transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  {item}
                </button>
              ) : (
                <span className="block p-1">{item}</span>
              )}
            </li>
          );
        }

        return (
          <li key={step.label} aria-current={status === 'active' ? 'step' : undefined} className="flex flex-1 items-start last:flex-none">
            <span className="flex flex-col items-center gap-2 text-center">
              {clickable ? (
                <button
                  type="button"
                  onClick={() => onStepChange(index)}
                  aria-label={`Ir al paso ${index + 1}: ${step.label}`}
                  className="flex flex-col items-center gap-2 rounded-md p-1 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  {circle}
                  {texts}
                </button>
              ) : (
                <span className="flex flex-col items-center gap-2 p-1">
                  {circle}
                  {texts}
                </span>
              )}
            </span>
            {!isLast && (
              <span aria-hidden="true" className="mx-2 mt-4 h-0.5 min-w-6 flex-1">
                <span className={`block h-0.5 w-full transition-all duration-300 ${index < safeCurrent ? 'bg-blue-600' : 'bg-slate-200'}`} />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
};
