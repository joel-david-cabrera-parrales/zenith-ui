import { useCopyToClipboard } from '../../hooks';

export interface TerminalCommandProps {
  command: string;
  label?: string;
  accentPrefix?: string;
  copyLabel?: string;
  copiedLabel?: string;
  className?: string;
}

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(' ');

export const TerminalCommand = ({
  command,
  label = 'Terminal',
  accentPrefix,
  copyLabel = 'Copiar comando',
  copiedLabel = 'Comando copiado',
  className = '',
}: TerminalCommandProps) => {
  const { copied, copy } = useCopyToClipboard();
  const hasAccentPrefix = accentPrefix !== undefined && command.startsWith(`${accentPrefix} `);
  const commandSuffix = hasAccentPrefix
    ? command.slice(accentPrefix.length + 1)
    : command;

  return (
    <section
      aria-label={label}
      className={cx('overflow-hidden rounded-xl border-4 border-slate-950 bg-slate-950 p-0.5', className)}
    >
      <header className="flex h-8 items-center justify-between px-2.5">
        <span className="text-xs font-medium text-sky-300">{label}</span>
        <button
          type="button"
          aria-label={copied ? copiedLabel : copyLabel}
          title={copied ? copiedLabel : copyLabel}
          onClick={() => void copy(command)}
          className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-sky-400"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
            {copied ? 'check' : 'content_copy'}
          </span>
        </button>
      </header>
      <div
        tabIndex={0}
        aria-label="Comando, desplázate horizontalmente para ver el texto completo"
        className="terminal-command-scroll overflow-x-auto rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-4 sm:px-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
      >
        <pre className="min-w-max font-mono text-sm leading-6">
          <code>
            {hasAccentPrefix ? (
              <>
                <span className="text-fuchsia-400">{accentPrefix}</span>{' '}
                <span className="text-sky-300">{commandSuffix}</span>
              </>
            ) : (
              <span className="text-sky-300">{command}</span>
            )}
          </code>
        </pre>
      </div>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? copiedLabel : ''}
      </span>
    </section>
  );
};
