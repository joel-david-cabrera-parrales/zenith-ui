import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Tabs } from '../components';
import type { TabItem } from '../components';
import { SETTINGS_TABS_HTML, SETTINGS_TABS_TSX } from '../snippets';

export const SettingsTabsDoc = () => {
  const [name, setName] = useState('Zenith UI');
  const [twoFactor, setTwoFactor] = useState(true);
  const [digest, setDigest] = useState('semanal');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2000);
  };

  const TABS: TabItem[] = [
    {
      id: 'cuenta',
      label: 'Cuenta',
      icon: 'person',
      content: (
        <div className="max-w-md space-y-3">
          <div>
            <label htmlFor="tabs-project-name" className="text-sm font-medium text-slate-900">
              Nombre del proyecto
            </label>
            <input
              id="tabs-project-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-600"
            />
          </div>
          <p className="text-xs text-slate-500">Vista previa: {name === '' ? 'Sin nombre' : name}</p>
          <button
            type="button"
            onClick={handleSave}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            {saved ? 'Guardado ✓' : 'Guardar cambios'}
          </button>
        </div>
      ),
    },
    {
      id: 'seguridad',
      label: 'Seguridad',
      icon: 'lock',
      badge: twoFactor ? 'ON' : undefined,
      content: (
        <div className="flex max-w-md items-center justify-between gap-4">
          <div>
            <p className="font-medium text-slate-900">Verificación en dos pasos</p>
            <p className="text-xs text-slate-500">Exige un código además de la contraseña.</p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={twoFactor}
            aria-label="Verificación en dos pasos"
            onClick={() => setTwoFactor((value) => !value)}
            className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${twoFactor ? 'bg-blue-600' : 'bg-slate-200'}`}
          >
            <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${twoFactor ? 'left-[22px]' : 'left-0.5'}`} />
          </button>
        </div>
      ),
    },
    {
      id: 'notificaciones',
      label: 'Notificaciones',
      icon: 'notifications',
      content: (
        <fieldset className="max-w-md space-y-2">
          <legend className="font-medium text-slate-900">Resumen por correo ({digest})</legend>
          {['diario', 'semanal', 'nunca'].map((option) => (
            <label key={option} className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="radio"
                name="tabs-digest"
                value={option}
                checked={digest === option}
                onChange={() => setDigest(option)}
                className="accent-blue-600"
              />
              {option[0]?.toUpperCase() + option.slice(1)}
            </label>
          ))}
        </fieldset>
      ),
    },
    {
      id: 'equipo',
      label: 'Equipo',
      icon: 'group',
      badge: '24',
      content: (
        <div className="max-w-md">
          <p className="font-medium text-slate-900">24 miembros activos</p>
          <div className="mt-2 flex -space-x-2">
            {['MD', 'JR', 'KL', 'AS'].map((initials) => (
              <span
                key={initials}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white ring-2 ring-white"
              >
                {initials}
              </span>
            ))}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-[11px] font-semibold text-blue-700 ring-2 ring-white">
              +20
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <ComponentDoc
      title="Panel de ajustes (elaborado)"
      description="Buenas prácticas en una implementación real: una sola fuente de estado por panel, labels asociados con htmlFor, switch con role=switch y radios agrupados en fieldset. Cada pestaña conserva su estado al navegar."
      preview={
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4">
          <Tabs tabs={TABS} />
        </div>
      }
      htmlCode={SETTINGS_TABS_HTML}
      jsxCode={SETTINGS_TABS_TSX}
      maxWidth="4xl"
    />
  );
};
