export interface FileDropzoneProps {
  label?: string;
  title: string;
  hint?: string;
  icon?: string;
}

export const FileDropzone = ({
  label,
  title,
  hint,
  icon = 'cloud_upload',
}: FileDropzoneProps) => {
  return (
    <div>
      {label !== undefined && (
        <span className="mb-1 block text-xs font-medium text-slate-600">
          {label}
        </span>
      )}
      <div className="cursor-pointer rounded-xl border-2 border-dashed border-slate-300 bg-white p-6 text-center transition-colors group hover:border-blue-600">
        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-blue-50">
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-blue-600"
          >
            {icon}
          </span>
        </div>
        <p className="text-sm font-medium text-slate-900">{title}</p>
        {hint !== undefined && (
          <p className="mt-1 font-mono text-[10px] font-semibold text-slate-500">
            {hint}
          </p>
        )}
      </div>
    </div>
  );
}
