import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Select, TextInput } from '../../forms';
import { Drawer } from '../components';
import { CLUSTER_DRAWER_HTML, CLUSTER_DRAWER_TSX } from '../snippets';

const CPU_OPTIONS = [
  { value: '4', label: '4 vCPU - 16 GB RAM' },
  { value: '8', label: '8 vCPU - 32 GB RAM (Recomendado)' },
  { value: '16', label: '16 vCPU - 64 GB RAM' },
];

export function ClusterDrawerDoc() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <ComponentDoc
      title="Drawer ancho de clúster"
      description="Panel derecho amplio (640px) con formulario complejo de infraestructura."
      preview={
        <div className="w-full">
          <Button variant="outline" leadingIcon="view_sidebar" onClick={() => setOpen(true)}>
            Drawer Ancho / Formulario Complejo (Right - 640px)
          </Button>
          <Drawer
            open={open}
            onClose={close}
            width="wide"
            icon="settings_suggest"
            title="Configuración Avanzada de Clúster"
            subtitle="Drawer Ancho (640px) // Formulario Complejo"
            footer={
              <>
                <Button size="sm" variant="outline" onClick={close}>
                  Cancelar
                </Button>
                <Button size="sm" onClick={close}>
                  Guardar y Desplegar
                </Button>
              </>
            }
          >
            <div className="grid grid-cols-2 gap-4">
              <TextInput
                label="Identificador de Instancia"
                defaultValue="zenith-node-prod-alpha"
                className="font-mono text-xs"
              />
              <Select
                label="Capacidad de CPU Asignada"
                defaultValue="8"
                options={CPU_OPTIONS}
              />
            </div>
            <TextInput
              label="URL de Webhook Notificaciones"
              type="url"
              placeholder="https://api.tuempresa.com/hooks/zenith"
            />
            <div>
              <span className="mb-1 block font-medium text-slate-700">
                Variables de Entorno (JSON / Claves)
              </span>
              <div className="space-y-1 rounded-xl bg-slate-900 p-3 font-mono text-[11px]">
                <p className="text-emerald-400">PORT=8080</p>
                <p className="text-blue-400">NODE_ENV="production"</p>
                <p className="text-slate-400">MAX_CONNECTIONS=5000</p>
              </div>
            </div>
          </Drawer>
        </div>
      }
      htmlCode={CLUSTER_DRAWER_HTML}
      jsxCode={CLUSTER_DRAWER_TSX}
    />
  );
}
