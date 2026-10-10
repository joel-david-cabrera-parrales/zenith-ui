import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Drawer } from '../components';
import { NAV_DRAWER_HTML, NAV_DRAWER_TSX } from '../snippets';

const LINKS = [
  { icon: 'dashboard', label: 'Resumen Principal', active: true },
  { icon: 'database', label: 'Base de Datos & SQL', active: false },
  { icon: 'analytics', label: 'Métricas en Vivo', active: false },
  { icon: 'security', label: 'Seguridad & Logs', active: false },
  { icon: 'tune', label: 'Parámetros del Sistema', active: false },
];

export function NavDrawerDoc() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <ComponentDoc
      title="Drawer de navegación"
      description="Panel izquierdo angosto con menú contextual y tarjeta de usuario."
      preview={
        <div className="w-full">
          <Button variant="outline" leadingIcon="dock_to_left" onClick={() => setOpen(true)}>
            Drawer Izquierdo (Left Navigation)
          </Button>
          <Drawer
            open={open}
            onClose={close}
            side="left"
            width="narrow"
            title="Navegación Lateral"
            footer={
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-700">
                  JJ
                </div>
                <div className="truncate">
                  <p className="truncate text-xs font-semibold text-slate-900">
                    Jonathan Juárez
                  </p>
                  <p className="font-mono text-[10px] text-slate-400">
                    jonathan.j@email.com
                  </p>
                </div>
              </div>
            }
          >
            <div className="space-y-2">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className={
                    link.active
                      ? 'flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2 font-semibold text-blue-700'
                      : 'flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-slate-600 hover:bg-slate-50'
                  }
                >
                  <span aria-hidden="true" className="material-symbols-outlined text-base">
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </Drawer>
        </div>
      }
      htmlCode={NAV_DRAWER_HTML}
      jsxCode={NAV_DRAWER_TSX}
    />
  );
}
