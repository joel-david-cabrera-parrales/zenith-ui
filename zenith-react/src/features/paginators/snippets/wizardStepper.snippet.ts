export const WIZARD_STEPPER_HTML = `<div class="flex items-center gap-3">
  <div class="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">✓</div>
  <div><div class="font-mono text-xs text-emerald-600">PASO 01 // OK</div><div class="text-sm font-semibold">Configuracion Base</div></div>
</div>
<div class="flex items-center gap-3">
  <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
  <div><div class="font-mono text-xs text-blue-600">PASO 02 // ACTIVO</div><div class="text-sm font-semibold">Validacion de Esquema</div></div>
</div>
<div class="flex items-center gap-3 opacity-60">
  <div class="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold">3</div>
  <div><div class="font-mono text-xs">PASO 03 // PENDIENTE</div><div class="text-sm font-semibold">Despliegue a Produccion</div></div>
</div>`;

export const WIZARD_STEPPER_TSX = `export const WizardStepper = () => {
  const [active, setActive] = useState(1);
  const steps = ["Configuracion Base", "Validacion de Esquema", "Despliegue a Produccion"];
  return (
    <div>
      {steps.map((s, i) => (
        <button key={s} onClick={() => setActive(i)} className={i === active ? "bg-blue-600 text-white" : "bg-slate-100"}>{s}</button>
      ))}
      <div className="flex items-center gap-2">
        <button onClick={() => setActive((v) => Math.max(0, v - 1))}>Anterior</button>
        <button onClick={() => setActive((v) => Math.min(steps.length - 1, v + 1))}>Continuar</button>
      </div>
    </div>
  );
};`;
