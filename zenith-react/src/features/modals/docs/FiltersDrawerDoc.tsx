import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Select, TextInput } from '../../forms';
import { Drawer } from '../components';
import { FILTERS_DRAWER_HTML, FILTERS_DRAWER_TSX } from '../snippets';

const SEVERITIES = ['Todos', 'Info / OK', 'Críticos'];

const SERVICES = [
  { value: 'auth', label: 'auth-service-v2', checked: true },
  { value: 'gateway', label: 'gateway-proxy', checked: true },
  { value: 'billing', label: 'billing-engine', checked: false },
];

const RANGE_OPTIONS = [
  { value: '24h', label: 'Últimas 24 horas' },
  { value: '7d', label: 'Últimos 7 días' },
  { value: '30d', label: 'Últimos 30 días' },
  { value: 'custom', label: 'Personalizado' },
];

export function FiltersDrawerDoc() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [severity, setSeverity] = useState('Todos');

  return (
    <ComponentDoc
      title="Drawer de filtros"
      description="Búsqueda avanzada con severidad, rango de tiempo y microservicios."
      preview={
        <div className="w-full">
          <Button variant="subtle" leadingIcon="filter_alt" onClick={() => setOpen(true)}>
            Drawer de Filtros & Búsqueda Avanzada
          </Button>
          <Drawer
            open={open}
            onClose={close}
            icon="filter_list"
            title="Filtros & Búsqueda Avanzada"
            subtitle="Búsqueda segmentada de eventos"
            footer={
              <>
                <Button size="sm" variant="outline" onClick={close}>
                  Restablecer
                </Button>
                <Button size="sm" onClick={close} className="flex-1 justify-center">
                  Aplicar Filtros
                </Button>
              </>
            }
          >
            <TextInput
              label="Término de búsqueda"
              placeholder="Buscar por token, usuario o IP..."
            />
            <div>
              <span className="mb-1.5 block font-medium text-slate-700">
                Nivel de Severidad
              </span>
              <div className="grid grid-cols-3 gap-2">
                {SEVERITIES.map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setSeverity(level)}
                    aria-pressed={severity === level}
                    className={
                      severity === level
                        ? 'rounded-lg border border-blue-500 bg-blue-50 px-2 py-1.5 text-center font-semibold text-blue-700'
                        : 'rounded-lg border border-slate-200 px-2 py-1.5 text-center font-medium text-slate-600 hover:border-slate-300'
                    }
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
            <Select
              label="Rango de Tiempo"
              defaultValue="24h"
              options={RANGE_OPTIONS}
            />
            <div>
              <span className="mb-1.5 block font-medium text-slate-700">
                Microservicio Destino
              </span>
              <div className="space-y-1.5 rounded-xl border border-slate-200 p-3">
                {SERVICES.map((service) => (
                  <label
                    key={service.value}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={service.checked}
                      className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                    />
                    <span className="text-slate-700">{service.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </Drawer>
        </div>
      }
      htmlCode={FILTERS_DRAWER_HTML}
      jsxCode={FILTERS_DRAWER_TSX}
    />
  );
}
