import { ComponentDoc } from '../../../shared/components/doc';
import {
  CustomSelect,
  SearchSelect,
  Select,
  TagMultiSelect,
} from '../components';
import { LanguageSelect } from '@/shared/components/topbar/LanguageSelect';
import { SELECTS_HTML, SELECTS_TSX } from '../snippets';

const EVENT_OPTIONS = [
  { value: 'Conferencia Magistral', label: 'Conferencia Magistral' },
  { value: 'Taller Práctico / Workshop', label: 'Taller Práctico / Workshop' },
  { value: 'Comunidad / Meetup', label: 'Comunidad / Meetup' },
  { value: 'Hackathon Tecnológico', label: 'Hackathon Tecnológico' },
];

const ENV_OPTIONS = [
  {
    value: 'prod',
    label: 'Producción (América / Este)',
    dotClass: 'bg-green-700',
  },
  {
    value: 'staging',
    label: 'Staging (Europa / Central)',
    dotClass: 'bg-amber-500',
  },
  {
    value: 'dev',
    label: 'Desarrollo (Local / Sandbox)',
    dotClass: 'bg-blue-600',
  },
  {
    value: 'dr',
    label: 'Disaster Recovery (Asia / Tokio)',
    dotClass: 'bg-slate-500',
  },
];

const TECH_OPTIONS = [
  { value: 'react', label: 'React Framework', icon: 'code' },
  { value: 'next', label: 'Next.js App Router', icon: 'layers' },
  { value: 'vue', label: 'Vue.js', icon: 'deployed_code' },
  { value: 'tailwind', label: 'Tailwind CSS', icon: 'style' },
  { value: 'svelte', label: 'SvelteKit', icon: 'bolt' },
];

const TAG_OPTIONS = [
  { value: 'Frontend', label: 'Frontend', meta: 'UI / Client' },
  { value: 'Cloud API', label: 'Cloud API', meta: 'Backend' },
  { value: 'Base de Datos', label: 'Base de Datos', meta: 'Storage' },
  { value: 'DevOps', label: 'DevOps', meta: 'CI / CD' },
  { value: 'Seguridad', label: 'Seguridad', meta: 'Auth & IAM' },
];

export const SelectsDoc = () => {
  return (
    <ComponentDoc
      title="Selectores & dropdowns"
      description="Select nativo, custom con badge, con buscador y multiselección con tags."
      preview={
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <Select
            label="Select Nativo Estilizado"
            defaultValue="Hackathon Tecnológico"
            options={EVENT_OPTIONS}
          />
          <CustomSelect
            label="Custom Select con Badge"
            defaultValue="dev"
            options={ENV_OPTIONS}
          />
          <SearchSelect
            label="Select con Buscador"
            defaultValue="react"
            options={TECH_OPTIONS}
          />
          <TagMultiSelect
            label="Selector Múltiple (Multi-Select Tags)"
            defaultSelected={['Frontend', 'Cloud API']}
            options={TAG_OPTIONS}
          />
          <div className="sm:col-span-2">
            <LanguageSelect />
          </div>
        </div>
      }
      htmlCode={SELECTS_HTML}
      jsxCode={SELECTS_TSX}
    />
  );
}
