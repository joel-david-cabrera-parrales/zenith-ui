import { ComponentDoc } from '../../../shared/components/doc';
import { TeamOnboardingFlow } from '../components';
import { TEAM_ONBOARDING_FLOW_HTML, TEAM_ONBOARDING_FLOW_TSX } from '../snippets';

export const TeamOnboardingFlowDoc = () => {
  return (
    <ComponentDoc
      title="Onboarding de equipo elaborado"
      description="Alta SaaS simulada: empresa con tamaño, invitaciones con añadir/quitar, plan con facturación mensual/anual y pantalla de éxito."
      preview={<TeamOnboardingFlow />}
      htmlCode={TEAM_ONBOARDING_FLOW_HTML}
      jsxCode={TEAM_ONBOARDING_FLOW_TSX}
      maxWidth="4xl"
    />
  );
};
