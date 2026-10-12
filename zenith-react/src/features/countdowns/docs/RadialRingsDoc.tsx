import { ComponentDoc } from '../../../shared/components/doc';
import { RadialRingsCountdown } from '../components';
import { RADIAL_RINGS_HTML, RADIAL_RINGS_TSX } from '../snippets';

export const RadialRingsDoc = () => (
  <ComponentDoc
    title="Anillos radiales SVG"
    description="VAR_02 vectorial (SEC_02.2): 4 medidores con stroke-dasharray y % restante vivo por unidad (días/semana, horas/día, min-hora, seg/minuto), segundos en rojo crítico."
    preview={
      <div className="w-full max-w-xl">
        <RadialRingsCountdown />
      </div>
    }
    htmlCode={RADIAL_RINGS_HTML}
    jsxCode={RADIAL_RINGS_TSX}
  />
);
