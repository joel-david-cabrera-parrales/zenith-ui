const CHECKOUT_STEPS = ['Entrega', 'Envío', 'Pago'];

export const ShopCheckoutProgress = ({ currentStep }: { currentStep: number }) => (
  <nav aria-label="Progreso de compra" className="w-full">
    <ol className="grid grid-cols-3">
      {CHECKOUT_STEPS.map((label, index) => {
        const step = index + 1;
        const isComplete = step < currentStep;
        const isCurrent = step === currentStep;
        return (
          <li key={label} className="relative flex flex-col items-center text-center">
            {index < CHECKOUT_STEPS.length - 1 && (
              <span aria-hidden="true" className="absolute left-1/2 top-4 h-px w-full bg-slate-200">
                <span className={`block h-full bg-sky-600 transition-[width] duration-500 ${step < currentStep ? 'w-full' : 'w-0'}`} />
              </span>
            )}
            <span
              aria-current={isCurrent ? 'step' : undefined}
              className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300 ${
                isComplete ? 'border-sky-600 bg-sky-600 text-white' : isCurrent ? 'border-sky-600 bg-white text-sky-700 ring-4 ring-sky-100' : 'border-slate-300 bg-white text-slate-400'
              }`}
            >
              {isComplete ? <span className="material-symbols-outlined text-[17px]">check</span> : `0${step}`}
            </span>
            <span className={`mt-2 text-xs font-medium sm:text-sm ${isCurrent ? 'text-slate-900' : isComplete ? 'text-sky-800' : 'text-slate-400'}`}>{label}</span>
          </li>
        );
      })}
    </ol>
  </nav>
);
