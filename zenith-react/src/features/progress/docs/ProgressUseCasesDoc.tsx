import { ComponentDoc } from '../../../shared/components/doc';
import { Progress } from '../components';
import { PROGRESS_USE_CASES_HTML, PROGRESS_USE_CASES_TSX } from '../snippets';

export const ProgressUseCasesDoc = () => {
  return (
    <ComponentDoc
      title="Progress — Casos de Uso"
      description="Ejemplos reales: formularios multi-paso, carga de archivos, procesos largos con estimación de tiempo."
      preview={
        <div className="space-y-6">
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Formulario de Registro</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Progreso del formulario</label>
                <Progress value={40} tone="primary" showLabel label="Paso 2 de 5" />
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Paso 2 de 5 completado</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Carga de Archivo</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-700 dark:text-slate-300">documento.pdf</span>
                <span className="text-slate-500 dark:text-slate-400">2.4 MB / 5.8 MB</span>
              </div>
              <Progress value={41} tone="info" size="medium" aria-label="Carga de documento.pdf" />
              <p className="text-xs text-slate-500 dark:text-slate-400">Subiendo... 41%</p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Proceso Largo - Exportación de Datos</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-700 dark:text-slate-300">Procesando registros...</span>
                <span className="text-slate-500 dark:text-slate-400">12,450 / 50,000</span>
              </div>
              <Progress
                value={25}
                tone="warning"
                variant="animated"
                striped
                size="large"
                aria-label="Exportación de datos"
              />
              <p className="text-xs text-slate-500 dark:text-slate-400">25% completado - Tiempo estimado: 2m 30s</p>
            </div>
          </div>
        </div>
      }
      htmlCode={PROGRESS_USE_CASES_HTML}
      jsxCode={PROGRESS_USE_CASES_TSX}
    />
  );
};