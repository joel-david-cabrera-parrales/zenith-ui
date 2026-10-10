export const STEP_DOTS_HTML = `
<div class="flex items-center gap-2">
  <button class="w-8 h-2 rounded-full bg-blue-400"></button>
  <button class="w-8 h-2 rounded-full bg-blue-400"></button>
  <button class="w-12 h-2.5 rounded-full bg-blue-600"></button>
  <button class="w-8 h-2 rounded-full bg-slate-300"></button>
  <button class="w-8 h-2 rounded-full bg-slate-300"></button>
</div>
<div class="font-mono text-sm">DIAPOSITIVA <span class="font-bold text-blue-600">03</span> / 05</div>
`;

export const STEP_DOTS_TSX = `
export const StepDots = () => {
  const [active, setActive] = useState(2);
  const total = 5;
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={i === active ? 'w-12 h-2.5 rounded-full bg-blue-600' : 'w-8 h-2 rounded-full bg-slate-300'}
        />
      ))}
      <span>
        Diapositiva {active + 1} / {total}
      </span>
    </div>
  );
};
`;
