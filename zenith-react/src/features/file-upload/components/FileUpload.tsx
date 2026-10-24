import { useEffect, useId, useRef, useState } from 'react';

export type FileUploadVariant = 'simple' | 'multiple' | 'preview';
export type FileUploadStatus = 'idle' | 'uploading' | 'error' | 'success';

export interface FileUploadProps {
  label?: string;
  description?: string;
  name?: string;
  accept?: string;
  maxSize?: number;
  maxFiles?: number;
  multiple?: boolean;
  preview?: boolean;
  variant?: FileUploadVariant;
  status?: FileUploadStatus;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  onFilesChange?: (files: File[]) => void;
  className?: string;
}

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(' ');

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const acceptsFile = (file: File, accept: string): boolean => {
  const rules = accept.split(',').map((rule) => rule.trim().toLowerCase()).filter(Boolean);
  if (rules.length === 0) return true;

  return rules.some((rule) => {
    if (rule.startsWith('.')) return file.name.toLowerCase().endsWith(rule);
    if (rule.endsWith('/*')) return file.type.toLowerCase().startsWith(rule.slice(0, -1));
    return file.type.toLowerCase() === rule;
  });
};

const FileThumbnail = ({ file }: { file: File }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement || !file.type.startsWith('image/')) return;
    const objectUrl = URL.createObjectURL(file);
    imageElement.src = objectUrl;
    return () => {
      URL.revokeObjectURL(objectUrl);
      imageElement.removeAttribute('src');
    };
  }, [file]);

  if (!file.type.startsWith('image/')) {
    return (
      <span className="material-symbols-outlined text-[19px] text-blue-600 dark:text-blue-300">
        description
      </span>
    );
  }

  return <img ref={imageRef} alt="" className="h-full w-full rounded-lg object-cover" />;
};

