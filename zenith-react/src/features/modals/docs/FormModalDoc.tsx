import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Select, TextInput } from '../../forms';
import { Modal } from '../components';
import { FORM_MODAL_HTML, FORM_MODAL_TSX } from '../snippets';

const ROLE_OPTIONS = [
  { value: 'admin', label: 'Lead Architect (Admin)' },
  { value: 'devops', label: 'DevOps Engineer' },
  { value: 'frontend', label: 'Frontend Developer' },
  { value: 'viewer', label: 'Viewer (Solo lectura)' },
];

export const FormModalDoc = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <ComponentDoc
      title="Modal formulario"
      description="Edición rápida con campos y submit que cierra al guardar."
      preview={
        <div className="w-full">
          <Button
            variant="secondary"
            leadingIcon="edit_document"
            onClick={() => setOpen(true)}
          >
            Modal Formulario de Edición
          </Button>
          <Modal open={open} onClose={close} size="base" showClose={false}>
            <h3 className="border-b border-slate-100 pb-3 text-base font-bold text-slate-900">
              Editar Usuario de Equipo
            </h3>
            <form
              className="mt-4 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                close();
              }}
            >
              <TextInput label="Nombre Completo" defaultValue="Jonathan Juárez" />
              <TextInput
                label="Correo Electrónico"
                type="email"
                defaultValue="jonathan.j@email.com"
              />
              <Select
                label="Rol de Acceso"
                defaultValue="admin"
                options={ROLE_OPTIONS}
              />
              <div className="flex justify-end gap-2 border-t border-slate-100 pt-3">
                <Button size="sm" variant="outline" type="button" onClick={close}>
                  Cancelar
                </Button>
                <Button size="sm" type="submit">
                  Actualizar Miembro
                </Button>
              </div>
            </form>
          </Modal>
        </div>
      }
      htmlCode={FORM_MODAL_HTML}
      jsxCode={FORM_MODAL_TSX}
    />
  );
}