export const FileUpload = ({
  label = 'Adjuntar archivos',
  description = 'Arrastra archivos aquí o selecciónalos desde tu dispositivo.',
  name,
  accept,
  maxSize = 5 * 1024 * 1024,
  maxFiles = 5,
  multiple: multipleProp,
  preview: previewProp,
  variant = 'simple',
  status,
  error,
  required = false,
  disabled = false,
  onFilesChange,
  className = '',
}: FileUploadProps) => {
  const id = useId();
  const inputId = `file-upload-${id}`;
  const descriptionId = `${inputId}-description`;
  const errorId = `${inputId}-error`;
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [localStatus, setLocalStatus] = useState<FileUploadStatus>('idle');
  const [localError, setLocalError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const multiple = multipleProp ?? variant !== 'simple';
  const showPreview = previewProp ?? variant === 'preview';
  const currentStatus = error ? 'error' : (status ?? localStatus);
  const currentError = error ?? localError;
  const statusLabel: Record<FileUploadStatus, string> = {
    idle: 'Listo para seleccionar',
    uploading: 'Procesando archivos…',
    error: currentError || 'No se pudieron validar los archivos.',
    success: 'Archivos listos',
  };
  const acceptedTypes = accept
    ?.split(',')
    .map((type) => type.trim())
    .filter(Boolean)
    .join(', ');

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  const syncNativeInput = (selectedFiles: File[]) => {
    if (!inputRef.current || typeof DataTransfer === 'undefined') return;
    const transfer = new DataTransfer();
    selectedFiles.forEach((file) => transfer.items.add(file));
    inputRef.current.files = transfer.files;
  };

  const processFiles = (incoming: File[]) => {
    if (disabled || incoming.length === 0) return;
    if (timerRef.current) clearTimeout(timerRef.current);

    const nextFiles = multiple ? [...files, ...incoming] : incoming.slice(0, 1);
    const tooMany = nextFiles.length > maxFiles;
    const oversized = nextFiles.find((file) => file.size > maxSize);
    const unsupported = accept ? nextFiles.find((file) => !acceptsFile(file, accept)) : undefined;

    if (tooMany || oversized || unsupported) {
      const message = tooMany
        ? `Puedes seleccionar hasta ${maxFiles} archivos.`
        : oversized
          ? `${oversized.name} supera el límite de ${formatFileSize(maxSize)}.`
          : `${unsupported?.name} no tiene un formato permitido.`;
      setLocalError(message);
      setLocalStatus('error');
      syncNativeInput(files);
      return;
    }

    syncNativeInput(nextFiles);
    setFiles(nextFiles);
    setLocalError('');
    setLocalStatus('uploading');
    onFilesChange?.(nextFiles);
    timerRef.current = setTimeout(() => setLocalStatus('success'), 700);
  };

  const removeFile = (index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const nextFiles = files.filter((_, fileIndex) => fileIndex !== index);
    setFiles(nextFiles);
    setLocalError('');
    setLocalStatus(nextFiles.length === 0 ? 'idle' : 'success');
    syncNativeInput(nextFiles);
    onFilesChange?.(nextFiles);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    processFiles(Array.from(event.dataTransfer.files));
  };

  const statusIcon = {
    idle: 'upload',
    uploading: 'progress_activity',
    error: 'error',
    success: 'check_circle',
  }[currentStatus];

  return (
    <div className={cx('w-full space-y-2', className)}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label htmlFor={inputId} className="text-xs font-semibold text-slate-700 dark:text-slate-200">
          {label}{required && <span className="ml-1 text-rose-600" aria-hidden="true">*</span>}
        </label>
        <span
          role="status"
          className={cx(
            'inline-flex items-center gap-1 text-[11px] font-medium',
            currentStatus === 'error'
              ? 'text-rose-600 dark:text-rose-300'
              : currentStatus === 'success'
                ? 'text-emerald-700 dark:text-emerald-300'
                : 'text-slate-500 dark:text-slate-400',
          )}
        >
          <span aria-hidden="true" className={cx('material-symbols-outlined text-[15px]', currentStatus === 'uploading' && 'animate-spin')}>
            {statusIcon}
          </span>
          {statusLabel[currentStatus]}
        </span>
      </div>

      <div
        onDragEnter={(event) => { event.preventDefault(); if (!disabled) setIsDragging(true); }}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={(event) => {
          if (event.currentTarget === event.target) setIsDragging(false);
        }}
        onDrop={handleDrop}
        className={cx(
          'rounded-xl border border-dashed transition-colors',
          isDragging
            ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-100 dark:bg-blue-950/40 dark:ring-blue-950'
            : currentStatus === 'error'
              ? 'border-rose-300 bg-rose-50/50 dark:border-rose-800 dark:bg-rose-950/20'
              : 'border-slate-300 bg-white hover:border-blue-400 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-700',
          disabled && 'cursor-not-allowed opacity-60',
        )}
      >
        <input
          ref={inputRef}
          id={inputId}
          name={name}
          type="file"
          accept={accept}
          multiple={multiple}
          required={required}
          disabled={disabled}
          aria-describedby={`${description ? descriptionId : ''} ${currentStatus === 'error' ? errorId : ''}`.trim() || undefined}
          aria-invalid={currentStatus === 'error'}
          className="sr-only"
          onChange={(event) => processFiles(Array.from(event.currentTarget.files ?? []))}
        />
        <label
          htmlFor={inputId}
          className={cx(
            'flex cursor-pointer flex-col items-center px-4 py-6 text-center sm:px-6 sm:py-8',
            disabled && 'cursor-not-allowed',
          )}
        >
          <span className={cx(
            'mb-3 flex h-11 w-11 items-center justify-center rounded-xl',
            isDragging ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-200' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
          )}>
            <span aria-hidden="true" className="material-symbols-outlined text-[22px]">cloud_upload</span>
          </span>
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            Suelta tus archivos aquí <span className="font-normal text-slate-500 dark:text-slate-400">o</span>{' '}
            <span className="text-blue-700 underline decoration-blue-300 underline-offset-2 dark:text-blue-300">explora</span>
          </span>
          {description && <span id={descriptionId} className="mt-1.5 max-w-lg text-xs leading-5 text-slate-500 dark:text-slate-400">{description}</span>}
          <span className="mt-2 text-[10px] text-slate-400 dark:text-slate-500">
            {acceptedTypes ? `${acceptedTypes} · ` : ''}Máx. {formatFileSize(maxSize)}{multiple ? ` · Hasta ${maxFiles} archivos` : ''}
          </span>
        </label>
      </div>

      {currentStatus === 'error' && (
        <p id={errorId} className="flex items-start gap-1.5 text-xs text-rose-600 dark:text-rose-300">
          <span aria-hidden="true" className="material-symbols-outlined text-[16px]">info</span>
          {currentError || statusLabel.error}
        </p>
      )}

      {files.length > 0 && (
        <ul aria-label="Archivos seleccionados" className="space-y-2">
          {files.map((file, index) => (
            <li key={`${file.name}-${file.lastModified}-${index}`} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-2.5 dark:border-slate-700 dark:bg-slate-900">
              {showPreview ? (
                <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-blue-50 dark:bg-blue-950/50">
                  <FileThumbnail file={file} />
                </span>
              ) : (
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                  <span aria-hidden="true" className="material-symbols-outlined text-[19px] text-slate-500 dark:text-slate-300">description</span>
                </span>
              )}
              <span className="min-w-0 flex-1">
                <span className="block truncate text-xs font-semibold text-slate-800 dark:text-slate-100">{file.name}</span>
                <span className="mt-0.5 block text-[10px] text-slate-500 dark:text-slate-400">{formatFileSize(file.size)}</span>
              </span>
              <button
                type="button"
                aria-label={`Quitar ${file.name}`}
                onClick={() => removeFile(index)}
                disabled={disabled}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-rose-50 hover:text-rose-600 focus-visible:outline-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-rose-950/40 dark:hover:text-rose-300"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
